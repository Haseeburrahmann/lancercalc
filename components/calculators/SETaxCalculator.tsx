"use client";

import { useState, useMemo } from "react";

// ── 2025 IRS constants (Source: IRS Rev. Proc. 2024-40) ───────────────────
const SS_WAGE_BASE       = 176100;  // Social Security tax stops here
const SS_RATE            = 0.124;   // 12.4% Social Security
const MEDICARE_RATE      = 0.029;   // 2.9% Medicare (no wage base limit)
const SE_ADJUSTMENT      = 0.9235;  // IRS: multiply net SE income by 92.35%
const ADDL_MEDICARE_RATE = 0.009;   // 0.9% extra Medicare above $200K single / $250K married
const ADDL_MEDICARE_THRESHOLD = { single: 200000, married: 250000 };

// ── 2025 Federal income-tax brackets ──────────────────────────────────────
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

// ── State income-tax rates (flat or effective) ────────────────────────────
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

// ── Helpers ───────────────────────────────────────────────────────────────
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
function pct(n: number): string {
  return (n * 100).toFixed(1) + "%";
}

// ── Component ─────────────────────────────────────────────────────────────
export default function SETaxCalculator() {
  const [income, setIncome]   = useState<string>("");
  const [state,  setState]    = useState<string>("TX");
  const [filing, setFiling]   = useState<"single" | "married">("single");
  const [deduct, setDeduct]   = useState<string>("");
  const [calculated, setCalc] = useState(false);

  const results = useMemo(() => {
    const gross      = parseFloat(income.replace(/,/g, "")) || 0;
    const extraDeduct= parseFloat(deduct.replace(/,/g, "")) || 0;
    if (gross <= 0) return null;

    // ── Self-employment tax (IRS Schedule SE) ──────────────────────────
    // Step 1: Net SE income = gross × 92.35% (IRS SE_ADJUSTMENT)
    const netSE = gross * SE_ADJUSTMENT;

    // Step 2: Social Security tax — capped at $176,100 wage base (2025)
    const ssTaxableAmt = Math.min(netSE, SS_WAGE_BASE);
    const ssTax        = ssTaxableAmt * SS_RATE;

    // Step 3: Medicare tax — no wage base limit
    const medicareTax  = netSE * MEDICARE_RATE;

    // Step 4: Additional Medicare (0.9%) on income above threshold
    const addlMedicareBase      = ADDL_MEDICARE_THRESHOLD[filing];
    const addlMedicareTaxableAmt= Math.max(0, gross - addlMedicareBase);
    const addlMedicareTax       = addlMedicareTaxableAmt * ADDL_MEDICARE_RATE;

    const seTax    = ssTax + medicareTax + addlMedicareTax;
    // Deduction: 50% of SE tax is deductible from AGI
    const seDeduct = seTax * 0.5;

    const stdDeduct  = STANDARD_DEDUCTION[filing];
    const federalAGI = Math.max(0, gross - seDeduct - extraDeduct);
    const taxableInc = Math.max(0, federalAGI - stdDeduct);
    const federalTax = calcFederalTax(taxableInc, filing === "married");

    const stateRate  = STATE_RATES[state] ?? 0;
    const stateTax   = Math.max(0, (gross - extraDeduct) * stateRate);

    const totalTax   = seTax + federalTax + stateTax;
    const effectiveRate = totalTax / gross;
    const quarterly  = totalTax / 4;
    const savePct    = Math.min(0.45, effectiveRate + 0.02); // buffer of 2%

    return {
      gross, seTax, seDeduct, federalTax, stateTax,
      totalTax, effectiveRate, quarterly, savePct,
      stateRate, netSE, taxableInc,
      ssTax, medicareTax, addlMedicareTax,
      ssCapped: gross * SE_ADJUSTMENT > SS_WAGE_BASE,
    };
  }, [income, state, filing, deduct]);

  const handleCalc = () => {
    const v = parseFloat(income.replace(/,/g, ""));
    if (!isNaN(v) && v > 0) setCalc(true);
  };

  const noTaxStates = ["AK","FL","NV","NH","SD","TN","TX","WA","WY"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

      {/* ── Inputs ──────────────────────────────────────────────── */}
      <div className="lg:col-span-2 space-y-5">
        <div className="calc-card">
          <h2 className="text-lg font-bold text-slate-900 mb-5">Your Details</h2>

          {/* Income */}
          <div className="mb-4">
            <label className="label">Annual freelance income</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="e.g. 75,000"
                value={income}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^\d]/g, "");
                  setIncome(raw ? Number(raw).toLocaleString() : "");
                  setCalc(false);
                }}
                className="input-field pl-8"
              />
            </div>
          </div>

          {/* Filing status */}
          <div className="mb-4">
            <label className="label">Filing status</label>
            <select
              value={filing}
              onChange={(e) => { setFiling(e.target.value as "single"|"married"); setCalc(false); }}
              className="select-field"
            >
              <option value="single">Single</option>
              <option value="married">Married Filing Jointly</option>
            </select>
          </div>

          {/* State */}
          <div className="mb-4">
            <label className="label">State</label>
            <select
              value={state}
              onChange={(e) => { setState(e.target.value); setCalc(false); }}
              className="select-field"
            >
              {STATES.map(([code, name]) => (
                <option key={code} value={code}>
                  {name}{noTaxStates.includes(code) ? " (no income tax)" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Business expenses */}
          <div className="mb-6">
            <label className="label">
              Business deductions <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Home office, equipment…"
                value={deduct}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^\d]/g, "");
                  setDeduct(raw ? Number(raw).toLocaleString() : "");
                  setCalc(false);
                }}
                className="input-field pl-8"
              />
            </div>
            <p className="text-xs text-slate-400 mt-1.5">
              Deductible expenses reduce your taxable income.
            </p>
          </div>

          <button onClick={handleCalc} className="btn-primary">
            Calculate My Tax →
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-400 leading-relaxed px-1">
          Based on 2025 federal tax brackets and state rates. Figures are estimates for planning
          purposes only. Consult a tax professional for advice specific to your situation.
        </p>
      </div>

      {/* ── Results ─────────────────────────────────────────────── */}
      <div className="lg:col-span-3 space-y-5">
        {!calculated || !results ? (
          <div className="calc-card flex flex-col items-center justify-center text-center py-16 h-full min-h-[340px]">
            <div className="text-5xl mb-4">🧾</div>
            <p className="text-slate-500 font-medium text-lg mb-2">Enter your income to get started</p>
            <p className="text-slate-400 text-sm max-w-xs">
              Your results will show a full tax breakdown, quarterly payments, and how much to set aside.
            </p>
          </div>
        ) : (
          <>
            {/* Save this much */}
            <div className="calc-card bg-gradient-to-br from-brand-600 to-brand-700 border-0 text-white">
              <p className="text-brand-200 text-sm font-medium mb-1">Set aside from every payment</p>
              <p className="text-5xl font-bold mb-2">{pct(results.savePct)}</p>
              <p className="text-brand-200 text-sm">
                That&apos;s approximately {fmt(results.gross * results.savePct)} per year,
                or {fmt(results.gross * results.savePct / 12)} per month.
              </p>
            </div>

            {/* Quarterly */}
            <div className="calc-card border-l-4 border-l-amber-400">
              <p className="text-sm font-medium text-slate-500 mb-1">Pay the IRS every quarter</p>
              <p className="text-4xl font-bold text-slate-900">{fmt(results.quarterly)}</p>
              <p className="text-xs text-slate-400 mt-1">
                Due: April 15 · June 16 · Sep 15 · Jan 15 &apos;26
              </p>
            </div>

            {/* Full breakdown */}
            <div className="calc-card">
              <h3 className="font-bold text-slate-900 mb-4">Full Tax Breakdown</h3>
              <div className="space-y-0">
                <div className="result-row">
                  <span className="result-label">Gross freelance income</span>
                  <span className="result-value">{fmt(results.gross)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">
                    Self-employment tax
                    <span className="block text-xs text-slate-400">
                      SS {results.ssCapped ? `(capped at $176,100 wage base)` : `(12.4%)`} + Medicare (2.9%)
                      {results.addlMedicareTax > 0 && " + 0.9% additional Medicare"}
                    </span>
                  </span>
                  <span className="result-value text-red-500">−{fmt(results.seTax)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">SE tax deduction (50% of SE tax)</span>
                  <span className="result-value text-emerald-600">+{fmt(results.seDeduct)} saved</span>
                </div>
                <div className="result-row">
                  <span className="result-label">
                    Federal income tax
                    <span className="block text-xs text-slate-400">
                      on {fmt(results.taxableInc)} taxable income
                    </span>
                  </span>
                  <span className="result-value text-red-500">−{fmt(results.federalTax)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">
                    {state} state income tax
                    {results.stateRate === 0 && (
                      <span className="block text-xs text-emerald-500">No state income tax 🎉</span>
                    )}
                  </span>
                  <span className="result-value text-red-500">
                    {results.stateRate === 0 ? "—" : `−${fmt(results.stateTax)}`}
                  </span>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-4 mt-2 border-t border-slate-200">
                  <div>
                    <p className="font-bold text-slate-900">Total estimated tax</p>
                    <p className="text-xs text-slate-400">Effective rate: {pct(results.effectiveRate)}</p>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{fmt(results.totalTax)}</p>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <p className="font-semibold text-slate-700">Take-home pay</p>
                  <p className="text-xl font-bold text-emerald-600">
                    {fmt(results.gross - results.totalTax)}
                  </p>
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
              <span className="text-xl mt-0.5">💡</span>
              <div>
                <p className="text-sm font-semibold text-amber-900 mb-1">Pro tip</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Open a separate bank account and move{" "}
                  <strong>{pct(results.savePct)}</strong> every time a client pays you.
                  Treat it as untouchable. Quarterly tax time becomes stress-free.
                </p>
              </div>
            </div>

            {/* Inline disclaimer + IRS citation */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3">
              <span className="text-base mt-0.5">ℹ️</span>
              <div>
                <p className="text-xs font-semibold text-slate-600 mb-1">Accuracy & Sources</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Federal brackets and SE tax rates sourced from{" "}
                  <a
                    href="https://www.irs.gov/pub/irs-drop/rp-24-40.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline hover:text-brand-700"
                  >
                    IRS Rev. Proc. 2024-40
                  </a>
                  {" "}and{" "}
                  <a
                    href="https://www.irs.gov/taxtopics/tc554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline hover:text-brand-700"
                  >
                    IRS Topic 554 (Self-Employment Tax)
                  </a>
                  . Social Security wage base ($176,100) per{" "}
                  <a
                    href="https://www.ssa.gov/news/press/factsheets/colafacts2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline hover:text-brand-700"
                  >
                    SSA 2025 COLA fact sheet
                  </a>
                  . State rates from state revenue department schedules.{" "}
                  <strong>These are estimates for planning purposes only</strong> and do not
                  account for all credits, deductions, or local taxes. Consult a qualified
                  tax professional for advice specific to your situation.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
