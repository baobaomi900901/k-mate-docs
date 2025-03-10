import DefaultTheme from 'vitepress/theme';
import { h, onMounted } from 'vue';
import type { Theme } from 'vitepress';
// import './KingAutometa.theme.css';
import '@ksware/ksw-ux/kingsware-ui/style.css';
import 'ksw-vue-icon/styles/icon.css';
import './custom.less';
import '~/tailwind.css';

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
    });
  }
} satisfies Theme;
