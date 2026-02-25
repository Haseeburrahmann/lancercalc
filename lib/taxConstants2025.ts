/**
 * 2025 IRS Tax Constants — single source of truth.
 * Sources: IRS Rev. Proc. 2024-40, IRS Topic 554, SSA 2025 COLA
 * Update this file annually when the IRS releases new brackets / FICA limits.
 */

// ── Self-Employment Tax ──────────────────────────────────────────────────────
export const SE_ADJUSTMENT        = 0.9235; // Net SE income = gross × 92.35%
export const SS_RATE              = 0.124;  // 12.4% Social Security
export const SS_WAGE_BASE         = 176100; // SS tax stops at this annual income
export const MEDICARE_RATE        = 0.029;  // 2.9% Medicare (no cap)
export const ADDL_MEDICARE_RATE   = 0.009;  // 0.9% extra Medicare above threshold
export const ADDL_MEDICARE_THRESHOLD = { single: 200000, married: 250000 };

// ── 2025 Federal Income Tax Brackets ────────────────────────────────────────
export const BRACKETS_SINGLE = [
  { min: 0,       max: 11925,   rate: 0.10 },
  { min: 11925,   max: 48475,   rate: 0.12 },
  { min: 48475,   max: 103350,  rate: 0.22 },
  { min: 103350,  max: 197300,  rate: 0.24 },
  { min: 197300,  max: 250525,  rate: 0.32 },
  { min: 250525,  max: 626350,  rate: 0.35 },
  { min: 626350,  max: Infinity, rate: 0.37 },
];

export const BRACKETS_MARRIED = [
  { min: 0,       max: 23850,   rate: 0.10 },
  { min: 23850,   max: 96950,   rate: 0.12 },
  { min: 96950,   max: 206700,  rate: 0.22 },
  { min: 206700,  max: 394600,  rate: 0.24 },
  { min: 394600,  max: 501050,  rate: 0.32 },
  { min: 501050,  max: 751600,  rate: 0.35 },
  { min: 751600,  max: Infinity, rate: 0.37 },
];

// ── 2025 Standard Deductions ─────────────────────────────────────────────────
export const STANDARD_DEDUCTION = { single: 15000, married: 30000 };

// ── State Income Tax Rates (flat or top marginal) ────────────────────────────
export const STATE_RATES: Record<string, number> = {
  AL: 0.05,  AK: 0.00, AZ: 0.025, AR: 0.047, CA: 0.093,
  CO: 0.044, CT: 0.065, DE: 0.066, FL: 0.00,  GA: 0.055,
  HI: 0.11,  ID: 0.058, IL: 0.0495, IN: 0.0305, IA: 0.06,
  KS: 0.057, KY: 0.04, LA: 0.06,  ME: 0.075, MD: 0.0575,
  MA: 0.09,  MI: 0.0425, MN: 0.0985, MS: 0.05, MO: 0.047,
  MT: 0.069, NE: 0.0684, NV: 0.00, NH: 0.00, NJ: 0.0637,
  NM: 0.059, NY: 0.0685, NC: 0.0475, ND: 0.025, OH: 0.04,
  OK: 0.05,  OR: 0.099, PA: 0.0307, RI: 0.0599, SC: 0.07,
  SD: 0.00,  TN: 0.00, TX: 0.00, UT: 0.0485, VT: 0.0875,
  VA: 0.0575, WA: 0.00, WV: 0.065, WI: 0.0765, WY: 0.00,
  DC: 0.085,
};

// ── State List (for dropdowns) ────────────────────────────────────────────────
export const STATES: [string, string][] = [
  ["AL","Alabama"],["AK","Alaska"],["AZ","Arizona"],["AR","Arkansas"],
  ["CA","California"],["CO","Colorado"],["CT","Connecticut"],["DE","Delaware"],
  ["FL","Florida"],["GA","Georgia"],["HI","Hawaii"],["ID","Idaho"],
  ["IL","Illinois"],["IN","Indiana"],["IA","Iowa"],["KS","Kansas"],
  ["KY","Kentucky"],["LA","Louisiana"],["ME","Maine"],["MD","Maryland"],
  ["MA","Massachusetts"],["MI","Michigan"],["MN","Minnesota"],["MS","Mississippi"],
  ["MO","Missouri"],["MT","Montana"],["NE","Nebraska"],["NV","Nevada"],
  ["NH","New Hampshire"],["NJ","New Jersey"],["NM","New Mexico"],["NY","New York"],
  ["NC","North Carolina"],["ND","North Dakota"],["OH","Ohio"],["OK","Oklahoma"],
  ["OR","Oregon"],["PA","Pennsylvania"],["RI","Rhode Island"],["SC","South Carolina"],
  ["SD","South Dakota"],["TN","Tennessee"],["TX","Texas"],["UT","Utah"],
  ["VT","Vermont"],["VA","Virginia"],["WA","Washington"],["WV","West Virginia"],
  ["WI","Wisconsin"],["WY","Wyoming"],["DC","Washington D.C."],
];

// ── No-income-tax states ──────────────────────────────────────────────────────
export const NO_TAX_STATES = ["AK","FL","NV","NH","SD","TN","TX","WA","WY"];
