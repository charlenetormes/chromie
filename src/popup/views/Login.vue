<template>
    <div
        style="height:500px;width:400px"
        class="flex flex-col w-full items-center justify-center py-20 gap-8"
    >
        <div class="flex flex-col">
            <img src="@/assets/logo.png" />
            <p class="text-sm font-light text-gray-500">Chromie.AI</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
            <h1 class="text-3xl font-extrabold tracking-wide font-poppins">
                Welcome back!
            </h1>
            <p class="text-md font-light opacity-80">
                Sign in using your google account
            </p>
        </div>
        <div class="flex flex-col">
            <div
                @click="login"
                class="flex flex-row items-center justify-center w-56 gap-4 px-4 py-3 rounded-full border-2 border-gray-400 bg-white hover:bg-gray-400 cursor-pointer hover:transition-all"
            >
                <img class="w-6" src="@/assets/google-logo.svg" />
                <p class="font-semibold text-base">Google</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";

const store = useStore();

const login = async () => {
    store.commit("page", {
        page: "home",
    });
};
</script>
