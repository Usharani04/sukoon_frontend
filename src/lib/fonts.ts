import localFont from "next/font/local";

/**
 * Self-hosted fonts (files in src/fonts, SIL Open Font License, from @fontsource).
 *
 * Why: next/font/google downloads fonts from Google at build time. Google sometimes returns
 * font URLs without a file extension (fonts.gstatic.com/l/font?kit=...), and the Next.js 14
 * loader crashes on those ("Cannot read properties of null (reading '1')"), so builds fail at random.
 * Local files remove that dependency. The usage API (.className / .variable) is the same as before.
 */

export const figtree = localFont({
  src: [
    { path: "../fonts/figtree-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/figtree-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/figtree-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/figtree-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/figtree-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/figtree-latin-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../fonts/figtree-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-figtree",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const inter = localFont({
  src: [
    { path: "../fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  fallback: ["Georgia", "serif"],
});
