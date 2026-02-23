/* ═══════════════════════════════════════════════════
   NORMATIVE DATA TABLES
   Sources: NSCA, ACSM, World Athletics, published 
   physiological research population norms
   ═══════════════════════════════════════════════════ */

// Relative strength normalization
// Returns a relative strength ratio (lifted lbs ÷ bodyweight lbs)
function relativeStrengthRatio(liftedLbs, bwLbs) {
  return liftedLbs / bwLbs;
}

// Age bands: 18-24, 25-29, 30-34, 35-39, 40-49, 50-59, 60+
function getAgeBand(age) {
  if (age < 25) return 0;
  if (age < 30) return 1;
  if (age < 35) return 2;
  if (age < 40) return 3;
  if (age < 50) return 4;
  if (age < 60) return 5;
  return 6;
}

// Strength norms: relative ratios (lift / bodyweight)
// Format: [p10, p25, p50, p75, p90, p99]
// Based on NSCA standards + powerlifting federation data
const STRENGTH_NORMS = {
  squat: {
    male: [
      [0.75, 1.0, 1.4, 1.8, 2.1, 2.8],   // 18-24
      [0.7,  0.95, 1.35, 1.75, 2.05, 2.7], // 25-29
      [0.65, 0.9, 1.3, 1.7, 2.0, 2.6],    // 30-34
      [0.6,  0.85, 1.2, 1.6, 1.9, 2.5],   // 35-39
      [0.55, 0.8, 1.1, 1.5, 1.75, 2.3],   // 40-49
      [0.5,  0.7, 1.0, 1.3, 1.6, 2.0],    // 50-59
      [0.4,  0.6, 0.85, 1.1, 1.4, 1.8],   // 60+
    ],
    female: [
      [0.5, 0.7, 0.95, 1.3, 1.6, 2.1],
      [0.45, 0.65, 0.9, 1.25, 1.55, 2.0],
      [0.4,  0.6, 0.85, 1.2, 1.5, 1.9],
      [0.35, 0.55, 0.8, 1.1, 1.4, 1.8],
      [0.3,  0.5, 0.7, 1.0, 1.25, 1.6],
      [0.25, 0.4, 0.6, 0.85, 1.1, 1.4],
      [0.2,  0.35, 0.5, 0.7, 0.9, 1.2],
    ]
  },
  bench: {
    male: [
      [0.5, 0.75, 1.05, 1.35, 1.6, 2.1],
      [0.5, 0.7,  1.0,  1.3,  1.55, 2.0],
      [0.45,0.65, 0.95, 1.25, 1.5, 1.9],
      [0.4, 0.6,  0.9,  1.2,  1.4, 1.8],
      [0.35,0.55, 0.8,  1.1,  1.3, 1.65],
      [0.3, 0.5,  0.7,  0.95, 1.15,1.5],
      [0.25,0.4,  0.6,  0.8,  1.0, 1.3],
    ],
    female: [
      [0.3, 0.45, 0.65, 0.85, 1.0, 1.35],
      [0.28,0.42, 0.6,  0.8,  0.95, 1.25],
      [0.25,0.38, 0.55, 0.75, 0.9, 1.15],
      [0.22,0.35, 0.5,  0.7,  0.85,1.1],
      [0.2, 0.3,  0.45, 0.6,  0.75,0.95],
      [0.18,0.25, 0.38, 0.52, 0.65,0.85],
      [0.15,0.22, 0.32, 0.44, 0.55,0.72],
    ]
  },
  deadlift: {
    male: [
      [0.9, 1.2, 1.6, 2.0, 2.4, 3.0],
      [0.85,1.15,1.55,1.95,2.3, 2.9],
      [0.8, 1.1, 1.5, 1.9, 2.2, 2.8],
      [0.75,1.0, 1.4, 1.8, 2.1, 2.65],
      [0.7, 0.95,1.3, 1.65,1.95,2.5],
      [0.6, 0.85,1.15,1.5, 1.75,2.2],
      [0.5, 0.7, 1.0, 1.3, 1.55,1.9],
    ],
    female: [
      [0.6, 0.8, 1.1, 1.4, 1.7, 2.2],
      [0.55,0.75,1.0, 1.35,1.6, 2.1],
      [0.5, 0.7, 0.95,1.3, 1.5, 1.95],
      [0.45,0.65,0.9, 1.2, 1.4, 1.8],
      [0.4, 0.6, 0.8, 1.1, 1.3, 1.65],
      [0.35,0.5, 0.7, 0.95,1.15,1.5],
      [0.3, 0.42,0.6, 0.8, 1.0, 1.3],
    ]
  },
  ohp: {
    male: [
      [0.3, 0.45, 0.65, 0.85, 1.0, 1.35],
      [0.28,0.42, 0.6,  0.8,  0.95,1.25],
      [0.26,0.4,  0.57, 0.76, 0.9, 1.2],
      [0.24,0.37, 0.53, 0.72, 0.85,1.1],
      [0.22,0.34, 0.48, 0.65, 0.78,1.0],
      [0.18,0.28, 0.42, 0.56, 0.68,0.9],
      [0.15,0.24, 0.36, 0.48, 0.58,0.78],
    ],
    female: [
      [0.18,0.26, 0.38, 0.52, 0.62,0.8],
      [0.17,0.24, 0.35, 0.48, 0.58,0.75],
      [0.16,0.22, 0.32, 0.45, 0.54,0.70],
      [0.15,0.2,  0.30, 0.42, 0.5, 0.65],
      [0.13,0.18, 0.26, 0.37, 0.45,0.58],
      [0.11,0.15, 0.22, 0.31, 0.38,0.50],
      [0.09,0.13, 0.18, 0.26, 0.32,0.42],
    ]
  }
};

// VO2 Max norms (ml/kg/min) — ACSM
const VO2_NORMS = {
  male: {
    bands: [
      [22, 31, 40, 48, 54, 65],  // 18-24
      [20, 30, 39, 47, 53, 63],  // 25-29
      [18, 27, 37, 45, 51, 60],  // 30-34
      [16, 25, 35, 43, 49, 58],  // 35-39
      [14, 22, 32, 40, 46, 55],  // 40-49
      [12, 20, 28, 36, 42, 50],  // 50-59
      [10, 17, 24, 32, 37, 45],  // 60+
    ]
  },
  female: {
    bands: [
      [18, 26, 35, 42, 48, 57],
      [16, 24, 33, 40, 46, 55],
      [14, 22, 31, 38, 44, 52],
      [13, 20, 28, 36, 42, 50],
      [12, 18, 26, 33, 39, 47],
      [10, 16, 23, 30, 35, 43],
      [8,  14, 20, 27, 32, 40],
    ]
  }
};

// Resting HR norms (lower HR = better fitness)
// Stored as [p10, p25, p50, p75, p90] where values represent the RAW BPM reading
// p10 = high HR (bottom 10% fitness), p90 = low HR (top 10% fitness)
// higherIsBetter=false so interpolation correctly rewards lower values
const RHR_NORMS = {
  male: [
    [80, 70, 60, 50, 44],  // 18-24: p10=80bpm(poor), p90=44bpm(excellent)
    [82, 72, 62, 52, 45],
    [83, 73, 63, 53, 46],
    [84, 74, 64, 54, 47],
    [86, 76, 65, 56, 48],
    [88, 78, 68, 58, 50],
    [90, 80, 70, 60, 52],
  ],
  female: [
    [82, 73, 64, 54, 46],
    [84, 74, 65, 55, 47],
    [85, 75, 66, 56, 48],
    [86, 76, 67, 57, 49],
    [88, 78, 68, 58, 50],
    [90, 80, 70, 60, 52],
    [92, 82, 72, 62, 54],
  ]
};

