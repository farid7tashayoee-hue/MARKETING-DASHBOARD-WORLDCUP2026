'use strict';

// ============ Supabase Config ============
const SB_URL = 'https://dhcjgqkvzzdqjlxidnsa.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoY2pncWt2enpkcWpseGlkbnNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2MzU0MTEsImV4cCI6MjA5ODIxMTQxMX0.6pKbpLM9iUD4Ev543q0MQGFZHgvXwcqy05aq-pAlLuY';
const SB_H = { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY, 'Content-Type': 'application/json' };

// ============ State ============
let liga24Id = null; // ID کمپین لیگ ۲۴ — set در maybeSeedLiga24

const state = {
  campaigns: [],
  allKpis: {},       // { campaignId: kpiRow }
  active: null,
  channels: [],
  influencers: [],
  kpis: null,
  view: 'list',      // 'list' | 'detail'
  tab: 'channels',
  chSort: { col: 'sessions', dir: -1 },
  infSort: { col: 'impressions', dir: -1 },
};

// ============ Utils ============
const FA = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
const toFa  = n => String(n).replace(/\d/g, d => FA[d]);
const fmt   = n => toFa((Math.round(n || 0)).toLocaleString('en-US'));
const pct   = (a, b) => b > 0 ? ((a / b) * 100).toFixed(1) : null;

function fmtMoney(t) {
  if (!t) return '—';
  if (t >= 1e9) return toFa((t / 1e9).toFixed(1)) + ' میلیارد';
  if (t >= 1e6) return toFa(Math.round(t / 1e6)) + ' میلیون';
  return fmt(t) + ' ت';
}

const $id = id => document.getElementById(id);
const palette = ['#e8c156','#2f6fed','#1faa6b','#e0489e','#2bb8c4','#8b5cf6','#e23744','#f4a23a','#a3e635','#fb923c'];

// ============ Supabase API ============
async function sb(path, method = 'GET', body = null, extra = {}) {
  const opts = { method, headers: { ...SB_H, ...extra } };
  if (body !== null) opts.body = JSON.stringify(body);
  const r = await fetch(SB_URL + path, opts);
  if (!r.ok) throw new Error(`SB ${method} ${path}: ${r.status}`);
  const text = await r.text();
  return text ? JSON.parse(text) : null;
}

// ============ Campaign CRUD ============
async function loadCampaigns() {
  state.campaigns = await sb('/rest/v1/campaigns?select=*&order=created_at.asc') || [];
}

async function createCampaign(d) {
  const row = await sb('/rest/v1/campaigns', 'POST', d, { 'Prefer': 'return=representation' });
  return Array.isArray(row) ? row[0] : row;
}

async function deleteCampaignById(id) {
  await sb(`/rest/v1/campaigns?id=eq.${id}`, 'DELETE');
}

// ============ KPI CRUD ============
async function loadAllKpis() {
  const rows = await sb('/rest/v1/campaign_kpis?select=*') || [];
  state.allKpis = {};
  rows.forEach(r => { state.allKpis[r.campaign_id] = r; });
}

async function loadKpis(cid) {
  const rows = await sb(`/rest/v1/campaign_kpis?campaign_id=eq.${cid}&select=*`) || [];
  state.kpis = rows[0] || null;
}

async function upsertKpis(cid, d) {
  const exists = state.kpis && state.kpis.campaign_id === cid;
  if (exists) {
    await sb(`/rest/v1/campaign_kpis?campaign_id=eq.${cid}`, 'PATCH', { ...d, updated_at: new Date().toISOString() });
  } else {
    await sb('/rest/v1/campaign_kpis', 'POST', { ...d, campaign_id: cid }, { 'Prefer': 'return=minimal' });
  }
  state.kpis = { ...(state.kpis || {}), ...d, campaign_id: cid };
  state.allKpis[cid] = state.kpis;
}

