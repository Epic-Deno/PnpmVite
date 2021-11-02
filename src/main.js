/*
 * @Description: 函数的主入口
 * @Author: 逍遥子
 * @Date: 2021-10-21 10:16:57
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-01 22:34:57
 * @FilePath: /PnpmVite/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
createApp(App).use(router).mount('#app')
