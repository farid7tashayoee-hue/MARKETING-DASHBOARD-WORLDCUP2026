/* ============================================================
   لیگ ۲۴ عیار اکسیراز — منطق رندر داشبورد
   داده‌ها از js/data.js (آبجکت CAMPAIGN_DATA) خوانده می‌شود.
   این فایل را برای به‌روزرسانی داده دست نزنید — فقط data.js.
   ============================================================ */
(function () {
  "use strict";

  const D = window.CAMPAIGN_DATA;
  if (!D) { console.error("CAMPAIGN_DATA یافت نشد — js/data.js را بررسی کنید."); return; }

  let activePeriod = "today";
  window.switchPeriod = function(p, btn) {
    activePeriod = p;
    document.querySelectorAll(".period-btn").forEach((b) => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    renderChannelTable();
  };

  /* ---------- ابزارهای کمکی ---------- */
  const $ = (s) => document.querySelector(s);

  // اعداد فارسی
  const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const toFa = (s) => String(s).replace(/\d/g, (d) => faDigits[d]);

  // عدد با جداکننده هزارگان (فارسی)
  const fmt = (n) => toFa((Math.round(n || 0)).toLocaleString("en-US"));

  // درصد
  const pct = (part, whole) => (whole > 0 ? (part / whole) * 100 : 0);
  const fmtPct = (v) => toFa(v.toFixed(1)) + "٪";

  // مبلغ تومان به‌صورت خلاصه (M/میلیون)
  function fmtMoney(t) {
    if (!t) return "۰";
    if (t >= 1e9) return toFa((t / 1e9).toFixed(t % 1e9 ? 1 : 0)) + " میلیارد";
    if (t >= 1e6) return toFa(Math.round(t / 1e6)) + " میلیون";
    return fmt(t);
  }

  // پالت رنگ نمودارها
  const GOLD = "#e8c156";
  const PALETTE = ["#e8c156", "#2f6fed", "#1faa6b", "#e0489e", "#2bb8c4", "#8b5cf6", "#e23744", "#f4a23a"];

  // مجموع‌گیری روی آرایه
  const sum = (arr, key) => arr.reduce((a, x) => a + (Number(x[key]) || 0), 0);

  /* ---------- پیش‌فرض مشترک Chart.js ---------- */
  if (window.Chart) {
    Chart.defaults.color = "rgba(243, 240, 230, 0.66)";
    Chart.defaults.font.family = "Vazirmatn, system-ui, sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.plugins.legend.labels.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.boxWidth = 8;
    Chart.defaults.plugins.tooltip.rtl = true;
    Chart.defaults.plugins.tooltip.titleFont = { family: "Vazirmatn" };
    Chart.defaults.plugins.tooltip.bodyFont = { family: "Vazirmatn" };
  }
  const GRID = { color: "rgba(255,255,255,0.06)" };

  /* ============================================================
     ۱) هدر کمپین
     ============================================================ */
  function renderHeader() {
    const m = D.meta || {};
    $("#campaignName").textContent = m.name || "لیگ ۲۴ عیار اکسیراز";
    $("#campaignSlogan").textContent = m.slogan || "";
    $("#dayCurrent").textContent = toFa(m.currentDay || 0);
    $("#dayTotal").textContent = toFa(m.totalDays || 39);
    $("#matchCurrent").textContent = toFa(m.matchesPlayed || 0);
    $("#matchTotal").textContent = toFa(m.totalMatches || 104);
    $("#deadlineDate").textContent = m.nextDeadlineDate || "—";
    $("#deadlineLabel").textContent = m.nextDeadlineLabel || "";
    $("#lastUpdated").textContent = m.lastUpdated || "—";
    const p = pct(m.currentDay || 0, m.totalDays || 39);
    $("#campaignProgress").style.width = Math.min(p, 100) + "%";
  }

  /* ============================================================
     ۲) کارت‌های KPI
     ============================================================ */
  function renderKpis() {
    const k = D.kpis || {};
    const totalSpend = k.totalSpendToman || sum(D.channels || [], "spendToman");
    const signups = k.signups || 0;
    const conv = pct(signups, k.visits || 0);
    const cpa = signups > 0 ? totalSpend / signups : 0;

    const cards = [
      {
        icon: "👥", label: "کل ثبت‌نام‌ها", value: fmt(signups),
        target: k.signupsTarget, current: signups,
        foot: k.signupsTarget ? "هدف: " + fmt(k.signupsTarget) : "KPI اصلی کمپین"
      },
      {
        icon: "🔥", label: "کل بازیکنان فعال", value: fmt(k.activeUsersAvg),
        foot: "کاربران شرکت‌کننده در کمپین"
      },
      {
        icon: "🎯", label: "کل پیش‌بینی‌ها", value: fmt(k.totalPredictions),
        foot: "شاخص تعامل"
      },
      {
        icon: "📈", label: "نرخ تبدیل بازدید → ثبت‌نام", value: fmtPct(conv),
        foot: "از " + fmt(k.visits || 0) + " بازدید"
      },
      {
        icon: "💰", label: "هزینه کل تبلیغات", value: "★ ★ ★ ★ ★", unit: "",
        foot: toFa((D.channels || []).length) + " کانال", masked: true
      },
      {
        icon: "🧮", label: "CPA — میانگین هزینه هر ثبت‌نام", value: fmtMoney(cpa), unit: " تومان",
        foot: "هزینه ÷ ثبت‌نام"
      }
    ];

    $("#kpiGrid").innerHTML = cards.map((c) => {
      let bar = "";
      if (c.target && c.target > 0) {
        const p = Math.min(pct(c.current, c.target), 100);
        bar = `<div class="k-bar"><span style="width:${p}%"></span></div>`;
      }
      const unit = c.unit ? `<small>${c.unit}</small>` : "";
      return `<div class="kpi-card">
        <div class="k-icon">${c.icon}</div>
        <div class="k-label">${c.label}</div>
        <div class="k-value">${c.value}${unit}</div>
        <div class="k-foot">${c.foot || ""}</div>
        ${bar}
      </div>`;
    }).join("");
  }

  /* ============================================================
     ۳) نمودار روند روزانه
     ============================================================ */
  function renderTrend() {
    const rows = D.daily || [];
    const box = $("#trendChart");
    if (!rows.length) { showEmpty(box, "هنوز داده‌ی روزانه‌ای وارد نشده — daily را در data.js پر کنید."); return; }

    const labels = rows.map((r) => r.date);
    const mk = (key, color, label, fill) => ({
      label, data: rows.map((r) => r[key] || 0),
      borderColor: color, backgroundColor: fill ? color + "22" : color,
      tension: 0.35, fill: !!fill, pointRadius: 2, pointHoverRadius: 5, borderWidth: 2
    });

    new Chart(box, {
      type: "line",
      data: { labels, datasets: [
        mk("signups", PALETTE[0], "ثبت‌نام", true),
        mk("predictions", PALETTE[1], "Event", false),
        mk("activeUsers", PALETTE[2], "Session", false)
      ]},
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        scales: {
          x: { grid: GRID, ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 12 } },
          y: { grid: GRID, beginAtZero: true, ticks: { callback: (v) => toFa(v) } }
        },
        plugins: { legend: { position: "top" },
          tooltip: { callbacks: { label: (c) => " " + c.dataset.label + ": " + fmt(c.raw) } } }
      }
    });
  }

  /* ============================================================
     ۴) قیف اکتساب
     ============================================================ */
  function renderFunnel() {
    const periods = D.periods || [];
    const el = $("#periodsTable");
    if (!periods.length) { el.innerHTML = '<p class="empty">داده‌ای وجود ندارد.</p>'; return; }

    el.innerHTML = `
      <table class="data-table" style="width:100%">
        <thead><tr>
          <th>بازه</th><th>سشن</th><th>بازدید</th><th>رویداد</th><th>تبدیل</th>
        </tr></thead>
        <tbody>
          ${periods.map((p) => {
            const conv = pct(p.userSessions || 0, p.sessions || 0);
            return `<tr>
              <td><b>${p.label}</b></td>
              <td class="num">${fmt(p.sessions)}</td>
              <td class="num">${fmt(p.pageViews)}</td>
              <td class="num">${fmt(p.events)}</td>
              <td class="num">${fmtPct(conv)}</td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>`;
  }

  /* ============================================================
     ۵) نمودار سهم کانال‌ها (دونات)
     ============================================================ */
  function renderChannelChart() {
    const ch = (D.channels || []).filter((c) => (c.month30 && c.month30.signups || 0) > 0);
    const box = $("#channelChart");
    if (!ch.length) { showEmpty(box, "هنوز ثبت‌نامی برای کانال‌ها ثبت نشده."); return; }

    new Chart(box, {
      type: "doughnut",
      data: {
        labels: ch.map((c) => c.label || c.source),
        datasets: [{ data: ch.map((c) => c.month30.signups),
          backgroundColor: PALETTE, borderColor: "#0f1426", borderWidth: 2 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: "62%",
        plugins: { legend: { position: "bottom" },
          tooltip: { callbacks: { label: (c) => " " + c.label + ": " + fmt(c.raw) } } }
      }
    });
  }

  /* ============================================================
     ۶) جدول عملکرد کانال‌ها
     ============================================================ */
  function renderChannelTable() {
    const ch = D.channels || [];
    const tbody = $("#channelTable tbody");
    const tfoot = $("#channelTable tfoot");

    let tSess = 0, tPV = 0, tEv = 0, tSign = 0;
    tbody.innerHTML = ch.map((c) => {
      const pd = c[activePeriod] || {};
      const s = pd.sessions || 0, pv = pd.pageViews || 0, ev = pd.events || 0, sg = pd.signups || 0;
      tSess += s; tPV += pv; tEv += ev; tSign += sg;
      const conv = pct(sg, s);
      return `<tr>
        <td>${c.label || c.source}</td>
        <td class="num">${fmt(s)}</td>
        <td class="num">${fmt(pv)}</td>
        <td class="num">${fmt(ev)}</td>
        <td class="num">${s ? fmtPct(conv) : "—"}</td>
      </tr>`;
    }).join("");

    tfoot.innerHTML = `<tr>
      <td>مجموع</td>
      <td class="num">${fmt(tSess)}</td>
      <td class="num">${fmt(tPV)}</td>
      <td class="num">${fmt(tEv)}</td>
      <td class="num">${tSess ? fmtPct(pct(tSign, tSess)) : "—"}</td>
    </tr>`;
  }

  /* ============================================================
     ۷) نمودار منبع ورود بازیکنان (بار افقی)
     ============================================================ */
  function renderSourceChart() {
    const sb = (D.sourceBreakdown || []).slice().sort((a, b) => b.count - a.count);
    const box = $("#sourceChart");
    if (!sb.length) { showEmpty(box, "داده‌ای موجود نیست."); return; }

    new Chart(box, {
      type: "bar",
      data: {
        labels: sb.map((s) => s.label),
        datasets: [{ data: sb.map((s) => s.count),
          backgroundColor: PALETTE.map((c) => c + "cc"),
          borderColor: PALETTE, borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (c) => " " + fmt(c.raw) + " بازیکن" } }
        },
        scales: {
          x: { grid: GRID, ticks: { callback: (v) => toFa(v.toLocaleString("en-US")) } },
          y: { grid: { display: false } }
        }
      }
    });
  }

  /* ============================================================
     ۸) نمودار انواع پیش‌بینی (دونات)
     ============================================================ */
  function renderPredictionChart() {
    const pt = (D.predictionTypes || []).filter((p) => (p.count || 0) > 0);
    const box = $("#predictionChart");
    if (!pt.length) { showEmpty(box, "هنوز پیش‌بینی‌ای به تفکیک نوع ثبت نشده."); return; }

    new Chart(box, {
      type: "doughnut",
      data: {
        labels: pt.map((p) => p.name),
        datasets: [{ data: pt.map((p) => p.count),
          backgroundColor: PALETTE, borderColor: "#0f1426", borderWidth: 2 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: "55%",
        plugins: { legend: { position: "bottom" },
          tooltip: { callbacks: { label: (c) => " " + c.label + ": " + fmt(c.raw) } } }
      }
    });
  }

  /* ============================================================
     ۸) نگهداشت و تعامل
     ============================================================ */
  function renderRetention() {
    const r = D.retention || {};
    $("#retentionGrid").innerHTML = [
      { v: r.invites,     l: "دعوت دوست",            sub: fmt(r.invitePoints || 0) + " امتیاز" },
      { v: r.gmQuestions, l: "سوال گرداننده",          sub: fmt(r.gmQuestionPoints || 0) + " امتیاز" },
      { v: r.streakBonus, l: "حضور سری (Streak)",     sub: fmt(r.streakPoints || 0) + " امتیاز" },
      { v: r.matchScored, l: "پیش‌بینی امتیازگرفته",   sub: fmt(r.matchPoints || 0) + " امتیاز" },
    ].map((x) => `<div class="mini-card"><div class="m-val">${fmt(x.v || 0)}</div><div class="m-label">${x.l}</div>${x.sub ? `<div class="m-sub">${x.sub}</div>` : ""}</div>`).join("");

    const streaks = [
      { l: "۷ روز", v: r.streak7 || 0 },
      { l: "۱۴ روز", v: r.streak14 || 0 },
      { l: "۳۰ روز", v: r.streak30 || 0 }
    ];
    const max = Math.max(...streaks.map((s) => s.v), 1);
    $("#streakBlock").innerHTML = streaks.map((s) =>
      `<div class="streak-row">
        <span class="s-label">حضور ${s.l}</span>
        <span class="s-track"><span class="s-fill" style="width:${pct(s.v, max)}%"></span></span>
        <span class="s-num">${fmt(s.v)}</span>
      </div>`).join("");
  }

  /* ============================================================
     ۹) کاربران جدید/قدیمی
     ============================================================ */
  function renderUsers() {
    const u = D.users || {};
    const nw = u.newUsers || 0, old = u.oldUsers || 0, tot = nw + old;
    const split = $("#userSplit");
    if (!tot) {
      split.innerHTML = '<div class="sp old" style="flex:1">داده‌ای ثبت نشده</div>';
    } else {
      split.innerHTML =
        `<div class="sp new" style="flex:${nw || 0.0001}" title="کاربر جدید">${nw ? fmtPct(pct(nw, tot)) : ""}</div>
         <div class="sp old" style="flex:${old || 0.0001}" title="کاربر قدیمی">${old ? fmtPct(pct(old, tot)) : ""}</div>`;
    }
    $("#userGrid").innerHTML = [
      { v: nw, l: "کاربر جدید (کمپین)" },
      { v: old, l: "کاربر قدیمی (OTP)" }
    ].map((x) => `<div class="mini-card"><div class="m-val">${fmt(x.v)}</div><div class="m-label">${x.l}</div></div>`).join("");
  }

  /* ============================================================
     ۱۰) پیش‌بینی‌های ویژه ایران
     ============================================================ */
  function renderIran() {
    const ir = D.iran || {};
    $("#iranGrid").innerHTML = [
      { v: ir.ascensionGuess, l: "صعود ایران؟" },
      { v: ir.firstScorerGuess, l: "اولین گلزن" },
      { v: ir.bestResultGuess, l: "بهترین نتیجه" }
    ].map((x) => `<div class="mini-card"><div class="m-val">${fmt(x.v || 0)}</div><div class="m-label">${x.l}</div></div>`).join("");
  }

  /* ---------- نمایش پیام خالی روی جای نمودار ---------- */
  function showEmpty(canvas, msg) {
    const p = document.createElement("p");
    p.className = "empty";
    p.textContent = msg;
    canvas.replaceWith(p);
  }

  /* ---------- اجرا ---------- */
  function init() {
    renderHeader();
    renderKpis();
    renderTrend();
    renderFunnel();
    renderChannelChart();
    renderChannelTable();
    renderSourceChart();
    renderPredictionChart();
    renderRetention();
    renderUsers();
    renderIran();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
