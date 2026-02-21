"use client";
import Link from "next/link";
import { useState } from "react";

const tools = [
  { href: "/freelance-tax-calculator", label: "Tax Calculator" },
  { href: "/hourly-rate-calculator",   label: "Hourly Rate" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-brand-700 transition-colors">
              <span className="text-white font-bold text-sm">LC</span>
            </div>
            <span className="font-bold text-slate-900 text-lg">
              Lancer<span className="text-brand-600">Calc</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
              >
                {t.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/#tools"
              className="hidden sm:inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              All Tools
            </Link>
            <button
              className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
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
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 border-t border-slate-100 space-y-1">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
              >
                {t.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
