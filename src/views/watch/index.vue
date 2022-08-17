<template>
  <div>{{ initVal }}</div>
  <div>{{ initVal2 }}</div>
  <el-button ype="danger" plain @click="change">change</el-button>

  <div>
    <div>{{ message }}</div>
    <el-button ype="danger" plain @click="change2">change2</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, watch, reactive } from "vue";

let initVal: Ref<number> = ref(1);
let initVal2: Ref<string> = ref("hello");

/* 

    watch 需要侦听特定的数据源，并在单独的回调函数中执行副作用

    watch第一个参数监听源

    watch第二个参数回调函数cb（newVal,oldVal）

    watch第三个参数一个options配置项是一个对象
    
    {

        immediate:true //是否立即调用一次

        deep:true //是否开启深度监听;
    
    };

}

*/
// watch(
//   initVal,
//   (newval, oldval) => {
//     console.log(newval, "newval");
//     console.log(oldval, "oldval");
//   },
//   {
//     immediate: false, //是否立即执行
//     deep: false, // 是否开启深度监听
//   }
// );

watch(
  [initVal, initVal2],
  (newval, oldval) => {
    console.log(newval, "newval");
    console.log(oldval, "oldval");
  },
  {
    immediate: false, //是否立即执行
    deep: false, // 是否开启深度监听
  }
);
// 监听多个第一个参数是个数组

const change = () => {
  initVal.value++;
};

type bar = {
  name: string;
  id: number;
};
type Nav = {
  nav: bar;
};

let message: Nav = reactive({
  nav: {
    name: "dd",
    id: 1,
  },
});

watch(
  message,
  (newval, oldval) => {
    console.log(newval, "newval");
    console.log(oldval, "oldval");
  },
  {
    deep: true,
  }
);

const change2 = () => {
  message.nav.name = "测试中...";
};
</script>

<style scoped></style>