// Push-up max norms (reps to failure) — ACSM/Canadian Fit Survey
// higherIsBetter=true, ascending [p10, p25, p50, p75, p90]
const PUSHUP_NORMS = {
  male: [
    [14, 22, 33, 45, 57],  // 18-24
    [12, 20, 30, 42, 53],  // 25-29
    [10, 18, 27, 38, 49],  // 30-34
    [ 8, 15, 24, 34, 45],  // 35-39
    [ 6, 12, 20, 30, 40],  // 40-49
    [ 4,  9, 15, 24, 33],  // 50-59
    [ 3,  6, 11, 18, 26],  // 60+
  ],
  female: [
    [10, 16, 24, 33, 43],
    [ 9, 14, 21, 30, 39],
    [ 7, 12, 19, 27, 36],
    [ 5, 10, 16, 24, 32],
    [ 4,  8, 13, 20, 27],
    [ 3,  6, 10, 16, 22],
    [ 2,  4,  7, 12, 17],
  ]
};

// L-Sit hold norms (seconds, higherIsBetter=true)
// Based on calisthenics training community data + gymnastics progressions
// Novice: ~5-10s, Intermediate: 15-25s, Advanced: 30-45s, Elite: 60s+
// [p10, p25, p50, p75, p90]
const LSIT_NORMS = {
  male: [
    [ 5, 12, 22, 35, 50],  // 18-24
    [ 5, 11, 20, 33, 48],  // 25-29
    [ 4, 10, 18, 30, 44],  // 30-34
    [ 3,  8, 15, 26, 40],  // 35-39
    [ 2,  6, 12, 22, 35],  // 40-49
    [ 2,  5, 10, 18, 28],  // 50-59
    [ 1,  4,  8, 14, 22],  // 60+
  ],
  female: [
    [ 3,  8, 16, 27, 40],
    [ 3,  7, 14, 25, 38],
    [ 2,  6, 12, 22, 34],
    [ 2,  5, 10, 19, 30],
    [ 1,  4,  8, 16, 25],
    [ 1,  3,  6, 12, 20],
    [ 1,  2,  5, 10, 16],
  ]
};

// Dead Hang norms (seconds, higherIsBetter=true)
// Based on grip-strength research, Dr. Peter Attia longevity benchmarks,
// and climbing/training community data
// General pop avg ~30-45s, trained ~60-90s, elite 120s+
// Attia benchmarks: men 120s @ age 40, women 90s @ age 40
// [p10, p25, p50, p75, p90]
const DEAD_HANG_NORMS = {
  male: [
    [20, 35, 55, 80, 115],  // 18-24
    [18, 32, 50, 75, 110],  // 25-29
    [16, 28, 45, 70, 105],  // 30-34
    [14, 25, 40, 65, 100],  // 35-39
    [12, 22, 35, 55,  85],  // 40-49
    [10, 18, 28, 45,  70],  // 50-59
    [ 8, 14, 22, 35,  55],  // 60+
  ],
  female: [
    [12, 22, 38, 58, 85],
    [10, 20, 35, 55, 80],
    [ 9, 18, 30, 48, 72],
    [ 8, 15, 26, 42, 65],
    [ 6, 12, 22, 35, 55],
    [ 5, 10, 18, 28, 45],
    [ 4,  8, 14, 22, 35],
  ]
};

// Pull-up max norms (dead hang, chin over bar) — military / fitness research
// higherIsBetter=true, ascending [p10, p25, p50, p75, p90]
const PULLUP_NORMS = {
  male: [
    [ 3,  6, 10, 15, 20],  // 18-24
    [ 2,  5,  9, 14, 19],  // 25-29
    [ 2,  4,  8, 13, 17],  // 30-34
    [ 1,  3,  7, 11, 16],  // 35-39
    [ 1,  3,  6, 10, 14],  // 40-49
    [ 0,  2,  4,  8, 11],  // 50-59
    [ 0,  1,  3,  6,  9],  // 60+
  ],
  female: [
    [ 0,  1,  3,  6, 10],
    [ 0,  1,  2,  5,  9],
    [ 0,  1,  2,  4,  8],
    [ 0,  0,  1,  3,  6],
    [ 0,  0,  1,  2,  5],
    [ 0,  0,  1,  2,  4],
    [ 0,  0,  0,  1,  3],
  ]
};

// Bodyweight bench press reps — NSCA muscular endurance + training population data
// higherIsBetter=true, ascending [p10, p25, p50, p75, p90]
const BW_BENCH_NORMS = {
  male: [
    [ 3,  8, 15, 22, 30],  // 18-24
    [ 2,  7, 13, 20, 28],  // 25-29
    [ 2,  6, 12, 18, 25],  // 30-34
    [ 1,  5, 10, 16, 22],  // 35-39
    [ 1,  4,  8, 13, 18],  // 40-49
    [ 0,  3,  6, 10, 14],  // 50-59
    [ 0,  2,  4,  7, 10],  // 60+
  ],
  female: [
    [ 1,  4,  8, 14, 20],
    [ 1,  3,  7, 12, 18],
    [ 1,  3,  6, 11, 16],
    [ 0,  2,  5,  9, 14],
    [ 0,  2,  4,  7, 11],
    [ 0,  1,  3,  5,  8],
    [ 0,  1,  2,  4,  6],
  ]
};

// Vertical Jump norms (inches, ascending — higher = better)
// NFL Combine avg ~34", elite WR/DB ~40"+, general pop lower
// [p10, p25, p50, p75, p90]
const VERT_JUMP_NORMS = {
  male: [
    [14, 18, 23, 29, 35],  // 18-24
    [13, 17, 22, 27, 33],  // 25-29
    [12, 16, 21, 26, 31],  // 30-34
    [11, 15, 20, 24, 29],  // 35-39
    [10, 14, 18, 22, 26],  // 40-49
    [ 8, 12, 15, 19, 23],  // 50-59
    [ 6,  9, 12, 16, 19],  // 60+
  ],
  female: [
    [10, 13, 17, 21, 26],
    [ 9, 12, 16, 20, 24],
    [ 8, 11, 15, 19, 23],
    [ 7, 10, 14, 17, 21],
    [ 6,  9, 12, 15, 18],
    [ 5,  7, 10, 13, 16],
    [ 4,  6,  8, 11, 13],
  ]
};

// Broad Jump norms (inches, ascending — higher = better)
// NFL Combine avg ~118", elite ~130"+
// [p10, p25, p50, p75, p90]
const BROAD_JUMP_NORMS = {
  male: [
    [68, 80, 94, 108, 120],  // 18-24
    [64, 76, 90, 104, 116],  // 25-29
    [60, 72, 86,  99, 110],  // 30-34
    [56, 68, 80,  94, 105],  // 35-39
    [50, 62, 74,  86,  97],  // 40-49
    [42, 54, 66,  78,  88],  // 50-59
    [34, 46, 56,  68,  78],  // 60+
  ],
  female: [
    [46, 58, 70, 82, 95],
    [42, 54, 66, 78, 91],
    [38, 50, 62, 74, 85],
    [34, 46, 58, 70, 81],
    [30, 42, 53, 64, 75],
    [26, 36, 46, 56, 66],
    [22, 32, 40, 50, 58],
  ]
};

