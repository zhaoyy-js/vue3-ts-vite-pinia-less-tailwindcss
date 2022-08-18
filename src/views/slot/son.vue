<template>
  <div>
    <h1>一级标题：这是个插槽演示组件</h1>
    <slot></slot>
    <slot name="one"></slot>
    <slot name="two" :datas="datas"></slot>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

let datas = reactive([
  {
    id: 0,
    name: "我是作用域插槽",
  },
  {
    id: 1,
    name: "菜鸡演示",
  },
]);
</script>

<style scoped></style>
