<template>
  <div id="app" class="row">
    <nav id="nav-container">
      <div id="logo" class="row">
        <router-link class="r-link" to="/">
          <div class="nav-logo">
            <div id="logo-cntr">
              <img v-if="!on_home" src="./assets/cbazil.png" alt="Cbazil Logo" />
              <img v-if="on_home" src="./assets/green.png" alt="Cbazil Logo (Green)" />
            </div>
          </div>
        </router-link>
      </div>
      <div id="navigation" class="row">
        <div
          class="nav-i"
          :class="{ on_page: on_about }"
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
        <div
          class="nav-i"
          :class="{ on_page: on_skills }"
          @mouseover="hoverSkills = true"
          @mouseleave="hoverSkills = false"
        >
          <router-link class="r-link" to="/skills">
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
        <div
          class="nav-i"
          :class="{ on_page: on_exp }"
          @mouseover="hoverExp = true"
          @mouseleave="hoverExp = false"
        >
          <router-link class="r-link" to="/experience">
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
        <div
          class="nav-i"
          :class="{ on_page: on_blogs }"
          @mouseover="hoverBlogs = true"
          @mouseleave="hoverBlogs = false"
        >
          <router-link class="r-link" to="/blogs">
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
        <div
          class="nav-i"
          :class="{ on_page: on_projects }"
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
          <a href="https://www.linkedin.com/in/cbazil/" target="_blank">
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
          <a href="https://twitter.com/cbazil_dev" target="_blank">
            <q-icon size="16px" name="fab fa-twitter" class="s-link-i" color="white" />
          </a>
        </div>
        <div class="link-i">
          <a href="https://github.com/cbazil" target="_blank">
            <q-icon size="16px" name="fab fa-github" class="s-link-i" color="white" />
          </a>
        </div>
        <div class="link-i">
          <a href="https://medium.com/@cbazil" target="_blank">
            <q-icon size="16px" name="fab fa-medium-m" class="s-link-i" color="white" />
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
    <div id="app-nav">
      <div
        class="nav-i"
        :class="{ on_page: on_about }"
        @click="hoverAbout = true"
      >
        <router-link class="r-link" to="/about">
          <q-icon
            class="icons"
            size="24px"
            name="fas fa-user-tie"
            color="white"
          />
        </router-link>
      </div>
      <div
        class="nav-i"
        :class="{ on_page: on_skills }"
        @click="hoverSkills = true"
      >
        <router-link class="r-link" to="/skills">
          <q-icon
            class="icons"
            size="26px"
            name="fas fa-cubes"
            color="white"
          />
        </router-link>
      </div>
      <div
        class="nav-i"
        :class="{ on_page: on_exp }"
        @click="hoverExp = true"
      >
        <router-link class="r-link" to="/experience">
          <q-icon
            class="icons"
            size="26px"
            name="fas fa-book-reader"
            color="white"
          />
        </router-link>
      </div>
      <div
        class="nav-i"
        :class="{ on_page: on_blogs }"
        @click="hoverBlogs = !hoverBlogs"
      >
        <router-link class="r-link" to="/blogs">
          <q-icon
            class="icons"
            size="26px"
            name="fas fa-newspaper"
            color="white"
          />
        </router-link>
      </div>
      <div
        class="nav-i"
        :class="{ on_page: on_projects }"
        @click="hoverProjects = true"
      >
        <router-link class="r-link" to="/projects">
          <q-icon
            class="icons"
            size="26px"
            name="fas fa-layer-group"
            color="white"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import { provide } from "vue";
import store from "@/store";

