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
                class="bg-gradient-to-tr from-blue-900 via-sky-200 to-white text-stone-900 rounded-full py-0.5 px-3 text-xs"
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
      <div class="hidden md:flex flex-row justify-center h-[62dvh] w-full">
        <!-- Main large card: WebSenses -->
        <section
          class="relative w-[70%] h-full p-1 rounded-sm overflow-hidden mr-2 bg-[image:var(--background-image-gradient-border)] bg-no-repeat group transition-colors duration-300"
          :class="
            featuredActive === 'websenses'
              ? 'border-2 border-emerald-500'
              : 'border-2 border-transparent hover:border-emerald-500'
          "
          @click="
            featuredSel = null;
            featuredHover = 'websenses';
          "
          @mouseenter="featuredHover = 'websenses'"
          @mouseleave="featuredHover = null"
        >
          <img
            class="inset-0 w-full h-full object-fill"
            src="/images/websenses.png"
            alt="WebSenses"
          />
          <div
            class="absolute bottom-2.5 left-0 right-0 flex flex-wrap justify-center gap-2 px-3"
          >
            <span
              v-for="tag in featuredCards[0].tags"
              :key="tag"
              class="relative inline-flex items-center rounded-full py-0.5 px-4 text-sm font-medium backdrop-blur-sm overflow-hidden"
            >
              <span class="absolute inset-0 rounded-full p-px">
                <span
                  class="absolute inset-0 rounded-full bg-sky-200 opacity-95"
                />
              </span>
              <span
                class="absolute inset-[1px] rounded-full bg-blue-900/40 backdrop-blur-sm"
              />
              <span class="relative bg-sky-200 bg-clip-text text-transparent">{{
                tag
              }}</span>
            </span>
          </div>
          <div
            class="absolute inset-0 z-10 flex flex-col justify-center items-center p-3 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300"
            :class="featuredActive === 'websenses' ? 'bg-stone-900/80' : ''"
          >
            <img
              src="/images/websenses-fi.png"
              alt="WebSenses"
              class="w-16 mb-2 transition-opacity duration-300"
              :class="
                featuredActive === 'websenses'
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              "
            />
            <h3
              class="text-2xl font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent transition-opacity duration-300 text-center"
              :class="
                featuredActive === 'websenses'
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              "
            >
              WebSenses
            </h3>
            <p
              class="text-white/80 transition-opacity duration-300 mt-2"
              :class="
                featuredActive === 'websenses'
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              "
            >
              Digital handbook, enroll to understand frontend development.
            </p>
            <a
              href="https://www.websenses.co.za"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm transition-opacity duration-300 mt-3"
              :class="
                featuredActive === 'websenses'
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              "
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
            class="relative w-full p-0.5 rounded-sm h-1/3 overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat group transition-colors duration-300"
            :class="
              featuredActive === 'codespace'
                ? 'border-2 border-emerald-500'
                : 'border-2 border-transparent hover:border-emerald-500'
            "
            @click="
              featuredSel = null;
              featuredHover = 'codespace';
            "
            @mouseenter="featuredHover = 'codespace'"
            @mouseleave="featuredHover = null"
          >
            <img
              class="inset-0 w-full h-full object-fill"
              src="/images/codespace.png"
              alt="CodeSpace"
            />
            <div
              class="absolute bottom-1 left-0 right-0 flex flex-wrap justify-center gap-1 px-2"
            >
              <span
                v-for="tag in featuredCards[1].tags"
                :key="tag"
                class="relative inline-flex items-center rounded-full py-0.5 px-2.5 text-xs font-medium backdrop-blur-sm overflow-hidden"
              >
                <span class="absolute inset-0 rounded-full p-px">
                  <span
                    class="absolute inset-0 rounded-full bg-sky-200 opacity-95"
                  />
                </span>
                <span
                  class="absolute inset-[1px] rounded-full bg-blue-900/40 backdrop-blur-sm"
                />
                <span
                  class="relative bg-sky-200 bg-clip-text text-transparent"
                  >{{ tag }}</span
                >
              </span>
            </div>
            <div
              class="absolute inset-0 z-10 flex flex-col justify-center items-center p-2 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300"
              :class="featuredActive === 'codespace' ? 'bg-stone-900/80' : ''"
            >
              <img
                src="/images/codespace-fi.png"
                alt="CodeSpace"
                class="w-8 mb-1 transition-opacity duration-300"
                :class="
                  featuredActive === 'codespace'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
              />
              <h3
                class="text-lg font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent transition-opacity duration-300 text-center"
                :class="
                  featuredActive === 'codespace'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
              >
                CodeSpace
              </h3>
              <span
                class="text-white/80 text-sm transition-opacity duration-300 mt-1"
                :class="
                  featuredActive === 'codespace'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
                >Redesign & Maintenance (2022/25)</span
              >
            </div>
          </div>

          <!-- Card 2: MiniFixr -->
          <div
            class="relative w-full p-0.5 rounded-sm h-1/3 overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat group transition-colors duration-300"
            :class="
              featuredActive === 'minifixr'
                ? 'border-2 border-emerald-500'
                : 'border-2 border-transparent hover:border-emerald-500'
            "
            @click="
              featuredSel = null;
              featuredHover = 'minifixr';
            "
            @mouseenter="featuredHover = 'minifixr'"
            @mouseleave="featuredHover = null"
          >
            <img
              class="inset-0 w-full h-full object-fill"
              src="/images/minifixr.png"
              alt="MiniFixr"
            />
            <div
              class="absolute bottom-1.5 left-0 right-0 flex flex-wrap justify-center gap-1 px-2"
            >
              <span
                v-for="tag in featuredCards[2].tags"
                :key="tag"
                class="relative inline-flex items-center rounded-full py-0.5 px-2.5 text-xs font-medium backdrop-blur-sm overflow-hidden"
              >
                <span class="absolute inset-0 rounded-full p-px">
                  <span
                    class="absolute inset-0 rounded-full bg-sky-200 opacity-90"
                  />
                </span>
                <span
                  class="absolute inset-[1px] rounded-full bg-blue-900/40 backdrop-blur-sm"
                />
                <span
                  class="relative bg-sky-200 bg-clip-text text-transparent"
                  >{{ tag }}</span
                >
              </span>
            </div>
            <div
              class="absolute inset-0 z-10 flex flex-col justify-center items-center p-2 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300"
              :class="featuredActive === 'minifixr' ? 'bg-stone-900/80' : ''"
            >
              <img
                src="/images/minifixr-fi.svg"
                alt="MiniFixr"
                class="w-7 mb-1 transition-opacity duration-300"
                :class="
                  featuredActive === 'minifixr'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
              />
              <h3
                class="text-lg font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent transition-opacity duration-300 text-center"
                :class="
                  featuredActive === 'minifixr'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
              >
                MiniFixrer
              </h3>
              <span
                class="text-white/80 text-sm transition-opacity duration-300 mt-1"
                :class="
                  featuredActive === 'minifixr'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
                >Match-Making & Score Keeping</span
              >
              <a
                href="https://minifixr.web.app"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm transition-opacity duration-300 mt-2"
                :class="
                  featuredActive === 'minifixr'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
              >
                <Icon icon="mdi:link-variant" class="size-3.5" />
                Visit minifixr.web.app
              </a>
            </div>
          </div>

          <!-- Card 3: Cbazil -->
          <div
            class="relative w-full p-0.5 rounded-sm h-1/3 overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat group transition-colors duration-300"
            :class="
              featuredActive === 'cbazil'
                ? 'border-2 border-emerald-500'
                : 'border-2 border-transparent hover:border-emerald-500'
            "
            @click="
              featuredSel = null;
              featuredHover = 'cbazil';
            "
            @mouseenter="featuredHover = 'cbazil'"
            @mouseleave="featuredHover = null"
          >
            <img
              class="inset-0 w-full h-full object-fill"
              src="/images/cbazil.png"
              alt="Cbazil OG"
            />
            <div
              class="absolute bottom-1.5 left-0 right-0 flex flex-wrap justify-center gap-1 px-2"
            >
              <span
                v-for="tag in featuredCards[3].tags"
                :key="tag"
                class="relative inline-flex items-center rounded-full py-0.5 px-2.5 text-xs font-medium backdrop-blur-sm overflow-hidden"
              >
                <span class="absolute inset-0 rounded-full p-px">
                  <span
                    class="absolute inset-0 rounded-full bg-sky-200 opacity-90"
                  />
                </span>
                <span
                  class="absolute inset-[1px] rounded-full bg-blue-900/40 backdrop-blur-sm"
                />
                <span
                  class="relative bg-sky-200 bg-clip-text text-transparent"
                  >{{ tag }}</span
                >
              </span>
            </div>
            <div
              class="absolute inset-0 z-10 flex flex-col justify-center items-center p-2 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300"
              :class="featuredActive === 'cbazil' ? 'bg-stone-900/80' : ''"
            >
              <img
                src="/images/cbazil-fi.png"
                alt="Cbazil"
                class="w-7 mb-1 transition-opacity duration-300"
                :class="
                  featuredActive === 'cbazil'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
              />
              <h3
                class="text-lg font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent transition-opacity duration-300 text-center"
                :class="
                  featuredActive === 'cbazil'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
              >
                Cbazil
              </h3>
              <span
                class="text-white/80 text-sm transition-opacity duration-300 mt-1"
                :class="
                  featuredActive === 'cbazil'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
                >Legacy Portfolio (Older projects)</span
              >
              <a
                href="https://cbazil.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm transition-opacity duration-300 mt-2"
                :class="
                  featuredActive === 'cbazil'
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                "
              >
                <Icon icon="mdi:link-variant" class="size-3.5" />
                Visit cbazil.netlify.app
              </a>
            </div>
          </div>
        </section>
      </div>

      <!-- Mobile -->
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
                class="absolute bottom-1 left-0 right-0 flex flex-wrap justify-center gap-1.5 px-3"
              >
                <!-- Updated to new glassmorphism tag style -->
                <span
                  v-for="tag in card.tags"
                  :key="tag"
                  class="relative inline-flex items-center rounded-full py-0.5 px-2.5 text-xs font-medium backdrop-blur-sm overflow-hidden"
                >
                  <span class="absolute inset-0 rounded-full p-px">
                    <span
                      class="absolute inset-0 rounded-full bg-sky-200 opacity-40"
                    />
                  </span>
                  <span
                    class="absolute inset-[1px] rounded-full bg-blue-900/40 backdrop-blur-sm"
                  />
                  <span
                    class="relative bg-sky-200 bg-clip-text text-transparent"
                    >{{ tag }}</span
                  >
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
                  control.microGameSelection === 'Tic Tac Toe' ||
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
                  control.microGameSelection === 'Unlucky Hole' ||
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
                control.microGameSelection === 'Rock Paper Scissors' ||
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
                  control.microGameSelection === 'Rock Paper Scissors' ||
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
                control.microGameSelection === 'Chess' || microHover === 'Chess'
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
          <UnluckyHole v-if="control.microGameSelection === 'Unlucky Hole'" />
          <RockPaperScissors
            v-if="control.microGameSelection === 'Rock Paper Scissors'"
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
                  <div>Turn: {{ turnToggle ? "2nd" : "1st" }}</div>
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
                  <div>Variant: {{ variant }}</div>
                  <button
                    class="cursor-pointer w-8 h-5 rounded-full bg-stone-600 relative transition-colors duration-300"
                    :class="{
                      'bg-emerald-500': variantToggle,
                    }"
                    @click="handleChangeVarient"
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
                  control.microGameSelection === 'Tic Tac Toe' ||
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
                  control.microGameSelection === 'Unlucky Hole' ||
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
                control.microGameSelection === 'Rock Paper Scissors' ||
                microHover === 'Rock Paper Scissors'
                  ? 'border-2 border-emerald-500'
                  : 'bg-[image:var(--background-image-gradient-border)]'
              "
            >
              <Icon
                class="w-10 h-10 transition-colors duration-200"
                :class="
                  control.microGameSelection === 'Rock Paper Scissors' ||
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
                control.microGameSelection === 'Rock Paper Scissors' ||
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
                control.microGameSelection === 'Chess' || microHover === 'Chess'
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
                control.microGameSelection === 'Chess' || microHover === 'Chess'
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
          <UnluckyHole v-if="control.microGameSelection === 'Unlucky Hole'" />
          <RockPaperScissors
            v-if="control.microGameSelection === 'Rock Paper Scissors'"
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
import { ref, computed, nextTick, onMounted, onUnmounted, watch } from "vue";
import { useHead } from "@unhead/vue";
import { useLinkover, useBtnClick } from "@/composables/useSound.js";
import { useControlStore } from "@/stores/main.js";
import { useTicTacToeStore } from "@/stores/tictactoe.js";
import TicTacToe from "@/components/games/TicTacToe.vue";
import UnluckyHole from "@/components/games/UnluckyHole.vue";
import RockPaperScissors from "@/components/games/RockPaperScissors.vue";
import Chess from "@/components/games/Chess.vue";

