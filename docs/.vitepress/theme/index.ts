import DefaultTheme from "vitepress/theme";
import { h, onMounted, nextTick } from "vue";
import type { Theme } from "vitepress";
import { OverlayScrollbars } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
// import './KingAutometa.theme.css';
import "@ksware/ksw-ux/kingsware-ui/style.css";
import "ksw-vue-icon/styles/icon.css";
import "./custom.less";
import "~/tailwind.css";
// import { createChatbot } from "../../../plugin/chatBot";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  async enhanceApp({ app, router }) {
    if (!import.meta.env.SSR) {
      // 动态导入...
      // 导入 mermaid 插件
      const createMermaidRenderer = await import("donxj-vitepress-mermaid-renderer").then(
        (m) => m.createMermaidRenderer,
      );
      const mermaidRenderer = createMermaidRenderer();
      mermaidRenderer.initialize();
      if (router) {
        router.onAfterRouteChange = () => {
          nextTick(() => {
            mermaidRenderer.renderMermaidDiagrams();
          });
        };
      }
    }
  },
  setup() {
    onMounted(async () => {
      // 等待页面初始化
      await nextTick();
      // createChatbot();
      document.body.classList.add("KingAutometa");
      // 选择所有具有滚动条的元素
      const scrollableElements = document.querySelectorAll("body, aside");
      // 对每个元素初始化 OverlayScrollbars
      scrollableElements.forEach((element) => {
        OverlayScrollbars(
          {
            target: element,
            cancel: {
              nativeScrollbarsOverlaid: true,
            },
          },
          {
            // 这里可以设置 OverlayScrollbars 的选项
            scrollbars: {
              autoHide: "move", // 是否在某个用户操作之后自动隐藏可见的滚动条。有效值为：'never'、'scroll'和'leave', 'move'
              autoHideSuspend: true, //暂停自动隐藏功能，直到执行第一次滚动交互。
            },
          },
        );
      });
    });
  },
} satisfies Theme;
