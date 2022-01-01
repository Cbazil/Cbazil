<template>
  <span id="home" ref="container" @keyup.down="navAbout" tabindex="0">
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
    <div id="floats">
      <img src="../assets/fire.gif" alt="Fire-GiF">
    </div>
    <img id="arrowBL" width="35" src="../assets/arrowKeys.png" alt="">
    <!-- <img id="arrowCnt" width="35" src="../assets/arrow-down.png" alt=""> -->
    <img id="arrowBR" width="35" src="../assets/arrowKeys.png" alt="">
  </span>
</template>

<script>
import TicTacToe from '@/components/TicTacToe.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    TicTacToe
  },
  setup() {

    const router = useRouter()

    const navAbout = () => {
      router.push('/about')
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })

    return {
      navAbout,
      container
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
.containers {
  display: flex;
  position: relative;
  margin-left: 58px; 
  height: 100vh;
  overflow: none;
}
.containers:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

#home {
  position: relative;
  z-index: 0;
  display: flex;
  #h-container {
  margin: 16vh 8vw;
  width: 70%;
  border: none;
    span {
      display: block;
    }
    img {
      position: absolute;
      width: 240px;
      margin-top: -55px;
      left: 280px;
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
  #arrowBL {
    position: fixed;
    left: 65px;
    top: 96vh;
    transform: scaleX(-1) rotate(90deg);
    animation: bounce 1s infinite;
  }
  #arrowBR {
    position: fixed;
    right: 5px;
    top: 96vh;
    transform: rotate(90deg);
    animation: bounce 1s infinite;
  }
  #arrowCnt {
    position: absolute;
    right: 400px;
    top: 93vh;
  }
  @keyframes bounce {
    from {top: 93vh }
    to {top: 94vh }
  }
}
#home:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

// Table to mobile
@media (max-width: 830px) {
  #home {
    width: 100vw !important;
    margin-bottom: 10px;
    padding-bottom: 50px;
    display: block;
    overflow-y: scroll !important;
    overflow-x: hidden;
    #arrowBL {
      left: -10px;
      bottom: 0;
    }
    #h-container {
      display: block;
      margin: 100px 20px 0px 20px;
      width: 100%;
      #hire-btn {
        margin-top: -45px;
      }
      img {
        margin-top: -60px;
        width: 140px;
        left: 195px;
      }
    }
    #floats {
      position: absolute;
      top: 360px;
      left: 75vw;
      width: 100vw;
      img {
        position: relative;
        width: 150px;
      }
    }
    #g-container {
      position: relative;
      padding: unset;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
}
// Mobile
@media (max-width: 562px) {
  #h-container {
    img {
      width: 60px !important;
    }
  }
}

// Laptop responsiveness 1
@media (max-width: 1280px) {
 #h-container {
   #hire-btn {
     top: -20px;
   }
   img {
    // top: -30px;
    width: 190px !important;
   }
 }
 #floats {
   img {
    width: 280px !important; 
    right: 1vw;
   }
 }
}


// Laptop responsiveness 2
@media (max-width: 1140px) {
 #h-container {
   #hire-btn {
     top: -30px;
   }
   img {
    width: 120px !important;
   }
 }
 #floats {
   img {
    width: 220px !important; 
    right: 1vw;
   }
 }
}

// Laptop responsiveness 3
@media (max-width: 973px) {
 #h-container {
   #hire-btn {
     top: -32px;
   }
   img {
    width: 120px !important;
   }
 }
 #floats {
   img {
    width: 180px !important; 
    right: 0.2vw;
   }
 }
}

// MObile responsiveness 1
@media (max-width: 425px) {
  #h-container {
   #hire-btn {
     top: -32px;
   }
   img {
    width: 100px !important;
   }
 }
  #floats {
    display: none;
  }
  #arrowBR { 
    right: -5px !important;
  }
}

</style>