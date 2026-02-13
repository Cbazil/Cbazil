<template>
  <div>
    <h3>Skills</h3>
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