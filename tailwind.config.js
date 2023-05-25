import { combinedColors } from "./src/configs/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    colors: combinedColors,
    extend: {},
  },
  plugins: [],
  // safelist: [
  //   {
  //     pattern: /.*/,
  //     variants: ["hover"],
  //   },
  // ],
};
