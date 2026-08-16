/* 自我记录前端：本地可编辑，博客静态页只读 */
(function () {
  const PERIODS = {
    day: { label: "日目标", short: "日" },
    week: { label: "周目标", short: "周" },
    month: { label: "月目标", short: "月" },
    year: { label: "年目标", short: "年" },
    once: { label: "长期目标", short: "长期" }
  };
  const QUICK = [0.5, 1, 2, 3, 5];

  const state = {
    editable: false,
    tab: "game",
    period: "day",
    game: { version: 1, points: 0, goals: [], rewards: [], ledger: [] },
    notes: { version: 1, notes: [] },
    editingNoteId: null,
    editingGoalId: null,
    editingRewardId: null,
    drawer: "",
    previewOn: false,
    meterChartGoalId: ""
  };

  const $ = (id) => document.getElementById(id);

  function uid() {
    return "id_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function pad(n) { return String(n).padStart(2, "0"); }

  function fmtNum(n) {
    const x = Math.round((Number(n) || 0) * 100) / 100;
    return String(x);
  }

  function roundPts(n) {
    return Math.round((Number(n) || 0) * 100) / 100;
  }

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

  function lastDays(n) {
    const out = [];
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    for (let i = n - 1; i >= 0; i--) {
      const x = new Date(d);
      x.setDate(d.getDate() - i);
      out.push(x);
    }
    return out;
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

  function isMeter(goal) { return goal && goal.kind === "meter"; }

  function unitOf(goal) { return goal.unit || "单位"; }

  function logDay(log) {
    if (log.day) return log.day;
    const d = new Date(log.at);
    return Number.isNaN(d.getTime()) ? "" : dateKey(d);
  }

  function qtyThisPeriod(goal, d) {
    const key = periodKey(goal.period, d);
    return (goal.logs || []).reduce((s, log) => s + (log.key === key ? Number(log.qty || 0) : 0), 0);
  }

  function ptsThisPeriod(goal, d) {
    const key = periodKey(goal.period, d);
    return (goal.logs || []).reduce((s, log) => s + (log.key === key ? Number(log.points || 0) : 0), 0);
  }

  function isDone(goal) {
    if (isMeter(goal)) {
      const qty = qtyThisPeriod(goal);
      const target = Number(goal.target || 0);
      if (target > 0) return qty + 1e-9 >= target;
      return qty > 0;
    }
    const key = periodKey(goal.period);
    return (goal.completions || []).some((c) => c.key === key);
  }

  function statusOf(goal) {
    if (isMeter(goal)) {
      const qty = qtyThisPeriod(goal);
      const target = Number(goal.target || 0);
      const unit = unitOf(goal);
      if (target > 0) {
        const left = Math.max(0, roundPts(target - qty));
        return {
          done: qty + 1e-9 >= target,
          text: fmtNum(qty) + " / " + fmtNum(target) + " " + unit,
          detail: left > 0 ? "还差 " + fmtNum(left) + " " + unit : "已达标",
          ratio: Math.min(1, qty / target)
        };
      }
      return {
        done: qty > 0,
        text: fmtNum(qty) + " " + unit,
        detail: qty > 0 ? "本周期已记" : "本周期还没记",
        ratio: qty > 0 ? 1 : 0
      };
    }
    return {
      done: isDone(goal),
      text: isDone(goal) ? "已完成" : "未完成",
      detail: isDone(goal) ? "本周期已打卡" : "本周期还没打卡",
      ratio: isDone(goal) ? 1 : 0
    };
  }

  function activeGoals() {
    return (state.game.goals || []).filter((g) => !g.archived);
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

  function addLedger(type, amount, label, refId) {
    state.game.ledger.unshift({
      id: uid(),
      type: type,
      amount: amount,
      label: label,
      refId: refId || "",
      at: new Date().toISOString()
    });
    if (state.game.ledger.length > 400) state.game.ledger.length = 400;
  }

  async function completeGoal(id) {
    const goal = state.game.goals.find((g) => g.id === id);
    if (!goal || goal.archived || isMeter(goal)) return;
    const key = periodKey(goal.period);
    if (isDone(goal)) {
      goal.completions = (goal.completions || []).filter((c) => c.key !== key);
      state.game.points = Math.max(0, roundPts((state.game.points || 0) - (goal.points || 0)));
      addLedger("spend", -(goal.points || 0), "撤销：" + goal.title, goal.id);
    } else {
      goal.completions = goal.completions || [];
      goal.completions.push({ key: key, at: new Date().toISOString() });
      state.game.points = roundPts((state.game.points || 0) + (goal.points || 0));
      addLedger("earn", goal.points || 0, "完成：" + goal.title, goal.id);
    }
    await saveGame();
    render();
  }

  async function logMeter(id, qty) {
    const goal = state.game.goals.find((g) => g.id === id);
    if (!goal || !isMeter(goal)) return;
    const amount = Number(qty);
    if (!(amount > 0)) return toast("填一个大于 0 的数量");
    const now = new Date();
    const points = roundPts(amount * Number(goal.pointsPerUnit || 0));
    goal.logs = goal.logs || [];
    goal.logs.push({
      id: uid(),
      qty: roundPts(amount),
      points: points,
      key: periodKey(goal.period, now),
      day: dateKey(now),
      at: now.toISOString()
    });
    if (goal.logs.length > 500) goal.logs.splice(0, goal.logs.length - 500);
    state.game.points = roundPts((state.game.points || 0) + points);
    addLedger("earn", points, goal.title + " " + fmtNum(amount) + " " + unitOf(goal), goal.id);
    await saveGame();
    render();
    toast("已记 " + fmtNum(amount) + " " + unitOf(goal) + "，+" + fmtNum(points) + " 点");
  }

  async function undoLastLog(id) {
    const goal = state.game.goals.find((g) => g.id === id);
    if (!goal || !isMeter(goal) || !(goal.logs || []).length) return toast("没有可撤销的记录");
    const last = goal.logs.pop();
    state.game.points = Math.max(0, roundPts((state.game.points || 0) - (last.points || 0)));
    addLedger("spend", -(last.points || 0), "撤销：" + goal.title + " " + fmtNum(last.qty) + " " + unitOf(goal), goal.id);
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
    state.game.points = roundPts((state.game.points || 0) - cost);
    addLedger("spend", -cost, "兑换：" + reward.title, reward.id);
    reward.redeemed = (reward.redeemed || 0) + 1;
    await saveGame();
    render();
    toast("已兑换");
  }

  function syncDrawerButtons() {
    $("btnAddGoal").classList.toggle("is-on", state.drawer === "goal");
    $("btnAddReward").classList.toggle("is-on", state.drawer === "reward");
    $("btnAdjust").classList.toggle("is-on", state.drawer === "adjust");
  }

  function showDrawer(name) {
    state.drawer = name;
    $("editorDrawer").classList.remove("is-hidden");
    $("goalFormEl").classList.toggle("is-hidden", name !== "goal");
    $("rewardFormEl").classList.toggle("is-hidden", name !== "reward");
    $("adjustFormEl").classList.toggle("is-hidden", name !== "adjust");
    syncDrawerButtons();
    $("editorDrawer").scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function hideDrawer() {
    state.drawer = "";
    state.editingGoalId = null;
    state.editingRewardId = null;
    $("editorDrawer").classList.add("is-hidden");
    syncDrawerButtons();
  }

  function toggleDrawer(name) {
    if (state.drawer === name && !state.editingGoalId && !state.editingRewardId) {
      hideDrawer();
      return false;
    }
    showDrawer(name);
    return true;
  }

  function updateMeterHint() {
    const form = $("goalFormEl");
    const unit = (form.unit.value || "单位").trim() || "单位";
    const ppu = Number(form.pointsPerUnit.value || 0);
    $("meterHint").textContent = "例：1 " + unit + " = " + fmtNum(ppu) + " 点。今天记 3.5 " + unit + " 就得 " + fmtNum(3.5 * ppu) + " 点。";
  }

  function syncGoalKindFields() {
    const meter = $("goalKind").value === "meter";
    $("checkFields").classList.toggle("is-hidden", meter);
    $("meterFields").classList.toggle("is-hidden", !meter);
    if (meter) updateMeterHint();
  }

  function resetGoalForm(keepSettings) {
    const form = $("goalFormEl");
    state.editingGoalId = null;
    $("goalFormTitle").textContent = "新目标";
    $("goalSubmitBtn").textContent = "添加并继续";
    form.title.value = "";
    form.noteCheck.value = "";
    form.noteMeter.value = "";
    if (!keepSettings) {
      form.period.value = state.period;
      form.kind.value = "check";
      form.points.value = 10;
      form.unit.value = "公里";
      form.pointsPerUnit.value = 1;
      form.target.value = "";
    }
    syncGoalKindFields();
  }

  function openGoalForm(goal) {
    showDrawer("goal");
    const form = $("goalFormEl");
    state.editingGoalId = goal ? goal.id : null;
    $("goalFormTitle").textContent = goal ? "编辑目标" : "新目标";
    $("goalSubmitBtn").textContent = goal ? "保存修改" : "添加并继续";
    form.title.value = goal ? goal.title : "";
    form.period.value = goal ? goal.period : state.period;
    form.kind.value = goal && isMeter(goal) ? "meter" : "check";
    form.points.value = goal && !isMeter(goal) ? goal.points : 10;
    form.unit.value = goal && goal.unit ? goal.unit : "公里";
    form.pointsPerUnit.value = goal && goal.pointsPerUnit != null ? goal.pointsPerUnit : 1;
    form.target.value = goal && goal.target ? goal.target : "";
    const note = goal ? (goal.note || "") : "";
    form.noteCheck.value = note;
    form.noteMeter.value = note;
    syncGoalKindFields();
    form.title.focus();
  }

  function openRewardForm(reward) {
    showDrawer("reward");
    const form = $("rewardFormEl");
    state.editingRewardId = reward ? reward.id : null;
    $("rewardSubmitBtn").textContent = reward ? "保存修改" : "添加并继续";
    form.title.value = reward ? reward.title : "";
    form.cost.value = reward ? reward.cost : 30;
    form.note.value = reward ? (reward.note || "") : "";
    form.title.focus();
  }

  function logControls(goal) {
    if (!state.editable || !isMeter(goal)) return "";
    const unit = unitOf(goal);
    const quick = QUICK.map((n) =>
      "<button type=\"button\" class=\"btn small\" data-act=\"quick\" data-qty=\"" + n + "\">+" + fmtNum(n) + "</button>"
    ).join("");
    return "<div class=\"log-row\">" +
      "<input class=\"qty-input\" type=\"number\" min=\"0\" step=\"0.1\" inputmode=\"decimal\" placeholder=\"" + escapeHtml(unit) + "\">" +
      "<button type=\"button\" class=\"btn small primary\" data-act=\"log\">记上</button>" +
      "<button type=\"button\" class=\"btn small ghost\" data-act=\"undo-log\">撤销上一笔</button>" +
      "</div><div class=\"quick\">" + quick + "</div>";
  }

  function renderTodos() {
    const pending = activeGoals().filter((g) => !isDone(g));
    $("todoCount").textContent = pending.length ? pending.length + " 项" : "都搞定了";
    if (!pending.length) {
      $("todoList").innerHTML = "<div class=\"todo-item all-clear\">该记的都记了，该打的卡都打了。</div>";
      return;
    }
    $("todoList").innerHTML = pending.map((g) => {
      const st = statusOf(g);
      return "<div class=\"todo-item\" data-id=\"" + g.id + "\" data-period=\"" + g.period + "\">" +
        "<div class=\"todo-main\" data-act=\"jump\"><strong>" + escapeHtml(g.title) + "</strong>" +
        "<span>" + PERIODS[g.period].short + " · " + escapeHtml(st.detail) + "</span></div>" +
        (state.editable && isMeter(g)
          ? "<div class=\"log-row\"><input class=\"qty-input\" type=\"number\" min=\"0\" step=\"0.1\" inputmode=\"decimal\" placeholder=\"" + escapeHtml(unitOf(g)) + "\">" +
            "<button type=\"button\" class=\"btn small primary\" data-act=\"log\">记上</button></div>"
          : (state.editable && !isMeter(g)
            ? "<button type=\"button\" class=\"btn small primary\" data-act=\"complete\">完成</button>"
            : "<span class=\"badge\">" + escapeHtml(st.text) + "</span>")) +
        "</div>";
    }).join("");
  }

  function svgBars(values, labels, target) {
    const max = Math.max(target || 0, 1, ...values);
    const W = 640, H = 160, L = 8, R = 8, T = 16, B = 28;
    const n = values.length;
    const bw = (W - L - R) / n;
    const innerH = H - T - B;
    const cs = getComputedStyle(document.documentElement);
    const bar = (cs.getPropertyValue("--navbar-bg-color") || "#2f4154").trim() || "#2f4154";
    const muted = (cs.getPropertyValue("--sec-text-color") || "#718096").trim() || "#718096";
    const ok = (cs.getPropertyValue("--post-link-color") || "#0366d6").trim() || "#0366d6";
    let targetLine = "";
    if (target > 0) {
      const y = T + innerH * (1 - target / max);
      targetLine = "<line x1=\"" + L + "\" x2=\"" + (W - R) + "\" y1=\"" + y + "\" y2=\"" + y + "\" stroke=\"" + ok + "\" stroke-dasharray=\"4 4\"/>" +
        "<text x=\"" + (W - R) + "\" y=\"" + (y - 4) + "\" text-anchor=\"end\" fill=\"" + ok + "\" font-size=\"11\">目标 " + fmtNum(target) + "</text>";
    }
    const rects = values.map((v, i) => {
      const h = (v / max) * innerH;
      const x = L + i * bw + 1;
      const y = T + innerH - h;
      const fill = v > 0 ? bar : "rgba(128,128,128,0.12)";
      return "<rect x=\"" + x + "\" y=\"" + y + "\" width=\"" + Math.max(bw - 3, 2) + "\" height=\"" + Math.max(h, v > 0 ? 2 : 0) + "\" rx=\"2\" fill=\"" + fill + "\"><title>" + escapeHtml(labels[i]) + "：" + fmtNum(v) + "</title></rect>";
    }).join("");
    const axis = labels.map((lab, i) => {
      if (i % 2 !== 0 && i !== n - 1) return "";
      const x = L + i * bw + bw / 2;
      return "<text x=\"" + x + "\" y=\"" + (H - 8) + "\" text-anchor=\"middle\" fill=\"" + muted + "\" font-size=\"11\">" + escapeHtml(lab) + "</text>";
    }).join("");
    return "<svg viewBox=\"0 0 " + W + " " + H + "\" role=\"img\">" + targetLine + rects + axis + "</svg>";
  }

  function renderCharts() {
    const days = lastDays(14);
    const labels = days.map((d) => (d.getMonth() + 1) + "/" + d.getDate());
    const earn = days.map((d) => {
      const key = dateKey(d);
      return (state.game.ledger || []).reduce((s, row) => {
        if (row.amount <= 0) return s;
        const at = new Date(row.at);
        return dateKey(at) === key ? s + Number(row.amount || 0) : s;
      }, 0);
    });
    $("chartPoints").innerHTML = earn.some((v) => v > 0)
      ? svgBars(earn, labels, 0)
      : "<div class=\"empty\">记几天点数后，这里会出现柱状图。</div>";

    $("chartPeriods").innerHTML = Object.keys(PERIODS).map((period) => {
      const list = activeGoals().filter((g) => g.period === period);
      const done = list.filter(isDone).length;
      const total = list.length;
      const pct = total ? Math.round(done / total * 100) : 0;
      return "<div class=\"pbar\"><span>" + PERIODS[period].short + "</span>" +
        "<div class=\"pbar-track\"><i style=\"width:" + pct + "%\"></i></div>" +
        "<span class=\"muted\">" + done + "/" + total + "</span></div>";
    }).join("");

    const meters = activeGoals().filter(isMeter);
    const sel = $("meterChartGoal");
    if (!meters.length) {
      sel.innerHTML = "";
      $("chartMeter").innerHTML = "<div class=\"empty\">计量目标（例如跑步按公里记）会出现在这里。</div>";
      return;
    }
    if (!meters.some((g) => g.id === state.meterChartGoalId)) state.meterChartGoalId = meters[0].id;
    const prev = sel.value;
    sel.innerHTML = meters.map((g) =>
      "<option value=\"" + g.id + "\"" + (g.id === state.meterChartGoalId ? " selected" : "") + ">" + escapeHtml(g.title) + "</option>"
    ).join("");
    if (prev && meters.some((g) => g.id === prev)) {
      sel.value = prev;
      state.meterChartGoalId = prev;
    }
    const goal = meters.find((g) => g.id === state.meterChartGoalId) || meters[0];
    const qty = days.map((d) => {
      const key = dateKey(d);
      return (goal.logs || []).reduce((s, log) => s + (logDay(log) === key ? Number(log.qty || 0) : 0), 0);
    });
    $("chartMeter").innerHTML = svgBars(qty, labels, Number(goal.target || 0) && goal.period === "day" ? Number(goal.target) : 0);
  }

  function renderGoals() {
    const list = activeGoals().filter((g) => g.period === state.period);
    const done = list.filter(isDone).length;
    $("goalHeading").textContent = PERIODS[state.period].label;
    $("goalProgress").textContent = list.length ? (done + "/" + list.length + " 已完成") : "还没有目标";
    $("periodCaption").textContent = periodCaption(state.period);
    if (!list.length) {
      $("goalList").innerHTML = "<div class=\"empty\">这个周期还没有目标。" + (state.editable ? "上面可以加「打卡」或「计量」目标。跑步这种按公里记的，选计量：1 公里 = 1 点。" : "") + "</div>";
      return;
    }
    $("goalList").innerHTML = list.map((g) => {
      const st = statusOf(g);
      const meter = isMeter(g);
      const dim = !meter && st.done;
      const ptsLabel = meter
        ? "1 " + unitOf(g) + " = " + fmtNum(g.pointsPerUnit || 0) + " 点"
        : "+" + fmtNum(g.points || 0);
      const bar = meter && Number(g.target || 0) > 0
        ? "<div class=\"progress" + (st.done ? " is-ok" : "") + "\"><i style=\"width:" + Math.round(st.ratio * 100) + "%\"></i></div>"
        : "";
      return "<article class=\"card" + (dim ? " done" : "") + "\" data-id=\"" + g.id + "\">" +
        "<div class=\"card-top\"><div><h3>" + escapeHtml(g.title) + "</h3>" +
        "<p class=\"rule\">" + escapeHtml(ptsLabel) + " · " + escapeHtml(st.text) + "</p>" +
        (g.note ? "<p>" + escapeHtml(g.note) + "</p>" : "") + "</div>" +
        "<div class=\"pts\">" + (meter ? "本周期 +" + fmtNum(ptsThisPeriod(g)) : "+" + fmtNum(g.points || 0)) + "</div></div>" +
        bar +
        (state.editable
          ? (meter
            ? logControls(g)
            : "<div class=\"card-actions\"><button type=\"button\" class=\"btn small" + (st.done ? "" : " primary") + "\" data-act=\"complete\">" + (st.done ? "撤销完成" : "完成") + "</button></div>") +
            "<div class=\"card-actions\"><button type=\"button\" class=\"btn small ghost\" data-act=\"edit-goal\">编辑</button>" +
            "<button type=\"button\" class=\"btn small ghost danger\" data-act=\"del-goal\">删除</button></div>"
          : "<div class=\"card-actions\"><span class=\"badge\">" + escapeHtml(st.detail) + "</span></div>") +
        "</article>";
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
        "</div><div class=\"pts\">-" + fmtNum(r.cost || 0) + "</div></div>" +
        "<div class=\"card-actions\">" +
        (state.editable
          ? "<button type=\"button\" class=\"btn small primary\" data-act=\"redeem\"" + (poor ? " disabled" : "") + ">兑换</button>" +
            "<button type=\"button\" class=\"btn small ghost\" data-act=\"edit-reward\">编辑</button>" +
            "<button type=\"button\" class=\"btn small ghost danger\" data-act=\"del-reward\">删除</button>"
          : "<span class=\"badge\">" + fmtNum(r.cost || 0) + " 点</span>") +
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
        "<strong class=\"" + cls + "\">" + sign + fmtNum(row.amount) + "</strong></div>";
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
    $("pointsValue").textContent = fmtNum(state.game.points || 0);
    document.querySelectorAll(".chip").forEach((el) => el.classList.toggle("is-on", el.dataset.period === state.period));
    renderTodos();
    renderCharts();
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

  function readQty(fromEl) {
    const box = fromEl.closest(".todo-item, .card");
    const input = box && box.querySelector(".qty-input");
    return input ? Number(input.value) : 0;
  }

  function bind() {
    document.querySelectorAll(".tab").forEach((el) => {
      el.addEventListener("click", () => setTab(el.dataset.tab));
    });
    document.querySelectorAll(".chip").forEach((el) => {
      el.addEventListener("click", () => {
        state.period = el.dataset.period;
        if (state.drawer === "goal" && !state.editingGoalId) {
          $("goalFormEl").period.value = state.period;
        }
        render();
      });
    });
    $("btnAddGoal").addEventListener("click", () => {
      if (state.drawer === "goal" && !state.editingGoalId) {
        hideDrawer();
        return;
      }
      resetGoalForm(false);
      openGoalForm(null);
    });
    $("btnAddReward").addEventListener("click", () => {
      if (state.drawer === "reward" && !state.editingRewardId) {
        hideDrawer();
        return;
      }
      openRewardForm(null);
    });
    $("btnAdjust").addEventListener("click", () => {
      if (!toggleDrawer("adjust")) return;
      $("adjustFormEl").delta.focus();
    });
    $("drawerClose").addEventListener("click", hideDrawer);
    $("drawerCloseReward").addEventListener("click", hideDrawer);
    $("goalFormReset").addEventListener("click", () => {
      resetGoalForm(true);
      $("goalFormEl").title.focus();
    });
    $("goalKind").addEventListener("change", syncGoalKindFields);
    $("goalFormEl").pointsPerUnit.addEventListener("input", updateMeterHint);
    $("goalFormEl").unit.addEventListener("input", updateMeterHint);
    $("goalFormEl").addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = $("goalFormEl");
      const title = String(form.title.value || "").trim();
      if (!title) return toast("请填写标题");
      const kind = form.kind.value;
      const note = kind === "meter"
        ? String(form.noteMeter.value || "").trim()
        : String(form.noteCheck.value || "").trim();
      const old = state.editingGoalId
        ? state.game.goals.find((g) => g.id === state.editingGoalId)
        : null;
      const item = {
        id: old ? old.id : uid(),
        title: title,
        period: form.period.value,
        kind: kind,
        note: note,
        createdAt: old ? old.createdAt : new Date().toISOString(),
        archived: false,
        completions: old ? (old.completions || []) : [],
        logs: old ? (old.logs || []) : []
      };
      if (kind === "meter") {
        item.unit = String(form.unit.value || "单位").trim() || "单位";
        item.pointsPerUnit = Number(form.pointsPerUnit.value || 0);
        item.target = form.target.value === "" ? 0 : Number(form.target.value || 0);
        item.points = 0;
      } else {
        item.points = Number(form.points.value || 0);
        item.unit = "";
        item.pointsPerUnit = 0;
        item.target = 0;
      }
      if (old) {
        const i = state.game.goals.findIndex((g) => g.id === old.id);
        state.game.goals[i] = item;
        toast("已保存");
        resetGoalForm(true);
      } else {
        state.game.goals.unshift(item);
        toast("已添加，可以继续加");
        form.title.value = "";
        form.noteCheck.value = "";
        form.noteMeter.value = "";
      }
      await saveGame();
      render();
      form.title.focus();
    });
    $("rewardFormEl").addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = $("rewardFormEl");
      const title = String(form.title.value || "").trim();
      if (!title) return toast("请填写标题");
      const old = state.editingRewardId
        ? state.game.rewards.find((r) => r.id === state.editingRewardId)
        : null;
      const item = {
        id: old ? old.id : uid(),
        title: title,
        cost: Number(form.cost.value || 0),
        note: String(form.note.value || "").trim(),
        createdAt: old ? old.createdAt : new Date().toISOString(),
        archived: false,
        redeemed: old ? (old.redeemed || 0) : 0
      };
      if (old) {
        const i = state.game.rewards.findIndex((r) => r.id === old.id);
        state.game.rewards[i] = item;
        toast("已保存");
        state.editingRewardId = null;
        $("rewardSubmitBtn").textContent = "添加并继续";
      } else {
        state.game.rewards.unshift(item);
        toast("已添加，可以继续加");
      }
      form.title.value = "";
      form.note.value = "";
      await saveGame();
      render();
      form.title.focus();
    });
    $("adjustFormEl").addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = $("adjustFormEl");
      const delta = Number(form.delta.value || 0);
      state.game.points = Math.max(0, roundPts((state.game.points || 0) + delta));
      addLedger(delta >= 0 ? "earn" : "spend", delta, form.label.value || "手动调整", "");
      form.delta.value = 0;
      await saveGame();
      render();
      toast("点数已更新");
    });

    $("meterChartGoal").addEventListener("change", () => {
      state.meterChartGoalId = $("meterChartGoal").value;
      renderCharts();
    });

    async function onGoalClick(e) {
      const box = e.target.closest(".card, .todo-item");
      if (!box) return;
      const id = box.dataset.id;
      const goal = state.game.goals.find((g) => g.id === id);
      const btn = e.target.closest("button");
      const jump = e.target.closest("[data-act='jump']");
      if (jump && box.dataset.period) {
        state.period = box.dataset.period;
        render();
        return;
      }
      if (!btn) return;
      if (btn.dataset.act === "complete") completeGoal(id);
      if (btn.dataset.act === "edit-goal") openGoalForm(goal);
      if (btn.dataset.act === "log") await logMeter(id, readQty(btn));
      if (btn.dataset.act === "quick") await logMeter(id, btn.dataset.qty);
      if (btn.dataset.act === "undo-log") await undoLastLog(id);
      if (btn.dataset.act === "del-goal") {
        if (!confirm("删除这个目标？")) return;
        state.game.goals = state.game.goals.filter((g) => g.id !== id);
        await saveGame();
        render();
      }
    }

    $("goalList").addEventListener("click", onGoalClick);
    $("todoList").addEventListener("click", onGoalClick);
    $("goalList").addEventListener("keydown", async (e) => {
      if (e.key !== "Enter") return;
      if (!e.target.classList.contains("qty-input")) return;
      e.preventDefault();
      const box = e.target.closest(".card");
      if (box) await logMeter(box.dataset.id, e.target.value);
    });
    $("todoList").addEventListener("keydown", async (e) => {
      if (e.key !== "Enter") return;
      if (!e.target.classList.contains("qty-input")) return;
      e.preventDefault();
      const box = e.target.closest(".todo-item");
      if (box) await logMeter(box.dataset.id, e.target.value);
    });

    $("rewardList").addEventListener("click", async (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      const card = e.target.closest(".card");
      const id = card && card.dataset.id;
      const reward = state.game.rewards.find((r) => r.id === id);
      if (btn.dataset.act === "redeem") redeemReward(id);
      if (btn.dataset.act === "edit-reward") openRewardForm(reward);
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
