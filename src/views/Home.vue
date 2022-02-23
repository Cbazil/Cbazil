<template>
  <span id="home" ref="container" @keyup.down="navAbout" @wheel="navScroll($event)" tabindex="0">
    <PageContainer> 
      <h5>&lt;html&gt;</h5>
      <h5>&nbsp;&nbsp;&lt;body&gt;</h5>
      <div id="home-container">
        <div id="home-container1">
          <h5>&lt;h1&gt;</h5>
            <div id="heading1"><h1><span class="text">H</span><span class="text">i</span><span class="text">,</span></h1><h1><span class="text">I</span><span class="text">'</span><span class="text">m</span> <span class="text">C</span><span class="text">b</span><span class="text">a</span><span class="text">z</span><span class="text">i</span><span class="text">l</span><span class="text">,</span></h1><h1><span class="text">W</span><span class="text">e</span><span class="text">b</span> <span class="text">D</span><span class="text">e</span><span class="text">v</span><span class="text">e</span><span class="text">l</span><span class="text">o</span><span class="text">p</span><span class="text">e</span><span class="text">r</span><span class="text">.</span></h1></div>
          <h5>&lt;/h1&gt;</h5>
          <h5>&lt;h2&gt;</h5>
            <div id="header2"><h2>Fullstack Developer / Freelancer</h2></div>
          <h5>&lt;/h2&gt;</h5>
          <div id="hire-container">
            <div>
              <h6>&lt;q-btn&gt;</h6>
              <q-btn class="hire-btns" size="15px" id="hire-btn" outline>Hire me!</q-btn>
              <h6 style="display: flex; justify-content: end;">&lt;/q-btn&gt;</h6>
            </div>
            <div>
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
      <h5>&nbsp;&nbsp;&lt;/body&gt;</h5>
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
  font-size: 16px;
  line-height: 0px !important;
}

h6 {
  color: $blue;
  font-family: 'Caveat', cursive;
  font-size: 11px;
  line-height: 0px !important;
}

#home-container {
  display: flex;
  margin: -35px 40px;
  width: 100%;
  #home-container1 {
    width: 60%;
    #heading1, #header2 {
      margin-top: -20px;
      margin-left: 20px; 
      margin-bottom: -25px; 
    }
    #header2 {
      margin: -35px 5px !important;
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
</style>