<template>
  <div>
    <div
      v-if="control.selectedOption === 'Hard'"
      class="flex flex-col w-full h-[62dvh] xl:h-[70dvh]"
    >
      <article
        v-if="control.openInventory"
        class="relative h-full flex flex-row -mt-10 justify-around items-start px-7 xl:px-56 pt-10"
      >
        <section
          class="w-[380px] h-[300px] flex flex-row flex-wrap rounded-lg p-2"
        >
          <div
            v-for="(n, idx) of et"
            :key="idx"
            class="w-20 h-20 rounded-sm mx-1 cursor-pointer flex items-center justify-center bg-transparent bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
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

        <section class="relative w-[320px] h-24/25 mt-1">
          <div
            class="w-20 h-20 rounded-sm mx-auto bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
          >
            1
          </div>
          <div
            class="w-70 h-45 rounded-sm mx-1 mt-4 mx-auto bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
          >
            2
          </div>
        </section>
      </article>
      <article v-else class="relative h-full flex flex-row">Bigger</article>
      <nav>
        <section>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
        </section>
        <section class="flex w-full flex-row justify-center">
          <span
            class="font-medium pt-1.5 mt-12 leading-none transition-colors duration-300"
            :class="{ 'text-emerald-500': hovering == 'slide' }"
          >
            Pause
          </span>
          <button
            @mouseover="handleOver('slide')"
            @mouseleave="hovering = ''"
            class="w-10 h-7 flex mt-12 items-center justify-center h-7 px-1 mx-2 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
          >
            P
          </button>
          <div
            v-for="(n, idx) of mt"
            :key="idx"
            class="w-20 h-20 rounded-sm mx-1 cursor-pointer bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
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
            class="flex shrink-0 mt-12 mx-2 w-10 h-7 items-center justify-center px-1 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
          >
            <span class="font-normal">I</span>
          </button>
          <span
            class="leading-none mt-12 pt-1.5 truncate transition-colors duration-300"
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
      Soft
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";

import {
  extraTechnologies as et,
  mainTechnologies as mt,
} from "@/composables/data.js";

const control = useControlStore();

const hovering = ref("");

const handleOver = (val) => {
  hovering.value = val;
};

onMounted(() => {
  control.selectedOption = "Hard";
});

onUnmounted(() => {
  control.selectedOption = undefined;
});
</script>