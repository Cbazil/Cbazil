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
              size="26px"
              name="fas fa-shapes"
              color="white"
            />
          </router-link>
        </div> -->
        <div class="nav-i" 
          :class="{on_page: on_about}"
          @mouseover="hoverAbout = true"
          @mouseleave="hoverAbout = false"
        >
          <router-link to="/about">
            <q-icon
              v-if="!hoverAbout"
              class="icons"
              size="26px"
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
          <router-link to="/skills">
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
          <router-link to="/experience">
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
          <router-link to="/blogs">
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
          <router-link to="/projects">
            <q-icon
              v-if="!hoverProjects"
              class="icons"
              size="26px"
              name="fas fa-layer-group"
              color="white"
            />
            <p v-else>Projects</p>
          </router-link>
        </div>
      </div>
      <div id="s-links" class="row">
        <div class="link-i">
          <q-icon
            size="16px"
            name="fab fa-linkedin"
            color="white"
          />
        </div>
        <div class="link-i">
          <q-icon
            size="16px"
            name="fab fa-twitter"
            color="white"
          />
        </div>
        <div class="link-i">
          <q-icon
            size="16px"
            name="fab fa-github"
            color="white"
          />
        </div>
        <div class="link-i">
          <q-icon
            size="16px"
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

   let on_about = computed(() =>  { if (route.path == '/about') { return true } else { return false }  });
   let on_skills = computed(() =>  { if (route.path == '/skills') { return true } else { return false }  });
   let on_exp = computed(() =>  { if (route.path == '/experience') { return true } else { return false }  });
   let on_blogs = computed(() =>  { if (route.path == '/blogs') { return true } else { return false }  });
   let on_projects = computed(() =>  { if (route.path == '/projects') { return true } else { return false }  });

   return { hoverAbout, hoverSkills, hoverExp, hoverBlogs, hoverProjects, on_about, on_skills, on_exp, on_blogs, on_projects };
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

body {
  background: $grey;
}

h1 {
  font-family: 'Sriracha', cursive;
  color: $green;
  font-size: 70px !important;
  line-height: 35px !important;
}

h2 {
  font-family: 'Montserrat Alternates', sans-serif;
  color: #fff;
  font-size: 26px !important;
}

#home {
  background-color: $grey;
  position: absolute;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden;
  margin: 0;

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

  #side-nav {
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
    // background-color: khaki
    position: relative;
  }
  
  #s-links {
    margin-bottom: 16px;
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
      padding: 5px 0;
  }
  .nav-i {
      padding: 16px 0;
  }
}
</style>
