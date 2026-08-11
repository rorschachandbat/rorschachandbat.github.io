const questionBank = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : [];
const storageKey = 'green-team-wins-progress-v4';
const typeNames = { choice2: '二选一', choice3: '三选一', fill: '填空题' };
const typeNotes = {
  choice2: '选一个你觉得大家最容易写下的答案。',
  choice3: '别想太久，直觉通常最接近多数。',
  fill: '和大家同时写下第一个想到的答案。',
};
const categoryOrder = [
  '日常', '美食', '娱乐', '个性', '旅行', '职场校园', '动漫', '电影', '脑洞',
  '科技未来', '游戏电竞', '运动竞技', '音乐', '社交友情', '恋爱关系', '历史文化', '动物自然', '奇妙生活',
];
const categories = [...new Set(questionBank.map((item) => item.category).filter(Boolean))]
  .sort((a, b) => (categoryOrder.indexOf(a) + 1 || 99) - (categoryOrder.indexOf(b) + 1 || 99));
const byId = new Map(questionBank.map((item, index) => [item.id || `row-${index}`, { ...item, id: item.id || `row-${index}` }]));
const allQuestions = [...byId.values()];

const state = {
  typeFilter: 'all',
  selectedCategories: new Set(categories),
  randomOrder: true,
  deck: [],
  currentIndex: 0,
  completed: 0,
};

const els = {
  answerArea: document.querySelector('#answerArea'),
  answerReveal: document.querySelector('#answerReveal'),
  categoryFilters: document.querySelector('#categoryFilters'),
  categoryName: document.querySelector('#categoryName'),
  questionCounter: document.querySelector('#questionCounter'),
  questionNote: document.querySelector('#questionNote'),
  questionText: document.querySelector('#questionText'),
  randomOrderToggle: document.querySelector('#randomOrderToggle'),
  resumeStatus: document.querySelector('#resumeStatus'),
  roundTotal: document.querySelector('#roundTotal'),
  roundDone: document.querySelector('#roundDone'),
  roundLeft: document.querySelector('#roundLeft'),
  typeBadge: document.querySelector('#typeBadge'),
  jumpForm: document.querySelector('#jumpForm'),
  jumpInput: document.querySelector('#jumpInput'),
  nextButton: document.querySelector('#nextButton'),
};

function randomize(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function readSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (!saved || typeof saved !== 'object') return null;
    return saved;
  } catch {
    return null;
  }
}

function writeSavedState() {
  const payload = {
    typeFilter: state.typeFilter,
    selectedCategories: [...state.selectedCategories],
    randomOrder: state.randomOrder,
    settingsKey: settingsKey(),
    deckIds: state.deck.map((item) => item.id),
    currentIndex: state.currentIndex,
    completed: state.completed,
  };
  try { localStorage.setItem(storageKey, JSON.stringify(payload)); } catch { /* file:// may disable storage */ }
  if (els.resumeStatus) {
    const current = state.deck.length ? Math.min(state.currentIndex + 1, state.deck.length) : 0;
    els.resumeStatus.textContent = current ? `已保存 · 下次从第 ${current} 题继续` : '进度会自动保存';
  }
}

function settingsKey() {
  return JSON.stringify({
    typeFilter: state.typeFilter,
    selectedCategories: [...state.selectedCategories].sort(),
    randomOrder: state.randomOrder,
  });
}

function eligibleQuestions() {
  return allQuestions.filter((item) => (
    (state.typeFilter === 'all' || item.type === state.typeFilter)
    && state.selectedCategories.has(item.category)
  ));
}

function updateTypeButtons() {
  document.querySelectorAll('.segment').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.filter === state.typeFilter);
  });
}

function renderCategoryFilters() {
  els.categoryFilters.innerHTML = '';
  categories.forEach((category) => {
    const label = document.createElement('label');
    label.className = 'category-option';
    label.innerHTML = `<input type="checkbox" value="${category}" ${state.selectedCategories.has(category) ? 'checked' : ''}><span>${category}</span>`;
    label.querySelector('input').addEventListener('change', (event) => {
      if (event.target.checked) state.selectedCategories.add(category);
      else state.selectedCategories.delete(category);
      startRound();
    });
    els.categoryFilters.append(label);
  });
}

function updateStats() {
  const total = state.deck.length;
  els.roundTotal.textContent = total;
  els.roundDone.textContent = state.completed;
  els.roundLeft.textContent = Math.max(total - state.completed, 0);
  els.jumpInput.max = Math.max(total, 1);
  els.jumpInput.disabled = total === 0;
  els.nextButton.disabled = total === 0;
}

