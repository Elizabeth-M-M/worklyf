/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#B1D199",
      purple: "#AA9AFE",
      "pink-dark": "#FF7360",
      "pink-light": "#db7264",
      orange: "#F7A94C",
      green: "#B1D199",
      "gray-dark": "#313642",
      "gray-lighter": "#d9dbe0",
      "gray-light": "#3E4553",
      black: "#000",
      white: "#fff",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
