const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-source-sans-pro)", ...fontFamily.sans],
        yellowtail: ["var(--font-yellowtail)", ...fontFamily.serif],
        mono: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(-400px)" },
          "100%": { transform: "translateX(0)" },
        },
        "bounce-vertical": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 1s ease",
        "bounce-vertical": "bounce-vertical 1.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
