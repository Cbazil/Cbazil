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
            <ul>
              <li>Video Games</li>
              <li>Card/Board Games</li>
              <li>Anime</li>
              <li>Manga/Comics</li>
              <li>Listening to Music</li>
            </ul>
            <h5 style="display: flex; justify-content: end; margin-top: 15px !important;">&lt;/Hobbies&gt;</h5>
          </div>
        </div>
         <div id="about-container2">
          <tic-tac-toe />
        </div>
      </div>
      <h5>&nbsp;&nbsp;&lt;/body&gt;</h5>
      <h5>&lt;/html&gt;</h5>
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
  margin: 0px 15px;
  width: 100%;
  #about-container1 {
    padding: 0px 25px;   
    width: 60%;
    #header1-div {
      width: 320px;
      h1 {
        font-size: 65px !important;
        margin: -15px 25px;
      }
    }
    #header2-div {
      width: 92%;
      h3 {
        margin: -15px 0;
        padding: 0 25px;
      }
      h5 {
        margin: 15px 0;
        font-weight: 10px;
      }
    }
    #hobbies-div {
      width: 84%;
      ul {
        display: flex;
        flex-direction: row;
        margin: -20px 40px 10px -14px;
        li {
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
</style>

