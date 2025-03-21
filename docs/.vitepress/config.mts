import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import path from "node:path";
import paragraphIds from "./markdown-it-paragraph-ids.cjs";
// import MiniSearch from "minisearch";
import { withSidebar } from "vitepress-sidebar";
import { withI18n } from "vitepress-i18n";
import { vitePressSidebarConfig, vitePressI18nConfig } from "./navs/i18nNavs";

const suffixes = (term, minLength) => {
  if (term == null) {
    return;
  }
  const tokens = [];
  for (let i = 0; i <= term.length - minLength; i++) {
    tokens.push(term.slice(i));
  }
  return tokens;
};

const vitePressConfig = {
  lang: "zh-CN",
  title: "K-RPA Lite",
  description: "",
  vite: {
    plugins: [],
    resolve: {
      // 自定义替换默认组件
      alias: [
        // {
        //   find: /^.*\/VPLocalSearchBox\.vue$/,
        //   replacement: fileURLToPath(
        //     new URL("./components/MyCustomSearchBox.vue", import.meta.url)
        //   ),
        // },
        {
          find: "~",
          replacement: path.resolve(__dirname, "../../"),
        },
        {
          find: /^.*\/VPNavBarSearch\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/MeiliSearchBox/MeiliSearchBox.vue", import.meta.url)
          ),
        },
      ],
    },
    ssr: {
      noExternal: ['gsap', 'gsap/*', 'ksw-vue-icon', '@ksware/ksw-ux']
    },
    // Network
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
    esbuild: {
      // minifySyntax: false,
      // minifyWhitespace: false,
      // minifyIdentifiers: false,
      drop: ["console", "debugger"],
    },
    // build: {
    //   // cssCodeSplit: true, //拆分 css
    //   rollupOptions: {
    //     plugins: [],
    //     output: {
    //       // chunkFileNames: 'assets/js/chunks/[name]-[hash].js',
    //       // entryFileNames: 'assets/js/entries/[name]-[hash].js', //会干扰 VitePress 内部模块解析
    //       assetFileNames: ({ name }) => {
    //         if (/\.(woff2?|ttf|eot)$/.test(name ?? "")) {
    //           return "assets/fonts/[name]-[hash][extname]";
    //         }
    //         if (/\.(png|jpe?g|gif|webp|avif)$/.test(name ?? "")) {
    //           return "assets/img/[name]-[hash][extname]";
    //         }
    //         return "assets/[ext]/[name]-[hash][extname]";
    //       },
    //       manualChunks: (id) => {},
    //     },
    //   },
    // },
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
    ["link", { rel: "icon", type: "image/svg+xml", href: "/k-rpa-lite-logo.svg" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh" }],
    [
      "meta",
      {
        property: "og:title",
        content: "KRPA",
      },
    ],
    ["meta", { property: "og:site_name", content: "KRPA Lite" }],
  ],

  themeConfig: {
    logo: { src: "/k-rpa-lite-logo.svg", width: 32, height: 32 },

    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Copyright © 2025-present <a href="https://beian.miit.gov.cn/" target="_blank" style="margin-left: 0.75rem;text-decoration: none;">粤ICP备2022023946号-2</a>',
    },
    // meilisearch: {
    //   host: "https://meilisearch.donxj.com",
    //   apiKey:
    //     "646f90bf02522026b531be2d4d491ba1e2721802f43b72ae72f0a2e5eeca711a",
    //   indexUid: "k-rpa-lite-zh", // 默认中文索引
    //   locales: {
    //     en: {
    //       indexUid: "k-rpa-lite-en",
    //       translations: {
    //         button: { buttonText: "Search" },
    //         modal: {
    //           searchDocsPlaceHolder: "Search documentation...",
    //           resetButtonTitle: "Reset search",
    //           cancelButtonText: "Cancel",
    //           selectText: "Select",
    //           navigateText: "Navigate",
    //           closeText: "Close",
    //           poweredByText: "Powered by",
    //         },
    //       },
    //     },
    //   },
    // },
    // search: {
    //   provider: 'local',
    //   options: {
    //     // disableDetailedView: true,
    //     detailedView: true,
    //     miniSearch: {
    //       options: {
    //         processTerm: (term) => suffixes(term, 2)
    //       },
    //       searchOptions: {
    //         processTerm: MiniSearch.getDefault('processTerm')
    //       }
    //     }
    //   }
    // },
  },
  rewrites: {
    "doc/zhHans/:rest*": ":rest*",
    "doc/:rest*": ":rest*",
  },
  cleanUrls: true,
  markdown: {
    config: (md) => {
      md.use(paragraphIds);
    },
  },
  // assetsDir: "assets/js",
  metaChunk: true,
  // sitemap: {
  //   hostname: "https://krpalite.com",
  // },
};

export default defineConfig(
  withSidebar(
    withI18n(vitePressConfig, vitePressI18nConfig),
    vitePressSidebarConfig
  )
);
