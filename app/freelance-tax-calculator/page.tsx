import type { Metadata } from "next";
import SETaxCalculator from "@/components/calculators/SETaxCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Tax Calculator 2025–2026 — Self-Employment Tax by State",
  description:
    "Calculate your self-employment tax, federal income tax, and state tax instantly. See exactly how much to set aside each quarter. Free, no sign-up required.",
  keywords: [
    "freelance tax calculator",
    "self employment tax calculator 2025",
    "1099 tax calculator",
    "quarterly tax estimator freelancer",
    "how much tax do freelancers pay",
    "self employed tax by state",
    "freelance income tax calculator",
    "self employment tax rate 2025",
    "how to calculate self employment tax",
    "freelancer quarterly taxes",
  ],
  alternates: {
    canonical: "https://lancercalc.com/freelance-tax-calculator",
  },
  openGraph: {
    title: "Freelance Tax Calculator 2025 — Free Self-Employment Tax Estimator",
    description:
      "Enter your freelance income, state, and filing status. Instantly see your full tax breakdown and exactly how much to set aside. Free, no sign-up.",
    url: "https://lancercalc.com/freelance-tax-calculator",
  },
};

const faqs = [
  {
    q: "How is self-employment tax calculated?",
    a: "Self-employment tax is calculated on 92.35% of your net income. Social Security (12.4%) applies up to the $176,100 wage base in 2025 — income above that is not subject to SS tax. Medicare (2.9%) has no cap. An additional 0.9% Medicare applies above $200K (single) or $250K (married). You pay both the employee and employer share, but can deduct 50% of SE tax from your AGI. Source: IRS Schedule SE and Topic 554.",
  },
  {
    q: "How much should I set aside for taxes as a freelancer?",
    a: "A general rule is 25–35% of your gross income, but the exact amount depends on your state, filing status, and deductions. This calculator gives you a personalised percentage based on your actual situation. We recommend adding a 2–3% buffer.",
  },
  {
    q: "When are quarterly tax payments due in 2025–2026?",
    a: "IRS quarterly estimated tax deadlines: April 15, 2025 (Q1) · June 16, 2025 (Q2) · September 15, 2025 (Q3) · January 15, 2026 (Q4). If you expect to owe $1,000 or more in taxes, you're required to make quarterly payments.",
  },
  {
    q: "What counts as a business deduction for freelancers?",
    a: "Common deductions include: home office (must be used exclusively for work), equipment and software, professional subscriptions, health insurance premiums, retirement contributions (SEP-IRA), and business travel. These reduce your taxable income.",
  },
  {
    q: "Does this work for all US states?",
    a: "Yes. All 50 states and Washington D.C. are included. Nine states have no income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function FreelanceTaxCalculatorPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Page header ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-gray-900 to-brand-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="flex items-center gap-2 text-brand-300 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span>Freelance Tax Calculator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Freelance Tax Calculator
            <span className="block text-brand-400 text-2xl sm:text-3xl font-semibold mt-1">2025–2026</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Enter your income, state, and filing status — instantly see your complete
            tax breakdown, quarterly payment amounts, and exactly how much to set aside.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["Free","No sign-up","All 50 states","2025 IRS brackets","SS wage base capped","Updated Jan 2025"].map((tag) => (
              <span key={tag} className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Data sources:{" "}
            <a href="https://www.irs.gov/pub/irs-drop/rp-24-40.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">IRS Rev. Proc. 2024-40</a>
            {" · "}
            <a href="https://www.irs.gov/taxtopics/tc554" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">IRS Topic 554</a>
            {" · "}
            <a href="https://www.ssa.gov/news/press/factsheets/colafacts2025.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">SSA 2025 COLA</a>
          </p>
        </div>
      </section>

      {/* ── Calculator ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <SETaxCalculator />
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How we calculate your freelance tax</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Self-employment tax",
                body: "Social Security (12.4%) applies up to the $176,100 wage base. Medicare (2.9%) has no cap. An extra 0.9% Medicare applies above $200K. Multiply net income by 92.35% first — then apply rates. 50% of SE tax is deductible from your AGI.",
              },
              {
                step: "02",
                title: "Federal income tax",
                body: "Applied to your adjusted gross income using 2025 IRS tax brackets after the standard deduction ($15,000 single / $30,000 married) and your SE tax deduction.",
              },
              {
                step: "03",
                title: "State income tax",
                body: "Applied based on your state's rate. Nine states charge zero income tax. California (9.3%) and Oregon (9.9%) are the highest. Enter your state to get the accurate rate.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-brand-600 font-bold text-xs mb-3">STEP {s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related tools ────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Related calculators</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/hourly-rate-calculator"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-medium text-sm px-4 py-2.5 rounded-xl hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm"
            >
              ⏱️ Hourly Rate Calculator
            </Link>
            <Link
              href="/1099-vs-w2-calculator"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-medium text-sm px-4 py-2.5 rounded-xl hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm"
            >
              ⚖️ 1099 vs W-2 Calculator
            </Link>
            <Link
              href="/invoice-generator"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-medium text-sm px-4 py-2.5 rounded-xl hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm"
            >
              📄 Invoice Generator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
