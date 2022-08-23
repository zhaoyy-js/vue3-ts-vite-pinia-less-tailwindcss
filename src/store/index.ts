import { defineStore } from "pinia";
import { Names } from "./store-namespace";

interface Data {
  id: number;
  name: string;
}

const data: Array<Data> = [
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

function dataTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        data.map((item) => {
          item.id++;
          return item;
        })
      );
    }, 1000);
  });
}

export const useTestStore = defineStore(Names.Test, {
  state: () => {
    return {
      current: 1,
      age: 2,
      data,
    };
  },
  //类似于computed 可以帮我们去修饰我们的值
  getters: {},
  //可以操作异步 和 同步提交state
  actions: {
    setCurrent() {
      this.current++;
    },

    async setData() {
      try {
        const res = await dataTwo();
        this.data = res as Array<Data>;
      } catch (error) {
        console.error(`error:${error}`);
      }
      // this.data =
    },
  },
});
