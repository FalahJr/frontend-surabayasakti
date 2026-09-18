/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#E00D30", dark: "#B50A26" },
        secondary: { DEFAULT: "#4596F1", dark: "#2D7BDB" },
        ink: { DEFAULT: "#14181F", soft: "#4B5563" },
        surface: "#F5F6F8",
        line: "#E4E7EC",
        accent: { yellow: "#FDCB04", orange: "#EE6C1A" },
      },
    },
  },
  plugins: [],
};
