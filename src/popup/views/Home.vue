<template>
    <div class="flex flex-col w-full h-full py-6 px-8 gap-8">
        <div class="flex w-full">
            <h3 class="text-xl font-medium">My account</h3>
        </div>
        <div
            class="flex flex-col w-full h-full items-center gap-4 justify-center"
        >
            <div
                class="avatar-profile w-16 h-16 rounded-full bg-gray-600 bg-[url('@/assets/avatar-profile.png')]"
            >
                <img
                    src="@/assets/avatar-profile.png"
                    class="rounded-full w-full h-full"
                />
            </div>
            <div class="flex flex-col gap-1 items-center justify-center">
                <h2 class="text-lg font-semibold">Charlene Tormes</h2>
                <p class="text-base  text-gray-700">charlene@inspireteam.com</p>
            </div>
        </div>

        <div class="flex w-full gap-4 items-center">
            <div class="flex p-6 w-32 bg-gray-200 rounded-xl cursor-pointer">
                <div class="flex flex-col gap-3 w-full">
                    <div
                        class="flex flex-col gap-3 items-center justify-center w-full"
                    >
                        <img
                            class="icon w-10 rounded-full p-2"
                            src="@/assets/notes.svg"
                        />
                        <p class=" text-base font-semibold">Notes</p>
                    </div>
                </div>
            </div>
            <div class="flex p-6 w-32 bg-gray-200 rounded-xl cursor-pointer">
                <div class="flex flex-col gap-3 w-full">
                    <div
                        class="flex flex-col gap-3 items-center justify-center w-full"
                    >
                        <img
                            class="icon w-10 rounded-full p-2"
                            src="@/assets/record.svg"
                        />
                        <p class=" text-base font-semibold">Recordings</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
