<template>
  <div
    @click="change"
    class="w-40 h-8 text-center leading-8 bg-red-300 bg-opacity-25 rounded-lg mt-10 ml-4 mb-3 cursor-pointer"
  >
    这是a组件。。。
  </div>
</template>

<script setup lang="ts">
// getCurrentInstance 获取当前组件实例
import { getCurrentInstance, ref } from "vue";

let refMsg = ref("a组件的ref-value值");

const _this = getCurrentInstance();
const change = () => {
  _this?.proxy?.$Bus.emit("emitOne", refMsg.value);
};
</script>

<style scoped></style>
