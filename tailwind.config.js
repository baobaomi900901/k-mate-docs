/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./docs/**/*.{js,ts,vue,md}",
    './docs/.vitepress/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
