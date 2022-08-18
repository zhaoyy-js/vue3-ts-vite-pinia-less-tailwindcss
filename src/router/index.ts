/* 
    引入路由对象
*/
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

/* 
    路由数组的类型 RouteRecordRaw
*/
const routes: Array<RouteRecordRaw | any> = [
  {
    path: "/",
    redirect: "/ref",
  },
  {
    path: "/ref",
    component: () => import("../views/refall/index.vue"),
    meta: {
      name: "ref全家桶",
    },
  },
  {
    path: "/reactive",
    component: () => import("../views/reactive/index.vue"),
    meta: {
      name: "reactive全家桶",
    },
  },
  {
    path: "/toref",
    component: () => import("../views/toref/index.vue"),
    meta: {
      name: "toref全家桶",
    },
  },
  {
    path: "/computed",
    component: () => import("../views/computed/index.vue"),
    meta: {
      name: "computed",
    },
  },
  {
    path: "/watch",
    component: () => import("../views/watch/index.vue"),
    meta: {
      name: "watch",
    },
  },
  {
    path: "/mounted",
    component: () => import("../views/mounted/index.vue"),
    meta: {
      name: "组件生命周期",
    },
  },
  {
    path: "/defineProps",
    component: () => import("../views/defineProps/index.vue"),
    meta: {
      name: "父子传值",
    },
  },
  {
    path: "/zybtn",
    component: () => import("../views/zybtn/index.vue"),
    meta: {
      name: "全局组件注册",
    },
  },
  {
    path: "/com",
    component: () => import("../views/com/index.vue"),
    meta: {
      name: "动态组件",
    },
  },
];

export { routes };

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
