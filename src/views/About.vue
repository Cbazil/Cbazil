<template>
  <span id="about" class="containers" ref="container" @keyup.up="navHome" @keyup.down="navSkills" tabindex="0">
    <div id="a-container">
      <h1>About me</h1>
      <h2>I love creating things aswell as solve problems, my interest in computer science and math has always been a big passion and driver of mine. I enjoy playing video games, reading Manga/Comics, watching anime and discovering new music. I am very goal driven and like discovering new interests as well as learning new things. I'm an honest , trustworthy, hardworking, reliable, creative innovative person. I work well underpressure, I'm able to take initative and have strong leadership qualities.</h2>
    </div>
    <div id="g-container">
      <TicTacToe />
    </div>
    <div id="floats">
      <img src="../assets/fire.gif" alt="Fire-GiF">
    </div>
    <img id="arrowtwoBL" width="35" src="../assets/arrowKeys.png" alt="">
    <!-- <img id="arrowCnt" width="35" src="../assets/arrow-down.png" alt=""> -->
    <img id="arrowtwoBR" width="35" src="../assets/arrowKeys.png" alt="">
  </span>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TicTacToe from '@/components/TicTacToe.vue'
export default {
  components: {
    TicTacToe
  },
  setup () {
    const router = useRouter()

    const navHome = () => {
      router.push('/')
    }

    const navSkills = () => {
      router.push('/skills')
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })
    return { container, navHome, navSkills}
  }
}
</script>
<style lang="scss" scoped>
#about {
  position: relative;
  z-index: 0;
  display: flex;
  color: white;
  #a-container {
    margin: 16vh 4vw;
    width: 75%;
    border: none;
    h2 {
      line-height: 24px !important;
      font-size: 24px !important;
    }
  }
  #g-container {
    // background: $green;
    padding-left: 20px;
    width: 100%;
  }
  // img {
  //   width: 200px;
  //   height: 200px;
  // }
  #arrowtwoBL {
    position: fixed;
    left: 65px;
    top: 96vh;
    transform: scaleX(-1) rotate(90deg);
    animation: bounce 1s infinite;
  }
  #arrowtwoBR {
    position: fixed;
    right: 5px;
    top: 96vh;
    transform: rotate(90deg);
    animation: bounce 1s infinite;
  }
}

#floats {
  img {
    position: absolute;
    right: 2vw;
    bottom: 2vh;
    width: 320px;
    height: auto;
  }
}

</style>