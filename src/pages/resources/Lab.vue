<template>
    <div>
        <!-- Mobile overlay (Global Mobile) -->
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
                        class="flex-1 overflow-y-auto flex flex-col items-center pt-16 pb-10"
                        style="padding-left: 24px; padding-right: 24px"
                    >
                        <div
                            class="w-full max-w-sm mt-4 p-1 rounded-sm overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
                        >
                            <div
                                class="relative w-full aspect-[17/9] bg-stone-900 rounded-sm overflow-hidden"
                            >
                                <img
                                    class="w-full h-full object-fill"
                                    :src="mobileSelected.image"
                                    :alt="mobileSelected.title"
                                />
                            </div>
                        </div>

                        <div class="w-full max-w-sm mt-6 text-center">
                            <h3
                                class="hl text-2xl bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                            >
                                {{ mobileSelected.title }}
                            </h3>
                            <p class="mt-3 text-white/85 font-thin">
                                {{ mobileSelected.description }}
                            </p>
                        </div>

                        <div
                            class="w-full max-w-sm flex flex-wrap justify-center gap-2 mt-4"
                        >
                            <span
                                v-for="tag in mobileSelected.tags"
                                :key="tag"
                                class="bg-blue-200 text-white rounded-full py-0.5 px-3 text-xs font-medium backdrop-blur-sm"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <a
                            v-if="mobileSelected.link"
                            :href="mobileSelected.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm mt-5"
                        >
                            <Icon icon="mdi:link-variant" class="size-4" />
                            {{ mobileSelected.linkLabel }}
                        </a>
                    </div>
                </div>
            </Transition>
        </Teleport>

        <article v-if="control.selectedOption === 'Featured'">
            <div
                class="hidden md:flex flex-row justify-center h-[62dvh] w-full"
            >
                <!-- Main large card: WebSenses -->
                <section
                    class="relative w-[70%] h-full p-1 rounded-sm overflow-hidden mr-2 bg-[image:var(--background-image-gradient-border)] bg-no-repeat group border-2 border-transparent hover:border-emerald-500 transition-colors duration-300"
                >
                    <img
                        class="inset-0 w-full h-full object-fill"
                        src="/images/websenses.png"
                        alt="WebSenses"
                    />

                    <!-- Tags: VISIBLE ALWAYS -->
                    <div
                        class="absolute bottom-3 left-0 right-0 flex flex-wrap justify-center gap-2 px-3"
                    >
                        <span
                            v-for="tag in featuredCards[0].tags"
                            :key="tag"
                            class="bg-blue-200 text-white rounded-full py-0.5 px-4 text-sm font-medium backdrop-blur-sm"
                        >
                            {{ tag }}
                        </span>
                    </div>

                    <!-- Overlay -->
                    <div
                        class="absolute inset-0 z-10 flex flex-col justify-center items-center p-3 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300"
                    >
                        <img
                            src="/images/websenses-fi.png"
                            alt="WebSenses"
                            class="w-16 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <h3
                            class="text-2xl font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                        >
                            WebSenses
                        </h3>
                        <p
                            class="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                        >
                            Digital handbook, enroll to understand frontend
                            development.
                        </p>
                        <a
                            href="https://www.websenses.co.za"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3"
                        >
                            <Icon icon="mdi:link-variant" class="size-4.5" />
                            Visit www.websenses.co.za
                        </a>
                    </div>
                </section>

                <!-- Smaller cards column -->
                <section class="flex flex-col w-[24%] h-full gap-1">
                    <!-- Card 1: CodeSpace -->
                    <div
                        class="relative w-full p-0.5 rounded-sm h-1/3 overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat group hover:bg-none hover:border-2 hover:border-emerald-500"
                    >
                        <img
                            class="w-full h-full object-fill"
                            src="/images/codespace.png"
                            alt="CodeSpace"
                        />

                        <!-- Tags: smaller -->
                        <div
                            class="absolute bottom-1.5 left-0 right-0 flex flex-wrap justify-center gap-1 px-2"
                        >
                            <span
                                v-for="tag in featuredCards[1].tags"
                                :key="tag"
                                class="bg-blue-200 text-white rounded-full py-0.5 px-2 text-xs font-medium backdrop-blur-sm"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <!-- Overlay -->
                        <div
                            class="absolute inset-0 z-10 flex flex-col justify-center items-center p-2 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300"
                        >
                            <img
                                src="/images/codespace-fi.png"
                                alt="CodeSpace"
                                class="w-8 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <h3
                                class="text-lg font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                            >
                                CodeSpace
                            </h3>
                            <span
                                class="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                            >
                                Redesign & Maintenance (2022/25)
                            </span>
                            <a
                                href="https://www.codespace.co.za"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                            >
                                <Icon
                                    icon="mdi:link-variant"
                                    class="size-3.5"
                                />
                                Visit www.codespace.co.za
                            </a>
                        </div>
                    </div>

                    <!-- Card 2: MiniUMP -->
                    <div
                        class="relative w-full p-0.5 rounded-sm h-1/3 overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat group hover:border-2 hover:border-emerald-500"
                    >
                        <img
                            class="w-full h-full object-cover"
                            src="/images/miniump.png"
                            alt="MiniUMP"
                        />

                        <!-- Tags: smaller -->
                        <div
                            class="absolute bottom-1.5 left-0 right-0 flex flex-wrap justify-center gap-1 px-2"
                        >
                            <span
                                v-for="tag in featuredCards[2].tags"
                                :key="tag"
                                class="bg-blue-200 text-white rounded-full py-0.5 px-2 text-xs font-medium backdrop-blur-sm"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <!-- Overlay -->
                        <div
                            class="absolute inset-0 z-10 flex flex-col justify-center items-center p-2 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300"
                        >
                            <img
                                src="/images/miniump-fi.svg"
                                alt="MiniUMP"
                                class="w-7 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <h3
                                class="text-lg font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                            >
                                MiniUMP
                            </h3>
                            <span
                                class="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                            >
                                Match-Making & Score Keeping
                            </span>
                        </div>
                    </div>

                    <!-- Card 3: Cbazil -->
                    <div
                        class="relative w-full p-0.5 rounded-sm h-1/3 overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat group hover:border-2 hover:border-emerald-500"
                    >
                        <img
                            class="w-full h-full object-cover"
                            src="/images/cbazil.png"
                            alt="Cbazil OG"
                        />

                        <!-- Tags: smaller -->
                        <div
                            class="absolute bottom-1.5 left-0 right-0 flex flex-wrap justify-center gap-1 px-2"
                        >
                            <span
                                v-for="tag in featuredCards[3].tags"
                                :key="tag"
                                class="bg-blue-200 text-white rounded-full py-0.5 px-2 text-xs font-medium backdrop-blur-sm"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <!-- Overlay -->
                        <div
                            class="absolute inset-0 z-10 flex flex-col justify-center items-center p-2 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300"
                        >
                            <img
                                src="/images/cbazil-fi.png"
                                alt="Cbazil"
                                class="w-7 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <h3
                                class="text-lg font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                            >
                                Cbazil
                            </h3>
                            <span
                                class="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                            >
                                Legacy Portfolio (Older projects)
                            </span>
                            <a
                                href="https://cbazil.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                            >
                                <Icon
                                    icon="mdi:link-variant"
                                    class="size-3.5"
                                />
                                Visit cbazil.vercel.app
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Mobile: same Projects card style, tap opens overlay -->
            <div class="flex md:hidden flex-col w-full py-6 items-center gap-6">
                <template v-for="card in featuredCards" :key="card.key">
                    <div
                        class="relative w-[88vw] max-w-md p-0.5 rounded-sm overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat cursor-pointer"
                        @click="openMobileOverlay(card)"
                    >
                        <div
                            class="relative w-full aspect-[17/9] bg-stone-900 rounded-sm overflow-hidden"
                        >
                            <img
                                class="w-full h-full object-fill"
                                :src="card.image"
                                :alt="card.title"
                            />
                            <div
                                class="absolute bottom-2 left-0 right-0 flex flex-wrap justify-center gap-1.5 px-3"
                            >
                                <span
                                    v-for="tag in card.tags"
                                    :key="tag"
                                    class="bg-blue-200 text-white rounded-full py-0.5 px-2.5 text-xs font-medium backdrop-blur-sm"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </article>

        <article v-if="control.selectedOption === 'Micro'">
            <!-- Mobile -->
            <div class="md:hidden w-full mt-6">
                <div class="flex items-center justify-center gap-2 mb-3">
                    <div class="flex items-center gap-2">
                        <button
                            class="p-1 w-12 h-12 flex justify-center rounded-sm items-center bg-no-repeat transition-all duration-200"
                            :class="
                                control.microGameSelection === 'Tic Tac Toe' ||
                                microHover === 'Tic Tac Toe'
                                    ? 'border-2 border-emerald-500'
                                    : 'bg-[image:var(--background-image-gradient-border)]'
                            "
                            @click.stop="selectMicroGame('Tic Tac Toe')"
                            @mouseover="setMicroHover('Tic Tac Toe')"
                            @mouseleave="clearMicroHover"
                        >
                            <Icon
                                class="w-8 h-8 transition-colors duration-200"
                                :class="
                                    control.microGameSelection ===
                                        'Tic Tac Toe' ||
                                    microHover === 'Tic Tac Toe'
                                        ? 'text-emerald-500'
                                        : 'text-sky-200'
                                "
                                icon="game-icons:tic-tac-toe"
                            />
                        </button>

                        <button
                            class="p-1 w-12 h-12 flex justify-center rounded-sm items-center bg-no-repeat transition-all duration-200"
                            :class="
                                control.microGameSelection === 'Unlucky Hole' ||
                                microHover === 'Unlucky Hole'
                                    ? 'border-2 border-emerald-500'
                                    : 'bg-[image:var(--background-image-gradient-border)]'
                            "
                            @click.stop="selectMicroGame('Unlucky Hole')"
                            @mouseover="setMicroHover('Unlucky Hole')"
                            @mouseleave="clearMicroHover"
                        >
                            <Icon
                                class="w-8 h-8 transition-colors duration-200"
                                :class="
                                    control.microGameSelection ===
                                        'Unlucky Hole' ||
                                    microHover === 'Unlucky Hole'
                                        ? 'text-emerald-500'
                                        : 'text-sky-200'
                                "
                                icon="game-icons:hole"
                            />
                        </button>

                        <button
                            class="p-1 w-12 h-12 flex justify-center rounded-sm items-center bg-no-repeat transition-all duration-200"
                            :class="
                                control.microGameSelection ===
                                    'Rock Paper Scissors' ||
                                microHover === 'Rock Paper Scissors'
                                    ? 'border-2 border-emerald-500'
                                    : 'bg-[image:var(--background-image-gradient-border)]'
                            "
                            @click.stop="selectMicroGame('Rock Paper Scissors')"
                            @mouseover="setMicroHover('Rock Paper Scissors')"
                            @mouseleave="clearMicroHover"
                        >
                            <Icon
                                class="w-8 h-8 transition-colors duration-200"
                                :class="
                                    control.microGameSelection ===
                                        'Rock Paper Scissors' ||
                                    microHover === 'Rock Paper Scissors'
                                        ? 'text-emerald-500'
                                        : 'text-sky-200'
                                "
                                icon="game-icons:mailed-fist"
                            />
                        </button>

                        <button
                            class="p-1 w-12 h-12 flex justify-center rounded-sm items-center bg-no-repeat transition-all duration-200"
                            :class="
                                control.microGameSelection === 'Chess' ||
                                microHover === 'Chess'
                                    ? 'border-2 border-emerald-500'
                                    : 'bg-[image:var(--background-image-gradient-border)]'
                            "
                            @click.stop="selectMicroGame('Chess')"
                            @mouseover="setMicroHover('Chess')"
                            @mouseleave="clearMicroHover"
                        >
                            <Icon
                                class="w-8 h-8 transition-colors duration-200"
                                :class="
                                    control.microGameSelection === 'Chess' ||
                                    microHover === 'Chess'
                                        ? 'text-emerald-500'
                                        : 'text-sky-200'
                                "
                                icon="game-icons:chess-knight"
                            />
                        </button>
                    </div>

                    <button
                        class="p-1 w-12 h-12 flex justify-center rounded-sm items-center bg-no-repeat transition-all duration-200"
                        @click="microOptionsOverlay = true"
                    >
                        <Icon icon="mdi:cog" class="w-8 h-8 text-sky-200" />
                    </button>
                </div>

                <div class="w-full flex justify-center min-h-[56dvh]">
                    <TicTacToe
                        v-if="control.microGameSelection === 'Tic Tac Toe'"
                        ref="ticTacToeRef"
                    />
                    <UnluckyHole
                        v-if="control.microGameSelection === 'Unlucky Hole'"
                    />
                    <RockPaperScissors
                        v-if="
                            control.microGameSelection === 'Rock Paper Scissors'
                        "
                    />
                    <Chess v-if="control.microGameSelection === 'Chess'" />
                </div>

                <Teleport to="body">
                    <Transition name="overlay-fade">
                        <div
                            v-if="microOptionsOverlay"
                            class="fixed inset-0 z-[9998] flex flex-col md:hidden"
                            style="background: rgba(0, 0, 0, 0.92)"
                            @click.self="microOptionsOverlay = false"
                        >
                            <button
                                class="fixed top-5 right-4 text-red-500 text-2xl p-2 z-20 leading-none"
                                @click="microOptionsOverlay = false"
                            >
                                ✕
                            </button>

                            <div
                                class="flex-1 overflow-y-auto flex flex-col justify-start px-6 mt-6"
                            >
                                <h4
                                    class="hl text-2xl text-center bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                                >
                                    Options
                                </h4>
                                <br />
                                <div
                                    class="flex flex-row justify-between items-center text-white"
                                >
                                    <div>
                                        Turn: {{ turnToggle ? "2nd" : "1st" }}
                                    </div>
                                    <button
                                        class="cursor-pointer w-8 h-5 rounded-full bg-stone-600 relative transition-colors duration-300"
                                        :class="{
                                            'bg-emerald-500': turnToggle,
                                        }"
                                        @click="toggleTurn"
                                    >
                                        <span
                                            class="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-emerald-500 transition-transform duration-300"
                                            :class="{
                                                'translate-x-3': turnToggle,
                                            }"
                                        />
                                    </button>
                                </div>
                                <br />
                                <div
                                    class="flex flex-row justify-between items-center text-white"
                                >
                                    <div>Variant: {{ store.variant }}</div>
                                    <button
                                        class="cursor-pointer w-8 h-5 rounded-full bg-stone-600 relative transition-colors duration-300"
                                        :class="{
                                            'bg-emerald-500': variantToggle,
                                        }"
                                        @click="variantToggle = !variantToggle"
                                    >
                                        <span
                                            class="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-emerald-500 transition-transform duration-300"
                                            :class="{
                                                'translate-x-3': variantToggle,
                                            }"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </Teleport>
            </div>

            <!-- Desktop -->
            <div class="relative hidden md:flex flex-row h-[62dvh] w-full">
                <section class="w-1/4">
                    <div
                        class="flex flex-row items-center gap-2 cursor-pointer"
                        @mouseover="setMicroHover('Tic Tac Toe')"
                        @mouseleave="clearMicroHover"
                        @click.stop="selectMicroGame('Tic Tac Toe')"
                    >
                        <div
                            class="p-1 w-14 h-14 flex justify-center rounded-sm items-center bg-no-repeat transition-all duration-200"
                            :class="
                                control.microGameSelection === 'Tic Tac Toe' ||
                                microHover === 'Tic Tac Toe'
                                    ? 'border-2 border-emerald-500'
                                    : 'bg-[image:var(--background-image-gradient-border)]'
                            "
                        >
                            <Icon
                                class="w-10 h-10 transition-colors duration-200"
                                :class="
                                    control.microGameSelection ===
                                        'Tic Tac Toe' ||
                                    microHover === 'Tic Tac Toe'
                                        ? 'text-emerald-500'
                                        : 'text-sky-200'
                                "
                                icon="game-icons:tic-tac-toe"
                            />
                        </div>
                        <h4
                            class="transition-all duration-200 hover:text-emerald-500"
                            :class="
                                control.microGameSelection === 'Tic Tac Toe' ||
                                microHover === 'Tic Tac Toe'
                                    ? 'text-emerald-500'
                                    : 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent'
                            "
                        >
                            Tic Tac Toe
                        </h4>
                    </div>
                    <br />
                    <div
                        class="flex flex-row items-center gap-2 cursor-pointer"
                        @mouseover="setMicroHover('Unlucky Hole')"
                        @mouseleave="clearMicroHover"
                        @click.stop="selectMicroGame('Unlucky Hole')"
                    >
                        <div
                            class="p-1 w-14 h-14 flex justify-center rounded-sm items-center bg-no-repeat transition-all duration-200"
                            :class="
                                control.microGameSelection === 'Unlucky Hole' ||
                                microHover === 'Unlucky Hole'
                                    ? 'border-2 border-emerald-500'
                                    : 'bg-[image:var(--background-image-gradient-border)]'
                            "
                        >
                            <Icon
                                class="w-10 h-10 transition-colors duration-200"
                                :class="
                                    control.microGameSelection ===
                                        'Unlucky Hole' ||
                                    microHover === 'Unlucky Hole'
                                        ? 'text-emerald-500'
                                        : 'text-sky-200'
                                "
                                icon="game-icons:hole"
                            />
                        </div>
                        <h4
                            class="transition-all duration-200 hover:text-emerald-500"
                            :class="
                                control.microGameSelection === 'Unlucky Hole' ||
                                microHover === 'Unlucky Hole'
                                    ? 'text-emerald-500'
                                    : 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent'
                            "
                        >
                            Unlucky Hole
                        </h4>
                    </div>
                    <br />
                    <div
                        class="flex flex-row items-center gap-2 cursor-pointer"
                        @mouseover="setMicroHover('Rock Paper Scissors')"
                        @mouseleave="clearMicroHover"
                        @click.stop="selectMicroGame('Rock Paper Scissors')"
                    >
                        <div
                            class="p-1 w-14 h-14 flex justify-center rounded-sm items-center bg-no-repeat transition-all duration-200"
                            :class="
                                control.microGameSelection ===
                                    'Rock Paper Scissors' ||
                                microHover === 'Rock Paper Scissors'
                                    ? 'border-2 border-emerald-500'
                                    : 'bg-[image:var(--background-image-gradient-border)]'
                            "
                        >
                            <Icon
                                class="w-10 h-10 transition-colors duration-200"
                                :class="
                                    control.microGameSelection ===
                                        'Rock Paper Scissors' ||
                                    microHover === 'Rock Paper Scissors'
                                        ? 'text-emerald-500'
                                        : 'text-sky-200'
                                "
                                icon="game-icons:mailed-fist"
                            />
                        </div>
                        <h4
                            class="transition-all duration-200 hover:text-emerald-500"
                            :class="
                                control.microGameSelection ===
                                    'Rock Paper Scissors' ||
                                microHover === 'Rock Paper Scissors'
                                    ? 'text-emerald-500'
                                    : 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent'
                            "
                        >
                            Rock Paper Scissors
                        </h4>
                    </div>
                    <br />
                    <div
                        class="flex flex-row items-center gap-2 cursor-pointer"
                        @mouseover="setMicroHover('Chess')"
                        @mouseleave="clearMicroHover"
                        @click.stop="selectMicroGame('Chess')"
                    >
                        <div
                            class="px-1 pb-0 w-14 h-14 flex justify-center rounded-sm items-center bg-no-repeat transition-all duration-200"
                            :class="
                                control.microGameSelection === 'Chess' ||
                                microHover === 'Chess'
                                    ? 'border-2 border-emerald-500'
                                    : 'bg-[image:var(--background-image-gradient-border)]'
                            "
                        >
                            <Icon
                                class="w-10 h-10 transition-colors duration-200"
                                :class="
                                    control.microGameSelection === 'Chess' ||
                                    microHover === 'Chess'
                                        ? 'text-emerald-500'
                                        : 'text-sky-200'
                                "
                                icon="game-icons:chess-knight"
                            />
                        </div>
                        <h4
                            class="transition-all duration-200 hover:text-emerald-500"
                            :class="
                                control.microGameSelection === 'Chess' ||
                                microHover === 'Chess'
                                    ? 'text-emerald-500'
                                    : 'bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent'
                            "
                        >
                            Chess
                        </h4>
                    </div>
                </section>
                <section class="w-1/2 h-full flex justify-center">
                    <TicTacToe
                        v-if="control.microGameSelection === 'Tic Tac Toe'"
                        ref="ticTacToeRef"
                    />
                    <UnluckyHole
                        v-if="control.microGameSelection === 'Unlucky Hole'"
                    />
                    <RockPaperScissors
                        v-if="
                            control.microGameSelection === 'Rock Paper Scissors'
                        "
                    />
                    <Chess v-if="control.microGameSelection === 'Chess'" />
                </section>
                <section class="w-1/4">
                    <h4
                        class="hl text-2xl bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                    >
                        Options
                    </h4>
                    <br />
                    <div class="flex flex-row justify-between items-center">
                        <div>Turn: {{ turnToggle ? "2nd" : "1st" }}</div>
                        <button
                            class="cursor-pointer w-8 h-5 rounded-full bg-stone-600 relative transition-colors duration-300"
                            :class="{ 'bg-emerald-500': turnToggle }"
                            @click="toggleTurn"
                        >
                            <span
                                class="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-emerald-500 transition-transform duration-300"
                                :class="{ 'translate-x-3': turnToggle }"
                            />
                        </button>
                    </div>
                    <br />
                    <div class="flex flex-row justify-between items-center">
                        <div>Variant: {{ variant }}</div>
                        <button
                            class="cursor-pointer w-8 h-5 rounded-full bg-stone-600 relative transition-colors duration-300"
                            :class="{ 'bg-emerald-500': variantToggle }"
                            @click="handleChangeVarient"
                        >
                            <span
                                class="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-emerald-500 transition-transform duration-300"
                                :class="{ 'translate-x-3': variantToggle }"
                            />
                        </button>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";
