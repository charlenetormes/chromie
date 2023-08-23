import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

const store = createStore({
    state() {
        return {
            count: 0,
            page: "login",
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        page(state, payload) {
            state.page = payload.page;
        },
    },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
