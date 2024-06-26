const { theme } = require("@sanity/demo/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./intro-template/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...theme,
    colors: {
      ...theme.colors,
      green: "#50c878"
    },
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: "var(--font-mono)",
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
