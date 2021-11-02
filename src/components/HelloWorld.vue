<!--
 * @Description: 选项的勾
 * @Author: 逍遥子
 * @Date: 2021-10-21 10:16:57
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-02 23:13:59
 * @FilePath: /PnpmVite/src/components/HelloWorld.vue
-->
<script setup>
import { ref, reactive, nextTick, onMounted, defineExpose, toRefs } from 'vue'
 // import { defineEmits, defineProps } from 'vue'
// defineEmits和defineProps在<script setup>中自动可用，无需导入
// 在标准组件写法里，子组件的数据都是默认隐式暴露给父组件的，但在 script-setup 模式下，
// 所有数据只是默认 return 给 template 使用，不会暴露到组件外，所以父组件是无法直接通过挂载 ref 变量获取子组件的数据。
// 如果要调用子组件的数据，需要先在子组件显示的暴露出来，才能够正确的拿到，这个操作，就是由 defineExpose 来完成。
defineProps({
  name: String,
  modelValue: String,
  age: Number
})
const emit = defineEmits(['updateName', 'update:modelValue', 'update:age'])
const changeFartherName = () => {
  emit('updateName', '逍遥子')
  emit('update:modelValue', 'Tony Song')
  emit('update:age', 18)

}
const count = ref(0)
const userList = reactive({
  users: [
    {
      title: '学生A',
      id: 1
    },
    {
      title: '学生B',
      id: 2
    },
    {
      title: '学生C',
      id: 3
    },
  ],
  targetID: null
})
const changeCounts = (id) => {
  userList.targetID = id
}
const state = reactive({
  mainTag: 'Vue3'
})
const changeVersions = (text) => {
  state.mainTag = text
}
onMounted(() => {
  console.log('开始挂载onMounted')
})
nextTick(() => {
  console.log('开始nextTick')
  emit('update:age', 43)
})
// 暴露给父组件，父组件通过ref API拿到子组件暴露的数据
defineExpose({
  ...toRefs(state), // 结构出子变量
  changeVersions
})
</script>

<template>
  <hr/>
  <h4>子组件</h4>
  <p>{{ name }}</p>
  <button @click="changeFartherName">改变父组件名称</button>
  <p>
    <span>{{ modelValue }}</span>  <span>{{ age }}</span>
  </p>
  <ul class="question">
    <li>
      <span v-for="(item, index) in userList.users" :key="index">{{ item.title }}（<span class="inlineSpan" @click="changeCounts(item.id)"><img v-show="item.id == userList.targetID" src="../assets/gou.png" alt=""></span>）</span>
    </li>
  </ul>
  <hr/>
  <h4>用于解析暴露给父组件的参数和方法：</h4>
  <span>{{ state.mainTag }}</span>
</template>

<style lang="scss" scoped>

a {
  color: #42b983;
}
.question {
  width: max-content;
  border: 1px solid #333;
  li {
    width: 100%;
    padding: 4px 6px;
    img {
      width: 40px;
      height: 30px;
    }
    .inlineSpan {
      display: inline-block;
      width: 40px;
      height: 30px;
      cursor: pointer;
    }
  }
}
button {
  margin: 8px 0;
}
</style>