// ============ Channel CRUD ============
function buildLiga24Channels(cid) {
  return (window.CAMPAIGN_DATA.channels || [])
    .filter(ch => ch.campaign && (ch.campaign.sessions > 0 || (ch.campaign.signups || 0) > 0))
    .map((ch, i) => ({
      id: 'seed-' + i,
      campaign_id: cid,
      source: ch.source,
      label: ch.label,
      sessions:      ch.campaign.sessions      || 0,
      page_views:    ch.campaign.pageViews      || 0,
      events:        ch.campaign.events         || 0,
      user_sessions: ch.campaign.userSessions   || 0,
      signups:       ch.campaign.signups        || 0,
      purchases:     0,
      basket:        0,
      spend_toman:   ch.spendToman              || 0,
      _seeded: true,
    }));
}

async function loadChannels(cid) {
  state.channels = await sb(`/rest/v1/campaign_channels?campaign_id=eq.${cid}&select=*`) || [];
}

async function createChannels(cid, rows) {
  for (const r of rows) {
    try {
      await sb('/rest/v1/campaign_channels', 'POST',
        { ...r, campaign_id: cid },
        { 'Prefer': 'return=minimal' }
      );
    } catch(e) {
      console.error('[ch insert fail]', r.source, e.message);
    }
  }
}

async function deleteChannelById(id) {
  await sb(`/rest/v1/campaign_channels?id=eq.${id}`, 'DELETE');
}

// ============ Influencer CRUD ============
async function loadInfluencers(cid) {
  state.influencers = await sb(`/rest/v1/campaign_influencers?campaign_id=eq.${cid}&select=*&order=created_at.asc`) || [];
}

async function createInfluencer(cid, d) {
  await sb('/rest/v1/campaign_influencers', 'POST', { ...d, campaign_id: cid }, { 'Prefer': 'return=minimal' });
}

async function deleteInfluencerById(id) {
  await sb(`/rest/v1/campaign_influencers?id=eq.${id}`, 'DELETE');
}

// ============ Liga 24 Seeding ============
async function maybeSeedLiga24() {
  const D = window.CAMPAIGN_DATA;
  if (!D) return;

  const existing = await sb('/rest/v1/campaigns?slug=eq.liga24-worldcup-2026&select=id');
  let campId = existing && existing.length > 0 ? existing[0].id : null;

  if (campId) {
    liga24Id = campId;
    return; // کانال‌ها مستقیم از data.js خونده میشن
  }

  notif('در حال وارد کردن داده‌های لیگ ۲۴...', 'info');

  const camp = await createCampaign({
    name: 'لیگ ۲۴ عیار — جام جهانی ۲۰۲۶',
    slug: 'liga24-worldcup-2026',
    start_date: '2025-06-11',
    end_date: '2025-07-19',
    budget: 0,
    description: 'کمپین پیش‌بینی جام جهانی ۲۰۲۶ اکسیراز — ۱۴۰۴/۰۳/۲۱ تا ۱۴۰۴/۰۴/۲۸'
  });
  const cid = camp.id;
  liga24Id = cid;

  const k = D.kpis || {};
  await sb('/rest/v1/campaign_kpis', 'POST', {
    campaign_id: cid,
    signups:      k.signups           || 0,
    site_signups: k.siteSignups        || 0,
    total_preds:  k.totalPredictions   || 0,
    visits:       k.visits             || 0,
    active_users: k.activeUsersAvg     || 0,
    sessions:     313724,
    page_views:   629250,
    events:       1405962
  }, { 'Prefer': 'return=minimal' });

  const chRows = (D.channels || [])
    .filter(ch => ch.campaign && (ch.campaign.sessions > 0 || (ch.campaign.signups || 0) > 0))
    .map(ch => ({
      source:        ch.source,
      label:         ch.label,
      sessions:      ch.campaign.sessions      || 0,
      page_views:    ch.campaign.pageViews      || 0,
      events:        ch.campaign.events         || 0,
      user_sessions: ch.campaign.userSessions   || 0,
      signups:       ch.campaign.signups        || 0,
      spend_toman:   ch.spendToman             || 0,
    }));

  if (chRows.length) await createChannels(cid, chRows);
}

