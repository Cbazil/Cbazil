<template>
    <div class="relative w-full overflow-x-hidden">
        <div v-if="control.selectedOption === 'Work'">
            <div class="w-full h-[33dvh] hidden md:flex">top</div>
            <div
                ref="scrollContainer"
                class="overflow-x-scroll overflow-y-hidden w-full h-[33dvh] md:h-[64dvh]"
                @wheel.prevent="handleWheel"
            >
                <div class="inline-flex pt-3 min-w-full">
                    <div
                        ref="scrollContainer"
                        class="overflow-x-auto w-full h-[33dvh] md:h-[64dvh] scrollbar-hide"
                        @wheel.prevent="handleWheel"
                    >
                        <div class="flex items-start pt-5 px-10 min-w-max">
                            <div
                                class="w-24 h-px bg-gradient-to-r from-sky-200 to-blue-900 mt-10 shrink-0"
                            />
                            <template v-for="(x, idx) in workXP" :key="idx">
                                <div
                                    class="flex flex-col items-center w-44 shrink-0"
                                >
                                    <div
                                        class="w-20 h-20 p-2 [transform:rotate(45deg)] bg-[image:var(--background-image-gradient-border)] bg-no-repeat overflow-hidden rounded-sm"
                                        :style="{
                                            backgroundColor: x.bg.startsWith(
                                                '[',
                                            )
                                                ? x.bg.slice(1, -1)
                                                : x.bg,
                                        }"
                                    >
                                        <div
                                            class="w-full h-full overflow-hidden"
                                            :class="`bg-${x.bg}`"
                                        >
                                            <img
                                                :src="`/images/${x.logo}`"
                                                class="w-full h-full object-cover"
                                                :style="{
                                                    transform: `rotate(-45deg) scale(${x.scale / 100})`,
                                                }"
                                                alt="Company Logo"
                                            />
                                        </div>
                                    </div>
                                    <div class="mt-6 text-center">
                                        <div
                                            class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
                                        >
                                            <h3
                                                class="hl text-lg font-bold whitespace-nowrap"
                                            >
                                                {{ x.company }}
                                            </h3>
                                        </div>
                                        <span
                                            class="font-thin text-gray-300 text-lg whitespace-nowrap"
                                        >
                                            {{ x.period }}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    v-if="idx < workXP.length - 1"
                                    class="w-24 h-px bg-gradient-to-r from-sky-200 to-blue-900 mt-10 shrink-0"
                                />
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="control.selectedOption === 'Education'">
            <div class="w-full h-[35dvh] hidden md:flex">top</div>
            <div class="overflow-x-scroll h-[33dvh] md:h-[64dvh]">bottom</div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";
import { useHorizontalScroll } from "@/composables/horizontalScroll";
import { workXP, eduXP } from "@/lib/data.js";

const control = useControlStore();

const scrollContainer = useHorizontalScroll();

const handleWheel = (e) => {
    if (!scrollContainer.value) return;
    scrollContainer.value.scrollLeft += e.deltaY;
};
onMounted(() => {
    control.selectedOption = "Work";
});

onUnmounted(() => {
    control.selectedOption = undefined;
});
</script>
