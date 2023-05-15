const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}"
  ],
  theme: {
    colors: {
      primary: "#333333",
      secondary: "#222222",
      ...colors
    },
    extend: {},
  },
  plugins: [],
  // safelist: [
  //   {
  //     pattern: /./,
  //   },
  // ]
};
