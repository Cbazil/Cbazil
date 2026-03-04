<template>
    <div class="relative w-full overflow-x-hidden">
        <Teleport to="body">
            <div
                v-if="expandedPos && selectedWork"
                class="fixed z-[9999] pointer-events-none"
                :style="{
                    left: expandedPos.x + 'px',
                    top: expandedPos.y + 'px',
                    transform: 'translate(-50%, -50%)',
                    marginTop: '-150px',
                }"
            >
                <div
                    :key="selectedWork.id"
                    class="diamond-growing p-[6px] bg-[image:var(--background-image-gradient-border)] bg-no-repeat rounded-sm"
                    :style="{ backgroundColor: bgColor(selectedWork.bg) }"
                >
                    <div
                        class="w-full h-full overflow-hidden"
                        :style="{ backgroundColor: bgColor(selectedWork.bg) }"
                    >
                        <img
                            :src="`/images/${selectedWork.logo}`"
                            class="w-full h-full object-cover"
                            :style="{
                                transform: `rotate(-45deg) scale(${selectedWork.scale / 100})`,
                            }"
                            alt="Logo"
                        />
                    </div>
                </div>
            </div>
        </Teleport>

        <!-- WORK -->
        <div v-if="control.selectedOption === 'Work'">
            <div class="w-full h-[35dvh] hidden md:flex flex-row justify-end">
                <div class="flex items-center w-5/9 h-full">
                    <span
                        class="font-thin text-center mt-10"
                        v-if="wSelectedPeriod"
                        v-html="wSelectedPeriod.replace(' - ', '<br> - <br>')"
                    />
                    <div class="px-6">
                        <div
                            class="bg-gradient-to-tr mb-2 from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
                        >
                            <h3 class="hl text-2xl font-bold whitespace-nowrap">
                                {{ control.workXPSelection }}
                            </h3>
                        </div>
                        <span class="text-lg">{{ wSelectedOccupation }}</span>
                        <br />
                        <span class="font-thin text-md">{{
                            wSelectedDesc
                        }}</span>
                    </div>
                </div>
            </div>
            <div
                ref="scrollEl"
                class="overflow-x-scroll overflow-y-hidden w-full h-[33dvh] md:h-[64dvh] scrollbar-hide"
                @wheel.prevent="handleWheel"
            >
                <div class="flex items-start pt-5 px-10 min-w-max">
                    <div
                        class="w-24 h-px bg-gradient-to-r from-sky-200 to-blue-900 mt-10 shrink-0"
                    />
                    <template v-for="(x, idx) in workXP" :key="x.company">
                        <div class="flex flex-col items-center w-44 shrink-0">
                            <div
                                :ref="
                                    (el) => {
                                        if (el) diamondEls[x.company] = el;
                                    }
                                "
                                @click="toggleSelect(x, x.company, 'work')"
                                class="w-20 h-20 p-2 cursor-pointer [transform:rotate(45deg)] bg-[image:var(--background-image-gradient-border)] bg-no-repeat hover:outline hover:outline-2 hover:outline-emerald-500 hover:outline-offset-0 transition-opacity duration-300 overflow-hidden rounded-sm"
                                :class="{
                                    'opacity-0 pointer-events-none':
                                        control.workXPSelection === x.company,
                                }"
                                :style="{ backgroundColor: bgColor(x.bg) }"
                            >
                                <div class="w-full h-full overflow-hidden">
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
                            <div
                                class="mt-6 text-center transition-opacity duration-300"
                                :class="{
                                    'opacity-0':
                                        control.workXPSelection === x.company,
                                }"
                            >
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
                                    >{{ x.period }}</span
                                >
                            </div>
                        </div>
                        <div
                            v-if="idx < workXP.length - 1"
                            class="w-24 h-px bg-gradient-to-r from-sky-200 to-blue-900 mt-10 shrink-0"
                        />
                    </template>
                    <div class="w-[50vw] shrink-0" />
                </div>
            </div>
        </div>

        <!-- EDUCATION -->
        <div v-if="control.selectedOption === 'Education'">
            <div class="w-full h-[35dvh] hidden md:flex flex-row justify-end">
                <div class="flex items-center w-5/9 h-full">
                    <span
                        class="font-thin text-center mt-10"
                        v-if="eSelectedPeriod"
                        v-html="eSelectedPeriod.replace(' - ', '<br> - <br>')"
                    />
                    <div class="px-6">
                        <div
                            class="bg-gradient-to-tr mb-2 from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
                        >
                            <h3 class="hl text-2xl font-bold whitespace-nowrap">
                                {{ control.eduXPSelection }}
                            </h3>
                        </div>
                        <span class="text-lg">{{ eSelectedOccupation }}</span>
                        <br />
                        <span class="font-thin text-md">{{
                            eSelectedDesc
                        }}</span>
                    </div>
                </div>
            </div>
            <div
                ref="scrollEl"
                class="overflow-x-scroll overflow-y-hidden w-full h-[33dvh] md:h-[64dvh] scrollbar-hide"
                @wheel.prevent="handleWheel"
            >
                <div class="flex items-start pt-5 px-10 min-w-max">
                    <div
                        class="w-24 h-px bg-gradient-to-r from-sky-200 to-blue-900 mt-10 shrink-0"
                    />
                    <template v-for="(x, idx) in eduXP" :key="x.institute">
                        <div class="flex flex-col items-center w-44 shrink-0">
                            <div
                                :ref="
                                    (el) => {
                                        if (el) diamondEls[x.institute] = el;
                                    }
                                "
                                @click="toggleSelect(x, x.institute, 'edu')"
                                class="w-20 h-20 p-2 cursor-pointer [transform:rotate(45deg)] bg-[image:var(--background-image-gradient-border)] bg-no-repeat hover:outline hover:outline-2 hover:outline-emerald-500 hover:outline-offset-0 transition-opacity duration-300 overflow-hidden rounded-sm"
                                :class="{
                                    'opacity-0 pointer-events-none':
                                        control.eduXPSelection === x.institute,
                                }"
                                :style="{ backgroundColor: bgColor(x.bg) }"
                            >
                                <div class="w-full h-full overflow-hidden">
                                    <img
                                        :src="`/images/${x.logo}`"
                                        class="w-full h-full object-cover"
                                        :style="{
                                            transform: `rotate(-45deg) scale(${x.scale / 100})`,
                                        }"
                                        alt="Institute Logo"
                                    />
                                </div>
                            </div>
                            <div
                                class="mt-6 text-center transition-opacity duration-300"
                                :class="{
                                    'opacity-0':
                                        control.eduXPSelection === x.institute,
                                }"
                            >
                                <div
                                    class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
                                >
                                    <h3
                                        class="hl text-lg font-bold whitespace-nowrap"
                                    >
                                        {{ x.institute }}
                                    </h3>
                                </div>
                                <span
                                    class="font-thin text-gray-300 text-lg whitespace-nowrap"
                                    >{{ x.period }}</span
                                >
                            </div>
                        </div>
                        <div
                            v-if="idx < eduXP.length - 1"
                            class="w-24 h-px bg-gradient-to-r from-sky-200 to-blue-900 mt-10 shrink-0"
                        />
                    </template>
                    <div class="w-[50vw] shrink-0" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    ref,
    reactive,
    computed,
    watch,
    nextTick,
    onMounted,
    onUnmounted,
} from "vue";
import { useControlStore } from "@/stores/main.js";
import { workXP, eduXP } from "@/lib/data.js";

