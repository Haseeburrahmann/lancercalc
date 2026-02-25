"use client";

import { useState } from "react";

interface EmailCaptureProps {
  /** "dark" = navy background (tool pages / homepage), "light" = lavender (blog) */
  variant?: "dark" | "light";
  heading?: string;
  subheading?: string;
  source?: string;
}

export default function EmailCapture({
  variant = "dark",
  heading = "Free Freelance Tax Deadline Reminders",
  subheading = "Get quarterly tax deadlines, rate tips, and freelance finance guides — straight to your inbox. No spam, ever.",
  source = "website",
}: EmailCaptureProps) {
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

  /* ─── DARK variant ─── */
  if (variant === "dark") {
    return (
      <section
        className="relative overflow-hidden py-14 md:py-20"
        style={{ background: "#0C0A2E" }}
      >
        {/* glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 110%, rgba(107,92,231,0.32) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[680px] mx-auto px-4 sm:px-8 text-center">
          {/* badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
            style={{
              background: "rgba(107,92,231,0.20)",
              border: "1px solid rgba(107,92,231,0.35)",
              color: "#A89EFF",
            }}
          >
            <span>📬</span> Free Newsletter
          </div>

          <h2 className="text-[clamp(22px,3.5vw,34px)] font-extrabold tracking-tight mb-3 text-white">
            {heading}
          </h2>

          <p
            className="text-[15px] leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            {subheading}
          </p>

          {status === "success" ? (
            <div
              className="rounded-xl px-6 py-4 text-sm font-semibold"
              style={{
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.30)",
                color: "#34D399",
              }}
            >
              ✅ You&apos;re in! Check your inbox for a confirmation.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === "loading"}
                className="flex-1 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all disabled:opacity-60"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#fff",
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-xl px-6 py-3 text-sm font-bold transition-all disabled:opacity-60 whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
                  boxShadow: "0 4px 16px rgba(107,92,231,0.40)",
                  color: "#fff",
                }}
              >
                {status === "loading" ? "Saving…" : "Get Free Tips →"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm" style={{ color: "#F87171" }}>
              {errorMsg}
            </p>
          )}

          <p className="mt-4 text-[12px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            No spam. Unsubscribe any time.
          </p>
        </div>
      </section>
    );
  }

  /* ─── LIGHT variant ─── */
  return (
    <section
      className="rounded-2xl py-12 px-6 md:px-10 text-center"
      style={{
        background: "linear-gradient(135deg, #EEF0FF 0%, #F3F0FF 100%)",
        border: "1px solid #E6E9FF",
      }}
    >
      {/* badge */}
      <div
        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
        style={{
          background: "rgba(107,92,231,0.12)",
          border: "1px solid rgba(107,92,231,0.20)",
          color: "#6B5CE7",
        }}
      >
        <span>📬</span> Free Newsletter
      </div>

      <h2
        className="text-[clamp(20px,2.5vw,28px)] font-extrabold tracking-tight mb-2"
        style={{ color: "#0A0F1E" }}
      >
        {heading}
      </h2>
      <p
        className="text-[15px] leading-relaxed mb-6 max-w-[480px] mx-auto"
        style={{ color: "#5A6178" }}
      >
        {subheading}
      </p>

      {status === "success" ? (
        <div
          className="rounded-xl px-6 py-4 text-sm font-semibold max-w-[420px] mx-auto"
          style={{
            background: "rgba(16,185,129,0.10)",
            border: "1px solid rgba(16,185,129,0.25)",
            color: "#059669",
          }}
        >
          ✅ You&apos;re in! Check your inbox for a confirmation.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === "loading"}
            className="flex-1 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all disabled:opacity-50"
            style={{
              background: "#fff",
              border: "1px solid #D8DAFF",
              color: "#0A0F1E",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl px-6 py-3 text-sm font-bold transition-all disabled:opacity-50 whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #6B5CE7 0%, #8B7EF8 100%)",
              boxShadow: "0 4px 16px rgba(107,92,231,0.30)",
              color: "#fff",
            }}
          >
            {status === "loading" ? "Saving…" : "Get Free Tips →"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-500">{errorMsg}</p>
      )}

      <p className="mt-3 text-[12px]" style={{ color: "#8B90A0" }}>
        No spam. Unsubscribe any time.
      </p>
    </section>
  );
}
