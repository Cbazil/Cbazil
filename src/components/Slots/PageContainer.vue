<template>
  <div id="container-slot">
    <div id="header" v-if="prefixtab">
      <img id="arrowTL" width="25" height="7" src="../../assets/arrowKeys.png" alt="Left/up arrow bounces">
      <span class="indicator"><p>PRESS <span class="btn-name">
        <q-icon 
          class="arrow-icons"
          style="cursor: pointer;"
          name="fa fa-arrow-up"
          color="#80d556"
        />
      </span> KEY TO JUMP TO {{ prefixtab.toUpperCase() }} PAGE</p></span>
      <img id="arrowTR" width="25" height="7" src="../../assets/arrowKeys.png" alt="Right/up arrow bounces">
    </div>
    <div id="main-container">
      <slot></slot>
      <div id="mobile-controlls">
        <q-btn rounded v-if="prefixtab" @click="handlePrevious" class="prefix-btn" size="15px" outline><q-icon name="fas fa-angle-up" /></q-btn>
        <q-btn rounded v-if="suffixtab" @click="handleNext" class="suffix-btn" size="15px" outline><q-icon name="fas fa-angle-down" /></q-btn>
      </div>
    </div>
    <div id="footer" v-if="suffixtab">
      <img id="arrowBL" width="25" height="7" src="../../assets/arrowKeys.png" alt="Left/down arrow bounces">
      <span class="indicator"><p>PRESS <span class="btn-name">
        <q-icon 
          class="arrow-icons"
          style="cursor: pointer;"
          name="fa fa-arrow-down"
          color="#80d556"
        />
      </span> KEY TO JUMP TO {{ suffixtab.toUpperCase() }} PAGE</p></span>
      <img id="arrowBR" width="25" height="7" src="../../assets/arrowKeys.png" alt="Right/down arrow bounces">
    </div>
  </div>
  <div id="cursor" class="Cursor"></div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup () {

    const prefixtab = ref('') 
    const suffixtab = ref('') 

    const route = useRoute()
    const router = useRouter()

    const handlePrevious = () => {
      if (route.path == '/about') {
        router.push('/')
      }
      if (route.path == '/skills') {
        router.push('/about')
      }
      if (route.path == '/experience') {
        router.push('/skills')
      }
      if (route.path == '/blogs') {
        router.push('/experience')
      }
       if (route.path == '/projects') {
        router.push('/blogs')
      }
    }

    const handleNext = () => {
      if (route.path == '/') {
        router.push('/about')
      }
      if (route.path == '/about') {
        router.push('/skills')
      }
      if (route.path == '/skills') {
        router.push('/experience')
      }
      if (route.path == '/experience') {
        router.push('/blogs')
      }
      if (route.path == '/blogs') {
        router.push('/projects')
      }
    }

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

    return { prefixtab, suffixtab, handlePrevious, handleNext }
  }
}
</script>

<style lang="scss">
$grey: #353639;
$dark: #2b2c2e;

.Cursor {
  pointer-events: none;
  position: fixed;
  display: block;
  border-radius: 0;
  transform-origin: center center;
  mix-blend-mode: difference;
  top: 0;
  left: 0;
  z-index: 1000;
  span {
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 20px;
    background-color:white;
    transform-origin: center center;
    transform: translate(-50%, -50%) 
  }
}
    
  // filter url("#goo")

#container-slot {
  background: $grey;
  // background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23ffffff' fill-opacity='0.07' fill-rule='evenodd'/%3E%3C/svg%3E");
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin-left: 10px;
  #header {
    position: fixed;
    display: flex;
    color: #7ed957;
    width: calc(100% - 50px);
    height: 32px;
    margin-top: 20px;
    top: 0;
    justify-content: space-between;
    animation: 2s infinite bounceT;
  }
  #main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #footer {
    position: fixed;
    display: flex;
    color: #7ed957;
    width: calc(100% - 50px);
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
    padding: 0px 2.75px;
    border-radius: 4px;
    margin: 0px 2px;
    height: 24px;
    border: 1.5px solid #7ed957;
    box-shadow: 0px 2px 1px;
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

  #mobile-controlls {
    display: none;
  }
}

// Table to mobile
@media (max-width: 830px) {
  #mobile-controlls {
    display: flex !important;
    flex-direction: column;
    position: fixed;
    right: 10px;
    bottom: 20px;
    .q-btn {
      color: #7ed957;
    }
    .prefix-btn, .suffix-btn {
      margin: 5px;
      background: $dark !important;
      opacity: 0.6;
    }
  }
  #header {
    display:  none !important;
  }
  #footer {
    display: none !important;
  }
}
</style>