const control = useControlStore();
const scrollEl = ref(null);
const diamondEls = reactive({});
const expandedPos = ref(null);
const selectedWork = ref(null);
let selectingInProgress = false;
let stopInnerWatch = null;

const bgColor = (bg) => (bg.startsWith("[") ? bg.slice(1, -1) : bg);

const wSelectedItem = computed(() =>
    workXP.find((i) => i.company === control.workXPSelection),
);
const wSelectedPeriod = computed(() => wSelectedItem.value?.period);
const wSelectedOccupation = computed(() => wSelectedItem.value?.occupation);
const wSelectedDesc = computed(() => wSelectedItem.value?.desc);

const eSelectedItem = computed(() =>
    eduXP.find((i) => i.institute === control.eduXPSelection),
);
const eSelectedPeriod = computed(() => eSelectedItem.value?.period);
const eSelectedOccupation = computed(() => eSelectedItem.value?.course);
const eSelectedDesc = computed(() => eSelectedItem.value?.desc);

const syncPos = (key) => {
    const el = diamondEls[key];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    expandedPos.value = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
    };
};

const deselect = () => {
    control.workXPSelection = null;
    control.eduXPSelection = null;
    expandedPos.value = null;
    selectedWork.value = null;
};

const handleWheel = (e) => {
    if (!scrollEl.value) return;
    scrollEl.value.scrollLeft += e.deltaY;
    if (!selectingInProgress && selectedWork.value) {
        deselect();
    }
};