function renderEmptyState() {
  els.questionCounter.textContent = 'QUESTION 00 / 00';
  els.categoryName.textContent = '未选择分类';
  els.typeBadge.textContent = '等待选择';
  els.questionText.textContent = '请至少勾选一个内容分类。';
  els.questionNote.textContent = '选择分类后，题目会立即生成。';
  els.answerArea.innerHTML = '';
  updateStats();
  writeSavedState();
}

function renderQuestion() {
  const current = state.deck[state.currentIndex];
  if (!current) { renderEmptyState(); return; }
  const number = String(state.currentIndex + 1).padStart(2, '0');
  els.questionCounter.textContent = `QUESTION ${number} / ${state.deck.length}`;
  els.categoryName.textContent = current.category;
  els.typeBadge.textContent = typeNames[current.type];
  els.questionText.textContent = current.q;
  els.questionNote.textContent = typeNotes[current.type];
  els.jumpInput.value = state.currentIndex + 1;
  els.answerArea.innerHTML = '';
  if (current.type === 'fill') renderFill(current); else renderOptions(current);
  updateStats();
}

function renderOptions(current) {
  const grid = document.createElement('div');
  grid.className = `options-grid${current.type === 'choice3' ? ' three' : ''}`;
  current.options.forEach((option, index) => {
    const optionCard = document.createElement('div');
    optionCard.className = 'option-button';
    optionCard.innerHTML = `<span class="option-index">${String.fromCharCode(65 + index)}</span>${option}`;
    grid.append(optionCard);
  });
  els.answerArea.append(grid);
}

function renderFill(current) {
  const hint = document.createElement('span');
  hint.className = 'fill-hint';
  hint.textContent = current.hint || '写下你第一个想到的答案';
  els.answerArea.append(hint);
}

function startRound({ keepPosition = false } = {}) {
  const eligible = eligibleQuestions();
  state.deck = state.randomOrder ? randomize(eligible) : eligible;
  if (!keepPosition) {
    state.currentIndex = 0;
    state.completed = 0;
  }
  updateTypeButtons();
  renderCategoryFilters();
  renderQuestion();
  writeSavedState();
}

function restoreSavedRound() {
  const saved = readSavedState();
  if (!saved) { startRound(); return; }
  if (['all', 'choice2', 'choice3', 'fill'].includes(saved.typeFilter)) state.typeFilter = saved.typeFilter;
  state.randomOrder = saved.randomOrder !== false;
  const savedCategories = Array.isArray(saved.selectedCategories) ? saved.selectedCategories : categories;
  state.selectedCategories = new Set(savedCategories.filter((category) => categories.includes(category)));
  els.randomOrderToggle.checked = state.randomOrder;
  const eligibleIds = new Set(eligibleQuestions().map((item) => item.id));
  const canRestore = saved.settingsKey === settingsKey()
    && Array.isArray(saved.deckIds)
    && saved.deckIds.length > 0
    && saved.deckIds.every((id) => eligibleIds.has(id));
  if (canRestore) {
    state.deck = saved.deckIds.map((id) => byId.get(id)).filter(Boolean);
    state.currentIndex = Math.min(Math.max(Number(saved.currentIndex) || 0, 0), state.deck.length - 1);
    state.completed = Math.min(Math.max(Number(saved.completed) || 0, 0), state.deck.length - 1);
    updateTypeButtons();
    renderCategoryFilters();
    renderQuestion();
    writeSavedState();
  } else {
    startRound();
  }
}

function nextQuestion() {
  if (!state.deck.length) return;
  if (state.currentIndex >= state.deck.length - 1) {
    startRound();
    return;
  }
  state.currentIndex += 1;
  state.completed = state.currentIndex;
  renderQuestion();
  writeSavedState();
}

document.querySelectorAll('.segment').forEach((button) => button.addEventListener('click', () => {
  state.typeFilter = button.dataset.filter;
  startRound();
}));
document.querySelector('#selectAllCategories').addEventListener('click', () => {
  state.selectedCategories = new Set(categories);
  startRound();
});
document.querySelector('#clearCategories').addEventListener('click', () => {
  state.selectedCategories.clear();
  startRound();
});
els.randomOrderToggle.addEventListener('change', (event) => {
  state.randomOrder = event.target.checked;
  startRound();
});
els.jumpForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const target = Number(els.jumpInput.value);
  if (!Number.isInteger(target) || target < 1 || target > state.deck.length) {
    els.jumpInput.focus();
    return;
  }
  state.currentIndex = target - 1;
  state.completed = target - 1;
  renderQuestion();
  writeSavedState();
});
document.querySelector('#shuffleButton').addEventListener('click', () => startRound());
document.querySelector('#skipButton').addEventListener('click', nextQuestion);
els.nextButton.addEventListener('click', nextQuestion);

els.roundTotal.textContent = questionBank.length;
els.randomOrderToggle.checked = state.randomOrder;
renderCategoryFilters();
restoreSavedRound();
