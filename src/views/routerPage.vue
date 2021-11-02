<!--
 * @Description: 路由跳转
 * @Author: 逍遥子
 * @Date: 2021-11-02 23:16:04
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-02 23:31:20
 * @FilePath: /PnpmVite/src/views/routerPage.vue
-->
<template>
    <h3>我是跳转页面</h3>
    <button @click="BackHome">点击我回到首页</button>
</template>

<script setup>
    import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router' 

    // 声明下 
    const route = useRoute()
    const router = useRouter()

    // 路由跳转
    const BackHome = () => {
        router.push('/')
    }
    // 添加一个导航守卫，在当前组件将要离开时触发。
    onBeforeRouteLeave((to, from, next) => {
        console.log('离开当前路由')
        next()
    })
    // 添加一个导航守卫，在当前组件更新时触发。
    // 在当前路由改变，但是该组件被复用时调用。
    onBeforeRouteUpdate((to, from, next) => {
        console.log('进入当前路由')
        next()
    })

</script>

<style lang="scss" scoped>

</style>