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

// 处理多语言资源
// 采用以下形式的对象：
// {
//   "../assets/home.png": "/assets/home.12345678.png",
//   "../assets/logout.png": "/assets/logout.12345678.png"
// }
// 将其映射到具有更简单属性键的一个上：
// {
//   "home": "/assets/home.12345678.png",
//   "logout": "/assets/logout.12345678.png"
// }
const simplifyKeys = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key.replace("../assets/", ""), value]),
  );
};
// Glob 导入图片
const assetsUrls = simplifyKeys(
  import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,mp4}", {
    eager: true,
  }),
);

export function useAssets(lang, filename) {
  const path = `${lang}/${filename}`;
  if (assetsUrls[path]) {
    return assetsUrls[path].default;
  }
}
