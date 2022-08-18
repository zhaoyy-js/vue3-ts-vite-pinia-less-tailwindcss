<template>
  <div class="bg-green-500 bg-opacity-25 pl-5">
    <div class="ml-5 mt-10 mb-3 text-red-400 hover:underline">{{ title }}</div>
    <div v-for="item in data" :key="item.id">{{ item.name }}</div>
    <el-button @click="emitSon">------------>子穿父>------------></el-button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Data {
  id: number;
  name: string;
}
// defineProps<{
//   title: string;
//   data: Array<Data>;
// }>();

type Props = {
  title?: string;
  data?: Array<Data>;
};
withDefaults(defineProps<Props>(), {
  title: "张三",
  data: () => [
    {
      id: 0,
      name: "html",
    },
  ],
});

let sonData = {
  id: 0,
  name: "这是子组件传递过去的",
};

const emit = defineEmits(["emitSon"]); //defineEmits 注册了一个自定义事件
const emitSon = () => {
  emit("emitSon", sonData); //点击click 触发 emit 去调用我们注册的事件 然后传递参数
};
</script>

<style lang="less" scoped></style>
