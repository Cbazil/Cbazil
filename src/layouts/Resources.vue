<template>
  <transition name="overlay">
    <div
      v-if="showOverlay"
      class="relative bg-stone-900 text-white px-4 lg:px-32 2xl:px-58 h-[100dvh] flex flex-col"
    >
      <!-- Rotate notice — mobile landscape only -->
      <div class="rotate-notice">
        <img src="/images/logo.svg" class="w-12 h-12 mb-6" alt="logo" />
        <p class="text-white text-base font-thin text-center leading-relaxed">
          Please rotate your device<br />to portrait mode
        </p>
      </div>

      <!-- Rotate notice: mobile landscape only -->
      <div class="rotate-notice">
        <img src="/images/logo.svg" class="w-12 h-12 mb-4" alt="logo" />
        <p class="text-white font-thin text-center text-base leading-loose">
          Please rotate to<br />portrait mode
        </p>
      </div>

      <nav
        class="relative flex flex-row justify-between items-center h-24 md:h-34 shrink-0"
      >
        <div
          class="flex flex-row items-center bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
        >
          <img
            src="/images/logo.svg"
            class="w-9 w-9 md:w-12 md:h-12 mr-2 md:mr-3"
            alt="Ice Cold Phoenix Image"
          />
          <h2 class="text-2xl mt-0.75 md:text-4xl">{{ path }}</h2>
        </div>

        <div
          class="absolute mt-18 md:mt-0 landscape:mt-0 left-1/2 -translate-x-1/2 w-max flex flex-row items-center"
        >
          <button
            @click="selectPrevOption"
            class="hidden lg:block px-3.5 mr-1 text-stone-900 flex items-center justify-center rounded-r-md rounded-bl-md rounded-tl-[18px] bg-gradient-to-tr from-blue-900 via-sky-200 to-white transition-all duration-300"
          >
            LB
          </button>

          <div
            v-for="(opt, idx) in options"
            :key="idx"
            class="flex items-center"
          >
            <span
              @mouseover="playOver"
              @click="onOptionClick(opt)"
              @keydown.enter.space.prevent="onOptionClick(opt)"
              role="button"
              tabindex="0"
              class="px-0.5 md:px-1 rounded-sm inline-flex items-center group"
              :class="{
                'cursor-pointer': control.selectedOption != opt,
              }"
            >
              <span
                class="link text-[1.3rem] md:text-[1.5rem] bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent group-hover:text-emerald-400"
                :class="{
                  'text-emerald-500!': control.selectedOption == opt,
                }"
              >
                {{ opt }}
              </span>
            </span>
          </div>

          <button
            @click="selectNextOption"
            class="hidden lg:block px-3.5 ml-1 text-stone-900 flex items-center justify-center rounded-l-md rounded-br-md rounded-tr-[18px] bg-gradient-to-tr from-blue-900 via-sky-200 to-white transition-all duration-300"
          >
            RB
          </button>
        </div>

        <div
          class="flex flex-col md:flex-row items-center"
          :class="{ 'mt-44': linksOpened }"
        >
          <Icon
            icon="line-md:at"
            @click="linksOpened = true"
            v-if="!linksOpened"
            class="relative md:hidden z-50 text-stone-900 mr-1 mt-1 rounded-full p-1 mb-2 text-3xl bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
          />
          <Icon
            @click="linksOpened = false"
            v-else
            icon="line-md:close"
            class="relative z-50 text-stone-900 rounded-full p-1 mb-4 ml-1 text-3xl bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
          />

          <transition-group
            v-if="isSmallerThanSm"
            name="social-links"
            tag="div"
            class="contents"
          >
            <template v-if="linksOpened">
              <a
                v-for="(social, idx) in socialLinks"
                :key="social.name"
                target="_blank"
                :href="social.path"
                class="relative z-50 group ml-1 p-0 w-10 h-10 social-item"
                :style="{ '--i': idx }"
              >
                <div
                  @mouseover="playOver"
                  @click="handleClick"
                  class="absolute flex justify-end inset-0 transition-opacity duration-300 [mask-repeat:no-repeat] [mask-size:contain]"
                  :style="{
                    maskImage: `url('https://api.iconify.design/${social.icon}.svg')`,
                    WebkitMaskImage: `url('https://api.iconify.design/${social.icon}.svg')`,
                  }"
                >
                  <div
                    class="absolute inset-0 bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
                  />
                  <div
                    class="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </a>
            </template>
          </transition-group>

          <transition-group
            v-else
            appear
            name="social-links"
            tag="div"
            class="contents"
          >
            <a
              v-for="(social, idx) in socialLinks"
              :key="idx"
              target="_blank"
              :href="social.path"
              class="relative z-50 group w-8 h-8 md:w-10 md:h-10 social-item"
            >
              <div
                @mouseover="playOver"
                @click="handleClick"
                class="absolute inset-0 transition-opacity duration-300 [mask-repeat:no-repeat] [mask-size:contain]"
                :style="{
                  maskImage: `url('https://api.iconify.design/${social.icon}.svg')`,
                  WebkitMaskImage: `url('https://api.iconify.design/${social.icon}.svg')`,
                }"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
                />
                <div
                  class="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
          </transition-group>
        </div>
      </nav>

      <div
        v-if="linksOpened && isSmallerThanSm"
        class="fixed inset-0 z-20 pointer-events-auto"
        style="background: rgba(0, 0, 0, 0.92)"
        aria-hidden="true"
      >
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none px-6 text-center"
        >
          <span class="base font-thin text-white text-center">
            Find me on these platforms
          </span>
        </div>
      </div>

      <div
        class="flex-1 min-h-0 mb-20 landscape:mb-12 overflow-y-auto md:overflow-hidden md:pb-28"
      >
        <router-view :key="$route.fullPath" />
      </div>

      <!-- Desktop Footer -->
      <footer
        class="hidden md:flex flex-col absolute bottom-6 md:bottom-14 left-0 w-full px-6 lg:px-32 2xl:px-58 md:flex-row items-center justify-between gap-6"
      >
        <section
          class="flex flex-1 items-center gap-1 text-white font-medium justify-center md:justify-start"
        >
          <button
            v-if="pageNum > 1"
            @click="handlePrevPage"
            @mouseover="handleOver('backspace')"
            @mouseleave="hovering = null"
            class="flex shrink-0 items-center justify-center h-7 px-1 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
          >
            <span class="font-normal">BACKSPACE</span>
          </button>
          <span
            v-if="pageNum > 1"
            class="leading-none truncate transition-colors duration-300"
            :class="{
              'text-emerald-500': hovering == 'backspace',
            }"
          >
            PREVIOUS
          </span>
          <router-link to="/" class="leading-none">
            <button
              @mouseover="handleOver('esc')"
              @mouseleave="hovering = null"
              @click="handleClick"
              class="flex shrink-0 items-center justify-center ml-2 h-7 px-1 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
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
          class="flex flex-1 gap-1 items-center justify-center md:justify-end"
        >
          <span
            class="font-medium leading-none transition-colors duration-300"
            :class="{ 'text-emerald-500': hovering == 'tab' }"
          >
            INFO
          </span>
          <button
            @mouseover="handleOver('tab')"
            @mouseleave="hovering = null"
            @click="openContact"
            class="flex items-center justify-center h-7 px-1 mr-2 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
          >
            TAB
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
            class="flex items-center justify-center h-7 px-1 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
          >
            SPACE
          </button>
        </section>
      </footer>

      <!-- Mobile Footer -->
      <footer
        class="flex md:hidden flex-col w-[300px] landscape:w-auto landscape:left-4 landscape:right-4 landscape:translate-x-0 bottom-1.5 absolute left-1/2 -translate-x-1/2 landscape:left-0 landscape:right-0"
      >
        <section class="relative flex w-full justify-around flex-row">
          <div
            class="absolute top-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-blue-900 via-sky-200 to-white"
          />

          <button
            v-if="pageNum > 1"
            @click="handlePrevPage"
            class="relative group w-1/4 h-10 landscape:h-8 pt-2.5 landscape:pt-1.5"
          >
            <div
              class="absolute inset-0 transition-opacity duration-300 [mask-repeat:no-repeat] [mask-size:16px] [mask-position:center]"
              style="
                -webkit-mask-image: url('https://api.iconify.design/streamline:button-previous.svg');
                mask-image: url('https://api.iconify.design/streamline:button-previous.svg');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
              />
            </div>
          </button>

          <router-link
            to="/"
            class="relative group w-1/4 h-10 landscape:h-8 pt-2.5 landscape:pt-1.5"
          >
            <button
              @click="handleClick"
              class="absolute inset-0 transition-opacity duration-300 [mask-repeat:no-repeat] [mask-size:16px] [mask-position:center]"
              style="
                -webkit-mask-image: url('https://api.iconify.design/streamline-ultimate:house-1.svg');
                mask-image: url('https://api.iconify.design/streamline-ultimate:house-1.svg');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
              />
            </button>
          </router-link>

          <!-- Mobile contact button -->
          <section
            class="relative group w-1/4 h-10 landscape:h-8 pt-2.5 landscape:pt-1.5"
          >
            <button
              @click="openContact"
              class="absolute inset-0 transition-opacity duration-300 [mask-repeat:no-repeat] [mask-size:16px] [mask-position:center]"
              style="
                -webkit-mask-image: url('https://api.iconify.design/streamline:chat-bubble-text-square.svg');
                mask-image: url('https://api.iconify.design/streamline:chat-bubble-text-square.svg');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
              />
            </button>
          </section>

          <button
            v-if="pageNum < 5"
            @click="handleNextPage"
            class="relative group w-1/4 h-10 landscape:h-8 pt-2.5 landscape:pt-1.5"
          >
            <div
              class="absolute inset-0 transition-opacity duration-300 [mask-repeat:no-repeat] [mask-size:16px] [mask-position:center]"
              style="
                -webkit-mask-image: url('https://api.iconify.design/streamline:button-next.svg');
                mask-image: url('https://api.iconify.design/streamline:button-next.svg');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
              />
            </div>
          </button>
        </section>
        <p class="text-center text-sm text-white opacity-70">
          &copy; 2026 Built by Cbazil
        </p>
      </footer>
      <Contact v-if="control.contactOpen" class="fixed inset-0 z-[9999]" />
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLinkover, useBtnClick } from "@/composables/useSound.js";
import { pageOptions, socialLinks } from "@/lib/data.js";
import { useControlStore } from "@/stores/main.js";
import Contact from "@/components/Contact.vue";

