<template>
  <div
    class="relative flex flex-col sm:flex-row bg-stone-900 h-[100dvh] sm:px-12 lg:px-32 xl:px-44 sm:items-center overflow-hidden"
  >
    <div class="sm:w-4/9">
      <router-link @mouseover="handleOver" @click="handleClick" to="/">
        <h1
          class="flex w-full justify-start mb-10 flex-row px-2 mt-8 cursor-pointer text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-extrabold bg-gradient-to-tr from-blue-900 @custom-variant hover (&:hover); via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
        >
          <img
            src="/images/logo.svg"
            class="w-10 h-10 lg:w-17 lg:h-17 xl:w-28 xl:h-28 mr-0.5 lg:mr-3 mt-0 sm:mt-1"
            alt="Ice Cold Phoenix Image"
          />
          Cb@z!l
        </h1>
      </router-link>

      <ul
        ref="navList"
        tabindex="0"
        @keydown.prevent="onNavKeydown"
        @focus="onNavFocus"
        class="link absolute z-50 sm:relative bottom-4 left-0 sm:bottom-none sm:left-none text-2xl lg:text-4xl xl:text-5xl mt-2 text-emerald-400 focus:outline-none"
      >
        <li class="my-4">
          <router-link
            @mouseenter="onItemHover(0)"
            @mouseleave="onItemLeave"
            @mouseover="handleOver"
            @click="handleClick"
            to="/about"
          >
            <span
              :class="[
                hoverIndex === 0 || (selectedIndex === 0 && !isMouseActive)
                  ? 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]'
                  : '',
                'cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]',
              ]"
            >
              Bio
            </span>
          </router-link>
        </li>
        <li class="my-4">
          <router-link
            @mouseenter="onItemHover(1)"
            @mouseleave="onItemLeave"
            @mouseover="handleOver"
            @click="handleClick"
            to="/skills"
          >
            <span
              :class="[
                hoverIndex === 1 || (selectedIndex === 1 && !isMouseActive)
                  ? 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]'
                  : '',
                'cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]',
              ]"
            >
              Skills
            </span>
          </router-link>
        </li>
        <li class="my-4">
          <router-link
            @mouseenter="onItemHover(2)"
            @mouseleave="onItemLeave"
            @mouseover="handleOver"
            @click="handleClick"
            to="/experience"
          >
            <span
              :class="[
                hoverIndex === 2 || (selectedIndex === 2 && !isMouseActive)
                  ? 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]'
                  : '',
                'cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]',
              ]"
            >
              Experience
            </span>
          </router-link>
        </li>
        <li class="my-4">
          <router-link
            @mouseenter="onItemHover(3)"
            @mouseleave="onItemLeave"
            @mouseover="handleOver"
            @click="handleClick"
            to="/blog"
          >
            <span
              :class="[
                hoverIndex === 3 || (selectedIndex === 3 && !isMouseActive)
                  ? 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]'
                  : '',
                'cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]',
              ]"
            >
              Blog
            </span>
          </router-link>
        </li>
        <li class="my-4">
          <router-link
            @mouseenter="onItemHover(4)"
            @mouseleave="onItemLeave"
            @mouseover="handleOver"
            @click="handleClick"
            to="/projects"
          >
            <span
              :class="[
                hoverIndex === 4 || (selectedIndex === 4 && !isMouseActive)
                  ? 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]'
                  : '',
                'cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]',
              ]"
            >
              Projects
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      class="absolute bottom-5 right-6 sm:relative sm:bottom-auto sm:right-auto flex justify-center items-center mt-20 space-x-2 sm:space-x-4 w-1/9"
    >
      <div class="flex flex-col items-center">
        <span class="text-white base font-thin">D</span>
        <span class="text-white base font-thin">E</span>
        <span class="text-white base font-thin">V</span>
        <span class="text-white base font-thin">E</span>
        <span class="text-white base font-thin">L</span>
        <span class="text-white base font-thin">O</span>
        <span class="text-white base font-thin">P</span>
        <span class="text-white base font-thin">E</span>
        <span class="text-white base font-thin">R</span>
      </div>

      <div class="h-48 border-l border-white/40" />

      <div class="flex flex-col items-center">
        <span class="text-white base font-thin">I</span>
        <span class="text-white base font-thin">N</span>
        <span class="text-white base font-thin">N</span>
        <span class="text-white base font-thin">O</span>
        <span class="text-white base font-thin">V</span>
        <span class="text-white base font-thin">A</span>
        <span class="text-white base font-thin">T</span>
        <span class="text-white base font-thin">O</span>
        <span class="text-white base font-thin">R</span>
      </div>
    </div>

    <div
      class="absolute bottom-50 -right-2 sm:relative sm:bottom-auto sm:right-auto sm:w-4/9"
    >
      <img
        src="/images/portrait.svg"
        alt="avatar"
        class="relative w-full h-full transform scale-100 sm:scale-125"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useLinkover, useBtnClick } from "@/composables/useSound.js";

const handleOver = useLinkover();
const handleClick = useBtnClick();

const selectedIndex = ref(-1);
const hoverIndex = ref(-1);
const isMouseActive = ref(false);
const menuPaths = ["/about", "/skills", "/experience", "/blog", "/projects"];
const router = useRouter();

function onItemHover(idx) {
  hoverIndex.value = idx;
  isMouseActive.value = true;
}

function onItemLeave() {
  hoverIndex.value = -1;
  isMouseActive.value = false;
}

function onNavFocus() {
  if (selectedIndex.value === -1) {
    selectedIndex.value = 0;
    handleOver();
  }
}

function onNavKeydown(e) {
  const last = menuPaths.length - 1;
  const base =
    isMouseActive.value && hoverIndex.value !== -1
      ? hoverIndex.value
      : selectedIndex.value;

  if (e.key === "ArrowDown") {
    const start = base === -1 ? 0 : base;
    const next = Math.min(start + 1, last);
    selectedIndex.value = next;
    if (isMouseActive.value) hoverIndex.value = next;
    handleOver();
    return;
  }

  if (e.key === "ArrowUp") {
    const start = base === -1 ? 0 : base;
    const prev = Math.max(start - 1, 0);
    selectedIndex.value = prev;
    if (isMouseActive.value) hoverIndex.value = prev;
    handleOver();
    return;
  }

  if (e.key === "Enter" || e.key === " ") {
    const idx =
      isMouseActive.value && hoverIndex.value !== -1
        ? hoverIndex.value
        : selectedIndex.value;
    if (idx === -1) return;
    handleClick();
    router.push(menuPaths[idx]);
  }
}

function onGlobalKey(e) {
  // only active on the landing route
  if (window.location.pathname !== "/") return;

  // don't hijack typing
  const active = document.activeElement;
  if (
    active &&
    (active.tagName === "INPUT" ||
      active.tagName === "TEXTAREA" ||
      active.isContentEditable)
  )
    return;

  if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) onNavKeydown(e);
}

onMounted(() => window.addEventListener("keydown", onGlobalKey));
onUnmounted(() => window.removeEventListener("keydown", onGlobalKey));
</script>