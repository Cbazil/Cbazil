<template>
  <div id="app" class="row">
    <nav id="nav-container">
      <div id="logo" class="row">
        <router-link class="r-link" to="/">
          <div class="nav-logo">
            <!-- <img src="" /> -->
            <div id="logo-cntr">
              <img v-if="!on_home" src="./assets/Cbazil.png" alt="Cbazil Logo">
              <img v-if="on_home" src="./assets/green.png" alt="Cbazil Logo (Green)">
            </div>
          </div>
        </router-link>
      </div>
      <div id="navigation" class="row">
        <div class="nav-i" 
          :class="{on_page: on_about}"
          @mouseover="hoverAbout = true"
          @mouseleave="hoverAbout = false"
        >
          <router-link class="r-link" to="/about">
            <q-icon
              v-if="!hoverAbout"
              class="icons"
              size="24px"
              name="fas fa-user-tie"
              color="white"
            />
            <p v-else>Dev</p>
          </router-link>
        </div>
        <div class="nav-i" 
          :class="{on_page: on_skills}"
          @mouseover="hoverSkills = true"
            @mouseleave="hoverSkills = false"
        >
          <router-link class="r-link"  to="/skills">
            <q-icon
              v-if="!hoverSkills"
              class="icons"
              size="26px"
              name="fas fa-cubes"
              color="white"
            />
            <p v-else>Skills</p>
          </router-link>
        </div>
        <div class="nav-i" 
          :class="{on_page: on_exp}"
          @mouseover="hoverExp = true"
          @mouseleave="hoverExp = false"
        >
          <router-link class="r-link"  to="/experience">
            <q-icon
              v-if="!hoverExp"
              class="icons"
              size="26px"
              name="fas fa-book-reader"
              color="white"
            />
            <p v-else>Exp</p>
          </router-link>
        </div>
        <div class="nav-i" 
          :class="{on_page: on_blogs}"
          @mouseover="hoverBlogs = true"
          @mouseleave="hoverBlogs = false"
        >
          <router-link class="r-link"  to="/blogs">
            <q-icon
              v-if="!hoverBlogs"
              class="icons"
              size="26px"
              name="fas fa-newspaper"
              color="white"
            />
            <p v-else>Blogs</p>
          </router-link>
        </div>
        <div class="nav-i" 
          :class="{on_page: on_projects}"
          @mouseover="hoverProjects = true"
          @mouseleave="hoverProjects = false"
        >
          <router-link class="r-link" to="/projects">
            <q-icon
              v-if="!hoverProjects"
              class="icons"
              size="26px"
              name="fas fa-layer-group"
              color="white"
            />
            <p v-else>Apps</p>
          </router-link>
        </div>
      </div>
      <div id="s-links" class="row">
        <div class="link-i">
          <a href="https://www.linkedin.com/in/chad-bosch-b6a3b716b/">
            <q-icon
              size="16px"
              name="fab fa-linkedin"
              class="s-link-i"
              color="white"
              path="www.google.com"
            />
          </a>
        </div>
        <div class="link-i">
          <a href="https://twitter.com/Cbazil3">
            <q-icon
              size="16px"
              name="fab fa-twitter"
              class="s-link-i"
              color="white"
            />
          </a>
        </div>
        <div class="link-i">
          <a href="https://github.com/Cbazil">
            <q-icon
              size="16px"
              name="fab fa-github"
              class="s-link-i"
              color="white"
            />
          </a>
        </div>
        <div class="link-i">
          <a href="https://medium.com/@cbazil">
            <q-icon
              size="16px"
              name="fab fa-medium-m"
              class="s-link-i"
              color="white"
            />
          </a>
        </div>
      </div>
    </nav>
    <main id="main-container" class="col">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { provide } from 'vue';
import store from '@/store';

