import Link from "next/link";

const tools = [
  { href: "/freelance-tax-calculator", label: "Freelance Tax Calculator" },
  { href: "/hourly-rate-calculator",   label: "Hourly Rate Calculator" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3 group w-fit">
              <div className="w-7 h-7 bg-brand-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">LC</span>
              </div>
              <span className="font-bold text-white text-base">
                Lancer<span className="text-brand-400">Calc</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Free, fast financial calculators built for the world&apos;s 1.57 billion freelancers.
              No sign-up. No paywalls. Ever.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Free Tools</h3>
            <ul className="space-y-2">
              {tools.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="text-sm hover:text-brand-400 transition-colors"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">About</h3>
            <p className="text-sm leading-relaxed">
              LancerCalc is built by a solo developer to solve real financial
              confusion freelancers face daily. All calculators are free and
              based on the latest 2025–2026 tax data.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} LancerCalc. Free forever.
          </p>
          <p className="text-xs text-slate-500">
            Disclaimer: These calculators are for estimation purposes only and
            do not constitute tax advice. Consult a tax professional for your situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
