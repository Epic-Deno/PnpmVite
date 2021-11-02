<!--
 * @Description: 首页
 * @Author: 逍遥子
 * @Date: 2021-11-01 22:08:00
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-02 23:15:09
 * @FilePath: /PnpmVite/src/views/home.vue
-->
<template>
    <p class="welcome">hello, 我是{{ name }}</p>
    <button @click="changeName('zhangzhen')">改变名称</button>
    <ul>
        <li v-for="item in Pony" :key="item">
            <span>{{ item }}</span>
        </li>
    </ul>
    <span>name: {{ name }}</span>&nbsp;<span>age: {{ age }}</span>
    <p>{{ baseName }} X 4 = {{ newNum }}</p>
    <hr/>
    <h4>v-model绑定的参数：</h4>
    <p>{{ state.name }}  {{ state.age }}</p>
    <hr/>
    <input type="text" placeholder="请输入子组件的名称" v-model="state.childName"><button @click="changeChild">触发子组件的事件</button>
    <!-- 子组件 -->
    <child ref="childRef" name="Pony" v-model="state.name" v-model:age="state.age" @updateName="changeName"/>
</template>

<script setup>
   import { ref, reactive, toRefs, computed, watch } from 'vue'
   import child from '@/components/HelloWorld.vue'
    const color = ref('cyan')
    const Pony = reactive({
        name: 'Pony',
        age: 28,
        hobby: 'coding',
        counts: 1
    })
    const state = reactive({
        name: 'Tony',
        age: 38,
        childName: null
    })
    const baseName = ref(5)
    const newNum = computed(() => {
        return baseName.value * 4
    })
    //  拿到子组件
    const childRef = ref('childRef')
    // 单个监听
    // watch(
    //     () => Pony.counts,
    //     (newVal, oldval) => {
    //         console.log(Pony.counts)
    //         console.log(`监听到的新数据: ${newVal}`)
    //         console.log(`监听到的老数据: ${oldval}`)
    //     },
    //     {
    //         immediate: true,
    //         deep: true
    //     }
    // )
    // 多个变量的监听
    watch(
        [ () => Pony.counts, () => state.childName], 
        ([newCounts, newChildName], [prevCounts, prevChildName]) => {
            console.log(`新的counts: ${ newCounts }`)
            console.log(`老的counts: ${ prevCounts }`)

            console.log(`新的childName: ${ newChildName }`)
            console.log(`老的childName: ${ prevChildName }`)
            if (newChildName) {
                childRef.value.mainTag = newChildName
            }
        },
        {
            immediate: true,
            deep: true
        }
    )
    const changeChild = () => childRef.value.changeVersions('Vue 3.2.16')
    const { name, age } = toRefs(Pony) // 得到的是一个ref
    // console.log(name.value, age.value)
    const changeName = (text = '张朕') => {
        Pony['name'] = text
        Pony['counts']++
    }
</script>

<style lang="scss" scoped>
.welcome {
    color: v-bind(color);
}
</style>