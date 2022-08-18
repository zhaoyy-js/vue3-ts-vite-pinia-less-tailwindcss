<template>
  <div class="flex">
    <Zybtn
      v-for="(item, index) in tabList"
      :key="index"
      :val="item.name"
      @click="changeTab(item)"
    >
    </Zybtn>
  </div>
  <component :is="componentId"></component>
</template>

<script setup lang="ts">
import { shallowRef, markRaw, reactive } from "vue";
import sonone from "./sonone.vue";
import sontwo from "./sontwo.vue";
import Zybtn from "../zybtn/index.vue";

let componentId = shallowRef(sonone);

let tabList = reactive([
  {
    name: "新闻",
    com: markRaw(sonone),
  },
  {
    name: "音乐",
    com: shallowRef(sontwo),
  },
]);

const changeTab = (item: any) => {
  componentId.value = item.com;
};
</script>

<style scoped></style>
