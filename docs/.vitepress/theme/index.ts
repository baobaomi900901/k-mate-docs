import DefaultTheme from 'vitepress/theme';
import { h, onMounted } from 'vue';
import type { Theme } from 'vitepress';
import { OverlayScrollbars } from 'overlayscrollbars';
import 'overlayscrollbars/overlayscrollbars.css';
// import './KingAutometa.theme.css';
import '@ksware/ksw-ux/kingsware-ui/style.css';
import 'ksw-vue-icon/styles/icon.css';
import './custom.less';
import '~/tailwind.css';
// import '../chatBot';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    });
  },
  async enhanceApp({ app }) {
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("KingAutometa")
      // 选择所有具有滚动条的元素
      const scrollableElements = document.querySelectorAll('body, aside');
      // 对每个元素初始化 OverlayScrollbars
      scrollableElements.forEach((element) => {
        OverlayScrollbars(element, {
          // 这里可以设置 OverlayScrollbars 的选项
          scrollbars: {
            theme: 'os-theme-dark',
            autoHide: 'move', // 是否在某个用户操作之后自动隐藏可见的滚动条。有效值为：'never'、'scroll'和'leave', 'move'
            autoHideSuspend: true, //暂停自动隐藏功能，直到执行第一次滚动交互。
          },
        });
      });
    });
  }
} satisfies Theme;
