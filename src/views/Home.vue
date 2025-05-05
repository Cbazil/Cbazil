<template>
  <span id="home" ref="container" :class="{hide_scroll: showCard}" @keyup.down="navAbout" @wheel="navScroll($event)" tabindex="0">
    <PageContainer> 
      <div id="home-container">
        <div id="home-container1">
          <div id="header1-div">
            <h5>&lt;h1&gt;</h5>
            <div id="heading1"><h1><span class="text">H</span><span class="text">i</span><span class="text">,</span></h1><h1><span class="text">I</span><span class="text">'</span><span class="text">m</span> <span class="text">C</span><span class="text">b</span><span class="text">a</span><span class="text">z</span><span class="text">i</span><span class="text">l</span><span class="text">,</span></h1><h1><span class="text">W</span><span class="text">e</span><span class="text">b</span> <span class="text">D</span><span class="text">e</span><span class="text">v</span><span class="text">e</span><span class="text">l</span><span class="text">o</span><span class="text">p</span><span class="text">e</span><span class="text">r</span><span class="text">.</span></h1></div>
            <h5 style="display: flex; justify-content: flex-end;">&lt;/h1&gt;</h5>
          </div>
          <div id="header2-div">
            <h5>&lt;Profession&gt;</h5>
              <div id="header2">
                <h2>Fullstack Developer / Freelancer</h2>
              </div>
            <h5 style="display: flex; justify-content: flex-end;">&lt;/Profession&gt;</h5>
          </div>
          <div id="hire-container">
            <div class="home-btns">
              <h6>&lt;q-btn&gt;</h6>
              <q-btn class="hire-btns" @click.prevent="toggleCard" size="15px" id="hire-btn" outline>Hire me!</q-btn>
              <h6 style="display: flex; justify-content: flex-end;">&lt;/q-btn&gt;</h6>
            </div>
            <div class="home-btns">
              <h6>&lt;q-btn&gt;</h6>
              <a style="text-decoration: none;" download="Curriculum Vitae of Chad Bosch" href="/assets/resume.pdf">
                <q-btn class="hire-btns" size="15px" id="cv-download" outline>Download CV Document</q-btn>
              </a>
              <h6 style="display: flex; justify-content: flex-end;">&lt;/q-btn&gt;</h6>
            </div>
          </div>
        </div>
        <div id="home-container2">
          <tic-tac-toe />
        </div>
      </div>
    </PageContainer>
    <div id="contact-card" v-if="showCard" @click="handleCloseForm($event)">
      <q-card flat bordered>
        <!-- <q-img
          id="business-card"
          :src="require('../assets/contact.png')"
        /> -->
        <form id="business-card" ref="emailForm" action="https://formsubmit.co/fbf3d3a0b2807b99bc5b96e2fcbb5f50" method="POST">
          <div class="c-forms">
            <img src="../assets/email.png" width="80" height="80" alt="Email logo" >
          </div>
          <div class="c-forms">
            <h3 class="e-title">Get in touch</h3>
          </div>
          <div class="c-forms">
            <input type="text" placeholder="Name" standout class="c-input" name="name" dense outlined required />
            <input type="text" placeholder="Surname" class="c-input" dense outlined />
          </div>
          <div class="c-forms c-form-2">
            <input type="email" placeholder="Email" class="c-input" name="email" dense  outlined required />
            <input type="title" placeholder="Title" class="c-input" name="_subject" dense  outlined required />
          </div>
          <div class="c-forms">
            <textarea rows="3" name="message" class="c-t-area" placeholder="Message"></textarea>
          </div>
          <div class="r-forms">
            <div class="r-btn">
              <q-btn outline color="grey" style="margin-right: 10px;" @click="handleCloseForm($event)">Cancel</q-btn> 
              <q-btn outline color="green" type="submit">Send</q-btn> 
            </div>
          </div>
        </form>
      </q-card>
    </div>
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
  methods: {
    async downloadFile() {
      let response = await this.$http.get("../../public/resume.pdf", {
        responseType: "arraybuffer",
      });
      let blob = new Blob([response.data], { type: "application/pdf" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "resume.pdf";
      link.click();
    }
  },
  setup() {

    const router = useRouter()

    const emailForm = ref()

    const showCard = ref(false)

    const container = ref(null)

    const windowWidth = ref(window.innerWidth);

    const handleCloseForm = (event) => {
      if (event.target.id == "contact-card" || event.target.innerText == 'CANCEL') {
        showCard.value = false
      }
    }
    const toggleCard = () => {
      showCard.value = !showCard.value
    }

    const navAbout = () => {
      router.push('/about')
    }

    const navScroll = (e) => {
      if (windowWidth > 830) {
        if (e.deltaY > 0) {
          router.push('/about')
        }
      }
    }
    

    onMounted(() => {
      container.value.focus()
    })

    return {
      navAbout,
      navScroll,
      container,
      showCard,
      toggleCard,
      emailForm,
      handleCloseForm
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
$dark: #201f23;
$grey: #2b2c2e;
$green: #7ed957;
$blue: #5271ff;

#home {
  width: 100vw;
  height: 100%;
  position: relative;
  z-index: 0;
  display: flex;
  #contact-card {
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
    position: absolute !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: -34px;
    position: relative;
    display: flex;
    justify-content: center;
    #business-card {
      background: #2b2c2e;
      padding: 25px;
      cursor: default;
      width: 620px;
      height: 400px;
      display: block;
      .c-form-2 {
        margin-top: -4px !important;
      }
      .c-forms {
        margin: 0 22px;
        display: flex;
        justify-content: space-around;
        .e-title {
          margin: 0px !important;
          margin-top: -6px !important;
          margin-bottom: 2px !important; 
        }
        .c-t-area {
          position: relative;
          box-shadow: none;
          width: 100%;
          margin: 0 4px;
          color: #ffffff;
          background-color: #2b2c2e;
          border-color: #ffffff !important;
        }
        .c-input {
          box-shadow: none;
          width: 100%;
          height: 35px;
          margin: 4px;
          box-sizing: border-box;
          background-color: #2b2c2e;
          border-color: #ffffff !important;
          // border-radius: 2%;
          padding: 5px; 
          border: 1px solid #fff;
          color: #ffffff !important;
          margin-bottom: 12px;
        }
      }
      .r-forms {
        margin: 0 24px;
        display: flex;
        cursor: pointer;
        justify-content: space-around;
        .r-btn {
          height: 35px !important;
          position: relative;
          width: 100%;
          margin-top: 10px;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
}

.hide_scroll {
  overflow-y: hidden !important;
}

h5 {
  color: $blue;
  font-family: 'Caveat', cursive;
  font-size: 14px;
  line-height: 0px !important;
  margin: 0 0 15px 0;
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
      width: 640px;
    }
    #header2-div {
      width: 670px;
      h2 {
        font-size: 48px;
        margin: 25px;
      }
    }
    width: 60%;
    #heading1, #header2 {
      margin: 20px;
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

// larger laptops
@media (min-width: 1580px) {
  #home {
    #contact-card {
      #business-card {
         width: 900px;
         height: 420px;
      }
    }
    #home-container {
      margin-bottom: 20px;
      #home-container1 {
        .hire-btns {
          font-size: 20px !important;
        }
        #header1-div {
          width: 900px;
        }
        #header2-div {
          width: 880px;
          h2 {
            line-height: 80px;
            margin: 35px 20px;
          }
        }
        #header2 {
          margin: -15px 12px !important;
        }
      }
    }
  }
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
        h2 {
          font-size: 38px;
          line-height: 62px;
        }
      }
      #header2-div {
        width: 580px;
      }
      .home-btns {
        margin-top: 22px;
      }
    }
  }
}

