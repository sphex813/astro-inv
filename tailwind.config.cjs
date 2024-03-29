/** @type {import('tailwindcss').Config} */
const formKitTailwind = require("@formkit/themes/tailwindcss");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Montserrat",
        paris: "Parisienne",
      },
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        primary: "#facc15",
        "primary-dark": "#ca8a04",
      },
    },
  },
  plugins: [formKitTailwind],
};
