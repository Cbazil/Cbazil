import { defineStore } from "pinia";

export const useControlStore = defineStore("control", {
  state: () => ({
    page: undefined,
    selectedOption: undefined,
    openInventory: false,
    mTechSelection: "VueJS",
    eTechSelection: "ReactJS",
  }),
  actions: {
    setPage(p) {
      this.page = p;
    },
    toggleInventory() {
      this.openInventory = !this.openInventory;
    },
    setSelectedOption(opt) {
      this.selectedOption = opt;
    },
    setMTechSelection(val) {
      this.mTechSelection = val;
    },
    setETechSelection(val) {
      this.eTechSelection = val;
    },
    clearSelectedOption() {
      this.selectedOption = undefined;
    },
  },
});
