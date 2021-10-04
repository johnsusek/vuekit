import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue()
  ],
  resolve: {
    dedupe: ['@vue/runtime-core'],
  },
  build: {
    target: ['es2020'],
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      name: 'VueKit'
    },
    minify: false,
    brotliSize: false,
    polyfillModulePreload: false,
    chunkSizeWarningLimit: 5000,
    outDir: 'dist'
  }
})
