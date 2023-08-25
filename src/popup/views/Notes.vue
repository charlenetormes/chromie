<template>
    <div class="flex flex-col w-full h-full gap-8 bg-gray-200">
        <div
            class="flex relative w-full items-center justify-center bg-white px-8 py-6"
        >
            <p
                class="notes-back text-xl font-semibold absolute left-8 cursor-pointer"
                @click="goBack"
            >
                &lt;
            </p>
            <p class="w-full text-xl font-semibold text-center">Notes</p>
        </div>
        <div
            class="flex flex-col gap-4 overflow-y-auto px-8"
            style="height:300px;"
        >
            <div
                class="flex items-start justify-start gap-3 w-full p-4 bg-white rounded-xl cursor-pointer"
            >
                <img class="w-5" src="@/assets/bookmark.svg" />
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-semibold">
                        Daily Stand Up Meeting
                    </p>
                    <p class="note-date font-semibold">08/25/2023</p>
                </div>
            </div>

            <div
                v-for="(n, index) in 5"
                :key="index"
                class="flex items-start justify-start gap-3 w-full p-4 bg-white rounded-xl cursor-pointer"
            >
                <img class="w-5" src="@/assets/bookmark.svg" />
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-semibold">
                        How to use Open AI
                    </p>
                    <p class="note-date font-semibold">08/23/2023</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
const store = useStore();

const goBack = async () => {
    store.commit("page", {
        page: "home",
    });
};
</script>
