import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SETaxCalculator from "@/components/calculators/SETaxCalculator";
import EmailCapture from "@/components/EmailCapture";
import { STATE_DATA, getStateBySlug, getStateParams } from "@/lib/stateData";

// ── Static generation: pre-render all 50 states at build time ──────────────
export function generateStaticParams() {
  return getStateParams();
}

// ── Dynamic metadata per state ─────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: { state: string } }
): Promise<Metadata> {
  const s = getStateBySlug(params.state);
  if (!s) return {};

  const taxNote = s.noTax
    ? `${s.name} has no state income tax`
    : `${s.name}'s ${(s.stateTaxRate * 100).toFixed(1)}% state income tax`;

  return {
    title: `${s.name} Freelance Tax Calculator 2025 — Self-Employment Tax in ${s.name}`,
    description: `Calculate your freelance taxes in ${s.name}. ${taxNote}. See your SE tax, federal income tax, and exact quarterly payments. Free, no sign-up.`,
    keywords: [
      `freelance tax calculator ${s.name.toLowerCase()}`,
      `self employment tax ${s.name.toLowerCase()} 2025`,
      `1099 tax calculator ${s.name.toLowerCase()}`,
      `${s.name.toLowerCase()} freelancer taxes`,
      `self employed taxes ${s.name.toLowerCase()}`,
      `quarterly tax ${s.name.toLowerCase()}`,
      `freelance income tax ${s.name.toLowerCase()}`,
      `${s.abbr.toLowerCase()} state income tax freelancer`,
    ],
    alternates: {
      canonical: `https://lancercalc.com/freelance-tax-calculator/${s.slug}`,
    },
    openGraph: {
      title: `${s.name} Freelance Tax Calculator 2025 — Free SE Tax Estimator`,
      description: `Enter your ${s.name} freelance income and instantly see your full tax breakdown — federal, SE, and ${s.noTax ? "no" : `${(s.stateTaxRate * 100).toFixed(1)}%`} state tax. Free.`,
      url: `https://lancercalc.com/freelance-tax-calculator/${s.slug}`,
    },
  };
}

