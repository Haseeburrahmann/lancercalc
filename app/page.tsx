import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./blog/posts";

export const metadata: Metadata = {
  title: "LancerCalc — Free Financial Calculators for Freelancers",
  description:
    "Free, fast financial calculators for freelancers. Self-employment tax, hourly rate, 1099 vs W-2, invoice generator — no sign-up, no paywalls.",
  alternates: {
    canonical: "https://lancercalc.com",
  },
};

const tools = [
  {
    href: "/freelance-tax-calculator",
    emoji: "🧾",
    title: "Freelance Tax Calculator",
    description:
      "Enter your income and state — instantly see your federal tax, self-employment tax, state tax, and exactly how much to set aside each quarter.",
    tags: ["Most Popular", "US"],
    tagColors: ["bg-brand-600 text-white", "bg-gray-100 text-gray-500 border border-gray-200"],
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
    tagColors: ["bg-emerald-500 text-white", "bg-gray-100 text-gray-500 border border-gray-200"],
    ready: true,
  },
  {
    href: "/invoice-generator",
    emoji: "📄",
    title: "Invoice Generator",
    description:
      "Create a professional invoice with logo, custom tax (VAT/GST), discount, and PAID stamp — download as PDF. No watermark, no sign-up.",
    tags: ["New"],
    tagColors: ["bg-emerald-500 text-white"],
    ready: true,
  },
  {
    href: "#",
    emoji: "📅",
    title: "Quarterly Tax Scheduler",
    description:
      "Never miss an IRS deadline. Enter your income and we build your quarterly payment calendar with exact due dates and amounts.",
    tags: ["Coming Soon"],
    tagColors: ["bg-amber-50 text-amber-600 border border-amber-200"],
    ready: false,
  },
  {
    href: "#",
    emoji: "💸",
    title: "Project Pricing Calculator",
    description:
      "Scope, hours, expenses, profit margin — know exactly what to quote before you send that proposal.",
    tags: ["Coming Soon"],
    tagColors: ["bg-amber-50 text-amber-600 border border-amber-200"],
    ready: false,
  },
];

const stats = [
  { value: "1.57B", label: "Freelancers worldwide" },
  { value: "Free",  label: "Always, no sign-up" },
  { value: "2026",  label: "Tax data up to date" },
  { value: "0",     label: "Dark patterns" },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LancerCalc",
  "url": "https://lancercalc.com",
  "description": "Free financial calculators for freelancers — self-employment tax, hourly rate, 1099 vs W-2, invoice generator.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://lancercalc.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  const previewPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-white to-brand-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Free · No Sign-up · No Paywalls
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-5">
                Financial tools built<br />
                for{" "}
                <span className="text-brand-600">freelancers.</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-md mb-9 leading-relaxed font-normal">
                Stop Googling &ldquo;how much tax do I owe.&rdquo; Get an instant, accurate answer
                for your income, your state, your situation — in seconds.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/freelance-tax-calculator"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-sm text-[15px]"
                >
                  Calculate My Tax
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/#tools"
                  className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold px-7 py-3.5 rounded-xl transition-all text-[15px] border border-gray-200 hover:border-brand-200 hover:text-brand-600 shadow-sm"
                >
                  See All Tools
                </Link>
              </div>
            </div>

            {/* Right — static calculator card visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
                  <span className="absolute -top-2.5 right-5 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-sm">
                    2025 Tax Year
                  </span>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-xl border border-brand-100">
                      🧾
                    </div>
                    <div>
                      <div className="font-bold text-[14px] text-gray-900">Freelance Tax Estimate</div>
                      <div className="text-[12px] text-gray-400 mt-0.5">$85,000 income · California · Single</div>
                    </div>
                  </div>
                  {[
                    { label: "Gross income",         value: "$85,000",   cls: "text-gray-800" },
                    { label: "SE tax deduction",      value: "−$6,002",   cls: "text-gray-800" },
                    { label: "Self-employment tax",   value: "−$12,004",  cls: "text-red-500" },
                    { label: "Federal income tax",    value: "−$10,818",  cls: "text-red-500" },
                    { label: "California state tax",  value: "−$4,756",   cls: "text-red-500" },
                    { label: "Estimated take-home",   value: "$57,422",   cls: "text-brand-600 text-[15px] font-bold" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0">
                      <span className="text-[13px] text-gray-500">{row.label}</span>
                      <span className={`text-[13px] font-semibold ${row.cls}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                {/* Floating quarterly stat */}
                <div className="absolute -bottom-4 -left-5 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-md flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center text-base">📅</div>
                  <div>
                    <div className="font-bold text-emerald-600 text-[16px] leading-none">$6,895</div>
                    <div className="text-[11px] text-gray-400 mt-1">set aside each quarter</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-7 text-center ${i < 3 ? "border-r border-gray-200" : ""} max-md:even:border-r-0 max-md:border-b max-md:last:border-b-0`}>
                <div className="text-2xl font-extrabold text-brand-600 tracking-tight">{s.value}</div>
                <div className="text-xs text-gray-500 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools grid ───────────────────────────────────────────────────── */}
      <section id="tools" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            Free Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Every tool a freelancer needs
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-normal">
            No bloated platforms. No subscriptions. Just fast, accurate answers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.href + tool.title} tool={tool} />
          ))}
        </div>
      </section>

      {/* ── Why LancerCalc ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              Why LancerCalc
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Built different, by design
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto font-normal">
              Existing tools are either too generic or locked behind a $30/month platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: "⚡",
                title: "Instant results",
                body: "No loading screens, no sign-up flows. Type your income, see your tax. That's it. Everything runs in your browser.",
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
              <div key={f.title} className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:border-brand-200 hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-brand-50 border border-brand-100 rounded-xl flex items-center justify-center text-2xl mb-5">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-[17px] mb-2 tracking-tight">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-normal">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              From the Blog
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Freelance finance, explained
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            View all posts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {previewPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:border-brand-200 hover:shadow-md transition-all block"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-brand-50 border border-brand-200 text-brand-600 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">{post.readTime}</span>
              </div>
              <h3 className="text-[16px] font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug tracking-tight">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 font-normal line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center gap-1 text-brand-600 text-sm font-semibold">
                Read article
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-600">
        {/* subtle dot grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            🚀 No credit card required
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to know your numbers?
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto font-normal">
            1.57 billion freelancers deserve better financial tools.
            Start with your tax estimate — it takes 30 seconds.
          </p>
          <Link
            href="/freelance-tax-calculator"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-600 font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-[15px]"
          >
            Calculate My Tax — It&apos;s Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
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
          ? "border-gray-200 hover:border-brand-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          : "border-gray-100 opacity-50"
        }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 bg-brand-50 border border-brand-100 rounded-xl flex items-center justify-center text-2xl">
          {tool.emoji}
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {tool.tags.map((tag, i) => (
            <span key={tag} className={`tag ${tool.tagColors[i]}`}>{tag}</span>
          ))}
        </div>
      </div>
      <h3 className={`font-bold text-[16px] mb-2 tracking-tight transition-colors
        ${tool.ready ? "text-gray-900 group-hover:text-brand-600" : "text-gray-400"}`}>
        {tool.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1 font-normal">{tool.description}</p>
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
