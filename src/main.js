import { createApp } from "vue";
import { router } from "./router"; // 라우터 추가하고
import axios from "axios";
import App from "./App.vue";

const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(router); // 사용 설정 하기

app.mount("#app");
