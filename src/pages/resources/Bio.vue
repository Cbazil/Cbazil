<template>
  <div>
    <div
      v-if="control.selectedOption == 'Profession'"
      class="flex flex-col-reverse md:flex-row"
    >
      <div
        class="relative w-full md:w-1/2 flex -mt-5 h-[64dvh] xl:h-[70dvh] flex-col"
      >
        <div
          class="relative w-full md:w-1/2 h-1/3 transform mt-15 md:mt-0"
          :class="{
            hidden: professionClicked && professionSelect !== 'Develop',
            'w-full h-full flex justify-start items-center md:mt-10 md:-ml-10!':
              professionClicked && professionSelect === 'Develop',
          }"
        >
          <section class="flex flex-col md:hidden">
            <div
              class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              <h3 class="hl text-lg text-lg">Develop</h3>
            </div>
            <br />
            <p class="font-thin">
              Building Software is a huge drive for me, having the ability be
              creative and contribute at solving problems.
            </p>
          </section>

          <img
            src="/images/laptop.svg"
            class="w-full object-contain -mt-2 transform scale-90 md:scale-90"
            :class="{
              'transform scale-150! -mt-5! ml-25':
                professionClicked && professionSelect === 'Develop',
            }"
            alt="Laptop"
          />
        </div>
        <div
          class="relative w-full md:w-1/2 h-1/3 mt-75 xs:mt-155 md:mt-0 md:self-end"
          :class="{
            hidden: professionClicked && professionSelect !== 'Plan',
            'w-full h-full flex justify-start items-center mt-20':
              professionClicked && professionSelect === 'Plan',
          }"
        >
          <section class="flex w-full flex-col md:hidden">
            <div
              class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              <h3 class="hl text-lg text-lg">Plan</h3>
            </div>
            <br />
            <p class="font-thin">
              Planning in anything is key to success, mapping out the
              fundamentals is what I follow.
            </p>
          </section>
          <img
            src="/images/handbook.svg"
            class="w-full object-contain -mt-5 md:-mt-30 md:-ml-5 lg:-ml-10 xl:-ml-15 transform scale-80 md:scale-70"
            :class="{
              'transform md:-ml-75 mt-10! md:-ml-50 lg:-ml-50 xl:-ml-70 scale-115!':
                professionClicked && professionSelect === 'Plan',
            }"
            alt="Handbook"
          />
        </div>
        <div
          class="relative w-full md:w-1/2 h-1/3 mt-70 xs:mt-155 md:mt-10 transform"
          :class="{
            hidden: professionClicked && professionSelect !== 'Coach',
            'w-full h-full flex justify-start! items-center mt-10 ml-20':
              professionClicked && professionSelect === 'Coach',
          }"
        >
          <section class="flex flex-col md:hidden">
            <div
              class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              <h3 class="hl text-lg text-lg">Coach</h3>
            </div>
            <br />
            <p class="font-thin">
              I have plenty experience in teaching and mentoring others. I love
              seeing growth in individuals and teams.
            </p>
          </section>
          <img
            src="/images/headset.svg"
            class="w-full object-contain mt-5 md:ml-5 md:-mt-20 transform scale-100 md:scale-110"
            :class="{
              'transform -mt-15! -ml-5! scale-170!':
                professionClicked && professionSelect === 'Coach',
            }"
            alt="Headset"
          />
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <br />
        <p class="text-lg mt-10 md:mt-0 sm:text-xl xl:text-2xl font-thin">
          As a developer, I aim to build, solve and resolve. I innovate by
          keeping things simple, effective and relatively close to standard
          approaches. I am very client & MVP focused, meeting their needs and
          capable of advising where needed. I work well under pressure and
          independently, keen on sharing ideas; growing myself and others.
        </p>
        <div class="relative hidden md:flex items-center mt-5">
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
    <div
      v-if="control.selectedOption == 'Personal'"
      class="flex flex-col md:flex-row"
    >
      <div class="w-full md:w-1/2">
        <p class="text-lg mt-15 md:mt-0 sm:text-xl xl:text-2xl font-thin pt-2">
          I am introverted by nature, I have been said to have this silent
          confident, where I communicate when needed. I love being creative and
          having some friendly competition. I enjoy hiking, badminton, music,
          chess, yu-gi-oh and online video games. I value honesty and the love
          for passions and goals (Dreamers who will not Quit).
        </p>
        <div class="relative hidden md:flex items-center mt-10">
          <div
            v-for="(item, idx) of personalItems"
            :key="idx"
            class="flex items-center"
          >
            <p
              class="absolute left-0 text-lg xl:text-2xl mt-30 xl:mt-35 font-thin"
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
        class="relative w-full md:w-1/2 flex h-[60dvh] xl:h-[70dvh] flex-col md:overflow-hidden"
      >
        <div
          class="relative w-full md:w-1/2 h-1/3 flex flex-col mt-10 md:mt-15 md:mr-10 md:self-end"
          :class="{
            hidden: personalClicked && personalSelect !== 'Gaming',
            'w-full h-full flex justify-start items-center':
              personalClicked && personalSelect === 'Gaming',
          }"
        >
          <section class="flex flex-col md:hidden">
            <div
              class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              <h3 class="hl text-lg">Gaming</h3>
            </div>
            <br />
            <p class="font-thin">
              I love any activity that allows some competitiveness through
              strategy and going against others.
            </p>
          </section>
          <img
            src="/images/controller.svg"
            class="w-full object-contain ml-2.5 mt-10 md:-mt-20 md:ml-0 transform scale-93 md:scale-115"
            :class="{
              'transform scale-160! ml-20! mt-5!':
                personalClicked && personalSelect === 'Gaming',
            }"
            alt="Xbox"
          />
        </div>
        <div
          class="relative w-full md:w-1/2 h-1/3 mt-55 md:-mt-25 md:ml-10"
          :class="{
            hidden: personalClicked && personalSelect !== 'Music',
            'w-full h-full flex justify-start items-center transform md:self-end -mr-0 mt-0':
              personalClicked && personalSelect === 'Music',
          }"
        >
          <section class="flex flex-col md:hidden mt-25 xs:mt-55">
            <div
              class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              <h3 class="hl text-lg">Music</h3>
            </div>
            <br />
            <p class="font-thin">
              I enjoy various kinds of music, whether rock, pop, rap or even
              gospel especial ones with meaningful lyrics.
            </p>
          </section>
          <img
            src="/images/sing.svg"
            class="w-full object-contain -mt-5 md:-mt-10 transform scale-65 md:scale-70"
            :class="{
              'transform scale-110! mt-35!':
                personalClicked && personalSelect === 'Music',
            }"
            alt="Microphone"
          />
        </div>
        <div
          class="relative w-full md:w-1/2 h-1/3 mt-80 md:-mt-30 md:self-end"
          :class="{
            hidden: personalClicked && personalSelect !== 'Badminton',
            'w-full h-full flex justify-start items-center -mr-5':
              personalClicked && personalSelect === 'Badminton',
          }"
        >
          <section class="flex flex-col md:hidden mt-25 xs:mt-140">
            <div
              class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(180,240,255,1)] drop-shadow-[0_0_4px_rgba(120,200,255,0.9)] drop-shadow-[0_0_8px_rgba(80,160,255,0.6)]"
            >
              <h3 class="hl text-lg">Badminton</h3>
            </div>
            <br />
            <p class="font-thin">
              I enjoy badminton, I do try and attend each week, this keeps my
              physically body active
            </p>
          </section>
          <img
            src="/images/badminton.svg"
            class="w-full object-contain transform mt-5 lg:mt-10 xl:-mt-0.5 scale-95"
            :class="{
              'transform scale-135 mt-45!':
                personalClicked && personalSelect === 'Badminton',
            }"
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