// Rowing 500m norms (seconds) — Concept2 world rankings + club data
// Stored DESCENDING [p10_slow, p25, p50, p75, p90_fast]
const ROW500_NORMS = {
  male: [
    [130, 118, 108,  99,  93],  // 18-24
    [132, 120, 110, 101,  95],  // 25-29
    [136, 124, 113, 104,  98],  // 30-34
    [141, 128, 117, 108, 102],  // 35-39
    [148, 135, 123, 114, 107],  // 40-49
    [158, 144, 132, 122, 115],  // 50-59
    [170, 156, 143, 132, 125],  // 60+
  ],
  female: [
    [150, 137, 125, 116, 109],
    [153, 140, 128, 118, 111],
    [157, 143, 131, 121, 114],
    [163, 149, 136, 126, 119],
    [171, 156, 143, 132, 125],
    [182, 166, 153, 141, 134],
    [196, 179, 165, 153, 145],
  ]
};

// Rowing 5000m norms (seconds) — Concept2 world rankings + club data
// Stored DESCENDING [p10_slow, p25, p50, p75, p90_fast]
const ROW5K_NORMS = {
  male: [
    [1380, 1260, 1140, 1050,  990],  // 18-24
    [1410, 1290, 1170, 1080, 1020],  // 25-29
    [1455, 1335, 1210, 1115, 1055],  // 30-34
    [1505, 1380, 1255, 1155, 1090],  // 35-39
    [1575, 1445, 1315, 1210, 1145],  // 40-49
    [1680, 1540, 1405, 1295, 1225],  // 50-59
    [1810, 1660, 1515, 1400, 1325],  // 60+
  ],
  female: [
    [1590, 1455, 1320, 1215, 1148],
    [1625, 1490, 1350, 1245, 1176],
    [1675, 1535, 1395, 1285, 1215],
    [1735, 1590, 1445, 1330, 1258],
    [1820, 1670, 1520, 1400, 1324],
    [1945, 1785, 1625, 1497, 1416],
    [2095, 1925, 1755, 1617, 1530],
  ]
};

// Running norms (seconds) — World Athletics age grading + Strava population data
// Stored DESCENDING: [p10_val, p25_val, p50_val, p75_val, p90_val]
// p10 = slow time (bottom 10% runners), p90 = fast time (top 10% runners)
// higherIsBetter=false so interpolation rewards lower times
const RUN_NORMS = {
  r400: {
    male: [
      [96,  78,  64,  54,  48],   // 18-24
      [100, 82,  66,  56,  50],   // 25-29
      [105, 86,  70,  59,  53],   // 30-34
      [112, 91,  74,  63,  56],   // 35-39
      [120, 98,  80,  68,  60],   // 40-49
      [135, 110, 90,  76,  66],   // 50-59
      [152, 124, 102, 86,  75],   // 60+
    ],
    female: [
      [112, 92,  76,  64,  56],
      [116, 96,  79,  66,  58],
      [122, 101, 83,  70,  61],
      [130, 107, 88,  74,  65],
      [140, 116, 95,  80,  70],
      [155, 128, 105, 88,  77],
      [175, 144, 118, 100, 86],
    ]
  },
  r1600: {
    male: [
      [540,  420, 340, 280, 240],
      [560,  440, 360, 295, 250],
      [590,  465, 380, 310, 265],
      [625,  495, 405, 330, 280],
      [680,  540, 440, 360, 305],
      [760,  600, 490, 400, 340],
      [880,  695, 565, 460, 390],
    ],
    female: [
      [650,  510, 410, 330, 280],
      [675,  530, 425, 345, 295],
      [705,  555, 450, 365, 310],
      [750,  590, 476, 385, 330],
      [820,  645, 520, 420, 360],
      [920,  720, 580, 470, 400],
      [1060, 830, 666, 540, 455],
    ]
  },
  r5k: {
    male: [
      [2100, 1620, 1290, 1050, 900],
      [2200, 1700, 1350, 1100, 940],
      [2340, 1810, 1440, 1170, 1000],
      [2500, 1930, 1535, 1250, 1070],
      [2720, 2100, 1670, 1360, 1160],
      [3060, 2355, 1870, 1520, 1300],
      [3540, 2730, 2170, 1760, 1500],
    ],
    female: [
      [2560, 1970, 1560, 1240, 1050],
      [2680, 2060, 1630, 1295, 1100],
      [2850, 2190, 1730, 1380, 1170],
      [3040, 2340, 1845, 1470, 1250],
      [3325, 2555, 2015, 1605, 1360],
      [3755, 2885, 2270, 1805, 1530],
      [4330, 3325, 2615, 2080, 1760],
    ]
  }
};

/* ═══════════════════════════════════════════════════
   SCORING ENGINE
   ═══════════════════════════════════════════════════ */

function interpolatePercentile(value, norms, higherIsBetter) {
  // For higherIsBetter: norms stored ascending [p10_val ... p90_val]
  //   e.g. VO2 max: [20, 30, 39, 47, 53] — low value = p10, high value = p90
  // For lowerIsBetter: norms stored DESCENDING [p10_val ... p90_val]
  //   e.g. 5K secs: [2200, 1700, 1350, 1100, 940] — high sec (slow) = p10, low sec (fast) = p90
  //   e.g. RHR bpm: [82, 72, 62, 52, 45] — high bpm (unfit) = p10, low bpm (fit) = p90
  const pcts = [10, 25, 50, 75, 90, 99].slice(0, norms.length);

  if (higherIsBetter) {
    // norms ascending: norms[0]=p10, norms[last]=p90
    if (value <= norms[0]) return Math.max(1, pcts[0] * (value / norms[0]));
    if (value >= norms[norms.length-1]) return Math.min(99.5, pcts[norms.length-1]);
    for (let i = 0; i < norms.length - 1; i++) {
      if (value >= norms[i] && value <= norms[i+1]) {
        const t = (value - norms[i]) / (norms[i+1] - norms[i]);
        return pcts[i] + t * (pcts[i+1] - pcts[i]);
      }
    }
  } else {
    // norms descending: norms[0]=p10 (worst/highest), norms[last]=p90 (best/lowest)
    if (value >= norms[0]) return Math.max(1, pcts[0] * (norms[0] / value));
    if (value <= norms[norms.length-1]) return Math.min(99.5, pcts[norms.length-1]);
    for (let i = 0; i < norms.length - 1; i++) {
      // norms[i] > norms[i+1]; value is between them
      if (value <= norms[i] && value >= norms[i+1]) {
        const t = (norms[i] - value) / (norms[i] - norms[i+1]);
        return pcts[i] + t * (pcts[i+1] - pcts[i]);
      }
    }
  }
  return 50;
}

function percentileToRating(p) {
  // Map percentile (0-100) → Madden-style rating (40-99)
  if (p >= 99) return 99;
  if (p >= 97) return 97;
  if (p >= 95) return 95;
  if (p >= 90) return Math.round(90 + (p-90)/10 * 5);
  if (p >= 75) return Math.round(80 + (p-75)/15 * 10);
  if (p >= 50) return Math.round(70 + (p-50)/25 * 10);
  if (p >= 25) return Math.round(55 + (p-25)/25 * 15);
  if (p >= 10) return Math.round(48 + (p-10)/15 * 7);
  return Math.round(40 + p/10 * 8);
}

function ratingColor(r) {
  if (r >= 90) return 'score-elite';
  if (r >= 80) return 'score-great';
  if (r >= 70) return 'score-good';
  if (r >= 55) return 'score-avg';
  return 'score-below';
}

function pillColor(r) {
  if (r >= 90) return 'pill-elite';
  if (r >= 80) return 'pill-great';
  if (r >= 70) return 'pill-good';
  if (r >= 55) return 'pill-avg';
  return 'pill-below';
}

function tierName(r) {
  if (r >= 95) return 'ELITE';
  if (r >= 88) return 'ALL-PRO';
  if (r >= 80) return 'STARTER';
  if (r >= 70) return 'SOLID';
  if (r >= 55) return 'BACKUP';
  return 'ROOKIE';
}