// ============ View Switching ============
function showView(v) {
  state.view = v;
  $id('view-list').style.display   = v === 'list'   ? '' : 'none';
  $id('view-detail').style.display = v === 'detail' ? '' : 'none';
}

function switchTab(name) {
  state.tab = name;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === name));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.toggle('active', p.id === 'tab-' + name));
  if (name === 'channels')    renderChannelTable();
  if (name === 'influencers') renderInfluencerTable();
  if (name === 'compare')     renderCompare();
}

// ============ Render: Campaign List ============
function renderList() {
  showView('list');
  const grid = $id('campaign-grid');
  if (!state.campaigns.length) {
    grid.innerHTML = '<div class="empty-state"><p>هنوز کمپینی ثبت نشده</p><p style="font-size:.85rem;opacity:.5">با دکمه «+ کمپین جدید» شروع کنید</p></div>';
    return;
  }
  grid.innerHTML = state.campaigns.map(c => {
    const k = state.allKpis[c.id] || {};
    const days = c.start_date && c.end_date
      ? Math.round((new Date(c.end_date) - new Date(c.start_date)) / 86400000) + ' روز'
      : '—';
    return `<div class="camp-card" onclick="selectCampaign('${c.id}')">
      <div class="camp-card-badge">${c.start_date ? c.start_date.slice(0,7) : '—'}</div>
      <h3 class="camp-card-name">${c.name}</h3>
      ${c.description ? `<p class="camp-card-desc">${c.description}</p>` : ''}
      <div class="camp-card-stats">
        <span>📅 ${days}</span>
        ${k.signups ? `<span>👤 ${fmt(k.signups)} ثبت‌نام</span>` : ''}
        ${k.sessions ? `<span>📊 ${fmt(k.sessions)} نشست</span>` : ''}
      </div>
      <div class="camp-card-footer">
        ${c.budget ? `<span>بودجه: ${fmtMoney(c.budget)}</span>` : '<span></span>'}
        <span class="camp-card-arrow">مشاهده ←</span>
      </div>
    </div>`;
  }).join('');
}

// ============ Render: Campaign Detail ============
window.selectCampaign = async function(id) {
  state.active = state.campaigns.find(c => c.id === id);
  if (!state.active) return;

  $id('campaign-selector').value = id;
  $id('detail-title').textContent = state.active.name;

  const sd = state.active.start_date || '';
  const ed = state.active.end_date   || '';
  $id('detail-dates').textContent = sd && ed ? sd + ' تا ' + ed : '';

  showView('detail');
  loading(true);
  switchTab('channels');

  try {
    const isLiga24 = window.CAMPAIGN_DATA && state.active && state.active.slug === 'liga24-worldcup-2026';
    if (isLiga24) {
      state.channels = buildLiga24Channels(id);
      await Promise.all([loadKpis(id), loadInfluencers(id)]);
    } else {
      await Promise.all([loadKpis(id), loadChannels(id), loadInfluencers(id)]);
    }
    renderKpiCards();
    renderChannelTable();
  } finally {
    loading(false);
  }
};

function renderKpiCards() {
  const k = state.kpis || {};
  const defs = [
    { icon:'👤', label:'ثبت‌نام اکسیراز',    key:'signups'      },
    { icon:'🌐', label:'ثبت‌نام سایت',        key:'site_signups' },
    { icon:'⚽', label:'پیش‌بینی',            key:'total_preds'  },
    { icon:'👁', label:'بازدید (Visits)',      key:'visits'       },
    { icon:'📊', label:'نشست (Sessions)',      key:'sessions'     },
    { icon:'📄', label:'صفحه‌بازدید',         key:'page_views'   },
    { icon:'⚡', label:'رویداد (Events)',      key:'events'       },
  ];
  $id('kpi-cards').innerHTML = defs.map(d => `
    <div class="kpi-card">
      <div class="kpi-icon">${d.icon}</div>
      <div class="kpi-val">${fmt(k[d.key] || 0)}</div>
      <div class="kpi-lbl">${d.label}</div>
    </div>
  `).join('');
}

