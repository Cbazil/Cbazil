<template>
  <div>
    <!-- Mobile overlay (Teleport to body) -->
    <Teleport to="body">
      <Transition name="overlay-fade">
        <div
          v-if="mobileOverlay && mobileSelected"
          class="fixed inset-0 z-[9998] flex flex-col md:hidden"
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
            <div class="rounded-sm overflow-hidden my-5 shrink-0">
              <img
                :src="`/images/${mobileSelected.img}`"
                :alt="mobileSelected.preview"
                class="h-24 w-auto object-cover rounded-sm"
              />
            </div>
            <div class="w-full" style="max-width: 100%">
              <div
                class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent mb-3 text-center"
              >
                <h3 class="hl text-xl font-bold">
                  {{ mobileSelected.title }}
                </h3>
              </div>
              <p
                class="font-thin text-md text-gray-300 text-center leading-relaxed mb-4"
              >
                {{ mobileSelected.desc }}
              </p>
              <div class="flex flex-wrap justify-center gap-2 mb-5">
                <span
                  v-for="tag in mobileSelected.tags"
                  :key="tag"
                  class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white text-stone-900 rounded-full py-0.5 px-4 text-sm"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="flex justify-center">
                <a
                  class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm"
                  :href="mobileSelected.link"
                  target="_blank"
                >
                  <Icon icon="mdi:link-variant" class="size-4" />
                  Go to Article on the medium.com platform
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ALL -->
    <section
      class="block md:flex md:flex-row"
      v-if="control.selectedOption == 'All'"
    >
      <article class="w-4/6 hidden md:block">
        <h2
          class="hl text-2xl bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
        >
          {{ aSelected }}
        </h2>
        <br />
        <span class="font-thin text-xl pr-20">{{ aDesc }}</span>
        <br />
        <ul class="flex inline-flex mt-5" v-for="i of aTags" :key="i">
          <li
            class="mr-2 bg-gradient-to-tr from-blue-900 via-sky-200 to-white text-stone-900 rounded-full py-0.5 px-4"
          >
            {{ i }}
          </li>
        </ul>
        <br /><br />
        <a
          class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline"
          :href="aLinks"
          target="_blank"
        >
          <Icon icon="mdi:link-variant" class="size-4" /> Go to Article on the
          medium.com platform
        </a>
      </article>
      <article
        ref="aListEl"
        class="hidden md:block w-2/6 h-[62dvh] 2xl:h-[70dvh] overflow-y-scroll"
      >
        <div
          :ref="
            (el) => {
              if (el) aItemEls[idx] = el;
            }
          "
          @click.prevent="selectBlog(i, idx, 'all')"
          @mouseover="hovering = i.preview"
          @mouseout="hovering = ''"
          v-for="(i, idx) of blogs"
          :key="idx"
          class="relative h-44 w-fit ml-auto mb-4 cursor-pointer rounded-sm group"
        >
          <div
            class="absolute inset-0 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
            :class="
              hovering == i.preview || aSelected == i.title ? 'hidden' : ''
            "
          />
          <div
            class="absolute inset-0 rounded-sm border-2 border-emerald-500 z-10 pointer-events-none"
            :class="
              hovering == i.preview || aSelected == i.title ? 'block' : 'hidden'
            "
          />
          <img
            :src="`/images/${i.img}`"
            :alt="i.preview"
            class="h-full object-cover rounded-sm"
          />
          <div class="absolute bottom-0 bg-stone-900 left-0 overflow-hidden">
            <h3
              class="link text-xl leading-none"
              :class="[
                hovering == i.preview || aSelected == i.title
                  ? 'text-emerald-500 font-thin'
                  : 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]',
              ]"
            >
              {{ i.preview.replace(" ", ".") }}
            </h3>
          </div>
        </div>
      </article>
      <div class="flex flex-col md:hidden w-full py-4 items-center gap-4">
        <template v-for="(i, idx) of blogs" :key="idx">
          <div
            class="relative w-64 cursor-pointer rounded-sm group"
            @click="selectBlogMobile(i)"
          >
            <div
              class="absolute inset-0 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat z-10 pointer-events-none"
            />
            <div class="relative w-full rounded-sm overflow-hidden">
              <img
                :src="`/images/${i.img}`"
                :alt="i.preview"
                class="w-full object-cover block"
              />
              <div
                class="absolute bottom-0 left-0 bg-stone-900 overflow-hidden"
              >
                <h3
                  class="link text-base leading-none bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                >
                  {{ i.preview.replace(" ", ".") }}
                </h3>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- FRONTEND -->
    <section
      class="block md:flex md:flex-row"
      v-if="control.selectedOption == 'Frontend'"
    >
      <article class="w-4/6 hidden md:block">
        <h2
          class="hl text-2xl bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
        >
          {{ fSelected }}
        </h2>
        <br />
        <span class="font-thin text-xl pr-20">{{ fDesc }}</span>
        <br />
        <ul class="flex inline-flex mt-5" v-for="i of fTags" :key="i">
          <li
            class="mr-2 bg-gradient-to-tr from-blue-900 via-sky-200 to-white text-stone-900 rounded-full py-0.5 px-4"
          >
            {{ i }}
          </li>
        </ul>
        <br /><br />
        <a
          class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline"
          :href="fLinks"
          target="_blank"
        >
          <Icon icon="mdi:link-variant" class="size-4" /> Go to Article on the
          medium.com platform
        </a>
      </article>
      <article
        ref="fListEl"
        class="hidden md:block w-2/6 h-[62dvh] 2xl:h-[70dvh] overflow-y-scroll"
      >
        <div
          :ref="
            (el) => {
              if (el) fItemEls[idx] = el;
            }
          "
          @click.prevent="selectBlog(i, idx, 'frontend')"
          @mouseover="hovering = i.preview"
          @mouseout="hovering = ''"
          v-for="(i, idx) of frontendBlogs"
          :key="idx"
          class="relative h-44 w-fit ml-auto mb-4 cursor-pointer rounded-sm group"
        >
          <div
            class="absolute inset-0 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
            :class="
              hovering == i.preview || fSelected == i.title ? 'hidden' : ''
            "
          />
          <div
            class="absolute inset-0 rounded-sm border-2 border-emerald-500 z-10 pointer-events-none"
            :class="
              hovering == i.preview || fSelected == i.title ? 'block' : 'hidden'
            "
          />
          <img
            :src="`/images/${i.img}`"
            :alt="i.preview"
            class="h-full object-cover rounded-sm"
          />
          <div class="absolute bottom-0 bg-stone-900 left-0 overflow-hidden">
            <h3
              class="link text-xl leading-none"
              :class="[
                hovering == i.preview || fSelected == i.title
                  ? 'text-emerald-500 font-thin'
                  : 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]',
              ]"
            >
              {{ i.preview.replace(" ", ".") }}
            </h3>
          </div>
        </div>
      </article>
      <div class="flex flex-col md:hidden w-full py-4 items-center gap-4">
        <template v-for="(i, idx) of frontendBlogs" :key="idx">
          <div
            class="relative w-64 cursor-pointer rounded-sm group"
            @click="selectBlogMobile(i)"
          >
            <div
              class="absolute inset-0 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat z-10 pointer-events-none"
            />
            <div class="relative w-full rounded-sm overflow-hidden">
              <img
                :src="`/images/${i.img}`"
                :alt="i.preview"
                class="w-full object-cover block"
              />
              <div
                class="absolute bottom-0 left-0 bg-stone-900 overflow-hidden"
              >
                <h3
                  class="link text-base leading-none bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                >
                  {{ i.preview.replace(" ", ".") }}
                </h3>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- BACKEND -->
    <section
      class="block md:flex md:flex-row"
      v-if="control.selectedOption == 'Backend'"
    >
      <article class="w-4/6 hidden md:block">
        <h2
          class="hl text-2xl bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
        >
          {{ bSelected }}
        </h2>
        <br />
        <span class="font-thin text-xl pr-20">{{ bDesc }}</span>
        <br />
        <ul class="flex inline-flex mt-5" v-for="i of bTags" :key="i">
          <li
            class="mr-2 bg-gradient-to-tr from-blue-900 via-sky-200 to-white text-stone-900 rounded-full py-0.5 px-4"
          >
            {{ i }}
          </li>
        </ul>
        <br /><br />
        <a
          class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline"
          :href="bLinks"
          target="_blank"
        >
          <Icon icon="mdi:link-variant" class="size-4" /> Go to Article on the
          medium.com platform
        </a>
      </article>
      <article
        ref="bListEl"
        class="hidden md:block w-2/6 h-[62dvh] 2xl:h-[70dvh] overflow-y-scroll"
      >
        <div
          :ref="
            (el) => {
              if (el) bItemEls[idx] = el;
            }
          "
          @click.prevent="selectBlog(i, idx, 'backend')"
          @mouseover="hovering = i.preview"
          @mouseout="hovering = ''"
          v-for="(i, idx) of backendBlogs"
          :key="idx"
          class="relative h-44 w-fit ml-auto mb-4 cursor-pointer rounded-sm group"
        >
          <div
            class="absolute inset-0 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
            :class="
              hovering == i.preview || bSelected == i.title ? 'hidden' : ''
            "
          />
          <div
            class="absolute inset-0 rounded-sm border-2 border-emerald-500 z-10 pointer-events-none"
            :class="
              hovering == i.preview || bSelected == i.title ? 'block' : 'hidden'
            "
          />
          <img
            :src="`/images/${i.img}`"
            :alt="i.preview"
            class="h-full object-cover rounded-sm"
          />
          <div class="absolute bottom-0 bg-stone-900 left-0 overflow-hidden">
            <h3
              class="link text-xl leading-none"
              :class="[
                hovering == i.preview || bSelected == i.title
                  ? 'text-emerald-500 font-thin'
                  : 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]',
              ]"
            >
              {{ i.preview.replace(" ", ".") }}
            </h3>
          </div>
        </div>
      </article>
      <div class="flex flex-col md:hidden w-full py-4 items-center gap-4">
        <template v-for="(i, idx) of backendBlogs" :key="idx">
          <div
            class="relative w-64 cursor-pointer rounded-sm group"
            @click="selectBlogMobile(i)"
          >
            <div
              class="absolute inset-0 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat z-10 pointer-events-none"
            />
            <div class="relative w-full rounded-sm overflow-hidden">
              <img
                :src="`/images/${i.img}`"
                :alt="i.preview"
                class="w-full object-cover block"
              />
              <div
                class="absolute bottom-0 left-0 bg-stone-900 overflow-hidden"
              >
                <h3
                  class="link text-base leading-none bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                >
                  {{ i.preview.replace(" ", ".") }}
                </h3>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { useHead } from "@unhead/vue";
