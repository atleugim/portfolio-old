module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./core/components/**/*.{js,ts,jsx,tsx}",
    "./core/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#071223",
        },
        light: {
          DEFAULT: "#E7EDF0",
        },
        secondary: {
          DEFAULT: "#FC8A9D",
        },
      },
      filter: ["hover", "focus"],
      keyframes: {
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideInUp: "slideInUp 1s ease-in-out both 1s",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