// ============ Render: Channel Table ============
let chChart = null;
function renderChannelTable() {
  const sorted = [...state.channels].sort((a, b) => {
    const av = a[state.chSort.col] || 0, bv = b[state.chSort.col] || 0;
    return state.chSort.dir * (bv - av);
  });

  if (!sorted.length) {
    $id('channel-tbody').innerHTML = '<tr><td colspan="10" class="empty-row">هنوز کانالی اضافه نشده</td></tr>';
  } else {
    $id('channel-tbody').innerHTML = sorted.map(ch => {
      const conv = pct(ch.signups || 0, ch.sessions || 0);
      return `<tr>
        <td class="td-label">${ch.label || ch.source}</td>
        <td>${fmt(ch.sessions)}</td>
        <td>${fmt(ch.page_views)}</td>
        <td>${fmt(ch.events)}</td>
        <td>${fmt(ch.user_sessions)}</td>
        <td>${fmt(ch.signups)}</td>
        <td>${fmt(ch.purchases)}</td>
        <td>${conv ? toFa(conv) + '٪' : '—'}</td>
        <td>${ch.spend_toman ? fmtMoney(ch.spend_toman) : '—'}</td>
        <td>${ch._seeded ? '' : `<button class="btn-del" onclick="delChannel('${ch.id}')">حذف</button>`}</td>
      </tr>`;
    }).join('');
  }

  // Chart
  const top = sorted.slice(0, 12);
  const canvas = $id('ch-chart');
  if (!canvas || !window.Chart || !top.length) return;
  if (chChart) { chChart.destroy(); chChart = null; }
  chChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: top.map(c => c.label || c.source),
      datasets: [
        { label: 'نشست', data: top.map(c => c.sessions || 0), backgroundColor: palette[0] + 'cc' },
        { label: 'ثبت‌نام', data: top.map(c => c.signups || 0), backgroundColor: palette[2] + 'cc' },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { labels: { color: 'rgba(243,240,230,.7)', font: { family: 'Vazirmatn' } } },
        tooltip: { rtl: true, bodyFont: { family: 'Vazirmatn' }, titleFont: { family: 'Vazirmatn' } }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,.06)' }, ticks: { color: 'rgba(243,240,230,.55)' } },
        y: { grid: { color: 'rgba(255,255,255,.06)' }, ticks: { color: 'rgba(243,240,230,.75)', font: { family: 'Vazirmatn', size: 11 } } }
      }
    }
  });
}

// ============ Render: Influencer Table ============
let infChart = null;
function renderInfluencerTable() {
  const sorted = [...state.influencers].sort((a, b) => {
    const av = a[state.infSort.col] || 0, bv = b[state.infSort.col] || 0;
    return state.infSort.dir * (bv - av);
  });

  if (!sorted.length) {
    $id('inf-tbody').innerHTML = '<tr><td colspan="12" class="empty-row">هنوز اینفلوئنسری اضافه نشده</td></tr>';
  } else {
    $id('inf-tbody').innerHTML = sorted.map(inf => {
      const ctr  = pct(inf.link_clicks || 0, inf.impressions || 0);
      const conv = pct(inf.utm_signups || 0, inf.link_clicks  || 0);
      return `<tr>
        <td class="td-label">${inf.name}</td>
        <td>${platformLbl(inf.platform)}</td>
        <td style="direction:ltr;text-align:right">${inf.handle ? '@'+inf.handle : '—'}</td>
        <td>${postTypeLbl(inf.post_type)}</td>
        <td>${fmt(inf.impressions)}</td>
        <td>${fmt(inf.story_views)}</td>
        <td>${fmt(inf.link_clicks)}</td>
        <td>${ctr  ? toFa(ctr)  + '٪' : '—'}</td>
        <td>${fmt(inf.utm_signups)}</td>
        <td>${conv ? toFa(conv) + '٪' : '—'}</td>
        <td>${inf.spend_toman ? fmtMoney(inf.spend_toman) : '—'}</td>
        <td><button class="btn-del" onclick="delInfluencer('${inf.id}')">حذف</button></td>
      </tr>`;
    }).join('');
  }

  // Chart
  const top = sorted.filter(i => i.impressions > 0).slice(0, 10);
  const canvas = $id('inf-chart');
  if (!canvas || !window.Chart || !top.length) return;
  if (infChart) { infChart.destroy(); infChart = null; }
  infChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: top.map(i => i.name),
      datasets: [
        { label: 'ایمپرشن', data: top.map(i => i.impressions || 0), backgroundColor: palette[0] + 'cc' },
        { label: 'کلیک لینک', data: top.map(i => i.link_clicks || 0), backgroundColor: palette[2] + 'cc' },
        { label: 'ثبت‌نام', data: top.map(i => i.utm_signups || 0), backgroundColor: palette[3] + 'cc' },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { labels: { color: 'rgba(243,240,230,.7)', font: { family: 'Vazirmatn' } } },
        tooltip: { rtl: true, bodyFont: { family: 'Vazirmatn' }, titleFont: { family: 'Vazirmatn' } }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,.06)' }, ticks: { color: 'rgba(243,240,230,.55)' } },
        y: { grid: { color: 'rgba(255,255,255,.06)' }, ticks: { color: 'rgba(243,240,230,.75)', font: { family: 'Vazirmatn', size: 11 } } }
      }
    }
  });
}

