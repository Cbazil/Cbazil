<template>
  <div class="container">
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
        <img class="pieces"  v-if="squares[8].val === 'tac'" src="../assets/circle.png">
      </div>
    </div>
    <div id="ggTop" class="horiPoles" v-if="ggTop"></div>
    <div id="ggLeft" class="vertPoles" v-if="ggLeft"></div>
    <div id="ggRight" class="vertPoles" v-if="ggRight"></div>
    <div id="ggBottom" class="horiPoles" v-if="ggBottom"></div>
    <div id="ggVert" class="vertPoles" v-if="ggVert"></div>
    <div id="ggHori" class="horiPoles" v-if="ggHori"></div>
    <div id="ggDiright" v-if="ggDiright"></div>
    <div id="ggDileft" v-if="ggDileft"></div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup () {
    const store = inject('store')

    let squares = store.state.squares;
    
    let ggTop = store.state.ggTop;
    let ggLeft = store.state.ggLeft;
    let ggRight = store.state.ggRight;
    let ggBottom = store.state.ggBottom;
    let ggVert = store.state.ggVert;
    let ggHori = store.state.ggHori;
    let ggDiright = store.state.ggDiright;
    let ggDileft = store.state.ggDileft;

    let keyOne = store.state.keyOne;
    let keyTwo = store.state.keyTwo;
    let keyThree = store.state.keyThree;
    let keyFour = store.state.keyFour;
    let keyFive = store.state.keyFive;
    let keySix = store.state.keySix;
    let keySeven = store.state.keySeven;
    let keyEight = store.state.keyEight;
    let keyNine = store.state.keyNine;

    // const playerFirst = () => {
    //   store.methods.updateTurn(true)
    // },

    // const AIFirst = () => {
    //   store.methods.updateTurn(false)
    // }
    
    const move = (event) => {
      if (store.state.playerTurn) {
        store.methods.handlePlayerMove(event.currentTarget.id)
        // Update squares
        store.methods.updateTurn(false);
      } else {
        console.log('AI Move')
      }
      // AI move
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
      move
    }
  }
}
</script>

<style lang="scss" scoped>
$grey: #353639;
.container {
  margin-top: 150px;
  width: 410px;
  height: 410px;
}
.pieces {
  width: 90px;
  height: 90px;
  margin: 0px;
}

.squares {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  cursor: pointer;
  background-color: skyblue;
  /* background: yellowgreen; */
  margin: 0;
  padding: 15%;
}

#grid {
  display: grid;
  background: #fff;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
.squares {
  background: $grey;
  width: 130px;
  height: 130px;
}

</style>