function barColor(r) {
  if (r >= 90) return '#c8ff00';
  if (r >= 80) return 'var(--green)';
  if (r >= 70) return 'var(--blue)';
  if (r >= 55) return 'var(--text)';
  return 'var(--red)';
}

/* ═══════════════════════════════════════════════════
   MAIN CALCULATION
   ═══════════════════════════════════════════════════ */

function calculateRatings() {
  const name = document.getElementById('athleteName').value.trim() || 'ATHLETE';
  const age  = parseInt(document.getElementById('age').value) || 30;
  const sex  = document.getElementById('sex').value;
  const bw   = parseFloat(document.getElementById('bodyweight').value);

  const band = getAgeBand(age);
  const s = sex; // 'male' or 'female'

  const inputs = {
    squat:    parseFloat(document.getElementById('squat').value),
    bench:    parseFloat(document.getElementById('bench').value),
    deadlift: parseFloat(document.getElementById('deadlift').value),
    ohp:      parseFloat(document.getElementById('ohp').value),
    vo2max:   parseFloat(document.getElementById('vo2max').value),
    rhr:      parseFloat(document.getElementById('rhr').value),
    pushups:  parseFloat(document.getElementById('pushups').value),
    pullups:  parseFloat(document.getElementById('pullups').value),
    bwBenchReps: parseFloat(document.getElementById('bwBenchReps').value),
    r400:     parseFloat(document.getElementById('r400').value),
    vertJump: parseFloat(document.getElementById('vertJump').value),
    broadJump: parseFloat(document.getElementById('broadJump').value),
    lsit:     parseFloat(document.getElementById('lsit').value),
    deadHang: parseFloat(document.getElementById('deadHang').value),
  };

  // Convert min:sec fields to total seconds
  function toSecs(minId, secId) {
    const m = parseInt(document.getElementById(minId).value);
    const s = parseInt(document.getElementById(secId).value);
    if (isNaN(m) && isNaN(s)) return NaN;
    const mins = isNaN(m) ? 0 : m;
    const secs = isNaN(s) ? 0 : Math.min(s, 59);
    return mins * 60 + secs;
  }

  const runInputs = {
    r1600:  toSecs('r1600_min',  'r1600_sec'),
    r5k:    toSecs('r5k_min',    'r5k_sec'),
    row500: toSecs('row500_min', 'row500_sec'),
    row5k:  toSecs('row5k_min',  'row5k_sec'),
  };

  const results = [];

  // Helper
  function score(key, value, norms, higherIsBetter, label, displayVal, unit) {
    if (isNaN(value)) return null;
    const p = interpolatePercentile(value, norms, higherIsBetter);
    const r = percentileToRating(p);
    results.push({ key, label, displayVal, unit, percentile: p, rating: r });
    return r;
  }

  // ── STRENGTH ──
  const bwValid = !isNaN(bw) && bw > 0;

  

  // If any strength lift is entered but BW is missing, show a warning
  const anyStrengthEntered = ['squat','bench','deadlift','ohp','pullupWeight'].some(id => {
    const el = document.getElementById(id);
    return el && el.value !== '' && !isNaN(parseFloat(el.value));
  });
  const bwWarn = document.getElementById('bwWarning');
  if (bwWarn) {
    if (anyStrengthEntered && !bwValid) {
      bwWarn.textContent = 'Enter bodyweight to score strength lifts (relative strength = lift ÷ BW).';
      bwWarn.style.display = 'block';
    } else {
      bwWarn.textContent = '';
      bwWarn.style.display = 'none';
    }
  }

function strengthScore(key, label, liftedLbs) {
    if (isNaN(liftedLbs) || !bwValid) return null;
    const ratio = liftedLbs / bw;
    const norms = STRENGTH_NORMS[key][s][band];
    const p = interpolatePercentile(ratio, norms, true);
    const r = percentileToRating(p);
    results.push({
      key, label,
      displayVal: liftedLbs.toFixed(0) + ' lbs',
      unit: `${ratio.toFixed(2)}× BW`,
      percentile: p,
      rating: r
    });
    return r;
  }

  const r_squat   = strengthScore('squat', 'Back Squat', inputs.squat);
  const r_bench   = strengthScore('bench', 'Bench Press', inputs.bench);
  const r_dead    = strengthScore('deadlift', 'Deadlift', inputs.deadlift);
  const r_ohp     = strengthScore('ohp', 'Overhead Press', inputs.ohp);

  // ── CONDITIONING ──
  const r_vo2    = score('vo2max',  inputs.vo2max,  VO2_NORMS[s].bands[band],  true,  'VO₂ Max',           inputs.vo2max   ? inputs.vo2max.toFixed(1)+' ml/kg/min' : '', '');
  const r_rhr    = score('rhr',     inputs.rhr,     RHR_NORMS[s][band],        false, 'Resting Heart Rate', inputs.rhr     ? inputs.rhr.toFixed(0)+' bpm'           : '', '');
  const r_pushup = score('pushups', inputs.pushups, PUSHUP_NORMS[s][band],     true,  'Max Push-Ups',       inputs.pushups ? inputs.pushups.toFixed(0)+' reps'       : '', '');
  const r_lsit   = score('lsit',    inputs.lsit,    LSIT_NORMS[s][band],       true,  'L-Sit Hold',         inputs.lsit    ? inputs.lsit.toFixed(0)+' sec'          : '', '');

  // ── RUNNING ──
  function runFmt(secs) {
    if (isNaN(secs)) return '';
    if (secs < 60) return secs.toFixed(1) + 's';
    const m  = Math.floor(secs / 60);
    const s2 = String(Math.round(secs % 60)).padStart(2, '0');
    return m + ':' + s2;
  }

  const r_400  = score('r400',  inputs.r400,      RUN_NORMS.r400[s][band],  false, '400m',           inputs.r400            ? runFmt(inputs.r400)       : '', '');
  const r_1600 = score('r1600', runInputs.r1600,  RUN_NORMS.r1600[s][band], false, '1 Mile / 1600m', !isNaN(runInputs.r1600) ? runFmt(runInputs.r1600)  : '', '');
  const r_5k   = score('r5k',   runInputs.r5k,    RUN_NORMS.r5k[s][band],   false, '5K',             !isNaN(runInputs.r5k)   ? runFmt(runInputs.r5k)    : '', '');

  // ── STRENGTH ENDURANCE / ROWING ──
  const r_pullup = score('pullups',     inputs.pullups,     PULLUP_NORMS[s][band],    true,  'Pull-Ups (max)',    inputs.pullups     ? inputs.pullups.toFixed(0)+' reps'     : '', '');
  const r_bwb    = score('bwBenchReps', inputs.bwBenchReps, BW_BENCH_NORMS[s][band],  true,  'BW Bench Reps',     inputs.bwBenchReps ? inputs.bwBenchReps.toFixed(0)+' reps' : '', '');
  const r_deadhang = score('deadHang', inputs.deadHang, DEAD_HANG_NORMS[s][band],  true,  'Dead Hang',         inputs.deadHang    ? inputs.deadHang.toFixed(0)+' sec'    : '', '');
  const r_row500 = score('row500',   runInputs.row500, ROW500_NORMS[s][band],   false, 'Row 500m',         !isNaN(runInputs.row500) ? runFmt(runInputs.row500)    : '', '');
  const r_row5k  = score('row5k',    runInputs.row5k,  ROW5K_NORMS[s][band],    false, 'Row 5000m',        !isNaN(runInputs.row5k)  ? runFmt(runInputs.row5k)     : '', '');

  // ── EXPLOSIVENESS ──
  const r_vert  = score('vertJump',  inputs.vertJump,  VERT_JUMP_NORMS[s][band],  true, 'Vertical Jump',  inputs.vertJump  ? inputs.vertJump.toFixed(1)+' in'  : '', '');
  const r_broad = score('broadJump', inputs.broadJump, BROAD_JUMP_NORMS[s][band], true, 'Broad Jump',     inputs.broadJump ? inputs.broadJump.toFixed(0)+' in'  : '', '');

  if (results.length === 0) {
    alert('Please enter at least one metric to generate ratings.');
    return;
  }

  // ── CATEGORY AVERAGES ──
  const categories = {
    'STRENGTH':           [r_squat, r_bench, r_dead, r_ohp].filter(v => v !== null),
    'CONDITIONING':       [r_vo2, r_rhr, r_pushup, r_lsit].filter(v => v !== null),
    'SPEED / ENDURANCE':  [r_400, r_1600, r_5k].filter(v => v !== null),
    'STRENGTH ENDURANCE': [r_pullup, r_bwb, r_deadhang, r_row500, r_row5k].filter(v => v !== null),
    'EXPLOSIVENESS':      [r_vert, r_broad].filter(v => v !== null),
  };

  const catScores = {};
  for (const [cat, vals] of Object.entries(categories)) {
    if (vals.length) catScores[cat] = Math.round(vals.reduce((a,b)=>a+b,0)/vals.length);
    else catScores[cat] = null;
  }

  const allVals = Object.values(catScores).filter(v => v !== null);
  const overall = Math.round(allVals.reduce((a,b)=>a+b,0)/allVals.length);

  // ── RENDER ──
  renderResults(name, age, sex, bw, overall, catScores, results);
  storeLastResult(name, age, sex, bw, overall, catScores, results);
  renderHistory();
}

