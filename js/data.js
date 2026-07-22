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
    currentDay: 39,
    totalMatches: 104,
    matchesPlayed: 104,
    nextDeadlineLabel: "پایان کمپین",
    nextDeadlineDate: "۲۹ تیر",
    lastUpdated: "۳۱ تیر ۱۴۰۵ — ۱۴:۰۰"
  },

  /* ---- کارت‌های KPI اصلی ---- */
  kpis: {
    signups:          32424,   // واقعی — بازیکنان کمپین (participants akhari)
    siteSignups:      30000,   // واقعی — کل ثبت‌نام سایت اکسیراز در بازه کمپین
    signupsPrev:      29050,   // قبلی — participants18july.csv (تا ۲۷ تیر)
    signupsDay0:      500,     // روز قبل افتتاحیه — ۱۹ خرداد
    signupsTarget:    0,
    activeUsersAvg:   32424,   // واقعی — کل بازیکنان فعال کمپین
    totalPredictions: 475420,  // واقعی — از پنل
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
    { date: "۲۸ تیر",   signups: 1687, predictions: 11674, activeUsers: 2730 },
    { date: "۲۹ تیر",   signups: 1687, predictions: 17430, activeUsers: 3559, event: "پایان کمپین" },
  ],

  /* ---- قیف اکتساب ---- */
  funnel: {
    visits:          155412,  // واقعی
    signups:         32424,
    firstPrediction: 0,
    returning:       0
  },

  /* ---- عملکرد کانال‌ها — داده سه بازه زمانی از پنل آنالیتیکس ---- */
  channels: [
    { source:"direct",     label:"مستقیم",                              spendToman:0,
      today:   {sessions:1256,  pageViews:3111,   events:5654,   signups:1141 },
      week7:   {sessions:12327, pageViews:30453,  events:53300,  signups:11462},
      month30: {sessions:68817, pageViews:156185, events:267017, signups:64991} },

    { source:"google",     label:"گوگل — ارگانیک",                     spendToman:0,
      today:   {sessions:1272,  pageViews:3109,   events:8167,   signups:794  },
      week7:   {sessions:16412, pageViews:39728,  events:118677, signups:10404},
      month30: {sessions:61347, pageViews:147791, events:392762, signups:40928} },

    { source:"khabaronline", label:"خبرآنلاین — بنر استیکی",           spendToman:341000000,
      today:   {sessions:609,   pageViews:696,   events:2744,  signups:7  },
      week7:   {sessions:11855, pageViews:13708, events:26686, signups:124},
      month30: {sessions:39406, pageViews:45773, events:86454, signups:436} },

    { source:"zoomit",     label:"زومیت — بنر استیکی",                 spendToman:180000000,
      today:   {sessions:76,    pageViews:93,    events:137,   signups:6  },
      week7:   {sessions:2564,  pageViews:2862,  events:4379,  signups:65 },
      month30: {sessions:13734, pageViews:15041, events:21758, signups:289} },

    { source:"asanpardakht", label:"آسان‌پرداخت — ترنزکشن (A/B)",     spendToman:95000000,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:0, pageViews:0, events:0, signups:0} },

    { source:"asriran",    label:"عصر ایران — بنر",                    spendToman:28000000,
      today:   {sessions:282,   pageViews:309,   events:487,   signups:6  },
      week7:   {sessions:2996,  pageViews:3429,  events:4966,  signups:97 },
      month30: {sessions:16514, pageViews:19417, events:32435, signups:375} },

    { source:"asanpardakht_sms", label:"آسان‌پرداخت — پیامک",         spendToman:32000000,
      today:   {sessions:0,  pageViews:0,  events:0,   signups:0 },
      week7:   {sessions:7,  pageViews:10, events:19,  signups:6 },
      month30: {sessions:49, pageViews:95, events:142, signups:47} },

    { source:"exiraz_sms24", label:"پیامک اکسیراز — عمومی",           spendToman:18000000,
      today:   {sessions:1,  pageViews:1,   events:1,   signups:1 },
      week7:   {sessions:9,  pageViews:15,  events:17,  signups:9 },
      month30: {sessions:88, pageViews:163, events:233, signups:87} },

    { source:"exiraz_24_iran_belg", label:"پیامک اکسیراز — ایران/بلژیک", spendToman:0,
      today:   {sessions:0,    pageViews:0,    events:0,    signups:0   },
      week7:   {sessions:0,    pageViews:0,    events:0,    signups:0   },
      month30: {sessions:1092, pageViews:2458, events:5926, signups:1086} },

    { source:"exiraz_24_reminder", label:"پیامک اکسیراز — یادآور",    spendToman:0,
      today:   {sessions:1,  pageViews:2,  events:2,  signups:1 },
      week7:   {sessions:2,  pageViews:3,  events:3,  signups:2 },
      month30: {sessions:15, pageViews:28, events:36, signups:15} },

    { source:"exiraz_24_reminder1", label:"پیامک اکسیراز — یادآور ۱", spendToman:0,
      today:   {sessions:0,   pageViews:0,   events:0,   signups:0  },
      week7:   {sessions:1,   pageViews:2,   events:2,   signups:1  },
      month30: {sessions:129, pageViews:185, events:226, signups:128} },

    { source:"exiraz_24_sms_iran_new1stmatch", label:"پیامک اکسیراز — اولین بازی ایران", spendToman:0,
      today:   {sessions:1,   pageViews:2,   events:2,   signups:1  },
      week7:   {sessions:44,  pageViews:84,  events:99,  signups:44 },
      month30: {sessions:184, pageViews:278, events:330, signups:184} },

    { source:"exiraz_24_1stretention", label:"پیامک اکسیراز — ریتنشن", spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:3,   pageViews:4,    events:4,    signups:3  },
      month30: {sessions:709, pageViews:1770, events:3929, signups:705} },

    { source:"exiraz_24_gardananade2", label:"پیامک اکسیراز — گرداننده ۲", spendToman:0,
      today:   {sessions:25,   pageViews:65,   events:65,   signups:25  },
      week7:   {sessions:232,  pageViews:497,  events:545,  signups:232 },
      month30: {sessions:1549, pageViews:2957, events:4402, signups:1546} },

    { source:"exiraz_24_iran_egypt", label:"پیامک اکسیراز — ایران/مصر", spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:3, pageViews:3, events:3, signups:3} },

    { source:"l24sabavision", label:"صباویژن — لینک",                 spendToman:0,
      today:   {sessions:0,   pageViews:0,   events:0,   signups:0},
      week7:   {sessions:0,   pageViews:0,   events:0,   signups:0},
      month30: {sessions:276, pageViews:310, events:380, signups:3} },

    { source:"l24jaryan",  label:"جریان — لینک داخلی",               spendToman:0,
      today:   {sessions:1,  pageViews:2,   events:12,  signups:1 },
      week7:   {sessions:5,  pageViews:6,   events:16,  signups:5 },
      month30: {sessions:89, pageViews:139, events:195, signups:89} },

    { source:"bale_bazu24", label:"بله — بازو",                       spendToman:0,
      today:   {sessions:5,   pageViews:7,   events:7,   signups:5  },
      week7:   {sessions:24,  pageViews:34,  events:67,  signups:24 },
      month30: {sessions:141, pageViews:177, events:246, signups:140} },

    { source:"l24bale",    label:"بله — لیگ ۲۴",                      spendToman:0,
      today:   {sessions:16,   pageViews:59,   events:106,  signups:16  },
      week7:   {sessions:175,  pageViews:393,  events:614,  signups:174 },
      month30: {sessions:1439, pageViews:2766, events:3493, signups:1433} },

    { source:"l24agahsazan", label:"آگاه‌سازان — لینک",               spendToman:0,
      today:   {sessions:0,  pageViews:0,  events:0,   signups:0 },
      week7:   {sessions:3,  pageViews:3,  events:3,   signups:3 },
      month30: {sessions:38, pageViews:71, events:148, signups:38} },

    { source:"l24instagram", label:"اینستاگرام — لینک",               spendToman:0,
      today:   {sessions:0,   pageViews:0,   events:0,   signups:0  },
      week7:   {sessions:11,  pageViews:15,  events:16,  signups:11 },
      month30: {sessions:143, pageViews:274, events:506, signups:133} },

    { source:"l24chavosh", label:"چاووش — لینک",                      spendToman:0,
      today:   {sessions:4,   pageViews:5,   events:6,    signups:4  },
      week7:   {sessions:18,  pageViews:25,  events:37,   signups:17 },
      month30: {sessions:391, pageViews:964, events:1704, signups:379} },

    { source:"l24telegram", label:"تلگرام — لیگ ۲۴",                  spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:1, pageViews:2, events:2, signups:1} },

    { source:"l24aparat",  label:"آپارات",                            spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:0, pageViews:0, events:0, signups:0} },

    { source:"instagram",  label:"اینستاگرام — ارگانیک",              spendToman:0,
      today:   {sessions:1,   pageViews:2,   events:2,   signups:1 },
      week7:   {sessions:27,  pageViews:50,  events:115, signups:21},
      month30: {sessions:174, pageViews:366, events:802, signups:96} },

    { source:"telegram",   label:"تلگرام",                            spendToman:0,
      today:   {sessions:8,   pageViews:24,  events:35,  signups:8  },
      week7:   {sessions:64,  pageViews:174, events:200, signups:64 },
      month30: {sessions:281, pageViews:720, events:908, signups:278} },

    { source:"facebook",   label:"فیسبوک",                            spendToman:0,
      today:   {sessions:0,  pageViews:0,  events:0,  signups:0},
      week7:   {sessions:2,  pageViews:2,  events:2,  signups:0},
      month30: {sessions:24, pageViews:24, events:24, signups:0} },

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
      month30: {sessions:6, pageViews:12, events:53, signups:5} },

    { source:"linkedin",   label:"لینکدین",                           spendToman:0,
      today:   {sessions:0, pageViews:0,  events:0,  signups:0},
      week7:   {sessions:0, pageViews:0,  events:0,  signups:0},
      month30: {sessions:4, pageViews:11, events:33, signups:3} },

    { source:"twitter",    label:"توییتر",                            spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:1, pageViews:1, events:4, signups:0} },

    { source:"duckduckgo", label:"داک‌داک‌گو",                         spendToman:0,
      today:   {sessions:1, pageViews:3, events:3, signups:1},
      week7:   {sessions:1, pageViews:3, events:3, signups:1},
      month30: {sessions:3, pageViews:7, events:7, signups:3} },
  ],

  /* ---- بازه‌های زمانی (جایگزین قیف اکتساب) ---- */
  periods: [
    { label: "امروز",   sessions: 2742,   pageViews: 5520,   events: 9893,   userSessions: 1825  },
    { label: "۷ روز",  sessions: 44485,  pageViews: 88962,  events: 181221, userSessions: 27616 },
    { label: "۳۰ روز", sessions: 156282, pageViews: 326957, events: 778450, userSessions: 79018 },
  ],

  /* ---- منبع ورود بازیکنان (از فایل participants-new.csv — ۲۱٬۹۴۵ نفر) ---- */
  sourceBreakdown: [
    { source: "google",                         label: "گوگل",                          count: 19041 },
    { source: "direct",                         label: "مستقیم",                        count: 8463  },
    { source: "l24jaryan",                      label: "جریان",                         count: 909   },
    { source: "bale_bazu24",                    label: "بله — بازو",                   count: 495   },
    { source: "exiraz_sms24",                   label: "پیامک اکسیراز — عمومی",        count: 451   },
    { source: "unknown",                        label: "منبع نامشخص",                   count: 429   },
    { source: "l24agahsazan",                   label: "آگاه‌سازان",                   count: 336   },
    { source: "khabaronline",                   label: "خبرآنلاین",                    count: 330   },
    { source: "zoomit",                         label: "زومیت",                        count: 300   },
    { source: "asriran",                        label: "عصر ایران",                    count: 294   },
    { source: "l24bale",                        label: "بله — لیگ ۲۴",                count: 269   },
    { source: "l24chavosh",                     label: "چاووش",                         count: 262   },
    { source: "asanpardakht_sms",               label: "آسان‌پرداخت — پیامک",          count: 235   },
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
    invites:          4708,      // واقعی — REFERRAL
    invitePoints:     0,        // منتظر داده
    gmQuestions:      5657,     // واقعی — GM_QUESTION
    gmQuestionPoints: 1620250,  // واقعی — جمع امتیاز سوالات گرداننده
    streakBonus:      18307,    // واقعی — STREAK_BONUS (حضور سری)
    streakPoints:     257074,   // واقعی — جمع امتیاز سری
    matchScored:      281356,   // واقعی — MATCH (پیش‌بینی‌های امتیازگرفته)
    matchPoints:      8399241,  // واقعی — جمع امتیاز بازی‌ها
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
