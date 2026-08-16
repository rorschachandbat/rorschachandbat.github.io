/* 自我记录前端：本地可编辑，博客静态页只读 */
(function () {
  const PERIODS = {
    day: { label: "日目标", short: "日" },
    week: { label: "周目标", short: "周" },
    month: { label: "月目标", short: "月" },
    year: { label: "年目标", short: "年" },
    once: { label: "长期目标", short: "长期" }
  };

  const state = {
    editable: false,
    tab: "game",
    period: "day",
    game: { version: 1, points: 0, goals: [], rewards: [], ledger: [] },
    notes: { version: 1, notes: [] },
    editingNoteId: null,
    previewOn: false
  };

  const $ = (id) => document.getElementById(id);

  function uid() {
    return "id_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function pad(n) { return String(n).padStart(2, "0"); }

  function formatDateTime(iso) {
    const d = iso ? new Date(iso) : new Date();
    if (Number.isNaN(d.getTime())) return "";
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) +
      " " + pad(d.getHours()) + ":" + pad(d.getMinutes());
  }

  function dateKey(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }

  function weekKey(d) {
    const day = (d.getDay() + 6) % 7;
    const monday = new Date(d.getFullYear(), d.getMonth(), d.getDate() - day);
    return "W" + dateKey(monday);
  }

  function periodKey(period, d) {
    const now = d || new Date();
    if (period === "day") return dateKey(now);
    if (period === "week") return weekKey(now);
    if (period === "month") return now.getFullYear() + "-" + pad(now.getMonth() + 1);
    if (period === "year") return String(now.getFullYear());
    return "once";
  }

  function periodCaption(period) {
    const now = new Date();
    if (period === "day") return "今天 " + dateKey(now);
    if (period === "week") {
      const day = (now.getDay() + 6) % 7;
      const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - day);
      const sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6);
      return "本周 " + dateKey(monday) + " ~ " + dateKey(sunday);
    }
    if (period === "month") return "本月 " + now.getFullYear() + " 年 " + (now.getMonth() + 1) + " 月";
    if (period === "year") return "今年 " + now.getFullYear() + " 年";
    return "不限周期，完成一次即可";
  }

  function toast(msg) {
    const el = $("toast");
    el.textContent = msg;
    el.classList.remove("is-hidden");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.add("is-hidden"), 2200);
  }

  function escapeHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderMarkdown(src) {
    const html = window.marked.parse(src || "", { breaks: true, gfm: true });
    return window.DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  }

  async function api(path, options) {
    const res = await fetch(path, options);
    if (!res.ok) throw new Error(path + " " + res.status);
    return res.json();
  }

  async function probeEditable() {
    try {
      const data = await api("/api/health");
      return !!data.editable;
    } catch (e) {
      return false;
    }
  }

  async function loadAll() {
    if (state.editable) {
      state.game = await api("/api/game");
      state.notes = await api("/api/notes");
      return;
    }
    const [game, notes] = await Promise.all([
      fetch("data/game.json?t=" + Date.now()).then((r) => r.json()),
      fetch("data/notes.json?t=" + Date.now()).then((r) => r.json())
    ]);
    state.game = game;
    state.notes = notes;
  }

  async function saveGame() {
    if (!state.editable) return;
    await api("/api/game", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.game)
    });
  }

  async function saveNotes() {
    if (!state.editable) return;
    await api("/api/notes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.notes)
    });
  }

  function isDone(goal) {
    const key = periodKey(goal.period);
    return (goal.completions || []).some((c) => c.key === key);
  }

  function addLedger(type, amount, label, refId) {
    state.game.ledger.unshift({
      id: uid(),
      type: type,
      amount: amount,
      label: label,
      refId: refId || "",
      at: new Date().toISOString()
    });
    if (state.game.ledger.length > 300) state.game.ledger.length = 300;
  }

  async function completeGoal(id) {
    const goal = state.game.goals.find((g) => g.id === id);
    if (!goal || goal.archived) return;
    const key = periodKey(goal.period);
    if (isDone(goal)) {
      goal.completions = (goal.completions || []).filter((c) => c.key !== key);
      state.game.points = Math.max(0, (state.game.points || 0) - (goal.points || 0));
      addLedger("spend", -(goal.points || 0), "撤销：" + goal.title, goal.id);
    } else {
      goal.completions = goal.completions || [];
      goal.completions.push({ key: key, at: new Date().toISOString() });
      state.game.points = (state.game.points || 0) + (goal.points || 0);
      addLedger("earn", goal.points || 0, "完成：" + goal.title, goal.id);
    }
    await saveGame();
    render();
  }

  async function redeemReward(id) {
    const reward = state.game.rewards.find((r) => r.id === id);
    if (!reward || reward.archived) return;
    const cost = reward.cost || 0;
    if ((state.game.points || 0) < cost) {
      toast("点数不够");
      return;
    }
    if (!confirm("兑换「" + reward.title + "」？将消耗 " + cost + " 点")) return;
    state.game.points -= cost;
    addLedger("spend", -cost, "兑换：" + reward.title, reward.id);
    reward.redeemed = (reward.redeemed || 0) + 1;
    await saveGame();
    render();
    toast("已兑换");
  }

  function openModal(title, fields, onSubmit) {
    $("modalTitle").textContent = title;
    const box = $("modalFields");
    box.innerHTML = fields.map((f) => {
      if (f.type === "select") {
        const opts = f.options.map((o) =>
          "<option value=\"" + o.value + "\"" + (o.value === f.value ? " selected" : "") + ">" + escapeHtml(o.label) + "</option>"
        ).join("");
        return "<div class=\"field\"><label>" + escapeHtml(f.label) + "</label><select name=\"" + f.name + "\">" + opts + "</select></div>";
      }
      if (f.type === "textarea") {
        return "<div class=\"field\"><label>" + escapeHtml(f.label) + "</label><textarea name=\"" + f.name + "\" rows=\"3\">" + escapeHtml(f.value || "") + "</textarea></div>";
      }
      return "<div class=\"field\"><label>" + escapeHtml(f.label) + "</label><input name=\"" + f.name + "\" type=\"" + (f.type || "text") + "\" value=\"" + escapeHtml(f.value || "") + "\"" + (f.required ? " required" : "") + "></div>";
    }).join("");
    $("modal").classList.remove("is-hidden");
    const form = $("modalForm");
    form.onsubmit = async (e) => {
      e.preventDefault();
      const data = {};
      new FormData(form).forEach((v, k) => { data[k] = v; });
      await onSubmit(data);
      $("modal").classList.add("is-hidden");
    };
  }

  function goalForm(goal) {
    openModal(goal ? "编辑目标" : "新目标", [
      { name: "title", label: "标题", value: goal ? goal.title : "", required: true },
      { name: "period", label: "周期", type: "select", value: goal ? goal.period : state.period, options: Object.keys(PERIODS).map((k) => ({ value: k, label: PERIODS[k].label })) },
      { name: "points", label: "完成后获得点数", type: "number", value: goal ? goal.points : 10 },
      { name: "note", label: "备注", type: "textarea", value: goal ? goal.note : "" }
    ], async (data) => {
      const item = {
        id: goal ? goal.id : uid(),
        title: String(data.title || "").trim(),
        period: data.period,
        points: Number(data.points || 0),
        note: String(data.note || "").trim(),
        createdAt: goal ? goal.createdAt : new Date().toISOString(),
        archived: false,
        completions: goal ? (goal.completions || []) : []
      };
      if (!item.title) return toast("请填写标题");
      if (goal) {
        const i = state.game.goals.findIndex((g) => g.id === goal.id);
        state.game.goals[i] = item;
      } else {
        state.game.goals.unshift(item);
      }
      await saveGame();
      render();
    });
  }

  function rewardForm(reward) {
    openModal(reward ? "编辑奖励" : "新奖励", [
      { name: "title", label: "标题", value: reward ? reward.title : "", required: true },
      { name: "cost", label: "消耗点数", type: "number", value: reward ? reward.cost : 30 },
      { name: "note", label: "备注", type: "textarea", value: reward ? reward.note : "" }
    ], async (data) => {
      const item = {
        id: reward ? reward.id : uid(),
        title: String(data.title || "").trim(),
        cost: Number(data.cost || 0),
        note: String(data.note || "").trim(),
        createdAt: reward ? reward.createdAt : new Date().toISOString(),
        archived: false,
        redeemed: reward ? (reward.redeemed || 0) : 0
      };
      if (!item.title) return toast("请填写标题");
      if (reward) {
        const i = state.game.rewards.findIndex((r) => r.id === reward.id);
        state.game.rewards[i] = item;
      } else {
        state.game.rewards.unshift(item);
      }
      await saveGame();
      render();
    });
  }

  function renderGoals() {
    const list = (state.game.goals || []).filter((g) => !g.archived && g.period === state.period);
    const done = list.filter(isDone).length;
    $("goalHeading").textContent = PERIODS[state.period].label;
    $("goalProgress").textContent = list.length ? (done + "/" + list.length) : "还没有目标";
    $("periodCaption").textContent = periodCaption(state.period);
    if (!list.length) {
      $("goalList").innerHTML = "<div class=\"empty\">这个周期还没有目标。" + (state.editable ? "点右上角加一个。" : "") + "</div>";
      return;
    }
    $("goalList").innerHTML = list.map((g) => {
      const doneNow = isDone(g);
      return "<article class=\"card" + (doneNow ? " done" : "") + "\" data-id=\"" + g.id + "\">" +
        "<div class=\"card-top\"><div><h3>" + escapeHtml(g.title) + "</h3>" +
        (g.note ? "<p>" + escapeHtml(g.note) + "</p>" : "") + "</div>" +
        "<div class=\"pts\">+" + (g.points || 0) + "</div></div>" +
        "<div class=\"card-actions\">" +
        (state.editable ? "<button type=\"button\" class=\"btn small" + (doneNow ? "" : " primary") + "\" data-act=\"complete\">" + (doneNow ? "撤销完成" : "完成") + "</button>" +
          "<button type=\"button\" class=\"btn small ghost\" data-act=\"edit-goal\">编辑</button>" +
          "<button type=\"button\" class=\"btn small ghost danger\" data-act=\"del-goal\">删除</button>"
          : (doneNow ? "<span class=\"badge\">本周期已完成</span>" : "<span class=\"badge\">进行中</span>")) +
        "</div></article>";
    }).join("");
  }

  function renderRewards() {
    const list = (state.game.rewards || []).filter((r) => !r.archived);
    if (!list.length) {
      $("rewardList").innerHTML = "<div class=\"empty\">还没有奖励。" + (state.editable ? "给未来的自己摆点奖品。" : "") + "</div>";
      return;
    }
    $("rewardList").innerHTML = list.map((r) => {
      const poor = (state.game.points || 0) < (r.cost || 0);
      return "<article class=\"card\" data-id=\"" + r.id + "\">" +
        "<div class=\"card-top\"><div><h3>" + escapeHtml(r.title) + "</h3>" +
        (r.note ? "<p>" + escapeHtml(r.note) + "</p>" : "") +
        (r.redeemed ? "<p>已兑换 " + r.redeemed + " 次</p>" : "") +
        "</div><div class=\"pts\">-" + (r.cost || 0) + "</div></div>" +
        "<div class=\"card-actions\">" +
        (state.editable
          ? "<button type=\"button\" class=\"btn small primary\" data-act=\"redeem\"" + (poor ? " disabled" : "") + ">兑换</button>" +
            "<button type=\"button\" class=\"btn small ghost\" data-act=\"edit-reward\">编辑</button>" +
            "<button type=\"button\" class=\"btn small ghost danger\" data-act=\"del-reward\">删除</button>"
          : "<span class=\"badge\">" + (r.cost || 0) + " 点</span>") +
        "</div></article>";
    }).join("");
  }

  function renderLedger() {
    const rows = (state.game.ledger || []).slice(0, 20);
    if (!rows.length) {
      $("ledgerList").innerHTML = "<div class=\"empty\">完成目标或兑换奖励后会出现流水。</div>";
      return;
    }
    $("ledgerList").innerHTML = rows.map((row) => {
      const cls = row.amount >= 0 ? "earn" : "spend";
      const sign = row.amount > 0 ? "+" : "";
      return "<div class=\"ledger-item\"><time>" + escapeHtml(formatDateTime(row.at)) + "</time>" +
        "<span>" + escapeHtml(row.label) + "</span>" +
        "<strong class=\"" + cls + "\">" + sign + row.amount + "</strong></div>";
    }).join("");
  }

  function noteTitleOf(note) {
    if (note.title) return note.title;
    const line = String(note.content || "").split("\n").find((x) => x.trim());
    if (!line) return "无标题";
    return line.replace(/^#+\s*/, "").slice(0, 36);
  }

  function renderNotes() {
    $("composerTime").textContent = "此刻 · " + formatDateTime();
    const q = ($("noteSearch").value || "").trim().toLowerCase();
    let list = (state.notes.notes || []).slice();
    if (!state.editable) list = list.filter((n) => n.public !== false);
    if (q) {
      list = list.filter((n) =>
        (n.title || "").toLowerCase().includes(q) ||
        (n.content || "").toLowerCase().includes(q)
      );
    }
    if (!list.length) {
      $("noteList").innerHTML = "<div class=\"empty\">还没有记录。</div>";
      return;
    }
    $("noteList").innerHTML = list.map((n) => {
      return "<article class=\"note\" data-id=\"" + n.id + "\">" +
        "<div class=\"note-head\"><h3>" + escapeHtml(noteTitleOf(n)) + "</h3>" +
        "<div><time>" + escapeHtml(formatDateTime(n.createdAt)) + "</time> " +
        (n.public === false ? "<span class=\"badge\">仅本地</span>" : "") + "</div></div>" +
        "<div class=\"md\">" + renderMarkdown(n.content || "") + "</div>" +
        (state.editable
          ? "<div class=\"card-actions\"><button type=\"button\" class=\"btn small ghost\" data-act=\"edit-note\">编辑</button>" +
            "<button type=\"button\" class=\"btn small ghost danger\" data-act=\"del-note\">删除</button></div>"
          : "") +
        "</article>";
    }).join("");
  }

  function setTab(tab) {
    state.tab = tab;
    document.querySelectorAll(".tab").forEach((el) => el.classList.toggle("is-on", el.dataset.tab === tab));
    $("viewGame").classList.toggle("is-hidden", tab !== "game");
    $("viewNotes").classList.toggle("is-hidden", tab !== "notes");
    if (location.hash !== "#" + tab) location.hash = tab;
  }

  function render() {
    $("pointsValue").textContent = state.game.points || 0;
    document.querySelectorAll(".chip").forEach((el) => el.classList.toggle("is-on", el.dataset.period === state.period));
    renderGoals();
    renderRewards();
    renderLedger();
    renderNotes();
    if (state.previewOn) $("composerPreview").innerHTML = renderMarkdown($("noteInput").value);
  }

  async function saveCurrentNote() {
    const content = $("noteInput").value.trim();
    const title = $("noteTitle").value.trim();
    if (!content && !title) return toast("写点什么再记录");
    const pub = $("notePublic").checked;
    if (state.editingNoteId) {
      const note = state.notes.notes.find((n) => n.id === state.editingNoteId);
      if (!note) return;
      note.title = title;
      note.content = $("noteInput").value;
      note.public = pub;
      note.updatedAt = new Date().toISOString();
      state.editingNoteId = null;
      $("btnSaveNote").textContent = "记录";
    } else {
      state.notes.notes.unshift({
        id: uid(),
        title: title,
        content: $("noteInput").value,
        public: pub,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }
    $("noteInput").value = "";
    $("noteTitle").value = "";
    $("composerPreview").classList.add("is-hidden");
    state.previewOn = false;
    await saveNotes();
    render();
    toast("已记录");
  }

  async function uploadImage(file) {
    const data = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    const res = await api("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: file.name || "paste.png", data: data })
    });
    const ta = $("noteInput");
    const md = "\n![](" + res.url + ")\n";
    const start = ta.selectionStart || ta.value.length;
    ta.value = ta.value.slice(0, start) + md + ta.value.slice(ta.selectionEnd || start);
    ta.focus();
    toast("图片已插入");
  }

  function bind() {
    document.querySelectorAll(".tab").forEach((el) => {
      el.addEventListener("click", () => setTab(el.dataset.tab));
    });
    document.querySelectorAll(".chip").forEach((el) => {
      el.addEventListener("click", () => { state.period = el.dataset.period; render(); });
    });
    $("btnAddGoal").addEventListener("click", () => goalForm(null));
    $("btnAddReward").addEventListener("click", () => rewardForm(null));
    $("btnAdjust").addEventListener("click", () => {
      openModal("调整点数", [
        { name: "delta", label: "增减值（可负）", type: "number", value: "0" },
        { name: "label", label: "原因", value: "手动调整" }
      ], async (data) => {
        const delta = Number(data.delta || 0);
        state.game.points = Math.max(0, (state.game.points || 0) + delta);
        addLedger(delta >= 0 ? "earn" : "spend", delta, data.label || "手动调整", "");
        await saveGame();
        render();
      });
    });
    $("modalCancel").addEventListener("click", () => $("modal").classList.add("is-hidden"));
    $("modal").addEventListener("click", (e) => {
      if (e.target.id === "modal") $("modal").classList.add("is-hidden");
    });

    $("goalList").addEventListener("click", async (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      const card = e.target.closest(".card");
      const id = card && card.dataset.id;
      const goal = state.game.goals.find((g) => g.id === id);
      if (btn.dataset.act === "complete") completeGoal(id);
      if (btn.dataset.act === "edit-goal") goalForm(goal);
      if (btn.dataset.act === "del-goal") {
        if (!confirm("删除这个目标？")) return;
        state.game.goals = state.game.goals.filter((g) => g.id !== id);
        await saveGame();
        render();
      }
    });

    $("rewardList").addEventListener("click", async (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      const card = e.target.closest(".card");
      const id = card && card.dataset.id;
      const reward = state.game.rewards.find((r) => r.id === id);
      if (btn.dataset.act === "redeem") redeemReward(id);
      if (btn.dataset.act === "edit-reward") rewardForm(reward);
      if (btn.dataset.act === "del-reward") {
        if (!confirm("删除这个奖励？")) return;
        state.game.rewards = state.game.rewards.filter((r) => r.id !== id);
        await saveGame();
        render();
      }
    });

    $("btnSaveNote").addEventListener("click", saveCurrentNote);
    $("noteInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        saveCurrentNote();
      }
    });
    $("btnPreview").addEventListener("click", () => {
      state.previewOn = !state.previewOn;
      $("composerPreview").classList.toggle("is-hidden", !state.previewOn);
      if (state.previewOn) $("composerPreview").innerHTML = renderMarkdown($("noteInput").value);
    });
    $("noteSearch").addEventListener("input", renderNotes);
    $("noteList").addEventListener("click", async (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      const card = e.target.closest(".note");
      const id = card && card.dataset.id;
      const note = state.notes.notes.find((n) => n.id === id);
      if (btn.dataset.act === "edit-note" && note) {
        state.editingNoteId = id;
        $("noteTitle").value = note.title || "";
        $("noteInput").value = note.content || "";
        $("notePublic").checked = note.public !== false;
        $("btnSaveNote").textContent = "保存修改";
        $("noteInput").focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (btn.dataset.act === "del-note") {
        if (!confirm("删除这条记录？")) return;
        state.notes.notes = state.notes.notes.filter((n) => n.id !== id);
        await saveNotes();
        render();
      }
    });

    $("noteInput").addEventListener("paste", async (e) => {
      if (!state.editable) return;
      const items = e.clipboardData && e.clipboardData.items;
      if (!items) return;
      for (const item of items) {
        if (item.type.indexOf("image") === 0) {
          e.preventDefault();
          await uploadImage(item.getAsFile());
        }
      }
    });
    $("noteInput").addEventListener("dragover", (e) => e.preventDefault());
    $("noteInput").addEventListener("drop", async (e) => {
      e.preventDefault();
      if (!state.editable) return;
      const files = e.dataTransfer && e.dataTransfer.files;
      if (!files) return;
      for (const file of files) {
        if (file.type.indexOf("image") === 0) await uploadImage(file);
      }
    });

    window.addEventListener("hashchange", () => {
      const tab = location.hash.replace("#", "");
      if (tab === "game" || tab === "notes") setTab(tab);
    });
  }

  async function boot() {
    bind();
    state.editable = await probeEditable();
    document.body.classList.toggle("is-public", !state.editable);
    $("modeHint").textContent = state.editable
      ? "本地编辑模式 · 数据保存在本机文件夹，推送脚本会同步到博客"
      : "博客展示 · 只读";
    try {
      await loadAll();
    } catch (e) {
      toast("读取数据失败");
    }
    const tab = location.hash.replace("#", "");
    setTab(tab === "notes" ? "notes" : "game");
    render();
    setInterval(() => {
      if (state.tab === "notes") $("composerTime").textContent = "此刻 · " + formatDateTime();
    }, 30000);
  }

  boot();
})();
