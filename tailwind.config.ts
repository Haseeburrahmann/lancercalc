import type { Config } from "tailwindcss";

// ─────────────────────────────────────────────────────────────
// LancerCalc 2.0 — Design Tokens
// Brand: Deep Navy #200B56 (Sasico CRM design system, April 2026)
// Fonts: Plus Jakarta Sans (headings) + Inter (body)
// ─────────────────────────────────────────────────────────────

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Primary brand palette (Deep Navy — #200B56) ──────────
        brand: {
          DEFAULT: "#200B56",
          hover:   "#180840",
          dark:    "#0D0524",
          light:   "#EDE8F5",
          50:      "#F5F2FF",
          100:     "#EDE8F5",
          200:     "#D9D0EE",
          300:     "#B9AADC",
          400:     "#8B74C4",
          500:     "#6547A8",
          600:     "#4B2D8C",
          700:     "#200B56",   // ← PRIMARY
          800:     "#180840",
          900:     "#0D0524",
        },

        // ── Text ─────────────────────────────────────────────────
        navy: {
          DEFAULT: "#0A0F1E",
          800:     "#111836",
          700:     "#1A2249",
        },

        // ── Surfaces ─────────────────────────────────────────────
        surface: {
          DEFAULT: "#F7F8FB",
          alt:     "#F0F2F7",
        },

        // ── Hero backgrounds (deep navy sections) ────────────────
        hero: {
          DEFAULT: "#200B56",
          deep:    "#0D0524",
          mid:     "#180840",
          light:   "#2D1070",
        },

        // ── Accent / highlight (lighter purple for icons, tags) ──
        accent: {
          DEFAULT: "#4B2D8C",
          soft:    "#8B74C4",
          light:   "#EDE8F5",
          50:      "#F5F2FF",
          100:     "#EDE8F5",
          200:     "#D9D0EE",
          300:     "#B9AADC",
          400:     "#8B74C4",
          500:     "#6547A8",
          600:     "#4B2D8C",
          700:     "#200B56",
        },

        // ── Lavender tints (light section backgrounds) ───────────
        lavender: {
          DEFAULT: "#EDE8F5",
          deep:    "#D9D0EE",
          mid:     "#F2EEF9",
          light:   "#F8F6FC",
        },
      },

      borderColor: {
        DEFAULT: "#E8EAF0",
        light:   "#F0F1F5",
      },

      textColor: {
        primary:   "#0A0F1E",
        secondary: "#4B5563",
        muted:     "#8B90A0",
      },

      fontFamily: {
        // Headings — Plus Jakarta Sans (bold, modern)
        sans:    ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        // Body copy — Inter (readable, professional)
        body:    ["Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Display scale
        "display-xl": ["3.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-lg": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-md": ["2rem",    { lineHeight: "1.2",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["1.5rem",  { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "700" }],
      },

      borderRadius: {
        "3xl": "24px",
        "2xl": "20px",
        xl:    "14px",
        lg:    "10px",
      },

      backgroundImage: {
        // Hero glow — navy version
        "hero-glow":   "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(32,11,86,0.40) 0%, transparent 70%)",
        "brand-glow":  "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(32,11,86,0.20) 0%, transparent 70%)",
        "card-shine":  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)",
        // Gradient for hero sections
        "hero-gradient": "linear-gradient(135deg, #0D0524 0%, #200B56 50%, #2D1070 100%)",
      },

      boxShadow: {
        "brand-sm":   "0 4px 16px rgba(32,11,86,0.22)",
        "brand-md":   "0 8px 32px rgba(32,11,86,0.28)",
        "brand-lg":   "0 16px 56px rgba(32,11,86,0.32)",
        "card":       "0 2px 12px rgba(10,15,30,0.06)",
        "card-hover": "0 8px 32px rgba(10,15,30,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
