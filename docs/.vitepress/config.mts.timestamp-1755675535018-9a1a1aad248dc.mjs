var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// docs/.vitepress/plugin/markdown-it-paragraph-ids.cjs
var require_markdown_it_paragraph_ids = __commonJS({
  "docs/.vitepress/plugin/markdown-it-paragraph-ids.cjs"(exports, module) {
    function generateUniqueID() {
      const uuid = crypto.randomUUID().toString().replaceAll("-", "");
      const start = Math.floor(Math.random() * (uuid.length - 8));
      return uuid.substr(start, 8);
    }
    module.exports = function(md) {
      const defaultRender = md.renderer.rules.paragraph_open || function(tokens, idx, options, env2, self) {
        return self.renderToken(tokens, idx, options);
      };
      md.renderer.rules.paragraph_open = function(tokens, idx, options, env2, self) {
        tokens[idx].attrs = tokens[idx].attrs || [];
        tokens[idx].attrs.push(["id", generateUniqueID()]);
        return defaultRender(tokens, idx, options, env2, self);
      };
    };
  }
});

// docs/.vitepress/config.mts
var import_markdown_it_paragraph_ids = __toESM(require_markdown_it_paragraph_ids(), 1);
import { defineConfig } from "file:///D:/code/k-mate-docs/node_modules/vitepress/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import path2 from "path";
import del from "file:///D:/code/k-mate-docs/node_modules/rollup-plugin-delete/dist/index.js";

// docs/.vitepress/plugin/markdown-it-ignore-images.js
import path from "path";
import fs from "fs";
function ignoreMissingImages(md) {
  const defaultImageRender = md.renderer.rules.image;
  md.renderer.rules.image = (tokens, idx, options, env2, self) => {
    const token = tokens[idx];
    const src = token.attrGet("src");
    const decodedSrc = decodeURIComponent(src);
    if (src && env2.realPath) {
      try {
        const fileDir = path.dirname(env2.realPath);
        const imagePath = path.resolve(fileDir, decodedSrc);
        if (!fs.existsSync(imagePath)) {
          console.log(`[ignore-images]: Image missing ${decodedSrc}`);
          return "";
        }
      } catch (e) {
        console.warn(`[ignore-images] Error checking ${decodedSrc}:`, e.message);
        return "";
      }
    }
    return defaultImageRender(tokens, idx, options, env2, self);
  };
}

// docs/.vitepress/config.mts
import MiniSearch from "file:///D:/code/k-mate-docs/node_modules/minisearch/dist/es/index.js";
import { withSidebar } from "file:///D:/code/k-mate-docs/node_modules/vitepress-sidebar/dist/index.js";
import { withI18n } from "file:///D:/code/k-mate-docs/node_modules/vitepress-i18n/dist/index.js";

// docs/.vitepress/plugin/loadEnv.js
import { loadEnv } from "file:///D:/code/k-mate-docs/node_modules/vitepress/dist/node/index.js";
var mode = process.env.VP_MODE || "main";
var env = loadEnv(mode, process.cwd(), "VITEPRESS_");

// docs/.vitepress/navs/config.js
var config = {
  guide: {
    zhHans: "\u5165\u95E8\u6307\u5357",
    base: "introduction"
  },
  HelpDoc: {
    zhHans: "\u5E2E\u52A9\u6587\u6863",
    en: "Help document",
    base: "Conditional/IF Condition"
  },
  UserDoc: {
    zhHans: "\u7528\u6237\u624B\u518C",
    base: "K-RPA Lite User Manual"
  },
  FAQ: {
    zhHans: "\u5E38\u89C1\u95EE\u9898",
    en: "FAQ",
    base: "FirstInstall"
  },
  Download: {
    zhHans: "\u4E0B\u8F7D\u4E2D\u5FC3 ",
    en: "Download Center",
    sidebar: false
  }
};
if (mode !== "private") {
  config[env.VITEPRESS_TUTORIAL_DEMO] = {
    zhHans: "\u6559\u5B66\u73AF\u5883 ",
    sidebar: false
  };
}

// docs/.vitepress/navs/i18nNavs.ts
var rootLocale = "zhHans";
var baseSidebarOptions = {
  useTitleFromFileHeading: true,
  // 启用后，会从文件头部的 title 标签获取标题
  useTitleFromFrontmatter: true,
  // 启用后，会从 frontmatter 中获取标题
  useFolderTitleFromIndexFile: true,
  //如果此值为true，则使用当前文件夹文件中的信息index.md来获取菜单名称。如果index.md文件不存在，则使用文件夹名称。
  useFolderLinkFromIndexFile: false,
  // 启用后，会将文件夹的名称作为链接，而不是文件夹下面的 index.md 文件
  useFolderLinkFromSameNameSubFile: false,
  //当存在与文件夹同名的子文件时,将在文件夹中创建一个链接,用于导航至该文件,而该文件不会显示在子项中
  folderLinkNotIncludesFileName: false,
  //在建立文件夹链接时，忽略子项的存在，并仅将链接指定为文件夹路径
  underscoreToSpace: true,
  // _转为空格
  capitalizeFirst: true,
  //首字母强制大写
  sortMenusByFrontmatterOrder: true,
  //按 frontmatter 的 order 属性对菜单项排序
  // sortMenusByFrontmatterDate: true, //根据前端的date属性对菜单项进行排序
  // sortMenusOrderByDescending: true, //如果此值为 true，则按降序排列菜单项中的项目
  frontmatterOrderDefaultValue: 9999,
  //设置 frontmatter 的 order 属性未设置时的默认值
  excludeFilesByFrontmatterFieldName: "exclude",
  //如果选项值为exclude,则菜单中不会显示内容包含exclude: true的文档
  collapsed: false,
  // 文件夹折叠
  collapseDepth: 4
  // debugPrint: true,
};
var navConfig = {};
var vitePressSidebarConfig = [];
var locales = /* @__PURE__ */ new Set();
Object.entries(config).forEach(([path3, translations]) => {
  const isExternalLink = path3.startsWith("http");
  Object.entries(translations).forEach(([lang, text]) => {
    if (["base", "sidebar", "items"].includes(lang)) return;
    locales.add(lang);
    if (!navConfig[lang]) {
      navConfig[lang] = { nav: [] };
    }
    if (translations.items) {
      const subItems = Object.entries(translations.items).map(([subLink, subTranslations]) => ({
        text: subTranslations[lang],
        link: subLink
      }));
      navConfig[lang].nav.push({
        text,
        items: subItems
      });
    } else {
      const link = isExternalLink ? path3 : lang === rootLocale ? `/${path3}` : `/${lang}/${path3}`;
      const baseLink = translations.base ? `${link}/${translations.base}` : link;
      const activeMatch = isExternalLink ? "" : `^${link}`;
      navConfig[lang].nav.push({ text, link: baseLink, activeMatch });
    }
    if (!isExternalLink && translations.sidebar !== false) {
      const basePath = lang === rootLocale ? `/${path3}/` : `/${lang}/${path3}/`;
      vitePressSidebarConfig.push({
        ...baseSidebarOptions,
        basePath,
        documentRootPath: `/docs/doc/${lang}/${path3}`,
        resolvePath: basePath
      });
    }
  });
});
var vitePressI18nConfig = {
  // VitePress I18n config
  locales: Array.from(locales),
  searchProvider: "local",
  themeConfig: navConfig
};

