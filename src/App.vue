<template>
  <div id="home" class="row">
    <div id="side-nav">
      <div id="logo" class="row">
        <router-link to="/">
          <div class="nav-logo">
            <!-- <img src="" /> -->
            <div id="logo-cntr">
              <img src="./assets/Cbazil.png" alt="Cbazil Logo">
            </div>
          </div>
        </router-link>
      </div>
      <div id="navigation" class="row">
        <!-- <div class="nav-i" :class="{on_page: on_home}">
          <router-link to="/">
            <q-icon
              class="icons"
              size="30px"
              name="fas fa-shapes"
              color="white"
            />
          </router-link>
        </div> -->
        <div class="nav-i" :class="{on_page: on_about}">
          <router-link to="/about">
            <q-icon
              class="icons"
              size="30px"
              name="fas fa-user-tie"
              color="white"
            />
          </router-link>
        </div>
        <div class="nav-i" :class="{on_page: on_skills}">
          <router-link to="/skills">
            <q-icon
              class="icons"
              size="30px"
              name="fas fa-cubes"
              color="white"
            />
          </router-link>
        </div>
        <div class="nav-i" :class="{on_page: on_exp}">
          <router-link to="/experience">
            <q-icon
              class="icons"
              size="30px"
              name="fas fa-book-reader"
              color="white"
            />
          </router-link>
        </div>
        <div class="nav-i" :class="{on_page: on_blogs}">
          <router-link to="/blogs">
            <q-icon
              class="icons"
              size="30px"
              name="fas fa-newspaper"
              color="white"
            />
          </router-link>
        </div>
        <div class="nav-i" :class="{on_page: on_projects}">
          <router-link to="/projects">
            <q-icon
              class="icons"
              size="30px"
              name="fas fa-layer-group"
              color="white"
            />
          </router-link>
        </div>
      </div>
      <div id="s-links" class="row">
        <div class="link-i">
          <q-icon
            size="20px"
            name="fab fa-linkedin"
            color="white"
          />
        </div>
        <div class="link-i">
          <q-icon
            size="20px"
            name="fab fa-twitter"
            color="white"
          />
        </div>
        <div class="link-i">
          <q-icon
            size="20px"
            name="fab fa-github"
            color="white"
          />
        </div>
        <div class="link-i">
          <q-icon
            size="20px"
            name="fab fa-medium-m"
            color="white"
          />
        </div>
      </div>
    </div>
    <div id="main-container" class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Landing Page',

  components: {
    // HelloWorld
  },
  setup() {
   let on_home = false;
   let on_about = false;
   let on_skills = false;
   let on_exp = false;
   let on_blogs = false;
   let on_projects = false;

   return { on_home, on_about, on_skills, on_exp, on_blogs, on_projects };
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&family=Sriracha&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');

$dark: #2b2c2e;
$grey: #353639;
$green: #7ed957;
$blue: #5271ff;

h1 {
  font-family: 'Sriracha', cursive;
  color: $green;
  font-size: 70px !important;
  line-height: 35px !important;
}

h2 {
  font-family: 'Montserrat Alternates', sans-serif;
  color: #fff;
  font-size: 30px !important;
}

#home {
  background-color: $grey;
  position: absolute;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden;
  margin: 0;

  #side-nav {
    position: relative;
    display: flex;
    flex-direction: column;
    height: inherit;
    background-color: $dark;
    justify-content: space-between;
    width: 60px;
  }
  #logo-cntr {
    width: inherit;
    height: auto;
    // margin-top: 10px;
    img {
      width: inherit;
      height: inherit;
    }
  }
  #main-container {
    // background-color: khaki
    position: relative;
  }
  
  #s-links {
    margin-bottom: 20px;
  }
  
  .nav-logo, .nav-i, .link-i {
    text-align: center;
    width: 100%;
    display: block;
    cursor: pointer;
  }
  .on_page {
    background: $grey;
    .icons {
      color: $green !important;
    }
  }
  .link-i {
      padding: 10px 0;
  }
  .nav-i {
      padding: 20px 0;
  }
}
</style>
