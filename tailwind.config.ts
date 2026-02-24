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
        navy: {
          DEFAULT: "#0A0F1E",
          800: "#111836",
          700: "#1A2249",
        },
        brand: {
          DEFAULT: "#155DEE",
          dark: "#1048CC",
          light: "#EBF2FF",
          50:  "#EBF2FF",
          100: "#D4E2FC",
          200: "#B0C9F7",
          300: "#7BABF4",
          400: "#4B8BF0",
          500: "#2470ED",
          600: "#155DEE",
          700: "#1048CC",
          800: "#0D3A9E",
          900: "#0A2D7A",
        },
        surface: {
          DEFAULT: "#F7F8FB",
          alt: "#F0F2F7",
        },
      },
      borderColor: {
        DEFAULT: "#E8EAF0",
        light: "#F0F1F5",
      },
      textColor: {
        primary: "#0A0F1E",
        secondary: "#5A6178",
        muted: "#8B90A0",
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
    },
  },
  plugins: [],
};
export default config;