export default function StateTaxCalculatorPage({ params }: { params: { state: string } }) {
  const s = getStateBySlug(params.state);
  if (!s) notFound();

  const taxNote = s.noTax
    ? `No state income tax`
    : `${(s.stateTaxRate * 100).toFixed(1)}% state income tax`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Do freelancers in ${s.name} pay state income tax?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": s.noTax
            ? `No. ${s.name} has no state income tax, so freelancers only pay federal income tax and self-employment tax (15.3% on net earnings).`
            : `Yes. ${s.name} freelancers pay a ${(s.stateTaxRate * 100).toFixed(1)}% state income tax in addition to federal income tax and self-employment tax.`,
        },
      },
      {
        "@type": "Question",
        "name": `How much self-employment tax do ${s.name} freelancers pay?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Self-employment tax is federal — it's the same rate in every state. Freelancers in ${s.name} pay 15.3% SE tax on 92.35% of net self-employment income (12.4% Social Security up to $176,100 + 2.9% Medicare with no cap). You can deduct 50% of this from your AGI.`,
        },
      },
      {
        "@type": "Question",
        "name": `Do I need to pay quarterly estimated taxes in ${s.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, if you expect to owe $1,000 or more in federal taxes for the year. ${s.noTax ? `${s.name} has no state income tax so no state quarterly payments are required.` : `${s.name} also requires quarterly estimated state tax payments if you expect to owe more than the state threshold.`} Federal deadlines are April 15, June 16, September 15, and January 15.`,
        },
      },
      {
        "@type": "Question",
        "name": `What percentage of income should ${s.name} freelancers save for taxes?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": s.noTax
            ? `${s.name} freelancers should generally set aside 25–30% of gross income for taxes, covering federal income tax and the 15.3% self-employment tax. With no state income tax, your overall burden is lower than in most states.`
            : `${s.name} freelancers should generally set aside 30–35% of gross income for taxes, covering federal income tax, 15.3% self-employment tax, and ${(s.stateTaxRate * 100).toFixed(1)}% state income tax.`,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lancercalc.com" },
      { "@type": "ListItem", "position": 2, "name": "Freelance Tax Calculator", "item": "https://lancercalc.com/freelance-tax-calculator" },
      { "@type": "ListItem", "position": 3, "name": `${s.name} Freelance Tax Calculator`, "item": `https://lancercalc.com/freelance-tax-calculator/${s.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-12 md:py-16" style={{ background: "#0C0A2E" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% -5%, rgba(107,92,231,0.40) 0%, transparent 65%)" }} />
          <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[13px] font-medium mb-6 flex-wrap">
              <Link href="/" style={{ color: "rgba(255,255,255,0.40)" }}>Home</Link>
              <svg className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.20)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/freelance-tax-calculator" style={{ color: "rgba(255,255,255,0.40)" }}>Tax Calculator</Link>
              <svg className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.20)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="font-semibold" style={{ color: "#A89EFF" }}>{s.name}</span>
            </div>

            <div className="max-w-[760px]">
              <div className="section-label">Free Tool · {s.name}</div>
              <h1 className="text-[clamp(26px,4vw,44px)] font-extrabold leading-[1.1] tracking-tight mb-4 text-white">
                {s.name} Freelance Tax
                <span style={{
                  background: "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}> Calculator 2025</span>
              </h1>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
                {s.blurb} Enter your income below for a complete breakdown of SE tax, federal income tax, and state tax — plus your exact quarterly payment amounts.
              </p>

              {/* State tax badge */}
              <div className="flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-bold"
                  style={
                    s.noTax
                      ? { background: "rgba(16,185,129,0.18)", border: "1px solid rgba(16,185,129,0.30)", color: "#34D399" }
                      : { background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.30)", color: "#FCD34D" }
                  }
                >
                  {s.noTax ? "✓" : "🏛"} {taxNote}
                </span>
                {["SE Tax 15.3%", "2025 Brackets", "Quarterly Estimates", "Free — No Sign-up"].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Calculator ── */}
        <section className="py-12 md:py-16" style={{ background: "#F4F5FF" }}>
          <div className="max-w-[900px] mx-auto px-4 sm:px-8">
            <SETaxCalculator defaultState={s.abbr} />
          </div>
        </section>

        {/* ── State context section ── */}
        <section className="py-12 md:py-16" style={{ background: "#fff" }}>
          <div className="max-w-[760px] mx-auto px-4 sm:px-8">
            <div className="section-label">{s.name} Tax Info</div>
            <h2 className="section-title">Freelance taxes in {s.name}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="calc-card p-5">
                <p className="text-[11px] font-bold mb-1 uppercase tracking-wide" style={{ color: "#8B90A0" }}>State Income Tax</p>
                <p className="text-[26px] font-extrabold" style={{ color: s.noTax ? "#10B981" : "#6B5CE7" }}>
                  {s.noTax ? "0%" : `${(s.stateTaxRate * 100).toFixed(1)}%`}
                </p>
                <p className="text-[13px] mt-1" style={{ color: "#5A6178" }}>
                  {s.noTax ? "No state income tax" : "Effective rate on SE income"}
                </p>
              </div>
              <div className="calc-card p-5">
                <p className="text-[11px] font-bold mb-1 uppercase tracking-wide" style={{ color: "#8B90A0" }}>SE Tax Rate (Federal)</p>
                <p className="text-[26px] font-extrabold" style={{ color: "#6B5CE7" }}>15.3%</p>
                <p className="text-[13px] mt-1" style={{ color: "#5A6178" }}>Same in every state (SS + Medicare)</p>
              </div>
              <div className="calc-card p-5">
                <p className="text-[11px] font-bold mb-1 uppercase tracking-wide" style={{ color: "#8B90A0" }}>Largest Freelance City</p>
                <p className="text-[22px] font-extrabold" style={{ color: "#0A0F1E" }}>{s.topCity}</p>
                <p className="text-[13px] mt-1" style={{ color: "#5A6178" }}>{s.name}&apos;s top freelance hub</p>
              </div>
              <div className="calc-card p-5">
                <p className="text-[11px] font-bold mb-1 uppercase tracking-wide" style={{ color: "#8B90A0" }}>Recommended Set-aside</p>
                <p className="text-[26px] font-extrabold" style={{ color: "#F59E0B" }}>
                  {s.noTax ? "25–30%" : "30–35%"}
                </p>
                <p className="text-[13px] mt-1" style={{ color: "#5A6178" }}>Of gross income for taxes</p>
              </div>
            </div>

            <p className="text-[14px] leading-relaxed" style={{ color: "#5A6178" }}>
              Freelancers in {s.name} are subject to the federal self-employment tax of 15.3% on 92.35% of net earnings — this covers Social Security (12.4% up to $176,100) and Medicare (2.9% with no cap). On top of that, you&apos;ll pay federal income tax using 2025 brackets, {s.noTax
                ? `but pay zero ${s.name} state income tax — a significant advantage.`
                : `plus ${s.name} state income tax at up to ${(s.stateTaxRate * 100).toFixed(1)}%.`
              } Use the calculator above to get your exact combined bill and quarterly payment breakdown.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 md:py-16" style={{ background: "#EEF0FF" }}>
          <div className="max-w-[760px] mx-auto px-4 sm:px-8">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="calc-card p-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0A0F1E" }}>{item.name}</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#5A6178" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other states ── */}
        <section className="py-10 md:py-12" style={{ background: "#fff" }}>
          <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
            <div className="section-label">All States</div>
            <h2 className="text-[20px] font-extrabold mb-5 tracking-tight" style={{ color: "#0A0F1E" }}>
              Freelance tax calculator by state
            </h2>
            <div className="flex flex-wrap gap-2">
              {STATE_DATA.map((st) => (
                <Link
                  key={st.slug}
                  href={`/freelance-tax-calculator/${st.slug}`}
                  className="rounded-lg px-3 py-1.5 text-[12px] font-semibold transition-all"
                  style={
                    st.slug === s.slug
                      ? { background: "#6B5CE7", color: "#fff" }
                      : { background: "#EEF0FF", color: "#6B5CE7", border: "1px solid #D8DAFF" }
                  }
                >
                  {st.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Email capture ── */}
        <EmailCapture
          variant="dark"
          source={`tax-calculator-${s.slug}`}
          heading={`Free ${s.name} Freelance Tax Tips`}
          subheading="Quarterly deadlines, deduction guides, and tax-saving strategies for freelancers — straight to your inbox."
        />

        {/* ── Related tools ── */}
        <section className="relative overflow-hidden py-14 md:py-16" style={{ background: "#0C0A2E" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(107,92,231,0.25) 0%, transparent 70%)" }} />
          <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8">
            <div className="section-label" style={{ color: "rgba(168,158,255,0.70)" }}>More Tools</div>
            <h2 className="text-[22px] font-extrabold mb-6 text-white">More free calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: "/quarterly-tax-scheduler", emoji: "📅", title: "Quarterly Tax Scheduler", sub: "Never miss an IRS deadline" },
                { href: "/hourly-rate-calculator", emoji: "⏱️", title: "Hourly Rate Calculator", sub: "Find your minimum hourly rate" },
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
    </>
  );
}
