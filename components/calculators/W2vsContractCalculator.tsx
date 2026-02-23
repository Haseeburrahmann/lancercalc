"use client";

import { useState, useMemo } from "react";

// ── State income-tax rates (same as SETaxCalculator) ────────────────────────
const STATE_RATES: Record<string, number> = {
  AL: 0.05, AK: 0.00, AZ: 0.025, AR: 0.047, CA: 0.093,
  CO: 0.044, CT: 0.065, DE: 0.066, FL: 0.00, GA: 0.055,
  HI: 0.11, ID: 0.058, IL: 0.0495, IN: 0.0305, IA: 0.06,
  KS: 0.057, KY: 0.04, LA: 0.06, ME: 0.075, MD: 0.0575,
  MA: 0.09, MI: 0.0425, MN: 0.0985, MS: 0.05, MO: 0.047,
  MT: 0.069, NE: 0.0684, NV: 0.00, NH: 0.00, NJ: 0.0637,
  NM: 0.059, NY: 0.0685, NC: 0.0475, ND: 0.025, OH: 0.04,
  OK: 0.05, OR: 0.099, PA: 0.0307, RI: 0.0599, SC: 0.07,
  SD: 0.00, TN: 0.00, TX: 0.00, UT: 0.0485, VT: 0.0875,
  VA: 0.0575, WA: 0.00, WV: 0.065, WI: 0.0765, WY: 0.00,
  DC: 0.085,
};
const STATES = [
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
const NO_TAX_STATES = ["AK","FL","NV","NH","SD","TN","TX","WA","WY"];

// ── 2025 IRS constants ──────────────────────────────────────────────────────
const SS_WAGE_BASE       = 176100;
const SS_RATE            = 0.124;
const MEDICARE_RATE      = 0.029;
const SE_ADJUSTMENT      = 0.9235;
const ADDL_MEDICARE_RATE = 0.009;

// ── 2025 Federal income-tax brackets ───────────────────────────────────────
const BRACKETS_SINGLE = [
  { min: 0,       max: 11925,   rate: 0.10 },
  { min: 11925,   max: 48475,   rate: 0.12 },
  { min: 48475,   max: 103350,  rate: 0.22 },
  { min: 103350,  max: 197300,  rate: 0.24 },
  { min: 197300,  max: 250525,  rate: 0.32 },
  { min: 250525,  max: 626350,  rate: 0.35 },
  { min: 626350,  max: Infinity,rate: 0.37 },
];
const BRACKETS_MARRIED = [
  { min: 0,       max: 23850,   rate: 0.10 },
  { min: 23850,   max: 96950,   rate: 0.12 },
  { min: 96950,   max: 206700,  rate: 0.22 },
  { min: 206700,  max: 394600,  rate: 0.24 },
  { min: 394600,  max: 501050,  rate: 0.32 },
  { min: 501050,  max: 751600,  rate: 0.35 },
  { min: 751600,  max: Infinity,rate: 0.37 },
];
const STANDARD_DEDUCTION = { single: 15000, married: 30000 };

// ── Helpers ─────────────────────────────────────────────────────────────────
function calcFederalTax(taxable: number, married: boolean): number {
  const brackets = married ? BRACKETS_MARRIED : BRACKETS_SINGLE;
  let tax = 0;
  for (const b of brackets) {
    if (taxable <= b.min) break;
    const chunk = Math.min(taxable, b.max) - b.min;
    tax += chunk * b.rate;
  }
  return Math.max(0, tax);
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function pct(n: number, dec = 1): string {
  return (n * 100).toFixed(dec) + "%";
}

interface CalcResult {
  // W-2 side
  w2Gross: number;
  w2FicaTax: number;           // Employee's share only (7.65%)
  w2FederalTax: number;
  w2TotalTax: number;
  w2TakeHome: number;
  w2EffectiveRate: number;
  w2BenefitsValue: number;     // Employer-paid benefits the employee receives
  w2TotalComp: number;         // Gross + employer benefits value

  // 1099 side
  contractGross: number;
  contractSeTax: number;
  contractSeDeduct: number;
  contractFederalTax: number;
  contractTotalTax: number;
  contractTakeHome: number;
  contractEffectiveRate: number;
  contractNetAfterExpenses: number; // after health + retirement self-funded

  // State tax
  w2StateTax: number;
  contractStateTax: number;
  stateRate: number;

  // Comparison
  annualDiff: number;           // 1099 take-home minus W-2 take-home (positive = 1099 wins)
  breakEvenRate: number;        // 1099 gross needed to match W-2 take-home
}

// ── Component ────────────────────────────────────────────────────────────────
export default function W2vsContractCalculator() {
  // Shared
  const [filing, setFiling] = useState<"single" | "married">("single");
  const [state,  setState]  = useState<string>("TX");

  // W-2 inputs
  const [w2Salary, setW2Salary]         = useState<string>("");
  const [w2Health, setW2Health]         = useState<string>("500");   // employer health premium/mo
  const [w2Retirement, setW2Retirement] = useState<string>("3");     // employer 401k match %
  const [w2PtoDays, setW2PtoDays]       = useState<string>("15");    // paid vacation days

  // 1099 inputs
  const [contractRate, setContractRate]     = useState<string>("");
  const [rateType, setRateType]             = useState<"annual" | "hourly">("annual");
  const [hoursPerWeek, setHoursPerWeek]     = useState<string>("40");
  const [weeksPerYear, setWeeksPerYear]     = useState<string>("48");
  const [contractHealth, setContractHealth] = useState<string>("500"); // self-pay health/mo
  const [contractRetire, setContractRetire] = useState<string>("10"); // % of contract gross saved

  const [calculated, setCalc] = useState(false);

  const results = useMemo<CalcResult | null>(() => {
    const married = filing === "married";
    const stdDeduct = STANDARD_DEDUCTION[filing];

    // ── W-2 calculations ──────────────────────────────────────────────────
    const w2Gross = parseFloat(w2Salary.replace(/,/g, "")) || 0;
    if (w2Gross <= 0) return null;

    // Employee FICA: 7.65% (SS 6.2% capped + Medicare 1.45%)
    const w2SsTaxable = Math.min(w2Gross, SS_WAGE_BASE);
    const w2FicaTax   = w2SsTaxable * (SS_RATE / 2) + w2Gross * (MEDICARE_RATE / 2);

    // W-2 federal income tax (on gross minus standard deduction; simplified — no pre-tax 401k here)
    const w2Taxable     = Math.max(0, w2Gross - stdDeduct);
    const w2FederalTax  = calcFederalTax(w2Taxable, married);
    const stateRate     = STATE_RATES[state] ?? 0;
    const w2StateTax    = w2Gross * stateRate;
    const w2TotalTax    = w2FicaTax + w2FederalTax + w2StateTax;
    const w2TakeHome    = w2Gross - w2TotalTax;
    const w2EffRate     = w2TotalTax / w2Gross;

    // Employer benefits value
    const w2HealthVal    = (parseFloat(w2Health) || 0) * 12;
    const w2RetireMatch  = w2Gross * ((parseFloat(w2Retirement) || 0) / 100);
    const w2PtoVal       = (w2Gross / 260) * (parseFloat(w2PtoDays) || 0); // daily rate × pto days
    const w2BenefitsValue = w2HealthVal + w2RetireMatch + w2PtoVal;
    const w2TotalComp    = w2Gross + w2BenefitsValue;

    // ── 1099 calculations ─────────────────────────────────────────────────
    let contractGross: number;
    if (rateType === "hourly") {
      const rate  = parseFloat(contractRate.replace(/,/g, "")) || 0;
      const hours = (parseFloat(hoursPerWeek) || 40) * (parseFloat(weeksPerYear) || 48);
      contractGross = rate * hours;
    } else {
      contractGross = parseFloat(contractRate.replace(/,/g, "")) || 0;
    }
    if (contractGross <= 0) return null;

    // SE tax (full 15.3% = both employer + employee shares)
    const netSE        = contractGross * SE_ADJUSTMENT;
    const ssTaxable    = Math.min(netSE, SS_WAGE_BASE);
    const ssTax        = ssTaxable * SS_RATE;
    const medicareTax  = netSE * MEDICARE_RATE;
    const addlMedicare = Math.max(0, contractGross - (married ? 250000 : 200000)) * ADDL_MEDICARE_RATE;
    const contractSeTax   = ssTax + medicareTax + addlMedicare;
    const contractSeDeduct= contractSeTax * 0.5;

    // Federal income tax on 1099
    const contractTaxableInc = Math.max(0, contractGross - contractSeDeduct - stdDeduct);
    const contractFederalTax = calcFederalTax(contractTaxableInc, married);
    const contractStateTax   = contractGross * stateRate;
    const contractTotalTax   = contractSeTax + contractFederalTax + contractStateTax;
    const contractTakeHome   = contractGross - contractTotalTax;
    const contractEffRate    = contractTotalTax / contractGross;

    // Out-of-pocket expenses 1099 must self-fund
    const contractHealthCost  = (parseFloat(contractHealth) || 0) * 12;
    const contractRetireCost  = contractGross * ((parseFloat(contractRetire) || 0) / 100);
    const contractNetAfterExp = contractTakeHome - contractHealthCost - contractRetireCost;

    // W-2 net after same expenses (already employer-paid so $0 out of pocket)
    const annualDiff = contractNetAfterExp - w2TakeHome;

    // Break-even: what 1099 gross is needed so contractor net = w2TakeHome?
    // Rough iterative solve (Newton's method simplified)
    let beRate = w2Gross * 1.25; // initial guess
    for (let i = 0; i < 50; i++) {
      const beSE  = Math.min(beRate * SE_ADJUSTMENT, SS_WAGE_BASE) * SS_RATE
                  + beRate * SE_ADJUSTMENT * MEDICARE_RATE;
      const beDed = beSE * 0.5;
      const beTax = beSE + calcFederalTax(Math.max(0, beRate - beDed - stdDeduct), married)
                  + beRate * stateRate;
      const beNet = beRate - beTax - contractHealthCost - contractRetireCost;
      const err   = beNet - w2TakeHome;
      if (Math.abs(err) < 1) break;
      beRate -= err / (1 - 0.35); // damped step
    }

    return {
      w2Gross, w2FicaTax, w2FederalTax, w2StateTax, w2TotalTax, w2TakeHome,
      w2EffectiveRate: w2EffRate,
      w2BenefitsValue, w2TotalComp,
      contractGross, contractSeTax, contractSeDeduct, contractFederalTax,
      contractStateTax, contractTotalTax, contractTakeHome,
      contractEffectiveRate: contractEffRate,
      contractNetAfterExpenses: contractNetAfterExp,
      stateRate,
      annualDiff, breakEvenRate: Math.max(0, beRate),
    };
  }, [filing, state, w2Salary, w2Health, w2Retirement, w2PtoDays, contractRate, rateType, hoursPerWeek, weeksPerYear, contractHealth, contractRetire]);

  const handleCalc = () => {
    const w2 = parseFloat(w2Salary.replace(/,/g, ""));
    const cr = parseFloat(contractRate.replace(/,/g, ""));
    if (!isNaN(w2) && w2 > 0 && !isNaN(cr) && cr > 0) setCalc(true);
  };

  const numericInput = (
    val: string,
    setter: (v: string) => void,
    prefix?: string,
    suffix?: string,
    placeholder?: string
  ) => (
    <div className="relative">
      {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">{prefix}</span>}
      <input
        type="text"
        inputMode="numeric"
        placeholder={placeholder ?? "0"}
        value={val}
        onChange={(e) => {
          const raw = e.target.value.replace(/[^\d.]/g, "");
          setter(raw);
          setCalc(false);
        }}
        className={`input-field ${prefix ? "pl-8" : ""} ${suffix ? "pr-10" : ""}`}
      />
      {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">{suffix}</span>}
    </div>
  );

  const winner = results
    ? results.annualDiff > 0 ? "1099" : results.annualDiff < 0 ? "W-2" : "tie"
    : null;

  return (
    <div className="space-y-8">

      {/* ── Filing status + State ────────────────────────────────────── */}
      <div className="calc-card">
        <h2 className="text-base font-bold text-gray-900 mb-4">Your Tax Situation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Filing status</label>
            <div className="flex gap-2">
              {(["single", "married"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => { setFiling(f); setCalc(false); }}
                  className={`flex-1 py-2.5 rounded-xl border font-medium text-sm transition-all ${
                    filing === f
                      ? "bg-brand-600 border-brand-600 text-white shadow-sm"
                      : "bg-white border-gray-200 text-gray-600 hover:border-brand-300"
                  }`}
                >
                  {f === "single" ? "Single" : "Married"}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="label">State</label>
            <select
              value={state}
              onChange={e => { setState(e.target.value); setCalc(false); }}
              className="select-field"
            >
              {STATES.map(([code, name]) => (
                <option key={code} value={code}>
                  {name}{NO_TAX_STATES.includes(code) ? " (no income tax)" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ── Two-column inputs ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* W-2 inputs */}
        <div className="calc-card border-t-4 border-t-gray-400">
          <div className="flex items-center gap-2 mb-5">
            <span className="bg-gray-100 text-gray-600 font-bold text-xs px-2.5 py-1 rounded-full">W-2 JOB</span>
            <h3 className="font-bold text-gray-900">Full-Time Employee Offer</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="label">Annual salary</label>
              {numericInput(w2Salary, setW2Salary, "$", undefined, "e.g. 100,000")}
            </div>
            <div>
              <label className="label">
                Employer health premium <span className="text-gray-400 font-normal">(employer pays, $/mo)</span>
              </label>
              {numericInput(w2Health, setW2Health, "$", undefined, "500")}
              <p className="text-xs text-gray-400 mt-1">What your employer pays toward your health insurance each month</p>
            </div>
            <div>
              <label className="label">
                401(k) employer match <span className="text-gray-400 font-normal">(% of salary)</span>
              </label>
              {numericInput(w2Retirement, setW2Retirement, undefined, "%", "3")}
            </div>
            <div>
              <label className="label">
                Paid vacation days <span className="text-gray-400 font-normal">(days/year)</span>
              </label>
              {numericInput(w2PtoDays, setW2PtoDays, undefined, "days", "15")}
            </div>
          </div>
        </div>

        {/* 1099 inputs */}
        <div className="calc-card border-t-4 border-t-brand-500">
          <div className="flex items-center gap-2 mb-5">
            <span className="bg-brand-50 text-brand-700 font-bold text-xs px-2.5 py-1 rounded-full">1099 CONTRACT</span>
            <h3 className="font-bold text-gray-900">Freelance / Contract Offer</h3>
          </div>

          <div className="space-y-4">
            {/* Rate type toggle */}
            <div>
              <label className="label">Rate type</label>
              <div className="flex gap-2 mb-3">
                {(["annual", "hourly"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => { setRateType(t); setCalc(false); }}
                    className={`flex-1 py-2 rounded-lg border font-medium text-sm transition-all ${
                      rateType === t
                        ? "bg-brand-600 border-brand-600 text-white"
                        : "bg-white border-gray-200 text-gray-600 hover:border-brand-300"
                    }`}
                  >
                    {t === "annual" ? "Annual contract" : "Hourly rate"}
                  </button>
                ))}
              </div>
              {rateType === "annual"
                ? numericInput(contractRate, setContractRate, "$", undefined, "e.g. 130,000")
                : numericInput(contractRate, setContractRate, "$", "/hr", "e.g. 75")}
            </div>

            {rateType === "hourly" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Hours/week</label>
                  {numericInput(hoursPerWeek, setHoursPerWeek, undefined, "hrs", "40")}
                </div>
                <div>
                  <label className="label">Weeks/year</label>
                  {numericInput(weeksPerYear, setWeeksPerYear, undefined, "wks", "48")}
                </div>
              </div>
            )}

            <div>
              <label className="label">
                Health insurance <span className="text-gray-400 font-normal">(you pay, $/mo)</span>
              </label>
              {numericInput(contractHealth, setContractHealth, "$", undefined, "500")}
              <p className="text-xs text-gray-400 mt-1">Individual market / COBRA cost you pay out-of-pocket</p>
            </div>
            <div>
              <label className="label">
                Retirement savings <span className="text-gray-400 font-normal">(% of contract income)</span>
              </label>
              {numericInput(contractRetire, setContractRetire, undefined, "%", "10")}
              <p className="text-xs text-gray-400 mt-1">SEP-IRA or Solo 401(k) contribution</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Calculate button ─────────────────────────────────────────── */}
      <button onClick={handleCalc} className="btn-primary">
        Compare 1099 vs W-2 →
      </button>

      {/* ── Results ─────────────────────────────────────────────────── */}
      {calculated && results ? (
        <div className="space-y-6">

          {/* Winner banner */}
          <div className={`rounded-2xl p-6 text-white ${
            winner === "1099"
              ? "bg-gradient-to-br from-brand-600 to-brand-700"
              : winner === "W-2"
              ? "bg-gradient-to-br from-gray-700 to-gray-800"
              : "bg-gradient-to-br from-gray-600 to-gray-700"
          }`}>
            <p className="text-sm font-semibold opacity-80 mb-1">
              {winner === "tie" ? "It's essentially a tie" : "Better financial outcome"}
            </p>
            <p className="text-4xl font-bold mb-2">
              {winner === "1099"
                ? `1099 wins by ${fmt(results.annualDiff)}/year`
                : winner === "W-2"
                ? `W-2 wins by ${fmt(Math.abs(results.annualDiff))}/year`
                : "Both options are equal"}
            </p>
            <p className="text-sm opacity-80 leading-relaxed">
              {winner === "1099"
                ? `After paying self-employment tax, health insurance, and retirement savings out of pocket, the contract offer still nets ${fmt(results.annualDiff)} more per year.`
                : winner === "W-2"
                ? `Even at a higher headline rate, the W-2 job nets ${fmt(Math.abs(results.annualDiff))} more per year once you factor in SE tax and self-funded benefits.`
                : "After all costs, both options leave you with essentially the same take-home pay."}
            </p>
          </div>

          {/* Side-by-side comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* W-2 breakdown */}
            <div className="calc-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gray-100 text-gray-600 font-bold text-xs px-2.5 py-1 rounded-full">W-2</span>
                <h3 className="font-bold text-gray-900">Full-Time Employee</h3>
              </div>
              <div className="space-y-0">
                <div className="result-row">
                  <span className="result-label">Annual salary</span>
                  <span className="result-value">{fmt(results.w2Gross)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">
                    FICA tax (employee share)
                    <span className="block text-xs text-gray-400">SS 6.2% + Medicare 1.45%</span>
                  </span>
                  <span className="result-value text-red-500">−{fmt(results.w2FicaTax)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Federal income tax</span>
                  <span className="result-value text-red-500">−{fmt(results.w2FederalTax)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">
                    {state} state income tax
                    {results.stateRate === 0 && <span className="block text-xs text-emerald-500">No state income tax 🎉</span>}
                  </span>
                  <span className="result-value text-red-500">
                    {results.stateRate === 0 ? "—" : `−${fmt(results.w2StateTax)}`}
                  </span>
                </div>
                <div className="result-row font-semibold">
                  <span className="result-label text-gray-700">Take-home pay</span>
                  <span className="result-value text-gray-900 text-base">{fmt(results.w2TakeHome)}</span>
                </div>
                <div className="pt-3 mt-2 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Employer benefits (hidden compensation)</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Health insurance paid by employer</span>
                      <span className="text-emerald-600 font-medium">+{fmt((parseFloat(w2Health)||0)*12)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">401(k) match</span>
                      <span className="text-emerald-600 font-medium">+{fmt(results.w2Gross * ((parseFloat(w2Retirement)||0)/100))}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">PTO value ({w2PtoDays} days)</span>
                      <span className="text-emerald-600 font-medium">+{fmt((results.w2Gross/260)*(parseFloat(w2PtoDays)||0))}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200 mt-2">
                  <p className="text-sm font-bold text-gray-900">Total compensation value</p>
                  <p className="text-lg font-bold text-gray-900">{fmt(results.w2TotalComp)}</p>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <p className="text-xs text-gray-500">Effective tax rate</p>
                  <p className="text-xs font-semibold text-gray-600">{pct(results.w2EffectiveRate)}</p>
                </div>
              </div>
            </div>

            {/* 1099 breakdown */}
            <div className="calc-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand-50 text-brand-700 font-bold text-xs px-2.5 py-1 rounded-full">1099</span>
                <h3 className="font-bold text-gray-900">Independent Contractor</h3>
              </div>
              <div className="space-y-0">
                <div className="result-row">
                  <span className="result-label">Contract income (gross)</span>
                  <span className="result-value">{fmt(results.contractGross)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">
                    Self-employment tax
                    <span className="block text-xs text-gray-400">Both employer + employee FICA shares</span>
                  </span>
                  <span className="result-value text-red-500">−{fmt(results.contractSeTax)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">SE tax deduction (50%)</span>
                  <span className="result-value text-emerald-600">+{fmt(results.contractSeDeduct)} saved</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Federal income tax</span>
                  <span className="result-value text-red-500">−{fmt(results.contractFederalTax)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">
                    {state} state income tax
                    {results.stateRate === 0 && <span className="block text-xs text-emerald-500">No state income tax 🎉</span>}
                  </span>
                  <span className="result-value text-red-500">
                    {results.stateRate === 0 ? "—" : `−${fmt(results.contractStateTax)}`}
                  </span>
                </div>
                <div className="result-row font-semibold">
                  <span className="result-label text-gray-700">Take-home (before self-funding)</span>
                  <span className="result-value text-gray-900 text-base">{fmt(results.contractTakeHome)}</span>
                </div>
                <div className="pt-3 mt-2 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Self-funded benefits (your cost)</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Health insurance (self-pay)</span>
                      <span className="text-red-500 font-medium">−{fmt((parseFloat(contractHealth)||0)*12)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Retirement savings ({contractRetire}%)</span>
                      <span className="text-red-500 font-medium">−{fmt(results.contractGross * ((parseFloat(contractRetire)||0)/100))}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200 mt-2">
                  <p className="text-sm font-bold text-gray-900">Net after self-funded benefits</p>
                  <p className={`text-lg font-bold ${results.contractNetAfterExpenses >= results.w2TakeHome ? "text-emerald-600" : "text-gray-900"}`}>
                    {fmt(results.contractNetAfterExpenses)}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <p className="text-xs text-gray-500">Effective tax rate</p>
                  <p className="text-xs font-semibold text-gray-600">{pct(results.contractEffectiveRate)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Break-even insight */}
          <div className="calc-card bg-amber-50 border-amber-200">
            <div className="flex gap-3">
              <span className="text-2xl mt-0.5">🎯</span>
              <div>
                <p className="font-bold text-amber-900 mb-1">Break-even contract rate</p>
                <p className="text-3xl font-bold text-amber-800 mb-2">{fmt(results.breakEvenRate)}/year</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  To exactly match your W-2 take-home pay (after self-funding health and retirement),
                  your 1099 contract needs to pay at least{" "}
                  <strong>{fmt(results.breakEvenRate)}/year</strong>.
                  {rateType === "hourly" && (
                    <>
                      {" "}That&apos;s roughly{" "}
                      <strong>
                        ${(results.breakEvenRate / ((parseFloat(hoursPerWeek)||40) * (parseFloat(weeksPerYear)||48))).toFixed(0)}/hr
                      </strong>
                      {" "}at {hoursPerWeek} hrs/week, {weeksPerYear} weeks/year.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* What's not included box */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-3">
            <span className="text-base mt-0.5">ℹ️</span>
            <div>
              <p className="text-xs font-semibold text-gray-600 mb-1">What this calculator includes — and what it doesn&apos;t</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong>Included:</strong> SE tax (both employer/employee FICA shares), 50% SE tax deduction, 2025 federal income tax brackets, state income tax (all 50 states + DC), employer vs self-funded health insurance and retirement.{" "}
                <strong>Not included:</strong> Local city/county taxes, business expense deductions beyond retirement, pre-tax 401(k) contribution effects, contractor&apos;s non-billable time, unpaid time between contracts, or professional liability insurance.{" "}
                Federal brackets sourced from{" "}
                <a href="https://www.irs.gov/pub/irs-drop/rp-24-40.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline hover:text-brand-700">
                  IRS Rev. Proc. 2024-40
                </a>
                .{" "}
                <strong>These are estimates for planning purposes only.</strong> Consult a tax professional for advice specific to your situation.
              </p>
            </div>
          </div>

        </div>
      ) : calculated ? (
        <div className="calc-card flex flex-col items-center justify-center text-center py-12">
          <div className="text-4xl mb-3">⚠️</div>
          <p className="text-gray-600 font-medium">Please enter both a W-2 salary and a contract rate to compare.</p>
        </div>
      ) : (
        <div className="calc-card flex flex-col items-center justify-center text-center py-14 min-h-[200px]">
          <div className="text-5xl mb-4">⚖️</div>
          <p className="text-gray-500 font-medium text-lg mb-2">Enter both offers above</p>
          <p className="text-gray-400 text-sm max-w-sm">
            Fill in your W-2 salary and 1099 contract details, then click Compare to see which one puts more money in your pocket.
          </p>
        </div>
      )}
    </div>
  );
}