import { useControlStore } from "@/stores/main.js";
import { blogs } from "@/lib/data.js";

// ── SEO ───────────────────────────────────────────────────────────────────────
useHead({
  title: "Blog | Cbazil",
  meta: [
    {
      name: "description",
      content:
        "Cbazil's blog — articles on frontend and backend development published on Medium, covering Vue, React, Node and more.",
    },
    { property: "og:title", content: "Blog | Cbazil" },
    {
      property: "og:description",
      content:
        "Cbazil's blog — articles on frontend and backend development published on Medium, covering Vue, React, Node and more.",
    },
    { property: "og:url", content: "https://my.websenses.co.za/blog" },
    { name: "twitter:card", content: "summary" },
  ],
});

// ── State ─────────────────────────────────────────────────────────────────────
const control = useControlStore();
const hovering = ref("");

const mobileOverlay = ref(false);
const mobileSelected = ref(null);

const frontendBlogs = computed(() =>
  blogs.filter((b) => b.type === "frontend")
);
const backendBlogs = computed(() => blogs.filter((b) => b.type === "backend"));

const aSelected = ref(null);
const fSelected = ref(null);
const bSelected = ref(null);
const aDesc = ref(null);
const fDesc = ref(null);
const bDesc = ref(null);
const aTags = ref([]);
const fTags = ref([]);
const bTags = ref([]);
const aLinks = ref(null);
const fLinks = ref(null);
const bLinks = ref(null);

