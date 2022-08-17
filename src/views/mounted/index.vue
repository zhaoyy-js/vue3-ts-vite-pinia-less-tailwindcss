<template>
  <div class="less">
    <span class="less-num">2</span>
  </div>
  <login v-if="flag"></login>
  <el-button class="mt-12 ml-3" type="danger" plain @click="change">
    销毁组件
  </el-button>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import login from "../login/index.vue";

let flag: Ref<boolean> = ref(true);

const change = () => {
  flag.value = !flag.value;
};
</script>

<style lang="less" scoped>
.less {
  &-num {
    color: red;
  }
}
</style>
