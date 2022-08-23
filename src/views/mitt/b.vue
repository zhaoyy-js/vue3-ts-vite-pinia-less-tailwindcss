<template>
  <h2>{{ datas }}</h2>
  <div>这是b组件。。。</div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
const _this = getCurrentInstance();

let datas = ref("");
_this?.proxy?.$Bus.on("emitOne", (data) => {
  console.log(`data:${data}`);
  datas.value = data as string;
});

// _this?.proxy?.$Bus.off("emitOne", data); 移除
// _this?.proxy?.$Bus.all.clear() 清除所有监听
</script>

<style scoped></style>
