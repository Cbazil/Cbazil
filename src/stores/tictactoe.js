import { defineStore } from "pinia";

export const useTicTacToeStore = defineStore("tictactoe", {
  state: () => ({
    varient: "noraml",
    squares: [
      { id: "sq1", val: "" },
      { id: "sq2", val: "" },
      { id: "sq3", val: "" },
      { id: "sq4", val: "" },
      { id: "sq5", val: "" },
      { id: "sq6", val: "" },
      { id: "sq7", val: "" },
      { id: "sq8", val: "" },
      { id: "sq9", val: "" },
    ],
    gameOver: false,
    playerFirst: true,
    playerTurn: true,
    playerPlayed: false,
    playerPiece: "tic",
    ggTop: false,
    ggLeft: false,
    ggRight: false,
    ggBottom: false,
    ggVert: false,
    ggHori: false,
    ggDiright: false,
    ggDileft: false,
  }),
});
