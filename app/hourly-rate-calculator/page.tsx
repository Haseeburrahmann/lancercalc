import type { Metadata } from "next";
import HourlyRateCalculator from "@/components/calculators/HourlyRateCalculator";
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
  alternates: {
    canonical: "https://lancercalc.com/hourly-rate-calculator",
  },
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

export default function HourlyRateCalculatorPage() {
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
            <span className="text-brand font-semibold">Hourly Rate Calculator</span>
          </div>

          <div className="max-w-[720px]">
            <div className="section-label">Rate Calculator</div>
            <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-4" style={{ color: "#0A0F1E" }}>
              Freelance Hourly Rate Calculator
              <span className="text-brand"> 2025–2026</span>
            </h1>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#5A6178" }}>
              What hourly rate do you need to charge to actually hit your income goals?
              Factor in taxes, health insurance, retirement, and slow months — get your real number.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Free", "No sign-up", "Includes tax + benefits", "Profit margin buffer"].map((tag) => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="bg-[#F7F8FB] py-12 md:py-16">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <HourlyRateCalculator />
        </div>
      </section>

      {/* ── Explanation ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-[28px] font-extrabold tracking-tight mb-5" style={{ color: "#0A0F1E" }}>
                Why freelancers undercharge (and how to stop)
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#5A6178" }}>
                The most common freelancer mistake is comparing their hourly rate to an employee&apos;s
                hourly wage. A $50/hr freelancer is NOT equal to a $50/hr employee.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "#5A6178" }}>
                When you work for a company, they pay: employer Social Security (6.2%), employer
                Medicare (1.45%), health insurance (~$500/mo), retirement matching (3–5%), paid vacation
                (2–4 weeks), sick days, equipment, and office space. As a freelancer, all of that
                comes out of your rate.
              </p>
            </div>
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
                  <span
                    className={i >= 7 ? "font-bold" : "font-medium"}
                    style={{ color: i >= 7 ? "#0A0F1E" : "#5A6178" }}
                  >
                    {label}
                  </span>
                  <span
                    className={`font-bold ${
                      i === 7 ? "text-brand text-base" : i >= 6 ? "" : "text-red-500"
                    }`}
                    style={i === 7 ? {} : { color: i >= 6 ? "#0A0F1E" : undefined }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
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
            <Link href="/freelance-tax-calculator" className="related-card">
              <div className="w-[42px] h-[42px] bg-[#F7F8FB] border border-[#E8EAF0] rounded-lg flex items-center justify-center text-lg flex-shrink-0">🧾</div>
              <div>
                <div className="font-bold text-[14px] mb-0.5" style={{ color: "#0A0F1E" }}>Freelance Tax Calculator</div>
                <div className="text-xs" style={{ color: "#8B90A0" }}>See your full tax breakdown</div>
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