const aListEl = ref(null);
const fListEl = ref(null);
const bListEl = ref(null);
const aItemEls = ref([]);
const fItemEls = ref([]);
const bItemEls = ref([]);

const applyBlog = (blog, type) => {
  if (type === "all") {
    aSelected.value = blog.title;
    aDesc.value = blog.desc;
    aTags.value = blog.tags;
    aLinks.value = blog.link;
  } else if (type === "frontend") {
    fSelected.value = blog.title;
    fDesc.value = blog.desc;
    fTags.value = blog.tags;
    fLinks.value = blog.link;
  } else {
    bSelected.value = blog.title;
    bDesc.value = blog.desc;
    bTags.value = blog.tags;
    bLinks.value = blog.link;
  }
};

const selectBlog = (i, idx, type) => {
  applyBlog(i, type);
  nextTick(() => {
    const listEl =
      type === "all"
        ? aListEl.value
        : type === "frontend"
        ? fListEl.value
        : bListEl.value;
    const itemEls =
      type === "all"
        ? aItemEls.value
        : type === "frontend"
        ? fItemEls.value
        : bItemEls.value;
    const el = itemEls[idx];
    if (el && listEl) {
      listEl.scrollTo({ top: el.offsetTop - 136, behavior: "smooth" });
    }
  });
};

