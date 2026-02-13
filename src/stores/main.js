import { defineStore } from "pinia";

export const useControlStore = defineStore("control", {
  state: () => ({
    page: undefined,
    selectedOption: undefined,
  }),
  actions: {
    setPage(p) {
      this.page = p;
    },
    setSelectedOption(opt) {
      this.selectedOption = opt;
    },
    clearSelectedOption() {
      this.selectedOption = undefined;
    },
  },
});
