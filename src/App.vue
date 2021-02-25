<template>
  <div id="home" class="row">
    <div id="side-nav">
      <div id="logo" class="row">
        <div class="nav-logo">
          <!-- <img src="" /> -->
          <div id="logo-cntr">
            <span style="font-size: 50px; color: white; font-weight: bold">C</span>
            <p style="margin-top: -15px; color: white;">CBAZIL</p>
          </div>
        </div>
      </div>
      <div id="navigation" class="row">
        <div class="nav-i">
          <q-icon
            size="30px"
            name="fas fa-shapes"
            color="white"
          />
        </div>
        <div class="nav-i">
          <q-icon
            size="30px"
            name="fas fa-user-tie"
            color="white"
          />
        </div>
        <div class="nav-i">
          <q-icon
            size="30px"
            name="fas fa-cubes"
            color="white"
          />
        </div>
        <div class="nav-i">
          <q-icon
            size="30px"
            name="fas fa-book-reader"
            color="white"
          />
        </div>
        <div class="nav-i">
          <q-icon
            size="30px"
            name="fas fa-layer-group"
            color="white"
          />
        </div>
      </div>
      <div id="s-links" class="row">
        <div class="link-i">
          <q-icon
            size="xs"
            name="fab fa-linkedin"
            color="white"
          />
        </div>
        <div class="link-i">
          <q-icon
            size="xs"
            name="fab fa-twitter"
            color="white"
          />
        </div>
        <div class="link-i">
          <q-icon
            size="xs"
            name="fab fa-github"
            color="white"
          />
        </div>
        <div class="link-i">
          <q-icon
            size="xs"
            name="fab fa-medium-m"
            color="white"
          />
        </div>
      </div>
    </div>
    <div id="main-container" class="col"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    // HelloWorld
  },

  setup () {
    return {
      // leftDrawerOpen: ref(false)
    }
  }
}
</script>
<style lang="scss">

$dark: #2b2c2e;
$grey: #353639;

#home {
  background-color: $grey;
  width: 100wh;
  height: 100vh; 

  #side-nav {
    position: relative;
    display: flex;
    flex-direction: column;
    height: inherit;
    background-color: $dark;
    justify-content: space-between;
    width: 70px;
  }

  #main-container {
    // background-color: khaki;
  }

  .nav-logo, .nav-i, .link-i {
    text-align: center;
    padding: 10px 0;
    width: 100%;
    display: block;
    cursor: pointer;
  }

}
</style>
