import type { Metadata } from "next";
import SETaxCalculator from "@/components/calculators/SETaxCalculator";
import FAQAccordion from "@/components/FAQAccordion";
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
  alternates: { canonical: "https://lancercalc.com/freelance-tax-calculator" },
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

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-14 md:py-20" style={{ background: "#0C0A2E" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% -5%, rgba(107,92,231,0.40) 0%, transparent 65%)" }} />
        <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-medium mb-6">
            <Link href="/" className="transition-colors" style={{ color: "rgba(255,255,255,0.40)" }}>Home</Link>
            <svg className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.20)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-semibold" style={{ color: "#A89EFF" }}>Freelance Tax Calculator</span>
          </div>

          {/* Two-column hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="section-label">Tax Calculator</div>
              <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.08] tracking-tight mb-4 text-white">
                Freelance Tax Calculator
                <span style={{
                  background: "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}> 2025–2026</span>
              </h1>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
                Enter your income, state, and filing status — instantly see your complete
                tax breakdown, quarterly payment amounts, and exactly how much to set aside.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Free", "No sign-up", "All 50 states", "2025 IRS brackets", "SS wage base capped"].map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-4 py-1.5 rounded-full border"
                    style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
                Data sources:{" "}
                <a href="https://www.irs.gov/pub/irs-drop/rp-24-40.pdf" target="_blank" rel="noopener noreferrer"
                  style={{ color: "#A89EFF" }} className="underline">IRS Rev. Proc. 2024-40</a>
                {" · "}
                <a href="https://www.irs.gov/taxtopics/tc554" target="_blank" rel="noopener noreferrer"
                  style={{ color: "#A89EFF" }} className="underline">IRS Topic 554</a>
                {" · "}
                <a href="https://www.ssa.gov/news/press/factsheets/colafacts2025.pdf" target="_blank" rel="noopener noreferrer"
                  style={{ color: "#A89EFF" }} className="underline">SSA 2025 COLA</a>
              </p>
            </div>

            {/* Right — sample tax breakdown card */}
            <div className="hidden lg:flex justify-center">
              <div style={{ transform: "rotate(-2deg)", filter: "drop-shadow(0 20px 60px rgba(107,92,231,0.40))" }}>
                <div className="rounded-2xl p-6 w-[290px]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}>

                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: "rgba(255,255,255,0.35)" }}>Sample: $85K · California · Single</p>
                  <div className="border-b mb-3 mt-3" style={{ borderColor: "rgba(255,255,255,0.07)" }} />

                  {[
                    ["SE tax (15.3%)", "$11,098"],
                    ["Federal income tax", "$10,245"],
                    ["California state tax", "$6,215"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center py-2.5"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                      <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</span>
                      <span className="text-[12px] font-semibold text-red-400">{val}</span>
                    </div>
                  ))}

                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.70)" }}>Total tax</span>
                    <span className="text-[12px] font-bold text-red-400">$27,558</span>
                  </div>

                  <div className="mt-3 rounded-xl p-4"
                    style={{ background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)", boxShadow: "0 8px 24px rgba(107,92,231,0.50)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ color: "rgba(255,255,255,0.65)" }}>Set aside each month</p>
                    <p className="text-[38px] font-extrabold text-white leading-none">
                      $2,297
                      <span className="text-[15px] font-semibold ml-1" style={{ color: "rgba(255,255,255,0.60)" }}>/mo</span>
                    </p>
                    <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>32.4% effective tax rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="py-12 md:py-16" style={{ background: "#EEF0FF" }}>
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <SETaxCalculator />
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">How we calculate your freelance tax</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01", icon: "📋", title: "Self-employment tax",
                body: "Social Security (12.4%) applies up to the $176,100 wage base. Medicare (2.9%) has no cap. An extra 0.9% Medicare applies above $200K. Multiply net income by 92.35% first — then apply rates. 50% of SE tax is deductible from your AGI.",
              },
              {
                step: "02", icon: "🏛️", title: "Federal income tax",
                body: "Applied to your adjusted gross income using 2025 IRS tax brackets after the standard deduction ($15,000 single / $30,000 married) and your SE tax deduction.",
              },
              {
                step: "03", icon: "📍", title: "State income tax",
                body: "Applied based on your state's rate. Nine states charge zero income tax. California (9.3%) and Oregon (9.9%) are the highest. Enter your state to get the accurate rate.",
              },
            ].map((s) => (
              <div key={s.step} className="step-card">
                <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-xl mb-5 feature-icon">
                  {s.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "#6B5CE7" }}>Step {s.step}</div>
                <h3 className="font-bold text-base mb-2.5 tracking-tight" style={{ color: "#0A0F1E" }}>{s.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#5A6178" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20" style={{ background: "#F4F5FF" }}>
        <div className="max-w-[760px] mx-auto px-4 sm:px-8">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently asked questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Related tools ── */}
      <section className="relative overflow-hidden py-14 md:py-16" style={{ background: "#0C0A2E" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(107,92,231,0.25) 0%, transparent 70%)" }} />
        <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label" style={{ color: "rgba(168,158,255,0.70)" }}>More Tools</div>
          <h2 className="text-[22px] font-extrabold mb-6 text-white">More free calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/hourly-rate-calculator", emoji: "⏱️", title: "Hourly Rate Calculator", sub: "Find your minimum hourly rate" },
              { href: "/1099-vs-w2-calculator", emoji: "⚖️", title: "1099 vs W-2 Calculator", sub: "Compare contract vs salary" },
              { href: "/invoice-generator", emoji: "📄", title: "Invoice Generator", sub: "Create professional invoices free" },
            ].map((t) => (
              <Link key={t.href} href={t.href}
                className="flex items-center gap-4 rounded-2xl p-5 transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                <div className="w-[44px] h-[44px] rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(107,92,231,0.25)", border: "1px solid rgba(107,92,231,0.30)" }}>{t.emoji}</div>
                <div>
                  <div className="font-bold text-[14px] mb-0.5 text-white">{t.title}</div>
                  <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.40)" }}>{t.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
