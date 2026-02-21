import type { Metadata } from "next";
import HourlyRateCalculator from "@/components/calculators/HourlyRateCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Hourly Rate Calculator 2026 — What Should I Charge?",
  description:
    "Find your minimum hourly rate as a freelancer. Enter your target salary, hours, tax rate, and expenses — we calculate the exact rate you need to charge. Free, no sign-up.",
  keywords: [
    "freelance hourly rate calculator",
    "what hourly rate should I charge as a freelancer",
    "freelancer rate calculator 2026",
    "how to set freelance rates",
    "minimum freelance hourly rate",
  ],
  openGraph: {
    title: "Freelance Hourly Rate Calculator — What Should I Charge?",
    description:
      "Enter your target take-home pay, hours, and expenses. Get the exact minimum hourly rate you need to charge as a freelancer.",
    url: "https://lancercalc.com/hourly-rate-calculator",
  },
};

const faqs = [
  {
    q: "How do I calculate my freelance hourly rate?",
    a: "Start with your target take-home pay, then work backwards. Add taxes (typically 28–35% for freelancers), health insurance, retirement savings, and a profit margin for slow months. Divide the total by your billable hours per year. This calculator does all of that in seconds.",
  },
  {
    q: "Why is my freelance rate higher than my equivalent salary?",
    a: "As a freelancer, you cover costs your employer used to pay: employer payroll taxes (7.65%), health insurance, retirement matching, paid vacation, and sick days. You also have non-billable hours (admin, proposals, business development) that you need to factor in.",
  },
  {
    q: "What is a good profit margin for freelancers?",
    a: "Most experienced freelancers build in 20–30% profit margin. This covers slow months, non-billable work, unexpected expenses, and business growth. Think of it as your business operating buffer, not personal take-home pay.",
  },
  {
    q: "How many hours should I bill per week?",
    a: "Realistically, freelancers bill 20–30 hours of a 40-hour week. The rest goes to admin, sales, networking, and learning. Beginners often overestimate billable hours, leading to undercharging. Use a conservative number in this calculator.",
  },
  {
    q: "Should I charge an hourly rate or project rate?",
    a: "Both have merits. Hourly is good for open-ended projects. Project pricing is better for defined scope — and generally earns more because clients focus on value, not hours. Use this calculator to find your minimum hourly floor, then price projects above it.",
  },
];

export default function HourlyRateCalculatorPage() {
  return (
    <div className="min-h-screen">

      {/* ── Page header ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="flex items-center gap-2 text-emerald-300 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span>Hourly Rate Calculator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Freelance Hourly Rate
            <span className="block text-emerald-400 text-2xl sm:text-3xl font-semibold mt-1">Calculator 2026</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            What hourly rate do you need to charge to actually hit your income goals?
            Factor in taxes, health insurance, retirement, and slow months — get your real number.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["Free","No sign-up","Includes tax + benefits","Profit margin buffer"].map((tag) => (
              <span key={tag} className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calculator ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <HourlyRateCalculator />
      </section>

      {/* ── Explanation ──────────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why freelancers undercharge (and how to stop)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                The most common freelancer mistake is comparing their hourly rate to an employee&apos;s
                hourly wage. A $50/hr freelancer is NOT equal to a $50/hr employee.
              </p>
              <p className="text-slate-600 leading-relaxed">
                When you work for a company, they pay: employer Social Security (6.2%), employer
                Medicare (1.45%), health insurance (~$500/mo), retirement matching (3–5%), paid vacation
                (2–4 weeks), sick days, equipment, and office space. As a freelancer, all of that
                comes out of your rate.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 text-sm">The hidden costs in a $100K salary equivalent</h3>
              {[
                ["Target take-home", "$100,000"],
                ["Self-employment tax (~15%)", "+$17,000"],
                ["Federal income tax (~20%)", "+$20,000"],
                ["Health insurance", "+$6,000"],
                ["Retirement (5%)", "+$5,000"],
                ["Profit margin (20%)", "+$29,600"],
                ["You need to earn:", "$177,600/yr"],
                ["At 1,500 billable hrs/yr:", "$118/hr minimum"],
              ].map(([label, value], i) => (
                <div key={label} className={`flex justify-between text-sm py-1.5 ${i === 7 ? "border-t border-slate-200 pt-2.5 mt-1" : ""}`}>
                  <span className={i === 7 ? "font-bold text-slate-900" : "text-slate-500"}>{label}</span>
                  <span className={`font-semibold ${i === 7 ? "text-emerald-600 text-base" : i >= 6 ? "text-slate-900" : "text-red-400"}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related tools ────────────────────────────────────────── */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg font-bold text-slate-900 mb-5">Related calculators</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/freelance-tax-calculator"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm px-4 py-2.5 rounded-xl hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm"
            >
              🧾 Freelance Tax Calculator
            </Link>
            <Link
              href="/1099-vs-w2-calculator"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm px-4 py-2.5 rounded-xl hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm"
            >
              ⚖️ 1099 vs W-2 Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
