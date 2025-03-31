import zh from "./zh";
import en from "./en";

const languages = {
  zh,
  en,
};

// 导出获取当前语言的函数
export const i18n = (lang) => {
  // 默认回退到英文
  return languages[lang] || languages["zh"];
};
