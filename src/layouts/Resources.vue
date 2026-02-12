<template>
  <div class="relative bg-stone-900 text-white lg:px-32 xl:px-58 h-[100dvh]">
    <nav class="flex flex-row justify-between items-center h-34">
      <div
        class="flex flex-row items-center bg-gradient-to-tr from-blue-900 @custom-variant hover (&:hover); via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
      >
        <img
          src="/images/logo.svg"
          class="w-12 h-12 mr-3"
          alt="Ice Cold Phoenix Image"
        />
        <h2 class="text-4xl">{{ path }}</h2>
      </div>
      <div class="flex flex-row items-center"></div>
      <div class="flex flex-row items-center">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          @mouseover="handleOver"
          @click="handleClick"
          target="_blank"
          :href="social.path"
        >
          <div
            class="w-10 h-10 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white [mask-repeat:no-repeat] [mask-size:contain] filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] hover:bg-emerald-500 transition-all duration-300"
            :style="{
              maskImage: `url('https://api.iconify.design/${social.icon}.svg')`,
              WebkitMaskImage: `url('https://api.iconify.design/${social.icon}.svg')`,
            }"
          />
        </a>
      </div>
    </nav>
    <router-view />
    <footer
      class="absolute bottom-14 left-0 w-full px-6 lg:px-32 xl:px-58 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <section
        class="flex flex-1 items-center gap-2 text-white font-medium justify-center md:justify-start"
      >
        <button
          @mouseover="handleOver('esc')"
          @mouseleave="hovering = null"
          @click="handleClick"
          class="flex shrink-0 items-center justify-center h-8 px-3 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
        >
          <router-link to="/" class="leading-none">ESC</router-link>
        </button>
        <span
          class="leading-none mr-2 whitespace-nowrap transition-colors duration-300"
          :class="{ 'text-emerald-500': hovering == 'esc' }"
          >HOME</span
        >

        <button
          @mouseover="handleOver('backspace')"
          @mouseleave="hovering = null"
          @click="handleClick"
          class="flex shrink-0 items-center justify-center h-8 px-3 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
        >
          <span class="leading-none">BACKSPACE</span>
        </button>
        <span
          class="leading-none truncate transition-colors duration-300"
          :class="{ 'text-emerald-500': hovering == 'backspace' }"
          >PREVIOUS</span
        >
      </section>

      <p class="flex-1 text-center whitespace-nowrap opacity-70 leading-none">
        &copy; 2026 Built by Cbazil
      </p>

      <section
        class="flex flex-1 gap-2 items-center justify-center md:justify-end"
      >
        <span
          class="font-medium leading-none transition-colors duration-300"
          :class="{ 'text-emerald-500': hovering == 'next' }"
          >NEXT</span
        >
        <button
          @mouseover="handleOver('next')"
          @mouseleave="hovering = null"
          @click="handleClick"
          class="flex items-center justify-center h-8 px-3 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
        >
          <router-link to="" class="leading-none">SPACE</router-link>
        </button>

        <span
          class="font-medium leading-none transition-colors duration-300"
          :class="{ 'text-emerald-500': hovering == 'enter' }"
          >CONTACT</span
        >
        <button
          @mouseover="handleOver('enter')"
          @mouseleave="hovering = null"
          @click="handleClick"
          class="flex items-center justify-center h-8 px-3 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
        >
          <router-link to="" class="leading-none">ENTER</router-link>
        </button>
      </section>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useLinkover, useBtnClick } from "@/composables/useSound.js";
const route = useRoute();
const path = route.name;

const prev = ref("Home");

const socialLinks = [
  {
    name: "linkedin",
    icon: "fa7-brands/linkedin",
    path: "https://www.linkedin.com/in/cbazil/",
  },
  {
    name: "x-twitter",
    icon: "fa7-brands/square-x-twitter",
    path: "https://x.com/cbazil_dev",
  },
  {
    name: "github",
    icon: "fa7-brands/github-square",
    path: "https://github.com/cbazil",
  },
  {
    name: "medium",
    icon: "fa7-brands/medium",
    path: "https://medium.com/@cbazil",
  },
];

const handleOver = (val) => {
  if (val) {
    hovering.value = val;
  }
  useLinkover();
};

const handleClick = useBtnClick();

const hovering = ref("");
</script>
