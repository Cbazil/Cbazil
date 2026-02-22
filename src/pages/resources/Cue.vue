<template>
  <div class="flex flex-col w-full h-[62dvh] xl:h-[70dvh]">
    <article
      class="relative h-full flex flex-row -mt-10 justify-around items-start px-24 pt-10"
    >
      <section
        class="w-10/20 h-24/25 flex flex-row flex-wrap border border-white rounded-lg p-2"
      >
        <div
          v-for="n of 12"
          :key="n"
          class="w-20 h-20 border border-white rounded-sm mx-1"
        >
          {{ n }}
        </div>
      </section>

      <section class="w-7/18 h-24/25 border border-white rounded-lg p-4">
        <div class="self-center">1</div>
        <div>2</div>
      </section>
    </article>
    <nav>
      <section>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </section>
      <section class="flex w-full flex-row justify-center">
        <div class="w-20 h-20 border border-white rounded-sm mx-1">1</div>
        <div class="w-20 h-20 border border-white rounded-sm mx-1">2</div>
        <div class="w-20 h-20 border border-white rounded-sm mx-1">3</div>
        <div class="w-20 h-20 border border-white rounded-sm mx-1">4</div>
        <div class="w-20 h-20 border border-white rounded-sm mx-1">5</div>
        <div class="w-20 h-20 border border-white rounded-sm mx-1">6</div>
        <div class="w-20 h-20 border border-white rounded-sm mx-1">7</div>
        <div class="w-20 h-20 border border-white rounded-sm mx-1">8</div>
      </section>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";
const control = useControlStore();

onMounted(() => {
  control.selectedOption = "Hard";
});

onUnmounted(() => {
  control.selectedOption = undefined;
});
</script>