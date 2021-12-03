<template>
  <span id="home" @keydown.enter="handleScroll" tabindex="0">
      <div id="h-container">
        <h1><span class="text">H</span><span class="text">i</span><span class="text">,</span></h1><h1><span class="text">I</span><span class="text">'</span><span class="text">m</span> <span class="text">C</span><span class="text">b</span><span class="text">a</span><span class="text">z</span><span class="text">i</span><span class="text">l</span><span class="text">,</span></h1><h1><span class="text">W</span><span class="text">e</span><span class="text">b</span> <span class="text">D</span><span class="text">e</span><span class="text">v</span><span class="text">e</span><span class="text">l</span><span class="text">o</span><span class="text">p</span><span class="text">e</span><span class="text">r</span></h1>
        <h2>Fullstack Developer / Freelancer</h2>
        <br>
        <br>
        <img src="../assets/arrow.gif" alt="Arrow-GiF">
        <q-btn size="15px" id="hire-btn" outline>Hire me!</q-btn>
      </div>
      <div id="g-container">
        <TicTacToe />
      </div>
  </span>
  <div id="floats">
    <img src="../assets/fire.gif" alt="Fire-GiF">
  </div>
</template>

<script>
import TicTacToe from '@/components/TicTacToe.vue'
// import { onMounted } from 'vue'
export default {
  components: {
    TicTacToe
  },
  setup() {
    const handleScroll = () => {
      console.log('Hit');
    }
    return {
      handleScroll
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');
$dark: #2b2c2e;
$grey: #353639;
$green: #7ed957;
$blue: #5271ff;
#floats {
  img {
    position: absolute;
    right: 2vw;
    bottom: 2vh;
    width: 320px;
  }
}
#home {
  // margin: 2vh 2vw;
  display: flex;
  #h-container {
  margin: 16vh 4vw;
  width: 70%;
    span {
      display: block;
    }
    img {
      position: absolute;
      width: 240px;
      margin-top: -55px;
      left: 240px;
    }
    #hire-btn {
      padding: 5px 40px;
      color: $green;
      font-family: 'Montserrat Alternates', sans-serif;
      font-size: 24px;
      // border: 5px $green solid;
    }
    .text {
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-iteration-count: 1;
      display: inline-block;
    }
    .text:hover {
    cursor: grabbing;
    animation-name: rubberBand;
    //  color: $blue;
    //  animation: rubberBand 5s infinite;
    }
    @keyframes rubberBand {
      from {
        transform: scale3d(1, 1, 1);
      }
      30% {
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        transform: scale3d(.95, 1.05, 1);
      }
      75% {
        transform: scale3d(1.05, .95, 1);
      }
      to {
        transform: scale3d(1, 1, 1);
      }
    }
  }
  #g-container {
    // background: $green;
    width: 100%;
  }
}
</style>