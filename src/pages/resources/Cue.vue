<template>
  <div>
    <div
      v-if="control.selectedOption === 'Hard'"
      class="flex flex-col w-full h-[62dvh] xl:h-[70dvh]"
    >
      <article
        v-if="control.openInventory"
        class="relative w-full h-full flex flex-col-reverse md:flex-row md:-mt-10 justify-center md:justify-around items-center md:items-start px-7 lg:px-14 xl:px-4 pt-10"
      >
        <section
          class="w-[275px] md:w-[370px] h-[260px] flex flex-row flex-wrap justify-center rounded-lg p-2"
        >
          <div
            v-for="(n, idx) of et"
            :key="idx"
            class="md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-20 xl:w-20 rounded-sm mx-1 cursor-pointer flex items-center justify-center bg-transparent bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
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
                  'bg-stone-900!': control.eTechSelection === n.title,
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

        <section class="relative w-[320px] h-24/25 mt-0.5">
          <div class="flex justify-center">
            <span
              class="flex md:w-14 md:h-14 lg:w-18 lg:h-18 items-center justify-center bg-[image:var(--background-image-gradient-border)] bg-no-repeat bg-stone-900 rounded-sm"
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
          <div class="w-70 h-45 rounded-sm p-3 mx-1 mt-2 mx-auto">
            <div
              class="bg-gradient-to-tr from-blue-900 text-center via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              <h2 class="text-xl">{{ eTitle }}</h2>
            </div>
            <h3 class="text-md text-center font-thin">{{ eDesc }}</h3>
          </div>
        </section>
      </article>
      <article v-else class="relative h-full flex flex-row">
        <div
          class="md:px-34 flex flex-col-reverse md:flex-row w-full justify-center md:justify-around"
        >
          <div
            class="w-45 h-45 md:w-65 md:h-65 xl:w-75 xl:h-75 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat p-px"
          >
            <span
              v-if="mSelected"
              class="flex items-center justify-center w-full h-full bg-stone-900 rounded-sm"
            >
              <span
                class="block size-22 md:size-32 xl:size-44 cursor-pointer transition-colors duration-200 bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100"
                :style="{
                  mask: `url('https://api.iconify.design/simple-icons/${mSelected}.svg') center/contain no-repeat`,
                  WebkitMask: `url('https://api.iconify.design/simple-icons/${mSelected}.svg') center/contain no-repeat`,
                }"
              />
            </span>
          </div>
          <div class="w-105 xl:w-125 h-65 xl:h-75 p-5 rounded-sm">
            <div
              class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              <h2 class="text-4xl">{{ mTitle }}</h2>
            </div>
            <br />
            <h3 class="text-xl xl:text-2xl font-thin">{{ mDesc }}</h3>
          </div>
        </div>
      </article>
      <nav>
        <section
          class="flex flex-col px-8 md:flex-row justify-center mb-3 relative z-0 gap-2"
        >
          <div
            class="w-full md:w-3/10 lg:w-4/11 xl:w-3/11 h-7 mx-1 relative md:skew-x-[-14deg] [transform:translateZ(0)]"
          >
            <div
              class="absolute inset-0 bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
            >
              <div class="absolute inset-[2px] bg-slate-900"></div>
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
            class="w-full md:w-3/10 lg:w-4/11 xl:w-3/11 h-7 mx-1 relative md:skew-x-[14deg] [transform:translateZ(0)]"
          >
            <div
              class="absolute inset-0 bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
            >
              <div class="absolute inset-[2px] bg-stone-900"></div>
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
        <section class="flex w-full flex-row justify-center">
          <span
            class="hidden md:flex font-medium pt-1.5 mt-12 leading-none transition-colors duration-300"
            :class="{ 'text-emerald-500': hovering == 'slide' }"
          >
            PAUSE
          </span>
          <button
            @mouseover="handleOver('slide')"
            @mouseleave="hovering = ''"
            class="hidden md:flex w-10 h-7 mt-12 items-center justify-center h-7 px-1 mx-2 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
          >
            P
          </button>
          <div
            v-for="(n, idx) of mt"
            :key="idx"
            class="md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-sm mx-1 cursor-pointer bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
          >
            <span
              @click.prevent="control.setMTechSelection(n.title)"
              class="group relative z-10 flex flex-col justify-center items-center w-full h-full text-white hover:text-stone-900 cursor-pointer drop-shadow-[0_0_1px_rgba(180,240,255,0.5)] hover:bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100"
              :class="{
                'bg-gradient-to-tr from-blue-900 via-sky-200 to-sky-100':
                  control.mTechSelection === n.title,
              }"
            >
              <p
                class="absolute top-0 left-1"
                :class="{
                  'text-stone-900!': control.mTechSelection === n.title,
                }"
              >
                {{ idx + 1 }}
              </p>
              <span
                class="size-11 cursor-pointer transition-colors duration-200 group-hover:bg-none group-hover:bg-stone-900"
                :class="{
                  'bg-stone-900!': control.mTechSelection === n.title,
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
      class="flex flex-col w-full h-[62dvh] xl:h-[70dvh]"
    >
      <section
        class="relative px-12 mt-6 md:mt-2 sm:px-20 md:px-34 flex flex-row flex-wrap"
      >
        <article
          v-for="(n, idx) of ss"
          :key="idx"
          class="w-full md:w-[46%] flex flex-row overflow-hidden mb-5 md:mx-2 h-20 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repea"
        >
          <div
            class="flex w-20 h-full bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] justify-center items-center"
          >
            <Icon
              :icon="`streamline-freehand:${n.icon}`"
              class="size-10 text-stone-900"
            />
          </div>
          <div
            class="flex flex-1 uppercase text-xl justify-center items-center bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
          >
            {{ n.skill }}
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";

import {
  extraTechnologies as et,
  mainTechnologies as mt,
  softSkills as ss,
} from "@/composables/data.js";

const control = useControlStore();

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

const handleOver = (val) => {
  hovering.value = val;
};

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
});

watch(
  () => control.mTechSelection,
  (newVal) => {
    const getMItem = mt.find((i) => i.title === newVal);
    if (getMItem) {
      mSelected.value = getMItem.icon;
      mTitle.value = getMItem.title;
      mDesc.value = getMItem.description;
      mTag.value = getMItem.tag;
      comfort.value = getMItem.comfort;
      mastery.value = getMItem.mastery;
    }
  }
);

watch(
  () => control.eTechSelection,
  (newVal) => {
    const getEItem = et.find((i) => i.title === newVal);
    if (getEItem) {
      eSelected.value = getEItem.icon;
      eTitle.value = getEItem.title;
      eDesc.value = getEItem.description;
      eTag.value = getEItem.tag;
      comfort.value = getEItem.comfort;
      mastery.value = getEItem.mastery;
    }
  }
);

onUnmounted(() => {
  control.selectedOption = undefined;
  control.openInventory = false;
  control.mTechSelection = "VueJS";
  control.eTechSelection = "ReactJS";
});
</script>
