<template>
  <div class="dom ml-6">{{ msg }}</div>
  <el-button class="mt-12 ml-3" type="danger" plain @click="change"
    >查看生命周期变化</el-button
  >
</template>

<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onUpdated,
  ref,
  Ref,
} from "vue";
let msg: Ref<number> = ref(1);
const change = () => {
  msg.value++;
};

onBeforeMount(() => {
  let msgDom = document.querySelector(".dom");
  console.dir(msgDom, "msgDom");
  console.log("onBeforeMount--->");
});
onMounted(() => {
  console.log("onMounted--->");
  let msgDom = document.querySelector(".dom");
  console.dir(msgDom, "msgDom");
});

onBeforeUpdate(() => {
  console.log(msg.value, "onBeforeUpdate==========>msgValue");
  console.log("onBeforeUpdate------>");
});

onUpdated(() => {
  console.log(msg.value, "onUpdated==========>msgValue");
  console.log("onUpdated----->");
});

onBeforeUnmount(() => {
  console.log("onBeforeMount---->");
});

onUnmounted(() => {
  console.log("onUnmounted----->");
});
</script>

<style scoped></style>
