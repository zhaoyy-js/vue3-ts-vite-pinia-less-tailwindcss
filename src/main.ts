import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import "./index.css";

const app = createApp(App);
app.config.globalProperties.$log = window.console.log;
app.use(ElementPlus);
app.use(router);
app.mount("#app");
