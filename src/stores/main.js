import { defineStore } from "pinia";

export const useControlStore = defineStore("control", () => {
  state: () => {
    return {
      page: undefined,
      selectedOption: undefined,
    };
  };
});
