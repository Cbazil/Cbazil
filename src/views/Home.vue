<template>
  <span id="home" ref="container" @keyup.down="navAbout" @wheel="navScroll($event)" tabindex="0">
    <PageContainer> 
      <br>
      <br>
      <br>
      <h5>&lt;html&gt;</h5>
      <h5>&nbsp;&nbsp;&lt;body&gt;</h5>
      <div id="home-container">
        <div id="home-container1">
          <div id="header1-div">
            <h5>&lt;h1&gt;</h5>
            <div id="heading1"><h1><span class="text">H</span><span class="text">i</span><span class="text">,</span></h1><h1><span class="text">I</span><span class="text">'</span><span class="text">m</span> <span class="text">C</span><span class="text">b</span><span class="text">a</span><span class="text">z</span><span class="text">i</span><span class="text">l</span><span class="text">,</span></h1><h1><span class="text">W</span><span class="text">e</span><span class="text">b</span> <span class="text">D</span><span class="text">e</span><span class="text">v</span><span class="text">e</span><span class="text">l</span><span class="text">o</span><span class="text">p</span><span class="text">e</span><span class="text">r</span><span class="text">.</span></h1></div>
            <h5 style="display: flex; justify-content: end;">&lt;/h1&gt;</h5>
          </div>
          <div id="header2-div">
            <h5>&lt;h2&gt;</h5>
              <div id="header2"><h2>Fullstack Developer / Freelancer</h2></div>
            <h5 style="display: flex; justify-content: end; margin-top: 34px !important;">&lt;/h2&gt;</h5>
          </div>
          <div id="hire-container">
            <div class="home-btns">
              <h6>&lt;q-btn&gt;</h6>
              <q-btn class="hire-btns" size="15px" id="hire-btn" outline>Hire me!</q-btn>
              <h6 style="display: flex; justify-content: end;">&lt;/q-btn&gt;</h6>
            </div>
            <div class="home-btns">
              <h6>&lt;q-btn&gt;</h6>
              <q-btn class="hire-btns" size="15px" id="cv-download" outline>Download CV Document</q-btn>
              <h6 style="display: flex; justify-content: end;">&lt;/q-btn&gt;</h6>
            </div>
          </div>
        </div>
        <div id="home-container2">
          <tic-tac-toe />
        </div>
      </div>
      <br>
      <!-- <div id="illustration">
        <img src="../assets/cherry.png" alt="illustration" />
      </div> -->
      <!-- <div id="illustration-2">
        <img src="../assets/cherry-man.png" alt="illustration-2" />
      </div> -->
      <h5 class="closing-t">&nbsp;&nbsp;&lt;/body&gt;</h5>
      <h5>&lt;/html&gt;</h5>
    </PageContainer>
  </span>
</template>

<script>
import TicTacToe from '@/components/TicTacToe.vue'
import PageContainer from '@/components/Slots/PageContainer.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    PageContainer,
    TicTacToe
  },
  setup() {

    const router = useRouter()

    const navAbout = () => {
      router.push('/about')
    }

    const navScroll = (e) => {
      if (e.deltaY > 0) {
        router.push('/about')
      }
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })

    return {
      navAbout,
      navScroll,
      container
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
$dark: #2b2c2e;
$grey: #353639;
$green: #7ed957;
$blue: #5271ff;

#home {
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
}

h5 {
  color: $blue;
  font-family: 'Caveat', cursive;
  font-size: 14px;
  line-height: 0px !important;
  margin: 0 0 35px 0;
}

h6 {
  color: $blue;
  font-family: 'Caveat', cursive;
  font-size: 11px;
  line-height: 0px !important;
}

#illustration {
  top: 20px;
  left: 480px;
  width: 100%;
  position: absolute;
  display: flex;
  // justify-content: center;
  img {
    width: 360px;
  }
}

#illustration-2 {
  top: 400px;
  left: 720px;
  width: 100%;
  position: absolute;
  display: flex;
  // justify-content: center;
  img {
    width: 360px;
  }
}

