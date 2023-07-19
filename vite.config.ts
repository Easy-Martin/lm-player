import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
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
});
