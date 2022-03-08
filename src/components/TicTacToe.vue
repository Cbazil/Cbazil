<template>
  <div id="container">
    <div id="tictactoe">
      <h5>&lt;TicTacToe&gt;</h5>
        <div id="grid">
          <div id="sq1" class="squares" @click.once="move($event)" :key="keyOne">
            <img class="pieces" v-if="squares[0].val === 'tic'" src="../assets/cross.png">
            <img class="pieces"  v-if="squares[0].val === 'tac'" src="../assets/circle.png">
          </div>
          <div id="sq2" class="squares"  @click.once="move($event)" :key="keyTwo">
            <img class="pieces" v-if="squares[1].val === 'tic'" src="../assets/cross.png">
            <img class="pieces"  v-if="squares[1].val === 'tac'" src="../assets/circle.png">
          </div>
          <div id="sq3" class="squares"  @click.once="move($event)" :key="keyThree">
            <img class="pieces" v-if="squares[2].val === 'tic'" src="../assets/cross.png">
            <img class="pieces"  v-if="squares[2].val === 'tac'" src="../assets/circle.png">
          </div>
          <div id="sq4" class="squares"  @click.once="move($event)" :key="keyFour">
            <img class="pieces" v-if="squares[3].val === 'tic'" src="../assets/cross.png">
            <img class="pieces"  v-if="squares[3].val === 'tac'" src="../assets/circle.png">
          </div>
          <div id="sq5" class="squares"  @click.once="move($event)" :key="keyFive">
            <img class="pieces" v-if="squares[4].val === 'tic'" src="../assets/cross.png">
            <img class="pieces"  v-if="squares[4].val === 'tac'" src="../assets/circle.png">
          </div>
          <div id="sq6" class="squares"  @click.once="move($event)" :key="keySix">
            <img class="pieces" v-if="squares[5].val === 'tic'" src="../assets/cross.png">
            <img class="pieces"  v-if="squares[5].val === 'tac'" src="../assets/circle.png">
          </div>
          <div id="sq7" class="squares"  @click.once="move($event)" :key="keySeven">
            <img class="pieces" v-if="squares[6].val === 'tic'" src="../assets/cross.png">
            <img class="pieces"  v-if="squares[6].val === 'tac'" src="../assets/circle.png">
          </div>
          <div id="sq8" class="squares"  @click.once="move($event)" :key="keyEight">
            <img class="pieces" v-if="squares[7].val === 'tic'" src="../assets/cross.png">
            <img class="pieces"  v-if="squares[7].val === 'tac'" src="../assets/circle.png">
          </div>
          <div id="sq9" class="squares"  @click.once="move($event)" :key="keyNine">
            <img class="pieces" v-if="squares[8].val === 'tic'" src="../assets/cross.png">
            <img class="pieces" v-if="squares[8].val === 'tac'" src="../assets/circle.png">
          </div>
        </div>
      <h5 style="display: flex; justify-content: end;">&lt;/TicTacToe&gt;</h5>
      <div id="winner-poles">
        <div id="ggTop" class="ruler" v-if="ggTop"></div>
        <div id="ggLeft" class="ruler" v-if="ggLeft"></div>
        <div id="ggRight" class="ruler" v-if="ggRight"></div>
        <div id="ggBottom" class="ruler" v-if="ggBottom"></div>
        <div id="ggVert" class="ruler" v-if="ggVert"></div>
        <div id="ggHori" class="ruler" v-if="ggHori"></div>
        <div id="ggDiright" class="ruler" v-if="ggDiright"></div>
        <div id="ggDileft" class="ruler" v-if="ggDileft"></div>
      </div>
    </div>
    <div id="game-ui">
      <h2 v-if="!gameOver">Challenge me?</h2>
      <h2 v-if="gameOver">Good Game!</h2>
      <span v-if="!gameOver && !store.state.playerPlayed"><q-btn :class="{turn: store.state.playerFirst}" @click="playerfirst" size="15px" class="control-btn" outline>1st</q-btn><q-btn :class="{turn: !store.state.playerFirst}"  @click.once="aiFirst" :key="keyAI" size="15px" class="control-btn" outline>2nd</q-btn></span>
      <span v-if="gameOver"><q-btn :class="{turn: !gameOver}" @click="resetGame" size="15px" class="control-btn" outline>pLay again</q-btn></span>
    </div>
  </div>
</template>

<script>
import { ref, computed ,inject } from 'vue';

