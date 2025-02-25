import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "380px", max: "639px" }, // Range: 480px - 639px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_text: "var(--primary-color)",
      },
    },
    fontFamily: {
      courier: ["Courier Prime", "serif"],
      rockwellNova: ["RockwellNova", "serif"],
      amazingSlab: ["AmazingSlab", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
