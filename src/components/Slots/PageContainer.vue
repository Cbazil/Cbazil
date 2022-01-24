<template>
  <div id="container-slot">
    <div id="header" v-if="prefixtab">
      <img id="arrowTL" width="25" height="7" src="../../assets/arrowKeys.png" alt="Left/up arrow bounces">
      <span class="indicator"><p>PRESS <span class="btn-name">UP</span> KEY TO JUMP TO {{ prefixtab.toUpperCase() }} PAGE</p></span>
      <img id="arrowTR" width="25" height="7" src="../../assets/arrowKeys.png" alt="Right/up arrow bounces">
    </div>
    <slot></slot>
    <div id="footer" v-if="suffixtab">
      <img id="arrowBL" width="25" height="7" src="../../assets/arrowKeys.png" alt="Left/down arrow bounces">
      <span class="indicator"><p>PRESS <span class="btn-name">DOWN</span> KEY TO JUMP TO {{ suffixtab.toUpperCase() }} PAGE</p></span>
      <img id="arrowBR" width="25" height="7" src="../../assets/arrowKeys.png" alt="Right/down arrow bounces">
    </div>
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

<style lang="scss">
#container-slot {
  width: calc(100% - 60px);
  height: 100vh;
  #header {
    position: fixed;
    display: flex;
    color: #7ed957;
    width: calc(100% - 60px);
    height: 32px;
    margin-top: 20px;
    top: 0;
    justify-content: space-between;
    animation: 2s infinite bounceT;
  }
  #footer {
    position: fixed;
    display: flex;
    color: #7ed957;
    width: calc(100% - 60px);
    height: 32px;
    bottom: 0;
    justify-content: space-between;
    animation: 2s infinite bounceB;
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
  
  @keyframes bounceT {
    0% { top: 1px; }
    25%, 75% { top: 3px; }
    50% { top: 5px; }
    100% { top: 0; }
  }
  @keyframes bounceB {
    0% { bottom: 1px; }
    25%, 75% { bottom: 3px; }
    50% { bottom: 5px; }
    100% { bottom: 0; }
  }
}

// Table to mobile
@media (max-width: 830px) {
  #header {
    display:  none !important;
  }
  #footer {
    display: none !important;
  }
}
</style>