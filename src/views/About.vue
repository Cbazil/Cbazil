<template>
  <span id="about" ref="container" @keyup.up="navHome" @keyup.down="navSkills" @wheel="navScroll($event)" tabindex="0">
    <PageContainer>
      <div id="about-container">
        <div id="about-container1">
          <div id="header1-div">
            <h5>&lt;title&gt;</h5>
            <h1>About me</h1>
            <h5 style="display: flex; justify-content: flex-end;">&lt;/title&gt;</h5>
          </div>
          <div id="header2-div">
            <h3>I am Chad Bazil Bosch (Developer, Gamer & Otaku). I love creating things aswell as solving problems, my interest in computer science and math has always been a big passion and driver of mine. I'm a Full Stack developer, my preferred language is Javascript. I would ideally always like to work on applications, game scripting, and producing innovative ideas.</h3>
          </div>
          <br>
          <div id="hobbies-div">
            <h5>&lt;Hobbies&gt;</h5>
            <div id="hobbies">
              <div class="hobby" >Video Games</div>
              <div class="hobby" >Card/Board Games</div>
              <div class="hobby" >Anime</div>
              <div class="hobby" >Manga/Comics</div>
              <div class="hobby" >Listening to Music</div>
            </div>
            <h5 style="display: flex; justify-content: flex-end; margin-top: 15px !important;">&lt;/Hobbies&gt;</h5>
          </div>
        </div>
         <div id="about-container2">
          <tic-tac-toe />
        </div>
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
    
    const windowWidth = ref(window.innerWidth);

    const navScroll = (e) => {
      if (windowWidth > 830) {
        if (e.deltaY < 0) {
          router.push('/')
        }
        if (e.deltaY > 0) {
          router.push('/skills')
        }
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
  height: 100%;
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
      width: 365px;
      h1 {
        margin: 30px !important;
      }
    }
    #header2-div {
      width: 90%;
      h3 {
        margin: 25px;
      }
      h5 {
        margin: 15px 0;
        font-weight: 10px;
      }
    }
    #hobbies-div {
      width: 680px;
      #hobbies {
        display: flex;
        flex-direction: row;
        margin: 25px;
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

// larger laptops
@media (min-width: 1580px) {
  #about {
    #about-container {
      margin-bottom: 12px;
      #about-container1 {
        #header1-div {
          width: 420px;
          h1 {
            font-size: 84px !important;
          }
        }
        #header2-div {
          width: 880px !important;
          h3 {
            font-size: 34px !important;
            line-height: 46px;
          }
        }
        #hobbies-div {
          margin-top: 50px;
          width: 880px;
          #hobbies {
            .hobby {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}

// laptop responsiveness 1 
@media (max-width: 1440px) {
  #about {
    #about-container {
      #about-container1 {
        #header2-div {
          width: 680px;
          h3 {
            font-size: 20px !important;
            line-height: 24px !important;
            margin: 10px 0 15px 0;
          }
        }
        #hobbies-div {
          width: 620px;
           #hobbies {
             margin-top: -12px;
             margin-bottom: 10px;
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
            margin: 4px 25px;
          }
        }
        #header2-div {
          width: 630px;
          h3 {
            font-size: 16px;
            line-height: 22px;
          }
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
  #about {
    #about-container {
      #about-container1 {
        width: 62%;
        #header2-div {
          width: 520px;
          h3 {
            font-size: 18px;
            line-height: 26px;
          }
        }
        #hobbies-div {
          width: 550px;
          #hobbies {
            .hobby {
                padding: 5px;
                margin: 4px;
            }
          }
        }
      }
      #about-container2 {
        display: flex;
        justify-content: center;
        width: 40%;
        // width: 38%;
      }
    }
  }
}

// Laptop responsiveness 4
@media (max-width: 973px) {
  #about {
    #about-container {
      #about-container1 {
        #header2-div {
          width: 460px !important;
          h3 {
            line-height: 22px !important;
          }
        }
        #hobbies-div {
          width: 500px;
          #hobbies {
            display: flex;
            flex-wrap: wrap;
          }
        }
      }
    }
  }
}

// Tablet
@media (max-width: 830px) {
  #about {
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 100px;
    padding-bottom: 150px; 
    height: calc(100vh - 60px);
    #about-container {
      // display: block;
      display: flex;
      flex-direction: column;
      width: 100%;
      #about-container1 {
        width: 100% !important;
        // display: block !important;
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
    // padding-top: 260px;
    // padding-bottom: 150px;
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
    padding-top: 145px;
    #about-container {
      margin-top: 25px;
    }
    #about-container {
      #about-container1 {
        #header1-div {
          width: 280px !important;
          h1 {
            font-size: 58px !important;
            margin: 18px !important;
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
            // margin: -5px 15px -10px 15px;
          }
        }
        #hobbies {
          margin: 0;
          margin-left: 10px;
          margin-top: 20px !important;
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
            font-size: 36px !important;
            // margin: -5px 15px -18px 15px !important;
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

