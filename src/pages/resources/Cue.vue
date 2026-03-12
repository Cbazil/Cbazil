<template>
    <div ref="skillsRoot" class="relative w-full overflow-x-hidden">
        <div
            v-if="control.selectedOption === 'Hard'"
            class="flex flex-col w-full min-h-[62dvh] xl:min-h-[70dvh]"
        >
            <article
                v-if="control.openInventory"
                class="relative w-full h-full flex flex-col-reverse md:flex-row md:-mt-10 justify-center md:justify-around items-center md:items-start px-4 sm:px-7 lg:px-14 xl:px-4 pt-10"
            >
                <section
                    class="w-full max-w-[275px] md:w-[370px] md:max-w-none h-[260px] flex flex-row flex-wrap justify-center rounded-lg p-2"
                >
                    <div
                        v-for="(n, idx) of et"
                        :key="idx"
                        class="w-14 h-14 md:w-14 md:h-14 lg:w-18 lg:h-18 2xl:w-20 2xl:h-20 rounded-sm mx-1 cursor-pointer flex items-center justify-center bg-transparent bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
                    >
                        <span
                            @click.prevent="control.setETechSelection(n.title)"
                            class="group relative z-10 flex flex-col justify-center items-center w-full h-full text-white hover:text-stone-900 cursor-pointer drop-shadow-[0_0_1px_rgba(180,240,255,0.5)] hover:bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100"
                            :class="{
                                'bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100':
                                    control.eTechSelection === n.title,
                            }"
                        >
                            <span
                                class="size-11 cursor-pointer transition-colors duration-200 group-hover:bg-none group-hover:bg-stone-900"
                                :class="{
                                    'bg-stone-900!':
                                        control.eTechSelection === n.title,
                                    'bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100':
                                        control.eTechSelection !== n.title,
                                }"
                                :style="{
                                    mask: `url('https://api.iconify.design/simple-icons/${n.icon}.svg') center/contain no-repeat`,
                                    WebkitMask: `url('https://api.iconify.design/simple-icons/${n.icon}.svg') center/contain no-repeat`,
                                }"
                            />
                        </span>
                    </div>
                </section>

                <section
                    class="relative w-full max-w-[320px] md:w-[320px] md:max-w-none h-auto md:h-24/25 mt-0.5 mb-6 md:mb-0"
                >
                    <div class="flex justify-center">
                        <span
                            class="flex w-14 h-14 lg:w-18 lg:h-18 items-center justify-center -ml-8 bg-[image:var(--background-image-gradient-border)] bg-no-repeat bg-stone-900 rounded-sm"
                        >
                            <span
                                v-if="eSelected"
                                class="block size-12 cursor-pointer transition-colors duration-200 bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100"
                                :style="{
                                    mask: `url('https://api.iconify.design/simple-icons/${eSelected}.svg') center/contain no-repeat`,
                                    WebkitMask: `url('https://api.iconify.design/simple-icons/${eSelected}.svg') center/contain no-repeat`,
                                }"
                            />
                        </span>
                    </div>
                    <div
                        class="w-full md:w-70 h-auto md:h-45 rounded-sm p-3 mx-auto md:mx-1 mt-2"
                    >
                        <h2
                            class="hl text-xl text-center bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            {{ eTitle }}
                        </h2>
                        <h3 class="text-md text-center font-thin">
                            {{ eDesc }}
                        </h3>
                    </div>
                </section>
            </article>

            <!-- Main view (not inventory) -->
            <article
                v-else
                class="relative h-full flex flex-col md:flex-row w-full"
            >
                <div
                    class="px-4 md:px-34 flex flex-col md:flex-row w-full items-center justify-around"
                >
                    <!-- Text section -->
                    <div
                        class="w-full max-w-md md:w-105 2xl:w-125 h-auto md:h-65 2xl:h-75 md:p-5 rounded-sm mb-6 md:mb-0"
                    >
                        <div
                            class="flex items-center justify-between mt-6 md:mt-0"
                        >
                            <h2
                                class="hl text-3xl md:text-4xl bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                            >
                                {{ mTitle }}
                            </h2>
                            <div
                                class="md:hidden flex items-center gap-2 shrink-0"
                            >
                                <span
                                    class="text-sm font-thin bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                                >
                                    {{ paused ? "––" : countdown + "s" }}
                                </span>
                                <span
                                    @click="togglePause"
                                    class="size-4 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
                                    :style="{
                                        mask: `url('https://api.iconify.design/fa7-solid/${paused ? 'play' : 'pause'}.svg') center/contain no-repeat`,
                                        WebkitMask: `url('https://api.iconify.design/fa7-solid/${paused ? 'play' : 'pause'}.svg') center/contain no-repeat`,
                                    }"
                                />
                            </div>
                        </div>
                        <br />
                        <h3 class="text-xl 2xl:text-2xl font-thin">
                            {{ mDesc }}
                        </h3>
                    </div>

                    <!-- Icon section — arrows flank it on mobile -->
                    <div class="flex items-center gap-3 mb-4 md:mb-0">
                        <span
                            @click="mobileNavM('prev')"
                            class="md:hidden size-5 shrink-0 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
                            :style="{
                                mask: `url('https://api.iconify.design/fa7-solid/angle-left.svg') center/contain no-repeat`,
                                WebkitMask: `url('https://api.iconify.design/fa7-solid/angle-left.svg') center/contain no-repeat`,
                            }"
                        />
                        <div
                            class="w-30 h-30 sm:w-45 sm:h-45 md:w-65 md:h-65 2xl:w-75 2xl:h-75 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat p-px"
                        >
                            <span
                                v-if="mSelected"
                                class="flex items-center justify-center w-full h-full bg-stone-900 rounded-sm"
                            >
                                <span
                                    class="block size-18 sm:size-22 md:size-32 2xl:size-44 cursor-pointer transition-colors duration-200 bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100"
                                    :style="{
                                        mask: `url('https://api.iconify.design/simple-icons/${mSelected}.svg') center/contain no-repeat`,
                                        WebkitMask: `url('https://api.iconify.design/simple-icons/${mSelected}.svg') center/contain no-repeat`,
                                    }"
                                />
                            </span>
                        </div>
                        <span
                            @click="mobileNavM('next')"
                            class="md:hidden size-5 shrink-0 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
                            :style="{
                                mask: `url('https://api.iconify.design/fa7-solid/angle-right.svg') center/contain no-repeat`,
                                WebkitMask: `url('https://api.iconify.design/fa7-solid/angle-right.svg') center/contain no-repeat`,
                            }"
                        />
                    </div>
                </div>
            </article>

            <nav class="w-full mt-auto xl:mt-5">
                <section
                    class="flex flex-col px-4 sm:px-8 md:flex-row justify-center mb-3 relative z-0 gap-2 w-full max-w-lg mx-auto md:max-w-none"
                >
                    <div
                        class="w-full md:w-3/10 lg:w-4/11 xl:w-3/11 h-7 mx-auto md:mx-1 relative md:skew-x-[-14deg] [transform:translateZ(0)]"
                    >
                        <div
                            class="absolute inset-0 bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
                        >
                            <div
                                class="absolute inset-[2px] bg-slate-900"
                            ></div>
                            <div class="absolute inset-[2px] overflow-hidden">
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                                    :style="{ width: comfort + '%' }"
                                />
                            </div>
                        </div>
                        <p
                            class="absolute inset-0 flex items-center justify-center text-white text-sm font-medium z-10 md:skew-x-[14deg]"
                        >
                            Comfort
                        </p>
                    </div>

                    <div
                        class="w-full md:w-3/10 lg:w-4/11 xl:w-3/11 h-7 mx-auto md:mx-1 relative md:skew-x-[14deg] [transform:translateZ(0)]"
                    >
                        <div
                            class="absolute inset-0 bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
                        >
                            <div
                                class="absolute inset-[2px] bg-stone-900"
                            ></div>
                            <div class="absolute inset-[2px] overflow-hidden">
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                                    :style="{ width: mastery + '%' }"
                                />
                            </div>
                        </div>
                        <span
                            class="absolute inset-0 flex items-center justify-center text-white text-sm font-medium z-10 md:skew-x-[-14deg]"
                        >
                            Mastery
                        </span>
                    </div>
                </section>
                <section class="flex w-full flex-row justify-center px-4">
                    <span
                        class="hidden md:flex font-medium pt-1.5 mt-12 leading-none transition-colors duration-300"
                        :class="{ 'text-emerald-500': hovering == 'slide' }"
                    >
                        {{ paused ? "PLAY" : "PAUSE" }}
                    </span>
                    <button
                        @click="togglePause"
                        @mouseover="handleOver('slide')"
                        @mouseleave="hovering = ''"
                        class="hidden md:flex w-10 h-7 mt-12 items-center justify-center h-7 px-1 mx-2 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
                        :class="{
                            'from-emerald-500 via-emerald-500 to-emerald-500':
                                paused,
                        }"
                    >
                        P
                    </button>
                    <div
                        class="w-full max-w-[280px] sm:max-w-[320px] md:w-full md:max-w-none mt-6 md:mt-auto flex flex-wrap justify-center gap-2 mx-auto"
                    >
                        <div
                            v-for="(n, idx) of mt"
                            :key="idx"
                            class="w-18 h-18 sm:w-24 sm:h-24 md:w-14 md:h-14 lg:w-18 lg:h-18 2xl:w-24 2xl:h-24 rounded-sm cursor-pointer bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
                        >
                            <span
                                @click.prevent="manualSelectM(n.title)"
                                class="group relative z-10 flex flex-col justify-center items-center w-full h-full text-white hover:text-stone-900 cursor-pointer drop-shadow-[0_0_1px_rgba(180,240,255,0.5)] hover:bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100"
                                :class="{
                                    'bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100':
                                        control.mTechSelection === n.title,
                                }"
                            >
                                <p
                                    class="absolute top-0 left-1"
                                    :class="{
                                        'text-stone-900!':
                                            control.mTechSelection === n.title,
                                    }"
                                >
                                    {{ idx + 1 }}
                                </p>
                                <span
                                    class="size-9 sm:size-11 cursor-pointer transition-colors duration-200 group-hover:bg-none group-hover:bg-stone-900"
                                    :class="{
                                        'bg-stone-900!':
                                            control.mTechSelection === n.title,
                                        'bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100':
                                            control.mTechSelection !== n.title,
                                    }"
                                    :style="{
                                        mask: `url('https://api.iconify.design/simple-icons/${n.icon}.svg') center/contain no-repeat`,
                                        WebkitMask: `url('https://api.iconify.design/simple-icons/${n.icon}.svg') center/contain no-repeat`,
                                    }"
                                />
                            </span>
                        </div>
                    </div>
                    <button
                        @click.prevent="control.toggleInventory()"
                        @mouseover="handleOver('inventory')"
                        @mouseleave="hovering = ''"
                        class="hidden md:flex shrink-0 mt-12 mx-2 w-10 h-7 items-center justify-center px-1 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
                    >
                        <span class="font-normal">I</span>
                    </button>
                    <span
                        class="hidden md:flex leading-none mt-12 pt-1.5 truncate transition-colors duration-300"
                        :class="{ 'text-emerald-500': hovering == 'inventory' }"
                    >
                        INVENTORY
                    </span>
                </section>
            </nav>
        </div>
        <div
            v-if="control.selectedOption === 'Soft'"
            class="flex flex-col w-full h-auto lg:h-[82dvh]"
        >
            <section
                class="relative px-4 sm:px-8 md:px-12 lg:px-20 xl:px-34 mt-6 md:mt-0 lg:overflow-hidden flex flex-row flex-wrap justify-center"
            >
                <article
                    v-for="(n, idx) of ss"
                    :key="idx"
                    class="w-full md:w-[46%] flex flex-row overflow-hidden mb-5 md:mx-2 h-20 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
                >
                    <div
                        class="flex w-18 md:w-20 h-full bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] justify-center items-center"
                    >
                        <Icon
                            :icon="`streamline-freehand:${n.icon}`"
                            class="size-8 md:size-10 text-stone-900"
                        />
                    </div>
                    <div
                        class="flex flex-1 uppercase text-lg md:text-xl justify-center items-center bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
                    >
                        {{ n.skill }}
                    </div>
                </article>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted, nextTick } from "vue";
