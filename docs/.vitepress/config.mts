import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import paragraphIds from './markdown-it-paragraph-ids.cjs';
import MiniSearch from 'minisearch';
import escookConfig from '@escook/vitepress-theme/config';
import { withSidebar } from 'vitepress-sidebar';
import { withI18n } from 'vitepress-i18n';
import { vitePressSidebarConfig, vitePressI18nConfig } from './navs/i18nNavs';

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
  // 3. specify the configuration to inherit via extended
  extends: escookConfig,
  lang: 'zh-CN',
  title: 'K-RPA Lite',
  description: '',
  vite: {
    plugins: [],
    resolve: {
      // 自定义替换默认组件
      alias: [
        {
          find: /^.*\/VPLocalSearchBox\.vue$/,
          replacement: fileURLToPath(new URL('./components/MyCustomSearchBox.vue', import.meta.url))
        },
        {
          find: '~',
          replacement: path.resolve(__dirname, '../../')
        },
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(new URL('./components/CVPNavBarTitle.vue', import.meta.url))
        },
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(new URL('./components/CVPHome.vue', import.meta.url))
        }
      ]
    },
    ssr: {
      noExternal: []
    },
    // Network
    server: {
      host: '0.0.0.0',
      port: 3000
    }
  },

  // 优化搜索引擎结果
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    [
      'meta',
      {
        property: 'og:title',
        content: 'KRPA'
      }
    ],
    ['meta', { property: 'og:site_name', content: 'KRPA Lite' }]
  ],

  themeConfig: {
    logo: { src: 'logo.ico', width: 32, height: 32 },

    search: {
      provider: 'local',
      options: {
        // disableDetailedView: true,
        detailedView: true,
        miniSearch: {
          options: {
            processTerm: (term) => suffixes(term, 2)
          },
          searchOptions: {
            processTerm: MiniSearch.getDefault('processTerm')
          }
        }
      }
    },
  },
  rewrites: {
    'doc/zhHans/:rest*': ':rest*',
    'doc/:rest*': ':rest*',
  },
  cleanUrls: true,
  markdown: {
    config: (md) => {
      md.use(paragraphIds);
    }
  },
  metaChunk: true,
  sitemap: {
    hostname: 'https://king.docs.donxj.com'
  },
};

export default defineConfig(
  withSidebar(withI18n(vitePressConfig, vitePressI18nConfig), vitePressSidebarConfig)
);

