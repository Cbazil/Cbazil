<template>
    <div
        class="relative flex flex-col sm:flex-row bg-stone-900 h-[100dvh] sm:px-12 lg:px-32 2xl:px-44 sm:items-center overflow-hidden"
    >
        <!-- Rotate notice: mobile landscape only -->
        <div class="rotate-notice">
            <img src="/images/logo.svg" class="w-12 h-12 mb-4" alt="logo" />
            <p class="text-white font-thin text-center text-base leading-loose">
                Please rotate to<br />portrait mode
            </p>
        </div>

        <div class="sm:w-4/9">
            <router-link @mouseover="handleOver" @click="handleClick" to="/">
                <h1
                    class="flex w-full justify-start mb-10 flex-row px-2 mt-8 cursor-pointer text-4xl sm:text-5xl lg:text-7xl 2xl:text-9xl font-extrabold bg-gradient-to-tr from-blue-900 @custom-variant hover (&:hover); via-sky-200 to-white bg-clip-text text-transparent"
                >
                    <img
                        src="/images/logo.svg"
                        class="w-10 h-10 lg:w-17 lg:h-17 2xl:w-28 2xl:h-28 mr-0.5 lg:mr-3 -mt-[2px] sm:mt-1 lg:-mt-0.5"
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
                                hoverIndex === 0 ||
                                (selectedIndex === 0 && !isMouseActive)
                                    ? 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent'
                                    : '',
                                'cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent',
                            ]"
                            >Bio</span
                        >
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
                                hoverIndex === 1 ||
                                (selectedIndex === 1 && !isMouseActive)
                                    ? 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent'
                                    : '',
                                'cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent',
                            ]"
                            >Skills</span
                        >
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
                                hoverIndex === 2 ||
                                (selectedIndex === 2 && !isMouseActive)
                                    ? 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent'
                                    : '',
                                'cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent',
                            ]"
                            >Experience</span
                        >
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
                                hoverIndex === 3 ||
                                (selectedIndex === 3 && !isMouseActive)
                                    ? 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent'
                                    : '',
                                'cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent',
                            ]"
                            >Blog</span
                        >
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
                                hoverIndex === 4 ||
                                (selectedIndex === 4 && !isMouseActive)
                                    ? 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent'
                                    : '',
                                'cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent',
                            ]"
                            >Projects</span
                        >
                    </router-link>
                </li>
            </ul>
        </div>

        <!-- DEVELOPER / INNOVATOR -->
        <div
            class="absolute bottom-5 right-6 sm:relative sm:bottom-auto sm:right-auto flex justify-center items-center mt-20 space-x-2 sm:space-x-4 w-1/9 overflow-hidden"
        >
            <div
                class="flex flex-col items-center"
                :class="
                    mounted ? 'word-slide-up' : 'opacity-0 translate-y-full'
                "
            >
                <span class="text-sky-300 font-thin">D</span
                ><span class="text-sky-300 font-thin">E</span
                ><span class="text-sky-300 font-thin">V</span
                ><span class="text-sky-300 font-thin">E</span
                ><span class="text-sky-300 font-thin">L</span
                ><span class="text-sky-300 font-thin">O</span
                ><span class="text-sky-300 font-thin">P</span
                ><span class="text-sky-300 font-thin">E</span
                ><span class="text-sky-300 font-thin">R</span>
            </div>
            <div class="h-48 border-l border-blue-300/30" />
            <div
                class="flex flex-col items-center"
                :class="
                    mounted ? 'word-slide-down' : 'opacity-0 -translate-y-full'
                "
            >
                <span class="text-sky-200 font-thin">I</span
                ><span class="text-sky-200 font-thin">N</span
                ><span class="text-sky-200 font-thin">N</span
                ><span class="text-sky-200 font-thin">O</span
                ><span class="text-sky-200 font-thin">V</span
                ><span class="text-sky-200 font-thin">A</span
                ><span class="text-sky-200 font-thin">T</span
                ><span class="text-sky-200 font-thin">O</span
                ><span class="text-sky-200 font-thin">R</span>
            </div>
        </div>

        <!-- Portrait -->
        <div
            class="absolute bottom-60 xs:bottom-40 right-5 sm:relative sm:bottom-auto sm:right-auto sm:w-4/9"
        >
            <img
                src="/images/portrait.svg"
                alt="avatar"
                class="relative w-full h-full transform scale-120 xs:scale-90 lg:scale-120"
            />
        </div>

        <!-- Binary 1s and 0s — mobile: both slide up. Desktop: slide from left -->
        <div
            class="absolute m-0 p-0 bottom-70 left-[3.5px] sm:bottom-26 lg:bottom-14 sm:left-12 lg:left-32 flex flex-row sm:flex-col space-y-0"
        >
            <section class="flex flex-col sm:flex-row space-y-2 space-x-4">
                <span
                    v-for="(n, i) in 8"
                    :key="'one-' + i"
                    class="text-sky-300 text-sm font-thin"
                    :class="mounted ? 'char-up-mobile' : 'opacity-0'"
                    :style="
                        mounted
                            ? `animation-delay: ${900 + i * 100}ms`
                            : 'opacity:0'
                    "
                    >1</span
                >
                <span
                    v-for="(n, i) in 5"
                    :key="'one-lg-' + i"
                    class="text-sky-300 text-sm font-thin hidden lg:block"
                    :class="mounted ? 'char-up-mobile' : 'opacity-0'"
                    :style="
                        mounted
                            ? `animation-delay: ${900 + (i + 8) * 100}ms`
                            : 'opacity:0'
                    "
                    >1</span
                >
            </section>
            <section class="flex flex-col sm:flex-row space-y-2 space-x-4">
                <span
                    v-for="(n, i) in 8"
                    :key="'zero-' + i"
                    class="text-sky-200 text-sm font-thin"
                    :class="mounted ? 'char-up-mobile' : 'opacity-0'"
                    :style="
                        mounted
                            ? `animation-delay: ${900 + 80 + i * 100}ms`
                            : 'opacity:0'
                    "
                    >0</span
                >
                <span
                    v-for="(n, i) in 5"
                    :key="'zero-lg-' + i"
                    class="text-sky-200 text-sm font-thin hidden lg:block"
                    :class="mounted ? 'char-up-mobile' : 'opacity-0'"
                    :style="
                        mounted
                            ? `animation-delay: ${900 + 80 + (i + 8) * 100}ms`
                            : 'opacity:0'
                    "
                    >0</span
                >
            </section>
        </div>

        <!-- + O X matrix — slides in from RIGHT, rightmost first -->
        <div
            class="absolute m-0 p-0 top-27 lg:top-14 right-2 lg:right-32 flex flex-col space-y-0"
        >
            <section>
                <span
                    v-for="(n, i) in 13"
                    :key="'plus-' + i"
                    class="text-blue-400 font-thin mx-[7.7px] lg:mx-[8.1px]"
                    :class="mounted ? 'char-from-right' : 'opacity-0'"
                    :style="
                        mounted
                            ? `animation-delay: ${900 + (11 - i) * 100}ms`
                            : 'opacity:0'
                    "
                    >+</span
                >
            </section>
            <section>
                <span
                    v-for="(n, i) in 13"
                    :key="'o-' + i"
                    class="text-sky-300 font-thin mx-2"
                    :class="mounted ? 'char-from-right' : 'opacity-0'"
                    :style="
                        mounted
                            ? `animation-delay: ${900 + 80 + (12 - i) * 100}ms`
                            : 'opacity:0'
                    "
                    >o</span
                >
            </section>
            <section class="space-x-4">
                <span
                    v-for="(n, i) in 13"
                    :key="'x-' + i"
                    class="text-sky-200 font-thin mx-[8.9px] lg:mx-[8.8px]"
                    :class="mounted ? 'char-from-right' : 'opacity-0'"
                    :style="
                        mounted
                            ? `animation-delay: ${900 + 160 + (12 - i) * 100}ms`
                            : 'opacity:0'
                    "
                    >x</span
                >
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useLinkover, useBtnClick } from "@/composables/useSound.js";
import { useHead } from '@unhead/vue'