// docs/.vitepress/config.mts
import llmstxt from "file:///D:/code/k-mate-docs/node_modules/vitepress-plugin-llms/dist/index.js";
var __vite_injected_original_dirname = "D:\\code\\k-mate-docs\\docs\\.vitepress";
var __vite_injected_original_import_meta_url = "file:///D:/code/k-mate-docs/docs/.vitepress/config.mts";
var suffixes = (term, minLength) => {
  if (term == null) {
    return;
  }
  const tokens = [];
  for (let i = 0; i <= term.length - minLength; i++) {
    tokens.push(term.slice(i));
  }
  return tokens;
};
var isLocalSearch = env.VITEPRESS_SEARCH_PROVIDER === "local";
var searchConfig = isLocalSearch ? {
  search: {
    provider: "local",
    options: {
      detailedView: true,
      miniSearch: {
        options: {
          processTerm: (term) => suffixes(term, 2)
        },
        searchOptions: {
          processTerm: MiniSearch.getDefault("processTerm")
        }
      }
    }
  }
} : {
  search: false,
  meilisearch: {
    host: "https://meilisearch.donxj.com",
    apiKey: "646f90bf02522026b531be2d4d491ba1e2721802f43b72ae72f0a2e5eeca711a",
    indexUid: env.VITEPRESS_MEILISEARCH_INDEX_UID || "",
    locales: {
      en: {
        indexUid: env.VITEPRESS_MEILISEARCH_INDEX_UID_EN || "",
        translations: {
          button: { buttonText: "Search" },
          modal: {
            searchDocsPlaceHolder: "Search documentation...",
            resetButtonTitle: "Reset search",
            cancelButtonText: "Cancel",
            selectText: "Select",
            navigateText: "Navigate",
            closeText: "Close",
            poweredByText: "Powered by"
          }
        }
      }
    }
  }
};
var vitePlugins = mode === "private" ? [] : [
  llmstxt({
    generateLLMsFullTxt: true,
    ignoreFiles: ["*/about.md", "*/index.md"],
    workDir: "doc/zhHans",
    domain: "https://krpalite.com"
    // customLLMsTxtTemplate: `# {title}\n\n{foo}`,
    // title: "Awesome tool",
    // customTemplateVariables: {
    //   foo: "bar",
    // },
  })
];
var vitePressConfig = {
  base: env.VITEPRESS_BASE,
  lang: "zh-CN",
  title: "K-RPA Lite",
  description: "",
  vite: {
    define: {
      "import.meta.env.VITEPRESS_ICP": JSON.stringify(env.VITEPRESS_ICP),
      "import.meta.env.VITEPRESS_DIFY_URL": JSON.stringify(env.VITEPRESS_DIFY_URL),
      "import.meta.env.VP_MODE": JSON.stringify(mode)
    },
    plugins: vitePlugins,
    resolve: {
      // 自定义替换默认组件
      alias: [
        {
          find: "~",
          replacement: path2.resolve(__vite_injected_original_dirname, "../../")
        },
        ...isLocalSearch ? [
          {
            find: /^.*\/VPLocalSearchBox\.vue$/,
            replacement: fileURLToPath(
              new URL("./theme/components/MyCustomSearchBox.vue", __vite_injected_original_import_meta_url)
            )
          }
        ] : [
          {
            find: /^.*\/VPNavBarSearch\.vue$/,
            replacement: fileURLToPath(
              new URL("./theme/components/MeiliSearchBox/MeiliSearchBox.vue", __vite_injected_original_import_meta_url)
            )
          }
        ]
      ]
    },
    ssr: {
      noExternal: ["gsap", "gsap/*", "ksw-vue-icon", "@ksware/ksw-ux"]
    },
    // Network
    server: {
      host: "0.0.0.0",
      port: 3e3
    },
    esbuild: {
      // minifySyntax: false,
      // minifyWhitespace: false,
      // minifyIdentifiers: false,
      // drop: ['console', 'debugger']
    },
    build: {
      rollupOptions: {
        plugins: [
          del({
            targets: [env.VITEPRESS_DEL_TARGETS, "./docs/.vitepress/cache/*"],
            runOnce: true
          })
        ],
        output: {
          chunkFileNames: "assets/js/chunks/[name]-[hash].js",
          assetFileNames: ({ name }) => {
            if (/\.(woff2?|ttf|eot)$/.test(name ?? "")) {
              return "assets/fonts/[name]-[hash][extname]";
            }
            if (/\.(png|jpe?g|gif|webp|avif)$/.test(name ?? "")) {
              return "assets/img/[name]-[hash][extname]";
            }
            return "assets/[ext]/[name]-[hash][extname]";
          },
          manualChunks: (id) => {
          }
        }
      }
    }
  },
  // 优化搜索引擎结果
  head: [
    // 使用 cdn
    // [
    //   'link',
    //   {
    //     rel: 'preload stylesheet',
    //     href: 'https://cdn.jsdelivr.net/npm/@ksware/ksw-ux/kingsware-ui/style.min.css',
    //     as: 'style',
    //     'data-cdn': 'ksw-css'
    //   }
    // ],
    // // 修改 css 顺序
    // [
    //   'script',
    //   {},
    //   `
    //   const kswCssLink = document.querySelector('link[data-cdn="ksw-css"]');
    //   if (kswCssLink) {
    //     document.head.insertBefore(kswCssLink, document.head.firstChild);
    //   } else {
    //     console.error('ksw-css link not found!');
    //   }
    //   `
    // ],
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: `${env.VITEPRESS_BASE}k-rpa-lite-logo.svg` }
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh" }],
    [
      "meta",
      {
        property: "og:title",
        content: "KRPA"
      }
    ],
    ["meta", { property: "og:site_name", content: "KRPA Lite" }]
  ],
  themeConfig: {
    logo: { src: "/k-rpa-lite-logo.svg", width: 32, height: 32 },
    ...searchConfig,
    outline: {
      level: "deep"
    },
    ICP: "\u7CA4ICP\u59072022023946\u53F7-2"
  },
  rewrites: {
    "doc/zhHans/:rest*": ":rest*",
    "doc/:rest*": ":rest*"
  },
  cleanUrls: true,
  markdown: {
    config: (md) => {
      md.use(ignoreMissingImages);
      md.use(import_markdown_it_paragraph_ids.default);
    }
  },
  assetsDir: "assets/js",
  outDir: env.VITEPRESS_OUTDIR,
  metaChunk: true,
  sitemap: {
    hostname: env.VITEPRESS_SITEAMP
  }
};
var i18nconfig = withSidebar(
  withI18n(vitePressConfig, vitePressI18nConfig),
  vitePressSidebarConfig
);
var config_default = defineConfig(i18nconfig);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL3BsdWdpbi9tYXJrZG93bi1pdC1wYXJhZ3JhcGgtaWRzLmNqcyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnLm10cyIsICJkb2NzLy52aXRlcHJlc3MvcGx1Z2luL21hcmtkb3duLWl0LWlnbm9yZS1pbWFnZXMuanMiLCAiZG9jcy8udml0ZXByZXNzL3BsdWdpbi9sb2FkRW52LmpzIiwgImRvY3MvLnZpdGVwcmVzcy9uYXZzL2NvbmZpZy5qcyIsICJkb2NzLy52aXRlcHJlc3MvbmF2cy9pMThuTmF2cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcay1tYXRlLWRvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHBsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxrLW1hdGUtZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxccGx1Z2luXFxcXG1hcmtkb3duLWl0LXBhcmFncmFwaC1pZHMuY2pzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL2stbWF0ZS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9wbHVnaW4vbWFya2Rvd24taXQtcGFyYWdyYXBoLWlkcy5janNcIjsvLyBcdTc1MUZcdTYyMTBcdTU1MkZcdTRFMDBpZFxyXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlEKCkge1xyXG4gIC8vIFx1NzUxRlx1NjIxMFx1NEUwMFx1NEUzMiBVVUlEIFx1NUI1N1x1N0IyNlx1NEUzMlxyXG4gIGNvbnN0IHV1aWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpLnRvU3RyaW5nKCkucmVwbGFjZUFsbChcIi1cIiwgXCJcIik7XHJcbiAgLy8gXHU0RUNFIFVVSUQgXHU1QjU3XHU3QjI2XHU0RTMyXHU0RTJEXHU5NjhGXHU2NzNBXHU2MjJBXHU1M0Q2IDggXHU0RTJBXHU1QjU3XHU3QjI2XHJcbiAgY29uc3Qgc3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodXVpZC5sZW5ndGggLSA4KSk7XHJcbiAgcmV0dXJuIHV1aWQuc3Vic3RyKHN0YXJ0LCA4KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWQpIHtcclxuICBjb25zdCBkZWZhdWx0UmVuZGVyID0gbWQucmVuZGVyZXIucnVsZXMucGFyYWdyYXBoX29wZW4gfHwgZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNlbGYpIHtcclxuICAgIHJldHVybiBzZWxmLnJlbmRlclRva2VuKHRva2VucywgaWR4LCBvcHRpb25zKTtcclxuICB9O1xyXG5cclxuICBtZC5yZW5kZXJlci5ydWxlcy5wYXJhZ3JhcGhfb3BlbiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzZWxmKSB7XHJcblxyXG4gICAgLy8gXHU2REZCXHU1MkEwXHU0RTAwXHU0RTJBXHU1NTJGXHU0RTAwXHU3Njg0SURcclxuICAgIC8vIGNvbnN0IHVuaXF1ZUlEID0gZ2VuZXJhdGVVbmlxdWVJRCgpXHJcbiAgICB0b2tlbnNbaWR4XS5hdHRycyA9IHRva2Vuc1tpZHhdLmF0dHJzIHx8IFtdO1xyXG4gICAgdG9rZW5zW2lkeF0uYXR0cnMucHVzaChbJ2lkJywgIGdlbmVyYXRlVW5pcXVlSUQoKV0pO1xyXG5cclxuICAgIC8vIFx1OEMwM1x1NzUyOFx1OUVEOFx1OEJBNFx1NzY4NFx1NkUzMlx1NjdEM1x1NTFGRFx1NjU3MFxyXG4gICAgcmV0dXJuIGRlZmF1bHRSZW5kZXIodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZik7XHJcbiAgfTtcclxufTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcay1tYXRlLWRvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGstbWF0ZS1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL2stbWF0ZS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGRlbCBmcm9tIFwicm9sbHVwLXBsdWdpbi1kZWxldGVcIjtcclxuaW1wb3J0IHBhcmFncmFwaElkcyBmcm9tIFwiLi9wbHVnaW4vbWFya2Rvd24taXQtcGFyYWdyYXBoLWlkcy5janNcIjtcclxuaW1wb3J0IHsgaWdub3JlTWlzc2luZ0ltYWdlcyB9IGZyb20gXCIuL3BsdWdpbi9tYXJrZG93bi1pdC1pZ25vcmUtaW1hZ2VzXCI7XHJcbmltcG9ydCBNaW5pU2VhcmNoIGZyb20gXCJtaW5pc2VhcmNoXCI7XHJcbmltcG9ydCB7IHdpdGhTaWRlYmFyIH0gZnJvbSBcInZpdGVwcmVzcy1zaWRlYmFyXCI7XHJcbmltcG9ydCB7IHdpdGhJMThuIH0gZnJvbSBcInZpdGVwcmVzcy1pMThuXCI7XHJcbmltcG9ydCB7IHZpdGVQcmVzc1NpZGViYXJDb25maWcsIHZpdGVQcmVzc0kxOG5Db25maWcgfSBmcm9tIFwiLi9uYXZzL2kxOG5OYXZzXCI7XHJcbmltcG9ydCBsbG1zdHh0IGZyb20gXCJ2aXRlcHJlc3MtcGx1Z2luLWxsbXNcIjtcclxuXHJcbi8vIFx1NTJBMFx1OEY3RFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxyXG5pbXBvcnQgeyBtb2RlLCBlbnYgfSBmcm9tIFwiLi9wbHVnaW4vbG9hZEVudlwiO1xyXG5cclxuLy8gXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyXHU1MjA2XHU4QkNEXHJcbmNvbnN0IHN1ZmZpeGVzID0gKHRlcm0sIG1pbkxlbmd0aCkgPT4ge1xyXG4gIGlmICh0ZXJtID09IG51bGwpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgdG9rZW5zID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGVybS5sZW5ndGggLSBtaW5MZW5ndGg7IGkrKykge1xyXG4gICAgdG9rZW5zLnB1c2godGVybS5zbGljZShpKSk7XHJcbiAgfVxyXG4gIHJldHVybiB0b2tlbnM7XHJcbn07XHJcblxyXG5jb25zdCBpc0xvY2FsU2VhcmNoID0gZW52LlZJVEVQUkVTU19TRUFSQ0hfUFJPVklERVIgPT09IFwibG9jYWxcIjtcclxuLy8gXHU3NTFGXHU2MjEwXHU2NDFDXHU3RDIyXHU5MTREXHU3RjZFXHJcbmNvbnN0IHNlYXJjaENvbmZpZyA9IGlzTG9jYWxTZWFyY2hcclxuICA/IHtcclxuICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgcHJvdmlkZXI6IFwibG9jYWxcIixcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBkZXRhaWxlZFZpZXc6IHRydWUsXHJcbiAgICAgICAgICBtaW5pU2VhcmNoOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICBwcm9jZXNzVGVybTogKHRlcm0pID0+IHN1ZmZpeGVzKHRlcm0sIDIpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWFyY2hPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgcHJvY2Vzc1Rlcm06IE1pbmlTZWFyY2guZ2V0RGVmYXVsdChcInByb2Nlc3NUZXJtXCIpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIDoge1xyXG4gICAgICBzZWFyY2g6IGZhbHNlLFxyXG4gICAgICBtZWlsaXNlYXJjaDoge1xyXG4gICAgICAgIGhvc3Q6IFwiaHR0cHM6Ly9tZWlsaXNlYXJjaC5kb254ai5jb21cIixcclxuICAgICAgICBhcGlLZXk6IFwiNjQ2ZjkwYmYwMjUyMjAyNmI1MzFiZTJkNGQ0OTFiYTFlMjcyMTgwMmY0M2I3MmFlNzJmMGEyZTVlZWNhNzExYVwiLFxyXG4gICAgICAgIGluZGV4VWlkOiBlbnYuVklURVBSRVNTX01FSUxJU0VBUkNIX0lOREVYX1VJRCB8fCBcIlwiLFxyXG4gICAgICAgIGxvY2FsZXM6IHtcclxuICAgICAgICAgIGVuOiB7XHJcbiAgICAgICAgICAgIGluZGV4VWlkOiBlbnYuVklURVBSRVNTX01FSUxJU0VBUkNIX0lOREVYX1VJRF9FTiB8fCBcIlwiLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgICAgICBidXR0b246IHsgYnV0dG9uVGV4dDogXCJTZWFyY2hcIiB9LFxyXG4gICAgICAgICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hEb2NzUGxhY2VIb2xkZXI6IFwiU2VhcmNoIGRvY3VtZW50YXRpb24uLi5cIixcclxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6IFwiUmVzZXQgc2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogXCJTZWxlY3RcIixcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogXCJOYXZpZ2F0ZVwiLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VUZXh0OiBcIkNsb3NlXCIsXHJcbiAgICAgICAgICAgICAgICBwb3dlcmVkQnlUZXh0OiBcIlBvd2VyZWQgYnlcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbi8vIFx1NjgzOVx1NjM2RVx1NzNBRlx1NTg4M1x1NTFCM1x1NUI5QVx1NjYyRlx1NTQyNlx1NEY3Rlx1NzUyOGxsbXN0eHRcdTYzRDJcdTRFRjYsXHU1OTgyXHU2NzlDXHU2NjJGXHU3OUMxXHU2NzA5XHU1MzE2XHU1MjE5XHU0RTBEXHU0RjdGXHU3NTI4XHJcbmNvbnN0IHZpdGVQbHVnaW5zID1cclxuICBtb2RlID09PSBcInByaXZhdGVcIlxyXG4gICAgPyBbXVxyXG4gICAgOiBbXHJcbiAgICAgICAgbGxtc3R4dCh7XHJcbiAgICAgICAgICBnZW5lcmF0ZUxMTXNGdWxsVHh0OiB0cnVlLFxyXG4gICAgICAgICAgaWdub3JlRmlsZXM6IFtcIiovYWJvdXQubWRcIiwgXCIqL2luZGV4Lm1kXCJdLFxyXG4gICAgICAgICAgd29ya0RpcjogXCJkb2MvemhIYW5zXCIsXHJcbiAgICAgICAgICBkb21haW46IFwiaHR0cHM6Ly9rcnBhbGl0ZS5jb21cIixcclxuICAgICAgICAgIC8vIGN1c3RvbUxMTXNUeHRUZW1wbGF0ZTogYCMge3RpdGxlfVxcblxcbntmb299YCxcclxuICAgICAgICAgIC8vIHRpdGxlOiBcIkF3ZXNvbWUgdG9vbFwiLFxyXG4gICAgICAgICAgLy8gY3VzdG9tVGVtcGxhdGVWYXJpYWJsZXM6IHtcclxuICAgICAgICAgIC8vICAgZm9vOiBcImJhclwiLFxyXG4gICAgICAgICAgLy8gfSxcclxuICAgICAgICB9KSxcclxuICAgICAgXTtcclxuXHJcbmNvbnN0IHZpdGVQcmVzc0NvbmZpZyA9IHtcclxuICBiYXNlOiBlbnYuVklURVBSRVNTX0JBU0UsXHJcbiAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gIHRpdGxlOiBcIkstUlBBIExpdGVcIixcclxuICBkZXNjcmlwdGlvbjogXCJcIixcclxuICB2aXRlOiB7XHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgXCJpbXBvcnQubWV0YS5lbnYuVklURVBSRVNTX0lDUFwiOiBKU09OLnN0cmluZ2lmeShlbnYuVklURVBSRVNTX0lDUCksXHJcbiAgICAgIFwiaW1wb3J0Lm1ldGEuZW52LlZJVEVQUkVTU19ESUZZX1VSTFwiOiBKU09OLnN0cmluZ2lmeShlbnYuVklURVBSRVNTX0RJRllfVVJMKSxcclxuICAgICAgXCJpbXBvcnQubWV0YS5lbnYuVlBfTU9ERVwiOiBKU09OLnN0cmluZ2lmeShtb2RlKSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiB2aXRlUGx1Z2lucyxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2NkZGXHU2MzYyXHU5RUQ4XHU4QkE0XHU3RUM0XHU0RUY2XHJcbiAgICAgIGFsaWFzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmluZDogXCJ+XCIsXHJcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi8uLi9cIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi4oaXNMb2NhbFNlYXJjaFxyXG4gICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmluZDogL14uKlxcL1ZQTG9jYWxTZWFyY2hCb3hcXC52dWUkLyxcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiBmaWxlVVJMVG9QYXRoKFxyXG4gICAgICAgICAgICAgICAgICBuZXcgVVJMKFwiLi90aGVtZS9jb21wb25lbnRzL015Q3VzdG9tU2VhcmNoQm94LnZ1ZVwiLCBpbXBvcnQubWV0YS51cmwpLFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaW5kOiAvXi4qXFwvVlBOYXZCYXJTZWFyY2hcXC52dWUkLyxcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiBmaWxlVVJMVG9QYXRoKFxyXG4gICAgICAgICAgICAgICAgICBuZXcgVVJMKFwiLi90aGVtZS9jb21wb25lbnRzL01laWxpU2VhcmNoQm94L01laWxpU2VhcmNoQm94LnZ1ZVwiLCBpbXBvcnQubWV0YS51cmwpLFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBzc3I6IHtcclxuICAgICAgbm9FeHRlcm5hbDogW1wiZ3NhcFwiLCBcImdzYXAvKlwiLCBcImtzdy12dWUtaWNvblwiLCBcIkBrc3dhcmUva3N3LXV4XCJdLFxyXG4gICAgfSxcclxuICAgIC8vIE5ldHdvcmtcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBob3N0OiBcIjAuMC4wLjBcIixcclxuICAgICAgcG9ydDogMzAwMCxcclxuICAgIH0sXHJcbiAgICBlc2J1aWxkOiB7XHJcbiAgICAgIC8vIG1pbmlmeVN5bnRheDogZmFsc2UsXHJcbiAgICAgIC8vIG1pbmlmeVdoaXRlc3BhY2U6IGZhbHNlLFxyXG4gICAgICAvLyBtaW5pZnlJZGVudGlmaWVyczogZmFsc2UsXHJcbiAgICAgIC8vIGRyb3A6IFsnY29uc29sZScsICdkZWJ1Z2dlciddXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgIGRlbCh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IFtlbnYuVklURVBSRVNTX0RFTF9UQVJHRVRTLCBcIi4vZG9jcy8udml0ZXByZXNzL2NhY2hlLypcIl0sXHJcbiAgICAgICAgICAgIHJ1bk9uY2U6IHRydWUsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwiYXNzZXRzL2pzL2NodW5rcy9bbmFtZV0tW2hhc2hdLmpzXCIsXHJcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogKHsgbmFtZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgvXFwuKHdvZmYyP3x0dGZ8ZW90KSQvLnRlc3QobmFtZSA/PyBcIlwiKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcImFzc2V0cy9mb250cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9cXC4ocG5nfGpwZT9nfGdpZnx3ZWJwfGF2aWYpJC8udGVzdChuYW1lID8/IFwiXCIpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiYXNzZXRzL2ltZy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1cIjtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtYW51YWxDaHVua3M6IChpZCkgPT4ge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8gXHU0RjE4XHU1MzE2XHU2NDFDXHU3RDIyXHU1RjE1XHU2NENFXHU3RUQzXHU2NzlDXHJcbiAgaGVhZDogW1xyXG4gICAgLy8gXHU0RjdGXHU3NTI4IGNkblxyXG4gICAgLy8gW1xyXG4gICAgLy8gICAnbGluaycsXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICByZWw6ICdwcmVsb2FkIHN0eWxlc2hlZXQnLFxyXG4gICAgLy8gICAgIGhyZWY6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0Brc3dhcmUva3N3LXV4L2tpbmdzd2FyZS11aS9zdHlsZS5taW4uY3NzJyxcclxuICAgIC8vICAgICBhczogJ3N0eWxlJyxcclxuICAgIC8vICAgICAnZGF0YS1jZG4nOiAna3N3LWNzcydcclxuICAgIC8vICAgfVxyXG4gICAgLy8gXSxcclxuICAgIC8vIC8vIFx1NEZFRVx1NjUzOSBjc3MgXHU5ODdBXHU1RThGXHJcbiAgICAvLyBbXHJcbiAgICAvLyAgICdzY3JpcHQnLFxyXG4gICAgLy8gICB7fSxcclxuICAgIC8vICAgYFxyXG4gICAgLy8gICBjb25zdCBrc3dDc3NMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tkYXRhLWNkbj1cImtzdy1jc3NcIl0nKTtcclxuICAgIC8vICAgaWYgKGtzd0Nzc0xpbmspIHtcclxuICAgIC8vICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShrc3dDc3NMaW5rLCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQpO1xyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoJ2tzdy1jc3MgbGluayBub3QgZm91bmQhJyk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgYFxyXG4gICAgLy8gXSxcclxuICAgIFtcclxuICAgICAgXCJsaW5rXCIsXHJcbiAgICAgIHsgcmVsOiBcImljb25cIiwgdHlwZTogXCJpbWFnZS9zdmcreG1sXCIsIGhyZWY6IGAke2Vudi5WSVRFUFJFU1NfQkFTRX1rLXJwYS1saXRlLWxvZ28uc3ZnYCB9LFxyXG4gICAgXSxcclxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzp0eXBlXCIsIGNvbnRlbnQ6IFwid2Vic2l0ZVwiIH1dLFxyXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOmxvY2FsZVwiLCBjb250ZW50OiBcInpoXCIgfV0sXHJcbiAgICBbXHJcbiAgICAgIFwibWV0YVwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvcGVydHk6IFwib2c6dGl0bGVcIixcclxuICAgICAgICBjb250ZW50OiBcIktSUEFcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6c2l0ZV9uYW1lXCIsIGNvbnRlbnQ6IFwiS1JQQSBMaXRlXCIgfV0sXHJcbiAgXSxcclxuXHJcbiAgdGhlbWVDb25maWc6IHtcclxuICAgIGxvZ286IHsgc3JjOiBcIi9rLXJwYS1saXRlLWxvZ28uc3ZnXCIsIHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9LFxyXG4gICAgLi4uc2VhcmNoQ29uZmlnLFxyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBsZXZlbDogXCJkZWVwXCIsXHJcbiAgICB9LFxyXG4gICAgSUNQOiBcIlx1N0NBNElDUFx1NTkwNzIwMjIwMjM5NDZcdTUzRjctMlwiLFxyXG4gIH0sXHJcbiAgcmV3cml0ZXM6IHtcclxuICAgIFwiZG9jL3poSGFucy86cmVzdCpcIjogXCI6cmVzdCpcIixcclxuICAgIFwiZG9jLzpyZXN0KlwiOiBcIjpyZXN0KlwiLFxyXG4gIH0sXHJcbiAgY2xlYW5VcmxzOiB0cnVlLFxyXG4gIG1hcmtkb3duOiB7XHJcbiAgICBjb25maWc6IChtZCkgPT4ge1xyXG4gICAgICBtZC51c2UoaWdub3JlTWlzc2luZ0ltYWdlcyk7XHJcbiAgICAgIG1kLnVzZShwYXJhZ3JhcGhJZHMpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGFzc2V0c0RpcjogXCJhc3NldHMvanNcIixcclxuICBvdXREaXI6IGVudi5WSVRFUFJFU1NfT1VURElSLFxyXG4gIG1ldGFDaHVuazogdHJ1ZSxcclxuICBzaXRlbWFwOiB7XHJcbiAgICBob3N0bmFtZTogZW52LlZJVEVQUkVTU19TSVRFQU1QLFxyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBpMThuIFx1OTE0RFx1N0Y2RVxyXG5jb25zdCBpMThuY29uZmlnID0gd2l0aFNpZGViYXIoXHJcbiAgd2l0aEkxOG4odml0ZVByZXNzQ29uZmlnLCB2aXRlUHJlc3NJMThuQ29uZmlnKSxcclxuICB2aXRlUHJlc3NTaWRlYmFyQ29uZmlnLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKGkxOG5jb25maWcpO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcay1tYXRlLWRvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHBsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxrLW1hdGUtZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxccGx1Z2luXFxcXG1hcmtkb3duLWl0LWlnbm9yZS1pbWFnZXMuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvay1tYXRlLWRvY3MvZG9jcy8udml0ZXByZXNzL3BsdWdpbi9tYXJrZG93bi1pdC1pZ25vcmUtaW1hZ2VzLmpzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlnbm9yZU1pc3NpbmdJbWFnZXMobWQpIHtcclxuICAvLyBcdTRGRERcdTVCNThcdTlFRDhcdThCQTRcdTc2ODRcdTU2RkVcdTcyNDdcdTZFMzJcdTY3RDNcdTUxRkRcdTY1NzBcclxuICBjb25zdCBkZWZhdWx0SW1hZ2VSZW5kZXIgPSBtZC5yZW5kZXJlci5ydWxlcy5pbWFnZTtcclxuXHJcbiAgLy8gXHU5MUNEXHU1MTk5XHU1NkZFXHU3MjQ3XHU2RTMyXHU2N0QzXHU4OUM0XHU1MjE5XHJcbiAgbWQucmVuZGVyZXIucnVsZXMuaW1hZ2UgPSAodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZikgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaWR4XTtcclxuICAgIGNvbnN0IHNyYyA9IHRva2VuLmF0dHJHZXQoXCJzcmNcIik7XHJcbiAgICAvLyBVUkxcdTg5RTNcdTc4MDFcdThERUZcdTVGODRcclxuICAgIGNvbnN0IGRlY29kZWRTcmMgPSBkZWNvZGVVUklDb21wb25lbnQoc3JjKTtcclxuXHJcbiAgICBpZiAoc3JjICYmIGVudi5yZWFsUGF0aCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFx1ODNCN1x1NTNENlx1NUY1M1x1NTI0RCBNYXJrZG93biBcdTY1ODdcdTRFRjZcdTc2ODRcdTdFRERcdTVCRjlcdThERUZcdTVGODRcclxuICAgICAgICBjb25zdCBmaWxlRGlyID0gcGF0aC5kaXJuYW1lKGVudi5yZWFsUGF0aCk7XHJcbiAgICAgICAgLy8gXHU4OUUzXHU2NzkwXHU1NkZFXHU3MjQ3XHU3Njg0XHU3RUREXHU1QkY5XHU4REVGXHU1Rjg0XHJcbiAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gcGF0aC5yZXNvbHZlKGZpbGVEaXIsIGRlY29kZWRTcmMpO1xyXG5cclxuICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTU2RkVcdTcyNDdcdTRFMERcdTVCNThcdTU3MjhcdUZGMENcdThGRDRcdTU2REVcdTdBN0FcdTVCNTdcdTdCMjZcdTRFMzJcclxuICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoaW1hZ2VQYXRoKSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYFtpZ25vcmUtaW1hZ2VzXTogSW1hZ2UgbWlzc2luZyAke2RlY29kZWRTcmN9YCk7XHJcbiAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBcdTUzRUZcdTU3MjhcdTZCNjRcdTU5MDRcdTZERkJcdTUyQTBcdTk1MTlcdThCRUZcdTY1RTVcdTVGRDdcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDlcclxuICAgICAgICBjb25zb2xlLndhcm4oYFtpZ25vcmUtaW1hZ2VzXSBFcnJvciBjaGVja2luZyAke2RlY29kZWRTcmN9OmAsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTU2RkVcdTcyNDdcdTVCNThcdTU3MjhcdTY1RjZcdUZGMENcdTRGN0ZcdTc1MjhcdTlFRDhcdThCQTRcdTZFMzJcdTY3RDNcclxuICAgIHJldHVybiBkZWZhdWx0SW1hZ2VSZW5kZXIodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZik7XHJcbiAgfTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcay1tYXRlLWRvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHBsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxrLW1hdGUtZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxccGx1Z2luXFxcXGxvYWRFbnYuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvay1tYXRlLWRvY3MvZG9jcy8udml0ZXByZXNzL3BsdWdpbi9sb2FkRW52LmpzXCI7aW1wb3J0IHsgbG9hZEVudiB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcclxuLy8gXHU1MkEwXHU4RjdEXHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHJcbmV4cG9ydCBjb25zdCBtb2RlID0gcHJvY2Vzcy5lbnYuVlBfTU9ERSB8fCBcIm1haW5cIjtcclxuZXhwb3J0IGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgXCJWSVRFUFJFU1NfXCIpOyAvLyBcdTUzRUFcdTUyQTBcdThGN0QgVklURVBSRVNTXyBcdTUyNERcdTdGMDBcdTUzRDhcdTkxQ0ZcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGstbWF0ZS1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxuYXZzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGstbWF0ZS1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxuYXZzXFxcXGNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9rLW1hdGUtZG9jcy9kb2NzLy52aXRlcHJlc3MvbmF2cy9jb25maWcuanNcIjtpbXBvcnQgeyBtb2RlLCBlbnYgfSBmcm9tIFwiLi4vcGx1Z2luL2xvYWRFbnZcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgZ3VpZGU6IHtcclxuICAgIHpoSGFuczogXCJcdTUxNjVcdTk1RThcdTYzMDdcdTUzNTdcIixcclxuICAgIGJhc2U6IFwiaW50cm9kdWN0aW9uXCIsXHJcbiAgfSxcclxuICBIZWxwRG9jOiB7XHJcbiAgICB6aEhhbnM6IFwiXHU1RTJFXHU1MkE5XHU2NTg3XHU2ODYzXCIsXHJcbiAgICBlbjogXCJIZWxwIGRvY3VtZW50XCIsXHJcbiAgICBiYXNlOiBcIkNvbmRpdGlvbmFsL0lGIENvbmRpdGlvblwiLFxyXG4gIH0sXHJcbiAgVXNlckRvYzoge1xyXG4gICAgemhIYW5zOiBcIlx1NzUyOFx1NjIzN1x1NjI0Qlx1NTE4Q1wiLFxyXG4gICAgYmFzZTogXCJLLVJQQSBMaXRlIFVzZXIgTWFudWFsXCIsXHJcbiAgfSxcclxuICBGQVE6IHtcclxuICAgIHpoSGFuczogXCJcdTVFMzhcdTg5QzFcdTk1RUVcdTk4OThcIixcclxuICAgIGVuOiBcIkZBUVwiLFxyXG4gICAgYmFzZTogXCJGaXJzdEluc3RhbGxcIixcclxuICB9LFxyXG4gIERvd25sb2FkOiB7XHJcbiAgICB6aEhhbnM6IFwiXHU0RTBCXHU4RjdEXHU0RTJEXHU1RkMzIFwiLFxyXG4gICAgZW46IFwiRG93bmxvYWQgQ2VudGVyXCIsXHJcbiAgICBzaWRlYmFyOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuLy8gXHU1MjI0XHU2NUFEXHU3OUMxXHU2NzA5XHU1MzE2XHJcbmlmIChtb2RlICE9PSBcInByaXZhdGVcIikge1xyXG4gIGNvbmZpZ1tlbnYuVklURVBSRVNTX1RVVE9SSUFMX0RFTU9dID0ge1xyXG4gICAgemhIYW5zOiBcIlx1NjU1OVx1NUI2Nlx1NzNBRlx1NTg4MyBcIixcclxuICAgIHNpZGViYXI6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGstbWF0ZS1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxuYXZzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXGstbWF0ZS1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxuYXZzXFxcXGkxOG5OYXZzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL2stbWF0ZS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9uYXZzL2kxOG5OYXZzLnRzXCI7aW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vY29uZmlnLmpzXCI7XHJcblxyXG4vLyBcdThCQkVcdTdGNkVcdTlFRDhcdThCQTRcdThCRURcdThBMDBcclxuY29uc3Qgcm9vdExvY2FsZSA9IFwiemhIYW5zXCI7XHJcblxyXG5jb25zdCBiYXNlU2lkZWJhck9wdGlvbnMgPSB7XHJcbiAgdXNlVGl0bGVGcm9tRmlsZUhlYWRpbmc6IHRydWUsIC8vIFx1NTQyRlx1NzUyOFx1NTQwRVx1RkYwQ1x1NEYxQVx1NEVDRVx1NjU4N1x1NEVGNlx1NTkzNFx1OTBFOFx1NzY4NCB0aXRsZSBcdTY4MDdcdTdCN0VcdTgzQjdcdTUzRDZcdTY4MDdcdTk4OThcclxuICB1c2VUaXRsZUZyb21Gcm9udG1hdHRlcjogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4XHU1NDBFXHVGRjBDXHU0RjFBXHU0RUNFIGZyb250bWF0dGVyIFx1NEUyRFx1ODNCN1x1NTNENlx1NjgwN1x1OTg5OFxyXG4gIHVzZUZvbGRlclRpdGxlRnJvbUluZGV4RmlsZTogdHJ1ZSwgLy9cdTU5ODJcdTY3OUNcdTZCNjRcdTUwM0NcdTRFM0F0cnVlXHVGRjBDXHU1MjE5XHU0RjdGXHU3NTI4XHU1RjUzXHU1MjREXHU2NTg3XHU0RUY2XHU1OTM5XHU2NTg3XHU0RUY2XHU0RTJEXHU3Njg0XHU0RkUxXHU2MDZGaW5kZXgubWRcdTY3NjVcdTgzQjdcdTUzRDZcdTgzRENcdTUzNTVcdTU0MERcdTc5RjBcdTMwMDJcdTU5ODJcdTY3OUNpbmRleC5tZFx1NjU4N1x1NEVGNlx1NEUwRFx1NUI1OFx1NTcyOFx1RkYwQ1x1NTIxOVx1NEY3Rlx1NzUyOFx1NjU4N1x1NEVGNlx1NTkzOVx1NTQwRFx1NzlGMFx1MzAwMlxyXG4gIHVzZUZvbGRlckxpbmtGcm9tSW5kZXhGaWxlOiBmYWxzZSwgLy8gXHU1NDJGXHU3NTI4XHU1NDBFXHVGRjBDXHU0RjFBXHU1QzA2XHU2NTg3XHU0RUY2XHU1OTM5XHU3Njg0XHU1NDBEXHU3OUYwXHU0RjVDXHU0RTNBXHU5NEZFXHU2M0E1XHVGRjBDXHU4MDBDXHU0RTBEXHU2NjJGXHU2NTg3XHU0RUY2XHU1OTM5XHU0RTBCXHU5NzYyXHU3Njg0IGluZGV4Lm1kIFx1NjU4N1x1NEVGNlxyXG4gIHVzZUZvbGRlckxpbmtGcm9tU2FtZU5hbWVTdWJGaWxlOiBmYWxzZSwgLy9cdTVGNTNcdTVCNThcdTU3MjhcdTRFMEVcdTY1ODdcdTRFRjZcdTU5MzlcdTU0MENcdTU0MERcdTc2ODRcdTVCNTBcdTY1ODdcdTRFRjZcdTY1RjYsXHU1QzA2XHU1NzI4XHU2NTg3XHU0RUY2XHU1OTM5XHU0RTJEXHU1MjFCXHU1RUZBXHU0RTAwXHU0RTJBXHU5NEZFXHU2M0E1LFx1NzUyOFx1NEU4RVx1NUJGQ1x1ODIyQVx1ODFGM1x1OEJFNVx1NjU4N1x1NEVGNixcdTgwMENcdThCRTVcdTY1ODdcdTRFRjZcdTRFMERcdTRGMUFcdTY2M0VcdTc5M0FcdTU3MjhcdTVCNTBcdTk4NzlcdTRFMkRcclxuICBmb2xkZXJMaW5rTm90SW5jbHVkZXNGaWxlTmFtZTogZmFsc2UsIC8vXHU1NzI4XHU1RUZBXHU3QUNCXHU2NTg3XHU0RUY2XHU1OTM5XHU5NEZFXHU2M0E1XHU2NUY2XHVGRjBDXHU1RkZEXHU3NTY1XHU1QjUwXHU5ODc5XHU3Njg0XHU1QjU4XHU1NzI4XHVGRjBDXHU1RTc2XHU0RUM1XHU1QzA2XHU5NEZFXHU2M0E1XHU2MzA3XHU1QjlBXHU0RTNBXHU2NTg3XHU0RUY2XHU1OTM5XHU4REVGXHU1Rjg0XHJcbiAgdW5kZXJzY29yZVRvU3BhY2U6IHRydWUsIC8vIF9cdThGNkNcdTRFM0FcdTdBN0FcdTY4M0NcclxuICBjYXBpdGFsaXplRmlyc3Q6IHRydWUsIC8vXHU5OTk2XHU1QjU3XHU2QkNEXHU1RjNBXHU1MjM2XHU1OTI3XHU1MTk5XHJcbiAgc29ydE1lbnVzQnlGcm9udG1hdHRlck9yZGVyOiB0cnVlLCAvL1x1NjMwOSBmcm9udG1hdHRlciBcdTc2ODQgb3JkZXIgXHU1QzVFXHU2MDI3XHU1QkY5XHU4M0RDXHU1MzU1XHU5ODc5XHU2MzkyXHU1RThGXHJcbiAgLy8gc29ydE1lbnVzQnlGcm9udG1hdHRlckRhdGU6IHRydWUsIC8vXHU2ODM5XHU2MzZFXHU1MjREXHU3QUVGXHU3Njg0ZGF0ZVx1NUM1RVx1NjAyN1x1NUJGOVx1ODNEQ1x1NTM1NVx1OTg3OVx1OEZEQlx1ODg0Q1x1NjM5Mlx1NUU4RlxyXG4gIC8vIHNvcnRNZW51c09yZGVyQnlEZXNjZW5kaW5nOiB0cnVlLCAvL1x1NTk4Mlx1Njc5Q1x1NkI2NFx1NTAzQ1x1NEUzQSB0cnVlXHVGRjBDXHU1MjE5XHU2MzA5XHU5NjREXHU1RThGXHU2MzkyXHU1MjE3XHU4M0RDXHU1MzU1XHU5ODc5XHU0RTJEXHU3Njg0XHU5ODc5XHU3NkVFXHJcbiAgZnJvbnRtYXR0ZXJPcmRlckRlZmF1bHRWYWx1ZTogOTk5OSwgLy9cdThCQkVcdTdGNkUgZnJvbnRtYXR0ZXIgXHU3Njg0IG9yZGVyIFx1NUM1RVx1NjAyN1x1NjcyQVx1OEJCRVx1N0Y2RVx1NjVGNlx1NzY4NFx1OUVEOFx1OEJBNFx1NTAzQ1xyXG4gIGV4Y2x1ZGVGaWxlc0J5RnJvbnRtYXR0ZXJGaWVsZE5hbWU6IFwiZXhjbHVkZVwiLCAvL1x1NTk4Mlx1Njc5Q1x1OTAwOVx1OTg3OVx1NTAzQ1x1NEUzQWV4Y2x1ZGUsXHU1MjE5XHU4M0RDXHU1MzU1XHU0RTJEXHU0RTBEXHU0RjFBXHU2NjNFXHU3OTNBXHU1MTg1XHU1QkI5XHU1MzA1XHU1NDJCZXhjbHVkZTogdHJ1ZVx1NzY4NFx1NjU4N1x1Njg2M1xyXG4gIGNvbGxhcHNlZDogZmFsc2UsIC8vIFx1NjU4N1x1NEVGNlx1NTkzOVx1NjI5OFx1NTNFMFxyXG4gIGNvbGxhcHNlRGVwdGg6IDQsXHJcbiAgLy8gZGVidWdQcmludDogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IG5hdkNvbmZpZyA9IHt9O1xyXG5jb25zdCB2aXRlUHJlc3NTaWRlYmFyQ29uZmlnID0gW10gYXMgYW55O1xyXG5jb25zdCBsb2NhbGVzID0gbmV3IFNldCgpO1xyXG5cclxuT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChbcGF0aCwgdHJhbnNsYXRpb25zXSkgPT4ge1xyXG4gIGNvbnN0IGlzRXh0ZXJuYWxMaW5rID0gcGF0aC5zdGFydHNXaXRoKFwiaHR0cFwiKTsgLy8gXHU1MjI0XHU2NUFEXHU2NjJGXHU1NDI2XHU2NjJGXHU1OTE2XHU5MEU4XHU5NEZFXHU2M0E1XHJcblxyXG4gIE9iamVjdC5lbnRyaWVzKHRyYW5zbGF0aW9ucykuZm9yRWFjaCgoW2xhbmcsIHRleHRdKSA9PiB7XHJcbiAgICAvLyBcdThERjNcdThGQzdcdTcyNzlcdTZCOEFcdTVCNTdcdTZCQjVcdTU5MDRcdTc0MDZcclxuICAgIGlmIChbXCJiYXNlXCIsIFwic2lkZWJhclwiLCBcIml0ZW1zXCJdLmluY2x1ZGVzKGxhbmcpKSByZXR1cm47XHJcblxyXG4gICAgLy8gXHU2NTM2XHU5NkM2XHU2MjQwXHU2NzA5XHU4QkVEXHU4QTAwXHJcbiAgICBsb2NhbGVzLmFkZChsYW5nKTtcclxuXHJcbiAgICAvLyBcdTc1MUZcdTYyMTAgbmF2Q29uZmlnXHJcbiAgICBpZiAoIW5hdkNvbmZpZ1tsYW5nXSkge1xyXG4gICAgICBuYXZDb25maWdbbGFuZ10gPSB7IG5hdjogW10gfTtcclxuICAgIH1cclxuICAgIC8vIFx1NjhDMFx1NjdFNVx1NjYyRlx1NTQyNlx1NjcwOVx1NUI1MFx1ODNEQ1x1NTM1NVxyXG4gICAgaWYgKHRyYW5zbGF0aW9ucy5pdGVtcykge1xyXG4gICAgICBjb25zdCBzdWJJdGVtcyA9IE9iamVjdC5lbnRyaWVzKHRyYW5zbGF0aW9ucy5pdGVtcykubWFwKChbc3ViTGluaywgc3ViVHJhbnNsYXRpb25zXSkgPT4gKHtcclxuICAgICAgICB0ZXh0OiBzdWJUcmFuc2xhdGlvbnNbbGFuZ10sXHJcbiAgICAgICAgbGluazogc3ViTGluayxcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgbmF2Q29uZmlnW2xhbmddLm5hdi5wdXNoKHtcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGl0ZW1zOiBzdWJJdGVtcyxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBcdTUyQThcdTYwMDFcdTc1MUZcdTYyMTAgbGlua1xyXG4gICAgICBjb25zdCBsaW5rID0gaXNFeHRlcm5hbExpbmsgPyBwYXRoIDogbGFuZyA9PT0gcm9vdExvY2FsZSA/IGAvJHtwYXRofWAgOiBgLyR7bGFuZ30vJHtwYXRofWA7XHJcbiAgICAgIC8vIFx1NzUxRlx1NjIxMFx1NUUyNiBiYXNlIFx1NzY4NCBsaW5rXHJcbiAgICAgIGNvbnN0IGJhc2VMaW5rID0gdHJhbnNsYXRpb25zLmJhc2UgPyBgJHtsaW5rfS8ke3RyYW5zbGF0aW9ucy5iYXNlfWAgOiBsaW5rO1xyXG5cclxuICAgICAgY29uc3QgYWN0aXZlTWF0Y2ggPSBpc0V4dGVybmFsTGluayA/IFwiXCIgOiBgXiR7bGlua31gO1xyXG4gICAgICBuYXZDb25maWdbbGFuZ10ubmF2LnB1c2goeyB0ZXh0LCBsaW5rOiBiYXNlTGluaywgYWN0aXZlTWF0Y2ggfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHU3NTFGXHU2MjEwIHZpdGVQcmVzc1NpZGViYXJDb25maWdcdUZGMDhcdTRFQzVcdTVCRjlcdTUxODVcdTkwRThcdThERUZcdTVGODRcdTRFMTQgc2lkZWJhciBcdTRFMERcdTRFM0EgZmFsc2VcdUZGMDlcclxuICAgIGlmICghaXNFeHRlcm5hbExpbmsgJiYgKHRyYW5zbGF0aW9ucyBhcyB7IHNpZGViYXI/OiBib29sZWFuIH0pLnNpZGViYXIgIT09IGZhbHNlKSB7XHJcbiAgICAgIGNvbnN0IGJhc2VQYXRoID0gbGFuZyA9PT0gcm9vdExvY2FsZSA/IGAvJHtwYXRofS9gIDogYC8ke2xhbmd9LyR7cGF0aH0vYDtcclxuICAgICAgdml0ZVByZXNzU2lkZWJhckNvbmZpZy5wdXNoKHtcclxuICAgICAgICAuLi5iYXNlU2lkZWJhck9wdGlvbnMsXHJcbiAgICAgICAgYmFzZVBhdGgsXHJcbiAgICAgICAgZG9jdW1lbnRSb290UGF0aDogYC9kb2NzL2RvYy8ke2xhbmd9LyR7cGF0aH1gLFxyXG4gICAgICAgIHJlc29sdmVQYXRoOiBiYXNlUGF0aCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgbmF2Q29uZmlnLCB2aXRlUHJlc3NTaWRlYmFyQ29uZmlnIH07XHJcblxyXG5leHBvcnQgY29uc3Qgdml0ZVByZXNzSTE4bkNvbmZpZyA9IHtcclxuICAvLyBWaXRlUHJlc3MgSTE4biBjb25maWdcclxuICBsb2NhbGVzOiBBcnJheS5mcm9tKGxvY2FsZXMpLFxyXG4gIHNlYXJjaFByb3ZpZGVyOiBcImxvY2FsXCIsXHJcbiAgdGhlbWVDb25maWc6IG5hdkNvbmZpZyxcclxufTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKFwibmF2Q29uZmlnOlwiLCBKU09OLnN0cmluZ2lmeShuYXZDb25maWcsIG51bGwsIDIpKTtcclxuLy8gY29uc29sZS5sb2coXCJ2aXRlUHJlc3NTaWRlYmFyQ29uZmlnOlwiLCBKU09OLnN0cmluZ2lmeSh2aXRlUHJlc3NTaWRlYmFyQ29uZmlnLCBudWxsLCAyKSk7XHJcbi8vIGNvbnNvbGUubG9nKFwidml0ZVByZXNzSTE4bkNvbmZpZzpcIiwg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QUFRLEdBQUc7QUFBQSxJQUMzRCxHQUFHO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLHFCQUFxQjtBQUFBLElBQ3JCLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLElBQ1IsUUFBUSxDQUFDLE9BQU87QUFDZCxTQUFHLElBQUksbUJBQW1CO0FBQzFCLFNBQUcsSUFBSSxpQ0FBQUMsT0FBWTtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1gsUUFBUSxJQUFJO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsSUFDUCxVQUFVLElBQUk7QUFBQSxFQUNoQjtBQUNGO0FBR0EsSUFBTSxhQUFhO0FBQUEsRUFDakIsU0FBUyxpQkFBaUIsbUJBQW1CO0FBQUEsRUFDN0M7QUFDRjtBQUVBLElBQU8saUJBQVEsYUFBYSxVQUFVOyIsCiAgIm5hbWVzIjogWyJlbnYiLCAicGF0aCIsICJlbnYiLCAicGF0aCIsICJwYXRoIiwgInBhcmFncmFwaElkcyJdCn0K
