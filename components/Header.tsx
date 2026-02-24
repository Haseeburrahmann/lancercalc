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
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(12,10,46,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center border"
              style={{
                background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
                borderColor: "rgba(139,126,248,0.35)",
                boxShadow: "0 0 16px rgba(107,92,231,0.40)",
              }}
            >
              <span className="text-white font-extrabold text-[13px] tracking-tight">LC</span>
            </div>
            <span className="font-extrabold text-[20px] tracking-tight text-white">
              Lancer<span style={{ color: "#8B7EF8" }}>Calc</span>
            </span>
          </Link>

          {/* Desktop nav — pill container */}
          <nav
            className="hidden md:flex items-center gap-1 p-1 rounded-full border"
            style={{
              background: "rgba(255,255,255,0.06)",
              borderColor: "rgba(255,255,255,0.10)",
            }}
          >
            {tools.map((t) => {
              const isActive = pathname === t.href;
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className="text-[13px] font-semibold px-[18px] py-2 rounded-full transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: "rgba(107,92,231,0.90)",
                          color: "#fff",
                          boxShadow: "0 2px 10px rgba(107,92,231,0.45)",
                        }
                      : { color: "rgba(255,255,255,0.60)" }
                  }
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.95)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.60)";
                  }}
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
              className="text-[13px] font-semibold px-4 py-2 rounded-full transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.90)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)")
              }
            >
              Blog
            </Link>
            <button
              onClick={() => router.push("/freelance-tax-calculator")}
              className="px-5 py-2.5 text-white text-[13px] font-bold rounded-full transition-all cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
                boxShadow: "0 4px 14px rgba(107,92,231,0.40)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 6px 20px rgba(107,92,231,0.55)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 14px rgba(107,92,231,0.40)";
              }}
            >
              Calculate Tax →
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "rgba(255,255,255,0.65)" }}
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
          <div
            className="md:hidden py-3 border-t space-y-1"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            {tools.map((t) => {
              const isActive = pathname === t.href;
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-[14px] font-semibold rounded-xl transition-all"
                  style={
                    isActive
                      ? {
                          background: "rgba(107,92,231,0.85)",
                          color: "#fff",
                        }
                      : { color: "rgba(255,255,255,0.60)" }
                  }
                >
                  {t.label}
                </Link>
              );
            })}
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-[14px] font-semibold rounded-xl transition-all"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
