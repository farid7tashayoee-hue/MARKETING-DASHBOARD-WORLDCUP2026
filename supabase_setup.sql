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
  platform      TEXT DEFAULT 'other',
  sessions      INTEGER DEFAULT 0,
  page_views    INTEGER DEFAULT 0,
  events        INTEGER DEFAULT 0,
  user_sessions INTEGER DEFAULT 0,
  clicks        INTEGER DEFAULT 0,
  members       INTEGER DEFAULT 0,
  signups       INTEGER DEFAULT 0,
  purchases     INTEGER DEFAULT 0,
  basket        INTEGER DEFAULT 0,
  spend_toman   BIGINT DEFAULT 0,
  budget_toman  BIGINT,
  start_date    DATE,
  end_date      DATE,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- اگر جدول از قبل بدون این ستون‌ها ساخته شده (نصب‌های قدیمی‌تر)
ALTER TABLE campaign_channels ADD COLUMN IF NOT EXISTS clicks       INTEGER DEFAULT 0;
ALTER TABLE campaign_channels ADD COLUMN IF NOT EXISTS members      INTEGER DEFAULT 0;
ALTER TABLE campaign_channels ADD COLUMN IF NOT EXISTS platform     TEXT DEFAULT 'other';
ALTER TABLE campaign_channels ADD COLUMN IF NOT EXISTS start_date   DATE;
ALTER TABLE campaign_channels ADD COLUMN IF NOT EXISTS end_date     DATE;
ALTER TABLE campaign_channels ADD COLUMN IF NOT EXISTS budget_toman BIGINT;

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

CREATE TABLE IF NOT EXISTS campaign_game_stats (
  id                     UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id            UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  total_users            INTEGER DEFAULT 0,
  total_referrers        INTEGER DEFAULT 0,
  users_with_ticket      INTEGER DEFAULT 0,
  users_without_ticket   INTEGER DEFAULT 0,
  max_tickets_per_user   INTEGER DEFAULT 0,
  total_tickets          INTEGER DEFAULT 0,
  streak_tickets         INTEGER DEFAULT 0,
  referral_tickets       INTEGER DEFAULT 0,
  raffle_tickets         INTEGER DEFAULT 0,
  referral_reward_tickets INTEGER DEFAULT 0,
  streak3day_tickets     INTEGER DEFAULT 0,
  golden_tickets         INTEGER DEFAULT 0,
  instagram_tickets      INTEGER DEFAULT 0,
  updated_at             TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(campaign_id)
);

-- دسترسی از طریق کلید عمومی (anon key)
ALTER TABLE campaigns          DISABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_kpis      DISABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_channels  DISABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_influencers DISABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_game_stats  DISABLE ROW LEVEL SECURITY;
