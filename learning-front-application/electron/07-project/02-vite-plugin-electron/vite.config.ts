import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 

    electron([
      // 程序的主要入口文件
      {
        entry: 'electron/main.ts',
        onstart: options => {
          // 多个页面时，自定义启动页面
          options.startup(['.', '--no-sandbox'])
        },
      },
      {
        // 预加载文件
        entry: 'electron/preload.ts',
        onstart(options) {
          // 重载preload文件为ts文件
          options.reload()
        },
      }
     
    ])
  ],
  resolve: {
    alias: { '@': path.resolve('./src') }
  }
})
