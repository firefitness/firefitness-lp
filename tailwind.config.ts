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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF6B35",
        "primary-dark": "#E55A2B",
        secondary: "#1A1A2E",
        accent: "#FFF3ED",
        navy: "#0d2b45",
        light: "#f5f5f5",
        line: "#00b900",
        // 男性向けカラー（力強い・ダーク）
        "male-dark": "#0a1628",
        "male-accent": "#3b82f6",
        "male-steel": "#64748b",
        // 女性向けカラー（柔らかい・上品）
        "female-pink": "#f472b6",
        "female-rose": "#fda4af",
        "female-cream": "#fef3e2",
        "female-soft": "#fdf2f8",
        // 40代向けカラー
        "premium-gold": "#d4af37",
        "premium-silver": "#c0c0c0",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
