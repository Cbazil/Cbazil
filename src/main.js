import { createApp } from "vue";
import { createPinia } from "pinia";
import { Icon } from "@iconify/vue";
import { createHead } from "@unhead/vue/client";

import "./style.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const head = createHead();

app.component("Icon", Icon);
app.use(createPinia());
app.use(router);
app.use(head);

app.mount("#app");
