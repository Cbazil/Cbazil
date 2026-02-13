<template>
  <div>
    <h3>Experience</h3>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";
const control = useControlStore();

onMounted(() => {
  control.selectedOption = "Work";
});

onUnmounted(() => {
  control.selectedOption = undefined;
});
</script>