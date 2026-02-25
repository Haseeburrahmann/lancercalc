"use client";

import { useState, useMemo } from "react";
import {
  SE_ADJUSTMENT, SS_RATE, SS_WAGE_BASE, MEDICARE_RATE,
  ADDL_MEDICARE_RATE, ADDL_MEDICARE_THRESHOLD,
  BRACKETS_SINGLE, BRACKETS_MARRIED, STANDARD_DEDUCTION,
} from "@/lib/taxConstants2025";

// ── 2025 Quarterly due dates ───────────────────────────────────────────────
const QUARTERS = [
  {
    label: "Q1",
    period: "Jan 1 – Mar 31, 2025",
    due: "April 15, 2025",
    dueShort: "Apr 15",
    color: "#6B5CE7",
    bg: "rgba(107,92,231,0.12)",
    border: "rgba(107,92,231,0.25)",
    emoji: "🌱",
  },
  {
    label: "Q2",
    period: "Apr 1 – May 31, 2025",
    due: "June 16, 2025",
    dueShort: "Jun 16",
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.10)",
    border: "rgba(14,165,233,0.25)",
    emoji: "☀️",
  },
  {
    label: "Q3",
    period: "Jun 1 – Aug 31, 2025",
    due: "September 15, 2025",
    dueShort: "Sep 15",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.10)",
    border: "rgba(245,158,11,0.25)",
    emoji: "🍂",
  },
  {
    label: "Q4",
    period: "Sep 1 – Dec 31, 2025",
    due: "January 15, 2026",
    dueShort: "Jan 15",
    color: "#10B981",
    bg: "rgba(16,185,129,0.10)",
    border: "rgba(16,185,129,0.25)",
    emoji: "❄️",
  },
];