// Laptop responsiveness 2
@media (max-width: 1280px) {
  #home {
    #home-container {
      #home-container1 {
        width: 60%;
        #header1-div {
          width: 520px;
        }
      }
    }
  }
}

// Laptop responsiveness 3
@media (max-width: 1140px) {
  #home {
    #home-container {
      margin-bottom: 5px;
      #home-container1 {
        #header1-div {
          width: 500px;
        }
        #header2-div {
          width: 520px;
        }
      }
      #home-container2 {
        display: flex;
        justify-content: center;
        width: 45%;
      }
    }
  }
}

// Laptop responsiveness 4
@media (max-width: 1020px) {
  #home {
    #home-container {
      margin-bottom: 55px;
      #home-container1 {
        #header1-div {
          width: 450px;
        }
         #header2-div {
          width: 460px;
        }
        .hire-btns {
          padding: 5px 20px;
        }
      }
    }
  }
}

// Tablet
@media (max-width: 830px) {
  #home {
    padding-top: 50px;
    padding-bottom: 50px;
    height: calc(100svh - 60px);
    overflow-y: scroll;
    #contact-card {
      padding: 0 !important;
      margin-left: 0px !important;
      width: 100% !important;
      #business-card {
        width: 480px;
      }
    }
    // .container-slot {
    //   height: 1280px;
    // }
    #home-container {
      padding-top: 60px;
      display: flex;
      flex-direction: column;
      width: 100%;
      #home-container1 {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
         #header1-div {
          width: 520px;
        }
        
        #header2-div {
          margin: 20px 0;
          width: 540px;
        }
      }
      #home-container2 {
        // position: relative;
        margin: 50px auto 60px auto !important;
        width: 100% !important;
        display: flex !important;
        justify-content: center;
      }
    }
    .closing-tags {
      margin: 20px 0px !important;
      height: 75px !important;
    }
  }
}

