<template>
    <div class="relative w-full overflow-x-hidden">
        <!-- Desktop: large diamond above timeline -->
        <Teleport to="body">
            <div
                v-if="expandedPos && selectedWork"
                class="fixed z-[500] pointer-events-none hidden md:block"
                :style="{
                    left: expandedPos.x + 'px',
                    top: expandedPos.y + 'px',
                    transform: 'translate(-50%, -50%)',
                    marginTop: '-150px',
                }"
            >
                <div
                    :key="selectedWork.id"
                    class="diamond-growing p-[6px] bg-[image:var(--background-image-gradient-border)] bg-no-repeat rounded-sm transition-shadow duration-300"
                    :class="{
                        'shadow-[0_0_0_2px_#10b981]': navMode === 'item',
                    }"
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

        <!-- Mobile: tap overlay -->
        <Teleport to="body">
            <Transition name="overlay-fade">
                <div
                    v-if="mobileOverlay && selectedWork"
                    class="fixed inset-0 z-[499] flex flex-col md:hidden"
                    style="background: rgba(0, 0, 0, 0.92)"
                    @click.self="mobileOverlay = false"
                >
                    <button
                        class="fixed top-5 right-4 text-red-500 text-2xl p-2 z-20 leading-none"
                        @click="mobileOverlay = false"
                    >
                        ✕
                    </button>
                    <div
                        class="flex-1 overflow-y-auto flex flex-col items-center pt-12 pb-8"
                        style="padding-left: 24px; padding-right: 24px"
                    >
                        <div
                            class="flex items-center justify-center w-36 h-36 shrink-0"
                        >
                            <div
                                class="w-24 h-24 p-1.5 mb-3 [transform:rotate(45deg)] bg-[image:var(--background-image-gradient-border)] bg-no-repeat overflow-hidden rounded-sm"
                                :style="{
                                    backgroundColor: bgColor(selectedWork.bg),
                                }"
                            >
                                <div
                                    class="w-full h-full overflow-hidden"
                                    :style="{
                                        backgroundColor: bgColor(
                                            selectedWork.bg,
                                        ),
                                    }"
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
                        <div class="w-full mt-4" style="max-width: 100%">
                            <div
                                class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent mb-1 text-center"
                            >
                                <h3 class="hl text-xl font-bold">
                                    {{
                                        control.selectedOption === "Work"
                                            ? control.workXPSelection
                                            : control.eduXPSelection
                                    }}
                                </h3>
                            </div>
                            <p
                                class="font-thin text-md text-gray-300 text-center mb-2"
                                v-if="
                                    control.selectedOption === 'Work'
                                        ? wSelectedPeriod
                                        : eSelectedPeriod
                                "
                                v-html="
                                    (control.selectedOption === 'Work'
                                        ? wSelectedPeriod
                                        : eSelectedPeriod
                                    ).replace(' - ', ' – ')
                                "
                            />
                            <p class="text-md text-center mb-2">
                                {{
                                    control.selectedOption === "Work"
                                        ? wSelectedOccupation
                                        : eSelectedOccupation
                                }}
                            </p>
                            <p
                                class="font-thin text-md text-gray-300 text-center leading-relaxed"
                            >
                                {{
                                    control.selectedOption === "Work"
                                        ? wSelectedDesc
                                        : eSelectedDesc
                                }}
                            </p>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>

        <!-- WORK -->
        <div v-if="control.selectedOption === 'Work'">
            <div class="w-full h-[var(--exp-top-h)] hidden md:flex flex-row justify-end">
                <div class="flex items-center w-5/9 h-full exp-desc-col">
                    <span
                        class="font-thin text-center mt-10"
                        v-if="wSelectedPeriod"
                        v-html="wSelectedPeriod.replace(' - ', '<br> - <br>')"
                    />
                    <div class="px-6">
                        <h3
                            class="hl text-2xl bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            {{ control.workXPSelection }}
                        </h3>
                        <span class="text-lg">{{ wSelectedOccupation }}</span>
                        <br />
                        <span class="font-thin text-md">{{
                            wSelectedDesc
                        }}</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:hidden py-4 items-center">
                <template v-for="(x, idx) in workXP" :key="x.company">
                    <div
                        v-if="idx > 0"
                        class="w-px h-8 bg-gradient-to-b from-sky-300 to-blie-700"
                    />
                    <div
                        class="flex items-center justify-center w-47.5 h-47.5 cursor-pointer"
                        @click="toggleSelectMobile(x, x.company, 'work')"
                    >
                        <div
                            class="w-32 h-32 p-1.5 mb-3 [transform:rotate(45deg)] bg-[image:var(--background-image-gradient-border)] bg-no-repeat overflow-hidden rounded-sm"
                            :style="{ backgroundColor: bgColor(x.bg) }"
                        >
                            <div class="w-full h-full overflow-hidden">
                                <img
                                    :src="`/images/${x.logo}`"
                                    class="w-full h-full object-cover"
                                    :style="{
                                        transform: `rotate(-45deg) scale(${x.scale / 100})`,
                                    }"
                                    alt="Logo"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-1 mb-1 px-4">
                        <div
                            class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            <h3 class="hl text-base font-bold">
                                {{ x.company }}
                            </h3>
                        </div>
                        <span class="font-thin text-gray-300 text-sm">{{
                            x.period
                        }}</span>
                    </div>
                </template>
            </div>

            <div
                ref="scrollEl"
                class="hidden md:block overflow-x-scroll overflow-y-hidden w-full h-[var(--exp-bot-h)] scrollbar-hide"
                @wheel.prevent="handleWheel"
            >
                <div class="flex items-start pt-5 px-10 min-w-max exp-timeline-content">
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
                                    class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
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
                    <div class="w-[50vw] shrink-0" />
                </div>
            </div>
        </div>

        <!-- EDUCATION -->
        <div v-if="control.selectedOption === 'Education'">
            <div class="w-full h-[var(--exp-top-h)] hidden md:flex flex-row justify-end">
                <div class="flex items-center w-5/9 h-full exp-desc-col">
                    <span
                        class="font-thin text-center mt-10"
                        v-if="eSelectedPeriod"
                        v-html="eSelectedPeriod.replace(' - ', '<br> - <br>')"
                    />
                    <div class="px-6">
                        <h3
                            class="hl text-2xl bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            {{ control.eduXPSelection }}
                        </h3>
                        <span class="text-lg">{{ eSelectedOccupation }}</span>
                        <br />
                        <span class="font-thin text-md">{{
                            eSelectedDesc
                        }}</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:hidden py-4 items-center">
                <template v-for="(x, idx) in eduXP" :key="x.institute">
                    <div
                        v-if="idx > 0"
                        class="w-px h-8 bg-gradient-to-b from-sky-700 to-blue-900"
                    />
                    <div
                        class="flex items-center justify-center w-47.5 h-47.5 cursor-pointer"
                        @click="toggleSelectMobile(x, x.institute, 'edu')"
                    >
                        <div
                            class="w-32 h-32 p-1.5 [transform:rotate(45deg)] bg-[image:var(--background-image-gradient-border)] bg-no-repeat overflow-hidden rounded-sm"
                            :style="{ backgroundColor: bgColor(x.bg) }"
                        >
                            <div class="w-full h-full overflow-hidden">
                                <img
                                    :src="`/images/${x.logo}`"
                                    class="w-full h-full object-cover"
                                    :style="{
                                        transform: `rotate(-45deg) scale(${x.scale / 100})`,
                                    }"
                                    alt="Logo"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-1 mb-1 px-4">
                        <div
                            class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            <h3 class="hl text-base font-bold">
                                {{ x.institute }}
                            </h3>
                        </div>
                        <span class="font-thin text-gray-300 text-sm">{{
                            x.period
                        }}</span>
                    </div>
                </template>
            </div>

            <div
                ref="scrollEl"
                class="hidden md:block overflow-x-scroll overflow-y-hidden w-full h-[var(--exp-bot-h)] scrollbar-hide"
                @wheel.prevent="handleWheel"
            >
                <div class="flex items-start pt-5 px-10 min-w-max exp-timeline-content">
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
                                    class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                                >
                                    <h3
                                        class="hl text-lg font-bold whitespace-nowrap"
                                    >
                                        {{ x.institute }}
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
import { useHead } from "@unhead/vue";
import { useControlStore } from "@/stores/main.js";
import { workXP, eduXP } from "@/lib/data.js";

