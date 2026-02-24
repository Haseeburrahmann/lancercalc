import Link from "next/link";

const calculators = [
  { href: "/freelance-tax-calculator", label: "Tax Calculator" },
  { href: "/hourly-rate-calculator",   label: "Hourly Rate" },
  { href: "/1099-vs-w2-calculator",    label: "1099 vs W-2" },
  { href: "/invoice-generator",        label: "Invoice Generator" },
];

const resources = [
  { href: "/blog",    label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms",   label: "Terms of Use" },
];

export default function Footer() {
  return (
    <>
      {/* ── Footer CTA ── */}
      <section
        className="relative overflow-hidden py-[80px] text-center"
        style={{ background: "#0C0A2E" }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(107,92,231,0.30) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-[600px] mx-auto px-8">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border mb-7"
            style={{
              background: "rgba(107,92,231,0.15)",
              borderColor: "rgba(107,92,231,0.25)",
              color: "#A89EFF",
            }}
          >
            100% Free
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
            Stop guessing.<br />Start planning.
          </h2>
          <p
            className="text-[15px] leading-relaxed mb-9"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Free, accurate financial tools for freelancers and self-employed professionals. It takes 30 seconds.
          </p>
          <Link
            href="/freelance-tax-calculator"
            className="inline-flex items-center gap-2.5 text-white font-bold text-[15px] px-9 py-4 rounded-xl transition-all"
            style={{
              background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
              boxShadow: "0 4px 24px rgba(107,92,231,0.50)",
            }}
          >
            Calculate My Tax — It&apos;s Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#07061C", paddingTop: "52px", paddingBottom: "32px" }}>
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-3.5">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center border"
                  style={{
                    background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
                    borderColor: "rgba(139,126,248,0.30)",
                    boxShadow: "0 0 12px rgba(107,92,231,0.35)",
                  }}
                >
                  <span className="text-white font-extrabold text-[13px]">LC</span>
                </div>
                <span className="font-extrabold text-white text-[20px] tracking-tight">
                  Lancer<span style={{ color: "#8B7EF8" }}>Calc</span>
                </span>
              </Link>
              <p
                className="text-[13px] leading-relaxed max-w-[260px]"
                style={{ color: "rgba(255,255,255,0.30)" }}
              >
                Free, accurate, and privacy-first financial tools for freelancers and self-employed professionals.
              </p>
            </div>

            {/* Calculators */}
            <div>
              <h4
                className="text-[11px] font-bold uppercase tracking-[0.08em] mb-[18px]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Calculators
              </h4>
              <ul className="space-y-2.5">
                {calculators.map((t) => (
                  <li key={t.href}>
                    <Link
                      href={t.href}
                      className="text-[13px] font-medium transition-colors"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4
                className="text-[11px] font-bold uppercase tracking-[0.08em] mb-[18px]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Resources
              </h4>
              <ul className="space-y-2.5">
                {resources.map((t) => (
                  <li key={t.href}>
                    <Link
                      href={t.href}
                      className="text-[13px] font-medium transition-colors"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4
                className="text-[11px] font-bold uppercase tracking-[0.08em] mb-[18px]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                About
              </h4>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.30)" }}
              >
                LancerCalc is built by a solo developer to solve real financial confusion freelancers face daily.
                All calculators are free and based on the latest 2025-2026 tax data.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-7"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.20)" }}>
              &copy; {new Date().getFullYear()} LancerCalc. For guidance only — not financial or tax advice.
            </p>
            <div
              className="flex items-center gap-[7px] px-3.5 py-1.5 rounded-full border"
              style={{
                background: "rgba(107,92,231,0.10)",
                borderColor: "rgba(107,92,231,0.20)",
              }}
            >
              <span className="text-[11px]">🔒</span>
              <span className="text-[11px] font-bold" style={{ color: "#A89EFF" }}>Zero Data Stored</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
