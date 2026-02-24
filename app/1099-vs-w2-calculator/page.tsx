import type { Metadata } from "next";
import W2vsContractCalculator from "@/components/calculators/W2vsContractCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "1099 vs W-2 Calculator 2025 — Is Freelancing Worth It? | LancerCalc",
  description:
    "Compare a 1099 contract vs W-2 job offer side by side. See the real after-tax difference including self-employment tax, health insurance, retirement, and state taxes. Free, no sign-up.",
  keywords: [
    "1099 vs w2 calculator",
    "1099 vs w2 comparison 2025",
    "freelance vs full time salary comparison",
    "is freelancing worth it financially",
    "1099 contractor vs employee calculator",
    "self employment tax vs w2",
    "how much should i charge as 1099 contractor",
    "contract vs salary calculator",
    "should i take 1099 or w2",
    "1099 break even calculator",
  ],
  alternates: { canonical: "https://lancercalc.com/1099-vs-w2-calculator" },
  openGraph: {
    title: "1099 vs W-2 Calculator 2025 — See the Real Difference | LancerCalc",
    description:
      "Enter your W-2 salary and 1099 contract rate. Instantly see which pays more after taxes, health insurance, and retirement. Free, no sign-up.",
    url: "https://lancercalc.com/1099-vs-w2-calculator",
  },
};

