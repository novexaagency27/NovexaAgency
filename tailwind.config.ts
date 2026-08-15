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
        ivory: {
          50: "#FAF8F5",
          100: "#F5F2EC",
          200: "#EFECE4",
          300: "#E5E1D7",
          DEFAULT: "#FAF8F5",
        },
        stone: {
          100: "#F0EEE9",
          200: "#ECE9E2",
          300: "#E2DFD7",
          400: "#C4C0B6",
          500: "#9A958A",
          600: "#706C62",
          700: "#4D4942",
          800: "#2C2A26",
          900: "#1A1917",
          DEFAULT: "#ECE9E2",
        },
        charcoal: {
          800: "#222222",
          850: "#1B1B1B",
          900: "#141414",
          950: "#0D0D0D",
          DEFAULT: "#0D0D0D",
        },
        gold: {
          300: "#E6CA85",
          400: "#D4AF37",
          500: "#C5A059",
          600: "#A3803C",
          700: "#806225",
          DEFAULT: "#C5A059",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.05)",
        "glass-gold": "0 8px 32px 0 rgba(197, 160, 89, 0.15)",
        luxury: "0 20px 50px rgba(0, 0, 0, 0.04)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
