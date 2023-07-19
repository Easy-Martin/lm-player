import { defineConfig } from 'dumi';
import path from 'path';
import { themeConfig } from './theme-config';

export default defineConfig({
  title: 'CloudApp VIDC',
  favicons: ['https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png'],
  outputPath: 'docs-dist',
  targets: { chrome: 60 },
  apiParser: {
    unpkgHost: 'https://unpkg.zhimg.com',
  },
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  theme: {
    '@ant-prefix': 'cloudapp',
  },
  themeConfig: {
    name: 'VIDC',
    logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
    navs: [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitLab',
        path: 'https://git.topvdn.com/cloudapp/vidc',
      },
    ],
  },

  alias: {
    '@src': path.resolve('./src'),
  },
  proxy: {
    '/api': {
      target: 'http://192.168.101.41:13336',
      changeOrigin: true,
    },
    '/twinmapdataservice': {
      target: 'http://192.168.101.38:8888',
      changeOrigin: true,
      pathRewrite: { twinmapdataservice: 'twinmap' },
    },
    '/twinmap': {
      target: 'http://192.168.101.38:8888',
      changeOrigin: true,
    },
  },
  scripts: ['//at.alicdn.com/t/font_1724012_972m5d05cou.js'],
  styles: [themeConfig],

  // more config: https://d.umijs.org/config
});
