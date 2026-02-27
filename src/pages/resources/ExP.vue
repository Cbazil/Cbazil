<template>
  <div class="relative w-full overflow-x-hidden">
    <div v-if="control.selectedOption === 'Work'">
      <div class="w-full h-[33dvh] hidden md:flex">top</div>
      <div
        ref="scrollContainer"
        class="overflow-x-scroll w-full h-[33dvh] md:h-[64dvh]"
        @wheel.prevent="handleWheel"
      >
        <div class="inline-flex min-w-full">
          <div class="flex-shrink-0 w-64 flex justify-end">Item 1</div>
          <div class="flex-shrink-0 w-64 flex justify-end">Item 2</div>
          <div class="flex-shrink-0 w-64 flex justify-end">Item 3</div>
          <div class="flex-shrink-0 w-64 flex justify-end">Item 4</div>
          <div class="flex-shrink-0 w-64 flex justify-end">Item 5</div>
          <div class="flex-shrink-0 w-64 flex justify-end">Item 6</div>
          <div class="flex-shrink-0 w-64 flex justify-end">Item 7</div>
        </div>
      </div>
    </div>
    <div v-if="control.selectedOption === 'Education'">
      <div class="w-full h-[35dvh] hidden md:flex">top</div>
      <div class="overflow-x-scroll h-[33dvh] md:h-[64dvh]">bottom</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";
import { useHorizontalScroll } from "@/composables/horizontalScroll";
const control = useControlStore();

const scrollContainer = useHorizontalScroll();

const handleWheel = (e) => {
  if (!scrollContainer.value) return;
  scrollContainer.value.scrollLeft += e.deltaY;
};
onMounted(() => {
  control.selectedOption = "Work";
});

onUnmounted(() => {
  control.selectedOption = undefined;
});
</script>