/* ═══════════════════════════════════════════════════
   ARCADE CALLOUT SYSTEM
   ═══════════════════════════════════════════════════ */

const CALLOUTS = {
  elite:  ['BEAST MODE', 'HE\'S ON FIRE!', 'FREAK ATHLETE', 'ABSOLUTE UNIT', 'UNSTOPPABLE'],
  great:  ['BALLER STATUS', 'BUILT DIFFERENT', 'NO DAYS OFF', 'CERTIFIED'],
  low:    ['KEEP GRINDING', 'WORK IN PROGRESS', 'ROOM TO GROW'],
};

function showArcadeCallout(overall) {
  const el = document.getElementById('arcadeCallout');
  let text, color;
  if (overall >= 90) {
    text = CALLOUTS.elite[Math.floor(Math.random() * CALLOUTS.elite.length)];
    color = '#c8ff00';
  } else if (overall >= 80) {
    text = CALLOUTS.great[Math.floor(Math.random() * CALLOUTS.great.length)];
    color = '#22c55e';
  } else if (overall < 55) {
    text = CALLOUTS.low[Math.floor(Math.random() * CALLOUTS.low.length)];
    color = '#ef4444';
  } else {
    return; // 55-79 range — no callout
  }

  el.textContent = text;
  el.style.color = color;
  el.style.textShadow = `0 0 40px ${color}, 0 0 80px ${color}, 4px 4px 0 #08080c`;
  el.classList.remove('show');
  void el.offsetWidth; // force reflow to restart animation
  el.classList.add('show');

  if (overall >= 90) {
    document.body.classList.add('screen-shake');
    setTimeout(() => document.body.classList.remove('screen-shake'), 450);
  }
}


/* ═══════════════════════════════════════════════════
   APPLY ARCADE ANIMATIONS TO RESULT ELEMENTS
   ═══════════════════════════════════════════════════ */

function applyArcadeAnimations(catScores, results, overall) {
  // Attr cards: fire for 95+, hot pulse for 80+
  setTimeout(() => {
    const cards = document.querySelectorAll('.attr-card');
    const cats = Object.entries(catScores).filter(([k, v]) => v !== null);
    cards.forEach((card, i) => {
      if (cats[i]) {
        const sc = cats[i][1];
        if (sc >= 95)      card.classList.add('on-fire');
        else if (sc >= 80) card.classList.add('hot-glow');
      }
    });
  }, 150);

  // Breakdown rows: fire for 95+, hot pulse for 80+
  setTimeout(() => {
    const rows = document.querySelectorAll('.breakdown-row');
    rows.forEach((row, i) => {
      if (results[i]) {
        const r = results[i].rating;
        if (r >= 95)      row.classList.add('on-fire');
        else if (r >= 80) row.classList.add('hot-glow');
      }
    });
  }, 300);

  // Overall badge fire effect
  const badge = document.querySelector('.rating-badge');
  badge.classList.remove('badge-on-fire');
  if (overall >= 95) badge.classList.add('badge-on-fire');

  // Overall card border glow
  const card = document.getElementById('overallCard');
  card.classList.remove('on-fire', 'hot-glow');
  if (overall >= 95)      card.classList.add('on-fire');
  else if (overall >= 80) card.classList.add('hot-glow');
}

/* ═══════════════════════════════════════════════════
   WEAKEST LINK — IMPROVEMENT SUGGESTIONS
   ═══════════════════════════════════════════════════ */

const IMPROVEMENT_TIPS = {
  'STRENGTH': {
    icon: '🏋️',
    tips: [
      'Follow a progressive overload program like 5/3/1 or GZCL — add weight systematically each cycle to the squat, bench, deadlift, and overhead press.',
      'Prioritize compound lifts 3–4× per week. Frequency and consistency beat single-session intensity for building raw strength.',
      'Eat at a slight caloric surplus (250–500 cal/day) with at least 0.8g protein per pound of bodyweight to fuel recovery and growth.',
      'Address sticking points with targeted accessories: pause squats, deficit deadlifts, close-grip bench, and pin presses.',
    ]
  },
  'CONDITIONING': {
    icon: '🫀',
    tips: [
      'Build an aerobic base with 3–4 sessions of Zone 2 cardio (conversational pace) lasting 30–60 minutes each week.',
      'Add 1–2 high-intensity interval sessions per week (e.g. 30s on / 60s off × 8–12 rounds) to drive VO₂ max improvements.',
      'Incorporate push-up density work: set a timer for 10 minutes and accumulate as many quality reps as possible, resting as needed.',
      'Build your L-sit by starting with a tucked hold on parallettes, gradually extending legs over weeks. Aim for 3×max-hold daily.',
      'Track your resting heart rate each morning — it\'s one of the most reliable markers of improving aerobic fitness over time.',
    ]
  },
  'SPEED / ENDURANCE': {
    icon: '🏃',
    tips: [
      'Follow the 80/20 rule: 80% of your weekly running volume at easy, conversational pace and 20% at tempo or interval intensity.',
      'Add weekly tempo runs at your lactate threshold pace (comfortably hard, roughly 10K race effort) for 20–30 minutes.',
      'Include one speed session per week: 400m repeats at your goal mile pace with equal rest intervals.',
      'Don\'t neglect mileage. Gradually build weekly volume by no more than 10% per week to strengthen your aerobic engine.',
    ]
  },
  'STRENGTH ENDURANCE': {
    icon: '💪',
    tips: [
      'Train pull-ups with grease-the-groove: multiple sub-max sets spread throughout the day, 5–6 days per week.',
      'For bench reps, train high-rep sets (3×15–20) at 50–60% of your 1RM twice a week to build pressing endurance.',
      'Add rowing intervals (500m repeats with 1:1 rest) 2× per week to build both power and aerobic capacity on the erg.',
      'Train dead hangs 3–4× per week: 3 sets to failure at the end of your session. Grip strength adapts fast with consistent work.',
      'Muscular endurance responds well to density training — set a 15-minute clock and accumulate reps across your weak lifts.',
    ]
  },
  'EXPLOSIVENESS': {
    icon: '🚀',
    tips: [
      'Train box jumps and depth jumps 2–3× per week — focus on maximal intent and full recovery between sets (3–5 reps × 4–5 sets).',
      'Add Olympic lift variations: power cleans and hang snatches develop the same fast-twitch recruitment that drives vertical and broad jump.',
      'Plyometric progressions: start with squat jumps, progress to tuck jumps, then single-leg bounds. Quality over volume.',
      'Strengthen your posterior chain with heavy hip hinges (trap bar deadlifts, RDLs) — ground force production starts at the hips.',
    ]
  },
};