import { useControlStore } from "@/stores/main.js";
import {
    extraTechnologies as et,
    mainTechnologies as mt,
    softSkills as ss,
} from "@/lib/data.js";

const control = useControlStore();

const skillsRoot = ref(null);
const hovering = ref("");
const mSelected = ref("");
const eSelected = ref("");
const mTitle = ref("");
const eTitle = ref("");
const mDesc = ref("");
const eDesc = ref("");
const mTag = ref("");
const eTag = ref("");
const comfort = ref("");
const mastery = ref("");
const paused = ref(false);
const countdown = ref(15);

const handleOver = (val) => {
    hovering.value = val;
};

// ── Sync helpers ─────────────────────────────────────────────────────────────

const syncM = (title) => {
    const item = mt.find((i) => i.title === title);
    if (!item) return;
    mSelected.value = item.icon;
    mTitle.value = item.title;
    mDesc.value = item.description;
    mTag.value = item.tag;
    comfort.value = item.comfort;
    mastery.value = item.mastery;
};

const syncE = (title) => {
    const item = et.find((i) => i.title === title);
    if (!item) return;
    eSelected.value = item.icon;
    eTitle.value = item.title;
    eDesc.value = item.description;
    eTag.value = item.tag;
};

// ── Auto-cycle (mt, 15s) ─────────────────────────────────────────────────────

