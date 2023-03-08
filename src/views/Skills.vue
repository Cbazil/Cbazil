<template>
  <div id="skills" ref="container" @keyup.up="navAbout" @keyup.down="navExp" @wheel="navScroll($event)" tabindex="0">
    <PageContainer>
      <br>
      <br>
      <br>
      <h5>&lt;html&gt;</h5>
      <h5>&nbsp;&nbsp;&lt;body&gt;</h5>
      <div id="skills-container">
        <div id="skills-container1">
          <div id="header1-div">
            <h5>&lt;h1&gt;</h5>
            <h1>Skills & Stacks</h1>
            <h5 style="display: flex; justify-content: flex-end; margin-top: 34px !important;">&lt;/h1&gt;</h5>
          </div>
          <div id="header2-div">
            <h5>&lt;h2&gt;</h5>
            <h3>Fullstack Javascript developer, develops web apps using Javascript and NodeJS framework/libraries.</h3>
            <h5 style="display: flex; justify-content: flex-end; ">&lt;/h2&gt;</h5>
          </div>
          <div id="skills-div">
            <h5>&lt;Skills&gt;</h5>
            <div class="skill">
              <div class="skill-name">
                <h4>Javascript</h4>
              </div>
              <div class="skill-bar">
                <div class="js-lvl"></div>
              </div>
            </div>
            <div class="skill">
              <div class="skill-name">
                <h4>SQL</h4>
              </div>
              <div class="skill-bar">
                <div class="sql-lvl"></div>
              </div>
            </div>
            <div class="skill">
              <div class="skill-name">
                <h4>C#</h4>
              </div>
              <div class="skill-bar">
                <div class="csharp-lvl"></div>
              </div>
            </div>
            <div class="skill">
              <div class="skill-name">
                <h4>Design</h4>
              </div>
              <div class="skill-bar">
                <div class="design-lvl"></div>
              </div>
            </div>
            <h5 style="display: flex; justify-content: flex-end;  margin-top: 25px !important;">&lt;/Skills&gt;</h5>
          </div>
        </div>
        <div id="skills-container2">
          <Tools />
        </div>
      </div>
      <div class="closing-tags">
        <h5>&nbsp;&nbsp;&lt;/body&gt;</h5>
        <h5>&lt;/html&gt;</h5>
      </div>
    </PageContainer>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Tools from '../components/Tools.vue'
import PageContainer from '@/components/Slots/PageContainer.vue'
export default {
  components: { 
    PageContainer,
    Tools
  },
  setup () {
    const router = useRouter()

    const navAbout = () => {
      router.push('/about')
    }

    const navExp = () => {
      router.push('/experience')
    }

    const navScroll = (e) => {
      if (e.deltaY < 0) {
        router.push('/about')
      }
      if (e.deltaY > 0) {
        router.push('/experience')
      }
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })

    return { container, navAbout, navExp, navScroll }
  }
}
</script>
<style lang="scss" scoped>
$green: #7ed957;
$blue: #5271ff;

#skills {
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
}

#skills-container {
  display: flex;
  margin: 0px 15px;
  width: 100%;
  #skills-container1 {
    padding: 0px 25px;
    width: 45%;
    color: #fff;
   #header1-div {
      width: 480px;
      h1 {
        font-size: 65px !important;
        margin: -15px 25px;
      }
    }
    #header2-div {
      width: 580px;
      h3 {
        margin: -15px 0;
        padding: 0 20px;
      }
      h5 {
        margin: 15px 0;
        font-weight: 10px;
      }
    }
    #skills-div {
      width: 560px;
    }
    .skill {
      width: 520px;
      display: flex;
      padding-left: 35px;
      margin: 0;
      height: 20px;
      margin-top: 40px;
      .skill-name {
        width: 25%;
        h4 {
          font-size: 18px;
          margin: 0;
          padding: 0;
          line-height: 20px;
          font-weight: 5px;
          height: 14px;
        }
      }
      .skill-bar {
        background: $blue;
        width: 75%;
      }
      .js-lvl {
        background: $green !important; 
        width: 90%;
        height: 100% !important;
      }
      .sql-lvl {
        background: $green !important; 
        width: 70%;
        height: 100% !important;
      }
      .csharp-lvl {
        width: 35%;
        background: $green !important; 
        height: 100% !important;
      }
      .design-lvl {
        width: 70%;
        background: $green !important;
        height: 100% !important;
      }
    }
  }
  #skill-container2 {
    width: 55%;
    margin: 40px 80px;
  }
}

#skills:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

// larger laptops
@media (min-width: 1580px) {
  #skills {
    #skills-container {
      margin-bottom: 24px;
     h3 {
        font-size: 30px !important;
        line-height: 42px;
      }
     #skills-container1 {
        #header1-div {
          width: 594px;
          h1 {
            font-size: 84px !important;
          }
        }
        #header2-div {
          width: 740px;
        }
        #skills-div {
          margin-top: 60px;
          width: 740px;
        }
        .skill {
          width: 720px;
          height: 34px;
          margin-top: 50px;
          h4 {
            margin-top: 6px;
            font-size: 26px;
          }
        }
      }
    }
  }
}


// laptop responsiveness 1 
@media (max-width: 1440px) {
  #skills {
    #skills-container {
      margin-left: 0px;
      h3 {
        font-size: 22px;
        line-height: 32px;
        margin: 5px 0px -10px 0px !important;
      }
      #skills-container1 {
        width: 38%;
        #skills-div {
          margin-top: 30px;
          .skill {
            margin-top: 20px;
          }
        }
        #header1-div {
          h1 {
            margin-top: 15px; 
          }
        }
      }
      #skills-container2 {
        width: 62%;
        margin: auto 0px;
      }
    }
  }
}
// Laptop responsiveness 2
@media (max-width: 1280px) {
  #skills {
    #skills-container {
      #header2-div {
        width: 480px;
      }
      #skills-div {
        width: 485px;
      }
      .skill {
        width: 455px;
      }
    }
  }
}


