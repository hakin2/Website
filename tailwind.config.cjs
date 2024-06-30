/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000842",
        secondary: "#ffffff",
        tertiary: "#000842",
        "black-100": "#1d4ed8",
        "black-200": "#000842",
        "white-100": "#ffffff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #ffffff",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/menu.jpg')",
      },
    },
  },
  plugins: [],
};
