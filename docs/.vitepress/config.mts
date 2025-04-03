import { loadEnv, defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import del from "rollup-plugin-delete";
import paragraphIds from "./plugin/markdown-it-paragraph-ids.cjs";
import { ignoreMissingImages } from './plugin/markdown-it-ignore-images'
// import MiniSearch from "minisearch";
import { withSidebar } from "vitepress-sidebar";
import { withI18n } from "vitepress-i18n";
import { vitePressSidebarConfig, vitePressI18nConfig } from "./navs/i18nNavs";

// 加载环境变量
const mode = process.env.VP_MODE || "main";
const env = loadEnv(mode, process.cwd(), "VITEPRESS_"); // 只加载 VITEPRESS_ 前缀变量
console.log("当前环境:", env);

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
  base: env.VITEPRESS_BASE,
  lang: "zh-CN",
  title: "K-RPA Lite",
  description: "",
  vite: {
    define: {
      'import.meta.env.VITEPRESS_ICP': JSON.stringify(env.VITEPRESS_ICP),
    },
    plugins: [],
    resolve: {
      // 自定义替换默认组件
      alias: [
        // {
        //   find: /^.*\/VPLocalSearchBox\.vue$/,
        //   replacement: fileURLToPath(
        //     new URL("./theme/components/MyCustomSearchBox.vue", import.meta.url)
        //   ),
        // },
        {
          find: "~",
          replacement: path.resolve(__dirname, "../../"),
        },
        {
          find: /^.*\/VPNavBarSearch\.vue$/,
          replacement: fileURLToPath(
            new URL(
              "./theme/components/MeiliSearchBox/MeiliSearchBox.vue",
              import.meta.url
            )
          ),
        },
      ],
    },
    ssr: {
      noExternal: ["gsap", "gsap/*", "ksw-vue-icon", "@ksware/ksw-ux"],
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
      // drop: ['console', 'debugger']
    },
    build: {
      rollupOptions: {
        plugins: [
          del({
            targets: [
              env.VITEPRESS_DEL_TARGETS,
              "./docs/.vitepress/cache/*",
            ],
            runOnce: true,
          }),
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
          manualChunks: (id) => {},
        },
      },
    },
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
      { rel: "icon", type: "image/svg+xml", href: `${env.VITEPRESS_BASE}k-rpa-lite-logo.svg` },
    ],
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

    meilisearch: {
      host: "https://meilisearch.donxj.com",
      apiKey:
        "646f90bf02522026b531be2d4d491ba1e2721802f43b72ae72f0a2e5eeca711a",
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
              poweredByText: "Powered by",
            },
          },
        },
      },
    },
    search: false,
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
    ICP: "粤ICP备2022023946号-2"
  },
  rewrites: {
    "doc/zhHans/:rest*": ":rest*",
    "doc/:rest*": ":rest*",
  },
  cleanUrls: true,
  markdown: {
    config: (md) => {
      md.use(ignoreMissingImages);
      md.use(paragraphIds);
    },
  },
  assetsDir: "assets/js",
  outDir: env.VITEPRESS_OUTDIR,
  metaChunk: true,
  sitemap: {
    hostname: env.VITEPRESS_SITEAMP,
  },
};

export default defineConfig(
  withSidebar(
    withI18n(vitePressConfig, vitePressI18nConfig),
    vitePressSidebarConfig
  )
);