// Laptop responsiveness 3
@media (max-width: 1180px) {
  #skills {
    #skills-container {
      #skills-container1 {
        width: 40% !important;
        #header1-div {
          width: 350px !important;
          h1 {
            font-size: 45px !important;
          }
        }
        #header2-div {
          width: 400px;
          h3 {
            font-size: 20px !important;
            line-height: 25px;
          }
        }
        #skills-div {
          width: 400px;
        }
        .skill {
          width: 390px;
        }
      }
      #skills-container2 {
        width: 60% !important;
      }
    }
  }
}

// Laptop responsiveness 4
@media (max-width: 1040px) {
  #skills {
    #skills-container {
      #skills-container1 {
        #header1-div {
           width: 320px !important;
          h1 {
            font-size: 40px !important;
          }
        }
        #header2-div {
          width: 340px;
        }
        #skills-div {
          width: 360px;
        }
        .skill {
          width: 340px;
          .skill-name {
            h4 {
              font-size: 16px;
              margin-left: -15px;
            }
          }
        }
      }
    }
  }
}

// Tablet
@media (max-width: 830px) {
  #skills {
    margin: -40px 10px 0px 10px !important;
    overflow-y: scroll;
    #skills-container {
      width: 100% !important;
      display: block !important;
      #skills-container1 {
        margin-bottom: 70px !important;
        width: 100% !important;
        display: block !important;
        #header1-div {
          width: 480px !important;
          h1 {
            font-size: 65px !important;
            margin: 5px 25px;
          }
        }
        #header2-div {
          width: 580px !important;
          h3 {
            margin: -15px 0;
            padding: 0 20px;
          }
          h5 {
            margin: 15px 0;
            font-weight: 10px;
          }
        }
        #skills-div {
          width: 560px !important;
          .skill {
            width: 540px !important;
            .skill-name {
              h4 {
                font-size: 18px;
                margin-left: 0px;
              }
            }
          }
        }
      }
      #skills-container2 {
        width: 100% !important;
        display: block !important;
      }
    }
    .closing-tags {
      margin: 10px 0px !important;
      height: 70px !important;
    }
  }
}

// Tablet 2
@media (max-width: 740px) {
  #skills {
    #skills-container {
      #skills-container1 {
         #header1-div {
          width: 460px !important;
          h1 {
            font-size: 62px !important;
            margin: 5px 22px;
          }
        }
      }
    }
  }
}

// Tablet 3
@media (max-width: 660px) {
  #skills {
    #skills-container {
      #skills-container1 {
        #header2-div {
          width: 480px !important;
        }
         #skills-div {
          width: 500px !important;
          .skill {
            width: 480px !important;
          }
         }
      }
    }
  }
}

// Tablet 4
@media (max-width: 580px) {
  #skills {
    #skills-container {
      #skills-container1 {
        #header1-div {
          width: 420px !important;
          h1 {
            font-size: 58px !important;
            margin: 5px 18px;
          }
        }
        #header2-div {
          width: 420px !important;
        }
        #skills-div {
          width: 430px !important;
          .skill {
            width: 410px !important;
          }
        }
      }
    }
  }
}

// Mobile 3
@media (max-width: 490px) {
  #skills {
    #skills-container {
      #skills-container1 {
        #header1-div {
          width: 360px !important;
          h1 {
            font-size: 50px !important;
            margin: -5px 12px;
          }
        }
        #header2-div {
          width: 360px !important;
        }
        #skills-div {
          width: 360px !important;
          .skill {
            width: 340px !important;
            .skill-name {
              h4 {
                font-size: 14px;
              }  
            }
          }
        }
      }
    }
  }
}

// Mobile 2
@media (max-width: 426px) {
  #skills {
    h5 {
      font-size: 18px;
      margin: 0 0 18px 0 !important;
      line-height: 18px;
    }
    h6 {
      font-size: 16px;
      margin: 0px !important;
    }
    #skills-container {
      #skills-container1 {
        #header1-div {
          width: 300px !important;
          h1 {
            font-size: 42px !important;
            margin: 5px 10px -10px 10px !important;
          }
        }
        #header2-div {
          width: 320px !important;
          h3 {
            font-size: 18px !important;
            line-height: 22px;
          }
        }
        #skills-div {
          width: 325px !important;
          .skill {
            height: 16px !important;
            width: 300px !important;
            .skill-name {
              width: 35%;
              h4 {
                font-size: 14px;
              }  
            }
          }
        }
      }
    }
  }
}

// Mobile 1
@media (max-width: 376px) {
  #skills {
    #skills-container {
      #skills-container1 {
        #header1-div {
          margin-left: -5px !important;
          width: 280px !important;
          h1 {
            font-size: 38px !important;
            margin: -5px 15px -20px 15px !important;
          }
        }
        #header2-div {
          width: 270px !important;
          h3 {
            font-size: 18px !important;
            margin: -5px -10px 15px 0px !important;
            line-height: 22px;
          }
        }
        #skills-div {
          width: 270px !important;
          margin-left: 20px;
          .skill {
            height: 16px !important;
            width: 260px !important;
            .skill-name {
              width: 40%;
              h4 {
                font-size: 13px;
              }  
            }
          }
        }
      }
    }
  }
}
</style>