function platformLbl(p) {
  return { instagram:'اینستاگرام', telegram:'تلگرام', youtube:'یوتیوب', twitter:'توییتر', tiktok:'تیک‌تاک' }[p] || p || '—';
}
function postTypeLbl(t) {
  return { post:'پست', story:'استوری', reel:'ریل', video:'ویدیو', multi:'چند رسانه' }[t] || t || 'پست';
}

// ============ Render: Compare ============
function renderCompare() {
  const ctr = $id('compare-content');
  if (state.campaigns.length < 2) {
    ctr.innerHTML = '<p class="empty-row">برای مقایسه به حداقل ۲ کمپین نیاز دارید.</p>';
    return;
  }

  const kpiKeys = [
    { key:'signups',      label:'ثبت‌نام اکسیراز' },
    { key:'site_signups', label:'ثبت‌نام سایت' },
    { key:'total_preds',  label:'پیش‌بینی' },
    { key:'visits',       label:'بازدید' },
    { key:'sessions',     label:'نشست' },
    { key:'page_views',   label:'صفحه‌بازدید' },
    { key:'events',       label:'رویداد' },
  ];

  const header = `<tr><th>متریک</th>${state.campaigns.map(c => `<th>${c.name}</th>`).join('')}</tr>`;
  const rows = kpiKeys.map(kd => {
    const vals = state.campaigns.map(c => {
      const k = state.allKpis[c.id] || {};
      return `<td>${fmt(k[kd.key] || 0)}</td>`;
    }).join('');
    return `<tr><td class="td-label">${kd.label}</td>${vals}</tr>`;
  }).join('');

  ctr.innerHTML = `<div class="table-wrap"><table class="data-table"><thead>${header}</thead><tbody>${rows}</tbody></table></div>`;
}

// ============ Selector ============
function updateSelector() {
  const sel = $id('campaign-selector');
  const cur = state.active ? state.active.id : '';
  sel.innerHTML = '<option value="">— انتخاب کمپین —</option>' +
    state.campaigns.map(c => `<option value="${c.id}"${c.id === cur ? ' selected' : ''}>${c.name}</option>`).join('');
}

// ============ Modals ============
function openModal(id) {
  $id('modal-overlay').classList.add('active');
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
  $id(id).classList.add('active');
}
function closeModal() {
  $id('modal-overlay').classList.remove('active');
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}
window.closeModal = closeModal;

window.openModalCampaign = function() { $id('form-campaign').reset(); openModal('modal-campaign'); };
window.openModalKpis = function() {
  if (!state.active) return;
  const k = state.kpis || {};
  ['signups','site_signups','total_preds','visits','active_users','sessions','page_views','events']
    .forEach(f => { const el = $id('k-'+f); if(el) el.value = k[f] || ''; });
  openModal('modal-kpis');
};
window.openModalChannel    = function() { $id('form-channel').reset();    openModal('modal-channel');    };
window.openModalInfluencer = function() { $id('form-influencer').reset(); openModal('modal-influencer'); };

