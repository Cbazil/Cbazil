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
            <h5 style="display: flex; justify-content: end; margin-top: 34px !important;">&lt;/h1&gt;</h5>
          </div>
          <div id="header2-div">
            <h5>&lt;h2&gt;</h5>
            <h3>Fullstack Javascript developer, develops web apps using Javascript and NodeJS framework/libraries.</h3>
            <h5 style="display: flex; justify-content: end; ">&lt;/h2&gt;</h5>
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
            <h5 style="display: flex; justify-content: end;  margin-top: 25px !important;">&lt;/Skills&gt;</h5>
          </div>
        </div>
        <div id="skill-container2">
          <Tools />
        </div>
      </div>
      <h5>&nbsp;&nbsp;&lt;/body&gt;</h5>
      <h5>&lt;/html&gt;</h5>
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
      width: 90%;
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
      width: 100%; 
    }
    .skill {
      width: 95%;
      display: flex;
      padding-left: 15px;
      margin: 0;
      height: 20px;
      margin-top: 40px;
      .skill-name {
        width: 20%;
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
        width: 80%;
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
</style>