// ── SEO ───────────────────────────────────────────────────────────────────────
useHead({
    title: "Experience | Cbazil",
    meta: [
        {
            name: "description",
            content:
                "Cbazil's work and education history — a timeline of roles, companies and qualifications that shaped a developer and innovator.",
        },
        { property: "og:title", content: "Experience | Cbazil" },
        {
            property: "og:description",
            content:
                "Cbazil's work and education history — a timeline of roles, companies and qualifications that shaped a developer and innovator.",
        },
        { property: "og:url", content: "https://www.cbazil.dev/experience" },
        { name: "twitter:card", content: "summary" },
    ],
});

// ── State ─────────────────────────────────────────────────────────────────────
const control = useControlStore();
const scrollEl = ref(null);
const diamondEls = reactive({});
const expandedPos = ref(null);
const selectedWork = ref(null);
const mobileOverlay = ref(false);
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
    mobileOverlay.value = false;
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

        const onScrollEnd = () => {
            syncPos(key);
            selectingInProgress = false;
            container.removeEventListener("scrollend", onScrollEnd);
            clearTimeout(fallback);
        };
        const fallback = setTimeout(() => {
            container.removeEventListener("scrollend", onScrollEnd);
            syncPos(key);
            selectingInProgress = false;
        }, 500);
        container.addEventListener("scrollend", onScrollEnd, { once: true });
    } else {
        nextTick(() => syncPos(key));
        selectingInProgress = false;
    }
};

