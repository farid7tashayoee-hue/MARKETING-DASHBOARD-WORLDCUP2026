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
    currentDay: 18,
    totalMatches: 104,
    matchesPlayed: 72,
    nextDeadlineLabel: "پایان مهلت چیدمان حذفی",
    nextDeadlineDate: "۷ تیر",
    lastUpdated: "۷ تیر ۱۴۰۵ — ۲۳:۰۰"
  },

  /* ---- کارت‌های KPI اصلی ---- */
  kpis: {
    signups:          14523,   // واقعی
    signupsTarget:    0,
    activeUsersAvg:   18047,   // واقعی — کل بازیکنان فعال کمپین
    totalPredictions: 358487,  // واقعی — از پنل
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

  /* ---- عملکرد کانال‌ها — داده ۳۰ روز از پنل آنالیتیکس ---- */
  channels: [
    // ---- ارگانیک و مستقیم ----
    { source: "direct",           label: "مستقیم",                                        spendToman: 0,         sessions: 52382, pageViews: 138120, events: 329644, signups: 47746 },
    { source: "google",           label: "گوگل — ارگانیک",                                spendToman: 0,         sessions: 32228, pageViews: 85643,  events: 242617, signups: 20634 },
    // ---- رسانه‌های پولی ----
    { source: "khabaronline",     label: "خبرآنلاین — بنر استیکی",                       spendToman: 341000000, sessions: 37076, pageViews: 42861,  events: 85500,  signups: 318   },
    { source: "zoomit",           label: "زومیت — بنر استیکی",                           spendToman: 180000000, sessions: 8980,  pageViews: 10117,  events: 15440,  signups: 260   },
    { source: "chand",            label: "Chand — این‌اپ",                               spendToman: 68000000,  sessions: 0,     pageViews: 0,      events: 0,      signups: 0     },
    { source: "tgju",             label: "TGJU — بنر دیسپلی",                            spendToman: 45000000,  sessions: 0,     pageViews: 0,      events: 0,      signups: 0     },
    { source: "asanpardakht",     label: "آسان‌پرداخت — ترنزکشن (A/B)",                  spendToman: 95000000,  sessions: 610,   pageViews: 743,    events: 1238,   signups: 54    },
    { source: "asriran",          label: "عصر ایران — بنر",                              spendToman: 28000000,  sessions: 8946,  pageViews: 10278,  events: 17732,  signups: 172   },
    { source: "asanpardakht_sms", label: "آسان‌پرداخت — پیامک",                          spendToman: 32000000,  sessions: 413,   pageViews: 1475,   events: 2383,   signups: 395   },
    // ---- پیامک اکسیراز ----
    { source: "exiraz_sms24",                  label: "پیامک اکسیراز — عمومی",              spendToman: 18000000, sessions: 777,  pageViews: 3234,  events: 4397,  signups: 767 },
    { source: "exiraz_24_iran_belg",           label: "پیامک اکسیراز — ایران/بلژیک",        spendToman: 0,        sessions: 981,  pageViews: 2246,  events: 5688,  signups: 976 },
    { source: "exiraz_24_reminder",            label: "پیامک اکسیراز — یادآور",             spendToman: 0,        sessions: 959,  pageViews: 2678,  events: 8193,  signups: 954 },
    { source: "exiraz_24_reminder1",           label: "پیامک اکسیراز — یادآور ۱",           spendToman: 0,        sessions: 927,  pageViews: 2398,  events: 6243,  signups: 918 },
    { source: "exiraz_24_sms_iran_new1stmatch",label: "پیامک اکسیراز — اولین بازی ایران",   spendToman: 0,        sessions: 655,  pageViews: 1693,  events: 5523,  signups: 653 },
    // ---- لینک‌های داخلی و شبکه‌های اجتماعی ----
    { source: "l24sabavision",    label: "صباویژن — لینک",           spendToman: 0, sessions: 4062, pageViews: 4383,  events: 5543,  signups: 47    },
    { source: "l24jaryan",        label: "جریان — لینک داخلی",       spendToman: 0, sessions: 2978, pageViews: 6876,  events: 21826, signups: 1174  },
    { source: "bale_bazu24",      label: "بله — بازو",               spendToman: 0, sessions: 1360, pageViews: 5845,  events: 9761,  signups: 1326  },
    { source: "l24bale",          label: "بله — لیگ ۲۴",            spendToman: 0, sessions: 1194, pageViews: 3206,  events: 5703,  signups: 1186  },
    { source: "l24agahsazan",     label: "آگاه‌سازان — لینک",        spendToman: 0, sessions: 765,  pageViews: 2550,  events: 5104,  signups: 752   },
    { source: "l24instagram",     label: "اینستاگرام — لینک",        spendToman: 0, sessions: 367,  pageViews: 1099,  events: 2928,  signups: 285   },
    { source: "l24chavosh",       label: "چاووش — لینک",             spendToman: 0, sessions: 192,  pageViews: 526,   events: 851,   signups: 185   },
    { source: "instagram",        label: "اینستاگرام — ارگانیک",     spendToman: 0, sessions: 155,  pageViews: 398,   events: 897,   signups: 77    },
    { source: "telegram",         label: "تلگرام",                   spendToman: 0, sessions: 96,   pageViews: 276,   events: 618,   signups: 89    },
  ],

  /* ---- بازه‌های زمانی (جایگزین قیف اکتساب) ---- */
  periods: [
    { label: "امروز",   sessions: 5016,   pageViews: 9499,   events: 20527,  userSessions: 2756  },
    { label: "۷ روز",  sessions: 42573,  pageViews: 82814,  events: 166646, userSessions: 25385 },
    { label: "۳۰ روز", sessions: 156282, pageViews: 326957, events: 778450, userSessions: 79018 },
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
    invites:      0,
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
