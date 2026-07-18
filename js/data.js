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
    currentDay: 38,
    totalMatches: 104,
    matchesPlayed: 102,
    nextDeadlineLabel: "پایان کمپین",
    nextDeadlineDate: "۲۸ تیر",
    lastUpdated: "۲۷ تیر ۱۴۰۵ — ۱۴:۰۰"
  },

  /* ---- کارت‌های KPI اصلی ---- */
  kpis: {
    signups:          29050,   // واقعی — از participants18july.csv
    signupsPrev:      21945,   // قبلی — participants-new.csv (تا ۱۳ تیر)
    signupsDay0:      500,     // روز قبل افتتاحیه — ۱۹ خرداد
    signupsTarget:    0,
    activeUsersAvg:   29049,   // واقعی — کل بازیکنان فعال کمپین
    totalPredictions: 469635,  // واقعی — از پنل
    visits:           155412,
    totalSpendToman:  0        // از مجموع کانال‌ها محاسبه می‌شود
  },

  /* ---- روند روزانه — سشن و رویداد از نمودار پنل (تقریبی) ---- */
  daily: [
    { date: "۲۱ خرداد", signups: 427,  predictions: 22000, activeUsers: 7000,  event: "افتتاحیه" },
    { date: "۲۲ خرداد", signups: 1107, predictions: 57000, activeUsers: 9000  },
    { date: "۲۳ خرداد", signups: 1204, predictions: 62000, activeUsers: 9500  },
    { date: "۲۴ خرداد", signups: 1243, predictions: 64000, activeUsers: 9500  },
    { date: "۲۵ خرداد", signups: 1107, predictions: 57000, activeUsers: 5500,  event: "ددلاین پیش‌بینی ایران" },
    { date: "۲۶ خرداد", signups: 1010, predictions: 52000, activeUsers: 9000  },
    { date: "۲۷ خرداد", signups: 1204, predictions: 62000, activeUsers: 9000  },
    { date: "۲۸ خرداد", signups: 1068, predictions: 55000, activeUsers: 6500,  event: "ددلاین براکت" },
    { date: "۲۹ خرداد", signups: 855,  predictions: 44000, activeUsers: 6000  },
    { date: "۳۰ خرداد", signups: 738,  predictions: 38000, activeUsers: 8000  },
    { date: "۳۱ خرداد", signups: 855,  predictions: 44000, activeUsers: 5500  },
    { date: "۱ تیر",    signups: 524,  predictions: 27000, activeUsers: 9400  },
    { date: "۲ تیر",    signups: 466,  predictions: 24000, activeUsers: 7000  },
    { date: "۳ تیر",    signups: 369,  predictions: 19000, activeUsers: 5800  },
    { date: "۴ تیر",    signups: 369,  predictions: 19000, activeUsers: 5800  },
    { date: "۵ تیر",    signups: 388,  predictions: 20000, activeUsers: 6200  },
    { date: "۶ تیر",    signups: 719,  predictions: 37000, activeUsers: 8000  },
    { date: "۷ تیر",    signups: 369,  predictions: 19000, activeUsers: 5200, event: "شروع مرحله حذفی" },
    { date: "۸ تیر",    signups: 1237, predictions: 32000, activeUsers: 9200 },
    { date: "۹ تیر",    signups: 1237, predictions: 31000, activeUsers: 8800 },
    { date: "۱۰ تیر",   signups: 1237, predictions: 30000, activeUsers: 8600 },
    { date: "۱۱ تیر",   signups: 1237, predictions: 29000, activeUsers: 8200 },
    { date: "۱۲ تیر",   signups: 1237, predictions: 28000, activeUsers: 7800 },
    { date: "۱۳ تیر",   signups: 1237, predictions: 27000, activeUsers: 7400 },
    { date: "۱۴ تیر",   signups: 508,  predictions: 26000, activeUsers: 7100 },
    { date: "۱۵ تیر",   signups: 508,  predictions: 25500, activeUsers: 6900 },
    { date: "۱۶ تیر",   signups: 508,  predictions: 25000, activeUsers: 6800 },
    { date: "۱۷ تیر",   signups: 508,  predictions: 25000, activeUsers: 6700 },
    { date: "۱۸ تیر",   signups: 508,  predictions: 24500, activeUsers: 6600 },
    { date: "۱۹ تیر",   signups: 508,  predictions: 24500, activeUsers: 6500 },
    { date: "۲۰ تیر",   signups: 508,  predictions: 24300, activeUsers: 6500 },
    { date: "۲۱ تیر",   signups: 507,  predictions: 24269, activeUsers: 6393 },
    { date: "۲۲ تیر",   signups: 507,  predictions: 24269, activeUsers: 6393 },
    { date: "۲۳ تیر",   signups: 507,  predictions: 24269, activeUsers: 6393 },
    { date: "۲۴ تیر",   signups: 507,  predictions: 24269, activeUsers: 6393 },
    { date: "۲۵ تیر",   signups: 507,  predictions: 24269, activeUsers: 6393 },
    { date: "۲۶ تیر",   signups: 507,  predictions: 24269, activeUsers: 6393 },
    { date: "۲۷ تیر",   signups: 507,  predictions: 5917,  activeUsers: 1902, event: "فینال جام جهانی" },
  ],

  /* ---- قیف اکتساب ---- */
  funnel: {
    visits:          155412,  // واقعی
    signups:         29050,
    firstPrediction: 0,
    returning:       0
  },

  /* ---- عملکرد کانال‌ها — داده سه بازه زمانی از پنل آنالیتیکس ---- */
  channels: [
    { source:"direct",     label:"مستقیم",                              spendToman:0,
      today:   {sessions:379,   pageViews:784,    events:1235,   signups:342  },
      week7:   {sessions:11003, pageViews:26119,  events:41786,  signups:10326},
      month30: {sessions:69525, pageViews:157442, events:276326, signups:65686} },

    { source:"google",     label:"گوگل — ارگانیک",                     spendToman:0,
      today:   {sessions:348,   pageViews:826,    events:2234,   signups:209  },
      week7:   {sessions:11019, pageViews:25906,  events:74308,  signups:7102 },
      month30: {sessions:56803, pageViews:137185, events:356494, signups:38252} },

    { source:"khabaronline", label:"خبرآنلاین — بنر استیکی",           spendToman:341000000,
      today:   {sessions:930,   pageViews:1089,  events:1980,  signups:5  },
      week7:   {sessions:11873, pageViews:13763, events:24653, signups:97 },
      month30: {sessions:40725, pageViews:47136, events:87973, signups:417} },

    { source:"zoomit",     label:"زومیت — بنر استیکی",                 spendToman:180000000,
      today:   {sessions:108,   pageViews:122,   events:214,   signups:2  },
      week7:   {sessions:2943,  pageViews:3182,  events:4663,  signups:40 },
      month30: {sessions:14082, pageViews:15389, events:21985, signups:276} },

    { source:"asanpardakht", label:"آسان‌پرداخت — ترنزکشن (A/B)",     spendToman:95000000,
      today:   {sessions:0,  pageViews:0,   events:0,    signups:0 },
      week7:   {sessions:0,  pageViews:0,   events:0,    signups:0 },
      month30: {sessions:0,  pageViews:0,   events:0,    signups:0} },

    { source:"asriran",    label:"عصر ایران — بنر",                    spendToman:28000000,
      today:   {sessions:121,   pageViews:138,   events:228,   signups:5  },
      week7:   {sessions:2783,  pageViews:3217,  events:4711,  signups:80 },
      month30: {sessions:16511, pageViews:19492, events:32477, signups:382} },

    { source:"asanpardakht_sms", label:"آسان‌پرداخت — پیامک",         spendToman:32000000,
      today:   {sessions:0,  pageViews:0,   events:0,   signups:0 },
      week7:   {sessions:5,  pageViews:6,   events:7,   signups:3 },
      month30: {sessions:61, pageViews:106, events:155, signups:59} },

    { source:"exiraz_sms24", label:"پیامک اکسیراز — عمومی",           spendToman:18000000,
      today:   {sessions:0,  pageViews:0,   events:0,   signups:0 },
      week7:   {sessions:6,  pageViews:14,  events:16,  signups:6 },
      month30: {sessions:98, pageViews:198, events:313, signups:96} },

    { source:"exiraz_24_iran_belg", label:"پیامک اکسیراز — ایران/بلژیک", spendToman:0,
      today:   {sessions:0,    pageViews:0,    events:0,    signups:0   },
      week7:   {sessions:1,    pageViews:4,    events:4,    signups:1   },
      month30: {sessions:1094, pageViews:2461, events:5935, signups:1088} },

    { source:"exiraz_24_reminder", label:"پیامک اکسیراز — یادآور",    spendToman:0,
      today:   {sessions:1,  pageViews:1,  events:1,  signups:1 },
      week7:   {sessions:1,  pageViews:1,  events:1,  signups:1 },
      month30: {sessions:15, pageViews:27, events:35, signups:15} },

    { source:"exiraz_24_reminder1", label:"پیامک اکسیراز — یادآور ۱", spendToman:0,
      today:   {sessions:0,   pageViews:0,   events:0,   signups:0  },
      week7:   {sessions:2,   pageViews:5,   events:6,   signups:2  },
      month30: {sessions:149, pageViews:227, events:305, signups:148} },

    { source:"exiraz_24_sms_iran_new1stmatch", label:"پیامک اکسیراز — اولین بازی ایران", spendToman:0,
      today:   {sessions:1,   pageViews:1,   events:1,   signups:1  },
      week7:   {sessions:37,  pageViews:62,  events:77,  signups:37 },
      month30: {sessions:188, pageViews:278, events:392, signups:188} },

    { source:"exiraz_24_1stretention", label:"پیامک اکسیراز — ریتنشن", spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:1,   pageViews:1,    events:1,    signups:1  },
      month30: {sessions:707, pageViews:1767, events:3926, signups:703} },

    { source:"exiraz_24_gardananade2", label:"پیامک اکسیراز — گرداننده ۲", spendToman:0,
      today:   {sessions:5,    pageViews:10,   events:10,   signups:5   },
      week7:   {sessions:256,  pageViews:500,  events:529,  signups:256 },
      month30: {sessions:1469, pageViews:2761, events:4165, signups:1466} },

    { source:"exiraz_24_iran_egypt", label:"پیامک اکسیراز — ایران/مصر", spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:3, pageViews:3, events:3, signups:3} },

    { source:"l24sabavision", label:"صباویژن — لینک",                 spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0 },
      week7:   {sessions:0,   pageViews:0,    events:0,    signups:0 },
      month30: {sessions:987, pageViews:1103, events:1307, signups:15} },

    { source:"l24jaryan",  label:"جریان — لینک داخلی",               spendToman:0,
      today:   {sessions:2,   pageViews:2,   events:2,   signups:2  },
      week7:   {sessions:5,   pageViews:5,   events:5,   signups:5  },
      month30: {sessions:107, pageViews:183, events:260, signups:107} },

    { source:"bale_bazu24", label:"بله — بازو",                       spendToman:0,
      today:   {sessions:0,   pageViews:0,   events:0,   signups:0  },
      week7:   {sessions:12,  pageViews:13,  events:13,  signups:12 },
      month30: {sessions:142, pageViews:174, events:232, signups:141} },

    { source:"l24bale",    label:"بله — لیگ ۲۴",                      spendToman:0,
      today:   {sessions:4,    pageViews:5,    events:5,    signups:4   },
      week7:   {sessions:181,  pageViews:331,  events:408,  signups:177 },
      month30: {sessions:1506, pageViews:2925, events:3821, signups:1498} },

    { source:"l24agahsazan", label:"آگاه‌سازان — لینک",               spendToman:0,
      today:   {sessions:0,  pageViews:0,   events:0,   signups:0 },
      week7:   {sessions:2,  pageViews:2,   events:2,   signups:2 },
      month30: {sessions:85, pageViews:174, events:323, signups:85} },

    { source:"l24instagram", label:"اینستاگرام — لینک",               spendToman:0,
      today:   {sessions:0,   pageViews:0,   events:0,   signups:0  },
      week7:   {sessions:15,  pageViews:18,  events:19,  signups:15 },
      month30: {sessions:168, pageViews:350, events:690, signups:158} },

    { source:"l24chavosh", label:"چاووش — لینک",                      spendToman:0,
      today:   {sessions:0,   pageViews:0,   events:0,    signups:0  },
      week7:   {sessions:24,  pageViews:40,  events:54,   signups:23 },
      month30: {sessions:386, pageViews:959, events:1701, signups:373} },

    { source:"l24telegram", label:"تلگرام — لیگ ۲۴",                  spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:1, pageViews:2, events:2, signups:1} },

    { source:"l24aparat",  label:"آپارات",                            spendToman:0,
      today:   {sessions:0,  pageViews:0,  events:0,  signups:0},
      week7:   {sessions:0,  pageViews:0,  events:0,  signups:0},
      month30: {sessions:12, pageViews:18, events:54, signups:3} },

    { source:"instagram",  label:"اینستاگرام — ارگانیک",              spendToman:0,
      today:   {sessions:0,   pageViews:0,   events:0,   signups:0 },
      week7:   {sessions:23,  pageViews:40,  events:89,  signups:15},
      month30: {sessions:173, pageViews:365, events:780, signups:92} },

    { source:"telegram",   label:"تلگرام",                            spendToman:0,
      today:   {sessions:3,   pageViews:7,   events:7,   signups:3  },
      week7:   {sessions:64,  pageViews:163, events:164, signups:64 },
      month30: {sessions:271, pageViews:691, events:884, signups:268} },

    { source:"facebook",   label:"فیسبوک",                            spendToman:0,
      today:   {sessions:0,  pageViews:0,  events:0,  signups:0},
      week7:   {sessions:2,  pageViews:2,  events:2,  signups:0},
      month30: {sessions:30, pageViews:30, events:30, signups:0} },

    { source:"chatgpt",    label:"ChatGPT",                           spendToman:0,
      today:   {sessions:0, pageViews:0,  events:0,  signups:0},
      week7:   {sessions:1, pageViews:4,  events:5,  signups:1},
      month30: {sessions:5, pageViews:12, events:23, signups:4} },

    { source:"yahoo",      label:"یاهو",                              spendToman:0,
      today:   {sessions:0, pageViews:0,  events:0,  signups:0},
      week7:   {sessions:0, pageViews:0,  events:0,  signups:0},
      month30: {sessions:4, pageViews:18, events:74, signups:2} },

    { source:"bing",       label:"بینگ",                              spendToman:0,
      today:   {sessions:0, pageViews:0,  events:0,  signups:0},
      week7:   {sessions:0, pageViews:0,  events:0,  signups:0},
      month30: {sessions:7, pageViews:14, events:55, signups:6} },

    { source:"linkedin",   label:"لینکدین",                           spendToman:0,
      today:   {sessions:0, pageViews:0,  events:0,  signups:0},
      week7:   {sessions:0, pageViews:0,  events:0,  signups:0},
      month30: {sessions:4, pageViews:11, events:33, signups:3} },

    { source:"twitter",    label:"توییتر",                            spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:1, pageViews:1, events:4, signups:0} },

    { source:"duckduckgo", label:"داک‌داک‌گو",                         spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:2, pageViews:4, events:4, signups:2} },
  ],

  /* ---- بازه‌های زمانی (جایگزین قیف اکتساب) ---- */
  periods: [
    { label: "امروز",   sessions: 2742,   pageViews: 5520,   events: 9893,   userSessions: 1825  },
    { label: "۷ روز",  sessions: 44485,  pageViews: 88962,  events: 181221, userSessions: 27616 },
    { label: "۳۰ روز", sessions: 156282, pageViews: 326957, events: 778450, userSessions: 79018 },
  ],

  /* ---- منبع ورود بازیکنان (از فایل participants-new.csv — ۲۱٬۹۴۵ نفر) ---- */
  sourceBreakdown: [
    { source: "google",                         label: "گوگل",                          count: 16112 },
    { source: "direct",                         label: "مستقیم",                        count: 8115  },
    { source: "l24jaryan",                      label: "جریان",                         count: 909   },
    { source: "bale_bazu24",                    label: "بله — بازو",                   count: 495   },
    { source: "exiraz_sms24",                   label: "پیامک اکسیراز — عمومی",        count: 451   },
    { source: "unknown",                        label: "منبع نامشخص",                   count: 402   },
    { source: "l24agahsazan",                   label: "آگاه‌سازان",                   count: 336   },
    { source: "khabaronline",                   label: "خبرآنلاین",                    count: 312   },
    { source: "asriran",                        label: "عصر ایران",                    count: 278   },
    { source: "zoomit",                         label: "زومیت",                        count: 278   },
    { source: "l24chavosh",                     label: "چاووش",                         count: 261   },
    { source: "l24bale",                        label: "بله — لیگ ۲۴",                count: 257   },
    { source: "asanpardakht_sms",               label: "آسان‌پرداخت — پیامک",          count: 234   },
    { source: "exiraz_24_reminder1",            label: "پیامک اکسیراز — یادآور ۱",     count: 222   },
    { source: "l24instagram",                   label: "اینستاگرام — لینک",            count: 96    },
    { source: "exiraz_24_reminder",             label: "پیامک اکسیراز — یادآور",       count: 65    },
    { source: "l24sabavision",                  label: "صباویژن",                      count: 43    },
    { source: "asanpardakht",                   label: "آسان‌پرداخت",                  count: 36    },
    { source: "instagram",                      label: "اینستاگرام",                   count: 30    },
    { source: "exiraz_24_iran_belg",            label: "پیامک اکسیراز — ایران/بلژیک",  count: 20    },
    { source: "exiraz_24_1stretention",         label: "پیامک اکسیراز — ریتنشن",       count: 20    },
    { source: "exiraz_24_sms_iran_new1stmatch", label: "پیامک اکسیراز — اولین بازی",  count: 15    },
    { source: "exiraz_24_gardananade2",         label: "پیامک اکسیراز — گرداننده ۲",  count: 13    },
    { source: "telegram",                       label: "تلگرام",                       count: 13    },
    { source: "linkedin",                       label: "لینکدین",                      count: 10    },
    { source: "l24aparat",                      label: "آپارات",                       count: 18    },
    { source: "l24telegram",                    label: "تلگرام — لیگ ۲۴",             count: 4     },
    { source: "chatgpt",                        label: "ChatGPT",                      count: 4     },
    { source: "bing",                           label: "بینگ",                         count: 1     },
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
    invites:          4566,      // واقعی — REFERRAL
    invitePoints:     22408,    // واقعی — جمع امتیاز دعوت
    gmQuestions:      1814,     // واقعی — GM_QUESTION
    gmQuestionPoints: 345000,   // واقعی — جمع امتیاز سوالات گرداننده
    streakBonus:      18264,    // واقعی — STREAK_BONUS (حضور سری)
    streakPoints:     256424,   // واقعی — جمع امتیاز سری
    matchScored:      278235,   // واقعی — MATCH (پیش‌بینی‌های امتیازگرفته)
    matchPoints:      8059564,  // واقعی — جمع امتیاز بازی‌ها
    missionCount:     430,      // واقعی — MISSION (فالو اینستاگرام تأییدشده)
    missionPoints:    129000,   // واقعی — جمع امتیاز ماموریت
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
