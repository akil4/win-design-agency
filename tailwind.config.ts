import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        brand: {
          purple: "#6366f1",
          cyan: "#06b6d4",
          blue: "#3b82f6",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "fluid--2": "var(--step--2)",
        "fluid--1": "var(--step--1)",
        "fluid-0": "var(--step-0)",
        "fluid-1": "var(--step-1)",
        "fluid-2": "var(--step-2)",
        "fluid-3": "var(--step-3)",
        "fluid-4": "var(--step-4)",
        "fluid-5": "var(--step-5)",
        "fluid-6": "var(--step-6)",
      },
      spacing: {
        "fluid-3xs": "var(--space-3xs)",
        "fluid-2xs": "var(--space-2xs)",
        "fluid-xs": "var(--space-xs)",
        "fluid-s": "var(--space-s)",
        "fluid-m": "var(--space-m)",
        "fluid-l": "var(--space-l)",
        "fluid-xl": "var(--space-xl)",
        "fluid-2xl": "var(--space-2xl)",
        "fluid-3xl": "var(--space-3xl)",
        "fluid-3xs-2xs": "var(--space-3xs-2xs)",
        "fluid-2xs-xs": "var(--space-2xs-xs)",
        "fluid-xs-s": "var(--space-xs-s)",
        "fluid-s-m": "var(--space-s-m)",
        "fluid-m-l": "var(--space-m-l)",
        "fluid-l-xl": "var(--space-l-xl)",
        "fluid-xl-2xl": "var(--space-xl-2xl)",
        "fluid-2xl-3xl": "var(--space-2xl-3xl)",
        "fluid-s-l": "var(--space-s-l)",
        "fluid-m-2xl": "var(--space-m-2xl)",
        "fluid-l-3xl": "var(--space-l-3xl)",
        "fluid-section": "var(--space-l-3xl)",
      },
    },
  },
  plugins: [],
};
export default config;
