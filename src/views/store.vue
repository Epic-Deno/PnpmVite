<!--
 * @Description: vuex页面
 * @Author: 逍遥子
 * @Date: 2021-11-03 23:04:51
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-03 23:55:32
 * @FilePath: /PnpmVite/src/views/store.vue
-->
<template>
    <div>
        <p>name: {{ store.state.name }}</p>
        <p>count: {{ store.state.count }}</p>
        <p>new: {{ newCounts }}</p>
        <button @click="addCount">+1</button><button @click="reduceCount">-1</button>
        <!-- 原型挂载的值 -->
        <h4>My Master is {{ proxy.master }}</h4>
        <h3>fetch同步到的数据</h3>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { getCurrentInstance } from 'vue'
    // 声明调用
    const store = useStore()
    // 触发mutations的方法
    const addCount = () =>  store.commit('add')
    // 触发actions的方法
    const reduceCount = () => store.dispatch('reduceCount')
    // getters触发
    const newCounts = store.getters.newCounts
    // 有用的周期函数 onMounted - mounted onUnmounted - destroyed
    // 获取原型
    const { proxy } = getCurrentInstance()
    // 不必再配合 async 就可以直接使用 await 了，这种情况下，组件的 setup 会自动变成 async setup 。
    // 请求外部接口
    const postData = await fetch('https://www.wangpeitong.com/api/sd/license/list?column=seq&order=asc&pageNo=1&pageSize=10000&licenseCompanyType=1&isGovernment=0&isShow=1&province=320000&city=320100&county=320115').then(res => res.json()).then(data => data.result);
    console.log(postData)
    // ? fetch完的元素不渲染了
</script>

<style lang="scss" scoped>
button {
    width: 80px;
    height: 32px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &+button {
        margin: 15px;
    }
}
</style>