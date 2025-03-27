// tailwindcss-lang-variants.js
import plugin from "tailwindcss/plugin";

export default (options = {}) => {
  const {
    languages = ["zh", "en"],
    mapLanguage = (lang) => lang.split("-")[0], // 默认映射逻辑：取主语言代码
  } = options;

  // 生成带自定义映射的 values 对象
  const values = languages.reduce((acc, lang) => {
    const key = mapLanguage(lang);
    acc[key] = key;
    console.log(acc);
    return acc;
  }, {});

  return plugin(({ matchVariant }) => {
    matchVariant(
      "lang",
      (value, { modifier }) => {
        // 嵌入 modifier 到父选择器
        return modifier
          ? `[lang^="${value}"]:${modifier} &`
          : [`[lang^="${value}"] &`, `&[lang^="${value}"]`];
      },
      {
        values,
      },
    );
  });
};
