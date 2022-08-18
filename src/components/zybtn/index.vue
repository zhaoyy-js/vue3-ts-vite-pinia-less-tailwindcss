<template>
  <div>
    <div
      class="ml-5 mt-2 h-10 rounded p-2 inline-block text-red-400 bg-purple-100 bg-opacity-25"
    >
      {{ val }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  val: string;
}

withDefaults(defineProps<Props>(), {
  val: "小菜鸡洋洋",
});
</script>

<style scoped></style>
