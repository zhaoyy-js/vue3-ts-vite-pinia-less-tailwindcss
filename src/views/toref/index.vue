<template>
  <div class="ml-5">
    <div>{{ state }}</div>
    <el-button type="primary" plain @click="change">按钮toRef</el-button>
  </div>

  <div class="ml-5">
    <div>{{ obj2 }}</div>
    <el-button type="primary" plain @click="change2">按钮toRefs</el-button>
  </div>
</template>

<script setup lang="ts">
/* 
    toRef:如果原始对象是非响应式的就不会更新视图 数据是会变的
    toRefs:如果原始对象是  响应式的 是会更新视图并且改变数据的,且可以帮我们批量创建ref对象主要是方便我们解构使用
    toRaw: 把响应式对象转化为普通对象。
*/
import { reactive, toRef, toRefs } from "vue";

const obj = reactive({
  foo: 1,
  bar: 1,
});

const state = toRef(obj, "bar");

const change = () => {
  state.value++;
  console.log(obj, state);
};

const obj2 = reactive({
  foo: 1,
  bar: 1,
}); //原始对象是响应式的视图会随着跟新，反之则不会。

let { foo, bar } = toRefs(obj2);
const change2 = () => {
  foo.value++;
  bar.value++;
};
</script>

<style scoped></style>
