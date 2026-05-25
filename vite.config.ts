import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [
        react(),
        dts({
          insertTypesEntry: true,
          include: ['src/'],
          exclude: ['src/demo/**'],
          rollupTypes: true,
        }),
      ],
      build: {
        lib: {
          entry: 'src/index.tsx',
          formats: ['es'],
          fileName: 'index',
        },
        outDir: 'es',
        rollupOptions: {
          external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'antd',
            'hls.js',
            /@cloud-app-dev\/.*/,
            'dayjs',
            'ahooks',
            'lodash-es',
            '@emotion/css',
          ],
          output: {
            entryFileNames: 'index.js',
          },
        },
        cssCodeSplit: false,
        sourcemap: true,
      },
    };
  }

  return {
    plugins: [react()],
    base: 'https://easy-martin.github.io/lm-player',
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:18080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/doc': {
          target: 'http://127.0.0.1:18080',
          changeOrigin: true,
          ws: true,
        },
        '/view': {
          target: 'http://127.0.0.1:18080',
          changeOrigin: true,
        },
      },
    },
  };
});
