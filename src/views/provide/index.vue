<template>
  <son></son>
</template>

<script setup lang="ts">
import { ref, provide, reactive } from "vue";
import son from "./son.vue";
let msg = ref("从老祖宗传递过来的");
let data = reactive([
  {
    id: 0,
    name: "老祖宗组件",
  },
]);

provide("msg", msg);
provide("data", data);
</script>

<style scoped></style>