const toggleSelectMobile = (item, key, type) => {
    if (type === "work") {
        control.workXPSelection = key;
        control.eduXPSelection = null;
    } else {
        control.eduXPSelection = key;
        control.workXPSelection = null;
    }
    selectedWork.value = { ...item, id: key };
    mobileOverlay.value = true;
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

// ── Keyboard navigation ───────────────────────────────────────────────────────
const navMode = ref("tab");

const handleKeydown = (e) => {
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    const tab = control.selectedOption;
    const isWork = tab === "Work";

    // Space — never handle here, always let the wrapper layout handle it
    if (e.key === " ") return;

    if (e.key === "ArrowDown") {
        if (navMode.value === "tab") {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            navMode.value = "item";
        }
        return;
    }

    if (e.key === "ArrowUp") {
        if (navMode.value === "item") {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            navMode.value = "tab";
            return;
        }
        return;
    }

    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    if (navMode.value === "tab") {
        control.selectedOption = isWork ? "Education" : "Work";
    } else {
        const list = isWork ? workXP : eduXP;
        const currentKey = isWork
            ? control.workXPSelection
            : control.eduXPSelection;
        const type = isWork ? "work" : "edu";
        const getKey = (item) => (isWork ? item.company : item.institute);

        const idx = list.findIndex((i) => getKey(i) === currentKey);
        if (idx === -1) return;

        const nextIdx =
            e.key === "ArrowRight"
                ? (idx + 1) % list.length
                : (idx - 1 + list.length) % list.length;

        const nextItem = list[nextIdx];
        toggleSelect(nextItem, getKey(nextItem), type);
    }
};

// ── Lifecycle ─────────────────────────────────────────────────────────────────

watch(
    () => control.selectedOption,
    (newVal) => {
        navMode.value = "tab";
        selectDefault(newVal);
    },
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
    document.addEventListener("keydown", handleKeydown, true);
});

onUnmounted(() => {
    if (stopInnerWatch) stopInnerWatch();
    document.removeEventListener("keydown", handleKeydown, true);
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

.mobile-diamond-show {
    width: 160px;
    height: 160px;
    transform: rotate(45deg);
    transform-origin: center center;
    animation: diamondGrow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
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

.overlay-fade-enter-active,
.overlay-fade-leave-active {
    transition: opacity 0.2s ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
    opacity: 0;
}

@media (max-height: 700px) and (min-width: 768px) {
    .exp-timeline-content {
        padding-top: 2.5rem !important;
    }
    .exp-desc-col {
        width: 58.3% !important;
    }
}
</style>
