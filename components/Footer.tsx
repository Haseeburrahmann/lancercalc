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
      <section className="bg-navy py-[72px] text-center">
        <div className="max-w-[600px] mx-auto px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-white/55 bg-white/[0.06] border border-white/10 px-4 py-1.5 rounded-full mb-6">
            100% Free
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
            Stop guessing.<br />Start planning.
          </h2>
          <p className="text-[15px] text-white/45 leading-relaxed mb-9">
            Free, accurate financial tools for freelancers and self-employed professionals. It takes 30 seconds.
          </p>
          <Link
            href="/freelance-tax-calculator"
            className="inline-flex items-center gap-2.5 bg-white text-navy font-bold text-[15px] px-9 py-4 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.12)] transition-all"
          >
            Calculate My Tax — It&apos;s Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#070C1A] pt-[52px] pb-8">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-3.5">
                <div className="w-9 h-9 bg-navy rounded-[10px] flex items-center justify-center border border-white/10">
                  <span className="text-white font-extrabold text-[13px]">LC</span>
                </div>
                <span className="font-extrabold text-white text-[20px] tracking-tight">
                  Lancer<span className="text-brand">Calc</span>
                </span>
              </Link>
              <p className="text-[13px] text-white/35 leading-relaxed max-w-[260px]">
                Free, accurate, and privacy-first financial tools for freelancers and self-employed professionals.
              </p>
            </div>

            {/* Calculators */}
            <div>
              <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.08em] mb-[18px]">
                Calculators
              </h4>
              <ul className="space-y-2.5">
                {calculators.map((t) => (
                  <li key={t.href}>
                    <Link href={t.href} className="text-[13px] font-medium text-white/40 hover:text-white/80 transition-colors">
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.08em] mb-[18px]">
                Resources
              </h4>
              <ul className="space-y-2.5">
                {resources.map((t) => (
                  <li key={t.href}>
                    <Link href={t.href} className="text-[13px] font-medium text-white/40 hover:text-white/80 transition-colors">
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.08em] mb-[18px]">
                About
              </h4>
              <p className="text-[13px] text-white/35 leading-relaxed">
                LancerCalc is built by a solo developer to solve real financial confusion freelancers face daily.
                All calculators are free and based on the latest 2025-2026 tax data.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-7 border-t border-white/[0.05]">
            <p className="text-xs text-white/25">
              &copy; {new Date().getFullYear()} LancerCalc. For guidance only — not financial or tax advice.
            </p>
            <div className="flex items-center gap-[7px] bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
              <span className="text-[11px]">🔒</span>
              <span className="text-[11px] font-bold text-emerald-400">Zero Data Stored</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
