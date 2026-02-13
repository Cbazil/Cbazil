export const useLinkover = () => {
  const audio = new Audio("/sounds/menuover.wav");
  audio.preload = "auto";

  return () => {
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Silently fail if browser hasn't been "unlocked" yet
    });
  };
};

export const useBtnClick = () => {
  const audio = new Audio("/sounds/btnclick.wav");
  audio.preload = "auto";

  return () => {
    audio.currentTime = 0;
    audio.play().catch(() => {
      console.warn("Audio needs a click to start!");
    });
  };
};
