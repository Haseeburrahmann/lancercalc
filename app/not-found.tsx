import Link from "next/link";

export default function NotFound() {
  const tools = [
    { href: "/freelance-tax-calculator",  emoji: "🧾", title: "Freelance Tax Calculator" },
    { href: "/hourly-rate-calculator",    emoji: "⏱️", title: "Hourly Rate Calculator" },
    { href: "/1099-vs-w2-calculator",     emoji: "⚖️", title: "1099 vs W-2 Calculator" },
    { href: "/invoice-generator",         emoji: "📄", title: "Invoice Generator" },
    { href: "/quarterly-tax-scheduler",   emoji: "📅", title: "Quarterly Tax Scheduler" },
    { href: "/project-pricing-calculator",emoji: "💸", title: "Project Pricing Calculator" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#EEF0FF" }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: "#0C0A2E" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -5%, rgba(107,92,231,0.40) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-[680px] mx-auto px-4 sm:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border mb-8"
            style={{
              background: "rgba(107,92,231,0.15)",
              borderColor: "rgba(107,92,231,0.28)",
              color: "#A89EFF",
            }}
          >
            404 — Page Not Found
          </div>

          <p
            className="font-extrabold leading-none tracking-tight mb-4 text-white"
            style={{ fontSize: "clamp(72px, 12vw, 120px)" }}
          >
            404
          </p>

          <h1
            className="text-2xl sm:text-3xl font-bold mb-4 text-white"
          >
            Looks like this page went freelance
          </h1>

          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            Head back to the homepage or jump straight to one of our free tools below.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-white text-[15px] transition-all"
            style={{
              background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
              boxShadow: "0 4px 24px rgba(107,92,231,0.50)",
            }}
          >
            Back to Homepage
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-16">
        <div className="max-w-[860px] mx-auto px-4 sm:px-8">
          <h2 className="text-center text-lg font-bold mb-8" style={{ color: "#5A6178" }}>
            Or jump to one of our free tools:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex items-center gap-3 bg-white rounded-2xl p-5 border transition-all"
                style={{ borderColor: "#E6E9FF", boxShadow: "0 2px 8px rgba(10,15,30,0.05)" }}
              >
                <span className="text-2xl flex-shrink-0">{tool.emoji}</span>
                <span className="text-[14px] font-bold" style={{ color: "#0A0F1E" }}>
                  {tool.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