const control = useControlStore();

const route = useRoute();
const router = useRouter();

const path = computed(() => route.name);

const options = computed(() => pageOptions[path.value.toLowerCase()] || []);

const pageNum = computed(() => {
  if (path.value == "Bio") return 1;
  if (path.value == "Skills") return 2;
  if (path.value == "Experience") return 3;
  if (path.value == "Blog") return 4;
  if (path.value == "Projects") return 5;
});

const showOverlay = ref(false);

const openContact = () => {
  handleClick();
  control.contactOpen = true;
};

// navigate options (left/right)
const selectNextOption = () => {
  const opts = options.value || [];
  if (!opts.length) return;
  let idx = opts.indexOf(control.selectedOption);
  if (idx === -1) idx = 0;
  else idx = (idx + 1) % opts.length;
  handleClick();
  control.selectedOption = opts[idx];
};

const selectPrevOption = () => {
  const opts = options.value || [];
  if (!opts.length) return;
  let idx = opts.indexOf(control.selectedOption);
  if (idx === -1) idx = 0;
  else idx = (idx - 1 + opts.length) % opts.length;
  handleClick();
  control.selectedOption = opts[idx];
};

const handleKeyPress = (event) => {
  // While contact is open, only allow Escape to close it
  if (control.contactOpen) {
    if (event.key === "Escape") {
      event.preventDefault();
      control.contactOpen = false;
    }
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    selectNextOption();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    selectPrevOption();
  } else if (event.key === "ArrowDown" || event.key === " ") {
    event.preventDefault();
    handleNextPage();
  } else if (event.key === "ArrowUp" || event.key === "Backspace") {
    event.preventDefault();
    handlePrevPage();
  } else if (event.key === "Escape") {
    event.preventDefault();
    router.push("/");
  } else if (event.key === "Tab") {
    event.preventDefault();
    control.contactOpen = true;
  }
};

