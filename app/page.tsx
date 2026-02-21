import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LancerCalc — Free Financial Calculators for Freelancers",
  description:
    "Free, fast financial calculators for freelancers. Self-employment tax, hourly rate, 1099 vs W-2, invoice generator — no sign-up, no paywalls.",
};

const tools = [
  {
    href: "/freelance-tax-calculator",
    emoji: "🧾",
    title: "Freelance Tax Calculator",
    description:
      "Enter your income and state — instantly see your federal tax, self-employment tax, state tax, and exactly how much to set aside each quarter.",
    tags: ["Most Popular", "US"],
    tagColors: ["bg-brand-600 text-white", "bg-slate-100 text-slate-600"],
    ready: true,
  },
  {
    href: "/hourly-rate-calculator",
    emoji: "⏱️",
    title: "Hourly Rate Calculator",
    description:
      "Want to earn $80K/year? Tell us your target salary, hours, and expenses — we calculate the minimum hourly rate you need to charge.",
    tags: ["Essential"],
    tagColors: ["bg-emerald-500 text-white"],
    ready: true,
  },
  {
    href: "/1099-vs-w2-calculator",
    emoji: "⚖️",
    title: "1099 vs W-2 Calculator",
    description:
      "Is that freelance contract actually worth more than your full-time offer? Compare after-tax take-home, benefits value, and find your break-even rate.",
    tags: ["New", "US"],
    tagColors: ["bg-emerald-500 text-white", "bg-slate-100 text-slate-600"],
    ready: true,
  },
  {
    href: "#",
    emoji: "📄",
    title: "Invoice Generator",
    description:
      "Create a clean, professional invoice and download it as PDF — no account needed, no watermarks, completely free.",
    tags: ["Coming Soon"],
    tagColors: ["bg-amber-100 text-amber-700"],
    ready: false,
  },
  {
    href: "#",
    emoji: "📅",
    title: "Quarterly Tax Scheduler",
    description:
      "Never miss an IRS deadline. Enter your income and we build your quarterly payment calendar with exact due dates and amounts.",
    tags: ["Coming Soon"],
    tagColors: ["bg-amber-100 text-amber-700"],
    ready: false,
  },
  {
    href: "#",
    emoji: "💸",
    title: "Project Pricing Calculator",
    description:
      "Scope, hours, expenses, profit margin — know exactly what to quote before you send that proposal.",
    tags: ["Coming Soon"],
    tagColors: ["bg-amber-100 text-amber-700"],
    ready: false,
  },
];

const stats = [
  { value: "1.57B", label: "Freelancers worldwide" },
  { value: "Free", label: "Always, no sign-up" },
  { value: "2026", label: "Tax data up to date" },
  { value: "0", label: "Dark patterns" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white">
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.3) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Free · No Sign-up · No Paywalls
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Financial tools built
            <br />
            <span className="text-brand-400">for freelancers</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop Googling "how much tax do I owe." Get an instant, accurate answer
            for your income, your state, your situation — in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/freelance-tax-calculator"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-600/30 text-base"
            >
              Calculate My Tax
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/#tools"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all text-base border border-white/20"
            >
              See All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-brand-600">{s.value}</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools grid ───────────────────────────────────────────────────── */}
      <section id="tools" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Every tool a freelancer needs
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            No bloated platforms. No subscriptions. Just fast, accurate answers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <ToolCard key={tool.href + tool.title} tool={tool} />
          ))}
        </div>
      </section>

      {/* ── Why LancerCalc ───────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why LancerCalc?
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Existing tools are either too generic or locked behind a $30/month platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Instant results",
                body: "No loading screens, no sign-up flows. Type your income, see your tax. That's it.",
              },
              {
                icon: "🎯",
                title: "Built for freelancers",
                body: "We account for the 15.3% SE tax, quarterly payments, deductions, and state-specific rates — not generic employees.",
              },
              {
                icon: "🔒",
                title: "Privacy first",
                body: "Your numbers stay in your browser. We don't store, sell, or track your financial data. Ever.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Ready to know your numbers?
        </h2>
        <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
          1.57 billion freelancers deserve better financial tools.
          Start with your tax estimate — it takes 30 seconds.
        </p>
        <Link
          href="/freelance-tax-calculator"
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-md text-base"
        >
          Calculate My Tax — It&apos;s Free
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </section>
    </div>
  );
}

// ── Tool card sub-component ────────────────────────────────────────────────
function ToolCard({ tool }: { tool: typeof tools[0] }) {
  const inner = (
    <div
      className={`group relative flex flex-col h-full bg-white rounded-2xl border p-6 shadow-sm transition-all duration-200
        ${tool.ready
          ? "border-slate-200 hover:border-brand-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          : "border-slate-100 opacity-70"
        }`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{tool.emoji}</span>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {tool.tags.map((tag, i) => (
            <span key={tag} className={`tag ${tool.tagColors[i]}`}>{tag}</span>
          ))}
        </div>
      </div>
      <h3 className={`font-bold text-lg mb-2 transition-colors
        ${tool.ready ? "text-slate-900 group-hover:text-brand-600" : "text-slate-500"}`}>
        {tool.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed flex-1">{tool.description}</p>
      {tool.ready && (
        <div className="mt-4 flex items-center gap-1 text-brand-600 text-sm font-semibold">
          Use free tool
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      )}
    </div>
  );

  return tool.ready
    ? <Link href={tool.href} className="flex flex-col h-full">{inner}</Link>
    : <div className="flex flex-col h-full">{inner}</div>;
}