export default {
  name: "Landing Page",
  setup() {
    provide("store", store);

    let hoverAbout = ref(false);
    let hoverSkills = ref(false);
    let hoverExp = ref(false);
    let hoverBlogs = ref(false);
    let hoverProjects = ref(false);

    const route = useRoute();

    let on_home = computed(() => {
      if (route.path == "/") {
        return true;
      } else {
        return false;
      }
    });
    let on_about = computed(() => {
      if (route.path == "/about") {
        return true;
      } else {
        return false;
      }
    });
    let on_skills = computed(() => {
      if (route.path == "/skills") {
        return true;
      } else {
        return false;
      }
    });
    let on_exp = computed(() => {
      if (route.path == "/experience") {
        return true;
      } else {
        return false;
      }
    });
    let on_blogs = computed(() => {
      if (route.path == "/blogs") {
        return true;
      } else {
        return false;
      }
    });
    let on_projects = computed(() => {
      if (route.path == "/projects") {
        return true;
      } else {
        return false;
      }
    });

    return {
      hoverAbout,
      hoverSkills,
      hoverExp,
      hoverBlogs,
      hoverProjects,
      on_home,
      on_about,
      on_skills,
      on_exp,
      on_blogs,
      on_projects,
    };
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates&family=Sriracha&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap");

$dark: #201f23;
$grey: #2b2c2e;
$green: #7ed957;
$blue: #5271ff;

html {
  background-color: $grey;
}

body {
  background: $grey;
  height: 100svh;
  border: $grey;
  overflow: hidden;
}

h1 {
  font-family: "Sriracha", cursive;
  color: $green;
  font-size: 90px !important;
  line-height: 32px !important;
}

h2 {
  font-family: "Montserrat Alternates", sans-serif;
  color: #fff;
  font-size: 38px !important;
  line-height: 36px !important;
  margin: 45px 10px;
}

h3 {
  font-family: "Montserrat Alternates", sans-serif;
  color: #fff;
  font-size: 21px !important;
}

/* width */
::-webkit-scrollbar {
  width: 7.5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $blue;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $green;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fff;
}
#app-nav {
  display: none;
}
#app {
  background-color: $grey;
  position: absolute;
  width: 100vw !important;
  height: 100svh !important;
  margin: 0;
  padding: 0;
  border: $grey;
  #navigation {
    p {
      margin: 5px 0;
      padding: 0;
      font-size: 11px;
      font-family: "Montserrat Alternates", sans-serif;
      color: $green;
      text-decoration: none;
    }
  }
  #nav-container {
    position: fixed;
    display: flex;
    z-index: 1;
    flex-direction: column;
    height: 100svh;
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
    height: 100svh;
    margin-left: 45px;
    padding: 0;
    // overflow: hidden;
    position: relative;
    border: none;
  }

  .q-timeline__title {
    display: unset !important;
  }

  #s-links {
    margin-bottom: 16px;
  }
  .s-link-i:hover {
    color: $green !important;
  }
  .nav-logo,
  .link-i {
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
    a {
      text-decoration: none;
    }
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
    transform: translateY(-90svh);
  }
  .route-active-from {
    transition: ass 0.4s ease-out;
  }
  .route-leave-to {
    opacity: 0;
    transform: translateY(90svh);
  }
  .route-leave-active {
    transition: all 0.4s ease-in;
  }
}

// Table to mobile
@media (max-width: 830px) {
  #main-container {
    height: unset !important;
    // overflow: scroll !important;
    margin-left: 0px !important;
    // margin-top: 60px;
  }
  #nav-container {
    flex-direction: row !important;
    width: 100% !important;
    height: 60px !important;
    .nav-i,
    .link-i {
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
    #navigation {
      display: none;
    }
    #s-links {
      width: 70%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      .row {
        margin: 0 0 0 !important;
      }
      .link-i {
        margin: 0 10px;
      }
    }
  }
}

// larger laptops
@media (min-width: 1580px) {
  #app-nav {
    display: none;
  }
  h1 {
    font-size: 126px !important;
    line-height: 44px !important;
  }
  h2 {
    font-size: 50px !important;
    line-height: 36px !important;
  }
}

// Laptop responsiveness 1
@media (max-width: 1440px) {
  #app-nav {
    display: none;
  }
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
  #app-nav {
    display: none;
  }
  h1 {
    font-size: 72px !important;
  }
  h2 {
    font-size: 30px !important;
  }
}
// Laptop responsiveness 3
@media (max-width: 1140px) {
  #app-nav {
    display: none;
  }
  h1 {
    font-size: 68px !important;
  }
  h2 {
    font-size: 26px !important;
  }
}

// Laptop responsiveness 4
@media (max-width: 973px) {
  #app-nav {
    display: none;
  }
  h1 {
    font-size: 62px !important;
  }
  h2 {
    font-size: 24px !important;
  }
}

// Tablet
@media (max-width: 830px) {
  #app {
    flex-direction: column;
    #app-nav {
      justify-content: center;
      height: 60px;
      /* pin mobile nav to viewport bottom so it's always visible */
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 9999;
      display: flex;
      background: $dark;
      flex-direction: row;
      .nav-i {
        margin: 0 7.5px;
      }
    }
    /* ensure main content doesn't sit behind the fixed nav */
    #main-container {
      padding-bottom: 72px; /* nav height + small buffer */
    }
  }
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
    font-size: 46px !important;
    line-height: 20px !important;
  }
  h2 {
    font-size: 18px !important;
    margin: 40px 5px 15px 5px;
  }
}

// Mobile 1
@media (max-width: 376px) {
  #app {
    h1 {
      font-size: 34px !important;
      line-height: 16px !important;
    }
    h2 {
      font-size: 14px !important;
      margin: 30px 10px 10px 10px;
    }
    #app-nav {
      .nav-i {
        width: 50px !important;
        
        .q-icon {
          margin-top: 2px;
          font-size: 16px !important;
        }
      }
    }
  }
}

@media (max-width: 335px) {
  #app {
    #app-nav {
      .nav-i { 
        margin: 0 5px;
      }
    }
  }
}

</style>
