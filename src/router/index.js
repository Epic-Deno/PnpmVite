/*
 * @Description: Created By 逍遥子
 * @Author: 逍遥子
 * @Date: 2021-11-01 22:09:57
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-01 22:16:20
 * @FilePath: /PnpmVite/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.config'
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router