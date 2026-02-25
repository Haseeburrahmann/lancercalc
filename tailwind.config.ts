import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Existing tokens (preserved) ── */
        navy: {
          DEFAULT: "#0A0F1E",
          800: "#111836",
          700: "#1A2249",
        },
        brand: {
          DEFAULT: "#6B5CE7",
          dark:    "#5346C4",
          light:   "#F3F0FF",
          50:      "#F3F0FF",
          100:     "#E9E4FD",
          200:     "#D3C9FB",
          300:     "#B4A3F8",
          400:     "#9580F5",
          500:     "#7B65F0",
          600:     "#6B5CE7",
          700:     "#5346C4",
          800:     "#3D31A0",
          900:     "#2C2278",
        },
        surface: {
          DEFAULT: "#F7F8FB",
          alt: "#F0F2F7",
        },

        /* ── PAYZO tokens ── */
        /* Deep indigo — hero backgrounds, dark sections */
        hero: {
          DEFAULT: "#0C0A2E",
          deep:    "#07061C",
          mid:     "#130F3F",
          light:   "#1C1860",
        },
        /* Violet / purple — primary accent, CTAs, highlights */
        purple: {
          DEFAULT: "#6B5CE7",
          dark:    "#5346C4",
          soft:    "#8B7EF8",
          light:   "#F3F0FF",
          50:      "#F3F0FF",
          100:     "#E9E4FD",
          200:     "#D3C9FB",
          300:     "#B4A3F8",
          400:     "#9580F5",
          500:     "#7B65F0",
          600:     "#6B5CE7",
          700:     "#5346C4",
          800:     "#3D31A0",
          900:     "#2C2278",
        },
        /* Lavender — light section backgrounds */
        lavender: {
          DEFAULT: "#EEF0FF",
          deep:    "#E6E9FF",
          mid:     "#F4F5FF",
          light:   "#F9FAFF",
        },
      },
      borderColor: {
        DEFAULT: "#E8EAF0",
        light: "#F0F1F5",
      },
      textColor: {
        primary:   "#0A0F1E",
        secondary: "#5A6178",
        muted:     "#8B90A0",
      },
      fontFamily: {
        sans:    ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "20px",
        xl: "14px",
        lg: "10px",
      },
      backgroundImage: {
        "hero-glow":   "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(107,92,231,0.35) 0%, transparent 70%)",
        "purple-glow": "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(107,92,231,0.18) 0%, transparent 70%)",
        "card-shine":  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)",
      },
      boxShadow: {
        "purple-sm":  "0 4px 16px rgba(107,92,231,0.22)",
        "purple-md":  "0 8px 32px rgba(107,92,231,0.28)",
        "purple-lg":  "0 16px 56px rgba(107,92,231,0.32)",
        "card":       "0 2px 12px rgba(10,15,30,0.06)",
        "card-hover": "0 8px 32px rgba(10,15,30,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
