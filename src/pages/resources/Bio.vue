<template>
  <div>
    <h3>Bio</h3>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";
const control = useControlStore();

onMounted(() => {
  control.selectedOption = "Profession";
});

onUnmounted(() => {
  control.selectedOption = undefined;
});
</script>