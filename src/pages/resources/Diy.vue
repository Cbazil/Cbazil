<template>
  <div>
    <h3>D-I-Y</h3>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";
const control = useControlStore();

onMounted(() => {
  control.selectedOption = "All";
});

onUnmounted(() => {
  control.selectedOption = undefined;
});
</script>