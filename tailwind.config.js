/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          oscuro: "#1a6b2a",
          medio: "#2d9e3f",
          claro: "#5ec45e",
        },
        negro: "#111111",
        gris: {
          oscuro: "#222222",
          medio: "#555555",
          claro: "#f4f4f2",
        },
      },
      fontFamily: {
        display: ["Barlow Condensed", "sans-serif"],
        body: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};