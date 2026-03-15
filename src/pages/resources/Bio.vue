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
                        hidden:
                            professionClicked && professionSelect !== 'Develop',
                        'w-full h-full md:w-full md:h-full flex justify-start items-center md:mt-10 md:-ml-10!':
                            professionClicked && professionSelect === 'Develop',
                    }"
                >
                    <section class="flex flex-col md:hidden">
                        <div
                            class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            <h3 class="hl text-lg text-lg">Develop</h3>
                        </div>
                        <br />
                        <h3 class="font-thin">
                            Building Software is a huge drive for me, having the
                            ability be creative and contribute at solving
                            problems.
                        </h3>
                    </section>
                    <img
                        src="/images/laptop.svg"
                        class="w-full object-contain -mt-2.5 transform scale-90 md:scale-90"
                        :class="{
                            'transform scale-75! -mt-25! ml-0':
                                professionClicked &&
                                professionSelect === 'Develop',
                        }"
                        alt="Laptop"
                    />
                </div>
                <div
                    class="relative w-full md:w-1/2 h-1/3 mt-85 xs:mt-155 md:mt-0 md:self-end"
                    :class="{
                        hidden:
                            professionClicked && professionSelect !== 'Plan',
                        'w-full h-full flex justify-start items-center mt-20':
                            professionClicked && professionSelect === 'Plan',
                    }"
                >
                    <section class="flex w-full flex-col md:hidden">
                        <div
                            class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            <h3 class="hl text-lg text-lg">Plan</h3>
                        </div>
                        <br />
                        <h3 class="font-thin!">
                            Planning in anything is key to success, mapping out
                            the fundamentals is what I follow.
                        </h3>
                    </section>
                    <img
                        src="/images/handbook.svg"
                        class="w-full object-contain -mt-5 md:-mt-30 md:-ml-5 lg:-ml-10 xl:-ml-15 transform scale-80 md:scale-70"
                        :class="{
                            'transform md:-ml-75 mt-5! md:-ml-50 lg:-ml-50 xl:-ml-45 2xl:-ml-70 scale-115!':
                                professionClicked &&
                                professionSelect === 'Plan',
                        }"
                        alt="Handbook"
                    />
                </div>
                <div
                    class="relative w-full md:w-1/2 h-1/3 mt-90 xs:mt-155 md:mt-10 transform"
                    :class="{
                        hidden:
                            professionClicked && professionSelect !== 'Coach',
                        'w-full h-full flex justify-start! items-center mt-10 ml-20':
                            professionClicked && professionSelect === 'Coach',
                    }"
                >
                    <section class="flex flex-col md:hidden">
                        <div
                            class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            <h3 class="hl text-lg text-lg">Coach</h3>
                        </div>
                        <br />
                        <h3 class="font-thin!">
                            I have plenty experience in teaching and mentoring
                            others. I love seeing growth in individuals and
                            teams.
                        </h3>
                    </section>
                    <img
                        src="/images/headset.svg"
                        class="w-full object-contain mt-5 md:ml-5 md:-mt-26 transform scale-100"
                        :class="{
                            'transform -mt-15! -ml-5! scale-170!':
                                professionClicked &&
                                professionSelect === 'Coach',
                        }"
                        alt="Headset"
                    />
                </div>
            </div>
            <div class="w-full md:w-1/2">
                <br />
                <h3
                    class="text-lg mt-10 md:mt-0 sm:text-xl xl:text-2xl font-thin!"
                >
                    As a developer, I aim to build, solve and resolve. I
                    innovate by keeping things simple, effective and relatively
                    close to standard approaches. I am very client & MVP
                    focused, meeting their needs and capable of advising where
                    needed. I work well under pressure and independently, keen
                    on sharing ideas; growing myself and others.
                </h3>
                <div class="relative hidden md:flex items-center mt-5">
                    <div
                        v-for="(item, idx) of professionItems"
                        :key="idx"
                        class="flex items-center"
                    >
                        <span
                            @mouseover="handleOver()"
                            @mouseleave="handleLeave(item.title)"
                            @click.prevent="
                                handleSelect('Profession', item.title)
                            "
                            role="button"
                            tabindex="0"
                            class="px-0.5 md:px-1 rounded-sm inline-flex items-center group"
                            :class="{
                                'cursor-pointer':
                                    professionSelect != item.title,
                            }"
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
                        <h3
                            class="absolute left-0 mt-30 text-xl font-thin"
                            v-if="professionSelect == item.title"
                        >
                            {{ item.info }}
                        </h3>
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
                <h3
                    class="text-lg mt-15 md:mt-0 sm:text-xl xl:text-2xl font-thin! pt-2"
                >
                    I am introverted by nature, I have been said to have this
                    silent confident, where I communicate when needed. I love
                    being creative and having some friendly competition. I enjoy
                    hiking, badminton, music, chess, yu-gi-oh and online video
                    games. I value honesty and the love for passions and goals
                    (Dreamers who will not Quit).
                </h3>
                <div class="relative hidden md:flex items-center mt-10">
                    <div
                        v-for="(item, idx) of personalItems"
                        :key="idx"
                        class="flex items-center"
                    >
                        <h3
                            class="absolute left-0 text-xl 2xl:text-2xl mt-30 xl:mt-35 font-thin"
                            v-if="personalSelect == item.title"
                        >
                            {{ item.info }}
                        </h3>
                        <span
                            @mouseover="handleOver()"
                            @mouseleave="handleLeave(item.title)"
                            @click.prevent="
                                handleSelect('Personal', item.title)
                            "
                            role="button"
                            tabindex="0"
                            class="px-0.5 md:px-1 rounded-sm items-center group"
                            :class="{
                                'cursor-pointer': personalSelect != item.title,
                            }"
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
                            class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            <h3 class="hl text-lg">Gaming</h3>
                        </div>
                        <br />
                        <h3 class="font-thin">
                            I love any activity that allows some competitiveness
                            through strategy and going against others.
                        </h3>
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
                            class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            <h3 class="hl text-lg">Music</h3>
                        </div>
                        <br />
                        <h3 class="font-thin">
                            I enjoy various kinds of music, whether rock, pop,
                            rap or even gospel especial ones with meaningful
                            lyrics.
                        </h3>
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
                    class="relative w-full md:w-1/2 h-1/3 mt-85 md:-mt-30 md:self-end"
                    :class="{
                        hidden:
                            personalClicked && personalSelect !== 'Badminton',
                        'w-full h-full flex justify-start items-center -mr-5':
                            personalClicked && personalSelect === 'Badminton',
                    }"
                >
                    <section class="flex flex-col md:hidden mt-35 xs:mt-140">
                        <div
                            class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                        >
                            <h3 class="hl text-lg">Badminton</h3>
                        </div>
                        <br />
                        <h3 class="font-thin">
                            I enjoy badminton, I do try and attend each week,
                            this keeps my physically body active
                        </h3>
                    </section>
                    <img
                        src="/images/badminton.svg"
                        class="w-full object-contain transform mt-5 lg:mt-10 xl:-mt-0.5 scale-95"
                        :class="{
                            'transform scale-135 mt-45!':
                                personalClicked &&
                                personalSelect === 'Badminton',
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
import { useHead } from "@unhead/vue";
import { useControlStore } from "@/stores/main.js";
import { useLinkover, useBtnClick } from "@/composables/useSound.js";
import { personalItems, professionItems } from "@/lib/data.js";

