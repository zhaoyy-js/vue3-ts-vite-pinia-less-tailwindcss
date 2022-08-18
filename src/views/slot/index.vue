<template>
  <slotval>
    <template #default>
      <h2>我是二级标题。。。</h2>
    </template>

    <template #one>
      <h3>我是三级标题。。。</h3>
    </template>
    <template #two="{ datas }">
      <h3 v-for="item in datas" :key="item.id">{{ item.name }}</h3>
    </template>
  </slotval>
</template>

<script setup lang="ts">
import slotval from "./son.vue";
</script>

<style scoped></style>
