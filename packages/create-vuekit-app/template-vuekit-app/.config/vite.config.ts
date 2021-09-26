import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      dirs: ['src/components', 'node_modules/vuekit-vue/src/components'],
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
      name: 'vuekit',
      formats: ['es']
    },
    minify: false,
    brotliSize: false,
    polyfillModulePreload: false,
    chunkSizeWarningLimit: 5000,
    outDir: 'build/js'
  }
})
