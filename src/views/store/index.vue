<template>
  <div>stateData:{{ $store.data }}</div>
  <div>stateCurrent:{{ $store.current }}</div>
  <div>stateAge:{{ $store.age }}</div>

  <el-button class="mt-10 mb-10" @click="change">更改state</el-button>
  <el-button class="mt-10 mb-10" @click="change2"
    >通过mutaion更改state</el-button
  >
  <el-button class="mt-10 mb-10" @click="change3"
    >通过mutaion异步更改state</el-button
  >
</template>

<script setup lang="ts">
import { useTestStore } from "@/store";
import { storeToRefs } from "pinia";

const $store = useTestStore();
const { current, age } = storeToRefs($store);

const change = () => {
  /* 
        对象形式更改：
        $store.$patch({
        current: 20,
        age: 30,
        });
    */

  $store.$patch((state: { current: number; age: number }) => {
    state.current++;
    state.age++;
  });

  /* 
        直接结构会失去响应式,使用storeToRefs解决,其原理和 toRefs差不多
        循环store 通过 isRef isReactive 判断 如果是响应式对象直接拷贝一份给refs 对象 将其原始对象包裹toRef 使其变为响应式对象
    */
  console.log(current.value, age.value, "tmd---->");
  console.log($store.current, $store.age);

  $store.data.forEach((element: any) => {
    element.id++;
  });
};

const change2 = () => {
  $store.setCurrent();
};

const change3 = () => {
  $store.setData();
};
</script>

<style scoped></style>
