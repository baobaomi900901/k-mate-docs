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

const simplifyKeys = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key.replace("../../landing/assets/", ""), value]),
  );
};
// Glob 导入图片
const assetsUrls = simplifyKeys(
  import.meta.glob("../../landing/assets/**/*.{png,jpg,jpeg,webp,mp4}", {
    eager: true,
  }),
);

export function useAssets(lang, filename) {
  const path = `${lang}/${filename}`;
  if (assetsUrls[path]) {
    return assetsUrls[path].default;
  }
}
