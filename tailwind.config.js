import { combinedColors, screens } from "./src/configs/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    colors: combinedColors,
    extend: {},
    screens: screens,
  },
  plugins: [],
  // safelist: [
  //   {
  //     pattern: /.*/,
  //     variants: ["hover"],
  //   },
  // ],
};
