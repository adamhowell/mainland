import { combinedColors } from "./src/configs/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  // purge: [
  //   './dist/**/*.html',
  //   './src/**/*.{html,js,jsx}',
  //   './components/**/*.{html,js,jsx}',
  // ],
  content: [
    "./src/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}"
  ],
  theme: {
    colors: combinedColors,
    extend: {},
  },
  plugins: [],
  // safelist: [
  //   {
  //     pattern: /./,
  //   },
  // ]
};
