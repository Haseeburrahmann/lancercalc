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
    description: "Enter your income and state — instantly see your federal tax, self-employment tax, state tax, and exactly how much to set aside each quarter.",
    tags: ["Most Popular"],
    ready: true,
  },
  {
    href: "/hourly-rate-calculator",
    emoji: "⏱️",
    title: "Hourly Rate Calculator",
    description: "Want to earn $80K/year? Tell us your target salary, hours, and expenses — we calculate the minimum hourly rate you need to charge.",
    tags: ["Essential"],
    ready: true,
  },
  {
    href: "/1099-vs-w2-calculator",
    emoji: "⚖️",
    title: "1099 vs W-2 Calculator",
    description: "Is that freelance contract actually worth more than your full-time offer? Compare after-tax take-home, benefits, and break-even rate.",
    tags: ["New"],
    ready: true,
  },
  {
    href: "/invoice-generator",
    emoji: "📄",
    title: "Invoice Generator",
    description: "Create a professional invoice with logo, custom tax, discount, and PAID stamp — download as PDF. No watermark, no sign-up.",
    tags: ["New"],
    ready: true,
  },
  {
    href: "#",
    emoji: "📅",
    title: "Quarterly Tax Scheduler",
    description: "Never miss an IRS deadline. Enter your income and we build your quarterly payment calendar with exact due dates and amounts.",
    tags: ["Coming Soon"],
    ready: false,
  },
  {
    href: "#",
    emoji: "💸",
    title: "Project Pricing Calculator",
    description: "Scope, hours, expenses, profit margin — know exactly what to quote before you send that proposal.",
    tags: ["Coming Soon"],
    ready: false,
  },
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

      {/* ── Hero ── */}
      <section className="bg-white py-[72px]">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand uppercase tracking-[0.08em] mb-5">
                <span className="w-2 h-2 rounded-full bg-brand opacity-40" />
                Free Financial Tools
              </div>
              <h1 className="text-[clamp(36px,4vw,52px)] font-extrabold leading-[1.08] tracking-tight mb-1" style={{ color: "#0A0F1E" }}>
                Financial tools built
              </h1>
              <div className="text-[clamp(36px,4vw,52px)] font-extrabold leading-[1.08] tracking-tight text-brand mb-5">
                for freelancers.
              </div>
              <p className="text-base leading-relaxed max-w-[480px] mb-7" style={{ color: "#5A6178" }}>
                Stop Googling &ldquo;how much tax do I owe.&rdquo; Get an instant, accurate answer
                for your income, your state, your situation — in seconds.
              </p>
              <div className="flex flex-wrap gap-2 mb-9">
                <span className="pill-filled">Free Forever</span>
                <span className="pill">No sign-up needed</span>
                <span className="pill">All 50 states</span>
                <span className="pill">2025 IRS brackets</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/freelance-tax-calculator"
                  className="inline-flex items-center gap-2.5 bg-navy hover:bg-navy-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(10,15,30,0.2)] text-[15px]"
                >
                  Calculate My Tax
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/#tools"
                  className="inline-flex items-center gap-2 bg-white text-[#5A6178] font-bold px-8 py-4 rounded-xl border-[1.5px] border-[#E8EAF0] hover:border-brand hover:text-brand transition-all text-[15px]"
                >
                  See All Tools
                </Link>
              </div>
            </div>

            {/* Right — preview card */}
            <div className="hidden lg:block">
              <div className="bg-white border border-[#E8EAF0] rounded-2xl p-8 relative" style={{ background: "linear-gradient(135deg, transparent, transparent)" }}>
                {/* Gradient border overlay */}
                <div className="absolute inset-[-1px] rounded-2xl pointer-events-none" style={{
                  padding: "1px",
                  background: "linear-gradient(135deg, #E8EAF0, #EBF2FF 50%, #E8EAF0)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }} />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[15px] font-bold" style={{ color: "#0A0F1E" }}>Tax Overview</span>
                  <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#8B90A0]" />
                    <span className="w-1 h-1 rounded-full bg-[#8B90A0]" />
                    <span className="w-1 h-1 rounded-full bg-[#8B90A0]" />
                  </div>
                </div>

                {/* Dark highlight */}
                <div className="bg-navy rounded-xl p-5 mb-4">
                  <div className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.06em] mb-2">Set aside from every payment</div>
                  <div className="flex items-end justify-between">
                    <div className="text-[46px] font-extrabold text-white leading-none tracking-tight">34.2%</div>
                    <div className="text-right">
                      <div className="text-[22px] font-extrabold text-white tracking-tight">$32,490</div>
                      <div className="text-[11px] text-white/40 mt-0.5">total tax owed</div>
                    </div>
                  </div>
                  <div className="text-[13px] text-white/50 mt-2">Based on $95K income &middot; California &middot; Single filer</div>
                </div>

                {/* 2x2 metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Quarterly Est.", value: "$8,123", badge: "Q1-Q4", badgeColor: "bg-amber-50 text-amber-500" },
                    { label: "Take-Home", value: "$62,510", badge: "65.8%", badgeColor: "bg-emerald-50 text-emerald-600" },
                    { label: "Federal", value: "$10,216", badge: null, badgeColor: "" },
                    { label: "Monthly Aside", value: "$2,708", badge: "/mo", badgeColor: "bg-emerald-50 text-emerald-600" },
                  ].map((m) => (
                    <div key={m.label} className="border border-[#F0F1F5] rounded-xl bg-[#F7F8FB] px-4 py-3.5">
                      <div className="text-[11px] font-semibold text-[#8B90A0] mb-1.5">{m.label}</div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-[18px] font-extrabold tracking-tight" style={{ color: "#0A0F1E" }}>{m.value}</span>
                        {m.badge && (
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${m.badgeColor}`}>{m.badge}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-light rounded-lg px-4 py-3.5 text-xs font-semibold text-brand leading-relaxed">
                  💡 <strong>Pro tip:</strong> Open a dedicated tax savings account and auto-transfer 34% every time a client pays.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="bg-navy py-9">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
            {[
              { icon: "🔒", label: "100% Private", sub: "No data stored or shared" },
              { icon: "📅", label: "2025-26 Rates", sub: "Latest IRS brackets" },
              { icon: "⚡", label: "Instant Results", sub: "No sign-up, no waiting" },
              { icon: "🌍", label: "All 50 States", sub: "Full US coverage" },
            ].map((item, i) => (
              <div key={item.label} className={`trust-item py-2 lg:py-0 ${i < 3 ? "lg:border-r lg:border-white/[0.07]" : ""} lg:px-8 ${i === 0 ? "lg:pl-0" : ""}`}>
                <div className="trust-icon">{item.icon}</div>
                <div>
                  <div className="text-[13px] font-bold text-white mb-0.5">{item.label}</div>
                  <div className="text-xs text-white/40 font-medium">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools grid ── */}
      <section id="tools" className="bg-[#F7F8FB] py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">Free Tools</div>
          <div className="section-title">Every tool a freelancer needs</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <ToolCard key={tool.href + tool.title} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why LancerCalc ── */}
      <section className="bg-white py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="section-label">Why LancerCalc</div>
          <div className="section-title">Built different, by design</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "⚡", title: "Instant results", body: "No loading screens, no sign-up flows. Type your income, see your tax. Everything runs in your browser — nothing leaves your device." },
              { icon: "🎯", title: "Built for freelancers", body: "We account for the 15.3% SE tax, quarterly payments, deductions, and state-specific rates — not generic employees." },
              { icon: "🔒", title: "Privacy first", body: "Your numbers stay in your browser. We don't store, sell, or track your financial data. Ever. Zero data stored." },
            ].map((f) => (
              <div key={f.title} className="step-card">
                <div className="w-[46px] h-[46px] bg-navy rounded-lg flex items-center justify-center text-xl mb-5">
                  {f.icon}
                </div>
                <h3 className="font-bold text-base mb-2.5 tracking-tight" style={{ color: "#0A0F1E" }}>{f.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#5A6178" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ── */}
      <section className="bg-[#F7F8FB] py-20">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="section-label">From the Blog</div>
              <h2 className="text-[32px] font-extrabold tracking-tight" style={{ color: "#0A0F1E" }}>
                Freelance finance, explained
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
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
                className="group bg-white rounded-2xl border-[1.5px] border-[#F0F1F5] p-7 hover:border-brand hover:shadow-[0_4px_20px_rgba(21,93,238,0.06)] hover:-translate-y-0.5 transition-all block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-brand-light text-brand text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#8B90A0] font-medium">{post.readTime}</span>
                </div>
                <h3 className="text-[15px] font-bold group-hover:text-brand transition-colors mb-2 leading-snug tracking-tight" style={{ color: "#0A0F1E" }}>
                  {post.title}
                </h3>
                <p className="text-[13px] leading-relaxed mb-4 line-clamp-2" style={{ color: "#5A6178" }}>
                  {post.description}
                </p>
                <div className="flex items-center gap-1 text-brand text-[13px] font-bold">
                  Read article
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Tool card ── */
function ToolCard({ tool }: { tool: typeof tools[0] }) {
  const inner = (
    <div className={`group relative flex flex-col h-full bg-white rounded-2xl border-[1.5px] p-7 transition-all duration-200
      ${tool.ready
        ? "border-[#F0F1F5] hover:border-brand hover:shadow-[0_4px_20px_rgba(21,93,238,0.06)] hover:-translate-y-0.5 cursor-pointer"
        : "border-[#F0F1F5] opacity-50"
      }`}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-[52px] h-[52px] bg-white border border-[#E8EAF0] rounded-xl flex items-center justify-center text-2xl transition-all group-hover:bg-brand-light group-hover:border-brand">
          {tool.emoji}
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {tool.tags.map((tag) => (
            <span key={tag} className={`text-[11px] font-bold px-3 py-1 rounded-full ${
              tag === "Most Popular" ? "bg-navy text-white" :
              tag === "Coming Soon" ? "bg-amber-50 text-amber-600 border border-amber-200" :
              tag === "Essential" ? "bg-emerald-50 text-emerald-600" :
              "bg-brand-light text-brand"
            }`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3 className={`font-bold text-[15px] mb-2 tracking-tight transition-colors
        ${tool.ready ? "group-hover:text-brand" : "text-[#8B90A0]"}`}
        style={tool.ready ? { color: "#0A0F1E" } : {}}
      >
        {tool.title}
      </h3>
      <p className="text-[13px] leading-relaxed flex-1" style={{ color: "#5A6178" }}>{tool.description}</p>
      {tool.ready && (
        <div className="mt-5 flex items-center gap-1 text-brand text-[13px] font-bold">
          Use free tool
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </div>
      )}
    </div>
  );

  return tool.ready
    ? <Link href={tool.href} className="flex flex-col h-full">{inner}</Link>
    : <div className="flex flex-col h-full">{inner}</div>;
}
