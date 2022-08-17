<template>
  <div>
    {{ person }}
    <el-button class="ml-4" type="danger" plain @click="change">更改</el-button>
  </div>

  <div>
    {{ dataArr }}
    <el-button class="ml-4" type="danger" plain @click="change2"
      >更改</el-button
    >
  </div>

  <div>
    <span>{{ state }}</span>
    <el-button class="ml-4" type="danger" plain @click="change3">
      更改
    </el-button>
    <el-button class="ml-4" type="danger" plain @click="change4">
      更改
    </el-button>
  </div>
</template>

<script setup lang="ts">
/* 
  reactive: 用来绑定复杂的数据类型,修改值无需 .value

  shallowReactive： 只能对浅层的数据 如果是深层的数据只会改变值 不会改变视图
*/

import { reactive, shallowReactive } from "vue";

// 01---------------------------> reactive绑定对象
function promiseData() {
  return new Promise((resolve) => {
    resolve({ name: "js", id: "0" });
  });
}

let person = reactive({
  name: "zhaoyy",
});
const change = async () => {
  const res = await promiseData();
  Object.assign(person, res); // 直接赋值改变了proxy代理所以失去了响应式，解决reactive对象直接赋值无响应问题，
  console.log(person);
};

// 02---------------------------> reactive绑定数组 根据不同的情况采用以下方式去赋值
type dataObjType = {
  id: number;
  name: string;
};

type dataArrType = {
  list: Array<dataObjType>;
};

let dataArr = reactive<dataArrType>({
  list: [
    {
      id: 0,
      name: "js",
    },
  ],
});

function newData() {
  return new Promise((resolve) => {
    resolve([
      {
        id: 1,
        name: "html",
      },
      {
        id: 2,
        name: "css",
      },
    ]);
  });
}

const change2 = async () => {
  const res = await newData();
  dataArr.list = res as any;
  // dataArr.list.push(...(res as any));
};

const obj = {
  a: 1,
  first: {
    b: 2,
    second: {
      c: 3,
    },
  },
};

const state = shallowReactive(obj);

function change3() {
  state.a = 7;
}
function change4() {
  state.first.b = 8;
  state.first.second.c = 9;
  console.log(state);
}
</script>

<style scoped></style>
