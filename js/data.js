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

  /* ---- عملکرد کانال‌ها — داده سه بازه زمانی از پنل آنالیتیکس ---- */
  channels: [
    { source:"direct",     label:"مستقیم",                        spendToman:0,
      today:   {sessions:1658,  pageViews:3512,   events:6140,   signups:1539 },
      week7:   {sessions:16916, pageViews:36952,  events:63948,  signups:15982},
      month30: {sessions:52382, pageViews:138120, events:329644, signups:47746} },

    { source:"google",     label:"گوگل — ارگانیک",               spendToman:0,
      today:   {sessions:1523,  pageViews:3657,  events:9072,   signups:995  },
      week7:   {sessions:11611, pageViews:28531, events:69622,  signups:7911 },
      month30: {sessions:32228, pageViews:85643, events:242617, signups:20634} },

    { source:"khabaronline", label:"خبرآنلاین — بنر استیکی",    spendToman:341000000,
      today:   {sessions:708,   pageViews:816,   events:1195,  signups:9  },
      week7:   {sessions:8661,  pageViews:10187, events:20509, signups:102},
      month30: {sessions:37076, pageViews:42861, events:85500, signups:318} },

    { source:"zoomit",     label:"زومیت — بنر استیکی",           spendToman:180000000,
      today:   {sessions:241,  pageViews:247,   events:252,   signups:0  },
      week7:   {sessions:3071, pageViews:3392,  events:5049,  signups:75 },
      month30: {sessions:8980, pageViews:10117, events:15440, signups:260} },

    { source:"asanpardakht", label:"آسان‌پرداخت — ترنزکشن (A/B)", spendToman:95000000,
      today:   {sessions:0,   pageViews:0,   events:0,    signups:0 },
      week7:   {sessions:0,   pageViews:0,   events:0,    signups:0 },
      month30: {sessions:610, pageViews:743, events:1238, signups:54} },

    { source:"asriran",    label:"عصر ایران — بنر",               spendToman:28000000,
      today:   {sessions:684,  pageViews:802,   events:3141,  signups:20 },
      week7:   {sessions:973,  pageViews:1130,  events:3671,  signups:38 },
      month30: {sessions:8946, pageViews:10278, events:17732, signups:172} },

    { source:"asanpardakht_sms", label:"آسان‌پرداخت — پیامک",   spendToman:32000000,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:13,  pageViews:23,   events:39,   signups:13 },
      month30: {sessions:413, pageViews:1475, events:2383, signups:395} },

    { source:"exiraz_sms24", label:"پیامک اکسیراز — عمومی",      spendToman:18000000,
      today:   {sessions:2,   pageViews:2,    events:2,    signups:2  },
      week7:   {sessions:44,  pageViews:82,   events:115,  signups:44 },
      month30: {sessions:777, pageViews:3234, events:4397, signups:767} },

    { source:"exiraz_24_iran_belg", label:"پیامک اکسیراز — ایران/بلژیک", spendToman:0,
      today:   {sessions:20,  pageViews:44,   events:45,   signups:20 },
      week7:   {sessions:259, pageViews:541,  events:809,  signups:258},
      month30: {sessions:981, pageViews:2246, events:5688, signups:976} },

    { source:"exiraz_24_reminder", label:"پیامک اکسیراز — یادآور", spendToman:0,
      today:   {sessions:0,   pageViews:0,    events:0,    signups:0  },
      week7:   {sessions:7,   pageViews:13,   events:17,   signups:7  },
      month30: {sessions:959, pageViews:2678, events:8193, signups:954} },

    { source:"exiraz_24_reminder1", label:"پیامک اکسیراز — یادآور ۱", spendToman:0,
      today:   {sessions:9,   pageViews:11,   events:11,   signups:9  },
      week7:   {sessions:65,  pageViews:92,   events:117,  signups:64 },
      month30: {sessions:927, pageViews:2398, events:6243, signups:918} },

    { source:"exiraz_24_sms_iran_new1stmatch", label:"پیامک اکسیراز — اولین بازی ایران", spendToman:0,
      today:   {sessions:3,   pageViews:5,    events:5,    signups:3  },
      week7:   {sessions:34,  pageViews:41,   events:41,   signups:34 },
      month30: {sessions:655, pageViews:1693, events:5523, signups:653} },

    { source:"l24sabavision", label:"صباویژن — لینک",             spendToman:0,
      today:   {sessions:1,    pageViews:1,    events:1,    signups:0 },
      week7:   {sessions:18,   pageViews:19,   events:19,   signups:0 },
      month30: {sessions:4062, pageViews:4383, events:5543, signups:47} },

    { source:"l24jaryan",  label:"جریان — لینک داخلی",            spendToman:0,
      today:   {sessions:4,    pageViews:4,    events:4,     signups:4   },
      week7:   {sessions:41,   pageViews:70,   events:90,    signups:41  },
      month30: {sessions:2978, pageViews:6876, events:21826, signups:1174} },

    { source:"bale_bazu24", label:"بله — بازو",                   spendToman:0,
      today:   {sessions:3,    pageViews:3,    events:3,    signups:3   },
      week7:   {sessions:35,   pageViews:45,   events:68,   signups:35  },
      month30: {sessions:1360, pageViews:5845, events:9761, signups:1326} },

    { source:"l24bale",    label:"بله — لیگ ۲۴",                  spendToman:0,
      today:   {sessions:29,   pageViews:49,   events:49,   signups:29  },
      week7:   {sessions:474,  pageViews:852,  events:1122, signups:474 },
      month30: {sessions:1194, pageViews:3206, events:5703, signups:1186} },

    { source:"l24agahsazan", label:"آگاه‌سازان — لینک",           spendToman:0,
      today:   {sessions:1,   pageViews:2,    events:2,    signups:1  },
      week7:   {sessions:14,  pageViews:23,   events:48,   signups:14 },
      month30: {sessions:765, pageViews:2550, events:5104, signups:752} },

    { source:"l24instagram", label:"اینستاگرام — لینک",           spendToman:0,
      today:   {sessions:4,   pageViews:5,    events:5,    signups:3  },
      week7:   {sessions:53,  pageViews:111,  events:172,  signups:49 },
      month30: {sessions:367, pageViews:1099, events:2928, signups:285} },

    { source:"l24chavosh", label:"چاووش — لینک",                  spendToman:0,
      today:   {sessions:118, pageViews:327, events:579, signups:116},
      week7:   {sessions:180, pageViews:507, events:822, signups:175},
      month30: {sessions:192, pageViews:526, events:851, signups:185} },

    { source:"instagram",  label:"اینستاگرام — ارگانیک",           spendToman:0,
      today:   {sessions:5,   pageViews:5,   events:15,  signups:0 },
      week7:   {sessions:45,  pageViews:95,  events:213, signups:21},
      month30: {sessions:155, pageViews:398, events:897, signups:77} },

    { source:"telegram",   label:"تلگرام",                         spendToman:0,
      today:   {sessions:3,  pageViews:6,   events:6,   signups:3 },
      week7:   {sessions:44, pageViews:93,  events:127, signups:42},
      month30: {sessions:96, pageViews:276, events:618, signups:89} },
  ],

  /* ---- بازه‌های زمانی (جایگزین قیف اکتساب) ---- */
  periods: [
    { label: "امروز",   sessions: 5016,   pageViews: 9499,   events: 20527,  userSessions: 2756  },
    { label: "۷ روز",  sessions: 42573,  pageViews: 82814,  events: 166646, userSessions: 25385 },
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
    invites:         2801,    // واقعی — REFERRAL از دفتر امتیازات
    invitePoints:    13583,   // واقعی — جمع امتیاز دعوت
    gmQuestions:     1411,    // واقعی — GM_QUESTION از دفتر امتیازات
    gmQuestionPoints:270000,  // واقعی — جمع امتیاز سوالات گرداننده
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
