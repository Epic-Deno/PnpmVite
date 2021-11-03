/*
 * @Description: 函数的主入口
 * @Author: 逍遥子
 * @Date: 2021-10-21 10:16:57
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-03 23:34:14
 * @FilePath: /PnpmVite/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router).use(store).mount('#app')

// 获取原型
const prototype = app.config.globalProperties

// 绑定一个参数
prototype.master = "Pony"