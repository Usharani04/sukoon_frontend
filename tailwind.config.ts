import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sukoon: {
          teal: {
            DEFAULT: "#3F7268",
            50: "#F2F7F6",
            100: "#E3EEEC",
            200: "#C6DDD9",
            300: "#9EC4BD",
            400: "#6EA39A",
            500: "#3F7268",
            600: "#345F57",
            700: "#2B4D47",
            800: "#243E3A",
            900: "#1E3330",
          },
          healing: "#628E7A",
          evergreen: "#293F3B",
          sage: "#9CAF88",
          horizon: "#A4C5D8",
          olive: "#A3A07D",
          oat: "#D4C7B6",
          apricot: "#DBA882",
          terracotta: "#DBA882",
          mist: "#EFEFEF",
          stone: "#B5B5B5",
          grey: "#212121",
          charcoal: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
        display: ["var(--font-figtree)", "sans-serif"],
        serif: ["var(--font-figtree)", "serif"],
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        "sukoon": "0 10px 30px -5px rgba(63, 114, 104, 0.08)",
        "sukoon-hover": "0 20px 40px -10px rgba(63, 114, 104, 0.15)",
        "card": "0 4px 20px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
