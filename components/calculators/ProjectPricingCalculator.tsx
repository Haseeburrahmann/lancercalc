"use client";

import { useState, useMemo } from "react";

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}
function fmtDec(n: number) {
  return "$" + n.toFixed(2);
}

export default function ProjectPricingCalculator() {
  const [hours,    setHours]    = useState("");
  const [rate,     setRate]     = useState("");
  const [expenses, setExpenses] = useState("");
  const [margin,   setMargin]   = useState("20");
  const [revisions, setRevisions] = useState("2");
  const [rush,     setRush]     = useState(false);

  const result = useMemo(() => {
    const h  = parseFloat(hours.replace(/,/g, ""))   || 0;
    const r  = parseFloat(rate.replace(/,/g, ""))    || 0;
    const ex = parseFloat(expenses.replace(/,/g, "")) || 0;
    const m  = parseFloat(margin)  || 0;
    const rev = parseInt(revisions) || 0;

    if (h <= 0 || r <= 0) return null;

    const laborCost     = h * r;
    const subTotal      = laborCost + ex;
    const profitAmount  = subTotal * (m / 100);
    const baseQuote     = subTotal + profitAmount;

    // Extra revision buffer (each revision = 1 hour of rate)
    const revisionBuffer = rev * r;

    // Rush premium: +25%
    const rushPremium = rush ? baseQuote * 0.25 : 0;

    const finalQuote    = baseQuote + revisionBuffer + rushPremium;

    // Round up to nearest $50 for a clean quote
    const cleanQuote    = Math.ceil(finalQuote / 50) * 50;

    // "Never quote below" = labor + expenses (no profit, no buffer)
    const floor         = subTotal;

    // Effective hourly rate at clean quote (total hours including revision buffer)
    const totalHours    = h + rev;
    const effectiveHourly = totalHours > 0 ? cleanQuote / totalHours : 0;

    return {
      laborCost, expenses: ex, subTotal, profitAmount, revisionBuffer,
      rushPremium, finalQuote, cleanQuote, floor, effectiveHourly,
      margin: m, totalHours,
    };
  }, [hours, rate, expenses, margin, revisions, rush]);

  return (
    <div className="space-y-6">
      {/* ── Inputs ── */}
      <div className="calc-card p-6 md:p-8">
        <h2 className="text-lg font-extrabold mb-5 tracking-tight" style={{ color: "#0A0F1E" }}>
          Project Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Hours */}
          <div>
            <label className="label">Estimated Hours</label>
            <input
              type="text"
              inputMode="numeric"
              className="input-field"
              placeholder="40"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </div>

          {/* Hourly rate */}
          <div>
            <label className="label">Your Hourly Rate</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-semibold text-sm" style={{ color: "#8B90A0" }}>$</span>
              <input
                type="text"
                inputMode="numeric"
                className="input-field pl-7"
                placeholder="75"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
          </div>

          {/* Expenses */}
          <div>
            <label className="label">
              Project Expenses{" "}
              <span className="font-normal text-[12px]" style={{ color: "#8B90A0" }}>(software, tools, subcontractors)</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-semibold text-sm" style={{ color: "#8B90A0" }}>$</span>
              <input
                type="text"
                inputMode="numeric"
                className="input-field pl-7"
                placeholder="0"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
              />
            </div>
          </div>

          {/* Profit margin */}
          <div>
            <label className="label">Profit Margin</label>
            <div className="relative">
              <input
                type="number"
                className="input-field pr-8"
                min="0"
                max="200"
                placeholder="20"
                value={margin}
                onChange={(e) => setMargin(e.target.value)}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 font-semibold text-sm" style={{ color: "#8B90A0" }}>%</span>
            </div>
            <input
              type="range" min="0" max="100" step="5"
              value={margin}
              onChange={(e) => setMargin(e.target.value)}
              className="w-full mt-2 accent-indigo-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] mt-0.5" style={{ color: "#8B90A0" }}>
              <span>0%</span><span>25%</span><span>50%</span><span>100%</span>
            </div>
          </div>

          {/* Revisions */}
          <div>
            <label className="label">Revision Rounds Included</label>
            <select
              className="select-field"
              value={revisions}
              onChange={(e) => setRevisions(e.target.value)}
            >
              {[0,1,2,3,4,5].map((n) => (
                <option key={n} value={n}>{n === 0 ? "0 — No revisions" : `${n} round${n > 1 ? "s" : ""}`}</option>
              ))}
            </select>
          </div>

          {/* Rush toggle */}
          <div>
            <label className="label">Rush Project?</label>
            <button
              onClick={() => setRush(!rush)}
              className="w-full rounded-xl px-4 py-3 text-sm font-bold flex items-center gap-3 transition-all"
              style={
                rush
                  ? { background: "rgba(245,158,11,0.12)", border: "1.5px solid rgba(245,158,11,0.40)", color: "#B45309" }
                  : { background: "#F8F9FF", border: "1.5px solid #E6E9FF", color: "#8B90A0" }
              }
            >
              <span className="text-lg">{rush ? "⚡" : "🕐"}</span>
              {rush ? "Rush fee: +25% applied" : "Standard timeline (no rush fee)"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      {result && (
        <>
          {/* Quote highlight */}
          <div
            className="rounded-2xl p-6 md:p-8 text-center"
            style={{ background: "linear-gradient(135deg, #0C0A2E 0%, #1a1645 100%)", border: "1px solid rgba(107,92,231,0.25)" }}
          >
            <p className="text-[13px] font-semibold mb-2" style={{ color: "rgba(168,158,255,0.70)" }}>
              SUGGESTED QUOTE
            </p>
            <p className="text-[52px] font-extrabold leading-none text-white mb-1">
              {fmt(result.cleanQuote)}
            </p>
            <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.40)" }}>
              Rounded to the nearest $50 for a clean proposal
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.05)" }}>
                <p className="text-[11px] font-semibold mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>Never quote below</p>
                <p className="text-[20px] font-extrabold text-white">{fmt(result.floor)}</p>
                <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.30)" }}>Covers labor + expenses only</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.05)" }}>
                <p className="text-[11px] font-semibold mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>Effective hourly rate</p>
                <p className="text-[20px] font-extrabold text-white">{fmtDec(result.effectiveHourly)}/hr</p>
                <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.30)" }}>Incl. {result.totalHours}h w/ revisions</p>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="calc-card p-6 md:p-8">
            <h3 className="text-[15px] font-extrabold mb-4 tracking-tight" style={{ color: "#0A0F1E" }}>
              Price Breakdown
            </h3>
            <div className="space-y-2">
              <div className="result-row">
                <span className="result-label">Labor ({hours}h × {fmtDec(parseFloat(rate) || 0)})</span>
                <span className="result-value">{fmt(result.laborCost)}</span>
              </div>
              {result.expenses > 0 && (
                <div className="result-row">
                  <span className="result-label">Project expenses</span>
                  <span className="result-value">{fmt(result.expenses)}</span>
                </div>
              )}
              <div className="result-row" style={{ borderTop: "1px solid #E6E9FF", paddingTop: "8px", marginTop: "8px" }}>
                <span className="result-label font-semibold">Subtotal</span>
                <span className="result-value font-semibold">{fmt(result.subTotal)}</span>
              </div>
              <div className="result-row" style={{ color: "#6B5CE7" }}>
                <span className="result-label">Profit margin ({result.margin}%)</span>
                <span className="result-value">+ {fmt(result.profitAmount)}</span>
              </div>
              {result.revisionBuffer > 0 && (
                <div className="result-row" style={{ color: "#0EA5E9" }}>
                  <span className="result-label">Revision buffer ({revisions} round{parseInt(revisions) > 1 ? "s" : ""})</span>
                  <span className="result-value">+ {fmt(result.revisionBuffer)}</span>
                </div>
              )}
              {result.rushPremium > 0 && (
                <div className="result-row" style={{ color: "#B45309" }}>
                  <span className="result-label">⚡ Rush premium (25%)</span>
                  <span className="result-value">+ {fmt(result.rushPremium)}</span>
                </div>
              )}
              <div
                className="result-row rounded-xl px-4 py-3"
                style={{ background: "linear-gradient(135deg, #EEF0FF, #F3F0FF)", border: "1.5px solid #D8DAFF", marginTop: "8px" }}
              >
                <span className="font-extrabold text-[15px]" style={{ color: "#0A0F1E" }}>Your quote</span>
                <span className="font-extrabold text-[20px]" style={{ color: "#6B5CE7" }}>{fmt(result.cleanQuote)}</span>
              </div>
            </div>
          </div>

          {/* Pro tip */}
          <div
            className="rounded-2xl p-5 flex gap-3"
            style={{ background: "#EEF0FF", border: "1px solid #D8DAFF" }}
          >
            <span className="text-xl flex-shrink-0 mt-0.5">💡</span>
            <div>
              <p className="text-[13px] font-bold mb-1" style={{ color: "#0A0F1E" }}>Proposal tip</p>
              <p className="text-[13px] leading-relaxed" style={{ color: "#5A6178" }}>
                Present your quote as a fixed project fee, not hourly — clients focus on value, not time. Define scope clearly in writing and charge extra for out-of-scope requests beyond your {revisions} included revision{parseInt(revisions) !== 1 ? "s" : ""}.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Empty state */}
      {!result && (
        <div className="calc-card p-10 text-center">
          <div className="text-4xl mb-3">💸</div>
          <p className="text-[15px] font-semibold mb-1" style={{ color: "#0A0F1E" }}>Enter project details above</p>
          <p className="text-[13px]" style={{ color: "#8B90A0" }}>
            We&apos;ll calculate your ideal quote, floor price, and effective hourly rate.
          </p>
        </div>
      )}
    </div>
  );
}
