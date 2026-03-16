import type { Metadata } from "next";
import QuarterlyTaxScheduler from "@/components/calculators/QuarterlyTaxScheduler";
import BottomCTA from "@/components/BottomCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quarterly Tax Scheduler 2025 — IRS Estimated Tax Due Dates & Amounts",
  description:
    "Never miss a quarterly tax deadline. Enter your freelance income and instantly get your 2025 IRS estimated tax due dates, amounts, and a payment calendar. Free, no sign-up.",
  keywords: [
    "quarterly tax scheduler",
    "quarterly estimated taxes 2025",
    "IRS quarterly tax deadlines",
    "when to pay estimated taxes freelancer",
    "quarterly tax calculator freelancer",
    "estimated tax due dates 2025",
    "how much to pay quarterly taxes",
    "1040-ES payment schedule",
    "freelance quarterly tax estimator",
    "self employed tax payment calendar",
  ],
  alternates: { canonical: "https://lancercalc.com/quarterly-tax-scheduler" },
  openGraph: {
    title: "Quarterly Tax Scheduler 2025 — Free IRS Payment Calendar for Freelancers",
    description:
      "Enter your freelance income and instantly get your full 2025 quarterly tax payment schedule — due dates, amounts, and IRS safe harbor guidance.",
    url: "https://lancercalc.com/quarterly-tax-scheduler",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When are the 2025 quarterly estimated tax deadlines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 2025 IRS estimated tax deadlines are: Q1 — April 15, 2025; Q2 — June 16, 2025; Q3 — September 15, 2025; Q4 — January 15, 2026.",
      },
    },
    {
      "@type": "Question",
      "name": "How much should I pay each quarter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, you should pay 25% of your estimated annual tax each quarter. The IRS safe harbor rule allows you to avoid penalties by paying 100% of last year's total tax bill divided into 4 equal payments.",
      },
    },
    {
      "@type": "Question",
      "name": "What happens if I miss a quarterly tax deadline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you miss a quarterly payment or underpay, the IRS charges an underpayment penalty (currently around 8% annualized). You can avoid this by paying enough each quarter to meet the safe harbor threshold.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I pay quarterly estimated taxes to the IRS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The easiest way is via IRS Direct Pay at irs.gov/payments/direct-pay — free, instant, and no account required. Select 'Estimated Tax' and tax year 2025. You can also mail a check with Form 1040-ES.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lancercalc.com" },
    { "@type": "ListItem", "position": 2, "name": "Quarterly Tax Scheduler", "item": "https://lancercalc.com/quarterly-tax-scheduler" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Quarterly Tax Scheduler 2026",
  "url": "https://lancercalc.com/quarterly-tax-scheduler",
  "description": "Calculate quarterly estimated tax payments with IRS due dates for freelancers and self-employed workers.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

const faqs = [
  {
    q: "When are the 2025 quarterly estimated tax deadlines?",
    a: "The 2025 IRS deadlines are: Q1 — April 15, Q2 — June 16, Q3 — September 15, and Q4 — January 15, 2026.",
  },
  {
    q: "How much should I pay each quarter?",
    a: "Pay 25% of your estimated annual tax per quarter. The safe harbor rule lets you avoid penalties by paying 100% of last year's tax bill split into 4 equal payments — even if you end up owing more.",
  },
  {
    q: "What if I miss a quarterly deadline?",
    a: "The IRS charges an underpayment penalty (currently ~8% annualized) on late or underpaid quarters. Meeting the safe harbor threshold each quarter fully avoids this penalty.",
  },
  {
    q: "How do I actually pay the IRS?",
    a: "Use IRS Direct Pay at irs.gov/payments/direct-pay — it's free, instant, and requires no account. Select 'Estimated Tax' and year 2025. You can also mail a check with Form 1040-ES.",
  },
];

export default function QuarterlyTaxSchedulerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <div className="min-h-screen">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-12 md:py-16" style={{ background: "#0C0A2E" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% -5%, rgba(107,92,231,0.40) 0%, transparent 65%)" }} />
          <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[13px] font-medium mb-6">
              <Link href="/" className="transition-colors" style={{ color: "rgba(255,255,255,0.40)" }}>Home</Link>
              <svg className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.20)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="font-semibold" style={{ color: "#A89EFF" }}>Quarterly Tax Scheduler</span>
            </div>

            <div className="max-w-[680px]">
              <div className="section-label">Free Tool</div>
              <h1 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.1] tracking-tight mb-4 text-white">
                Quarterly Tax Scheduler
                <span style={{
                  background: "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}> 2025</span>
              </h1>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.70)" }}>
                Never miss an IRS deadline again. Enter your estimated income and get your exact quarterly payment calendar — due dates, amounts, and safe harbor guidance.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Q1–Q4 Due Dates", "Safe Harbor", "IRS Direct Pay Link", "Free — No Sign-up"].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Calculator ── */}
        <section className="py-12 md:py-16" style={{ background: "#F4F5FF" }}>
          <div className="max-w-[760px] mx-auto px-4 sm:px-8">
            <QuarterlyTaxScheduler />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-20" style={{ background: "#EEF0FF" }}>
          <div className="max-w-[760px] mx-auto px-4 sm:px-8">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="calc-card p-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0A0F1E" }}>{f.q}</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#4B5563" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Blog Articles ── */}
        <section className="max-w-[1220px] mx-auto px-4 sm:px-8 py-12">
          <p className="section-label">Learn More</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0A0F1E" }}>Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link href="/blog/quarterly-taxes-freelancer-guide-2026" className="group bg-white rounded-2xl p-6 transition-all hover:-translate-y-0.5" style={{ border: "1.5px solid #E6E9FF" }}>
              <h3 className="text-[15px] font-bold mb-2 group-hover:text-[#6B5CE7] transition-colors" style={{ color: "#0A0F1E" }}>How to Calculate & Pay Quarterly Estimated Taxes as a Freelancer in 2025–2026</h3>
              <p className="text-[13px] line-clamp-2 mb-3" style={{ color: "#4B5563" }}>Learn when quarterly estimated taxes are due in 2025–2026, how to calculate payments using Form 1040-ES, avoid IRS penalties, and use our free calculator to determine your exact amounts.</p>
              <span className="text-[13px] font-bold" style={{ color: "#6B5CE7" }}>Read article →</span>
            </Link>
            <Link href="/blog/freelance-tax-filing-deadlines-2026" className="group bg-white rounded-2xl p-6 transition-all hover:-translate-y-0.5" style={{ border: "1.5px solid #E6E9FF" }}>
              <h3 className="text-[15px] font-bold mb-2 group-hover:text-[#6B5CE7] transition-colors" style={{ color: "#0A0F1E" }}>Every Freelance Tax Deadline in 2026 — The Complete Calendar</h3>
              <p className="text-[13px] line-clamp-2 mb-3" style={{ color: "#4B5563" }}>Every tax deadline freelancers need in 2026: quarterly estimated payment dates, annual filing deadline, extension deadlines, and how to avoid penalties. Printable calendar included.</p>
              <span className="text-[13px] font-bold" style={{ color: "#6B5CE7" }}>Read article →</span>
            </Link>
            <Link href="/blog/how-to-pay-estimated-taxes-online-2026" className="group bg-white rounded-2xl p-6 transition-all hover:-translate-y-0.5" style={{ border: "1.5px solid #E6E9FF" }}>
              <h3 className="text-[15px] font-bold mb-2 group-hover:text-[#6B5CE7] transition-colors" style={{ color: "#0A0F1E" }}>How to Pay Estimated Taxes Online in 2026 — Step-by-Step Guide</h3>
              <p className="text-[13px] line-clamp-2 mb-3" style={{ color: "#4B5563" }}>Step-by-step guide to paying quarterly estimated taxes online using IRS Direct Pay — free, fast, and no IRS account needed. Includes EFTPS setup, payment confirmation tips, and common mistakes.</p>
              <span className="text-[13px] font-bold" style={{ color: "#6B5CE7" }}>Read article →</span>
            </Link>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <BottomCTA
          source="quarterly-tax-scheduler"
          emailHeading="Never Miss a Tax Deadline Again"
          relatedTools={[
            { href: "/freelance-tax-calculator", emoji: "🧾", title: "Freelance Tax Calculator" },
            { href: "/hourly-rate-calculator", emoji: "⏱️", title: "Hourly Rate Calculator" },
            { href: "/invoice-generator", emoji: "📄", title: "Invoice Generator" },
          ]}
        />

      </div>
    </>
  );
}
