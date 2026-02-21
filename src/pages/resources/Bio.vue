<template>
  <div>
    <div
      v-if="control.selectedOption == 'Profession'"
      class="w-full flex flex-row"
    >
      <div class="relative w-1/2 flex -mt-5 h-[60dvh] xl:h-[70dvh] flex-col">
        <div
          class="relative w-1/2 h-1/3 transform scale-110"
          :class="{
            hidden: professionClicked && professionSelect !== 'Develop',
            'w-full h-full flex justify-start items-center transform mt-10 -ml-10! scale-105!':
              professionClicked && professionSelect === 'Develop',
          }"
        >
          <img
            src="/images/laptop.svg"
            class="w-full object-contain"
            alt="Laptop"
          />
        </div>
        <div
          class="relative w-1/2 h-1/3 flex flex-row self-end transform scale-125"
          :class="{
            hidden: professionClicked && professionSelect !== 'Plan',
            'w-full h-full flex justify-start items-center transform mt-10 -ml-10! scale-65!':
              professionClicked && professionSelect === 'Plan',
          }"
        >
          <img
            src="/images/handbook.svg"
            class="w-full object-contain -mt-10 -ml-10"
            alt="Handbook"
          />
        </div>
        <div
          class="w-1/2 h-1/3 transform scale-110 xl:scale-110"
          :class="{
            hidden: professionClicked && professionSelect !== 'Coach',
            'w-full h-full flex justify-start! items-center transform mt-10 -ml-20! scale-100!':
              professionClicked && professionSelect === 'Coach',
          }"
        >
          <img
            src="/images/headset.svg"
            class="w-full object-contain ml-5 -mt-7"
            alt="Headset"
          />
        </div>
      </div>
      <div class="w-1/2">
        <br />
        <p class="text-xl font-thin">
          As a developer, I aim to build, solve and resolve. I innovate by
          keeping things simple, effective and relatively close to standard
          approaches. I am very client & MVP focused, meeting their needs and
          capable of advising where needed. I work well under pressure and
          independently, keen on sharing ideas; growing myself and others.
        </p>
        <div class="relative flex items-center mt-5">
          <div
            v-for="(item, idx) of professionItems"
            :key="idx"
            class="flex items-center"
          >
            <span
              @mouseover="handleOver()"
              @mouseleave="handleLeave(item.title)"
              @click.prevent="handleSelect('Profession', item.title)"
              role="button"
              tabindex="0"
              class="px-0.5 md:px-1 rounded-sm inline-flex items-center group"
              :class="{ 'cursor-pointer': professionSelect != item.title }"
            >
              <span
                class="link text-[1.3rem] md:text-[1.5rem] bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent group-hover:text-emerald-400"
                :class="{
                  'text-emerald-500! cursor-pointer':
                    professionSelect == item.title,
                }"
              >
                {{ item.title }}
              </span>
            </span>
            <p
              class="absolute left-0 mt-30 text-lg font-thin"
              v-if="professionSelect == item.title"
            >
              {{ item.info }}
            </p>
          </div>
          <button
            @click="handleCloseProfession"
            @mouseover="playOver"
            v-if="professionClicked"
            class="cursor-pointer rounded-sm ml-0.5 p-1.5 text-xl text-red-600"
          >
            <Icon icon="line-md:close" />
          </button>
        </div>
      </div>
    </div>
    <div v-if="control.selectedOption == 'Personal'" class="flex md:flex-row">
      <div class="w-1/2">
        <p class="text-xl font-thin pt-2">
          I am introverted by nature, I have been said to have this silent
          confident, where I communicate when needed. I love being creative and
          having some friendly competition. I enjoy hiking, badminton, music,
          chess, yu-gi-oh and online video games. I value honesty and the love
          for passions and goals (Dreamers who will not Quit).
        </p>
        <div class="relative flex items-center mt-10">
          <div
            v-for="(item, idx) of personalItems"
            :key="idx"
            class="flex items-center"
          >
            <p
              class="absolute left-0 text-lg mt-30 font-thin"
              v-if="personalSelect == item.title"
            >
              {{ item.info }}
            </p>
            <span
              @mouseover="handleOver()"
              @mouseleave="handleLeave(item.title)"
              @click.prevent="handleSelect('Personal', item.title)"
              role="button"
              tabindex="0"
              class="px-0.5 md:px-1 rounded-sm items-center group"
              :class="{ 'cursor-pointer': personalSelect != item.title }"
            >
              <span
                class="link text-[1.3rem] md:text-[1.5rem] bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent group-hover:text-emerald-400"
                :class="{
                  'text-emerald-500! cursor-pointer':
                    personalSelect == item.title,
                }"
              >
                {{ item.title }}
              </span>
            </span>
          </div>
          <button
            @click="handleClosePersonal"
            @mouseover="playOver"
            v-if="personalClicked"
            class="cursor-pointer rounded-sm ml-0.5 p-1.5 text-xl text-red-600"
          >
            <Icon icon="line-md:close" />
          </button>
        </div>
      </div>
      <div
        class="relative w-1/2 flex h-[60dvh] xl:h-[70dvh] flex-col overflow-hidden"
      >
        <div
          class="relative w-1/2 h-1/3 flex mt-1 mr-10 flex-row self-end"
          :class="{
            hidden: personalClicked && personalSelect !== 'Gaming',
            'w-full h-full flex justify-start items-center transform -mr-10! scale-55!':
              personalClicked && personalSelect === 'Gaming',
          }"
        >
          <img
            src="/images/controller.svg"
            class="w-full object-contain transform scale-175"
            alt="Xbox"
          />
        </div>
        <div
          class="relative w-1/2 h-1/3 -mt-10 ml-10"
          :class="{
            hidden: personalClicked && personalSelect !== 'Music',
            'w-full h-full flex justify-start items-center transform -mr-5 mt-0 scale-75!':
              personalClicked && personalSelect === 'Music',
          }"
        >
          <img
            src="/images/sing.svg"
            class="w-full object-contain transform scale-75"
            alt="Microphone"
          />
        </div>
        <div
          class="w-1/2 h-1/3 flex flex-row -mt-2 xl:mt-0 self-end"
          :class="{
            hidden: personalClicked && personalSelect !== 'Badminton',
            'w-full h-full flex justify-start items-center transform -mr-5 scale-35!':
              personalClicked && personalSelect === 'Badminton',
          }"
        >
          <img
            src="/images/badminton.svg"
            class="w-full transform scale-220"
            alt="Racket"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";
import { useLinkover, useBtnClick } from "@/composables/useSound.js";
import { personalItems, professionItems } from "@/composables/data.js";

const control = useControlStore();

const personalSelect = ref("");
const personalClicked = ref(false);

const professionSelect = ref("");
const professionClicked = ref(false);

const handleSelect = (type, opt) => {
  handleClick();
  if (type === "Personal") {
    personalClicked.value = true;
    personalSelect.value = opt;
  }
  if (type === "Profession") {
    professionClicked.value = true;
    professionSelect.value = opt;
  }
};

const playOver = useLinkover();
const handleClick = useBtnClick();

const handleCloseProfession = () => {
  handleClick();
  professionClicked.value = false;
  professionSelect.value = "";
};

const handleClosePersonal = () => {
  handleClick();
  personalClicked.value = false;
  personalSelect.value = "";
};

const handleOver = () => {
  playOver();
};

const handleLeave = (val) => {
  if (!personalClicked.value) {
    personalSelect.value = "";
  }
};

onMounted(() => {
  control.selectedOption = "Profession";
});

onUnmounted(() => {
  control.selectedOption = undefined;
});
</script>