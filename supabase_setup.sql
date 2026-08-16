-- ============================================================
-- پایگاه داده کمپین‌های اکسیراز
-- این فایل را یک‌بار در SQL Editor سوپابیس اجرا کنید
-- ============================================================

CREATE TABLE IF NOT EXISTS campaigns (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT NOT NULL,
  slug        TEXT UNIQUE,
  start_date  DATE,
  end_date    DATE,
  budget      BIGINT DEFAULT 0,
  description TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS campaign_kpis (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id  UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  signups      INTEGER DEFAULT 0,
  site_signups INTEGER DEFAULT 0,
  total_preds  INTEGER DEFAULT 0,
  visits       INTEGER DEFAULT 0,
  active_users INTEGER DEFAULT 0,
  sessions     INTEGER DEFAULT 0,
  page_views   INTEGER DEFAULT 0,
  events       INTEGER DEFAULT 0,
  updated_at   TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(campaign_id)
);

CREATE TABLE IF NOT EXISTS campaign_channels (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id   UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  source        TEXT NOT NULL,
  label         TEXT,
  sessions      INTEGER DEFAULT 0,
  page_views    INTEGER DEFAULT 0,
  events        INTEGER DEFAULT 0,
  user_sessions INTEGER DEFAULT 0,
  signups       INTEGER DEFAULT 0,
  purchases     INTEGER DEFAULT 0,
  basket        INTEGER DEFAULT 0,
  spend_toman   BIGINT DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS campaign_influencers (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id  UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  name         TEXT NOT NULL,
  platform     TEXT,
  handle       TEXT,
  post_type    TEXT DEFAULT 'post',
  impressions  INTEGER DEFAULT 0,
  reach        INTEGER DEFAULT 0,
  story_views  INTEGER DEFAULT 0,
  link_clicks  INTEGER DEFAULT 0,
  utm_sessions INTEGER DEFAULT 0,
  utm_signups  INTEGER DEFAULT 0,
  purchases    INTEGER DEFAULT 0,
  basket       INTEGER DEFAULT 0,
  spend_toman  BIGINT DEFAULT 0,
  notes        TEXT,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- دسترسی از طریق کلید عمومی (anon key)
ALTER TABLE campaigns          DISABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_kpis      DISABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_channels  DISABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_influencers DISABLE ROW LEVEL SECURITY;
