<template>
  <div>
    count:{{ count }}
    <el-button @click="addCount">count++</el-button>
  </div>
</template>
​
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
// 导入store
const store = useStore()
// 将count赋值
const count = ref(store.state.count)
// count增加方法
function addCount() {
  count.value++
  store.commit('SET_COUNT', count.value)
}
</script>
​
<!-- <style scoped>
​
</style> -->