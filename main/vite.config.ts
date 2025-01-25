import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.tsx', '.ts'],
  },
  build: {
    outDir: 'dist',  // 显式设置构建输出目录
  },
  server: {
    proxy: {
      '/api': 'https://chatrecord-viewer.pages.dev',
    },
  },
});
