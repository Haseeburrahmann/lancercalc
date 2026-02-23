"use client";

import { useState, useMemo } from "react";

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function fmtDec(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function HourlyRateCalculator() {
  const [targetSalary, setTargetSalary]   = useState<string>("");
  const [hoursPerWeek, setHoursPerWeek]   = useState<string>("40");
  const [weeksVacation, setWeeksVacation] = useState<string>("4");
  const [taxRate, setTaxRate]             = useState<string>("30");
  const [healthCost, setHealthCost]       = useState<string>("");
  const [retirePct, setRetirePct]         = useState<string>("5");
  const [profitMargin, setProfitMargin]   = useState<string>("20");
  const [calculated, setCalc]             = useState(false);

  const results = useMemo(() => {
    const salary    = parseFloat(targetSalary.replace(/,/g, "")) || 0;
    const hours     = parseFloat(hoursPerWeek)  || 40;
    const vacWeeks  = parseFloat(weeksVacation) || 0;
    const tax       = (parseFloat(taxRate)       || 30) / 100;
    const health    = parseFloat(healthCost.replace(/,/g, "")) || 0;
    const retire    = (parseFloat(retirePct)     || 0) / 100;
    const margin    = (parseFloat(profitMargin)  || 0) / 100;

    if (salary <= 0) return null;

    const workWeeks   = 52 - vacWeeks;
    const billableHrs = workWeeks * hours;

    // Gross needed before tax
    const grossNeeded   = salary / (1 - tax);
    // Add health insurance (annual)
    const withHealth    = grossNeeded + health * 12;
    // Add retirement
    const withRetire    = withHealth + salary * retire;
    // Base hourly (to cover all costs)
    const baseHourly    = billableHrs > 0 ? withRetire / billableHrs : 0;
    // Add profit margin
    const finalHourly   = baseHourly / (1 - margin);
    // Daily / weekly / monthly  (assume 5-day work week)
    const daily         = finalHourly * (hours / 5);   // hours per day = hoursPerWeek ÷ 5
    const weekly        = finalHourly * hours;          // full week of billable hours
    const monthly       = finalHourly * billableHrs / 12;

    return {
      salary, hours, vacWeeks, billableHrs,
      grossNeeded, withHealth, withRetire,
      baseHourly, finalHourly, daily, weekly, monthly,
      taxAmount: grossNeeded - salary,
      healthAnnual: health * 12,
      retireAmount: salary * retire,
    };
  }, [targetSalary, hoursPerWeek, weeksVacation, taxRate, healthCost, retirePct, profitMargin]);

  const handleCalc = () => {
    const v = parseFloat(targetSalary.replace(/,/g, ""));
    if (!isNaN(v) && v > 0) setCalc(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

      {/* ── Inputs ──────────────────────────────────────────────── */}
      <div className="lg:col-span-2 space-y-5">
        <div className="calc-card">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Your Goals & Costs</h2>

          {/* Target take-home */}
          <div className="mb-4">
            <label className="label">Target take-home salary (per year)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="e.g. 80,000"
                value={targetSalary}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^\d]/g, "");
                  setTargetSalary(raw ? Number(raw).toLocaleString() : "");
                  setCalc(false);
                }}
                className="input-field pl-8"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1.5">The amount you want in your pocket after tax.</p>
          </div>

          {/* Hours per week */}
          <div className="mb-4">
            <label className="label">Billable hours per week</label>
            <input
              type="number"
              min="1" max="80"
              value={hoursPerWeek}
              onChange={(e) => { setHoursPerWeek(e.target.value); setCalc(false); }}
              className="input-field"
            />
          </div>

          {/* Weeks off */}
          <div className="mb-4">
            <label className="label">Weeks off per year (vacation + sick)</label>
            <input
              type="number"
              min="0" max="20"
              value={weeksVacation}
              onChange={(e) => { setWeeksVacation(e.target.value); setCalc(false); }}
              className="input-field"
            />
          </div>

          {/* Tax rate */}
          <div className="mb-4">
            <label className="label">Estimated total tax rate</label>
            <div className="relative">
              <input
                type="number"
                min="10" max="50"
                value={taxRate}
                onChange={(e) => { setTaxRate(e.target.value); setCalc(false); }}
                className="input-field pr-8"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">%</span>
            </div>
            <p className="text-xs text-gray-400 mt-1.5">Use our Tax Calculator above for your exact rate.</p>
          </div>

          {/* Health insurance */}
          <div className="mb-4">
            <label className="label">Health insurance (per month) <span className="text-gray-400 font-normal">optional</span></label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="e.g. 400"
                value={healthCost}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^\d]/g, "");
                  setHealthCost(raw);
                  setCalc(false);
                }}
                className="input-field pl-8"
              />
            </div>
          </div>

          {/* Retirement */}
          <div className="mb-4">
            <label className="label">Retirement savings (% of take-home) <span className="text-gray-400 font-normal">optional</span></label>
            <div className="relative">
              <input
                type="number"
                min="0" max="30"
                value={retirePct}
                onChange={(e) => { setRetirePct(e.target.value); setCalc(false); }}
                className="input-field pr-8"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">%</span>
            </div>
          </div>

          {/* Profit margin */}
          <div className="mb-6">
            <label className="label">Profit margin buffer</label>
            <div className="relative">
              <input
                type="number"
                min="0" max="50"
                value={profitMargin}
                onChange={(e) => { setProfitMargin(e.target.value); setCalc(false); }}
                className="input-field pr-8"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">%</span>
            </div>
            <p className="text-xs text-gray-400 mt-1.5">Buffer for slow months, non-billable work, and business growth.</p>
          </div>

          <button onClick={handleCalc} className="btn-primary">
            Calculate My Hourly Rate →
          </button>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed px-1">
          This calculator helps you find your minimum viable rate. Adjust upward based on your
          experience, niche, and market demand.
        </p>
      </div>

      {/* ── Results ─────────────────────────────────────────────── */}
      <div className="lg:col-span-3 space-y-5">
        {!calculated || !results ? (
          <div className="calc-card flex flex-col items-center justify-center text-center py-16 h-full min-h-[340px]">
            <div className="text-5xl mb-4">⏱️</div>
            <p className="text-gray-500 font-medium text-lg mb-2">Enter your target salary</p>
            <p className="text-gray-400 text-sm max-w-xs">
              We&apos;ll calculate the exact hourly rate you need to charge to hit your goals after tax, health insurance, and retirement.
            </p>
          </div>
        ) : (
          <>
            {/* Hero rate */}
            <div className="calc-card bg-gradient-to-br from-emerald-600 to-emerald-700 border-0 text-white">
              <p className="text-emerald-200 text-sm font-medium mb-1">Your minimum hourly rate</p>
              <p className="text-5xl font-bold mb-2">{fmtDec(results.finalHourly)}<span className="text-2xl font-medium text-emerald-200">/hr</span></p>
              <p className="text-emerald-200 text-sm">
                Charge less than this and you won&apos;t hit your {fmt(results.salary)} take-home goal.
              </p>
            </div>

            {/* Rate breakdown */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Per day", value: fmtDec(results.daily) },
                { label: "Per week", value: fmt(results.weekly) },
                { label: "Per month", value: fmt(results.monthly) },
              ].map((r) => (
                <div key={r.label} className="calc-card text-center py-4">
                  <p className="text-gray-400 text-xs mb-1">{r.label}</p>
                  <p className="font-bold text-gray-900 text-lg">{r.value}</p>
                </div>
              ))}
            </div>

            {/* Cost breakdown */}
            <div className="calc-card">
              <h3 className="font-bold text-gray-900 mb-4">What&apos;s built into your rate</h3>
              <div className="space-y-0">
                <div className="result-row">
                  <span className="result-label">Your take-home salary goal</span>
                  <span className="result-value">{fmt(results.salary)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Tax provision ({taxRate}%)</span>
                  <span className="result-value text-red-400">+{fmt(results.taxAmount)}</span>
                </div>
                {results.healthAnnual > 0 && (
                  <div className="result-row">
                    <span className="result-label">Health insurance (annual)</span>
                    <span className="result-value text-red-400">+{fmt(results.healthAnnual)}</span>
                  </div>
                )}
                {results.retireAmount > 0 && (
                  <div className="result-row">
                    <span className="result-label">Retirement savings ({retirePct}%)</span>
                    <span className="result-value text-red-400">+{fmt(results.retireAmount)}</span>
                  </div>
                )}
                <div className="result-row">
                  <span className="result-label">Base gross needed</span>
                  <span className="result-value font-bold">{fmt(results.withRetire)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">
                    Billable hours/year
                    <span className="block text-xs text-gray-400">
                      {hoursPerWeek} hrs × {52 - parseFloat(weeksVacation || "0")} weeks
                    </span>
                  </span>
                  <span className="result-value">{results.billableHrs.toLocaleString()} hrs</span>
                </div>
                <div className="flex justify-between items-center pt-4 mt-2 border-t border-gray-200">
                  <div>
                    <p className="font-bold text-gray-900">Minimum hourly rate</p>
                    <p className="text-xs text-gray-400">With {profitMargin}% profit margin</p>
                  </div>
                  <p className="text-2xl font-bold text-emerald-600">{fmtDec(results.finalHourly)}</p>
                </div>
              </div>
            </div>

            {/* Insight box */}
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 flex gap-3">
              <span className="text-xl mt-0.5">💡</span>
              <div>
                <p className="text-sm font-semibold text-brand-900 mb-1">Don&apos;t forget non-billable time</p>
                <p className="text-sm text-brand-800 leading-relaxed">
                  Most freelancers spend 20–30% of their working hours on non-billable tasks
                  (emails, proposals, admin, self-learning). The profit margin buffer above
                  helps cover this. Consider it your business operating cost.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
