import Vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      dirs: [
        'src/components',
        'node_modules/vuekit-vue/components'
      ],
      extensions: ['vue']
    })
  ],
  resolve: {
    dedupe: ['@vue/runtime-core']
  },
  build: {
    target: ['es2020'],
    lib: {
      entry: 'src/index.ts',
      fileName: 'vuekit-bundle',
      name: 'vuekit-bundle',
      formats: ['es']
    },
    minify: false,
    brotliSize: false,
    polyfillModulePreload: false,
    chunkSizeWarningLimit: 5000,
    outDir: 'build/js'
  }
})
