import DefaultTheme from 'vitepress/theme';
import './custom.css';
import '~/tailwind.css';
import { h } from 'vue';
import type { Theme } from 'vitepress';
// 1. import vitepress theme
import escookTheme from '@escook/vitepress-theme';
// 2. import matching CSS styles (this step cannot be omitted)
import '@escook/vitepress-theme/style.css';
// import your custom styles
import './style.css';

export default {
  ...DefaultTheme,
  // 3. specify the theme to inherit and perform secondary extensions based on this theme
  extends: escookTheme,
  Layout: () => {
    return h(escookTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp(ctx) {
    // expand custom features...
  }
} satisfies Theme;