function calcFederalTax(taxableIncome: number, brackets: typeof BRACKETS_SINGLE) {
  let tax = 0;
  for (const b of brackets) {
    if (taxableIncome <= b.min) break;
    tax += (Math.min(taxableIncome, b.max) - b.min) * b.rate;
  }
  return Math.max(0, tax);
}

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export default function QuarterlyTaxScheduler() {
  const [income, setIncome]   = useState("");
  const [filing, setFiling]   = useState<"single" | "married">("single");
  const [priorTax, setPriorTax] = useState("");

  const result = useMemo(() => {
    const gross = parseFloat(income.replace(/,/g, "")) || 0;
    if (gross <= 0) return null;

    // SE tax
    const seBase  = gross * SE_ADJUSTMENT;
    const ssTax   = Math.min(seBase, SS_WAGE_BASE) * SS_RATE;
    const medTax  = seBase * MEDICARE_RATE;
    const addlMed = Math.max(0, seBase - ADDL_MEDICARE_THRESHOLD[filing]) * ADDL_MEDICARE_RATE;
    const seTax   = ssTax + medTax + addlMed;
    const seDeduction = seTax * 0.5;

    // Federal income tax
    const agi          = gross - seDeduction;
    const stdDed       = STANDARD_DEDUCTION[filing];
    const taxableIncome = Math.max(0, agi - stdDed);
    const brackets     = filing === "single" ? BRACKETS_SINGLE : BRACKETS_MARRIED;
    const fedTax       = calcFederalTax(taxableIncome, brackets);

    const totalAnnual  = seTax + fedTax;
    const perQuarter   = totalAnnual / 4;

    // Safe harbor: 100% of last year's tax (if provided)
    const safeHarborAnnual = priorTax
      ? parseFloat(priorTax.replace(/,/g, "")) || 0
      : 0;
    const safeHarborPerQ   = safeHarborAnnual / 4;

    // Recommended = higher of current-year estimate or safe harbor / 4
    const recommended  = safeHarborPerQ > 0
      ? Math.max(perQuarter, safeHarborPerQ)
      : perQuarter;

    return {
      seTax, fedTax, totalAnnual, perQuarter, recommended,
      safeHarborPerQ: safeHarborPerQ || null,
    };
  }, [income, filing, priorTax]);

  return (
    <div className="space-y-6">
      {/* ── Inputs ── */}
      <div className="calc-card p-6 md:p-8">
        <h2 className="text-lg font-extrabold mb-5 tracking-tight" style={{ color: "#0A0F1E" }}>
          Your 2025 Income Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Income */}
          <div>
            <label className="label">Estimated 2025 Freelance Income</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-semibold text-sm" style={{ color: "#8B90A0" }}>$</span>
              <input
                type="text"
                inputMode="numeric"
                className="input-field pl-7"
                placeholder="75,000"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
            </div>
          </div>

          {/* Filing status */}
          <div>
            <label className="label">Filing Status</label>
            <select
              className="select-field"
              value={filing}
              onChange={(e) => setFiling(e.target.value as "single" | "married")}
            >
              <option value="single">Single / Head of Household</option>
              <option value="married">Married Filing Jointly</option>
            </select>
          </div>

          {/* Prior year tax — optional */}
          <div className="md:col-span-2">
            <label className="label">
              Prior Year Total Tax Paid{" "}
              <span className="font-normal text-[12px]" style={{ color: "#8B90A0" }}>
                (optional — used for safe harbor calculation)
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-semibold text-sm" style={{ color: "#8B90A0" }}>$</span>
              <input
                type="text"
                inputMode="numeric"
                className="input-field pl-7"
                placeholder="Leave blank to skip"
                value={priorTax}
                onChange={(e) => setPriorTax(e.target.value)}
              />
            </div>
            <p className="text-[12px] mt-1.5" style={{ color: "#8B90A0" }}>
              Safe harbor: paying 100% of last year&apos;s tax avoids underpayment penalties, even if you owe more in April.
            </p>
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      {result && (
        <>
          {/* Summary row */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: "linear-gradient(135deg, #0C0A2E 0%, #1a1645 100%)", border: "1px solid rgba(107,92,231,0.25)" }}
          >
            <p className="text-[13px] font-semibold mb-4" style={{ color: "rgba(168,158,255,0.70)" }}>
              2025 ESTIMATED TAX SUMMARY
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Self-Employment Tax", value: fmt(result.seTax), sub: "SS + Medicare" },
                { label: "Federal Income Tax", value: fmt(result.fedTax), sub: "After SE deduction" },
                { label: "Total Annual Tax", value: fmt(result.totalAnnual), sub: "Set this aside" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <p className="text-[11px] font-semibold mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>{item.label}</p>
                  <p className="text-[22px] font-extrabold text-white">{item.value}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{item.sub}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-5 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-2 justify-between"
              style={{ background: "rgba(107,92,231,0.18)", border: "1px solid rgba(107,92,231,0.30)" }}
            >
              <div>
                <p className="text-[13px] font-semibold" style={{ color: "#A89EFF" }}>Recommended quarterly payment</p>
                {result.safeHarborPerQ && result.safeHarborPerQ > result.perQuarter && (
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(168,158,255,0.60)" }}>
                    Based on safe harbor (prior year) — higher than current estimate
                  </p>
                )}
              </div>
              <p className="text-[28px] font-extrabold text-white">{fmt(result.recommended)}</p>
            </div>
          </div>

          {/* Quarter cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QUARTERS.map((q) => (
              <div
                key={q.label}
                className="calc-card p-5"
                style={{ borderLeft: `3px solid ${q.color}` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{q.emoji}</span>
                    <span className="text-[13px] font-extrabold tracking-wide" style={{ color: q.color }}>
                      {q.label}
                    </span>
                  </div>
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: q.bg, border: `1px solid ${q.border}`, color: q.color }}
                  >
                    Due {q.dueShort}
                  </span>
                </div>

                <p className="text-[12px] mb-3" style={{ color: "#8B90A0" }}>{q.period}</p>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[11px] font-semibold mb-0.5" style={{ color: "#8B90A0" }}>Pay by</p>
                    <p className="text-[14px] font-bold" style={{ color: "#0A0F1E" }}>{q.due}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-semibold mb-0.5" style={{ color: "#8B90A0" }}>Amount due</p>
                    <p className="text-[22px] font-extrabold" style={{ color: "#0A0F1E" }}>
                      {fmt(result.recommended)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* IRS quarter note */}
          <div
            className="rounded-xl px-5 py-3.5 flex gap-2.5 text-[12px]"
            style={{ background: "rgba(14,165,233,0.07)", border: "1px solid rgba(14,165,233,0.18)" }}
          >
            <span className="flex-shrink-0 mt-0.5">ℹ️</span>
            <p style={{ color: "#5A6178" }}>
              <strong style={{ color: "#0A0F1E" }}>Note on IRS quarters:</strong> The IRS uses non-standard quarters for estimated taxes — Q1 covers 3 months (Jan–Mar), Q2 covers only 2 months (Apr–May), Q3 covers 3 months (Jun–Aug), and Q4 covers 4 months (Sep–Dec). Payments are based on your total annual estimate split equally across all four quarters, regardless of quarter length.
            </p>
          </div>

          {/* IRS payment tip */}
          <div
            className="rounded-2xl p-5 flex gap-3"
            style={{ background: "#EEF0FF", border: "1px solid #D8DAFF" }}
          >
            <span className="text-xl flex-shrink-0 mt-0.5">💡</span>
            <div>
              <p className="text-[13px] font-bold mb-1" style={{ color: "#0A0F1E" }}>
                How to pay
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: "#5A6178" }}>
                Pay online at{" "}
                <a
                  href="https://www.irs.gov/payments/direct-pay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                  style={{ color: "#6B5CE7" }}
                >
                  IRS Direct Pay
                </a>{" "}
                (free, no account needed). Select &quot;Estimated Tax&quot; and tax year 2025.
                Payments are typically confirmed instantly.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[12px] text-center" style={{ color: "#8B90A0" }}>
            Estimates use 2025 IRS tax brackets and SE rates. Does not account for business deductions, credits, or additional income sources. Consult a tax professional for advice specific to your situation.
          </p>
        </>
      )}

      {/* Empty state */}
      {!result && (
        <div className="calc-card p-10 text-center">
          <div className="text-4xl mb-3">📅</div>
          <p className="text-[15px] font-semibold mb-1" style={{ color: "#0A0F1E" }}>Enter your income above</p>
          <p className="text-[13px]" style={{ color: "#8B90A0" }}>
            We&apos;ll build your full quarterly payment calendar with exact dates and amounts.
          </p>
        </div>
      )}
    </div>
  );
}
