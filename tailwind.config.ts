import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"], // Enables class-based dark mode
  content: [
    "./pages/**/*.{ts,tsx,jsx,js}",
    "./components/**/*.{ts,tsx,jsx,js}",
    "./app/**/*.{ts,tsx,jsx,js}",
    "./src/**/*.{ts,tsx,jsx,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-mainFontDidact)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        ...colors,
        primary: colors.green, // Custom primary color
        secondary: colors.pink, // Custom secondary color
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
