<template>
    <div class="relative bg-white overflow-hidden w-full h-full">
        <div class="max-w-7xl mx-auto">
            <Login v-if="page === 'login'"></Login>
            <main v-else>
                <transition
                    enter-active-class="duration-150 ease-out"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                >
                    <Home></Home>
                </transition>
            </main>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import NavBar from "./components/NavBar.vue";

export default {
    setup() {
        return {};
    },
    components: {
        Home,
        NavBar,
        Login,
    },
    computed: {
        ...mapState({
            count: (state) => state.count,
            page: (state) => state.page,
        }),
    },
    methods: {
        ...mapMutations({
            incrementClick: "increment",
        }),
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
</style>
