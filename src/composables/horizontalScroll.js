// composables/useHorizontalScroll.js
import { ref, onMounted, onUnmounted } from "vue";

export const useHorizontalScroll = () => {
  const el = ref(null);

  const onWheel = (e) => {
    if (el.value) {
      e.preventDefault();
      el.value.scrollLeft += e.deltaY;
    }
  };

  onMounted(() => {
    el.value?.addEventListener("wheel", onWheel, { passive: false });
  });

  onUnmounted(() => {
    el.value?.removeEventListener("wheel", onWheel);
  });

  return el;
};
