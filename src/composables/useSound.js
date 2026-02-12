export function useLinkover() {
  const audio = new Audio("/sounds/menuover.wav");
  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}

export function useBtnClick() {
  const audio = new Audio("/sounds/btnclick.wav");
  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}
