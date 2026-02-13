import { createRouter, createWebHistory } from "vue-router";

import Rut from "@/pages/Rut.vue";
import Bio from "@/pages/resources/Bio.vue";
import Cue from "@/pages/resources/Cue.vue";
import ExP from "@/pages/resources/ExP.vue";
import Diy from "@/pages/resources/Diy.vue";
import Lab from "@/pages/resources/Lab.vue";

import Resources from "@/layouts/Resources.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Root", component: Rut },
    {
      path: "/",
      component: Resources,
      children: [
        { path: "/about", name: "Bio", component: Bio },
        { path: "/skills", name: "Skills", component: Cue },
        { path: "/experience", name: "Experience", component: ExP },
        { path: "/blog", name: "Blog", component: Diy },
        { path: "/projects", name: "Projects", component: Lab },
      ],
    },
  ],
});

export default router;
