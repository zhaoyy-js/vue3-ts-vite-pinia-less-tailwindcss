<template>
  <section id="ref">
    <p>
      {{ msg }}
    </p>
    <input v-model="msg" type="text" />
    <el-button @click="changeMsg">更改ref值</el-button>
  </section>

  <section id="shallowRef">
    <el-button type="success" @click="changeShallowRefMessage" plain>shallowRef</el-button>
    <div>{{ shallowRefMessage }}</div>
  </section>

  <section id="customRef">
    <div>{{ myrefMessage }}</div>
    <el-button type="warning" @click="changeMyrefMessage" plain>changeMyrefMessage</el-button>
  </section>
</template>

<script setup lang="ts">
/* 
    认识ref全家桶
    ref:  接受一个内部值并返回一个响应式可改变的ref对象，ref对象仅有一个  .value property,指向内部对象。
    isRef:  判断是否是一个ref对象。
    shallowRef: 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的
    triggerRef: 强制更新页面DOM
    customRef:  customRef是个工厂函数要求我们返回一个对象 并且实现 get 和 set;
    
    *：ref视图更新下会触发底层triggerRefValue 更新，这样会造成shallowRef视图也更新。
*/

import { ref, Ref, isRef, shallowRef, triggerRef, customRef } from "vue";
const msg: Ref<string | number> = ref("测试");
const newmsg = "李白";
const changeMsg = () => {
  msg.value = "开发写什么测试用例？";
  console.log(isRef(msg), isRef(newmsg));
};

// shallowRef
type obj = {
  name: string;
  age?: number;
};

const shallowRefMessage: Ref<obj> = shallowRef({
  name: "Yangyang",
});

const changeShallowRefMessage = () => {
  shallowRefMessage.value.name = "zyy";
  console.log(shallowRefMessage.value);
  // 直接修改值不是响应式的，可以通过一下二种方式解决。
  // shallowRefMessage.value = {
  //     name:'caijiyangyang'
  // }
  triggerRef(shallowRefMessage);
};

// *:customRef自定义ref

function Myref<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track(); //用来收集依赖
        return value;
      },
      set(newVal: T) {
        console.log("set");
        value = newVal;
        trigger(); // 用来触发更新
      },
    };
  });
}

let myrefMessage = Myref("小满");
const changeMyrefMessage = () => {
  myrefMessage.value = "大满";
};
</script>

<style scoped></style>
