import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import type { Theme } from 'vitepress';
// import '@ksware/ksw-ux/kingsware-ui/style.css';
import './custom.less';
import '~/tailwind.css';
import 'ksw-vue-icon/styles/icon.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    });
  },
  enhanceApp({ app }) {
  }
} satisfies Theme;
