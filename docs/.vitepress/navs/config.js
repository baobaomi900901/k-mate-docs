import { env } from "../plugin/loadEnv";

export default {
  guide: {
    zhHans: "入门指南",
    base: "introduction",
  },
  HelpDoc: {
    zhHans: "帮助文档",
    en: "Help document",
    base: "Conditional/IF Condition",
  },
  FAQ: {
    zhHans: "常见问题",
    en: "FAQ",
    base: "webView2",
  },
  Download: {
    zhHans: "下载中心 ",
    en: "Download Center",
    sidebar: false,
  },
  [env.VITEPRESS_TUTORIAL_DEMO]: {
    zhHans: "教学环境 ",
    sidebar: false,
  },
};
