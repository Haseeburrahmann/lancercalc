"use client";
import Link from "next/link";
import { useState } from "react";

const tools = [
  { href: "/freelance-tax-calculator", label: "Tax Calculator" },
  { href: "/hourly-rate-calculator",   label: "Hourly Rate" },
  { href: "/1099-vs-w2-calculator",    label: "1099 vs W-2" },
  { href: "/invoice-generator",        label: "Invoice Gen" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-brand-700 transition-colors">
              <span className="text-white font-extrabold text-sm">LC</span>
            </div>
            <span className="font-extrabold text-gray-900 text-lg tracking-tight">
              Lancer<span className="text-brand-600">Calc</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
              >
                {t.label}
              </Link>
            ))}
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
            >
              Blog
            </Link>
          </nav>

          {/* CTAs + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/#tools"
              className="hidden sm:inline-flex text-sm font-semibold text-gray-600 hover:text-brand-600 px-3 py-2 rounded-lg transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/#tools"
              className="hidden sm:inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Start free
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <button
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
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
          <div className="md:hidden py-3 border-t border-gray-100 space-y-1">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
              >
                {t.label}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
            >
              Blog
            </Link>
            <div className="pt-2 pb-1 px-4">
              <Link
                href="/#tools"
                onClick={() => setOpen(false)}
                className="block text-center bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Start free
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
