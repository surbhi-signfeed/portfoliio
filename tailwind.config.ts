import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        teal: {
          400: "#00f5c4",
        },
        navy: {
          950: "#050a12",
          900: "#0d1421",
          800: "#111827",
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 3s ease-in-out infinite",
        "gradient-x": "gradient-x 4s ease infinite",
        "pulse-ring": "pulse-ring 1.5s infinite",
        "fade-up": "fadeUp 0.7s ease both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(0,245,196,0.4)" },
          "100%": { boxShadow: "0 0 0 20px transparent" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
