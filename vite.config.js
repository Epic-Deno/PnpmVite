/*
 * @Description: Created By 逍遥子
 * @Author: 逍遥子
 * @Date: 2021-10-21 10:16:57
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-01 22:15:18
 * @FilePath: /PnpmVite/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  }
})
