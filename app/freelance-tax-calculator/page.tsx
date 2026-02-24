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

      {/* ── Page header ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#8B90A0] mb-6">
            <Link href="/" className="hover:text-brand transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5 text-[#C8CAD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-brand font-semibold">Freelance Tax Calculator</span>
          </div>

          <div className="max-w-[720px]">
            <div className="section-label">Tax Calculator</div>
            <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-4" style={{ color: "#0A0F1E" }}>
              Freelance Tax Calculator
              <span className="text-brand"> 2025–2026</span>
            </h1>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#5A6178" }}>
              Enter your income, state, and filing status — instantly see your complete
              tax breakdown, quarterly payment amounts, and exactly how much to set aside.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Free", "No sign-up", "All 50 states", "2025 IRS brackets", "SS wage base capped"].map((tag) => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>
            <p className="text-xs text-[#8B90A0]">
              Data sources:{" "}
              <a href="https://www.irs.gov/pub/irs-drop/rp-24-40.pdf" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark underline">IRS Rev. Proc. 2024-40</a>
              {" · "}
              <a href="https://www.irs.gov/taxtopics/tc554" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark underline">IRS Topic 554</a>
              {" · "}
              <a href="https://www.ssa.gov/news/press/factsheets/colafacts2025.pdf" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark underline">SSA 2025 COLA</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="bg-[#F7F8FB] py-12 md:py-16">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <SETaxCalculator />
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">How It Works</div>
          <div className="section-title">How we calculate your freelance tax</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                icon: "📋",
                title: "Self-employment tax",
                body: "Social Security (12.4%) applies up to the $176,100 wage base. Medicare (2.9%) has no cap. An extra 0.9% Medicare applies above $200K. Multiply net income by 92.35% first — then apply rates. 50% of SE tax is deductible from your AGI.",
              },
              {
                step: "02",
                icon: "🏛️",
                title: "Federal income tax",
                body: "Applied to your adjusted gross income using 2025 IRS tax brackets after the standard deduction ($15,000 single / $30,000 married) and your SE tax deduction.",
              },
              {
                step: "03",
                icon: "📍",
                title: "State income tax",
                body: "Applied based on your state's rate. Nine states charge zero income tax. California (9.3%) and Oregon (9.9%) are the highest. Enter your state to get the accurate rate.",
              },
            ].map((s) => (
              <div key={s.step} className="step-card">
                <div className="w-[46px] h-[46px] bg-navy rounded-lg flex items-center justify-center text-xl mb-5">
                  {s.icon}
                </div>
                <div className="text-brand text-xs font-bold uppercase tracking-[0.08em] mb-2">Step {s.step}</div>
                <h3 className="font-bold text-base mb-2.5 tracking-tight" style={{ color: "#0A0F1E" }}>{s.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#5A6178" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F7F8FB] py-16 md:py-20">
        <div className="max-w-[860px] mx-auto px-4 sm:px-8">
          <div className="section-label">FAQ</div>
          <div className="section-title">Frequently asked questions</div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <div className="px-6 py-5">
                  <h3 className="font-bold text-[15px] mb-2" style={{ color: "#0A0F1E" }}>{faq.q}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#5A6178" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related tools ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">Related Tools</div>
          <h2 className="text-[24px] font-extrabold tracking-tight mb-6" style={{ color: "#0A0F1E" }}>
            More free calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/hourly-rate-calculator" className="related-card">
              <div className="w-[42px] h-[42px] bg-[#F7F8FB] border border-[#E8EAF0] rounded-lg flex items-center justify-center text-lg flex-shrink-0">⏱️</div>
              <div>
                <div className="font-bold text-[14px] mb-0.5" style={{ color: "#0A0F1E" }}>Hourly Rate Calculator</div>
                <div className="text-xs" style={{ color: "#8B90A0" }}>Find your minimum hourly rate</div>
              </div>
            </Link>
            <Link href="/1099-vs-w2-calculator" className="related-card">
              <div className="w-[42px] h-[42px] bg-[#F7F8FB] border border-[#E8EAF0] rounded-lg flex items-center justify-center text-lg flex-shrink-0">⚖️</div>
              <div>
                <div className="font-bold text-[14px] mb-0.5" style={{ color: "#0A0F1E" }}>1099 vs W-2 Calculator</div>
                <div className="text-xs" style={{ color: "#8B90A0" }}>Compare contract vs salary</div>
              </div>
            </Link>
            <Link href="/invoice-generator" className="related-card">
              <div className="w-[42px] h-[42px] bg-[#F7F8FB] border border-[#E8EAF0] rounded-lg flex items-center justify-center text-lg flex-shrink-0">📄</div>
              <div>
                <div className="font-bold text-[14px] mb-0.5" style={{ color: "#0A0F1E" }}>Invoice Generator</div>
                <div className="text-xs" style={{ color: "#8B90A0" }}>Create professional invoices free</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
