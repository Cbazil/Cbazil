<template>
  <div
    class="flex flex-row bg-stone-900 h-[100dvh] lg:px-32 xl:px-44 items-center"
  >
    <div class="w-4/9">
      <router-link @mouseover="handleOver" @click="handleClick" to="/">
        <h1
          class="inline-flex flex-row cursor-pointer lg:text-8xl xl:text-9xl font-extrabold bg-gradient-to-tr from-blue-900 @custom-variant hover (&:hover); via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
        >
          <img
            src="/images/logo.svg"
            class="w-28 h-28 mr-3 mt-2"
            alt="Ice Cold Phoenix Image"
          />
          Cb@z!l
        </h1>
      </router-link>

      <ul class="link lg:text-4xl xl:text-5xl mt-2 text-emerald-400">
        <li class="my-4">
          <router-link @mouseover="handleOver" @click="handleClick" to="/about">
            <span
              class="cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              Bio
            </span>
          </router-link>
        </li>
        <li class="my-4">
          <router-link
            @mouseover="handleOver"
            @click="handleClick"
            to="/skills"
          >
            <span
              class="cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              Skills
            </span>
          </router-link>
        </li>
        <li class="my-4">
          <router-link
            @mouseover="handleOver"
            @click="handleClick"
            to="/experience"
          >
            <span
              class="cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              Experience
            </span>
          </router-link>
        </li>
        <li class="my-4">
          <router-link @mouseover="handleOver" @click="handleClick" to="/blog">
            <span
              class="cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              Blog
            </span>
          </router-link>
        </li>
        <li class="my-4">
          <router-link
            @mouseover="handleOver"
            @click="handleClick"
            to="/projects"
          >
            <span
              class="cursor-pointer inline-block hover:bg-gradient-to-tr hover:from-blue-900 @custom-variant hover (&:hover); hover:via-sky-200 to-white hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              Projects
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="flex justify-center items-center space-x-4 w-1/9">
      <!-- Left Text -->
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
      <!-- Vertical Line -->
      <div class="h-48 border-l border-white/40"></div>
      <!-- Right Text -->
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

    <div class="relative w-4/9">
      <img
        src="/images/portrait.svg"
        alt="avatar"
        class="relative w-full h-full transform scale-125"
      />
    </div>
  </div>
</template>

<script setup>
import { useLinkover, useBtnClick } from "@/composables/useSound.js";
const handleOver = useLinkover();
const handleClick = useBtnClick();
</script>