function renderWeakestLink(catScores) {
  const panel = document.getElementById('weakestLinkPanel');
  const filled = Object.entries(catScores).filter(([k, v]) => v !== null);

  if (filled.length < 2) {
    panel.style.display = 'none';
    return;
  }

  let worst = filled[0], best = filled[0];
  for (const entry of filled) {
    if (entry[1] < worst[1]) worst = entry;
    if (entry[1] > best[1]) best = entry;
  }

  const gap = best[1] - worst[1];
  if (gap < 8) {
    // Well balanced — no weakest link callout needed
    panel.style.display = 'none';
    return;
  }

  const worstCat = worst[0];
  const worstScore = worst[1];
  const bestCat = best[0];
  const bestScore = best[1];
  const tips = IMPROVEMENT_TIPS[worstCat];

  if (!tips) { panel.style.display = 'none'; return; }

  // Gap severity
  let severity, severityColor;
  if (gap >= 25) { severity = 'CRITICAL'; severityColor = 'var(--red)'; }
  else if (gap >= 15) { severity = 'SIGNIFICANT'; severityColor = 'var(--amber)'; }
  else { severity = 'MODERATE'; severityColor = 'var(--blue)'; }

  // Build the gap meter width (normalize gap: 8=min shown, ~40=max realistic)
  const gapPct = Math.min(100, Math.round(((gap - 8) / 32) * 100));

  let html = `
    <div class="wl-header">${tips.icon} Weakest Link: ${worstCat}</div>
    <div class="wl-body">
      Your <strong>${worstCat}</strong> rating of <strong>${worstScore}</strong> trails your best category 
      (<strong>${bestCat}</strong> at <strong>${bestScore}</strong>) by <strong>${gap} points</strong>. 
      A well-rounded hybrid athlete minimizes the gap between their strongest and weakest domains.
    </div>
    <div class="wl-gap-meter">
      <div class="wl-gap-label">
        <span>Imbalance: <span style="color:${severityColor}">${severity}</span></span>
        <span>${gap} pt gap</span>
      </div>
      <div class="wl-gap-track">
        <div class="wl-gap-fill" style="width:0%" data-width="${gapPct}%"></div>
      </div>
    </div>
    <div class="wl-suggestions">
      <div class="wl-suggestions-title">How to close the gap</div>
      ${tips.tips.map(t => `
        <div class="wl-suggestion-item">
          <span class="wl-icon">▸</span>
          <span>${t}</span>
        </div>
      `).join('')}
    </div>
  `;

  panel.innerHTML = html;
  panel.style.display = 'block';

  // Animate the gap bar
  setTimeout(() => {
    const fill = panel.querySelector('.wl-gap-fill');
    if (fill) fill.style.width = fill.dataset.width;
  }, 200);
}

/* ═══════════════════════════════════════════════════
   RENDER
   ═══════════════════════════════════════════════════ */

function renderResults(name, age, sex, bw, overall, catScores, results) {
  document.getElementById('results').classList.add('visible');
  document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Overall
  animateNumber('overallNum', overall);
  document.getElementById('tierLabel').textContent = tierName(overall);
  document.getElementById('nameDisplay').textContent = name.toUpperCase();
  document.getElementById('metaDisplay').textContent =
    `${age} YRS · ${sex.toUpperCase()} · ${bw ? bw + ' LBS' : 'BW NOT SET'}`;

  const pctVals = results.map(r => r.percentile).filter(p => typeof p === 'number' && !isNaN(p));
  const overallPct = pctVals.length ? Math.round(pctVals.reduce((a,b)=>a+b,0) / pctVals.length) : null;
  document.getElementById('percentileDisplay').innerHTML = overallPct === null
    ? `Overall percentile: <strong>—</strong>`
    : `Overall percentile (modeled): <strong>${overallPct}th</strong> · Top <strong>${100-overallPct}%</strong>`;

  // Apply color to badge
  const badge = document.querySelector('.rating-badge');
  if (overall >= 90) badge.style.background = '#c8ff00';
  else if (overall >= 80) badge.style.background = 'var(--green)';
  else if (overall >= 70) badge.style.background = 'var(--blue)';
  else if (overall >= 55) badge.style.background = '#888';
  else badge.style.background = 'var(--red)';

  // Attribute cards
  const attrRow = document.getElementById('attrRow');
  attrRow.innerHTML = '';
  for (const [cat, score] of Object.entries(catScores)) {
    if (score === null) continue;
    const card = document.createElement('div');
    card.className = 'attr-card fade-up';
    card.innerHTML = `
      <div class="attr-header">
        <span class="attr-name">${cat}</span>
        <span class="attr-score ${ratingColor(score)}">${score}</span>
      </div>
      <div class="attr-bar-track">
        <div class="attr-bar-fill" style="background:${barColor(score)}" data-width="${score}%"></div>
      </div>
    `;
    attrRow.appendChild(card);
  }

  setTimeout(() => {
    document.querySelectorAll('.attr-bar-fill').forEach(el => {
      el.style.width = el.dataset.width;
    });
  }, 100);

  // Weakest link analysis
  renderWeakestLink(catScores);

  // Breakdown table
  const tbody = document.getElementById('breakdownBody');
  tbody.innerHTML = '';
  results.forEach((r, i) => {
    const row = document.createElement('div');
    row.className = 'breakdown-row fade-up';
    row.style.animationDelay = (i * 0.05) + 's';
    row.innerHTML = `
      <div class="metric-label">
        ${r.label}
        <small>${r.unit || ''}</small>
      </div>
      <div class="your-value">${r.displayVal}</div>
      <div>
        <span class="percentile-pill ${pillColor(r.rating)}">
          P${Math.round(r.percentile)}
        </span>
        <div class="compare-bar-wrapper">
          <div class="compare-bar-track">
            <div class="compare-bar-you" data-width="${r.percentile}%"></div>
          </div>
        </div>
      </div>
      <div class="rating-chip ${ratingColor(r.rating)}">${r.rating}</div>
    `;
    tbody.appendChild(row);
  });

  setTimeout(() => {
    document.querySelectorAll('.compare-bar-you').forEach(el => {
      el.style.width = el.dataset.width;
    });
  }, 200);

  // Radar chart
  drawRadar(catScores);

  // Arcade systems
  showArcadeCallout(overall);
  applyArcadeAnimations(catScores, results, overall);
}

function ratingToPct(r) {
  if (r >= 95) return 97;
  if (r >= 90) return 90 + (r-90)/5 * 7;
  if (r >= 80) return 75 + (r-80)/10 * 15;
  if (r >= 70) return 50 + (r-70)/10 * 25;
  if (r >= 55) return 25 + (r-55)/15 * 25;
  if (r >= 48) return 10 + (r-48)/7 * 15;
  return r;
}

