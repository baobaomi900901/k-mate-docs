import config from './config.json';

// 设置默认语言
const rootLocale = 'zhHans'

const baseSidebarOptions = {
  useTitleFromFileHeading: true, // 启用后，会从文件头部的 title 标签获取标题
  useTitleFromFrontmatter: true, // 启用后，会从 frontmatter 中获取标题
  useFolderTitleFromIndexFile: true, //如果此值为true，则使用当前文件夹文件中的信息index.md来获取菜单名称。如果index.md文件不存在，则使用文件夹名称。
  useFolderLinkFromIndexFile: false, // 启用后，会将文件夹的名称作为链接，而不是文件夹下面的 index.md 文件
  useFolderLinkFromSameNameSubFile: false, //当存在与文件夹同名的子文件时,将在文件夹中创建一个链接,用于导航至该文件,而该文件不会显示在子项中
  folderLinkNotIncludesFileName: false, //在建立文件夹链接时，忽略子项的存在，并仅将链接指定为文件夹路径
  underscoreToSpace: true, // _转为空格
  capitalizeFirst: true, //首字母强制大写
  // sortMenusByFrontmatterDate: true, // 启用日期排序
  sortMenusByFrontmatterOrder: true, // 按名称排序菜单
  sortMenusOrderByDescending: true, // 升序
  collapsed: false, // 文件夹折叠
  collapseDepth: 4,
  // debugPrint: true,
};

const navConfig = {};
const vitePressSidebarConfig = [] as any;
const supportedLocales = new Set();

Object.entries(config).forEach(([path, translations]) => {
  const isExternalLink = path.startsWith('http'); // 判断是否是外部链接

  Object.entries(translations).forEach(([lang, text]) => {
    if (lang === "Sidebar") return; // 跳过 Sidebar 字段

    // 收集所有语言
    supportedLocales.add(lang);

    // 生成 navConfig
    if (!navConfig[lang]) {
      navConfig[lang] = { nav: [] };
    }
    const link = isExternalLink ? path : (lang === rootLocale ? `/${path}` : `/${lang}/${path}`); // 动态生成 link
    navConfig[lang].nav.push({ text, link });

    // 生成 vitePressSidebarConfig（仅对内部路径且 Sidebar 不为 false）
    if (!isExternalLink && (translations as { Sidebar?: boolean }).Sidebar !== false) {
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

export {navConfig, vitePressSidebarConfig}

export const vitePressI18nConfig = {
  // VitePress I18n config
  locales: Array.from(supportedLocales),
  searchProvider: 'local',
  themeConfig: navConfig,
};

// console.log("navConfig:", JSON.stringify(navConfig, null, 2));
// console.log("vitePressSidebarConfig:", JSON.stringify(vitePressSidebarConfig, null, 2));
// console.log("vitePressI18nConfig:", JSON.stringify(vitePressI18nConfig, null, 2));