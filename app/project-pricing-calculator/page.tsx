import type { Metadata } from "next";
import ProjectPricingCalculator from "@/components/calculators/ProjectPricingCalculator";
import BottomCTA from "@/components/BottomCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Project Pricing Calculator 2025 — How Much to Charge",
  description:
    "Calculate the exact price to quote for your next freelance project. Enter hours, rate, expenses, and profit margin — get a clean quote, floor price, and effective hourly rate instantly. Free.",
  keywords: [
    "project pricing calculator freelancer",
    "how much to charge for freelance project",
    "freelance project quote calculator",
    "freelance pricing tool",
    "how to price a freelance project",
    "freelance proposal calculator",
    "project cost estimator freelancer",
    "freelance rate calculator project",
    "how to set freelance project price",
    "freelance quote generator",
  ],
  alternates: { canonical: "https://lancercalc.com/project-pricing-calculator" },
  openGraph: {
    title: "Project Pricing Calculator — Know Exactly What to Quote",
    description:
      "Enter your hours, rate, expenses, and desired profit margin. Get a clean project quote, floor price, and effective hourly rate instantly. Free, no sign-up.",
    url: "https://lancercalc.com/project-pricing-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I price a freelance project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with your estimated hours multiplied by your hourly rate, then add any project expenses (software, tools, subcontractors). Add a profit margin (typically 15–30%) and a buffer for revisions. Round to a clean number for your final quote.",
      },
    },
    {
      "@type": "Question",
      "name": "What profit margin should freelancers charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most freelancers charge a 15–30% profit margin on top of their costs. Higher-value or specialized work can command 30–50%. The margin covers unexpected overruns, business overhead, and profit beyond your hourly rate.",
      },
    },
    {
      "@type": "Question",
      "name": "Should I charge hourly or a fixed project fee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fixed project fees are usually better for both parties. Clients prefer knowing the total cost upfront, and you benefit if you work efficiently. Use your hourly rate to calculate the base, then quote a fixed price. Always define scope in writing.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I handle revision rounds in my quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Include a set number of revision rounds in your quote (typically 2–3). Each revision round costs approximately one hour of your time. Clearly state in your contract that additional revisions beyond the included rounds will be billed at your hourly rate.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lancercalc.com" },
    { "@type": "ListItem", "position": 2, "name": "Project Pricing Calculator", "item": "https://lancercalc.com/project-pricing-calculator" },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Freelance Project Pricing Calculator 2025",
  "url": "https://lancercalc.com/project-pricing-calculator",
  "description": "Calculate exactly what to charge for your next freelance project. Enter hours, rate, expenses, and profit margin — get a clean quote instantly. Free freelance project pricing tool.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

const faqs = [
  {
    q: "How do I price a freelance project?",
    a: "Start with hours × your hourly rate, add project expenses, then layer on a profit margin (15–30%) and a revision buffer. Round to a clean number — that's your quote. Always define scope in writing so extra requests are billed separately.",
  },
  {
    q: "What profit margin should I charge?",
    a: "Most freelancers use 15–30%. Specialized or high-stakes work commands 30–50%. The margin covers unexpected overruns, business overhead, and profit beyond just your hourly rate.",
  },
  {
    q: "Should I charge hourly or a fixed project fee?",
    a: "Fixed fees are usually better. Clients prefer knowing the total cost, and you benefit when you work efficiently. Use your hourly rate to calculate the base, then present a fixed price. Always define deliverables clearly in your proposal.",
  },
  {
    q: "How do I handle revision rounds?",
    a: "Include 2–3 revision rounds in your quoted price. Budget ~1 hour per round. State clearly in your contract that additional revisions beyond the included number are billed at your standard hourly rate.",
  },
];

export default function ProjectPricingCalculatorPage() {
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
              <span className="font-semibold" style={{ color: "#A89EFF" }}>Project Pricing Calculator</span>
            </div>

            <div className="max-w-[680px]">
              <div className="section-label">Free Tool</div>
              <h1 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.1] tracking-tight mb-4 text-white">
                Project Pricing
                <span style={{
                  background: "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}> Calculator</span>
              </h1>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
                Know exactly what to quote before you send that proposal. Scope, hours, expenses, profit margin — get a clean project price, floor cost, and effective hourly rate instantly.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Fixed-Price Quote", "Profit Margin", "Revision Buffer", "Rush Fee", "Free — No Sign-up"].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Calculator ── */}
        <section className="py-12 md:py-16" style={{ background: "#F4F5FF" }}>
          <div className="max-w-[760px] mx-auto px-4 sm:px-8">
            <ProjectPricingCalculator />
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
                  <p className="text-[14px] leading-relaxed" style={{ color: "#5A6178" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <BottomCTA
          source="project-pricing-calculator"
          emailHeading="Free Freelance Pricing Tips — In Your Inbox"
          relatedTools={[
            { href: "/hourly-rate-calculator", emoji: "⏱️", title: "Hourly Rate Calculator" },
            { href: "/freelance-tax-calculator", emoji: "🧾", title: "Freelance Tax Calculator" },
            { href: "/quarterly-tax-scheduler", emoji: "📅", title: "Quarterly Tax Scheduler" },
          ]}
        />

      </div>
    </>
  );
}