// ── SEO ───────────────────────────────────────────────────────────────────────
useHead({
  title: "Projects | Cbazil",
  meta: [
    {
      name: "description",
      content:
        "Cbazil's projects — featured work including WebSenses, CodeSpace and MiniFixr, plus a collection of micro games built for fun.",
    },
    { property: "og:title", content: "Projects | Cbazil" },
    {
      property: "og:description",
      content:
        "Cbazil's projects — featured work including WebSenses, CodeSpace and MiniFixr, plus a collection of micro games built for fun.",
    },
    { property: "og:url", content: "https://my.websenses.co.za/projects" },
    { name: "twitter:card", content: "summary" },
  ],
});

// ── State ─────────────────────────────────────────────────────────────────────
const control = useControlStore();
const tictactoe = useTicTacToeStore();

const variant = computed(() => tictactoe.variant);
const ticTacToeRef = ref(null);
const mobileOverlay = ref(false);
const mobileSelected = ref(null);
const turnToggle = computed(() => !tictactoe.playerFirst);
const variantToggle = ref(false);
const microHover = ref(null);
const microOptionsOverlay = ref(false);

const featuredSel = ref(null);
const featuredHover = ref(null);
const featuredActive = computed(() => {
  if (featuredSel.value !== null) return featuredSel.value;
  return featuredHover.value;
});
const smallCards = ["codespace", "minifixr", "cbazil"];

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
    description: "Digital handbook, enroll to understand frontend development.",
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
    key: "minifixr",
    title: "MiniFixr",
    description: "Match-Making & Score Keeping",
    image: "/images/minifixr.png",
    tags: ["App", "Algorithm", "SASS"],
    link: "https://minifixr.web.app",
    linkLabel: "Visit minifixr.web.app",
  },
  {
    key: "cbazil",
    title: "Cbazil",
    description: "Legacy Portfolio Site (Older projects)",
    image: "/images/cbazil.png",
    tags: ["App", "Portfolio"],
    link: "https://cbazil.netlify.app/",
    linkLabel: "Visit cbazil.netlify.app",
  },
];

