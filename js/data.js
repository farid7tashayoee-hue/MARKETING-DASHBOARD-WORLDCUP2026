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
    siteSignups:      33867,   // واقعی — کل ثبت‌نام سایت اکسیراز در بازه کمپین (۲۱ خرداد تا ۲۸ تیر)
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
      today:   {sessions:1256,   pageViews:3111,   events:5654,   signups:1141 },
      week7:   {sessions:9673,   pageViews:24379,  events:44916,  signups:8702 },
      month30: {sessions:64118,  pageViews:146054, events:247903, signups:60348},
      campaign:{sessions:102421, pageViews:253668, events:525170, signups:94775} },

    { source:"google",     label:"گوگل — ارگانیک",                     spendToman:0,
      today:   {sessions:1272,   pageViews:3109,   events:8167,   signups:794  },
      week7:   {sessions:12565,  pageViews:30297,  events:90292,  signups:7974 },
      month30: {sessions:58131,  pageViews:139528, events:370553, signups:38820},
      campaign:{sessions:80281,  pageViews:200329, events:552761, signups:52621} },

    { source:"khabaronline", label:"خبرآنلاین — بنر استیکی",           spendToman:341000000,
      today:   {sessions:609,    pageViews:696,    events:2744,   signups:7   },
      week7:   {sessions:9967,   pageViews:11561,  events:23459,  signups:100 },
      month30: {sessions:35967,  pageViews:41840,  events:79307,  signups:399 },
      campaign:{sessions:66885,  pageViews:77393,  events:149466, signups:632 } },

    { source:"zoomit",     label:"زومیت — بنر استیکی",                 spendToman:180000000,
      today:   {sessions:76,     pageViews:93,     events:137,    signups:6   },
      week7:   {sessions:1490,   pageViews:1683,   events:2732,   signups:48  },
      month30: {sessions:12877,  pageViews:14080,  events:20255,  signups:260 },
      campaign:{sessions:19281,  pageViews:21368,  events:31633,  signups:463 } },

    { source:"asanpardakht", label:"آسان‌پرداخت — ترنزکشن (A/B)",     spendToman:95000000,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:0, pageViews:0, events:0, signups:0},
      campaign:{sessions:610, pageViews:743, events:1238, signups:54} },

    { source:"asriran",    label:"عصر ایران — بنر",                    spendToman:28000000,
      today:   {sessions:282,    pageViews:309,    events:487,    signups:6   },
      week7:   {sessions:2207,   pageViews:2486,   events:3631,   signups:70  },
      month30: {sessions:15832,  pageViews:18627,  events:31191,  signups:353 },
      campaign:{sessions:23812,  pageViews:27787,  events:45277,  signups:490 } },

    { source:"asanpardakht_sms", label:"آسان‌پرداخت — پیامک",         spendToman:32000000,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:3,   pageViews:6,    events:15,   signups:3  },
      month30: {sessions:46,  pageViews:90,   events:137,  signups:44 },
      campaign:{sessions:448, pageViews:1545, events:2484, signups:428} },

    { source:"exiraz_sms24", label:"پیامک اکسیراز — عمومی",           spendToman:18000000,
      today:   {sessions:1,   pageViews:1,    events:1,    signups:1  },
      week7:   {sessions:7,   pageViews:10,   events:20,   signups:7  },
      month30: {sessions:71,  pageViews:134,  events:198,  signups:70 },
      campaign:{sessions:810, pageViews:3294, events:4492, signups:799} },

    { source:"exiraz_24_iran_belg", label:"پیامک اکسیراز — ایران/بلژیک", spendToman:0,
      today:   {sessions:0,    pageViews:0,    events:0,    signups:0   },
      week7:   {sessions:1,    pageViews:2,    events:2,    signups:1   },
      month30: {sessions:305,  pageViews:637,  events:830,  signups:304 },
      campaign:{sessions:1095, pageViews:2463, events:5937, signups:1089} },

    { source:"exiraz_24_reminder", label:"پیامک اکسیراز — یادآور",    spendToman:0,
      today:   {sessions:1,   pageViews:2,    events:2,    signups:1  },
      week7:   {sessions:2,   pageViews:3,    events:3,    signups:2  },
      month30: {sessions:12,  pageViews:25,   events:33,   signups:12 },
      campaign:{sessions:966, pageViews:2692, events:8211, signups:961} },

    { source:"exiraz_24_reminder1", label:"پیامک اکسیراز — یادآور ۱", spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:1,   pageViews:2,    events:2,    signups:1  },
      month30: {sessions:120, pageViews:172,  events:199,  signups:120},
      campaign:{sessions:983, pageViews:2479, events:6329, signups:974} },

    { source:"exiraz_24_sms_iran_new1stmatch", label:"پیامک اکسیراز — اولین بازی ایران", spendToman:0,
      today:   {sessions:1,   pageViews:2,    events:2,    signups:1  },
      week7:   {sessions:32,  pageViews:56,   events:68,   signups:32 },
      month30: {sessions:170, pageViews:256,  events:294,  signups:170},
      campaign:{sessions:798, pageViews:1915, events:5783, signups:796} },

    { source:"exiraz_24_1stretention", label:"پیامک اکسیراز — ریتنشن", spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:3,   pageViews:4,    events:4,    signups:3  },
      month30: {sessions:709, pageViews:1770, events:3929, signups:705},
      campaign:{sessions:709, pageViews:1770, events:3929, signups:705} },

    { source:"exiraz_24_gardananade2", label:"پیامک اکسیراز — گرداننده ۲", spendToman:0,
      today:   {sessions:25,   pageViews:65,   events:65,   signups:25  },
      week7:   {sessions:158,  pageViews:362,  events:418,  signups:155 },
      month30: {sessions:1560, pageViews:2979, events:4439, signups:1554},
      campaign:{sessions:1561, pageViews:2980, events:4450, signups:1555} },

    { source:"exiraz_24_iran_egypt", label:"پیامک اکسیراز — ایران/مصر", spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:3, pageViews:3, events:3, signups:3},
      campaign:{sessions:3, pageViews:3, events:3, signups:3} },

    { source:"l24sabavision", label:"صباویژن — لینک",                 spendToman:0,
      today:   {sessions:0,    pageViews:0,    events:0,    signups:0 },
      week7:   {sessions:0,    pageViews:0,    events:0,    signups:0 },
      month30: {sessions:22,   pageViews:26,   events:26,   signups:0 },
      campaign:{sessions:4075, pageViews:4399, events:5559, signups:50} },

    { source:"l24jaryan",  label:"جریان — لینک داخلی",               spendToman:0,
      today:   {sessions:1,    pageViews:2,    events:12,   signups:1   },
      week7:   {sessions:5,    pageViews:6,    events:26,   signups:5   },
      month30: {sessions:73,   pageViews:111,  events:164,  signups:73  },
      campaign:{sessions:3015, pageViews:6924, events:21907,signups:1211} },

    { source:"bale_bazu24", label:"بله — بازو",                       spendToman:0,
      today:   {sessions:5,    pageViews:7,    events:7,    signups:5   },
      week7:   {sessions:21,   pageViews:31,   events:64,   signups:21  },
      month30: {sessions:131,  pageViews:165,  events:233,  signups:131 },
      campaign:{sessions:1459, pageViews:5969, events:9930, signups:1425} },

    { source:"l24bale",    label:"بله — لیگ ۲۴",                      spendToman:0,
      today:   {sessions:16,   pageViews:59,   events:106,  signups:16  },
      week7:   {sessions:120,  pageViews:283,  events:473,  signups:120 },
      month30: {sessions:1256, pageViews:2304, events:2866, signups:1251},
      campaign:{sessions:2044, pageViews:4802, events:7657, signups:2031} },

    { source:"l24agahsazan", label:"آگاه‌سازان — لینک",               spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:2,   pageViews:2,    events:5,    signups:1  },
      month30: {sessions:28,  pageViews:52,   events:121,  signups:27 },
      campaign:{sessions:783, pageViews:2586, events:5194, signups:769} },

    { source:"l24instagram", label:"اینستاگرام — لینک",               spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:3,   pageViews:4,    events:4,    signups:3  },
      month30: {sessions:117, pageViews:213,  events:340,  signups:110},
      campaign:{sessions:439, pageViews:1219, events:3145, signups:354} },

    { source:"l24chavosh", label:"چاووش — لینک",                      spendToman:0,
      today:   {sessions:4,   pageViews:5,    events:6,    signups:4  },
      week7:   {sessions:16,  pageViews:23,   events:35,   signups:15 },
      month30: {sessions:389, pageViews:959,  events:1697, signups:378},
      campaign:{sessions:404, pageViews:984,  events:1734, signups:390} },

    { source:"l24telegram", label:"تلگرام — لیگ ۲۴",                  spendToman:0,
      today:   {sessions:0, pageViews:0,  events:0,  signups:0},
      week7:   {sessions:0, pageViews:0,  events:0,  signups:0},
      month30: {sessions:1, pageViews:2,  events:2,  signups:1},
      campaign:{sessions:5, pageViews:33, events:33, signups:5} },

    { source:"l24aparat",  label:"آپارات",                            spendToman:0,
      today:   {sessions:0,  pageViews:0,  events:0,   signups:0 },
      week7:   {sessions:0,  pageViews:0,  events:0,   signups:0 },
      month30: {sessions:1,  pageViews:2,  events:2,   signups:0 },
      campaign:{sessions:80, pageViews:148,events:302, signups:29} },

    { source:"instagram",  label:"اینستاگرام — ارگانیک",              spendToman:0,
      today:   {sessions:1,   pageViews:2,   events:2,    signups:1  },
      week7:   {sessions:46,  pageViews:67,  events:194,  signups:19 },
      month30: {sessions:197, pageViews:386, events:903,  signups:95 },
      campaign:{sessions:309, pageViews:694, events:1592, signups:153} },

    { source:"telegram",   label:"تلگرام",                            spendToman:0,
      today:   {sessions:8,   pageViews:24,  events:35,   signups:8  },
      week7:   {sessions:44,  pageViews:110, events:136,  signups:44 },
      month30: {sessions:273, pageViews:686, events:838,  signups:270},
      campaign:{sessions:332, pageViews:886, events:1356, signups:324} },

    { source:"facebook",   label:"فیسبوک",                            spendToman:0,
      today:   {sessions:0,  pageViews:0, events:0, signups:0},
      week7:   {sessions:2,  pageViews:2, events:2, signups:0},
      month30: {sessions:13, pageViews:13,events:13,signups:0},
      campaign:{sessions:58, pageViews:58,events:58,signups:0} },

    { source:"chatgpt",    label:"ChatGPT",                           spendToman:0,
      today:   {sessions:0, pageViews:0,  events:0,  signups:0},
      week7:   {sessions:0, pageViews:0,  events:0,  signups:0},
      month30: {sessions:5, pageViews:12, events:23, signups:4},
      campaign:{sessions:6, pageViews:13, events:24, signups:4} },

    { source:"yahoo",      label:"یاهو",                              spendToman:0,
      today:   {sessions:0, pageViews:0,  events:0,  signups:0},
      week7:   {sessions:0, pageViews:0,  events:0,  signups:0},
      month30: {sessions:4, pageViews:18, events:74, signups:2},
      campaign:{sessions:4, pageViews:18, events:74, signups:2} },

    { source:"bing",       label:"بینگ",                              spendToman:0,
      today:   {sessions:0, pageViews:0,  events:0,  signups:0},
      week7:   {sessions:0, pageViews:0,  events:0,  signups:0},
      month30: {sessions:6, pageViews:12, events:53, signups:5},
      campaign:{sessions:8, pageViews:15, events:56, signups:6} },

    { source:"linkedin",   label:"لینکدین",                           spendToman:0,
      today:   {sessions:0,  pageViews:0,  events:0,   signups:0 },
      week7:   {sessions:0,  pageViews:0,  events:0,   signups:0 },
      month30: {sessions:3,  pageViews:10, events:30,  signups:3 },
      campaign:{sessions:35, pageViews:61, events:163, signups:13} },

    { source:"twitter",    label:"توییتر",                            spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:1, pageViews:1, events:4, signups:0},
      campaign:{sessions:1, pageViews:1, events:4, signups:0} },

    { source:"duckduckgo", label:"داک‌داک‌گو",                         spendToman:0,
      today:   {sessions:1, pageViews:3, events:3, signups:1},
      week7:   {sessions:1, pageViews:3, events:3, signups:1},
      month30: {sessions:3, pageViews:7, events:7, signups:3},
      campaign:{sessions:3, pageViews:7, events:7, signups:3} },

    { source:"yeklist",    label:"یکلیست",                            spendToman:0,
      today:   {sessions:0, pageViews:0, events:0, signups:0},
      week7:   {sessions:0, pageViews:0, events:0, signups:0},
      month30: {sessions:1, pageViews:4, events:4, signups:1},
      campaign:{sessions:1, pageViews:4, events:4, signups:1} },
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
    invitePoints:     23118,    // واقعی — جمع امتیاز معرفی
    gmQuestions:      5657,     // واقعی — GM_QUESTION
    gmQuestionPoints: 1620250,  // واقعی — جمع امتیاز سوالات گرداننده
    streakBonus:      18307,    // واقعی — STREAK_BONUS (حضور سری)
    streakPoints:     257074,   // واقعی — جمع امتیاز سری
    matchScored:      281356,   // واقعی — MATCH (پیش‌بینی‌های امتیازگرفته)
    matchPoints:      8399241,  // واقعی — جمع امتیاز بازی‌ها
    missionCount:     430,      // واقعی — MISSION (فالو اینستاگرام تأییدشده)
    missionPoints:    129000,   // واقعی — جمع امتیاز ماموریت
    longtermCount:    3519,     // واقعی — LONGTERM (بلندمدت)
    longtermPoints:   591811,   // واقعی — جمع امتیاز بلندمدت
    bracketCount:     17007,    // واقعی — BRACKET (جدول حذفی)
    bracketPoints:    781467,   // واقعی — جمع امتیاز جدول حذفی
    joinBonusCount:   32424,    // واقعی — JOIN_BONUS (امتیاز شرکت)
    joinBonusPoints:  32424,    // واقعی — جمع امتیاز شرکت
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