import { useTicTacToeStore } from "@/stores/tictactoe.js";
import TicTacToe from "@/components/games/TicTacToe.vue";
import UnluckyHole from "@/components/games/UnluckyHole.vue";
import RockPaperScissors from "@/components/games/RockPaperScissors.vue";
import Chess from "@/components/games/Chess.vue";

const control = useControlStore();
const tictactoe = useTicTacToeStore();

const variant = computed(() => {
    return tictactoe.variant;
});

const ticTacToeRef = ref(null);

const mobileOverlay = ref(false);
const mobileSelected = ref(null);
const turnToggle = computed(() => !tictactoe.playerFirst);
const variantToggle = ref(false);
const microHover = ref(null);
const microOptionsOverlay = ref(false);

const toggleTurn = () => {
    if (tictactoe.playerFirst) {
        tictactoe.playerFirst = false;
        ticTacToeRef.value?.resetGame();
        nextTick(() => ticTacToeRef.value?.aiFirst());
    } else {
        tictactoe.playerFirst = true;
        ticTacToeRef.value?.resetGame();
    }
};

const setMicroHover = (game) => {
    microHover.value = game;
};

const clearMicroHover = () => {
    microHover.value = null;
};

const selectMicroGame = (game) => {
    microHover.value = game;
    tictactoe.playerFirst = true;
    ticTacToeRef.value?.resetGame();
    control.setMicroGameSelection(game);
};