const isSmallerThanSm = ref(false);

function checkWidth() {
  isSmallerThanSm.value = window.innerWidth < 768;
}

onMounted(() => {
  showOverlay.value = true;
  checkWidth();
  window.addEventListener("resize", checkWidth);
  window.addEventListener("keydown", handleKeyPress);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyPress);
  window.removeEventListener("resize", checkWidth);
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
  if (hovering.value === val) return;
  hovering.value = val;
  playOver();
};

const linksOpened = ref(false);

const onOptionClick = (opt) => {
  handleClick();
  control.selectedOption = opt;
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
  animation: expand 1.2s forwards;
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

.social-links-enter-from,
.social-links-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.social-links-enter-to,
.social-links-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.social-links-enter-active,
.social-links-leave-active {
  transition: transform 260ms cubic-bezier(0.2, 0.9, 0.2, 1), opacity 220ms ease;
}

.social-item {
  transition: transform 260ms cubic-bezier(0.2, 0.9, 0.2, 1), opacity 220ms ease;
  transition-delay: calc(var(--i) * 35ms);
}

.rotate-notice {
  display: none;
}

@media screen and (max-width: 768px) and (orientation: landscape) {
  .rotate-notice {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: #1c1917;
  }
}
.rotate-notice {
  display: none;
}

@media screen and (max-width: 768px) and (orientation: landscape) {
  .rotate-notice {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: #1c1917;
  }
}
</style>
