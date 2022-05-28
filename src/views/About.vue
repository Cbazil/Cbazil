<template>
  <span id="about" ref="container" @keyup.up="navHome" @keyup.down="navSkills" @wheel="navScroll($event)" tabindex="0">
    <PageContainer>
      <br>
      <br>
      <br>
      <h5>&lt;html&gt;</h5>
      <h5>&nbsp;&nbsp;&lt;body&gt;</h5>
      <div id="about-container">
        <div id="about-container1">
          <div id="header1-div">
            <h5>&lt;h1&gt;</h5>
            <h1 id="heading1">About me</h1>
            <h5 style="display: flex; justify-content: end; margin-top: 34px !important;">&lt;/h1&gt;</h5>
          </div>
          <div id="header2-div">
            <h5>&lt;h2&gt;</h5>
            <h3>I love creating things aswell as solve problems, my interest in computer science and math has always been a big passion and driver of mine. I enjoy playing video games, reading Manga/Comics, watching anime and discovering new music. I am very goal driven and like discovering new interests as well as learning new things. I'm a honest, trustworthy, reliable, creative and an innovative person. I work well underpressure, I'm able to take initative and have strong leadership qualities.</h3>
            <h5 style="display: flex; justify-content: end;">&lt;/h2&gt;</h5>
          </div>
          <div id="hobbies-div">
            <h5>&lt;Hobbies&gt;</h5>
            <div id="hobbies">
              <div class="hobby" >Video Games</div>
              <div class="hobby" >Card/Board Games</div>
              <div class="hobby" >Anime</div>
              <div class="hobby" >Manga/Comics</div>
              <div class="hobby" >Listening to Music</div>
            </div>
            <h5 style="display: flex; justify-content: end; margin-top: 15px !important;">&lt;/Hobbies&gt;</h5>
          </div>
        </div>
         <div id="about-container2">
          <tic-tac-toe />
        </div>
      </div>
      <div class="closing-tags">
        <h5 class="closing-t">&nbsp;&nbsp;&lt;/body&gt;</h5>
        <h5>&lt;/html&gt;</h5>
      </div>
    </PageContainer>
  </span>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TicTacToe from '@/components/TicTacToe.vue'
import PageContainer from '@/components/Slots/PageContainer.vue'

export default {
  components: {
    TicTacToe,
    PageContainer
  },
  setup () {
    const router = useRouter()

    const navHome = () => {
      router.push('/')
    }

    const navSkills = () => {
      router.push('/skills')
    }

    const navScroll = (e) => {
      if (e.deltaY < 0) {
        router.push('/')
      }
      if (e.deltaY > 0) {
        router.push('/skills')
      }
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })
    return { container, navHome, navSkills, navScroll }
  }
}
</script>
<style lang="scss" scoped>
$green: #7ed957;
$blue: #5271ff;
#about {
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
}

#about-container {
  display: flex;
  margin: 0px 10px;
  width: 100%;
  #about-container1 {
    padding: 0px 10px;   
    width: 60%;
    #header1-div {
      width: 320px;
      h1 {
        font-size: 65px !important;
        margin: -15px 25px;
      }
    }
    #header2-div {
      width: 90%;
      h3 {
        margin: -15px 0;
        padding: 10px 25px;
        line-height: 34px;
      }
      h5 {
        margin: 15px 0;
        font-weight: 10px;
      }
    }
    #hobbies-div {
      width: 760px;
      #hobbies {
        display: flex;
        flex-direction: row;
        margin: -25px 20px -5px 20px;
        .hobby {
          font-size: 17px;
          list-style-type: none;
          padding: 5px 10px;
          margin: 5px;
          border: 2px solid $green;
          color: $green;
          border-radius: 50px;
        }
      }
    }
  }
}
#about:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

// laptop responsiveness 1 
@media (max-width: 1440px) {
  #about {
    #about-container {
      #about-container1 {
        #header2-div {
          width: 680px;
          h3 {
            font-size: 19.67px !important;
            line-height: 30px !important;
            margin: 10px 0 15px 0;
          }
        }
        #hobbies-div {
          width: 680px;
           #hobbies {
             margin-top: -12px !important;
             .hobby {
              font-size: 13px;
             }
           }
        }
      } 
      #about-container2 {
        width: 30%;
      }
    }
  }
}