function animateNumber(id, target) {
  const el = document.getElementById(id);
  let start = 0;
  const duration = 800;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ═══════════════════════════════════════════════════
   RADAR CHART
   ═══════════════════════════════════════════════════ */

function drawRadar(catScores, compareCatScores) {
  const canvas = document.getElementById('radarCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const labels = Object.keys(catScores).filter(k => catScores[k] !== null);
  const values = labels.map(k => catScores[k] / 100);

  if (labels.length < 2) return;

  const cx = W/2, cy = H/2;
  const R = Math.min(W, H)/2 - 60;
  const N = labels.length;
  const angle = (i) => (Math.PI * 2 * i / N) - Math.PI/2;

  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  for (let ring = 1; ring <= 5; ring++) {
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      const r = R * ring / 5;
      const x = cx + r * Math.cos(angle(i));
      const y = cy + r * Math.sin(angle(i));
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Spokes
  for (let i = 0; i < N; i++) {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + R * Math.cos(angle(i)), cy + R * Math.sin(angle(i)));
    ctx.stroke();
  }

  // Compare overlay (previous result — drawn first, underneath)
  if (compareCatScores) {
    const cVals = labels.map(k => (compareCatScores[k] || 0) / 100);
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      const r = R * cVals[i];
      const x = cx + r * Math.cos(angle(i));
      const y = cy + r * Math.sin(angle(i));
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(59,130,246,0.05)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(59,130,246,0.4)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Labels (muted)
  ctx.fillStyle = '#5a5a6e';
  ctx.font = "400 14px 'Inter', sans-serif";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (let i = 0; i < N; i++) {
    const lx = cx + (R + 26) * Math.cos(angle(i));
    const ly = cy + (R + 26) * Math.sin(angle(i));
    const t = labels[i].toUpperCase().replace(/_/g,' ');
    ctx.fillText(t, lx, ly);
  }

  // Current fill
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
  gradient.addColorStop(0, 'rgba(200,255,0,0.3)');
  gradient.addColorStop(1, 'rgba(200,255,0,0.03)');

  ctx.beginPath();
  for (let i = 0; i < N; i++) {
    const r = R * values[i];
    const x = cx + r * Math.cos(angle(i));
    const y = cy + r * Math.sin(angle(i));
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = '#c8ff00';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Dots
  for (let i = 0; i < N; i++) {
    const r = R * values[i];
    const x = cx + r * Math.cos(angle(i));
    const y = cy + r * Math.sin(angle(i));
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI*2);
    ctx.fillStyle = '#c8ff00';
    ctx.fill();
  }

  // Score labels
  ctx.fillStyle = '#a0a0b0';
  ctx.font = '400 14px "Inter", sans-serif';
  ctx.textAlign = 'center';
  for (let i = 0; i < N; i++) {
    const x = cx + (R + 40) * Math.cos(angle(i));
    const y = cy + (R + 40) * Math.sin(angle(i));
    const score = catScores[labels[i]];
    ctx.fillStyle = score >= 90 ? '#c8ff00' : score >= 80 ? '#22c55e' : score >= 70 ? '#3b82f6' : '#a0a0b0';
    ctx.fillText(labels[i], x, y - 4);
    ctx.fillText(score, x, y + 14);
  }

  // Show/hide compare legend
  const legend = document.getElementById('compareLegend');
  if (legend) legend.style.display = compareCatScores ? 'flex' : 'none';
}


/* ═══════════════════════════════════════════════════
   SAVE / COMPARE / HISTORY (localStorage)
   ═══════════════════════════════════════════════════ */

let _lastResult = null; // store last calculated result for saving
let _compareEntry = null; // currently selected history entry to compare

function storeLastResult(name, age, sex, bw, overall, catScores, results) {
  _lastResult = {
    date: new Date().toISOString(),
    name, age, sex, bw, overall,
    catScores: {...catScores},
    results: results.map(r => ({key: r.key, label: r.label, displayVal: r.displayVal, rating: r.rating, percentile: r.percentile})),
    tier: tierName(overall),
  };
}

function saveResult() {
  if (!_lastResult) { alert('Generate ratings first.'); return; }
  const history = JSON.parse(localStorage.getItem('combine_history') || '[]');
  history.unshift(_lastResult);
  if (history.length > 20) history.length = 20; // cap at 20
  localStorage.setItem('combine_history', JSON.stringify(history));
  renderHistory();
  // brief feedback
  const btn = document.querySelector('.save-btn');
  const orig = btn.textContent;
  btn.textContent = '✅ SAVED!';
  setTimeout(() => btn.textContent = orig, 1500);
}

function clearHistory() {
  if (!confirm('Clear all saved results?')) return;
  localStorage.removeItem('combine_history');
  _compareEntry = null;
  renderHistory();
}

function deleteHistoryEntry(idx) {
  const history = JSON.parse(localStorage.getItem('combine_history') || '[]');
  history.splice(idx, 1);
  localStorage.setItem('combine_history', JSON.stringify(history));
  _compareEntry = null;
  renderHistory();
}

function selectCompare(idx) {
  const history = JSON.parse(localStorage.getItem('combine_history') || '[]');
  if (_compareEntry === idx) {
    _compareEntry = null; // deselect
  } else {
    _compareEntry = idx;
  }
  renderHistory();
  // Re-draw radar with compare overlay
  if (_lastResult) {
    const compareCat = _compareEntry !== null ? history[_compareEntry].catScores : null;
    drawRadar(_lastResult.catScores, compareCat);
  }
}

function renderHistory() {
  const container = document.getElementById('historyEntries');
  const history = JSON.parse(localStorage.getItem('combine_history') || '[]');
  if (history.length === 0) {
    container.innerHTML = '<div class="history-empty">No saved results yet. Hit SAVE after generating ratings.</div>';
    return;
  }
  container.innerHTML = history.map((entry, i) => {
    const d = new Date(entry.date);
    const dateStr = d.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
    const color = entry.overall >= 90 ? '#c8ff00' : entry.overall >= 80 ? '#22c55e' : entry.overall >= 70 ? '#3b82f6' : entry.overall >= 55 ? '#a0a0b0' : '#ef4444';
    const isActive = _compareEntry === i;
    return `
      <div class="history-entry ${isActive ? 'active' : ''}" onclick="selectCompare(${i})">
        <span class="he-date">${dateStr}</span>
        <span class="he-score" style="color:${color}">${entry.overall}</span>
        <span class="he-tier">${entry.tier || tierName(entry.overall)}</span>
        <button class="he-del" onclick="event.stopPropagation(); deleteHistoryEntry(${i})" title="Delete">✕</button>
      </div>
    `;
  }).join('');
}


function applyMostCommonAthletePreset() {
  const preset = {
    athleteName: 'Hybrid Athlete',
    age: 34,
    sex: 'male',
    bodyweight: 185,
    squat: 275,
    bench: 205,
    deadlift: 335,
    ohp: 135,
    vo2max: 46,
    rhr: 58,
    pushups: 40,
    lsit: 20,
    r400: 74,
    r1600_min: 6,
    r1600_sec: 15,
    r5k_min: 24,
    r5k_sec: 30,
    pullups: 10,
    bwBenchReps: 12,
    deadHang: 60,
    row500_min: 1,
    row500_sec: 45,
    row5k_min: 21,
    row5k_sec: 0,
    vertJump: 22,
    broadJump: 86
  };

  Object.entries(preset).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = String(value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });

  document.querySelectorAll('.time-sec').forEach(inp => {
    if (inp.value !== '') {
      const n = Math.max(0, Math.min(59, Math.trunc(Number(inp.value) || 0)));
      inp.value = String(n).padStart(2, '0');
    }
  });

  const btn = document.querySelector('.preset-btn');
  if (btn) {
    const old = btn.textContent;
    btn.textContent = '✓ Defaults Applied';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = old;
      btn.disabled = false;
    }, 1100);
  }
}

