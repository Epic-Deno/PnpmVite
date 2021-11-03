/*
 * @Description: 路由的集合
 * @Author: 逍遥子
 * @Date: 2021-11-01 22:02:05
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-03 23:11:15
 * @FilePath: /PnpmVite/src/router/routes.config.js
 */

const routes = [
    { path: '/', name: 'home', component: () => import('@/views/home.vue') },
    { path: '/router', name: 'routerPage', component: () => import('@/views/routerPage.vue') },
    { path: '/slotFather', name: 'slotFather', component: () => import('@/views/slotFather.vue') },
    { path: '/vuex', name: 'vuex', component: () => import('@/views/store.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]


export default routes;