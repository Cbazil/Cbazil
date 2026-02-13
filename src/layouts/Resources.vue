<template>
  <transition name="overlay">
    <div
      v-if="showOverlay"
      class="relative bg-stone-900 text-white lg:px-32 xl:px-58 h-[100dvh]"
    >
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
        <div class="flex flex-row items-center">
          <button
            class="px-3.5 mr-1 text-stone-900 flex items-center justify-center rounded-r-md rounded-bl-md rounded-tl-[18px] bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300"
          >
            LB
          </button>
          <div v-for="(opt, idx) in options" :key="idx">
            <span
              class="link text-[1.75rem] mx-1 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)] hover:text-emerald-400"
              :class="{ 'text-emerald-500': control.selectedOption == opt }"
            >
              {{ opt }}
            </span>
          </div>
          <button
            class="px-3.5 ml-1 text-stone-900 flex items-center justify-center rounded-l-md rounded-br-md rounded-tr-[18px] bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300"
          >
            RB
          </button>
        </div>
        <div class="flex flex-row items-center">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            target="_blank"
            :href="social.path"
            class="relative group w-10 h-10"
          >
            <div
              @mouseover="handleOver"
              @click="handleClick"
              class="absolute inset-0 transition-opacity duration-300 [mask-repeat:no-repeat] [mask-size:contain]"
              :style="{
                maskImage: `url('https://api.iconify.design/${social.icon}.svg')`,
                WebkitMaskImage: `url('https://api.iconify.design/${social.icon}.svg')`,
              }"
            >
              <div
                class="absolute inset-0 bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
              ></div>

              <div
                class="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>

            <div
              class="absolute inset-0 pointer-events-none filter drop-shadow-[0_0_2px_rgba(180,240,255,1)]"
            ></div>
          </a>
        </div>
      </nav>
      <router-view :key="$route.fullPath" />
      <footer
        class="absolute bottom-14 left-0 w-full px-6 lg:px-32 xl:px-58 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <section
          class="flex flex-1 items-center gap-2 text-white font-medium justify-center md:justify-start"
        >
          <button
            v-if="pageNum > 1"
            @mouseover="handleOver('backspace')"
            @mouseleave="hovering = null"
            @click="handlePrevPage"
            class="flex shrink-0 items-center justify-center h-7 px-2 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
          >
            <span class="font-normal">BACKSPACE</span>
          </button>
          <span
            v-if="pageNum > 1"
            class="leading-none truncate transition-colors duration-300"
            :class="{ 'text-emerald-500': hovering == 'backspace' }"
          >
            PREVIOUS
          </span>
          <router-link to="/" class="leading-none">
            <button
              @mouseover="handleOver('esc')"
              @mouseleave="hovering = null"
              @click="handleClick"
              class="flex shrink-0 items-center justify-center ml-3 h-7 px-2 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
            >
              <span class="font-normal">ESC</span>
            </button>
          </router-link>
          <span
            class="leading-none mr-2 whitespace-nowrap transition-colors duration-300"
            :class="{ 'text-emerald-500': hovering == 'esc' }"
          >
            HOME
          </span>
        </section>

        <p class="flex-1 text-center whitespace-nowrap opacity-70 leading-none">
          &copy; 2026 Built by Cbazil
        </p>

        <section
          class="flex flex-1 gap-2 items-center justify-center md:justify-end"
        >
          <span
            class="font-medium leading-none transition-colors duration-300"
            :class="{ 'text-emerald-500': hovering == 'enter' }"
          >
            CONTACT
          </span>
          <button
            @mouseover="handleOver('enter')"
            @mouseleave="hovering = null"
            @click="handleClick"
            class="flex items-center justify-center h-7 px-2 mr-3 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
          >
            ENTER
          </button>

          <span
            v-if="pageNum < 5"
            class="font-medium leading-none transition-colors duration-300"
            :class="{ 'text-emerald-500': hovering == 'next' }"
          >
            NEXT
          </span>
          <button
            v-if="pageNum < 5"
            @click="handleNextPage"
            @mouseover="handleOver('next')"
            @mouseleave="hovering = null"
            class="flex items-center justify-center h-7 px-2 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white filter drop-shadow-[0_0_1px_rgba(180,240,255,1)_0_0_4px_rgba(120,200,255,0.9)] transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
          >
            SPACE
          </button>
        </section>
      </footer>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLinkover, useBtnClick } from "@/composables/useSound.js";
import { pageOptions, socialLinks } from "@/composables/data.js";
import { useControlStore } from "@/stores/main.js";

const control = useControlStore();

const route = useRoute();
const router = useRouter();

const path = computed(() => route.name);

const options = computed(() => pageOptions[path.value.toLowerCase()] || []);

console;

const pageNum = computed(() => {
  if (path.value == "Bio") return 1;
  if (path.value == "Skills") return 2;
  if (path.value == "Experience") return 3;
  if (path.value == "Blog") return 4;
  if (path.value == "Projects") return 5;
});

const showOverlay = ref(false);

const handleKeyPress = (event) => {
  if (
    event.key === "ArrowRight" ||
    event.key === "ArrowDown" ||
    event.key === " "
  ) {
    event.preventDefault();
    handleNextPage();
  } else if (
    event.key === "ArrowLeft" ||
    event.key === "ArrowUp" ||
    event.key === "Backspace"
  ) {
    event.preventDefault();
    handlePrevPage();
  } else if (event.key === "Escape") {
    event.preventDefault();
    router.push("/");
  } else if (event.key === "Enter") {
    event.preventDefault();
    // open modal
  }
};

onMounted(() => {
  showOverlay.value = true;
  window.addEventListener("keydown", handleKeyPress);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyPress);
});

// Watch for route changes and retrigger animation
watch(
  () => route.path,
  () => {
    showOverlay.value = false;
    setTimeout(() => {
      showOverlay.value = true;
    }, 50);
  }
);

const playOver = useLinkover();

const handleOver = (val) => {
  if (!val) return;
  if (hovering.value === val) return; // already hovered — skip replay
  hovering.value = val;
  playOver();
};

const handlePrevPage = () => {
  if (path.value == "Skills") router.push("/about");
  if (path.value == "Experience") router.push("/skills");
  if (path.value == "Blog") router.push("/experience");
  if (path.value == "Projects") router.push("/blog");
  handleClick();
};

const handleNextPage = () => {
  if (path.value == "Bio") router.push("/skills");
  if (path.value == "Skills") router.push("/experience");
  if (path.value == "Experience") router.push("/blog");
  if (path.value == "Blog") router.push("/projects");
  handleClick();
};

const handleClick = useBtnClick();

const hovering = ref("");
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  animation: expand 1.5s forwards;
}

.overlay-enter-from,
.overlay-leave-to {
  clip-path: circle(0% at 15% 7%);
}

.overlay-enter-to,
.overlay-leave-from {
  clip-path: circle(150% at 14% 7%);
}

@keyframes expand {
  from {
    clip-path: circle(0% at 14% 7%);
  }
  to {
    clip-path: circle(150% at 14% 7%);
  }
}
</style>

