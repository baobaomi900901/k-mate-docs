import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import del from "rollup-plugin-delete";
import paragraphIds from "./plugin/markdown-it-paragraph-ids.cjs";
import { ignoreMissingImages } from "./plugin/markdown-it-ignore-images";
import MiniSearch from "minisearch";
import { withSidebar } from "vitepress-sidebar";
import { withI18n } from "vitepress-i18n";
import { vitePressSidebarConfig, vitePressI18nConfig } from "./navs/i18nNavs";
import llmstxt from "vitepress-plugin-llms";

// 加载环境变量
import { mode, env } from "./plugin/loadEnv";

// 本地搜索分词
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

const isLocalSearch = env.VITEPRESS_SEARCH_PROVIDER === "local";
// 生成搜索配置
const searchConfig = isLocalSearch
  ? {
      search: {
        provider: "local",
        options: {
          detailedView: true,
          miniSearch: {
            options: {
              processTerm: (term) => suffixes(term, 2),
            },
            searchOptions: {
              processTerm: MiniSearch.getDefault("processTerm"),
            },
          },
        },
      },
    }
  : {
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
                poweredByText: "Powered by",
              },
            },
          },
        },
      },
    };

// 根据环境决定是否使用llmstxt插件,如果是私有化则不使用
const vitePlugins =
  mode === "private"
    ? []
    : [
        llmstxt({
          generateLLMsFullTxt: true,
          ignoreFiles: ["*/about.md", "*/index.md"],
          workDir: "doc/zhHans",
          domain: "https://krpalite.com",
          // customLLMsTxtTemplate: `# {title}\n\n{foo}`,
          // title: "Awesome tool",
          // customTemplateVariables: {
          //   foo: "bar",
          // },
        }),
      ];

const vitePressConfig = {
  base: env.VITEPRESS_BASE,
  lang: "zh-CN",
  title: "K-RPA Lite",
  description: "K-RPA Lite 致力于打造更优质的自动化体验，持续倾听用户的反馈与建议。",
  vite: {
    define: {
      "import.meta.env.VITEPRESS_ICP": JSON.stringify(env.VITEPRESS_ICP),
      "import.meta.env.VITEPRESS_DIFY_URL": JSON.stringify(env.VITEPRESS_DIFY_URL),
      "import.meta.env.VP_MODE": JSON.stringify(mode),
    },
    plugins: vitePlugins,
    resolve: {
      // 自定义替换默认组件
      alias: [
        {
          find: "~",
          replacement: path.resolve(__dirname, "../../"),
        },
        ...(isLocalSearch
          ? [
              {
                find: /^.*\/VPLocalSearchBox\.vue$/,
                replacement: fileURLToPath(
                  new URL("./theme/components/MyCustomSearchBox.vue", import.meta.url),
                ),
              },
            ]
          : [
              {
                find: /^.*\/VPNavBarSearch\.vue$/,
                replacement: fileURLToPath(
                  new URL("./theme/components/MeiliSearchBox/MeiliSearchBox.vue", import.meta.url),
                ),
              },
            ]),
      ],
    },
    ssr: {
      noExternal: ["gsap", "gsap/*", "ksw-vue-icon", "ksw-ux"],
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
            targets: [env.VITEPRESS_DEL_TARGETS, "./docs/.vitepress/cache/*"],
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
    //     href: 'https://cdn.jsdelivr.net/npm/ksw-ux/kingsware-ui/style.min.css',
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
    ...searchConfig,
    outline: {
      level: "deep",
    },
    ICP: "粤ICP备2022023946号-2",
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

// i18n 配置
const i18nconfig = withSidebar(
  withI18n(vitePressConfig, vitePressI18nConfig),
  vitePressSidebarConfig,
);

export default defineConfig(i18nconfig);