const toggleSelect = (item, key, type) => {
    const currentSel =
        type === "work" ? control.workXPSelection : control.eduXPSelection;
    if (currentSel === key) {
        deselect();
        return;
    }

    selectedWork.value = { ...item, id: key };

    if (type === "work") {
        control.workXPSelection = key;
        control.eduXPSelection = null;
    } else {
        control.eduXPSelection = key;
        control.workXPSelection = null;
    }

    expandedPos.value = null;
    selectingInProgress = true;

    const container = scrollEl.value;
    if (container) {
        const el = diamondEls[key];
        const containerRect = container.getBoundingClientRect();
        const elRect = el?.getBoundingClientRect();
        const elCenterX = elRect
            ? elRect.left + elRect.width / 2
            : containerRect.left;

        const targetScrollLeft =
            container.scrollLeft +
            (elCenterX - containerRect.left) -
            containerRect.width / 2 +
            300;

        const clampedScroll = Math.max(
            0,
            Math.min(
                targetScrollLeft,
                container.scrollWidth - container.clientWidth,
            ),
        );

        container.scrollTo({ left: clampedScroll, behavior: "smooth" });

        setTimeout(() => {
            syncPos(key);
            selectingInProgress = false;
        }, 430);
    } else {
        nextTick(() => syncPos(key));
        selectingInProgress = false;
    }
};

const selectDefault = (tabVal) => {
    if (stopInnerWatch) {
        stopInnerWatch();
        stopInnerWatch = null;
    }

    deselect();

    Object.keys(diamondEls).forEach((k) => delete diamondEls[k]);

    const defaultKey = tabVal === "Work" ? "Self-Employed" : "ThreeJS Journey";
    const firstItem =
        tabVal === "Work"
            ? (workXP.find((i) => i.company === defaultKey) ?? workXP[0])
            : (eduXP.find((i) => i.institute === defaultKey) ?? eduXP[0]);
    const firstKey =
        tabVal === "Work" ? firstItem?.company : firstItem?.institute;
    const type = tabVal === "Work" ? "work" : "edu";

    if (!firstItem || !firstKey) return;

    nextTick(() => {
        stopInnerWatch = watch(
            () => diamondEls[firstKey],
            (el) => {
                if (el) {
                    stopInnerWatch?.();
                    stopInnerWatch = null;
                    toggleSelect(firstItem, firstKey, type);
                }
            },
            { immediate: true },
        );
    });
};

watch(
    () => control.selectedOption,
    (newVal) => selectDefault(newVal),
);

onMounted(() => {
    control.selectedOption = "Work";
    if (stopInnerWatch) {
        stopInnerWatch();
        stopInnerWatch = null;
    }
    deselect();
    const defaultKey = "Self-Employed";
    const firstItem = workXP.find((i) => i.company === defaultKey) ?? workXP[0];
    const firstKey = firstItem?.company;
    if (!firstItem || !firstKey) return;
    stopInnerWatch = watch(
        () => diamondEls[firstKey],
        (el) => {
            if (el) {
                stopInnerWatch?.();
                stopInnerWatch = null;
                toggleSelect(firstItem, firstKey, "work");
            }
        },
        { immediate: true },
    );
});

onUnmounted(() => {
    if (stopInnerWatch) stopInnerWatch();
    control.selectedOption = undefined;
    control.workXPSelection = null;
    control.eduXPSelection = null;
});
</script>

<style scoped>
.diamond-growing {
    width: 250px;
    height: 250px;
    transform: rotate(45deg);
    transform-origin: center center;
    animation: diamondGrow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes diamondGrow {
    from {
        width: 80px;
        height: 80px;
        opacity: 0;
        transform: rotate(45deg);
    }
    to {
        width: 250px;
        height: 250px;
        opacity: 1;
        transform: rotate(45deg);
    }
}
</style>
