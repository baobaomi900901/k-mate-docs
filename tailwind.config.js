/** @type {import('tailwindcss').Config} */
import langVariant from "./plugin/tailwindcss-language-variant";

export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./docs/**/*.{js,ts,vue,md}",
    "./docs/.vitepress/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    langVariant({
      languages: ["en-US", "zh-CN"],
      // mapLanguage: (lang) => {
      //   // 自定义映射逻辑
      //   // if (lang.startsWith("zh")) return "zh";
      //   return lang.split("-")[0];
      // },
    }),
  ],
};
