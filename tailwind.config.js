/** @type {import('tailwindcss').Config} */
import langVariant from "./plugin/tailwindcss-language-variant";

export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.vue",
    "./docs/doc/**/*.{vue,md}",
    "./docs/.vitepress/theme/**/*.vue",
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
