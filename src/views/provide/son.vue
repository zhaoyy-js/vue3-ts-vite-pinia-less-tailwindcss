<template>
  <grandson></grandson>

  <div class="mt-3">
    <h1>这个是子组件</h1>
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive, Ref, ref } from "vue";
import grandson from "./grandson.vue";
let res = inject<Ref<string>>("msg", ref("1"));
let data = inject("data", reactive([]));

console.log(res.value);
</script>

<style scoped></style>
