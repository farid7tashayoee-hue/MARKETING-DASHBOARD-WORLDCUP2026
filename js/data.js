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
    activeUsersAvg:   17948,   // واقعی — از پنل
    totalPredictions: 358487,  // واقعی — از پنل
    visits:           155412,  // واقعی — کل سشن ۳۰ روز
    totalSpendToman:  0        // از مجموع کانال‌ها محاسبه می‌شود
  },

  /* ---- روند روزانه (منتظر داده واقعی روزانه) ---- */
  daily: [],

  /* ---- قیف اکتساب ---- */
  funnel: {
    visits:          155412,  // واقعی
    signups:         14523,   // واقعی
    firstPrediction: 0,
    returning:       0
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
