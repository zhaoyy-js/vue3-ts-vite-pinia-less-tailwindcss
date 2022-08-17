<template>
  <div>{{ age }}</div>
  <div>{{ total }}</div>
  <el-button type="danger" plain @click="changeVal">changeVal</el-button>

  <div>
    <span>{{ mul }}</span>
    <el-button type="danger" plain @click="mul = 100">click</el-button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, Ref } from "vue";

let age: Ref<number> = ref(0);
let initNum = 1;

// 1计算属性函数式写法
let total = computed(() => {
  return (initNum += age.value);
  //   return (age.value += initNum); 这样写会影响原数据
});

const changeVal = () => {
  age.value++;
};
// 计算属性对象式写法

let price: Ref<number | string> = ref(1);

let mul = computed({
  get: () => {
    return price.value;
  },
  set: (value) => {
    price.value = `set${value}`;
  },
});
// 对象形式的computed第一次不会触发set

// let mul = computed(()=>{
//     return `set${price.value}`
// })

</script>

<style scoped></style>
