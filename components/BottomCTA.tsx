"use client";

import { useState } from "react";
import Link from "next/link";

interface Tool {
  href: string;
  emoji: string;
  title: string;
}

interface BottomCTAProps {
  relatedTools: Tool[];
  source?: string;
  emailHeading?: string;
}

export default function BottomCTA({
  relatedTools,
  source = "website",
  emailHeading = "Free tips in your inbox",
}: BottomCTAProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <section className="relative overflow-hidden" style={{ background: "#0C0A2E" }}>
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(107,92,231,0.28) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1220px] mx-auto px-4 sm:px-8 py-12 md:py-14">
        {/* ── Top: 2-col grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">

          {/* Left — CTA */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full border mb-5"
              style={{
                background: "rgba(107,92,231,0.15)",
                borderColor: "rgba(107,92,231,0.25)",
                color: "#A89EFF",
              }}
            >
              100% Free
            </div>
            <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-white tracking-tight leading-tight mb-3">
              Stop guessing.<br />Start planning.
            </h2>
            <p className="text-[14px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              Free, accurate financial tools for freelancers and self-employed professionals. It takes 30 seconds.
            </p>
            <Link
              href="/freelance-tax-calculator"
              className="inline-flex items-center gap-2 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all"
              style={{
                background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
                boxShadow: "0 4px 20px rgba(107,92,231,0.45)",
              }}
            >
              Calculate My Tax — It&apos;s Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Right — Email form card */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4"
              style={{
                background: "rgba(107,92,231,0.20)",
                border: "1px solid rgba(107,92,231,0.35)",
                color: "#A89EFF",
              }}
            >
              <span>📬</span> Free Newsletter
            </div>
            <h3 className="text-[18px] font-extrabold text-white mb-1">{emailHeading}</h3>
            <p className="text-[13px] mb-5" style={{ color: "rgba(255,255,255,0.40)" }}>
              Rate strategies, tax deadlines, and finance tips for freelancers — free.
            </p>

            {status === "success" ? (
              <div
                className="rounded-xl px-5 py-3 text-sm font-semibold"
                style={{
                  background: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.30)",
                  color: "#34D399",
                }}
              >
                ✅ You&apos;re in! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === "loading"}
                  className="flex-1 rounded-xl px-4 py-2.5 text-sm font-medium outline-none disabled:opacity-60"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                  }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-xl px-5 py-2.5 text-sm font-bold transition-all disabled:opacity-60 whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
                    color: "#fff",
                  }}
                >
                  {status === "loading" ? "Saving…" : "Get Free Tips →"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-2 text-xs" style={{ color: "#F87171" }}>{errorMsg}</p>
            )}
            <p className="mt-3 text-[11px]" style={{ color: "rgba(255,255,255,0.20)" }}>
              No spam. Unsubscribe any time.
            </p>
          </div>
        </div>

        {/* ── Bottom: Related tools strip ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-center gap-3 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-[11px] font-bold uppercase tracking-widest flex-shrink-0"
            style={{ color: "rgba(255,255,255,0.30)" }}
          >
            Also try →
          </span>
          <div className="flex flex-wrap gap-2">
            {relatedTools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                <span>{t.emoji}</span> {t.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
