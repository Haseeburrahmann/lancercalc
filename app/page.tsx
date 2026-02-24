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
      <section
        className="relative overflow-hidden py-[88px]"
        style={{ background: "#0C0A2E" }}
      >
        {/* Radial purple glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(107,92,231,0.40) 0%, transparent 65%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border mb-7"
                style={{
                  background: "rgba(107,92,231,0.15)",
                  borderColor: "rgba(107,92,231,0.28)",
                  color: "#A89EFF",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#8B7EF8" }}
                />
                100% Free · No sign-up needed
              </div>

              <h1
                className="font-extrabold leading-[1.08] tracking-tight mb-5"
                style={{ fontSize: "clamp(38px,4.5vw,56px)" }}
              >
                <span className="text-white">Financial tools</span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  built for freelancers.
                </span>
              </h1>

              <p
                className="text-base leading-relaxed max-w-[480px] mb-8"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Stop Googling &ldquo;how much tax do I owe.&rdquo; Get an instant,
                accurate answer for your income, your state, your situation — in seconds.
              </p>

              <div className="flex flex-wrap gap-2 mb-9">
                {["Free Forever", "All 50 states", "2025 IRS brackets", "Zero data stored"].map((pill) => (
                  <span
                    key={pill}
                    className="text-xs font-semibold px-4 py-1.5 rounded-full border"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.10)",
                      color: "rgba(255,255,255,0.60)",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/freelance-tax-calculator"
                  className="inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-xl text-[15px] transition-all"
                  style={{
                    background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
                    boxShadow: "0 4px 24px rgba(107,92,231,0.50)",
                  }}
                >
                  Calculate My Tax
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/#tools"
                  className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl border text-[15px] transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  See All Tools
                </Link>
              </div>
            </div>

            {/* Right — preview card (dark version) */}
            <div className="hidden lg:block">
              <div
                className="rounded-2xl p-7 border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.09)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[15px] font-bold text-white">Tax Overview</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.20)" }} />
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.20)" }} />
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.20)" }} />
                  </div>
                </div>

                {/* Highlight block */}
                <div
                  className="rounded-xl p-5 mb-4 border"
                  style={{
                    background: "linear-gradient(135deg, rgba(107,92,231,0.30) 0%, rgba(107,92,231,0.12) 100%)",
                    borderColor: "rgba(107,92,231,0.30)",
                  }}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.06em] mb-2" style={{ color: "rgba(168,158,255,0.70)" }}>
                    Set aside from every payment
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-[46px] font-extrabold text-white leading-none tracking-tight">34.2%</div>
                    <div className="text-right">
                      <div className="text-[22px] font-extrabold text-white tracking-tight">$32,490</div>
                      <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.40)" }}>total tax owed</div>
                    </div>
                  </div>
                  <div className="text-[13px] mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Based on $95K income · California · Single filer
                  </div>
                </div>

                {/* 2×2 metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Quarterly Est.", value: "$8,123", badge: "Q1–Q4", badgeStyle: { background: "rgba(245,158,11,0.15)", color: "#FCD34D" } },
                    { label: "Take-Home", value: "$62,510", badge: "65.8%", badgeStyle: { background: "rgba(16,185,129,0.15)", color: "#34D399" } },
                    { label: "Federal Tax", value: "$10,216", badge: null, badgeStyle: {} },
                    { label: "Monthly Aside", value: "$2,708", badge: "/mo", badgeStyle: { background: "rgba(16,185,129,0.15)", color: "#34D399" } },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl px-4 py-3.5 border"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="text-[11px] font-semibold mb-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>{m.label}</div>
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="text-[18px] font-extrabold tracking-tight text-white">{m.value}</span>
                        {m.badge && (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={m.badgeStyle}>{m.badge}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-lg px-4 py-3.5 text-xs font-semibold leading-relaxed border"
                  style={{
                    background: "rgba(107,92,231,0.12)",
                    borderColor: "rgba(107,92,231,0.22)",
                    color: "rgba(168,158,255,0.85)",
                  }}
                >
                  💡 <strong style={{ color: "#A89EFF" }}>Pro tip:</strong> Open a dedicated tax savings account and auto-transfer 34% every time a client pays.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section
        className="py-10"
        style={{ background: "rgba(10,8,38,1)" }}
      >
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
            {[
              { icon: "🔒", label: "100% Private", sub: "No data stored or shared" },
              { icon: "📅", label: "2025-26 Rates", sub: "Latest IRS brackets" },
              { icon: "⚡", label: "Instant Results", sub: "No sign-up, no waiting" },
              { icon: "🌍", label: "All 50 States", sub: "Full US coverage" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`trust-item py-2 lg:py-0 ${i < 3 ? "lg:border-r" : ""} lg:px-8 ${i === 0 ? "lg:pl-0" : ""}`}
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="trust-icon">{item.icon}</div>
                <div>
                  <div className="text-[13px] font-bold text-white mb-0.5">{item.label}</div>
                  <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools grid ── */}
      <section id="tools" className="py-20" style={{ background: "#EEF0FF" }}>
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="section-label">Free Tools</div>
              <h2 className="text-[32px] font-extrabold tracking-tight" style={{ color: "#0A0F1E" }}>
                Every tool a freelancer needs
              </h2>
            </div>
            <Link
              href="/freelance-tax-calculator"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
              style={{ color: "#6B5CE7" }}
            >
              Start calculating →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool) => (
              <ToolCard key={tool.href + tool.title} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why LancerCalc — dark strip ── */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: "#0C0A2E" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(107,92,231,0.22) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text + feature grid */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border mb-7"
                style={{
                  background: "rgba(107,92,231,0.15)",
                  borderColor: "rgba(107,92,231,0.25)",
                  color: "#A89EFF",
                }}
              >
                Why LancerCalc
              </div>
              <h2
                className="font-extrabold tracking-tight mb-5 text-white"
                style={{ fontSize: "clamp(28px,3.5vw,40px)", lineHeight: 1.1 }}
              >
                Built different,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #A89EFF 0%, #6B5CE7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  by design.
                </span>
              </h2>
              <p
                className="text-[15px] leading-relaxed mb-10"
                style={{ color: "rgba(255,255,255,0.50)" }}
              >
                Unlike generic calculators, every formula here is built around
                how freelancers actually earn — SE tax, quarterly payments,
                deductions, and state rates all included.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "⚡", title: "Instant Results", body: "Everything runs in your browser — no loading, no sign-up, no waiting." },
                  { icon: "🎯", title: "Freelancer-Specific", body: "SE tax, quarterly deadlines, deductions — not formulas built for employees." },
                  { icon: "🔒", title: "Privacy First", body: "Your numbers never leave your device. Zero data stored, ever." },
                  { icon: "📊", title: "2025 Accuracy", body: "Latest IRS brackets, SE rates, and state taxes updated for 2025–26." },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="rounded-xl p-5 border transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="text-xl mb-3">{f.icon}</div>
                    <div className="text-[14px] font-bold text-white mb-1">{f.title}</div>
                    <div className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{f.body}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stats card */}
            <div>
              <div
                className="rounded-2xl p-8 border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="text-[13px] font-bold uppercase tracking-[0.08em] mb-6" style={{ color: "rgba(168,158,255,0.75)" }}>
                  Compare the difference
                </div>

                {/* Comparison rows */}
                {[
                  { label: "Self-Employment Tax", lancer: "✓ Included", others: "❌ Often missing" },
                  { label: "Quarterly Estimates", lancer: "✓ Calculated", others: "❌ Not shown" },
                  { label: "State Tax (all 50)", lancer: "✓ All states", others: "⚠️ Varies" },
                  { label: "SE Tax Deduction", lancer: "✓ Applied", others: "❌ Ignored" },
                  { label: "Sign-up required", lancer: "✗ Never", others: "✓ Usually yes" },
                  { label: "Cost", lancer: "Free forever", others: "$5–30/mo" },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className="flex items-center gap-4 py-3"
                    style={{ borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                  >
                    <span className="text-[13px] font-medium flex-1" style={{ color: "rgba(255,255,255,0.50)" }}>
                      {row.label}
                    </span>
                    <span
                      className="text-[12px] font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(107,92,231,0.20)", color: "#A89EFF" }}
                    >
                      {row.lancer}
                    </span>
                    <span
                      className="text-[12px] font-medium w-[120px] text-right"
                      style={{ color: "rgba(255,255,255,0.28)" }}
                    >
                      {row.others}
                    </span>
                  </div>
                ))}

                <Link
                  href="/freelance-tax-calculator"
                  className="mt-7 w-full text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-[14px] transition-all"
                  style={{
                    background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
                    boxShadow: "0 4px 20px rgba(107,92,231,0.40)",
                  }}
                >
                  Try it free — takes 30 seconds
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Blog preview ── */}
      <section className="py-20" style={{ background: "#F4F5FF" }}>
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
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
              style={{ color: "#6B5CE7" }}
            >
              View all posts
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border-[1.5px] p-7 hover:-translate-y-0.5 transition-all block"
                style={{ borderColor: "#E6E9FF" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                    style={{ background: "#EEF0FF", color: "#6B5CE7" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "#8B90A0" }}>{post.readTime}</span>
                </div>
                <h3
                  className="text-[15px] font-bold mb-2 leading-snug tracking-tight transition-colors"
                  style={{ color: "#0A0F1E" }}
                >
                  {post.title}
                </h3>
                <p className="text-[13px] leading-relaxed mb-4 line-clamp-2" style={{ color: "#5A6178" }}>
                  {post.description}
                </p>
                <div
                  className="flex items-center gap-1 text-[13px] font-bold"
                  style={{ color: "#6B5CE7" }}
                >
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
    <div
      className="group relative flex flex-col h-full rounded-2xl p-7 border transition-all duration-200"
      style={{
        background: tool.ready ? "#fff" : "#fff",
        borderColor: "#E8EAF0",
        boxShadow: "0 2px 12px rgba(10,15,30,0.05)",
        opacity: tool.ready ? 1 : 0.5,
        cursor: tool.ready ? "pointer" : "default",
      }}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-[52px] h-[52px] rounded-xl flex items-center justify-center text-2xl transition-all"
          style={{ background: "#EEF0FF", border: "1px solid #E6E9FF" }}
        >
          {tool.emoji}
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold px-3 py-1 rounded-full"
              style={
                tag === "Most Popular"
                  ? { background: "#0C0A2E", color: "#fff" }
                  : tag === "Coming Soon"
                  ? { background: "rgba(245,158,11,0.10)", color: "#D97706", border: "1px solid rgba(245,158,11,0.20)" }
                  : tag === "Essential"
                  ? { background: "rgba(16,185,129,0.10)", color: "#059669" }
                  : { background: "#EEF0FF", color: "#6B5CE7" }
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3
        className="font-bold text-[15px] mb-2 tracking-tight"
        style={{ color: tool.ready ? "#0A0F1E" : "#8B90A0" }}
      >
        {tool.title}
      </h3>
      <p className="text-[13px] leading-relaxed flex-1" style={{ color: "#5A6178" }}>
        {tool.description}
      </p>
      {tool.ready && (
        <div
          className="mt-5 flex items-center gap-1 text-[13px] font-bold"
          style={{ color: "#6B5CE7" }}
        >
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