// Laptop responsiveness 2
@media (max-width: 1280px) {
  #about {
    #about-container {  
      margin-left: 14px;
      #about-container1 {
        #header1-div {
          h1 {
            margin: 5px 25px;
          }
        }
        #header2-div {
          width: 630px;
        }
        #hobbies-div {
          #hobbies {
            .hobby {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
// Laptop responsiveness 3
@media (max-width: 1140px) {
  #about-container {
    #about-container1 {
      width: 62%;
      #header2-div {
        width: 580px; 
         h3 {
          font-size: 18px;
          line-height: 26px !important;
         }
      }
      #hobbies-div {
        width: 560px;
         #hobbies {
           .hobby {
              padding: 5px;
              margin: 4px;
           }
         }
      }
    }
    #about-container2 {
      width: 38%;
    }
  }
}

// Laptop responsiveness 4
@media (max-width: 973px) {
  #about-container {
    #about-container1 {
      #header2-div {
        width: 500px !important;
        h3 {
          line-height: 22px !important;
        }
      }
      #hobbies-div {
        width: 540px;
      }
    }
  }
}

// Tablet
@media (max-width: 830px) {
  #about {
    margin: -40px 10px 0px 10px !important;
    overflow-y: scroll;
    #about-container {
      display: block !important;
      #about-container1 {
        width: 100% !important;
        display: block !important;
        #header2-div {
          width: 100% !important;
          h3 {
            font-size: 26px !important;
            line-height: 28px !important;
          }
        }
        #hobbies-div {
          width: 560px;
          #hobbies {
            .hobby {
              font-size: 12px;
            }
          }
        }
      }
      #about-container2 {
        position: relative;
        margin: 50px auto 80px auto !important;
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

// Table 2 (Hobbies wrap)
@media (max-width: 620px) {
   #about {
    #about-container {
      #about-container1 {
        #hobbies-div {
          width: 460px;
          #hobbies {
            display: flex !important;
            flex-direction: unset !important;
            flex-wrap: wrap !important;
          }
        }
      }
    }
  }
}

// Mobile 3
@media (max-width: 562px) {
  #about {
    #about-container {
      #about-container1 {
        #header1-div {
          width: 280px !important;
          h1 {
            font-size: 58px !important;
            margin: -5px 18px;
          }
        }
        #header2-div {
          h3 {
            font-size: 18px !important;
            line-height: 20px !important;
          }
        }
        #hobbies-div {
          width: 360px !important;
        }
      }
    }
  }
}
// Mobile 2
@media (max-width: 426px) {
  #about {
    h5 {
      font-size: 18px;
      margin: 0 0 18px 0 !important;
      line-height: 18px;
    }
    h6 {
      font-size: 16px;
      margin: 0px !important;
    }
    #about-container {
      #about-container1 {
        #header1-div {
          width: 210px !important;
          h1 {
            font-size: 42px !important;
            margin: -5px 15px -10px 15px;
          }
        }
        #hobbies-div {
          width: 320px !important;
        }
      }
      #about-container2 {
        margin: 50px auto 20px auto !important
      }
    }
    .closing-tags {
      margin: 75px 0px 20px 0px !important;
      height: 75px !important;
    }
  }
}

// Mobile 1
@media (max-width: 376px) {
  #about {
    h5 {
      font-size: 18px;
      margin: 0 0 18px 0 !important;
      line-height: 18px;
    }
    h6 {
      font-size: 16px;
      margin: 0px !important;
    }
    #about-container {
      #about-container1 {
        #header1-div {
          margin: 0px 0px 0px 0px !important;
          width: 190px !important;
          h1 {
            font-size: 38px !important;
            margin: -5px 15px -18px 15px !important;
          }
        }
        #hobbies-div {
          width: 260px !important;
           #hobbies {
             margin-top: -10px !important;
           }
        }
        #header2-div {
          width: 260px !important;
          h3 {
            font-size: 14px !important;
            line-height: 15px !important;
          }
        }
      }
    }
    .closing-tags {
      margin-top: -15px !important;
    }
  }
}
</style>

