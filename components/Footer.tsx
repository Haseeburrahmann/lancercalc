import Link from "next/link";

const tools = [
  { href: "/freelance-tax-calculator", label: "Freelance Tax Calculator" },
  { href: "/hourly-rate-calculator",   label: "Hourly Rate Calculator" },
  { href: "/1099-vs-w2-calculator",    label: "1099 vs W-2 Calculator" },
  { href: "/invoice-generator",        label: "Invoice Generator" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white/55">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3 group w-fit">
              <div className="w-7 h-7 bg-brand-600 rounded-md flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">LC</span>
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                Lancer<span className="text-brand-300">Calc</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              Free, fast financial calculators built for the world&apos;s 1.57 billion freelancers.
              No sign-up. No paywalls. Ever.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Free Tools</h3>
            <ul className="space-y-2.5">
              {tools.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="text-sm text-white/50 hover:text-white/90 transition-colors"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Resources</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className="text-sm text-white/50 hover:text-white/90 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-white/50 hover:text-white/90 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/50 hover:text-white/90 transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4">About</h3>
            <p className="text-sm leading-relaxed text-white/50">
              LancerCalc is built by a solo developer to solve real financial
              confusion freelancers face daily. All calculators are free and
              based on the latest 2025–2026 tax data.
            </p>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} LancerCalc. Free forever.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Use</Link>
            <p className="text-xs text-white/30">
              Estimates only — not tax advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
