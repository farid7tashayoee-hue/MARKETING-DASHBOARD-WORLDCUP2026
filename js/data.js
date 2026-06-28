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
    lastUpdated: "۷ تیر ۱۴۰۵"
  },

  /* ---- کارت‌های KPI اصلی ---- */
  kpis: {
    signups:          14523,
    signupsTarget:    25000,
    activeUsersAvg:   17948,
    totalPredictions: 358487,
    visits:           155412,
    totalSpendToman:  0        // از مجموع کانال‌ها محاسبه می‌شود
  },

  /* ---- روند روزانه ---- */
  daily: [
    { date: "۲۱ خرداد", signups: 1840, predictions: 3200,  activeUsers: 1840,  event: "افتتاحیه" },
    { date: "۲۲ خرداد", signups: 1210, predictions: 4800,  activeUsers: 2900  },
    { date: "۲۳ خرداد", signups: 980,  predictions: 5100,  activeUsers: 3200  },
    { date: "۲۴ خرداد", signups: 870,  predictions: 5400,  activeUsers: 3500  },
    { date: "۲۵ خرداد", signups: 760,  predictions: 6200,  activeUsers: 3800,  event: "ددلاین پیش‌بینی‌های ایران" },
    { date: "۲۶ خرداد", signups: 640,  predictions: 5800,  activeUsers: 3600  },
    { date: "۲۷ خرداد", signups: 580,  predictions: 5500,  activeUsers: 3400  },
    { date: "۲۸ خرداد", signups: 530,  predictions: 7100,  activeUsers: 4100,  event: "ددلاین براکت تیم‌ها" },
    { date: "۲۹ خرداد", signups: 490,  predictions: 6300,  activeUsers: 3900  },
    { date: "۳۰ خرداد", signups: 460,  predictions: 5900,  activeUsers: 3700  },
    { date: "۳۱ خرداد", signups: 430,  predictions: 5700,  activeUsers: 3600  },
    { date: "۱ تیر",    signups: 410,  predictions: 5500,  activeUsers: 3500  },
    { date: "۲ تیر",    signups: 390,  predictions: 5300,  activeUsers: 3450  },
    { date: "۳ تیر",    signups: 370,  predictions: 5100,  activeUsers: 3400  },
    { date: "۴ تیر",    signups: 360,  predictions: 5000,  activeUsers: 3380  },
    { date: "۵ تیر",    signups: 350,  predictions: 5200,  activeUsers: 3500  },
    { date: "۶ تیر",    signups: 340,  predictions: 5400,  activeUsers: 3600  },
    { date: "۷ تیر",    signups: 510,  predictions: 7800,  activeUsers: 4200,  event: "شروع مرحله حذفی" },
  ],

  /* ---- قیف اکتساب ---- */
  funnel: {
    visits:          98600,
    signups:         14523,
    firstPrediction: 11200,
    returning:       6800
  },

  /* ---- عملکرد کانال‌ها ----
     clicks = سشن واقعی از پنل آنالیتیکس (۳۰ روز اخیر)
     signups = سشن کاربران ثبت‌نام‌شده از همان منبع ---- */
  channels: [
    { source: "zoomit",           label: "زومیت — بنر استیکی",          spendToman: 180000000, clicks: 8918,  signups: 260  },
    { source: "khabaronline",     label: "خبرآنلاین — بنر استیکی",       spendToman: 341000000, clicks: 36928, signups: 318  },
    { source: "asanpardakht",     label: "آسان‌پرداخت — ترنزکشن (A/B)",  spendToman: 95000000,  clicks: 610,   signups: 54   },
    { source: "asanpardakht_sms", label: "آسان‌پرداخت — پیامک",          spendToman: 32000000,  clicks: 413,   signups: 395  },
    { source: "asriran",          label: "عصر ایران — بنر",              spendToman: 28000000,  clicks: 8783,  signups: 170  },
    { source: "chand",            label: "Chand — این‌اپ",               spendToman: 68000000,  clicks: 0,     signups: 0    },
    { source: "tgju",             label: "TGJU — بنر دیسپلی",            spendToman: 45000000,  clicks: 0,     signups: 0    },
    { source: "exiraz_sms",       label: "پیامک اکسیراز (یادآور/براکت)", spendToman: 18000000,  clicks: 777,   signups: 767  },
  ],

  /* ---- پیش‌بینی به تفکیک نوع ---- */
  predictionTypes: [
    { name: "پیش‌بینی روزانه بازی‌ها",       count: 61400 },
    { name: "براکت ۳۲ تیم (۴۰۰ امتیاز)",    count: 9800  },
    { name: "چیدمان حذفی (۲۰۰ امتیاز)",     count: 0     },
    { name: "پیش‌بینی قهرمان",               count: 7200  },
    { name: "آقای گل",                       count: 4100  },
    { name: "بهترین بازیساز",                count: 2640  },
    { name: "پیش‌بینی‌های ویژه ایران",        count: 2200  },
  ],

  /* ---- متریک‌های نگهداشت و تعامل ---- */
  retention: {
    invites:      3240,
    hatTricks:    1180,
    elixirsGiven: 2870,
    streak7:      4200,
    streak14:     1650,
    streak30:     0
  },

  /* ---- کاربران جدید در برابر قدیمی ---- */
  users: {
    newUsers: 9840,
    oldUsers: 4683
  },

  /* ---- پیش‌بینی‌های ویژه‌ی تیم ملی ایران ---- */
  iran: {
    ascensionGuess:   2200,
    firstScorerGuess: 1840,
    bestResultGuess:  1760
  }
};

// در دسترس قرار دادن برای منطق داشبورد (و آماده‌سازی برای اتصال آینده)
window.CAMPAIGN_DATA = CAMPAIGN_DATA;