// ============ Delete handlers ============
window.delChannel = async function(id) {
  if (!confirm('این کانال حذف شود؟')) return;
  try {
    await deleteChannelById(id);
    state.channels = state.channels.filter(c => c.id !== id);
    renderChannelTable();
    notif('کانال حذف شد');
  } catch(e) { notif(e.message, 'error'); }
};

window.delInfluencer = async function(id) {
  if (!confirm('این اینفلوئنسر حذف شود؟')) return;
  try {
    await deleteInfluencerById(id);
    state.influencers = state.influencers.filter(i => i.id !== id);
    renderInfluencerTable();
    notif('اینفلوئنسر حذف شد');
  } catch(e) { notif(e.message, 'error'); }
};

// ============ Sort ============
window.sortCh = function(col) {
  state.chSort.dir = state.chSort.col === col ? state.chSort.dir * -1 : -1;
  state.chSort.col = col;
  renderChannelTable();
};
window.sortInf = function(col) {
  state.infSort.dir = state.infSort.col === col ? state.infSort.dir * -1 : -1;
  state.infSort.col = col;
  renderInfluencerTable();
};

// ============ Form Submissions ============
async function onSubmitCampaign(e) {
  e.preventDefault();
  const name = $id('ci-name').value.trim();
  if (!name) return;
  const slug = name.toLowerCase().replace(/[^a-z0-9؀-ۿ\s]/g,'').replace(/\s+/g,'-') + '-' + Date.now();
  try {
    loading(true);
    const camp = await createCampaign({
      name,
      slug,
      start_date: $id('ci-start').value || null,
      end_date:   $id('ci-end').value   || null,
      budget:     parseInt($id('ci-budget').value) || 0,
      description: $id('ci-desc').value.trim()
    });
    state.campaigns.push(camp);
    updateSelector();
    renderList();
    closeModal();
    notif('کمپین اضافه شد');
  } catch(e) { notif(e.message, 'error'); }
  finally { loading(false); }
}

async function onSubmitKpis(e) {
  e.preventDefault();
  if (!state.active) return;
  const d = {};
  ['signups','site_signups','total_preds','visits','active_users','sessions','page_views','events']
    .forEach(f => { const el = $id('k-'+f); if(el) d[f] = parseInt(el.value) || 0; });
  try {
    loading(true);
    await upsertKpis(state.active.id, d);
    renderKpiCards();
    closeModal();
    notif('KPI‌ها به‌روز شدند');
  } catch(e) { notif(e.message, 'error'); }
  finally { loading(false); }
}

async function onSubmitChannel(e) {
  e.preventDefault();
  if (!state.active) return;
  const label = $id('ch-label').value.trim();
  if (!label) return;
  const d = {
    source:        $id('ch-source').value.trim()  || label.toLowerCase().replace(/\s/g,'-'),
    label,
    sessions:      parseInt($id('ch-sessions').value)  || 0,
    page_views:    parseInt($id('ch-pageviews').value) || 0,
    events:        parseInt($id('ch-events').value)    || 0,
    user_sessions: parseInt($id('ch-users').value)     || 0,
    signups:       parseInt($id('ch-signups').value)   || 0,
    purchases:     parseInt($id('ch-purchases').value) || 0,
    basket:        parseInt($id('ch-basket').value)    || 0,
    spend_toman:   parseInt($id('ch-spend').value)     || 0,
  };
  try {
    loading(true);
    await createChannels(state.active.id, [d]);
    await loadChannels(state.active.id);
    renderChannelTable();
    closeModal();
    notif('کانال اضافه شد');
  } catch(e) { notif(e.message, 'error'); }
  finally { loading(false); }
}