const selectBlogMobile = (blog) => {
  mobileSelected.value = blog;
  mobileOverlay.value = true;
};

// ── Keyboard navigation ───────────────────────────────────────────────────────
const tabs = ["All", "Frontend", "Backend"];

const currentList = () => {
  const tab = control.selectedOption;
  if (tab === "All") return { list: blogs, type: "all" };
  if (tab === "Frontend")
    return { list: frontendBlogs.value, type: "frontend" };
  return { list: backendBlogs.value, type: "backend" };
};

const currentSelected = () => {
  const tab = control.selectedOption;
  if (tab === "All") return aSelected.value;
  if (tab === "Frontend") return fSelected.value;
  return bSelected.value;
};

const handleKeydown = (e) => {
  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return;

  // Space — never handle here, always let the wrapper layout handle it
  if (e.key === " ") return;

  // Enter — open current blog link
  if (e.key === "Enter") {
    const { list } = currentList();
    const blog = list.find((b) => b.title === currentSelected());
    if (blog?.link) {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(blog.link, "_blank");
    }
    return;
  }

  // Arrow Left / Right — switch tabs
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
    const idx = tabs.indexOf(control.selectedOption);
    const next =
      e.key === "ArrowRight"
        ? tabs[(idx + 1) % tabs.length]
        : tabs[(idx - 1 + tabs.length) % tabs.length];
    control.selectedOption = next;
    return;
  }

  // Arrow Down — next blog
  if (e.key === "ArrowDown") {
    const { list, type } = currentList();
    const idx = list.findIndex((b) => b.title === currentSelected());
    if (idx < list.length - 1) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      selectBlog(list[idx + 1], idx + 1, type);
    }
    // at last blog — fall through to wrapper (next page)
    return;
  }

  // Arrow Up — prev blog or fall through
  if (e.key === "ArrowUp") {
    const { list, type } = currentList();
    const idx = list.findIndex((b) => b.title === currentSelected());
    if (idx > 0) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      selectBlog(list[idx - 1], idx - 1, type);
    }
    // at first blog — fall through to wrapper (prev page)
    return;
  }
};

onMounted(() => {
  control.selectedOption = "All";
  applyBlog(blogs[0], "all");
  if (frontendBlogs.value[0]) applyBlog(frontendBlogs.value[0], "frontend");
  if (backendBlogs.value[0]) applyBlog(backendBlogs.value[0], "backend");
  document.addEventListener("keydown", handleKeydown, true);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown, true);
  control.selectedOption = undefined;
});
</script>

<style scoped>
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.2s ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}
</style>