export default {
  setup () {
  const store = inject('store')

  let squares = computed(() => { return store.state.squares });
  let gameOver = computed(() => { return store.state.gameOver })

  let ggTop = computed(() => { return store.state.ggTop });
  let ggLeft = computed(() => { return store.state.ggLeft});
  let ggRight = computed(() => { return store.state.ggRight});
  let ggBottom = computed(() => { return store.state.ggBottom});
  let ggVert = computed(() => { return store.state.ggVert});
  let ggHori = computed(() => { return store.state.ggHori});
  let ggDiright = computed(() => { return store.state.ggDiright});
  let ggDileft = computed(() => { return store.state.ggDileft});

  let keyOne = ref('1');
  let keyTwo = ref('2');
  let keyThree = ref('3');
  let keyFour = ref('4');
  let keyFive = ref('5');
  let keySix = ref('6');
  let keySeven = ref('7');
  let keyEight = ref('8');
  let keyNine = ref('9');
  let keyAI = ref('gg');

  const aiFirst = () => {
    store.state.playerPiece = 'tac'
    handleAIMove(store.state.squares)
    store.state.playerFirst = false
    store.methods.updateTurn(true)
  }

  const playerfirst = () => {
    store.state.playerFirst = true
    store.state.playerPlayed = false
    resetGame()
  }

  const playerTurn = computed(() => { return store.state.playerTurn })
  const playerPiece = computed(() => { return store.state.playerPiece })

  const randumb = (arr1, arr2) => {
    let percent = Math.ceil(Math.random() * 100);
    // console.log(percent);
    if (percent > 70) {
      let ranNum = Math.floor(Math.random() * arr2.length);
      // console.log('Array Two: ', ranNum);
      return arr2[ranNum];
    } else {
      let ranNum = Math.floor(Math.random() * arr1.length);
     // console.log('Array One: ', ranNum);
      return arr1[ranNum];
    }
  };
  
  const handleAIMove = (sqrs) => {
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
      store.methods.togglePlay(true)
    } else {
      // Player Plays middle
      if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == 'tic' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[0], sqrs[8]], [sqrs[1], sqrs[2], sqrs[3], sqrs[7]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      
      // Phase 1 good move
      else if(sq1 == 'tac' && sq2 == '' && sq3 == 'tic' && sq4 == '' && sq5 == 'tic' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == '') {
        let move = randumb([sqrs[6]], [sqrs[3], sqrs[7]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 ==  '' && sq5 == 'tic' && sq6 == '' && sq7 == 'tic' && sq8 == '' && sq9 == 'tac'){
        let move = randumb([sqrs[2]], [sqrs[1], sqrs[5]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == '' && sq2 == '' && sq3 == 'tac' && sq4 == '' && sq5 == 'tic' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == 'tic'){
        let move = randumb([sqrs[0]], [sqrs[1], sqrs[3]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // Phase 1 Bad move
      else if(sq1 == '' && sq2 == 'tac' && sq3 == 'tic' && sq4 == '' && sq5 == 'tic' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[6]], [sqrs[6], sqrs[3], sqrs[7]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      } 
  
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == 'tic' && sq6 == '' && sq7 == 'tic' && sq8 == 'tac' && sq9 == ''){
        let move = randumb([sqrs[2]], [sqrs[1], sqrs[2], sqrs[5]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == 'tic' && sq2 == '' && sq3 == '' && sq4== 'tac' && sq5 == 'tic' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[8]], [sqrs[5], sqrs[7], sqrs[8]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // Player Plays any corner
      // first corner
      else if(sq1 == 'tic' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[4]], [sqrs[1], sqrs[2], sqrs[3], sqrs[4], sqrs[6], sqrs[8]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == 'tic' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == 'tac' && sq6 == '' && sq7 == 'tic' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[3]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
          move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == 'tic' && sq2 == '' && sq3 == 'tic' && sq4 == '' && sq5 == 'tac' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[1]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // second corner
      else if(sq1 == '' && sq2 == '' && sq3 == 'tic' && sq4 == '' && sq5 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[4]], [sqrs[0], sqrs[1], sqrs[4], sqrs[5], sqrs[6], sqrs[8]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == '' && sq2 == '' && sq3 == 'tic' && sq4 == '' && sq5 == 'tac' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == 'tic'){
        let move = randumb([sqrs[5]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // third corner 
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == 'tic' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[4]], [sqrs[0], sqrs[2], sqrs[3], sqrs[4], sqrs[7], sqrs[8]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      } 
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == 'tac' && sq6 == '' && sq7 == 'tic' && sq8 == '' && sq9 == 'tic'){
        let move = randumb([sqrs[7]], [sqrs[1], sqrs[3], sqrs[5], sqrs[7]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // fourth corner 
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == 'tic'){
        let move = randumb([sqrs[4]], [sqrs[0], sqrs[2], sqrs[4], sqrs[5], sqrs[6], sqrs[7]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // Player plays sides 
      // top side
      else if(sq1 == '' && sq2 == 'tic' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[4]], [sqrs[0], sqrs[2], sqrs[4]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // left side
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == 'tic' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[4]], [sqrs[0], sqrs[4], sqrs[6]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      } 
      // right side
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == 'tic' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[4]], [sqrs[2], sqrs[4], sqrs[8]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // bottom side 
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == 'tic' && sq9 == ''){
        let move = randumb([sqrs[4]], [sqrs[4], sqrs[6], sqrs[8]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // Winning moves
      // top side
      else if(sq1 == '' && sq2 == 'tic' && sq3 == 'tic' || sq1 == '' && sq2 == 'tac' && sq3 == 'tac'){
        let move = randumb([sqrs[0]], [sqrs[0]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == 'tic' && sq2 == '' && sq3 == 'tic' || sq1 == 'tac' && sq2 == '' && sq3 == 'tac'){
        let move = randumb([sqrs[1]], [sqrs[1]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == 'tic' && sq2 == 'tic' && sq3 == '' || sq1 == 'tac' && sq2 == 'tac' && sq3 == ''){
        let move = randumb([sqrs[2]],[sqrs[2]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // left side
      else if(sq1 == '' && sq4 == 'tic' && sq7 == 'tic' || sq1 == '' && sq4 == 'tac' && sq7 == 'tac'){
        let move = randumb([sqrs[0]], [sqrs[0]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == 'tic' && sq4 == '' && sq7 == 'tic' || sq1 == 'tac' && sq4 == '' && sq7 == 'tac'){
        let move = randumb([sqrs[3]], [sqrs[3]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == 'tic' && sq4 == 'tic' && sq7 == '' || sq1 == 'tac' && sq4 == 'tac' && sq7 == ''){
        let move = randumb([sqrs[6]], [sqrs[6]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // right side 
      else if(sq3 == '' && sq6 == 'tic' && sq9 == 'tic' || sq3 == '' && sq6 == 'tac' && sq9 == 'tac'){
        let move = randumb([sqrs[2]], [sqrs[2]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq3 == 'tic' && sq6 == '' && sq9 == 'tic' || sq3 == 'tac' && sq6 == '' && sq9 == 'tac'){
        let move = randumb([sqrs[5]], [sqrs[5]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq3 == 'tic' && sq6 == 'tic' && sq9 == '' || sq3 == 'tac' && sq6 == 'tac' && sq9 == ''){
        let move = randumb([sqrs[8]],[sqrs[8]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // bottom side 
      else if(sq7 == '' && sq8 == 'tic' && sq9 == 'tic' || sq7 == '' && sq8 == 'tac' && sq9 == 'tac'){
        let move = randumb([sqrs[6]], [sqrs[6]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq7 == 'tic' && sq8 == '' && sq9 == 'tic' || sq7 == 'tac' && sq8 == '' && sq9 == 'tac'){
        let move = randumb([sqrs[7]], [sqrs[7]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq7 == 'tic' && sq8 == 'tic' && sq9 == '' || sq7 == 'tac' && sq8 == 'tac' && sq9 == ''){
        let move = randumb([sqrs[8]], [sqrs[8]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // verticle 
      else if(sq2 == '' && sq5 == 'tic' && sq8 == 'tic' || sq2 == '' && sq5 == 'tac' && sq8 == 'tac'){
        let move = randumb([sqrs[1]], [sqrs[1]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq2 == 'tic' && sq5 == '' && sq8 == 'tic' || sq2 == 'tac' && sq5 == '' && sq8 == 'tac'){
        let move = randumb([sqrs[4]], [sqrs[4]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq2 == 'tic' && sq5 == 'tic' && sq8 == '' || sq2 == 'tac' && sq5 == 'tac' && sq8 == ''){
        let move = randumb([sqrs[7]], [sqrs[7]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // horizontal
      else if(sq4 == '' && sq5 == 'tic' && sq6 == 'tic' || sq4 == '' && sq5 == 'tac' && sq6 == 'tac'){
        let move = randumb([sqrs[3]], [sqrs[3]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq4 == 'tic' && sq5 == '' && sq6 == 'tic' || sq4 == 'tac' && sq5 == '' && sq6 == 'tac'){
        let move = randumb([sqrs[4]], [sqrs[4]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq4 == 'tic' && sq5 == 'tic' && sq6 == '' || sq4 == 'tac' && sq5 == 'tac' && sq6 == ''){
        let move = randumb([sqrs[5]], [sqrs[5]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // Diagonal right
      else if(sq1 == '' && sq5 == 'tic' && sq9 == 'tic' || sq1 == '' && sq5 == 'tac' && sq9 == 'tac'){
        let move = randumb([sqrs[0]], [sqrs[0]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == 'tic' && sq5 == '' && sq9 == 'tic' || sq1 == 'tac' && sq5 == '' && sq9 == 'tac'){
        let move = randumb([sqrs[4]], [sqrs[4]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq1 == 'tic' && sq5 == 'tic' && sq9 == '' || sq1 == 'tac' && sq5 == 'tac' && sq9 == ''){
        let move = randumb([sqrs[8]], [sqrs[8]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // Diagonal left
      else if(sq3 == '' && sq5 == 'tic' && sq7 == 'tic' || sq3 == '' && sq5 == 'tac' && sq7 == 'tac'){
        let move = randumb([sqrs[2]], [sqrs[2]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq3 == 'tic' && sq5 == '' && sq7 == 'tic' || sq3 == 'tac' && sq5 == '' && sq7 == 'tac'){
        let move = randumb([sqrs[4]], [sqrs[4]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else if(sq3 == 'tic' && sq5 == 'tic' && sq7 == '' || sq3 == 'tac' && sq5 == 'tac' && sq7 == ''){
        let move = randumb([sqrs[6]], [sqrs[6]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      // AI plays first 
      else if(sq1 == '' && sq2 == '' && sq3 == '' && sq4 == '' && sq5 == '' && sq6 == '' && sq7 == '' && sq8 == '' && sq9 == ''){
        let move = randumb([sqrs[4], sqrs[0], sqrs[2], sqrs[6], sqrs[8]], [sqrs[0], sqrs[1], sqrs[3], sqrs[5], sqrs[7], sqrs[2], sqrs[6], sqrs[8]]);
        move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';
      }
      else {
        randomSqr(sqrs);
      }
    }
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

    // Check win
    if((sq1 == 'tic' && sq2 == 'tic' && sq3 == 'tic') || (sq1 == 'tac' && sq2 == 'tac' && sq3 == 'tac')) {
       store.methods.toggleTop()
       store.methods.togglePlay(true)
    } 
    if((sq1 == 'tic' && sq4 == 'tic' && sq7 == 'tic') || (sq1 == 'tac' && sq4 == 'tac' && sq7 == 'tac')){
       store.methods.toggleLeft()
       store.methods.togglePlay(true)
    } 
    if((sq3 == 'tic' && sq6 == 'tic' && sq9 == 'tic') || (sq3 == 'tac' && sq6 == 'tac' && sq9 == 'tac')){
       store.methods.toggleRight()
       store.methods.togglePlay(true)
    } 
    if((sq7 == 'tic' && sq8 == 'tic' && sq9 == 'tic') || (sq7 == 'tac' && sq8 == 'tac' && sq9 == 'tac')){
       store.methods.toggleBottom()
       store.methods.togglePlay(true)
    } 
    if((sq2 == 'tic' && sq5 == 'tic' && sq8 == 'tic') || (sq2 == 'tac' && sq5 == 'tac' && sq8 == 'tac')){
       store.methods.toggleVert()
       store.methods.togglePlay(true)
    } 
    if((sq4 == 'tic' && sq5 == 'tic' && sq6 == 'tic') || (sq4 == 'tac' && sq5 == 'tac' && sq6 == 'tac')){
       store.methods.toggleHori()
       store.methods.togglePlay(true)
    } 
    if((sq1 == 'tic' && sq5 == 'tic' && sq9 == 'tic') || (sq1 == 'tac' && sq5 == 'tac' && sq9 == 'tac')){
       store.methods.toggleDiright()
       store.methods.togglePlay(true)
    } 
    if((sq3 == 'tic' && sq5 == 'tic' && sq7 == 'tic') || (sq3 == 'tac' && sq5 == 'tac' && sq7 == 'tac')){
       store.methods.toggleDileft()
       store.methods.togglePlay(true)
    }
  };
  const randomSqr = (arr) =>  {
    let empty = arr.filter(item => item.val == "");
    let move = empty[Math.floor(Math.random() * empty.length)];
    move.val = playerPiece.value === 'tac' ? 'tic' : 'tac';;
  };

  const resetGame = () => {
    store.methods.updateSquares(
      [
        { id: 'sq1', val: '' },
        { id: 'sq2', val: '' },
        { id: 'sq3', val: '' },
        { id: 'sq4', val: '' },
        { id: 'sq5', val: '' },
        { id: 'sq6', val: '' },
        { id: 'sq7', val: '' },
        { id: 'sq8', val: '' },
        { id: 'sq9', val: '' },
      ]
    )
    store.state.playerPiece = 'tic'
    store.methods.togglePlay(false)
    store.methods.updateTurn(true)
    store.state.ggTop = false
    store.state.ggBottom = false
    store.state.ggLeft= false
    store.state.ggRight = false
    store.state.ggVert = false
    store.state.ggHori = false
    store.state.ggDileft = false
    store.state.ggDiright = false
    keyOne.value = keyOne.value + '1'
    keyTwo.value = keyTwo.value + '2'
    keyThree.value = keyThree.value + '3'
    keyFour.value = keyFour.value + '4'
    keyFive.value = keyFive.value + '5'
    keySix.value = keySix.value + '6'
    keySeven.value = keySeven.value + '7' 
    keyEight.value = keyEight.value + '8'
    keyNine.value = keyNine.value + '9'
    keyAI.value = keyAI.value + 'gg'

    store.state.playerPlayed = false,
    store.state.playerFirst = true
  }

  const move = async (event) => {
    if (playerTurn.value && event.currentTarget.children.length == 0 && (gameOver.value == false)) {
      store.state.playerPlayed = true
      store.methods.handlePlayerMove(event.currentTarget.id)
      winnerFound(store.state.squares)
      if (!gameOver.value) {
        handleAIMove(store.state.squares)
        winnerFound(store.state.squares)
      }
      if(squares.value[0].val.length > 0
      && squares.value[1].val.length > 0
      && squares.value[2].val.length > 0
      && squares.value[3].val.length > 0
      && squares.value[4].val.length > 0
      && squares.value[5].val.length > 0
      && squares.value[6].val.length > 0
      && squares.value[7].val.length > 0
      && squares.value[8].val.length > 0
      ) {
        store.methods.togglePlay(true)
      }
      // Update squares
      if (!gameOver.value) {
        store.methods.updateTurn(true)
      }
    } else {
        console.log('AI played there!')
        var audio =  new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')
        audio.play();
    }
  }

    return {
      squares,
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
      store,
      gameOver,
      aiFirst,
      playerfirst,
      playerTurn,
      resetGame
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
$grey: #353639;
$green: #7ed957;
$blue: #5271ff;

#container {
  margin-top: 40px;
  width: 350px;
  padding: 0;
  height: 350px;
}
.pieces {
  width: 80px;
  height: 80px;
  margin: 0px;
}
.squares {
  max-width: 110px;
  max-height: 110px;
  width: auto;
  height: auto;
  cursor: pointer;
  background-color: skyblue;
  /* background: yellowgreen; */
  margin: 0;
  padding: 12%;
}
#grid {
  position: relative;
  display: grid;
  background: #fff;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
#winner-poles {
  position: relative;
  top: 0;
  z-index: 1;
}
.squares {
  background: $grey;
  width: 120px;
  height: 120px;
}

.ruler {
  position: absolute;
  margin-top: -260px;
  width: 350px;
  height: 10px;
  background-color: $green;
}

#ggTop {
  top: -120px;
}

#ggBottom {
  top: 120px;
}

#ggRight, #ggLeft, #ggVert {
  transform: rotate(90deg);
}

#ggLeft {
  left: -120px;
}

#ggDiright {
  transform: rotate(45deg) scale(1.3, 1);
}

#ggDileft {
  margin-top: -263px;
  transform: rotate(-45deg) scale(1.3, 1);
}

#ggRight {
  left: 120px;
}

#game-ui {
  margin-top: -25px;
  position: relative;
  display: block;
  text-align: center;
}
.control-btn {
  margin-top: -35px;
}

button {
  padding: 5px 25px;
  margin: 0 5px;
  color: #fff;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 24px;
}
.turn {
  color: $green !important;
  border: none !important;
}

// Table to mobile
@media (max-width: 767px) {
 #container {
    margin-top: 40px;
    width: 300px;
    height: 300px;
  }
  .pieces {
    width: 74px;
    height: 74px;
  }
  .squares {
    max-width: 98px;
    max-height: 98px;
  }
  #grid {
    grid-gap: 6px;
  }
}
</style>