// ── SEO ───────────────────────────────────────────────────────────────────────
useHead({
    title: "Bio | Cbazil",
    meta: [
        {
            name: "description",
            content:
                "Learn about Cbazil — a developer and innovator passionate about building software, planning with purpose, and coaching others to grow.",
        },
        { property: "og:title", content: "Bio | Cbazil" },
        {
            property: "og:description",
            content:
                "Learn about Cbazil — a developer and innovator passionate about building software, planning with purpose, and coaching others to grow.",
        },
        { property: "og:url", content: "https://www.cbazil.dev/about" },
        { name: "twitter:card", content: "summary" },
    ],
});

// ── State ─────────────────────────────────────────────────────────────────────
const control = useControlStore();

const personalSelect = ref("");
const personalClicked = ref(false);

const professionSelect = ref("");
const professionClicked = ref(false);

const playOver = useLinkover();
const handleClick = useBtnClick();

// Ordered item lists for keyboard nav
const professionKeys = professionItems.map((i) => i.title); // ['Develop','Plan','Coach']
const personalKeys = personalItems.map((i) => i.title); // ['Gaming','Music','Badminton']

// ── Handlers ──────────────────────────────────────────────────────────────────
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

const handleOver = () => playOver();
const handleLeave = () => {
    if (!personalClicked.value) personalSelect.value = "";
};

// ── Keyboard navigation ───────────────────────────────────────────────────────
const handleKeydown = (e) => {
    const tab = control.selectedOption; // 'Profession' | 'Personal'

    // Space — never handle here, always let the wrapper layout handle it
    if (e.key === " ") return;

    // Left / Right — cycle items within active tab
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const keys = tab === "Profession" ? professionKeys : personalKeys;
        const clicked =
            tab === "Profession"
                ? professionClicked.value
                : personalClicked.value;
        if (!clicked) return; // no item selected yet, let Resources handle tabs

        e.preventDefault();
        e.stopImmediatePropagation();

        const current =
            tab === "Profession"
                ? professionSelect.value
                : personalSelect.value;
        const idx = keys.indexOf(current);
        const next =
            e.key === "ArrowRight"
                ? keys[(idx + 1) % keys.length]
                : keys[(idx - 1 + keys.length) % keys.length];

        handleSelect(tab, next);
        return;
    }

    // ArrowDown — select first item if none selected, otherwise let wrapper handle
    if (e.key === "ArrowDown") {
        if (tab === "Profession") {
            if (!professionClicked.value) {
                e.preventDefault();
                e.stopImmediatePropagation();
                handleSelect("Profession", professionKeys[0]);
            }
            // item already selected — let wrapper go to next page
            return;
        }

        if (tab === "Personal") {
            if (!personalClicked.value) {
                e.preventDefault();
                e.stopImmediatePropagation();
                handleSelect("Personal", personalKeys[0]);
            }
            // item already selected — let wrapper go to next page
            return;
        }
    }

    // ArrowUp / Backspace — deselect item or switch tab, let wrapper handle if nothing to close
    if (e.key === "ArrowUp" || e.key === "Backspace") {
        if (tab === "Profession") {
            if (professionClicked.value) {
                e.preventDefault();
                e.stopImmediatePropagation();
                handleCloseProfession();
            }
            // nothing selected — let wrapper go to prev page / home
            return;
        }

        if (tab === "Personal") {
            if (personalClicked.value) {
                e.preventDefault();
                e.stopImmediatePropagation();
                handleClosePersonal();
            } else {
                // switch back up to Profession tab
                e.preventDefault();
                e.stopImmediatePropagation();
                handleClick();
                control.selectedOption = "Profession";
            }
            return;
        }
    }
};

onMounted(() => {
    control.selectedOption = "Profession";
    window.addEventListener("keydown", handleKeydown, true);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown, true);
    control.selectedOption = undefined;
});
</script>
