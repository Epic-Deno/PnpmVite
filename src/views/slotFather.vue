<!--
 * @Description: 插槽父组件
 * @Author: 逍遥子
 * @Date: 2021-11-03 22:38:11
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-04 00:05:02
 * @FilePath: /PnpmVite/src/views/slotFather.vue
-->
<template>
  <p>{{ name }}</p>
  <child>
    <!-- 匿名插槽 -->
    <p>我是匿名插槽</p>
    <hr />
    <!-- 具名插槽 -->
    <template #title>
      <h4>Pony</h4>
      <h4>Pony</h4>
      <h4>Pony</h4>
    </template>
    <hr />
    <!-- 作用域插槽 -->
    <template #footer="{ scope }">
      <footer>作用域插槽-姓名：{{ scope.name }}, 年龄：{{ scope.age }}</footer>
      <!-- <span>{{ scope.name }}</span> -->
    </template>
  </child>
</template>

<script setup>
    // 接入子组件
    import child from "@/components/childSlot.vue";
    import { provide, watch, ref } from "vue";

    const name = ref("Tony");
    // 初始化provide
    provide("provideState", {
        name,
        changeName: () => {
            name.value = 'Pony'
        },
    });
    // 监听下变化
    watch(name, () => {
        console.log(`name变成了${name.value}`);
        setTimeout(() => {
            console.log(name.value); // Tom
        }, 1000);
    });
</script>

<style lang="scss" scoped>
</style>