async function onSubmitInfluencer(e) {
  e.preventDefault();
  if (!state.active) return;
  const name = $id('inf-name').value.trim();
  if (!name) return;
  const d = {
    name,
    platform:     $id('inf-platform').value,
    handle:       $id('inf-handle').value.trim().replace(/^@/,''),
    post_type:    $id('inf-posttype').value,
    impressions:  parseInt($id('inf-impressions').value)  || 0,
    reach:        parseInt($id('inf-reach').value)        || 0,
    story_views:  parseInt($id('inf-storyviews').value)   || 0,
    link_clicks:  parseInt($id('inf-linkclicks').value)   || 0,
    utm_sessions: parseInt($id('inf-utmsessions').value)  || 0,
    utm_signups:  parseInt($id('inf-utmsignups').value)   || 0,
    purchases:    parseInt($id('inf-purchases').value)    || 0,
    basket:       parseInt($id('inf-basket').value)       || 0,
    spend_toman:  parseInt($id('inf-spend').value)        || 0,
    notes:        $id('inf-notes').value.trim()
  };
  try {
    loading(true);
    await createInfluencer(state.active.id, d);
    await loadInfluencers(state.active.id);
    renderInfluencerTable();
    closeModal();
    notif('اینفلوئنسر اضافه شد');
  } catch(e) { notif(e.message, 'error'); }
  finally { loading(false); }
}

// ============ Loading / Notification ============
function loading(on) {
  $id('loading-bar').style.display = on ? '' : 'none';
}

window.backToList = function() {
  state.active = null;
  $id('campaign-selector').value = '';
  showView('list');
};

function notif(msg, type = 'success') {
  const el = $id('notif-bar');
  el.textContent = msg;
  el.className = 'notif-bar ' + type;
  el.style.display = '';
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.style.display = 'none'; }, 3200);
}

// ============ Init ============
async function init() {
  // Auth
  const gate = $id('password-gate');
  function hidGate() {
    gate.style.transition = 'opacity .4s';
    gate.style.opacity = '0';
    setTimeout(() => { gate.style.display = 'none'; }, 420);
  }
  if (localStorage.getItem('l24_auth') === '1') hidGate();

  window.checkPassword = function() {
    const v = $id('pwd-input').value;
    if (v === 'ExiR@z_L24##') {
      localStorage.setItem('l24_auth', '1');
      hidGate();
    } else {
      const err = $id('pwd-error');
      err.textContent = 'رمز اشتباه است';
      err.classList.remove('shake'); void err.offsetWidth; err.classList.add('shake');
      $id('pwd-input').value = '';
      $id('pwd-input').focus();
    }
  };
  $id('pwd-input').addEventListener('keydown', e => { if (e.key === 'Enter') window.checkPassword(); });

  // Load data
  try {
    loading(true);
    await loadCampaigns();
    await maybeSeedLiga24();
    if (state.campaigns.length === 0) await loadCampaigns();

    await loadAllKpis();
    updateSelector();
    renderList();

    if (state.campaigns.length === 1) {
      await selectCampaign(state.campaigns[0].id);
    }
  } catch(err) {
    console.error(err);
    const isSetup = err.message.includes('404') || err.message.includes('42P01') || err.message.includes('relation');
    const msg = isSetup
      ? 'جداول پایگاه داده یافت نشد — لطفاً ابتدا فایل supabase_setup.sql را در Supabase SQL Editor اجرا کنید'
      : 'خطا: ' + err.message;
    showView('list');
    $id('campaign-grid').innerHTML = `<div class="empty-state"><p style="color:#e23744">⚠️ ${msg}</p></div>`;
  } finally {
    loading(false);
  }

  // Selector
  $id('campaign-selector').addEventListener('change', e => {
    if (e.target.value) selectCampaign(e.target.value);
    else { state.active = null; renderList(); }
  });

  // Overlay close
  $id('modal-overlay').addEventListener('click', closeModal);

  // Forms
  $id('form-campaign').addEventListener('submit', onSubmitCampaign);
  $id('form-kpis').addEventListener('submit', onSubmitKpis);
  $id('form-channel').addEventListener('submit', onSubmitChannel);
  $id('form-influencer').addEventListener('submit', onSubmitInfluencer);

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.addEventListener('click', () => switchTab(b.dataset.tab));
  });
}

document.addEventListener('DOMContentLoaded', init);
