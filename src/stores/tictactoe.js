import { defineStore } from "pinia";

export const useTicTacToeStore = defineStore("tictactoe", {
  state: () => ({
    variant: "Normal",
    moveHistory: [],
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
  actions: {
    updateSquares(squares) {
      this.squares = squares;
    },
    updateTurn(turn) {
      this.playerTurn = turn;
    },
    togglePlay(over) {
      this.gameOver = over;
    },
    toggleTop() {
      this.ggTop = true;
    },
    toggleLeft() {
      this.ggLeft = true;
    },
    toggleRight() {
      this.ggRight = true;
    },
    toggleBottom() {
      this.ggBottom = true;
    },
    toggleVert() {
      this.ggVert = true;
    },
    toggleHori() {
      this.ggHori = true;
    },
    toggleDiright() {
      this.ggDiright = true;
    },
    toggleDileft() {
      this.ggDileft = true;
    },
    clearSquare(id) {
      this.squares = this.squares.map((s) =>
        s.id === id ? { ...s, val: "" } : s,
      );
    },
    handlePlayerMove(id) {
      const square = this.squares.find((s) => s.id === id);
      if (square && square.val === "") {
        square.val = this.playerPiece;
        this.playerTurn = false;
      }
    },
  },
});
