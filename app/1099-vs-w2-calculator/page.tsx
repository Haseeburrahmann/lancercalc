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
  alternates: {
    canonical: "https://lancercalc.com/1099-vs-w2-calculator",
  },
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

      {/* ── Page header ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 to-brand-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="flex items-center gap-2 text-brand-300 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span>1099 vs W-2 Calculator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            1099 vs W-2 Calculator
            <span className="block text-brand-400 text-2xl sm:text-3xl font-semibold mt-1">2025 — Side-by-Side Comparison</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            A $130K contract isn&apos;t the same as a $130K salary. Enter both offers — see
            the real after-tax, after-benefits comparison in seconds.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["Free","No sign-up","SE tax included","Benefits valued","Break-even rate","2025 IRS brackets"].map((tag) => (
              <span key={tag} className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">
            Federal tax data:{" "}
            <a href="https://www.irs.gov/pub/irs-drop/rp-24-40.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-200">IRS Rev. Proc. 2024-40</a>
            {" · "}
            <a href="https://www.irs.gov/taxtopics/tc554" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-200">IRS Topic 554 (SE Tax)</a>
          </p>
        </div>
      </section>

      {/* ── Calculator ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <W2vsContractCalculator />
      </section>

      {/* ── How it works ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How the comparison works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Tax burden difference",
                body: "W-2 employees pay 7.65% FICA (employer pays the other 7.65%). 1099 contractors pay the full 15.3% self-employment tax — but can deduct 50% of it from their AGI. We apply 2025 IRS brackets to both scenarios.",
              },
              {
                step: "02",
                title: "Benefits valuation",
                body: "Employer health insurance, 401(k) match, and paid vacation have real dollar value. We calculate exactly what your employer contributes — and what you'd need to pay yourself as a contractor.",
              },
              {
                step: "03",
                title: "Break-even rate",
                body: "We solve for the exact 1099 gross income needed for your net pay to match the W-2 offer. This is the number to take into your rate negotiation.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="text-brand-600 font-bold text-xs mb-3">STEP {s.step}</div>
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The "real cost of freelancing" explainer ─────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Why a $100K contract is worth less than a $100K salary
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Cost</th>
                <th className="text-right px-4 py-3 font-semibold text-slate-700">W-2 ($100K)</th>
                <th className="text-right px-4 py-3 font-semibold text-brand-700">1099 ($100K)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["Gross income",          "$100,000", "$100,000"],
                ["FICA / SE tax",          "−$7,650 (7.65%)", "−$14,130 (15.3% on 92.35%)"],
                ["Federal income tax",     "~−$12,600", "~−$11,800 (SE deduction helps)"],
                ["Health insurance",       "$0 (employer pays ~$6,000/yr)", "~−$6,000 (you pay)"],
                ["Retirement match",       "+$3,000 (3% employer match)", "$0"],
                ["PTO (15 days)",          "+$5,769 in paid leave", "$0 (unpaid time off)"],
                ["Net spendable",          "~$79,750", "~$68,070"],
                ["Difference",            "—", "−$11,680 vs W-2"],
              ].map(([label, w2, c1099], i) => (
                <tr key={label} className={i === 7 ? "bg-amber-50 font-semibold" : "bg-white"}>
                  <td className="px-4 py-3 text-slate-700">{label}</td>
                  <td className="px-4 py-3 text-right text-slate-600">{w2}</td>
                  <td className={`px-4 py-3 text-right font-medium ${i === 7 ? "text-red-600" : "text-slate-600"}`}>{c1099}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-500 mt-3 leading-relaxed">
          * Illustrative figures. State taxes not included. Use the calculator above for your exact scenario.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related tools ────────────────────────────────────────────── */}
      <section className="border-t border-slate-200">
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
              href="/hourly-rate-calculator"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm px-4 py-2.5 rounded-xl hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm"
            >
              ⏱️ Hourly Rate Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
