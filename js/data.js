/* ============================================================
   لیگ ۲۴ عیار اکسیراز — داده‌های داشبورد KPI
   ============================================================
   این تنها فایلی است که برای به‌روزرسانی داشبورد باید دستی پر شود.
   فقط اعدادِ مقابلِ هر کلید را عوض کنید؛ بقیه‌ی محاسبات
   (CPA، نرخ تبدیل، درصدها، مجموع‌ها) خودکار انجام می‌شود.

   نکته‌ها:
   - همه‌ی مبالغ به «تومان» است.
   - اعداد را به‌صورت لاتین (انگلیسی) بنویسید: 1250 نه ۱۲۵۰.
     نمایش فارسی خودکار انجام می‌شود.
   - برای افزودن یک روز جدید، یک آبجکت تازه به آرایه‌ی daily اضافه کنید.
   ============================================================ */

const CAMPAIGN_DATA = {

  /* ---- اطلاعات کلی کمپین (نوار پیشرفت بالای صفحه) ---- */
  meta: {
    name: "لیگ ۲۴ عیار اکسیراز",
    slogan: "جایی که پیش‌بینی تو، طلا میشه!",
    tagline: "با پیش‌بینی‌های درست، شمش ۲۴ عیار ببر",
    totalDays: 39,
    currentDay: 24,
    totalMatches: 104,
    matchesPlayed: 88,
    nextDeadlineLabel: "پایان مهلت چیدمان حذفی",
    nextDeadlineDate: "۷ تیر",
    lastUpdated: "۱۳ تیر ۱۴۰۵ — ۱۴:۰۰"
  },

  /* ---- کارت‌های KPI اصلی ---- */
  kpis: {
    signups:          14523,   // واقعی
    signupsTarget:    0,
    activeUsersAvg:   21792,   // واقعی — کل بازیکنان فعال کمپین
    totalPredictions: 415637,  // واقعی — از پنل
    visits:           155412,  // واقعی — کل سشن ۳۰ روز
    totalSpendToman:  0        // از مجموع کانال‌ها محاسبه می‌شود
  },

  /* ---- روند روزانه — سشن و رویداد از نمودار پنل (تقریبی) ---- */
  daily: [
    { date: "۲۱ خرداد", signups: 0, predictions: 22000, activeUsers: 7000,  event: "افتتاحیه" },
    { date: "۲۲ خرداد", signups: 0, predictions: 57000, activeUsers: 9000  },
    { date: "۲۳ خرداد", signups: 0, predictions: 62000, activeUsers: 9500  },
    { date: "۲۴ خرداد", signups: 0, predictions: 64000, activeUsers: 9500  },
    { date: "۲۵ خرداد", signups: 0, predictions: 57000, activeUsers: 5500,  event: "ددلاین پیش‌بینی ایران" },
    { date: "۲۶ خرداد", signups: 0, predictions: 52000, activeUsers: 9000  },
    { date: "۲۷ خرداد", signups: 0, predictions: 62000, activeUsers: 9000  },
    { date: "۲۸ خرداد", signups: 0, predictions: 55000, activeUsers: 6500,  event: "ددلاین براکت" },
    { date: "۲۹ خرداد", signups: 0, predictions: 44000, activeUsers: 6000  },
    { date: "۳۰ خرداد", signups: 0, predictions: 38000, activeUsers: 8000  },
    { date: "۳۱ خرداد", signups: 0, predictions: 44000, activeUsers: 5500  },
    { date: "۱ تیر",    signups: 0, predictions: 27000, activeUsers: 9400  },
    { date: "۲ تیر",    signups: 0, predictions: 24000, activeUsers: 7000  },
    { date: "۳ تیر",    signups: 0, predictions: 19000, activeUsers: 5800  },
    { date: "۴ تیر",    signups: 0, predictions: 19000, activeUsers: 5800  },
    { date: "۵ تیر",    signups: 0, predictions: 20000, activeUsers: 6200  },
    { date: "۶ تیر",    signups: 0, predictions: 37000, activeUsers: 8000  },
    { date: "۷ تیر",    signups: 0, predictions: 19000, activeUsers: 5200,  event: "شروع مرحله حذفی" },
  ],

  /* ---- قیف اکتساب ---- */
  funnel: {
    visits:          155412,  // واقعی
    signups:         14523,   // واقعی
    firstPrediction: 0,
    returning:       0
  },

  /* ---- عملکرد کانال‌ها — داده سه بازه زمانی از پنل آنالیتیکس ---- */
  channels: [
    { source:"direct",     label:"مستقیم",                              spendToman:0,
      today:   {sessions:1115,  pageViews:2370,   events:3486,   signups:1075 },
      week7:   {sessions:16739, pageViews:36482,  events:62270,  signups:15781},
      month30: {sessions:52382, pageViews:138120, events:329644, signups:47746} },

    { source:"google",     label:"گوگل — ارگانیک",                     spendToman:0,
      today:   {sessions:1012,  pageViews:2454,  events:5492,   signups:702  },
      week7:   {sessions:14689, pageViews:35539, events:88952,  signups:9985 },
      month30: {sessions:32228, pageViews:85643, events:242617, signups:20634} },

    { source:"khabaronline", label:"خبرآنلاین — بنر استیکی",           spendToman:341000000,
      today:   {sessions:110,   pageViews:116,   events:127,   signups:2  },
      week7:   {sessions:2579,  pageViews:2948,  events:5366,  signups:54 },
      month30: {sessions:37076, pageViews:42861, events:85500, signups:318} },

    { source:"zoomit",     label:"زومیت — بنر استیکی",                 spendToman:180000000,
      today:   {sessions:236,  pageViews:246,   events:289,   signups:3  },
      week7:   {sessions:2501, pageViews:2737,  events:3815,  signups:55 },
      month30: {sessions:8980, pageViews:10117, events:15440, signups:260} },

    { source:"asanpardakht", label:"آسان‌پرداخت — ترنزکشن (A/B)",     spendToman:95000000,
      today:   {sessions:0,   pageViews:0,   events:0,    signups:0 },
      week7:   {sessions:0,   pageViews:0,   events:0,    signups:0 },
      month30: {sessions:610, pageViews:743, events:1238, signups:54} },

    { source:"asriran",    label:"عصر ایران — بنر",                    spendToman:28000000,
      today:   {sessions:227,  pageViews:242,   events:367,   signups:3  },
      week7:   {sessions:6291, pageViews:7591,  events:14181, signups:118},
      month30: {sessions:8946, pageViews:10278, events:17732, signups:172} },

    { source:"asanpardakht_sms", label:"آسان‌پرداخت — پیامک",         spendToman:32000000,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:11,  pageViews:27,   events:29,   signups:11 },
      month30: {sessions:413, pageViews:1475, events:2383, signups:395} },

    { source:"exiraz_sms24", label:"پیامک اکسیراز — عمومی",           spendToman:18000000,
      today:   {sessions:1,   pageViews:1,    events:1,    signups:0  },
      week7:   {sessions:12,  pageViews:16,   events:16,   signups:11 },
      month30: {sessions:777, pageViews:3234, events:4397, signups:767} },

    { source:"exiraz_24_iran_belg", label:"پیامک اکسیراز — ایران/بلژیک", spendToman:0,
      today:   {sessions:1,   pageViews:1,    events:1,    signups:1  },
      week7:   {sessions:130, pageViews:252,  events:285,  signups:129},
      month30: {sessions:981, pageViews:2246, events:5688, signups:976} },

    { source:"exiraz_24_reminder", label:"پیامک اکسیراز — یادآور",    spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:4,   pageViews:10,   events:14,   signups:4  },
      month30: {sessions:959, pageViews:2678, events:8193, signups:954} },

    { source:"exiraz_24_reminder1", label:"پیامک اکسیراز — یادآور ۱", spendToman:0,
      today:   {sessions:3,   pageViews:3,    events:3,    signups:3  },
      week7:   {sessions:47,  pageViews:61,   events:63,   signups:47 },
      month30: {sessions:927, pageViews:2398, events:6243, signups:918} },

    { source:"exiraz_24_sms_iran_new1stmatch", label:"پیامک اکسیراز — اولین بازی ایران", spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:44,  pageViews:54,   events:58,   signups:44 },
      month30: {sessions:655, pageViews:1693, events:5523, signups:653} },

    { source:"exiraz_24_1stretention", label:"پیامک اکسیراز — ریتنشن", spendToman:0,
      today:   {sessions:1,   pageViews:5,    events:5,    signups:1  },
      week7:   {sessions:625, pageViews:1613, events:3745, signups:621},
      month30: {sessions:625, pageViews:1613, events:3745, signups:621} },

    { source:"l24sabavision", label:"صباویژن — لینک",                 spendToman:0,
      today:   {sessions:0,    pageViews:0,    events:0,    signups:0 },
      week7:   {sessions:8,    pageViews:11,   events:11,   signups:0 },
      month30: {sessions:4062, pageViews:4383, events:5543, signups:47} },

    { source:"l24jaryan",  label:"جریان — لینک داخلی",               spendToman:0,
      today:   {sessions:1,    pageViews:1,    events:1,     signups:1   },
      week7:   {sessions:23,   pageViews:30,   events:43,    signups:23  },
      month30: {sessions:2978, pageViews:6876, events:21826, signups:1174} },

    { source:"bale_bazu24", label:"بله — بازو",                       spendToman:0,
      today:   {sessions:2,    pageViews:3,    events:3,    signups:2   },
      week7:   {sessions:39,   pageViews:49,   events:61,   signups:39  },
      month30: {sessions:1360, pageViews:5845, events:9761, signups:1326} },

    { source:"l24bale",    label:"بله — لیگ ۲۴",                      spendToman:0,
      today:   {sessions:21,   pageViews:49,   events:50,   signups:21  },
      week7:   {sessions:319,  pageViews:534,  events:552,  signups:318 },
      month30: {sessions:1194, pageViews:3206, events:5703, signups:1186} },

    { source:"l24agahsazan", label:"آگاه‌سازان — لینک",               spendToman:0,
      today:   {sessions:1,   pageViews:3,    events:13,   signups:1  },
      week7:   {sessions:7,   pageViews:14,   events:34,   signups:7  },
      month30: {sessions:765, pageViews:2550, events:5104, signups:752} },

    { source:"l24instagram", label:"اینستاگرام — لینک",               spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:28,  pageViews:49,   events:114,  signups:25 },
      month30: {sessions:367, pageViews:1099, events:2928, signups:285} },

    { source:"l24chavosh", label:"چاووش — لینک",                      spendToman:0,
      today:   {sessions:4,   pageViews:7,   events:17,  signups:4  },
      week7:   {sessions:267, pageViews:684, events:1228, signups:259},
      month30: {sessions:192, pageViews:526, events:851,  signups:185} },

    { source:"instagram",  label:"اینستاگرام — ارگانیک",              spendToman:0,
      today:   {sessions:3,   pageViews:10,  events:18,  signups:3 },
      week7:   {sessions:52,  pageViews:87,  events:146, signups:20},
      month30: {sessions:155, pageViews:398, events:897, signups:77} },

    { source:"telegram",   label:"تلگرام",                            spendToman:0,
      today:   {sessions:3,  pageViews:8,   events:19,  signups:3 },
      week7:   {sessions:59, pageViews:156, events:203, signups:58},
      month30: {sessions:96, pageViews:276, events:618, signups:89} },

    { source:"facebook",   label:"فیسبوک",                            spendToman:0,
      today:   {sessions:1, pageViews:1, events:1, signups:0},
      week7:   {sessions:2, pageViews:2, events:2, signups:0},
      month30: {sessions:2, pageViews:2, events:2, signups:0} },

    { source:"chatgpt",    label:"ChatGPT",                           spendToman:0,
      today:   {sessions:0, pageViews:0,  events:0,  signups:0},
      week7:   {sessions:4, pageViews:8,  events:18, signups:3},
      month30: {sessions:4, pageViews:8,  events:18, signups:3} },

    { source:"bing",       label:"بینگ",                              spendToman:0,
      today:   {sessions:0, pageViews:0, events:0,  signups:0},
      week7:   {sessions:2, pageViews:5, events:21, signups:2},
      month30: {sessions:2, pageViews:5, events:21, signups:2} },

    { source:"linkedin",   label:"لینکدین",                           spendToman:0,
      today:   {sessions:0, pageViews:0, events:0,  signups:0},
      week7:   {sessions:1, pageViews:3, events:10, signups:1},
      month30: {sessions:1, pageViews:3, events:10, signups:1} },

    { source:"duckduckgo", label:"داک‌داک‌گو",                         spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:1, pageViews:2, events:2, signups:1},
      month30: {sessions:1, pageViews:2, events:2, signups:1} },
  ],

  /* ---- بازه‌های زمانی (جایگزین قیف اکتساب) ---- */
  periods: [
    { label: "امروز",   sessions: 2742,   pageViews: 5520,   events: 9893,   userSessions: 1825  },
    { label: "۷ روز",  sessions: 44485,  pageViews: 88962,  events: 181221, userSessions: 27616 },
    { label: "۳۰ روز", sessions: 156282, pageViews: 326957, events: 778450, userSessions: 79018 },
  ],

  /* ---- منبع ورود بازیکنان (از فایل participants) ---- */
  sourceBreakdown: [
    { source: "google",                          label: "گوگل",                           count: 8382 },
    { source: "direct",                          label: "مستقیم",                         count: 5493 },
    { source: "l24jaryan",                       label: "جریان",                          count: 909  },
    { source: "bale_bazu24",                     label: "بله — بازو",                    count: 495  },
    { source: "exiraz_sms24",                    label: "پیامک اکسیراز — عمومی",         count: 450  },
    { source: "l24agahsazan",                    label: "آگاه‌سازان",                    count: 336  },
    { source: "asanpardakht_sms",                label: "آسان‌پرداخت — پیامک",           count: 229  },
    { source: "khabaronline",                    label: "خبرآنلاین",                     count: 217  },
    { source: "exiraz_24_reminder1",             label: "پیامک اکسیراز — یادآور ۱",      count: 217  },
    { source: "l24bale",                         label: "بله — لیگ ۲۴",                 count: 208  },
    { source: "l24chavosh",                      label: "چاووش",                         count: 174  },
    { source: "zoomit",                          label: "زومیت",                         count: 172  },
    { source: "asriran",                         label: "عصر ایران",                     count: 100  },
    { source: "l24instagram",                    label: "اینستاگرام — لینک",             count: 94   },
    { source: "exiraz_24_reminder",              label: "پیامک اکسیراز — یادآور",        count: 65   },
    { source: "l24sabavision",                   label: "صباویژن",                       count: 43   },
    { source: "asanpardakht",                    label: "آسان‌پرداخت",                   count: 36   },
    { source: "exiraz_24_iran_belg",             label: "پیامک اکسیراز — ایران/بلژیک",   count: 20   },
    { source: "instagram",                       label: "اینستاگرام",                    count: 18   },
    { source: "exiraz_24_sms_iran_new1stmatch",  label: "پیامک اکسیراز — اولین بازی",   count: 14   },
    { source: "telegram",                        label: "تلگرام",                        count: 9    },
    { source: "linkedin",                        label: "لینکدین",                       count: 8    },
  ],

  /* ---- پیش‌بینی به تفکیک نوع (منتظر داده واقعی) ---- */
  predictionTypes: [
    { name: "پیش‌بینی روزانه بازی‌ها",    count: 0 },
    { name: "براکت ۳۲ تیم (۴۰۰ امتیاز)", count: 0 },
    { name: "چیدمان حذفی (۲۰۰ امتیاز)",  count: 0 },
    { name: "پیش‌بینی قهرمان",            count: 0 },
    { name: "آقای گل",                    count: 0 },
    { name: "بهترین بازیساز",             count: 0 },
    { name: "پیش‌بینی‌های ویژه ایران",     count: 0 },
  ],

  /* ---- متریک‌های نگهداشت و تعامل ---- */
  retention: {
    invites:          3403,     // واقعی — REFERRAL
    invitePoints:     16593,    // واقعی — جمع امتیاز دعوت
    gmQuestions:      1814,     // واقعی — GM_QUESTION
    gmQuestionPoints: 345000,   // واقعی — جمع امتیاز سوالات گرداننده
    streakBonus:      16694,    // واقعی — STREAK_BONUS (حضور سری)
    streakPoints:     236739,   // واقعی — جمع امتیاز سری
    matchScored:      187916,   // واقعی — MATCH (پیش‌بینی‌های امتیازگرفته)
    matchPoints:      3565647,  // واقعی — جمع امتیاز بازی‌ها
    followers:        1514,     // واقعی — فالوو به‌عنوان ماموریت
    hatTricks:    0,
    elixirsGiven: 0,
    streak7:      0,
    streak14:     0,
    streak30:     0
  },

  /* ---- کاربران جدید در برابر قدیمی ---- */
  users: {
    newUsers: 0,
    oldUsers: 0
  },

  /* ---- پیش‌بینی‌های ویژه‌ی تیم ملی ایران ---- */
  iran: {
    ascensionGuess:   0,
    firstScorerGuess: 0,
    bestResultGuess:  0
  }
};

window.CAMPAIGN_DATA = CAMPAIGN_DATA;
