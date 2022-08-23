import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import zybtn from "@/components/zybtn/index.vue";
import "element-plus/dist/index.css";
import "./style.css";
import "./index.css";
import mitt from "mitt";
const Mit = mitt();
//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit;
  }
}

const app = createApp(App);

app.config.globalProperties.$Bus = Mit;
app.config.globalProperties.$log = window.console.log;
app.use(ElementPlus);
app.use(router);
app.component("zyBtn", zybtn);
app.mount("#app");
