import { reactive, readonly } from 'vue';

const state = reactive({
  squares: [
    { id: 'sq1', val: '' },
    { id: 'sq2', val: '' },
    { id: 'sq3', val: '' },
    { id: 'sq4', val: '' },
    { id: 'sq5', val: '' },
    { id: 'sq6', val: '' },
    { id: 'sq7', val: '' },
    { id: 'sq8', val: '' },
    { id: 'sq9', val: '' },
  ],
  gameOver: false,
  playerFirst: true,
  playerTurn: true,
  playerPlayed: false,
  playerPiece: 'tic',
  ggTop: false,
  ggLeft: false,
  ggRight: false,
  ggBottom: false,
  ggVert: false,
  ggHori: false,
  ggDiright: false,
  ggDileft: false
})

const methods = {
  togglePlay(value) {
    state.gameOver = value
  },
  updateTurn(value) {
    state.playerTurn = value;
  },
  updateSquares(value) {
    state.squares = value;
  },
  handlePlayerMove(move) {
    const idx = state.squares.findIndex(square => square.id === move);
    state.squares[idx].val = state.playerPiece;
  },
  toggleTop() {
    state.ggTop = !state.ggTop;
  },
  toggleLeft() {
    state.ggLeft = !state.ggLeft;
  },
  toggleRight() {
    state.ggRight = !state.ggRight;
  },
  toggleVert() {
    state.ggVert = !state.ggVert;
  },
  toggleBottom() {
    state.ggBottom = !state.ggBottom;
  },
  toggleHori() {
    state.ggHori = !state.ggHori;
  },
  toggleDiright() {
    state.ggDiright = !state.ggDiright;
  },
  toggleDileft() {
    state.ggDileft = !state.ggDileft;
  }
}

export default {
  state, 
  methods
  // getters
}