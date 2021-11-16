<template>
  <div class="container">
    <div id="grid">
      <div class="squares">
        <img class="pieces" v-if="!squares" src="../assets/circle.png">
        <img class="pieces" v-if="squares" src="../assets/cross.png">
      </div>
      <div class="squares">
        <!-- <img class="pieces" v-if="!squares" src="../assets/circle.png">
        <img class="pieces" v-if="squares" src="../assets/cross.png"> -->
      </div>
      <div class="squares">
        <img class="pieces" v-if="squares" src="../assets/circle.png">
        <img class="pieces" v-if="!squares" src="../assets/cross.png">
      </div>
      <div class="squares">
        <img class="pieces" v-if="squares" src="../assets/circle.png">
        <img class="pieces" v-if="!squares" src="../assets/cross.png">
      </div>
      <div class="squares">
        <!-- <img class="pieces" v-if="squares" src="../assets/circle.png">
        <img class="pieces" v-if="squares" src="../assets/cross.png"> -->
      </div>
      <div class="squares">
        <img class="pieces" v-if="squares" src="../assets/circle.png">
        <img class="pieces" v-if="!squares" src="../assets/cross.png">
      </div>
      <div class="squares">
        <img class="pieces" v-if="!squares" src="../assets/circle.png">
        <img class="pieces" v-if="squares" src="../assets/cross.png">
      </div>
      <div class="squares">
        <img class="pieces" v-if="!squares" src="../assets/circle.png">
        <img class="pieces" v-if="squares" src="../assets/cross.png">
      </div>
      <div class="squares">
        <!-- <img class="pieces" v-if="squares" src="../assets/circle.png">
        <img class="pieces" v-if="!squares" src="../assets/cross.png"> -->
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
export default {
  setup () {
    const squares = false;
    return {
      squares
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
  margin: 20px;
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