const handleChangeVarient = () => {
    tictactoe.variant = variant.value === "Normal" ? "Infinite" : "Normal";
    variantToggle.value = !variantToggle.value;
};

const featuredCards = [
    {
        key: "websenses",
        title: "WebSenses",
        description:
            "Digital handbook, enroll to understand frontend development.",
        image: "/images/websenses.png",
        tags: ["Website", "LMS", "Payments", "Coaching"],
        link: "https://www.websenses.co.za",
        linkLabel: "Visit www.websenses.co.za",
    },
    {
        key: "codespace",
        title: "CodeSpace",
        description: "Redesign & Maintenance (2022/25)",
        image: "/images/codespace.png",
        tags: ["Website", "Maintainence"],
        link: "https://www.codespace.co.za",
        linkLabel: "Visit www.codespace.co.za",
    },
    {
        key: "miniump",
        title: "MiniUMP",
        description: "Match-Making & Score Keeping",
        image: "/images/miniump.png",
        tags: ["App", "Algorithm", "SASS"],
        link: null,
        linkLabel: "",
    },
    {
        key: "cbazil",
        title: "Cbazil",
        description: "Legacy Portfolio Site (Older projects)",
        image: "/images/cbazil.png",
        tags: ["App", "Portfolio"],
        link: "https://cbazil.vercel.app/",
        linkLabel: "Visit cbazil.vercel.app",
    },
];

function openMobileOverlay(card) {
    mobileSelected.value = card;
    mobileOverlay.value = true;
}

onMounted(() => {
    control.selectedOption = "Featured";
});

onUnmounted(() => {
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
