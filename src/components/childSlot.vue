<!--
 * @Description: 插槽子组件
 * @Author: 逍遥子
 * @Date: 2021-11-03 22:27:44
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-04 00:02:30
 * @FilePath: /PnpmVite/src/components/childSlot.vue
-->
<template>
   <!-- 匿名插槽 -->
   <slot/>
   <!-- 具名插槽 -->
   <slot name="title"/>
   <!-- 作用域插槽 -->
   <slot name="footer" :scope="state"/>
</template>

<script setup>
    import { useSlots, reactive, inject } from 'vue' 
    const state = reactive({
        name: 'Pony',
        age: '27岁'
    })
    // 声明插槽
    const slots = useSlots()
    // 匿名插槽使用情况
    const defaultSlot = reactive(slots.default && slots.default().length)
    console.log(defaultSlot)
    // 具名插槽使用情况
    const titleSlot = reactive(slots.title && slots.title().length)
    console.log(titleSlot)
    // 注入provide
    const provideState = inject('provideState')

    // 子组件触发变化
    provideState.changeName()
</script>

<style lang="scss" scoped>

</style>