function openMobileOverlay(card) {
  mobileSelected.value = card;
  mobileOverlay.value = true;
}

const tabs = ["Featured", "Micro"];
const microGames = [
  "Tic Tac Toe",
  "Unlucky Hole",
  "Rock Paper Scissors",
  "Chess",
];

watch(
  () => control.selectedOption,
  () => {
    featuredSel.value = null;
  }
);

const handleKeydown = (e) => {
  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return;

  const tab = control.selectedOption;

  if (e.key === " ") return;

  if (e.key === "Enter" && tab === "Featured" && featuredSel.value) {
    const card = featuredCards.find((c) => c.key === featuredSel.value);
    if (card?.link) {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(card.link, "_blank", "noopener noreferrer");
    }
    return;
  }

  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    const inFeaturedTabMode = tab === "Featured" && featuredSel.value === null;
    const inMicroTabMode = tab === "Micro";
    if (inFeaturedTabMode || inMicroTabMode) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      const idx = tabs.indexOf(tab);
      const next =
        e.key === "ArrowRight"
          ? tabs[(idx + 1) % tabs.length]
          : tabs[(idx - 1 + tabs.length) % tabs.length];
      control.selectedOption = next;
      return;
    }
    if (tab === "Featured") {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (featuredSel.value === "websenses") {
        if (e.key === "ArrowRight") featuredSel.value = "codespace";
      } else if (smallCards.includes(featuredSel.value)) {
        if (e.key === "ArrowLeft") featuredSel.value = "websenses";
      }
      return;
    }
  }

  if (e.key === "ArrowDown") {
    if (tab === "Featured") {
      if (featuredSel.value === null) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        featuredSel.value = "websenses";
        return;
      }
      if (featuredSel.value === "websenses") {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        featuredSel.value = "codespace";
        return;
      }
      const idx = smallCards.indexOf(featuredSel.value);
      if (idx < smallCards.length - 1) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        featuredSel.value = smallCards[idx + 1];
      }
      return;
    }
    if (tab === "Micro") {
      const idx = microGames.indexOf(control.microGameSelection);
      if (idx < microGames.length - 1) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        selectMicroGame(microGames[idx + 1]);
      }
      return;
    }
  }

  if (e.key === "ArrowUp") {
    if (tab === "Featured") {
      if (featuredSel.value === null) return;
      if (featuredSel.value === "websenses") {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        featuredSel.value = null;
        return;
      }
      const idx = smallCards.indexOf(featuredSel.value);
      if (idx === 0) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        featuredSel.value = "websenses";
      } else {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        featuredSel.value = smallCards[idx - 1];
      }
      return;
    }
    if (tab === "Micro") {
      const idx = microGames.indexOf(control.microGameSelection);
      if (idx === 0) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      selectMicroGame(microGames[idx - 1]);
      return;
    }
  }
};

onMounted(() => {
  control.selectedOption = "Featured";
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
