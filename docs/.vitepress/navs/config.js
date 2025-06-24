import { mode, env } from "../plugin/loadEnv";

export const config = {
  guide: {
    zhHans: "入门指南",
    base: "introduction",
  },
  HelpDoc: {
    zhHans: "帮助文档",
    en: "Help document",
    base: "Conditional/IF Condition",
  },
  UserDoc: {
    zhHans: "用户手册",
    base: "K-RPA Lite User Manual",
  },
  FAQ: {
    zhHans: "常见问题",
    en: "FAQ",
    base: "FirstInstall",
  },
  Download: {
    zhHans: "下载中心 ",
    en: "Download Center",
    sidebar: false,
  },
};

// 判断私有化
if (mode !== "private") {
  config[env.VITEPRESS_TUTORIAL_DEMO] = {
    zhHans: "教学环境 ",
    sidebar: false,
  };
}
