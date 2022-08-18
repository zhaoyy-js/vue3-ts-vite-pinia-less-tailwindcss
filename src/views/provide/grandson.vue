<template>
  <h1>这个是孙组件</h1>
  <div>{{ res }}</div>

  <div class="mt-4">
    <el-button type="danger" plain @click="change"
      >更改祖宗组件传递的数据</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { inject, onUpdated, reactive, triggerRef } from "vue";

let res = inject("data", reactive([])) as any;

const change = () => {
  res = res.map((item: any) => {
    return {
      id: (item.id += 1),
      name: (item.name += "好牛B啊"),
    };
  });
  console.log(res);
};
// TODO: 数据更新了视图没更新，视图只在第一次更新时进行了响应
onUpdated(() => {
  console.log(res, "跟新了");
});
</script>

<style scoped></style>
