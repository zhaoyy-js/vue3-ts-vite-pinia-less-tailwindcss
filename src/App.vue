<template>
  <div>
    <router-view></router-view>

    <div class="mt-10 mb-10">环境变量：{{ ENV }}</div>
    <div class="mt-12 ml-5">
      <template v-for="(item, index) in routes">
        <el-button
          v-if="index > 0"
          type="success"
          plain
          @click="jump(item.path)"
        >
          {{ item.meta.name }}
        </el-button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from "./router";
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
const router = useRouter();
const route = useRoute();

const jump = (item: string) => {
  router.push(item);
};

const ENV = computed(() => {
  return import.meta.env;
});
console.log(import.meta.env.VITE_BASEURL);
</script>

<style scoped></style>
