import { defineStore } from "pinia";

export const useControlStore = defineStore("control", {
  state: () => ({
    page: undefined,
    selectedOption: undefined,
    openInventory: false,
    mTechSelection: "VueJS",
    eTechSelection: "ReactJS",
    workXPSelection: "Self-Employed",
    eduXPSelection: "ThreeJS Journey",
    allBlogSelection: "Learn HTML",
    frontendBlogSelection: "Learn HTML",
    backendBlogSelection: "PostgreSQL API",
    microGameSelection: "Tic Tac Toe",
  }),
  actions: {
    setPage(p) {
      this.page = p;
    },
    toggleInventory() {
      this.openInventory = !this.openInventory;
      this.openInventory
        ? ((this.mTechSelection = ""), (this.eTechSelection = "ReactJS"))
        : ((this.eTechSelection = ""), (this.mTechSelection = "VueJS"));
    },
    setSelectedOption(opt) {
      this.selectedOption = opt;
    },
    setMTechSelection(val) {
      this.openInventory = false;
      this.mTechSelection = val;
    },
    setETechSelection(val) {
      this.eTechSelection = val;
    },
    setWorkXPSelection(val) {
      this.workXPSelection = val;
    },
    setEduXPSelection(val) {
      this.eduXPSelection = val;
    },
    setAllBlogSelection(val) {
      this.allBlogSelection = val;
    },
    setFrontendBlogSelection(val) {
      this.frontendBlogSelection = val;
    },
    setMicroGameSelection(val) {
      this.microGameSelection = val;
    },
    setBackendBlogSelection(val) {
      this.backendBlogSelection = val;
    },
    clearSelectedOption() {
      this.selectedOption = undefined;
    },
  },
});
