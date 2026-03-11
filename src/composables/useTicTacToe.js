// useTicTacToe.js
import { ref, computed } from "vue";
import { useTicTacToeStore } from "@/stores/tictactoe.js";

export function useTicTacToe() {
  const store = useTicTacToeStore();

  // Computed state from store
  const squares = computed(() => store.squares);
  const gameOver = computed(() => store.gameOver);
  const playerTurn = computed(() => store.playerTurn);
  const playerPiece = computed(() => store.playerPiece);
  const playerFirst = computed(() => store.playerFirst);
  const playerPlayed = computed(() => store.playerPlayed);

  // Win line positions
  const ggTop = computed(() => store.ggTop);
  const ggLeft = computed(() => store.ggLeft);
  const ggRight = computed(() => store.ggRight);
  const ggBottom = computed(() => store.ggBottom);
  const ggVert = computed(() => store.ggVert);
  const ggHori = computed(() => store.ggHori);
  const ggDiright = computed(() => store.ggDiright);
  const ggDileft = computed(() => store.ggDileft);

  // Key refs for forcing re-render
  const keyOne = ref("1");
  const keyTwo = ref("2");
  const keyThree = ref("3");
  const keyFour = ref("4");
  const keyFive = ref("5");
  const keySix = ref("6");
  const keySeven = ref("7");
  const keyEight = ref("8");
  const keyNine = ref("9");
  const keyAI = ref("gg");

  const randumb = (arr1, arr2) => {
    let percent = Math.ceil(Math.random() * 100);
    if (percent > 70) {
      let ranNum = Math.floor(Math.random() * arr2.length);
      return arr2[ranNum];
    } else {
      let ranNum = Math.floor(Math.random() * arr1.length);
      return arr1[ranNum];
    }
  };

  const handleAIMove = (sqrs) => {
    let played = null;

    let sq1 = sqrs[0].val,
      sq2 = sqrs[1].val,
      sq3 = sqrs[2].val,
      sq4 = sqrs[3].val,
      sq5 = sqrs[4].val,
      sq6 = sqrs[5].val,
      sq7 = sqrs[6].val,
      sq8 = sqrs[7].val,
      sq9 = sqrs[8].val;

    if (sq1 && sq2 && sq3 && sq4 && sq5 && sq6 && sq7 && sq8 && sq9) {
      store.togglePlay(true);
    } else {
      // Player Plays middle
      if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "tic" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb(
          [sqrs[0], sqrs[8]],
          [sqrs[1], sqrs[2], sqrs[3], sqrs[7]],
        );
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // Phase 1 good move
      else if (
        sq1 == "tac" &&
        sq2 == "" &&
        sq3 == "tic" &&
        sq4 == "" &&
        sq5 == "tic" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb([sqrs[6]], [sqrs[3], sqrs[7]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "tic" &&
        sq6 == "" &&
        sq7 == "tic" &&
        sq8 == "" &&
        sq9 == "tac"
      ) {
        let move = randumb([sqrs[2]], [sqrs[1], sqrs[5]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "tac" &&
        sq4 == "" &&
        sq5 == "tic" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == "tic"
      ) {
        let move = randumb([sqrs[0]], [sqrs[1], sqrs[3]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // Phase 1 Bad move
      else if (
        sq1 == "" &&
        sq2 == "tac" &&
        sq3 == "tic" &&
        sq4 == "" &&
        sq5 == "tic" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb([sqrs[6]], [sqrs[6], sqrs[3], sqrs[7]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "tic" &&
        sq6 == "" &&
        sq7 == "tic" &&
        sq8 == "tac" &&
        sq9 == ""
      ) {
        let move = randumb([sqrs[2]], [sqrs[1], sqrs[2], sqrs[5]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "tic" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "tac" &&
        sq5 == "tic" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb([sqrs[8]], [sqrs[5], sqrs[7], sqrs[8]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // Player Plays any corner
      // first corner
      else if (
        sq1 == "tic" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb(
          [sqrs[4]],
          [sqrs[1], sqrs[2], sqrs[3], sqrs[4], sqrs[6], sqrs[8]],
        );
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "tic" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "tac" &&
        sq6 == "" &&
        sq7 == "tic" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb([sqrs[3]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "tic" &&
        sq2 == "" &&
        sq3 == "tic" &&
        sq4 == "" &&
        sq5 == "tac" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb([sqrs[1]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // second corner
      else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "tic" &&
        sq4 == "" &&
        sq5 == "" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb(
          [sqrs[4]],
          [sqrs[0], sqrs[1], sqrs[4], sqrs[5], sqrs[6], sqrs[8]],
        );
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "tic" &&
        sq4 == "" &&
        sq5 == "tac" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == "tic"
      ) {
        let move = randumb([sqrs[5]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // third corner
      else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "" &&
        sq6 == "" &&
        sq7 == "tic" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb(
          [sqrs[4]],
          [sqrs[0], sqrs[2], sqrs[3], sqrs[4], sqrs[7], sqrs[8]],
        );
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "tac" &&
        sq6 == "" &&
        sq7 == "tic" &&
        sq8 == "" &&
        sq9 == "tic"
      ) {
        let move = randumb([sqrs[7]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // fourth corner
      else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == "tic"
      ) {
        let move = randumb(
          [sqrs[4]],
          [sqrs[0], sqrs[2], sqrs[4], sqrs[5], sqrs[6], sqrs[7]],
        );
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // Player plays sides
      else if (
        sq1 == "" &&
        sq2 == "tic" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb([sqrs[4]], [sqrs[0], sqrs[2], sqrs[4]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "tic" &&
        sq5 == "" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb([sqrs[4]], [sqrs[0], sqrs[4], sqrs[6]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "" &&
        sq6 == "tic" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb([sqrs[4]], [sqrs[2], sqrs[4], sqrs[8]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "tic" &&
        sq9 == ""
      ) {
        let move = randumb([sqrs[4]], [sqrs[4], sqrs[6], sqrs[8]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // Winning moves - top
      else if (
        (sq1 == "" && sq2 == "tic" && sq3 == "tic") ||
        (sq1 == "" && sq2 == "tac" && sq3 == "tac")
      ) {
        let move = randumb([sqrs[0]], [sqrs[0]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq1 == "tic" && sq2 == "" && sq3 == "tic") ||
        (sq1 == "tac" && sq2 == "" && sq3 == "tac")
      ) {
        let move = randumb([sqrs[1]], [sqrs[1]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq1 == "tic" && sq2 == "tic" && sq3 == "") ||
        (sq1 == "tac" && sq2 == "tac" && sq3 == "")
      ) {
        let move = randumb([sqrs[2]], [sqrs[2]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // left
      else if (
        (sq1 == "" && sq4 == "tic" && sq7 == "tic") ||
        (sq1 == "" && sq4 == "tac" && sq7 == "tac")
      ) {
        let move = randumb([sqrs[0]], [sqrs[0]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq1 == "tic" && sq4 == "" && sq7 == "tic") ||
        (sq1 == "tac" && sq4 == "" && sq7 == "tac")
      ) {
        let move = randumb([sqrs[3]], [sqrs[3]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq1 == "tic" && sq4 == "tic" && sq7 == "") ||
        (sq1 == "tac" && sq4 == "tac" && sq7 == "")
      ) {
        let move = randumb([sqrs[6]], [sqrs[6]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // right
      else if (
        (sq3 == "" && sq6 == "tic" && sq9 == "tic") ||
        (sq3 == "" && sq6 == "tac" && sq9 == "tac")
      ) {
        let move = randumb([sqrs[2]], [sqrs[2]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq3 == "tic" && sq6 == "" && sq9 == "tic") ||
        (sq3 == "tac" && sq6 == "" && sq9 == "tac")
      ) {
        let move = randumb([sqrs[5]], [sqrs[5]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq3 == "tic" && sq6 == "tic" && sq9 == "") ||
        (sq3 == "tac" && sq6 == "tac" && sq9 == "")
      ) {
        let move = randumb([sqrs[8]], [sqrs[8]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // bottom
      else if (
        (sq7 == "" && sq8 == "tic" && sq9 == "tic") ||
        (sq7 == "" && sq8 == "tac" && sq9 == "tac")
      ) {
        let move = randumb([sqrs[6]], [sqrs[6]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq7 == "tic" && sq8 == "" && sq9 == "tic") ||
        (sq7 == "tac" && sq8 == "" && sq9 == "tac")
      ) {
        let move = randumb([sqrs[7]], [sqrs[7]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq7 == "tic" && sq8 == "tic" && sq9 == "") ||
        (sq7 == "tac" && sq8 == "tac" && sq9 == "")
      ) {
        let move = randumb([sqrs[8]], [sqrs[8]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // vertical
      else if (
        (sq2 == "" && sq5 == "tic" && sq8 == "tic") ||
        (sq2 == "" && sq5 == "tac" && sq8 == "tac")
      ) {
        let move = randumb([sqrs[1]], [sqrs[1]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq2 == "tic" && sq5 == "" && sq8 == "tic") ||
        (sq2 == "tac" && sq5 == "" && sq8 == "tac")
      ) {
        let move = randumb([sqrs[4]], [sqrs[4]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq2 == "tic" && sq5 == "tic" && sq8 == "") ||
        (sq2 == "tac" && sq5 == "tac" && sq8 == "")
      ) {
        let move = randumb([sqrs[7]], [sqrs[7]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // horizontal
      else if (
        (sq4 == "" && sq5 == "tic" && sq6 == "tic") ||
        (sq4 == "" && sq5 == "tac" && sq6 == "tac")
      ) {
        let move = randumb([sqrs[3]], [sqrs[3]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq4 == "tic" && sq5 == "" && sq6 == "tic") ||
        (sq4 == "tac" && sq5 == "" && sq6 == "tac")
      ) {
        let move = randumb([sqrs[4]], [sqrs[4]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq4 == "tic" && sq5 == "tic" && sq6 == "") ||
        (sq4 == "tac" && sq5 == "tac" && sq6 == "")
      ) {
        let move = randumb([sqrs[5]], [sqrs[5]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // Diagonal right
      else if (
        (sq1 == "" && sq5 == "tic" && sq9 == "tic") ||
        (sq1 == "" && sq5 == "tac" && sq9 == "tac")
      ) {
        let move = randumb([sqrs[0]], [sqrs[0]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq1 == "tic" && sq5 == "" && sq9 == "tic") ||
        (sq1 == "tac" && sq5 == "" && sq9 == "tac")
      ) {
        let move = randumb([sqrs[4]], [sqrs[4]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq1 == "tic" && sq5 == "tic" && sq9 == "") ||
        (sq1 == "tac" && sq5 == "tac" && sq9 == "")
      ) {
        let move = randumb([sqrs[8]], [sqrs[8]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // Diagonal left
      else if (
        (sq3 == "" && sq5 == "tic" && sq7 == "tic") ||
        (sq3 == "" && sq5 == "tac" && sq7 == "tac")
      ) {
        let move = randumb([sqrs[2]], [sqrs[2]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq3 == "tic" && sq5 == "" && sq7 == "tic") ||
        (sq3 == "tac" && sq5 == "" && sq7 == "tac")
      ) {
        let move = randumb([sqrs[4]], [sqrs[4]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else if (
        (sq3 == "tic" && sq5 == "tic" && sq7 == "") ||
        (sq3 == "tac" && sq5 == "tac" && sq7 == "")
      ) {
        let move = randumb([sqrs[6]], [sqrs[6]]);
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      }
      // AI plays first (empty board)
      else if (
        sq1 == "" &&
        sq2 == "" &&
        sq3 == "" &&
        sq4 == "" &&
        sq5 == "" &&
        sq6 == "" &&
        sq7 == "" &&
        sq8 == "" &&
        sq9 == ""
      ) {
        let move = randumb(
          [sqrs[4], sqrs[0], sqrs[2], sqrs[6], sqrs[8]],
          [
            sqrs[0],
            sqrs[1],
            sqrs[3],
            sqrs[5],
            sqrs[7],
            sqrs[2],
            sqrs[6],
            sqrs[8],
          ],
        );
        move.val = playerPiece.value === "tac" ? "tic" : "tac";
        played = move;
      } else {
        const id = randomSqr(sqrs);
        played = { id };
      }
    }

    return played?.id ?? null;
  };

  const winnerFound = (squares) => {
    let sq1 = squares[0].val,
      sq2 = squares[1].val,
      sq3 = squares[2].val,
      sq4 = squares[3].val,
      sq5 = squares[4].val,
      sq6 = squares[5].val,
      sq7 = squares[6].val,
      sq8 = squares[7].val,
      sq9 = squares[8].val;

    if (
      (sq1 == "tic" && sq2 == "tic" && sq3 == "tic") ||
      (sq1 == "tac" && sq2 == "tac" && sq3 == "tac")
    ) {
      store.toggleTop();
      store.togglePlay(true);
    }
    if (
      (sq1 == "tic" && sq4 == "tic" && sq7 == "tic") ||
      (sq1 == "tac" && sq4 == "tac" && sq7 == "tac")
    ) {
      store.toggleLeft();
      store.togglePlay(true);
    }
    if (
      (sq3 == "tic" && sq6 == "tic" && sq9 == "tic") ||
      (sq3 == "tac" && sq6 == "tac" && sq9 == "tac")
    ) {
      store.toggleRight();
      store.togglePlay(true);
    }
    if (
      (sq7 == "tic" && sq8 == "tic" && sq9 == "tic") ||
      (sq7 == "tac" && sq8 == "tac" && sq9 == "tac")
    ) {
      store.toggleBottom();
      store.togglePlay(true);
    }
    if (
      (sq2 == "tic" && sq5 == "tic" && sq8 == "tic") ||
      (sq2 == "tac" && sq5 == "tac" && sq8 == "tac")
    ) {
      store.toggleVert();
      store.togglePlay(true);
    }
    if (
      (sq4 == "tic" && sq5 == "tic" && sq6 == "tic") ||
      (sq4 == "tac" && sq5 == "tac" && sq6 == "tac")
    ) {
      store.toggleHori();
      store.togglePlay(true);
    }
    if (
      (sq1 == "tic" && sq5 == "tic" && sq9 == "tic") ||
      (sq1 == "tac" && sq5 == "tac" && sq9 == "tac")
    ) {
      store.toggleDiright();
      store.togglePlay(true);
    }
    if (
      (sq3 == "tic" && sq5 == "tic" && sq7 == "tic") ||
      (sq3 == "tac" && sq5 == "tac" && sq7 == "tac")
    ) {
      store.toggleDileft();
      store.togglePlay(true);
    }
  };

  const randomSqr = (arr) => {
    let empty = arr.filter((item) => item.val == "");
    let move = empty[Math.floor(Math.random() * empty.length)];
    move.val = playerPiece.value === "tac" ? "tic" : "tac";
    return move.id;
  };

  const resetGame = () => {
    store.updateSquares([
      { id: "sq1", val: "" },
      { id: "sq2", val: "" },
      { id: "sq3", val: "" },
      { id: "sq4", val: "" },
      { id: "sq5", val: "" },
      { id: "sq6", val: "" },
      { id: "sq7", val: "" },
      { id: "sq8", val: "" },
      { id: "sq9", val: "" },
    ]);
    store.playerPiece = "tic";
    store.togglePlay(false);
    store.updateTurn(true);
    store.ggTop = false;
    store.ggBottom = false;
    store.ggLeft = false;
    store.ggRight = false;
    store.ggVert = false;
    store.ggHori = false;
    store.ggDileft = false;
    store.ggDiright = false;
    keyOne.value = keyOne.value + "1";
    keyTwo.value = keyTwo.value + "2";
    keyThree.value = keyThree.value + "3";
    keyFour.value = keyFour.value + "4";
    keyFive.value = keyFive.value + "5";
    keySix.value = keySix.value + "6";
    keySeven.value = keySeven.value + "7";
    keyEight.value = keyEight.value + "8";
    keyNine.value = keyNine.value + "9";
    keyAI.value = keyAI.value + "gg";
    store.playerPlayed = false;
    store.moveHistory = [];
    // NOTE: playerFirst is NOT touched here — callers own that
  };

  const aiFirst = () => {
    store.playerPiece = "tac";
    handleAIMove(store.squares);
    store.updateTurn(true);
  };

  const playerfirst = () => {
    store.playerPlayed = false;
    resetGame();
  };

  const move = async (event) => {
    if (
      playerTurn.value &&
      event.currentTarget.children.length == 0 &&
      gameOver.value == false
    ) {
      store.playerPlayed = true;
      const sharedId = event.currentTarget.id;
      store.handlePlayerMove(sharedId);

      setTimeout(() => {
        winnerFound(store.squares);

        if (!gameOver.value) {
          // Infinite variant: track + trim player move after confirming no win
          if (store.variant === "Infinite") {
            store.moveHistory.push({ id: sharedId });
            if (store.moveHistory.length > 6) {
              const oldest = store.moveHistory.shift();
              store.clearSquare(oldest.id);
            }
          }

          const aiMoveId = handleAIMove(store.squares);
          winnerFound(store.squares);

          // Infinite variant: track + trim AI move after confirming no win
          if (!gameOver.value && store.variant === "Infinite" && aiMoveId) {
            store.moveHistory.push({ id: aiMoveId });
            if (store.moveHistory.length > 6) {
              const oldest = store.moveHistory.shift();
              store.clearSquare(oldest.id);
            }
          }

          // Draw check
          if (
            squares.value[0].val.length > 0 &&
            squares.value[1].val.length > 0 &&
            squares.value[2].val.length > 0 &&
            squares.value[3].val.length > 0 &&
            squares.value[4].val.length > 0 &&
            squares.value[5].val.length > 0 &&
            squares.value[6].val.length > 0 &&
            squares.value[7].val.length > 0 &&
            squares.value[8].val.length > 0
          ) {
            store.togglePlay(true);
          }
        }

        if (!gameOver.value) {
          store.updateTurn(true);
        }
      }, 500);
    } else {
      var audio = await new Audio(
        "http://soundbible.com/mp3/Air  Plane Ding-SoundBible.com-496729130.mp3",
      );
      audio.play();
    }
  };

  return {
    squares,
    gameOver,
    playerTurn,
    playerPiece,
    playerFirst,
    playerPlayed,
    ggTop,
    ggLeft,
    ggRight,
    ggBottom,
    ggVert,
    ggHori,
    ggDiright,
    ggDileft,
    keyOne,
    keyTwo,
    keyThree,
    keyFour,
    keyFive,
    keySix,
    keySeven,
    keyEight,
    keyNine,
    keyAI,
    move,
    aiFirst,
    playerfirst,
    resetGame,
    store,
  };
}
