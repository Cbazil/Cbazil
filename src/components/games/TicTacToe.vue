<template>
    <div
        class="w-[310px] h-[305px] rounded-sm flex justify-center items-center bg-[image:var(--background-image-gradient-border)] bg-no-repeat relative"
    >
        <!-- Grid -->
        <div id="grid" class="grid grid-cols-3">
            <div
                v-for="(square, index) in squares"
                :key="squareKeys[index]"
                :id="square.id"
                class="squares w-20 h-20 flex justify-center items-center cursor-pointer bg-no-repeat relative transition-all duration-300"
                :class="[
                    [0, 1, 3, 4, 6, 7].includes(index)
                        ? 'after:absolute after:right-0 after:top-0 after:w-[1px] after:h-full after:bg-[image:var(--background-image-gradient-border)]'
                        : '',
                    [0, 1, 2, 3, 4, 5].includes(index)
                        ? 'before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-[image:var(--background-image-gradient-border)]'
                        : '',
                    isWinningSquare(index) && square.val === 'tic'
                        ? 'bg-emerald-500'
                        : '',
                    isWinningSquare(index) && square.val === 'tac'
                        ? 'bg-sky-200'
                        : '',
                ]"
                @click="move($event)"
            >
                <Icon
                    v-if="square.val === 'tic'"
                    class="pieces w-12 h-12 transition-colors duration-300"
                    :class="
                        isWinningSquare(index)
                            ? 'text-stone-900'
                            : store.moveHistory[store.playerFirst ? 0 : 1]
                                    ?.id === square.id &&
                                store.moveHistory.length > 5
                              ? 'text-red-500'
                              : store.moveHistory[store.playerFirst ? 2 : 3]
                                      ?.id === square.id &&
                                  store.moveHistory.length > 5
                                ? 'text-amber-500'
                                : 'text-emerald-500'
                    "
                    icon="line-md:close"
                />
                <Icon
                    v-if="square.val === 'tac'"
                    class="pieces w-12 h-12 transition-colors duration-300"
                    :class="
                        isWinningSquare(index)
                            ? 'text-stone-900'
                            : store.moveHistory[store.playerFirst ? 1 : 0]
                                    ?.id === square.id &&
                                store.moveHistory.length > 5
                              ? 'text-red-500'
                              : store.moveHistory[store.playerFirst ? 3 : 2]
                                      ?.id === square.id &&
                                  store.moveHistory.length > 5
                                ? 'text-amber-500'
                                : 'text-sky-200'
                    "
                    icon="line-md:circle"
                />
            </div>
        </div>

        <!-- Result Overlay -->
        <div
            v-if="showResult"
            class="absolute inset-0 bg-black/80 rounded-sm flex flex-col justify-center items-center gap-4 animate-fade-in"
        >
            <h3 class="text-xl font-bold text-white">
                {{ resultText }}
            </h3>

            <div class="flex gap-3">
                <!-- 1st or 2nd button -->
                <button
                    @click="handleTurnToggle"
                    class="px-2 cursor-pointer py-2 rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat hover:opacity-80 transition-opacity text-white font-semibold"
                >
                    {{ nextTurnOrder === "first" ? "1st" : "2nd" }}
                </button>

                <!-- Reset button with arrow icon -->
                <button
                    @click="handleReset"
                    class="p-2 cursor-pointer rounded-sm bg-[image:var(--background-image-gradient-border)] bg-no-repeat hover:opacity-80 transition-opacity"
                >
                    <Icon icon="mdi:circle-arrows" class="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch, nextTick } from "vue";
import { Icon } from "@iconify/vue";
import { useTicTacToe } from "@/composables/useTicTacToe.js";
import { useTicTacToeStore } from "@/stores/tictactoe.js";

const store = useTicTacToeStore();

const {
    squares,
    gameOver,
    playerTurn,
    playerPiece,
    playerFirst,
    playerPlayed,
    ggTop,
    ggLeft,
    ggRight,
    ggBottom,
    ggVert,
    ggHori,
    ggDiright,
    ggDileft,
    keyOne,
    keyTwo,
    keyThree,
    keyFour,
    keyFive,
    keySix,
    keySeven,
    keyEight,
    keyNine,
    keyAI,
    move,
    aiFirst,
    playerfirst,
    resetGame,
} = useTicTacToe();

const squareKeys = computed(() => [
    keyOne.value,
    keyTwo.value,
    keyThree.value,
    keyFour.value,
    keyFive.value,
    keySix.value,
    keySeven.value,
    keyEight.value,
    keyNine.value,
]);

const showResult = ref(false);
const nextTurnOrder = ref("first");

const winningSquares = computed(() => {
    const wins = [];
    if (ggTop.value) wins.push(0, 1, 2);
    if (ggBottom.value) wins.push(6, 7, 8);
    if (ggLeft.value) wins.push(0, 3, 6);
    if (ggRight.value) wins.push(2, 5, 8);
    if (ggVert.value) wins.push(1, 4, 7);
    if (ggHori.value) wins.push(3, 4, 5);
    if (ggDiright.value) wins.push(0, 4, 8);
    if (ggDileft.value) wins.push(2, 4, 6);
    return wins;
});

const isWinningSquare = (index) => winningSquares.value.includes(index);

const winner = computed(() => {
    if (winningSquares.value.length === 0) return null;
    return squares.value[winningSquares.value[0]].val;
});

const resultText = computed(() => {
    if (winner.value === "tic") return "Cross Wins!";
    if (winner.value === "tac") return "Circle Wins!";
    return "Draw!";
});

const handleReset = () => {
    showResult.value = false;
    resetGame();
    if (!store.playerFirst) {
        nextTick(() => aiFirst());
    }
};

const handleTurnToggle = () => {
    showResult.value = false;
    if (store.playerFirst) {
        store.playerFirst = false;
        resetGame();
        nextTick(() => aiFirst());
    } else {
        store.playerFirst = true;
        resetGame();
    }
};

watch(gameOver, (isOver) => {
    if (isOver) {
        nextTurnOrder.value = store.playerFirst ? "second" : "first";
        setTimeout(() => {
            showResult.value = true;
        }, 1250);
    } else {
        showResult.value = false;
    }
});
defineExpose({ resetGame, aiFirst });
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 0.3s ease-in;
}
</style>
