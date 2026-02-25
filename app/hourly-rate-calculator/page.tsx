import type { Metadata } from "next";
import HourlyRateCalculator from "@/components/calculators/HourlyRateCalculator";
import FAQAccordion from "@/components/FAQAccordion";
import EmailCapture from "@/components/EmailCapture";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Hourly Rate Calculator 2025–2026 — What Should I Charge?",
  description:
    "Find your minimum hourly rate as a freelancer. Enter your target salary, hours, tax rate, and expenses — we calculate the exact rate you need to charge. Free, no sign-up.",
  keywords: [
    "freelance hourly rate calculator",
    "what hourly rate should I charge as a freelancer",
    "freelancer rate calculator 2025 2026",
    "how to set freelance rates",
    "minimum freelance hourly rate",
    "how much should I charge as a freelancer",
    "freelance rate calculator",
    "consultant hourly rate calculator",
    "self employed hourly rate calculator",
    "freelance pricing calculator",
  ],
  alternates: { canonical: "https://lancercalc.com/hourly-rate-calculator" },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lancercalc.com" },
    { "@type": "ListItem", "position": 2, "name": "Hourly Rate Calculator", "item": "https://lancercalc.com/hourly-rate-calculator" },
  ],
};

export default function HourlyRateCalculatorPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <span className="font-semibold" style={{ color: "#A89EFF" }}>Hourly Rate Calculator</span>
          </div>

          {/* Two-column hero layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <div className="section-label">Rate Calculator</div>
              <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.08] tracking-tight mb-4 text-white">
                Freelance Hourly Rate Calculator
                <span style={{
                  background: "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}> 2025–2026</span>
              </h1>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
                What hourly rate do you need to charge to actually hit your income goals?
                Factor in taxes, health insurance, retirement, and slow months — get your real number.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Free", "No sign-up", "Includes tax + benefits", "Profit margin buffer"].map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-4 py-1.5 rounded-full border"
                    style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — floating sample result card */}
            <div className="hidden lg:flex justify-center">
              <div style={{ transform: "rotate(2deg)", filter: "drop-shadow(0 20px 60px rgba(107,92,231,0.40))" }}>
                <div className="rounded-2xl p-6 w-[290px]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}>

                  <p className="text-[11px] font-bold uppercase tracking-widest mb-4"
                    style={{ color: "rgba(255,255,255,0.35)" }}>Sample calculation</p>

                  {[
                    ["Target take-home", "$80,000 / yr"],
                    ["Tax rate", "30%"],
                    ["Billable hours / wk", "30 hrs"],
                    ["Health insurance", "$400 / mo"],
                    ["Profit margin", "20%"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center py-2.5"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                      <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</span>
                      <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>{val}</span>
                    </div>
                  ))}

                  <div className="mt-4 rounded-xl p-4"
                    style={{ background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)", boxShadow: "0 8px 24px rgba(107,92,231,0.50)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ color: "rgba(255,255,255,0.65)" }}>Your minimum rate</p>
                    <p className="text-[38px] font-extrabold text-white leading-none">$89<span className="text-[18px] font-semibold ml-1" style={{ color: "rgba(255,255,255,0.70)" }}>/hr</span></p>
                    <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>to hit your goals after all costs</p>
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
          <HourlyRateCalculator />
        </div>
      </section>

      {/* ── Why freelancers undercharge ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          {/* Full-width heading */}
          <div className="mb-10">
            <div className="section-label">Hidden Costs</div>
            <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight" style={{ color: "#0A0F1E" }}>
              Why freelancers undercharge (and how to stop)
            </h2>
            <p className="text-[15px] leading-relaxed mt-3" style={{ color: "#8B90A0" }}>
              A $50/hr freelancer is not equal to a $50/hr employee. Here&apos;s what you&apos;re actually covering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left — 2×2 hidden-cost stat grid */}
            <div className="grid grid-cols-2 gap-4 auto-rows-fr">
              {[
                { icon: "💸", label: "Payroll Tax", value: "+15.3%", desc: "You pay both the employer and employee share of Social Security & Medicare" },
                { icon: "🏥", label: "Health Insurance", value: "+$6K/yr", desc: "No employer contribution — the full premium comes out of your revenue" },
                { icon: "🏖️", label: "Unpaid Time Off", value: "2–4 wks", desc: "Every vacation or sick day is direct lost income with no safety net" },
                { icon: "📋", label: "Non-Billable Work", value: "30–40%", desc: "Proposals, admin, and sales hours don't show up on any invoice" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl p-5 flex flex-col" style={{ background: "#F4F5FF", border: "1.5px solid #E6E9FF" }}>
                  <div className="text-2xl mb-3">{stat.icon}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "#8B90A0" }}>{stat.label}</div>
                  <div className="text-[22px] font-extrabold leading-none mb-2" style={{ color: "#6B5CE7" }}>{stat.value}</div>
                  <p className="text-[11px] leading-snug" style={{ color: "#8B90A0" }}>{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Right — breakdown card (unchanged) */}
            <div className="calc-card">
              <h3 className="font-bold text-[15px] mb-4" style={{ color: "#0A0F1E" }}>The hidden costs in a $100K salary equivalent</h3>
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
                <div
                  key={label}
                  className={`flex justify-between items-center text-sm py-3 ${
                    i === 7 ? "border-t border-[#E8EAF0] pt-4 mt-1" : "border-b border-[#F0F1F5] last:border-0"
                  }`}
                >
                  <span className={i >= 7 ? "font-bold" : "font-medium"} style={{ color: i >= 7 ? "#0A0F1E" : "#5A6178" }}>
                    {label}
                  </span>
                  <span className={`font-bold ${i >= 1 && i <= 5 ? "text-red-500" : ""}`}
                    style={i === 7 ? { color: "#6B5CE7" } : i >= 6 ? { color: "#0A0F1E" } : undefined}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
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

      {/* ── Email capture ── */}
      <EmailCapture
        variant="dark"
        source="hourly-rate-calculator"
        heading="Free Freelance Finance Tips — In Your Inbox"
        subheading="Rate-setting strategies, tax deadlines, and industry benchmarks. Join freelancers using LancerCalc to earn more."
      />

      {/* ── Related Tools ── */}
      <section className="relative overflow-hidden py-14 md:py-16" style={{ background: "#0C0A2E" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(107,92,231,0.25) 0%, transparent 70%)" }} />
        <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label" style={{ color: "rgba(168,158,255,0.70)" }}>More Tools</div>
          <h2 className="text-[22px] font-extrabold mb-6 text-white">More free calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/freelance-tax-calculator", emoji: "🧾", title: "Freelance Tax Calculator", sub: "See your full tax breakdown" },
              { href: "/1099-vs-w2-calculator", emoji: "⚖️", title: "1099 vs W-2 Calculator", sub: "Compare contract vs salary" },
              { href: "/invoice-generator", emoji: "📄", title: "Invoice Generator", sub: "Create professional invoices free" },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="flex items-center gap-4 rounded-2xl p-5 transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
              >
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
