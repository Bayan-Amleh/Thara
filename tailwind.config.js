/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "!./node_modules/**"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#1f3a2d", dark: "#142619", light: "#2f5442" },
        cream: { DEFAULT: "#efe6d0", card: "#f7f1e1", line: "#d9ccab" },
        gold: { DEFAULT: "#b88a2e", light: "#e0c27a", dark: "#8a6414" },
        ink: { DEFAULT: "#26231c", soft: "#6b6454" },
        success: "#3d7a4f",
        danger: "#a8402f",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["3.5rem", "1.1"],
        h2: ["2.25rem", "1.2"],
        h3: ["1.5rem", "1.3"],
        body: ["1rem", "1.7"],
        small: ["0.875rem", "1.5"],
      },
      borderRadius: { btn: "0.5rem", card: "0.75rem" },
      boxShadow: { card: "0 2px 10px rgba(31, 58, 45, 0.12)" },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