useHead({
  title: 'Cbazil | Developer & Innovator',
  meta: [
    { name: 'description', content: 'Cbazil – developer and innovator. Explore my bio, skills, experience, blog and projects.' },

    { property: 'og:title', content: 'Cbazil | Developer & Innovator' },
    { property: 'og:description', content: 'Cbazil – developer and innovator. Explore my bio, skills, experience, blog and projects.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.cbazil.dev' },

    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Cbazil | Developer & Innovator' },
    { name: 'twitter:description', content: 'Cbazil – developer and innovator.' }
  ]
})

const handleOver = useLinkover();
const handleClick = useBtnClick();

const selectedIndex = ref(-1);
const hoverIndex = ref(-1);
const isMouseActive = ref(false);
const menuPaths = ["/about", "/skills", "/experience", "/blog", "/projects"];
const router = useRouter();
const mounted = ref(false);

function onItemHover(idx) {
    hoverIndex.value = idx;
    isMouseActive.value = true;
}
function onItemLeave() {
    hoverIndex.value = -1;
    isMouseActive.value = false;
}

function onNavFocus() {
    handleOver();
}

function onNavKeydown(e) {
    const last = menuPaths.length - 1;
    const base =
        isMouseActive.value && hoverIndex.value !== -1
            ? hoverIndex.value
            : selectedIndex.value;

    if (e.key === "ArrowDown") {
        const next = base === -1 ? 0 : Math.min(base + 1, last);
        selectedIndex.value = next;
        if (isMouseActive.value) hoverIndex.value = next;
        handleOver();
        return;
    }
    if (e.key === "ArrowUp") {
        const prev = Math.max((base === -1 ? 0 : base) - 1, 0);
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
    if (window.location.pathname !== "/") return;
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

onMounted(() => {
    window.addEventListener("keydown", onGlobalKey);
    nextTick(() => {
        requestAnimationFrame(() => {
            mounted.value = true;
        });
    });
});

onUnmounted(() => window.removeEventListener("keydown", onGlobalKey));
</script>

<style scoped>
.word-slide-up {
    animation: slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
}
.word-slide-down {
    animation: slideDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
}

/* each char slides in from left */
.char-from-left {
    animation: charLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* + o x slide in from right */
.char-from-right {
    animation: charRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* 1 and 0 on mobile both slide up from bottom */
.char-up-mobile {
    animation: charUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
/* on lg+ override mobile up animation back to from-left */
@media (min-width: 1024px) {
    .char-up-mobile {
        animation: charLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(200%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slideDown {
    from {
        transform: translateY(-200%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes charLeft {
    from {
        transform: translateX(-120%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes charRight {
    from {
        transform: translateX(120%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes charUp {
    from {
        transform: translateY(120%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
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
