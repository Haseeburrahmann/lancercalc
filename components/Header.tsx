"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const tools = [
  { href: "/freelance-tax-calculator", label: "Tax Calculator" },
  { href: "/hourly-rate-calculator",   label: "Hourly Rate" },
  { href: "/1099-vs-w2-calculator",    label: "1099 vs W-2" },
  { href: "/invoice-generator",        label: "Invoice" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-2xl border-b border-[#F0F1F5]">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-navy rounded-[10px] flex items-center justify-center">
              <span className="text-white font-extrabold text-[13px] tracking-tight">LC</span>
            </div>
            <span className="font-extrabold text-[20px] tracking-tight" style={{ color: "#0A0F1E" }}>
              Lancer<span className="text-brand">Calc</span>
            </span>
          </Link>

          {/* Desktop nav — pill container */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F7F8FB] rounded-full p-1 border border-[#F0F1F5]">
            {tools.map((t) => {
              const isActive = pathname === t.href;
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className={`text-[13px] font-semibold px-[18px] py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-navy text-white shadow-[0_2px_8px_rgba(10,15,30,0.15)]"
                      : "text-[#5A6178] hover:text-[#0A0F1E]"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/blog"
              className="text-[13px] font-semibold text-[#5A6178] hover:text-brand px-4 py-2 rounded-full transition-colors"
            >
              Blog
            </Link>
            <button
              onClick={() => router.push("/freelance-tax-calculator")}
              className="px-5 py-2.5 bg-navy text-white text-[13px] font-bold rounded-full hover:bg-navy-700 transition-all cursor-pointer"
            >
              Calculate Tax →
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[#5A6178] hover:bg-[#F7F8FB] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 border-t border-[#F0F1F5] space-y-1">
            {tools.map((t) => {
              const isActive = pathname === t.href;
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-[14px] font-semibold rounded-xl transition-all ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-[#5A6178] hover:text-[#0A0F1E] hover:bg-[#F7F8FB]"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-[14px] font-semibold text-[#5A6178] hover:text-brand hover:bg-brand-light rounded-xl transition-all"
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
