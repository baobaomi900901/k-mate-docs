import config from "./config.js";

// 设置默认语言
const rootLocale = "zhHans";

const baseSidebarOptions = {
  useTitleFromFileHeading: true, // 启用后，会从文件头部的 title 标签获取标题
  useTitleFromFrontmatter: true, // 启用后，会从 frontmatter 中获取标题
  useFolderTitleFromIndexFile: true, //如果此值为true，则使用当前文件夹文件中的信息index.md来获取菜单名称。如果index.md文件不存在，则使用文件夹名称。
  useFolderLinkFromIndexFile: false, // 启用后，会将文件夹的名称作为链接，而不是文件夹下面的 index.md 文件
  useFolderLinkFromSameNameSubFile: false, //当存在与文件夹同名的子文件时,将在文件夹中创建一个链接,用于导航至该文件,而该文件不会显示在子项中
  folderLinkNotIncludesFileName: false, //在建立文件夹链接时，忽略子项的存在，并仅将链接指定为文件夹路径
  underscoreToSpace: true, // _转为空格
  capitalizeFirst: true, //首字母强制大写
  sortMenusByFrontmatterOrder: true, //按 frontmatter 的 order 属性对菜单项排序
  // sortMenusByFrontmatterDate: true, //根据前端的date属性对菜单项进行排序
  // sortMenusOrderByDescending: true, //如果此值为 true，则按降序排列菜单项中的项目
  frontmatterOrderDefaultValue: 9999, //设置 frontmatter 的 order 属性未设置时的默认值
  excludeFilesByFrontmatterFieldName: "exclude", //如果选项值为exclude,则菜单中不会显示内容包含exclude: true的文档
  collapsed: false, // 文件夹折叠
  collapseDepth: 4,
  // debugPrint: true,
};

const navConfig = {};
const vitePressSidebarConfig = [] as any;
const locales = new Set();

Object.entries(config).forEach(([path, translations]) => {
  const isExternalLink = path.startsWith("http"); // 判断是否是外部链接

  Object.entries(translations).forEach(([lang, text]) => {
    // 跳过特殊字段处理
    if (["base", "sidebar", "items"].includes(lang)) return;

    // 收集所有语言
    locales.add(lang);

    // 生成 navConfig
    if (!navConfig[lang]) {
      navConfig[lang] = { nav: [] };
    }
    // 检查是否有子菜单
    if (translations.items) {
      const subItems = Object.entries(translations.items).map(([subLink, subTranslations]) => ({
        text: subTranslations[lang],
        link: subLink,
      }));

      navConfig[lang].nav.push({
        text,
        items: subItems,
      });
    } else {
      // 动态生成 link
      const link = isExternalLink ? path : lang === rootLocale ? `/${path}` : `/${lang}/${path}`;
      // 生成带 base 的 link
      const baseLink = translations.base ? `${link}/${translations.base}` : link;

      const activeMatch = isExternalLink ? "" : `^${link}`;
      navConfig[lang].nav.push({ text, link: baseLink, activeMatch });
    }

    // 生成 vitePressSidebarConfig（仅对内部路径且 sidebar 不为 false）
    if (!isExternalLink && (translations as { sidebar?: boolean }).sidebar !== false) {
      const basePath = lang === rootLocale ? `/${path}/` : `/${lang}/${path}/`;
      vitePressSidebarConfig.push({
        ...baseSidebarOptions,
        basePath,
        documentRootPath: `/docs/doc/${lang}/${path}`,
        resolvePath: basePath,
      });
    }
  });
});

export { navConfig, vitePressSidebarConfig };

export const vitePressI18nConfig = {
  // VitePress I18n config
  locales: Array.from(locales),
  searchProvider: "local",
  themeConfig: navConfig,
};

// console.log("navConfig:", JSON.stringify(navConfig, null, 2));
// console.log("vitePressSidebarConfig:", JSON.stringify(vitePressSidebarConfig, null, 2));
// console.log("vitePressI18nConfig:", JSON.stringify(vitePressI18nConfig, null, 2));