export default {
  name: 'Landing Page',
  setup() {
  provide('store', store)

   let hoverAbout = ref(false);
   let hoverSkills = ref(false);
   let hoverExp= ref(false);
   let hoverBlogs = ref(false);
   let hoverProjects = ref(false);

   const route = useRoute()

   let on_home = computed(() =>  { if (route.path == '/') { return true } else { return false }  });
   let on_about = computed(() =>  { if (route.path == '/about') { return true } else { return false }  });
   let on_skills = computed(() =>  { if (route.path == '/skills') { return true } else { return false }  });
   let on_exp = computed(() =>  { if (route.path == '/experience') { return true } else { return false }  });
   let on_blogs = computed(() =>  { if (route.path == '/blogs') { return true } else { return false }  });
   let on_projects = computed(() =>  { if (route.path == '/projects') { return true } else { return false }  });

   return { hoverAbout, hoverSkills, hoverExp, hoverBlogs, hoverProjects, on_home, on_about, on_skills, on_exp, on_blogs, on_projects };
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

html {
  background-color: $grey;
}

body {
  background: $grey;
  height: 100vh;
  border: $grey;
  overflow: hidden;
}

h1 {
  font-family: 'Sriracha', cursive;
  color: $green;
  font-size: 100px !important;
  line-height: 45px !important;
}

h2 {
  font-family: 'Montserrat Alternates', sans-serif;
  color: #fff;
  font-size: 42px !important;
  line-height: 38px !important;
  margin: 50px 10px;
}

h3 {
  font-family: 'Montserrat Alternates', sans-serif;
  color: #fff;
  font-size: 21px !important;
}

#app {
  background-color: $grey;
  position: absolute;
  width: 100vw !important;
  height: 100vh !important;
  margin: 0;
  padding: 0;
  border: $grey;
  #navigation {
    p {
      margin: 5px 0;
      padding: 0;
      font-size: 11px;
      font-family: 'Montserrat Alternates', sans-serif;
      color: $green;
      text-decoration: none;
    }
  }
  #nav-container {
    position: fixed;
    display: flex;
    z-index: 1;
    flex-direction: column;
    height: 100vh;
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
    height: 100vh;
    margin-left: 60px;
    padding: 0;
    overflow: hidden;
    position: relative;
    border: none;
  }
  
  #s-links {
    margin-bottom: 16px;
  }
  .s-link-i:hover {
    color: $green !important;
  }
  .nav-logo, .link-i {
    text-align: center;
    width: 100%;
    display: block;
    cursor: pointer;
  }
  .nav-label {
    text-decoration: none !important;
  }
  .on_page {
    background: $grey;
    .icons {
      color: $green !important;
    }
  }
  .link-i {
    padding: 5px 0;
  }
  .nav-i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
  }
  .r-link {
    text-decoration: none;
  }
  .route-enter-from {
    opacity: 0;
    transform: translateY(-90vh);
  }
  .route-active-from {
    transition: ass 0.4s ease-out;
  }
  .route-leave-to {
    opacity: 0;
    transform: translateY(90vh)
  }
  .route-leave-active {
    transition: all 0.4s ease-in;
  }
}

// Table to mobile
@media (max-width: 830px) {
  #main-container {
    margin-left: 0px !important;
    margin-top: 60px;
  }
  #nav-container {
    flex-direction: row !important;
    width: 100% !important;
    height: 60px !important;
    .nav-i, .link-i {
      width: auto;
    }
    .nav-i {
      width: 60px;
      width: 60px;
    }
    #logo-cntr {
      width: auto !important;
      height: 60px !important;
      // margin-top: 10px;
      img {
        width: inherit;
        height: inherit;
      }
    }
    #s-links {
      display: none;
    }
  } 
}

// Laptop responsiveness 1 
@media (max-width: 1440px) {
  h1 {
    font-size: 84px !important;
    line-height: 30px !important;
  }
  h2 {
    font-size: 32px !important;
  }
}

// Laptop responsiveness 2
@media (max-width: 1280px) {
  h1 {
    font-size: 72px !important;
  }
  h2 {
    font-size: 30px !important;
  }
}
// Laptop responsiveness 3
@media (max-width: 1140px) {
  h1 {
    font-size: 68px !important;
  }
  h2 {
    font-size: 26px !important;
  }
}

// Laptop responsiveness 4
@media (max-width: 973px) {
  h1 {
    font-size: 62px !important;
  }
  h2 {
    font-size: 24px !important;
  }
}

// Tablet
@media (max-width: 830px) {
  h1 {
    font-size: 72px !important;
  }
  h2 {
    font-size: 28px !important;
  }
}

// Mobile 3
@media (max-width: 562px) {
  h1 {
    font-size: 52px !important;
  }
  h2 {
    font-size: 22px !important;
  }
  h3 {
    font-size: 14px !important;
  }
}

// Mobile 2
@media (max-width: 426px) {
  h1 {
    font-size: 42px !important;
    line-height: 20px !important;
  }
  h2 {
    font-size: 18px !important;
    margin: 40px 5px 15px 5px;
  }
}

// Mobile 1
@media (max-width: 360px) {
  h1 {
    font-size: 34px !important;
    line-height: 16px !important;
  }
  h2 {
    font-size: 14px !important;
    margin: 30px 10px 10px 10px;
  }
  .q-icon {
    margin-top: 6px;
    font-size: 16px !important;
  }
}
</style>
