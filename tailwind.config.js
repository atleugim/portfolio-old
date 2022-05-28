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
          DEFAULT: "#010816",
        },
        light: {
          DEFAULT: "#E7EDF0",
        },
        secondary: {
          DEFAULT: "#FC8A9D",
        },
      },
      backgroundImage: {
        "glass-dark":
          "linear-gradient(114.67deg,rgba(78,75,102,.5) 5%,rgba(78,75,102, .1) 75%);",
        "glass-light":
          "linear-gradient(114.67deg,hsla(0,0%,100%,.5) 5%,hsla(0,0%,99%,.1) 75%);",
      },
      scale: {
        102: "1.02",
      },
      filter: ["hover", "focus"],
      keyframes: {
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideInUp: "slideInUp 1s ease-in-out both 1s",
        fadeIn: "fadeIn .3s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