function setupTimeFieldAutoAdvance() {
  document.querySelectorAll('.time-input-group').forEach(group => {
    const minInput = group.querySelector('.time-min');
    const secInput = group.querySelector('.time-sec');
    if (!minInput || !secInput) return;

    const clampSec = () => {
      if (secInput.value === '') return;
      let n = Math.trunc(Number(secInput.value));
      if (!Number.isFinite(n)) return;
      n = Math.max(0, Math.min(59, n));
      secInput.value = String(n).padStart(2, '0');
    };

    minInput.addEventListener('input', () => {
      const digits = String(minInput.value ?? '').replace(/\D/g, '');
      if (digits.length >= 2 && document.activeElement === minInput) {
        secInput.focus();
        if (typeof secInput.select === 'function') secInput.select();
      }
    });

    minInput.addEventListener('keydown', (e) => {
      if (e.key === ':' || e.key === '.' || e.key === 'ArrowRight') {
        e.preventDefault();
        secInput.focus();
        if (typeof secInput.select === 'function') secInput.select();
      }
    });

    secInput.addEventListener('input', () => {
      let digits = String(secInput.value ?? '').replace(/\D/g, '');
      if (digits.length > 2) digits = digits.slice(-2);
      if (secInput.value !== digits) secInput.value = digits;
      if (digits.length >= 2) clampSec();
    });

    secInput.addEventListener('blur', clampSec);

    secInput.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && secInput.value === '') {
        minInput.focus();
      }
    });
  });
}

// Load history on page load
document.addEventListener('DOMContentLoaded', () => { renderHistory(); setupTimeFieldAutoAdvance(); });


/* ═══════════════════════════════════════════════════
   SHARE CARD (1080×1080 Instagram-optimized)
   Draws to a hidden canvas, then triggers download
   ═══════════════════════════════════════════════════ */

function generateShareCard() {
  if (!_lastResult) { alert('Generate ratings first.'); return; }
  const r = _lastResult;
  const canvas = document.getElementById('shareCanvas');
  const ctx = canvas.getContext('2d');
  const W = 1080, H = 1080;
  canvas.width = W; canvas.height = H;

  // Background
  ctx.fillStyle = '#08080c';
  ctx.fillRect(0, 0, W, H);

  // Subtle radial gradient accents
  const g1 = ctx.createRadialGradient(100, 80, 0, 100, 80, 600);
  g1.addColorStop(0, 'rgba(200,255,0,0.08)');
  g1.addColorStop(1, 'rgba(10,10,11,0)');
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, W, H);

  const g2 = ctx.createRadialGradient(W-100, 120, 0, W-100, 120, 500);
  g2.addColorStop(0, 'rgba(59,130,246,0.05)');
  g2.addColorStop(1, 'rgba(10,10,11,0)');
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, W, H);

  // Overall badge area (left strip)
  let badgeColor;
  if (r.overall >= 90) badgeColor = '#c8ff00';
  else if (r.overall >= 80) badgeColor = '#22c55e';
  else if (r.overall >= 70) badgeColor = '#3b82f6';
  else if (r.overall >= 55) badgeColor = '#6b7280';
  else badgeColor = '#ef4444';

  ctx.fillStyle = badgeColor;
  ctx.fillRect(0, 0, 260, H);

  // Badge arrow
  ctx.beginPath();
  ctx.moveTo(260, 0); ctx.lineTo(310, H/2); ctx.lineTo(260, H);
  ctx.closePath(); ctx.fill();

  // OVR number
  ctx.fillStyle = '#08080c';
  ctx.font = '400 120px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(r.overall, 130, 260);

  // OVR label
  ctx.font = '400 20px "Space Grotesk", sans-serif';
  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  ctx.fillText('OVR', 130, 300);

  // Tier
  ctx.font = '400 24px "Space Grotesk", sans-serif';
  ctx.fillStyle = 'rgba(0,0,0,0.65)';
  ctx.fillText(r.tier, 130, 355);

  // Name
  ctx.textAlign = 'left';
  ctx.fillStyle = '#f0f0f5';
  ctx.font = '400 40px "Space Grotesk", sans-serif';
  const displayName = (r.name || 'ATHLETE').toUpperCase();
  ctx.fillText(displayName, 340, 180);

  // Meta
  ctx.fillStyle = '#5a5a6e';
  ctx.font = '400 18px "Inter", sans-serif';
  ctx.fillText(`${r.age} YRS · ${r.sex.toUpperCase()} · ${r.bw ? r.bw + ' LBS' : ''}`, 340, 220);

  // Category bars
  const cats = Object.entries(r.catScores).filter(([k,v]) => v !== null);
  const barStartY = 290;
  const barH = 44;
  const barGap = 16;
  const barMaxW = 620;

  cats.forEach(([cat, score], i) => {
    const y = barStartY + i * (barH + barGap);

    // Label
    ctx.fillStyle = '#5a5a6e';
    ctx.font = '400 14px "Inter", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(cat, 340, y + 12);

    // Score
    ctx.textAlign = 'right';
    const sc = score >= 90 ? '#c8ff00' : score >= 80 ? '#22c55e' : score >= 70 ? '#3b82f6' : score >= 55 ? '#a0a0b0' : '#ef4444';
    ctx.fillStyle = sc;
    ctx.font = '400 24px "Space Grotesk", sans-serif';
    ctx.fillText(score, 340 + barMaxW, y + 14);

    // Bar track
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.fillRect(340, y + 24, barMaxW, 8);

    // Bar fill
    ctx.fillStyle = sc;
    ctx.fillRect(340, y + 24, barMaxW * (score / 100), 8);
  });

  // Individual metric breakdown (compact)
  const metricsStartY = barStartY + cats.length * (barH + barGap) + 30;
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.fillRect(340, metricsStartY, barMaxW, 1);

  const metrics = r.results.slice(0, 12); // max 12 metrics
  const colW = barMaxW / 2;
  const rowH = 36;

  ctx.font = '400 18px "Inter", sans-serif';
  metrics.forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 340 + col * colW;
    const y = metricsStartY + 24 + row * rowH;

    ctx.textAlign = 'left';
    ctx.fillStyle = '#5a5a6e';
    ctx.fillText(m.label, x, y);

    ctx.textAlign = 'right';
    const mc = m.rating >= 90 ? '#c8ff00' : m.rating >= 80 ? '#22c55e' : m.rating >= 70 ? '#3b82f6' : '#a0a0b0';
    ctx.fillStyle = mc;
    ctx.font = '400 14px "Inter", sans-serif';
    ctx.fillText(m.rating, x + colW - 10, y);
    ctx.font = '400 18px "Inter", sans-serif';
  });

  // Branding
  ctx.textAlign = 'center';
  ctx.fillStyle = '#c8ff00';
  ctx.font = '400 24px "Space Grotesk", sans-serif';
  ctx.fillText('COMBINE', W/2 + 40, H - 60);
  ctx.fillStyle = '#5a5a6e';
  ctx.font = '400 14px "JetBrains Mono", monospace';
  ctx.fillText('ATHLETIC PERFORMANCE RATING SYSTEM', W/2 + 40, H - 32);

  // Badge side branding
  ctx.save();
  ctx.translate(130, H - 100);
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.font = '400 16px "Space Grotesk", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('COMBINE', 0, 0);
  ctx.restore();

  // Trigger download
  canvas.toBlob(function(blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `combine-${displayName.toLowerCase().replace(/\s+/g,'-')}-${r.overall}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png');
}
