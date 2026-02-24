import type { Metadata } from "next";
import W2vsContractCalculator from "@/components/calculators/W2vsContractCalculator";
import FAQAccordion from "@/components/FAQAccordion";
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-medium mb-6">
            <Link href="/" className="transition-colors" style={{ color: "rgba(255,255,255,0.40)" }}>Home</Link>
            <svg className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.20)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-semibold" style={{ color: "#A89EFF" }}>1099 vs W-2 Calculator</span>
          </div>

          {/* Two-column hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
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

            {/* Right — side-by-side comparison card */}
            <div className="hidden lg:flex justify-center">
              <div style={{ transform: "rotate(2deg)", filter: "drop-shadow(0 20px 60px rgba(107,92,231,0.40))" }}>
                <div className="rounded-2xl p-6 w-[300px]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}>

                  <p className="text-[11px] font-bold uppercase tracking-widest mb-3"
                    style={{ color: "rgba(255,255,255,0.35)" }}>Sample: $100K W-2 vs $130K 1099</p>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>W-2 Job</p>
                      <p className="text-[13px] font-bold text-white mb-1">$100,000</p>
                      {[["FICA tax", "-$7,650"], ["Federal tax", "-$12,600"], ["Health ins.", "$0"], ["Net", "$79,750"]].map(([l, v], i) => (
                        <div key={l} className={`flex justify-between text-[11px] py-1 ${i === 3 ? "border-t mt-1 pt-2" : ""}`}
                          style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                          <span style={{ color: "rgba(255,255,255,0.40)" }}>{l}</span>
                          <span className={i === 3 ? "font-bold text-white" : "text-red-400"}
                            style={i === 3 ? {} : { color: i === 2 ? "rgba(255,255,255,0.55)" : undefined }}>{v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl p-3" style={{ background: "rgba(107,92,231,0.15)", border: "1px solid rgba(107,92,231,0.30)" }}>
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#A89EFF" }}>1099 Contract</p>
                      <p className="text-[13px] font-bold text-white mb-1">$130,000</p>
                      {[["SE tax", "-$18,369"], ["Federal tax", "-$13,800"], ["Health ins.", "-$6,000"], ["Net", "$91,831"]].map(([l, v], i) => (
                        <div key={l} className={`flex justify-between text-[11px] py-1 ${i === 3 ? "border-t mt-1 pt-2" : ""}`}
                          style={{ borderColor: "rgba(107,92,231,0.20)" }}>
                          <span style={{ color: "rgba(255,255,255,0.40)" }}>{l}</span>
                          <span className={i === 3 ? "font-bold" : "text-red-400"}
                            style={i === 3 ? { color: "#A89EFF" } : {}}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl p-3" style={{ background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)", boxShadow: "0 8px 24px rgba(107,92,231,0.50)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.65)" }}>Break-even 1099 rate</p>
                    <p className="text-[30px] font-extrabold text-white leading-none">$124,500</p>
                    <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>minimum to match W-2 take-home</p>
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
          <W2vsContractCalculator />
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">How the comparison works</h2>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/freelance-tax-calculator", emoji: "🧾", title: "Freelance Tax Calculator", sub: "Calculate your self-employment tax" },
              { href: "/hourly-rate-calculator", emoji: "⏱️", title: "Hourly Rate Calculator", sub: "Find your minimum hourly rate" },
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
