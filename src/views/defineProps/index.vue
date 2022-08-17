<template>
  <div>
    <subcom
      title="这个是父组件通过defineProps传递过去的"
      :data="data"
      @emitSon="emitSon"
    ></subcom>

    <div class="mt-4 pl-4">以下</div>
    <div v-if="parDataFlag" class="mt-4 pl-5">
      {{ parData }}
    </div>

    <div>{{ $log(parDataFlag) }}</div>
  </div>
</template>

<script setup lang="ts">
import subcom from "@/components/subcomponent/index.vue";
import { reactive, computed } from "vue";

type Data = {
  id: number;
  name: string;
};

let data: Array<Data> = [
  {
    id: 0,
    name: "html",
  },
  {
    id: 1,
    name: "css",
  },
  {
    id: 2,
    name: "js",
  },
];

let parData = reactive({});
const emitSon = (data: Object) => {
  Object.assign(parData, data); //解决直接赋值不会有响应式问题
  console.log(data, "data");
};

const parDataFlag = computed(() => {
  return Object.keys(parData).length > 0 ? true : false;
});
</script>

<style lang="less" scoped></style>