let autoTimer = null;
let tickTimer = null;

const startAutoTimer = () => {
    clearInterval(autoTimer);
    clearInterval(tickTimer);
    if (paused.value || control.openInventory) return;
    countdown.value = 15;
    tickTimer = setInterval(() => {
        if (countdown.value > 1) countdown.value--;
    }, 1000);
    autoTimer = setInterval(() => {
        const idx = mt.findIndex((i) => i.title === control.mTechSelection);
        control.setMTechSelection(mt[(idx + 1) % mt.length].title);
        countdown.value = 15;
    }, 15000);
};

const resetAutoTimer = () => {
    clearInterval(autoTimer);
    clearInterval(tickTimer);
    if (!paused.value && !control.openInventory) startAutoTimer();
};

const togglePause = () => {
    paused.value = !paused.value;
    if (paused.value) {
        clearInterval(autoTimer);
        clearInterval(tickTimer);
    } else startAutoTimer();
};

const scrollToTop = () => {
    if (skillsRoot.value) {
        skillsRoot.value.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

const manualSelectM = (title) => {
    control.setMTechSelection(title);
    resetAutoTimer();
    scrollToTop();
};

const mobileNavM = (dir) => {
    const idx = mt.findIndex((i) => i.title === control.mTechSelection);
    const next =
        dir === "next"
            ? mt[(idx + 1) % mt.length]
            : mt[(idx - 1 + mt.length) % mt.length];
    manualSelectM(next.title);
};

watch(
    () => control.openInventory,
    (open) => {
        if (open) {
            clearInterval(autoTimer);
            clearInterval(tickTimer);
        } else resetAutoTimer();
    },
);

// ── Keyboard navigation ──────────────────────────────────────────────────────
// Two modes (Hard, no inventory only):
//   'tab'  — ← → switch Hard ↔ Soft tabs
//   'item' — ← → cycle mt items
// ↓ from tab mode  → enter item mode
// ↓ from item mode → fall through to Resources (next page)
// ↑ from item mode → return to tab mode
// ↑ from tab mode  → fall through to Resources (prev page)
// Inventory open   → ← → / ↑ ↓ cycle et (independent of navMode)

const navMode = ref("tab"); // 'tab' | 'item'

watch(
    () => control.selectedOption,
    () => {
        navMode.value = "tab";
    },
);

const handleKeydown = (e) => {
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    const tab = control.selectedOption;

    // P — toggle pause (always)
    if (e.key === "p" || e.key === "P") {
        e.preventDefault();
        e.stopImmediatePropagation();
        togglePause();
        return;
    }

    // I — toggle inventory (Hard only)
    if (e.key === "i" || e.key === "I") {
        if (tab === "Hard") {
            e.preventDefault();
            e.stopImmediatePropagation();
            control.toggleInventory();
            return;
        }
    }

    // 1-9 — select mt by index (Hard, no inventory, item mode only)
    if (tab === "Hard" && !control.openInventory && navMode.value === "item") {
        const num = parseInt(e.key);
        if (!isNaN(num) && num >= 1 && num <= mt.length) {
            e.preventDefault();
            e.stopImmediatePropagation();
            manualSelectM(mt[num - 1].title);
            return;
        }
    }

    // ── Arrow Left / Right ───────────────────────────────────────────────────
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        if (tab === "Hard") {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (control.openInventory) {
                const idx = et.findIndex(
                    (i) => i.title === control.eTechSelection,
                );
                const next =
                    e.key === "ArrowRight"
                        ? et[(idx + 1) % et.length]
                        : et[(idx - 1 + et.length) % et.length];
                control.setETechSelection(next.title);
            } else if (navMode.value === "item") {
                const idx = mt.findIndex(
                    (i) => i.title === control.mTechSelection,
                );
                const next =
                    e.key === "ArrowRight"
                        ? mt[(idx + 1) % mt.length]
                        : mt[(idx - 1 + mt.length) % mt.length];
                manualSelectM(next.title);
            } else {
                // tab mode — switch to Soft
                nextTick(() => {
                    control.selectedOption = "Soft";
                });
            }
            return;
        }
        if (tab === "Soft") {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            control.selectedOption = "Hard";
            return;
        }
        return;
    }

    // ── Arrow Down / Space ───────────────────────────────────────────────────
    if (e.key === "ArrowDown" || e.key === " ") {
        if (tab === "Hard") {
            if (control.openInventory) {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
                const idx = et.findIndex(
                    (i) => i.title === control.eTechSelection,
                );
                control.setETechSelection(et[(idx + 1) % et.length].title);
                return;
            }
            if (navMode.value === "tab") {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
                navMode.value = "item";
                return;
            }
            // item mode — fall through to Resources (next page)
            return;
        }
        if (tab === "Soft") {
            e.preventDefault();
            e.stopImmediatePropagation();
            control.selectedOption = "Hard";
            return;
        }
        return;
    }

    // ── Arrow Up / Backspace ─────────────────────────────────────────────────
    if (e.key === "ArrowUp" || e.key === "Backspace") {
        if (tab === "Hard") {
            if (control.openInventory) {
                if (e.key === "ArrowUp") {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    const idx = et.findIndex(
                        (i) => i.title === control.eTechSelection,
                    );
                    control.setETechSelection(
                        et[(idx - 1 + et.length) % et.length].title,
                    );
                    return;
                } else {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    control.toggleInventory();
                    return;
                }
            }
            if (e.key === "ArrowUp") {
                if (navMode.value === "item") {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    navMode.value = "tab";
                    return;
                }
                // tab mode — fall through to Resources (prev page)
                return;
            }
            // Backspace — fall through to Resources → Bio
            return;
        }
        if (tab === "Soft") {
            // fall through to Resources → Bio
            return;
        }
    }
};

// ── Lifecycle ────────────────────────────────────────────────────────────────

onMounted(() => {
    const getMItem = mt.find((i) => i.title == control.mTechSelection);
    const getEItem = et.find((i) => i.title == control.eTechSelection);
    mSelected.value = getMItem.icon;
    mTitle.value = getMItem.title;
    mDesc.value = getMItem.description;
    mTag.value = getMItem.tag;
    eSelected.value = getEItem.icon;
    eTitle.value = getEItem.title;
    eDesc.value = getEItem.description;
    eTag.value = getEItem.tag;
    comfort.value = getMItem.comfort;
    mastery.value = getMItem.mastery;
    control.selectedOption = "Hard";
    startAutoTimer();
    document.addEventListener("keydown", handleKeydown, true);
});

watch(
    () => control.mTechSelection,
    (val) => syncM(val),
);
watch(
    () => control.eTechSelection,
    (val) => syncE(val),
);

onUnmounted(() => {
    clearInterval(autoTimer);
    clearInterval(tickTimer);
    document.removeEventListener("keydown", handleKeydown, true);
    control.selectedOption = undefined;
    control.openInventory = false;
    control.mTechSelection = "VueJS";
    control.eTechSelection = "ReactJS";
});
</script>
