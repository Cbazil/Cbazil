<template>
  <div id="container-slot">
    <header id="header" v-if="prefixtab">
      <img id="arrowTL" width="25" height="7" src="../../assets/arrowKeys.png" alt="Left/up arrow bounces">
      <span class="indicator"><p>PRESS <span class="btn-name">UP</span> KEY TO JUMP TO {{ prefixtab.toUpperCase() }} PAGE</p></span>
      <img id="arrowTR" width="25" height="7" src="../../assets/arrowKeys.png" alt="Right/up arrow bounces">
    </header>
    <slot></slot>
    <footer id="footer" v-if="suffixtab">
      <img id="arrowBL" width="25" height="7" src="../../assets/arrowKeys.png" alt="Left/down arrow bounces">
      <span class="indicator"><p>PRESS <span class="btn-name">DOWN</span> KEY TO JUMP TO {{ suffixtab.toUpperCase() }} PAGE</p></span>
      <img id="arrowBR" width="25" height="7" src="../../assets/arrowKeys.png" alt="Right/down arrow bounces">
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup () {

    const prefixtab = ref('') 
    const suffixtab = ref('') 

    const route = useRoute()

    if (route.path == '/') {
      suffixtab.value = 'About'
    }
    if (route.path == '/about') {
      prefixtab.value = 'Landing'
      suffixtab.value = 'Skills'
    }
    if (route.path == '/skills') {
      prefixtab.value = 'About'
      suffixtab.value = 'Experience'
    }

    if (route.path == '/experience') {
      prefixtab.value = 'Skills'
      suffixtab.value = 'Articles'
    }

    if (route.path == '/blogs') {
      prefixtab.value = 'Experience'
      suffixtab.value = 'Projects'
    }

    if (route.path == '/projects') {
      prefixtab.value = 'Articles'
    }

    return { prefixtab, suffixtab }
  }
}
</script>

<style lang="scss" scoped>
#container-slot {
  width: calc(100% - 60px);
  height: 100vh;
  #header {
    color: #7ed957;
    position: absolute;
    width: calc(100% - 60px);
    height: 32px;
    margin-top: 20px;
    top: 0;
    display: flex;
    justify-content: space-between;
  }
  #footer {
    position: absolute;
    color: #7ed957;
    width: calc(100% - 60px);
    height: 32px;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    animation: bounce 1s infinite;
  }
  .indicator {
    margin-top: -10px;
    height: 28px;
    padding: 4px 6px;
  }
  .btn-name {
    padding: 0px 6px;
    border-radius: 4px;
    margin: 0px 2px;
    height: 24px;
    border: 2px solid #7ed957;
    box-shadow: 0px 1px 2px;
  }
  #arrowTL {
    transform: rotate(-90deg);
  }
  #arrowTR {
    transform: scaleX(-1) rotate(-90deg);
  }
  #arrowBL {
    transform: scaleX(-1) rotate(90deg);
  }
  #arrowBR {
    transform: rotate(90deg);
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-15px);}
  }
}
</style>