#home-container {
  display: flex;
  margin: 0 25px;
  width: 100%;
  #home-container1 {
    #header1-div {
      width: 700px;
    }
    #header2-div {
      width: 720px;
    }
    width: 60%;
    #heading1, #header2 {
      margin-top: -20px;
      margin-left: 20px; 
      margin-bottom: -25px; 
    }
    #header2 {
      margin: -35px 12px !important;
    }
    .hire-btns {
      margin: 10px;
      padding: 5px 40px;
      color: $green;
      font-family: 'Montserrat Alternates', sans-serif;
      font-size: 24px;
    }
    #hire-container {
      display: flex;
      margin-top: -15px;
      h6 {
        margin: 10px;
      }
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
  #home-container2 {
    width: 40%;
  }
}

#home:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

// laptop responsiveness 1 
@media (max-width: 1440px) {
  h5 {
    font-size: 14px;
    margin: 0 0 26px 0;
  }
  h6 {
    font-size: 11px;
  }
  #home-container {
    #home-container1 {
      #header1-div {
        width: 600px;
      }
      #header2-div {
        width: 560px;
      }
    }
  }
}

// Laptop responsiveness 2
@media (max-width: 1280px) {
  #home-container {
    #home-container1 {
      #header1-div {
        width: 520px;
      }
    }
  }
}

// Laptop responsiveness 3
@media (max-width: 1140px) {
  #home-container {
    margin-bottom: 40px;
    #home-container1 {
      width: 55%;
      #header1-div {
        width: 500px;
      }
      #header2-div {
        width: 462px;
      }
    }
    #home-container2 {
      width: 45%;
    }
  }
}

// Laptop responsiveness 4
@media (max-width: 973px) {
  #home-container {
    margin-bottom: 55px;
    #home-container1 {
      .hire-btns {
        padding: 5px 20px;
      }
      #header1-div {
        width: 445px;
      }
       #header2-div {
        width: 440px;
      }
    }
  }
}

// Tablet
@media (max-width: 830px) {
  #home {
    margin: -40px 10px 100px 10px;
    overflow-y: scroll;
    #home-container {
      display: block !important;
      width: 100% !important;
      #home-container1 {
        width: 100%;
        display: block !important;
         #header1-div {
          width: 520px;
        }
        #header2-div {
          width: 500px;
        }
      }
      #home-container2 {
        z-index: 99999;
        margin: 50px auto 100px auto;
        height: 440px;
        width: 100% !important;
        display: flex !important;
        justify-content: center;
      }
    }
    .closing-t {
      margin-top: -75px !important;
    }
  }
}

// Mobile 3
@media (max-width: 562px) {
  #home {
    #home-container {
      #home-container1 {
        #header1-div {
          width: 400px;
        }
        #header2-div {
          width: 400px;
        }
      }
      #home-container2 {
        margin-left: -20px;
      }
    }
  }
}

// Mobile 2
@media (max-width: 426px) {
  #home {
    #home-container {
      #home-container1 {
        #header1-div {
          width: 340px;
        }
        #header2-div {
          width: 335px;
        }
        #hire-container{
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      }
      #home-container2 {
        margin-left: 0px;
      }
    }
  }
}

// Mobile 1
@media (max-width: 320px) {
  #home {
    h5 {
      font-size: 14px;
      margin: 0 0 18px 0 !important;
      line-height: 14px;
    }
    h6 {
      font-size: 12px;
      margin: 0px !important;
    }
    #home-container {
      #home-container1 {
        .hire-btns {
          font-size: 12px !important;
        }
        #header1-div {
          margin: 0 -5px;
          width: 265px;
          #heading1 {
            margin: -10px 20px -15px 10px;
          }
        }
        #header2-div {
          width: 262px;
          margin-left: -5px !important;
          #header2 {
            margin-left: 5px !important;
          }
        }
      }
    }
  }
}

</style>