const faqs = [
  {
    q: "Why does a 1099 contractor need to earn more than a W-2 employee at the same salary?",
    a: "A W-2 employee pays only the employee share of FICA taxes (7.65% — 6.2% Social Security + 1.45% Medicare). Their employer pays the other 7.65%. A 1099 contractor pays both shares (15.3% self-employment tax) because they are simultaneously the employer and the employee. On top of that, 1099 contractors must fund their own health insurance, retirement savings, and receive no paid time off. These costs can add up to $20,000–$40,000 per year that a W-2 employee receives 'free' as employer benefits.",
  },
  {
    q: "What is the break-even rate — and why does it matter?",
    a: "The break-even rate is the minimum 1099 gross income you need to earn to match the actual take-home pay of a W-2 job — after accounting for extra SE taxes and self-funded benefits. It typically runs 25–40% higher than your W-2 salary. For example, a $100,000 W-2 job often requires a $130,000–$140,000 contract to truly break even.",
  },
  {
    q: "Can I deduct health insurance as a 1099 contractor?",
    a: "Yes. Self-employed individuals can generally deduct 100% of health insurance premiums paid for themselves (and family) as an above-the-line deduction on Schedule 1, Form 1040 — reducing your adjusted gross income. This calculator does not include this deduction for simplicity; your actual tax bill may be lower if you qualify. Consult IRS Publication 535 or a tax professional.",
  },
  {
    q: "Does a higher 1099 rate always mean more money?",
    a: "Not necessarily. The jump from, say, $100K W-2 to $110K 1099 is almost never a raise — because you're paying an extra ~7.65% in SE tax, plus health insurance ($6,000–$20,000/year on the open market), plus no employer retirement match, plus no paid vacation. Our calculator shows you the real net number so you can negotiate from an informed position.",
  },
  {
    q: "What isn't included in this comparison?",
    a: "This calculator includes SE tax, federal income tax, state income tax (all 50 states + DC), health insurance, and retirement. It does not account for local city/county taxes, business expense deductions (home office, equipment), pre-tax 401(k) contribution effects, non-billable contractor hours, gaps between contracts, or professional liability insurance. These can all affect the real-world comparison — use this as a starting point, not a final answer.",
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

export default function ContractVsW2Page() {
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
          <div className="flex items-center gap-2 text-[13px] font-medium mb-6">
            <Link href="/" className="transition-colors" style={{ color: "rgba(255,255,255,0.40)" }}>Home</Link>
            <svg className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.20)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-semibold" style={{ color: "#A89EFF" }}>1099 vs W-2 Calculator</span>
          </div>

          <div className="max-w-[720px]">
            <div className="section-label">Comparison Tool</div>
            <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.08] tracking-tight mb-4 text-white">
              1099 vs W-2 Calculator
              <span style={{
                background: "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}> 2025</span>
            </h1>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
              A $130K contract isn&apos;t the same as a $130K salary. Enter both offers — see
              the real after-tax, after-benefits comparison in seconds.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Free", "No sign-up", "SE tax included", "Benefits valued", "Break-even rate", "2025 IRS brackets"].map((tag) => (
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
                style={{ color: "#A89EFF" }} className="underline">IRS Topic 554 (SE Tax)</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="py-12 md:py-16" style={{ background: "#EEF0FF" }}>
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <W2vsContractCalculator />
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">How It Works</div>
          <div className="section-title">How the comparison works</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01", icon: "📋", title: "Tax burden difference",
                body: "W-2 employees pay 7.65% FICA (employer pays the other 7.65%). 1099 contractors pay the full 15.3% self-employment tax — but can deduct 50% of it from their AGI. We apply 2025 IRS brackets to both scenarios.",
              },
              {
                step: "02", icon: "💰", title: "Benefits valuation",
                body: "Employer health insurance, 401(k) match, and paid vacation have real dollar value. We calculate exactly what your employer contributes — and what you'd need to pay yourself as a contractor.",
              },
              {
                step: "03", icon: "🎯", title: "Break-even rate",
                body: "We solve for the exact 1099 gross income needed for your net pay to match the W-2 offer. This is the number to take into your rate negotiation.",
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

      {/* ── Comparison table ── */}
      <section className="py-16 md:py-20" style={{ background: "#F4F5FF" }}>
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">Comparison Table</div>
          <h2 className="text-[24px] font-extrabold tracking-tight mb-6" style={{ color: "#0A0F1E" }}>
            Why a $100K contract is worth less than a $100K salary
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#E6E9FF] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#EEF0FF", borderBottom: "1px solid #E6E9FF" }}>
                  <th className="text-left px-6 py-4 font-semibold" style={{ color: "#5A6178" }}>Cost</th>
                  <th className="text-right px-6 py-4 font-semibold" style={{ color: "#5A6178" }}>W-2 ($100K)</th>
                  <th className="text-right px-6 py-4 font-semibold" style={{ color: "#6B5CE7" }}>1099 ($100K)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#F0F1F5]">
                {[
                  ["Gross income",          "$100,000", "$100,000"],
                  ["FICA / SE tax",          "-$7,650 (7.65%)", "-$14,130 (15.3% on 92.35%)"],
                  ["Federal income tax",     "~-$12,600", "~-$11,800 (SE deduction helps)"],
                  ["Health insurance",       "$0 (employer pays ~$6,000/yr)", "~-$6,000 (you pay)"],
                  ["Retirement match",       "+$3,000 (3% employer match)", "$0"],
                  ["PTO (15 days)",          "+$5,769 in paid leave", "$0 (unpaid time off)"],
                  ["Net spendable",          "~$79,750", "~$68,070"],
                  ["Difference",            "\u2014", "-$11,680 vs W-2"],
                ].map(([label, w2, c1099], i) => (
                  <tr key={label} className={i === 7 ? "font-semibold" : ""}
                    style={i === 7 ? { background: "#F4F5FF" } : {}}>
                    <td className="px-6 py-3.5" style={{ color: "#5A6178" }}>{label}</td>
                    <td className="px-6 py-3.5 text-right" style={{ color: "#5A6178" }}>{w2}</td>
                    <td className={`px-6 py-3.5 text-right font-medium ${i === 7 ? "text-red-500" : ""}`}
                      style={i !== 7 ? { color: "#5A6178" } : {}}>{c1099}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-4 leading-relaxed" style={{ color: "#8B90A0" }}>
            * Illustrative figures. State taxes not included. Use the calculator above for your exact scenario.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 md:py-20">
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
      <section className="py-12 md:py-16" style={{ background: "#F4F5FF" }}>
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">Related Tools</div>
          <h2 className="text-[24px] font-extrabold tracking-tight mb-6" style={{ color: "#0A0F1E" }}>More free calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/freelance-tax-calculator", emoji: "🧾", title: "Freelance Tax Calculator", sub: "Calculate your self-employment tax" },
              { href: "/hourly-rate-calculator", emoji: "⏱️", title: "Hourly Rate Calculator", sub: "Find your minimum hourly rate" },
            ].map((t) => (
              <Link key={t.href} href={t.href} className="related-card">
                <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center text-lg flex-shrink-0 border"
                  style={{ background: "#EEF0FF", borderColor: "#E6E9FF" }}>{t.emoji}</div>
                <div>
                  <div className="font-bold text-[14px] mb-0.5" style={{ color: "#0A0F1E" }}>{t.title}</div>
                  <div className="text-xs" style={{ color: "#8B90A0" }}>{t.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