// Mobile 3
@media (max-width: 562px) {
  #home {
    padding-top: 25px;
    // padding-bottom: 50px;
    #contact-card {
      width: 100vw;
      overflow: none;
      #business-card {
        width: 320px;
      }
    }
    .container-slot {
      height: 1260px !important;
    }
    #home-container {
      #home-container1 {
        margin-top: 20px !important;
        #header1-div {
          width: 400px;
        }
        #header2-div {
          width: 400px;
          h2 {
            margin: 0;
          }
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
    margin: 0 !important;
    h5 {
      font-size: 18px;
      margin: 0 0 18px 0 !important;
      line-height: 18px;
    }
    h6 {
      font-size: 16px;
      margin: 0px !important;
    }
    #home-container {
      #home-container1 {
        margin-top: 445px;
        #header1-div {
          width: 340px;
          #heading1 {
            margin: 20px 20px 0 10px !important;
          }
        }
        #header2-div {
          width: 335px;
          margin-top: 25px;
          // #header2 {
          //   margin-left: 0px !important;
          //   margin-top: -20px !important;
          //   margin-bottom: -20px !important;
          //   // padding: 40px -5px;
          // }
        }
        #hire-container{
          display: flex;
          align-items: center;
          margin: 50px 0px 100px 0px;
          justify-content: space-between;
          height: 150px;
          // padding: 25px 0px;
          flex-direction: column;
        }
      }
      #home-container2 {
        margin: 50px auto 20px auto !important;
      }
    }
  }
}

// Mobile 1
@media (max-width: 376px) {
  #home {
    #home-container {
      #home-container1 {
        .hire-btns {
          font-size: 12px !important;
        }
        .home-btns {
          margin: 20px 0px;
        }
        #header1-div {
          margin: 0 -5px;
          width: 260px;
          #heading1 {
            margin: -10px 10px -15px 10px;
          }
        }
        #header2-div {
          width: 262px;
          margin-left: -5px !important;
        }
      }
    }
    .closing-tags {
      margin-top: -30px !important;
    }
  }
}

</style>