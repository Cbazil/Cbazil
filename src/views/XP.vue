<template>
  <div id="experience" ref="container" @keyup.up="navSkills" @keyup.down="navArticles" @wheel="navScroll($event)" tabindex="0">
    <PageContainer>
      <div id="edu-container">
        <div id="edu-title">
          <h5>&lt;title&gt;</h5>
          <h1>Education & Work Experience</h1>
          <h5 style="display: flex; justify-content: flex-end; margin-top: 22.5px;">&lt;/title&gt;</h5>
        </div>
        <div id="timelines">
          <div id="edu-timeline">
            <div class="q-px-lg q-pb-md">
              <q-timeline id="tl-container" :layout="layout" color="secondary">
                <q-timeline-entry id="tl-heading" heading>
                  Working experience
                </q-timeline-entry>

                <q-timeline-entry
                  title="CodeSpace"
                  class="event-title"
                  subtitle="August 2022 - May 2025"
                  side="left"
                  color="light-green-12"
                >
                  <div class="exp-content">
                    I coach students in proficient javascript (Includes Frameworks) and I worked on the CodeSpace website and sub domains.
                  </div>
                  <h6 class="line-title">Stacks Used</h6>
                  <ul class="subject-list">
                    <li class="subject">VueJS</li>
                    <li class="subject">NuxtJS</li>
                    <li class="subject">ReactJS</li>
                    <li class="subject">NextJS</li>
                    <li class="subject">Bulma</li>
                    <li class="subject">Material UI</li>
                    <li class="subject">Supabase</li>
                  </ul>
                </q-timeline-entry>

                  <q-timeline-entry
                  title="ThreeJS And Start-up material"
                  class="event-title"
                  subtitle="December 2019 - July 2020"
                  side="right"
                  color="blue-8"
                >
                  <div class="exp-content">
                    I did some upskilling, and underwent course material to align my passions. Worked on freelance a project as well as own <a class="links" href="/projects">applications</a> during this time.
                  </div>
                  <h6 class="line-title">Stacks Used</h6>
                  <ul class="subject-list">
                    <li class="subject">ThreeJS</li>
                    <li class="subject">Business Studies Material</li>
                  </ul>
                </q-timeline-entry>

                <q-timeline-entry
                  title="LCStudio"
                  class="event-title"
                  subtitle="September 2020 - 31 May 2022"
                  color="light-green-12"
                  side="left"
                >
                  <div class="exp-content">
                    I worked as a Fullstack Web Developer Teamlead in the Web Applications Department at LCStudio. Developed apps mainly in the javascript language, VueJS was used as the frontend framework and we did the backend with node and SQL(PostgreSQL) using knexJS.
                  </div>
                  <h6 class="line-title">Stacks Used</h6>
                  <ul class="subject-list">
                    <li class="subject">HTML</li>
                    <li class="subject">CSS & SASS</li>
                    <li class="subject">TailwindCSS</li>
                    <li class="subject">Vue Material</li>
                    <li class="subject">Vuetify</li>
                    <li class="subject">Quasar Framework</li>
                    <li class="subject">ReactJS</li>
                    <li class="subject">Javascript & Nodejs</li>
                    <li class="subject">Express</li>
                    <li class="subject">MongoDB</li>
                    <li class="subject">Firebase</li>
                    <li class="subject">Express</li>
                    <li class="subject">KnexJS</li>
                    <li class="subject">PostgreSQL</li>
                  </ul>
                </q-timeline-entry>

                <q-timeline-entry
                  title="Personal Growth (Learning VueJS)"
                  class="event-title"
                  subtitle="December 2019 - July 2020"
                  side="right"
                  color="blue-8"
                >
                  <div class="exp-content">
                    I did some upskilling, and taught myself VueJS as well as firebase. Really started coding for myself without any help/tutorials.
                  </div>
                  <h6 class="line-title">Stacks Used</h6>
                  <ul class="subject-list">
                    <li class="subject">HTML</li>
                    <li class="subject">CSS</li>
                    <li class="subject">VueJS</li>
                    <li class="subject">Vue Semantic UI</li>
                    <li class="subject">Firebase</li>
                  </ul>
                </q-timeline-entry>
                
                <q-timeline-entry heading>October, 2019</q-timeline-entry>

                <q-timeline-entry
                  title="Vulcan Labs"
                  class="event-title"
                  subtitle="May- October 2019"
                  color="light-green-12"
                  side="left"
                >
                  <div class="exp-content">
                    I worked as a software developer intern at Vulcan Labs. I learnt and used React, Typescript as well as got to really understand how nodeJS works.
                  </div>
                  <h6 class="line-title">Stacks Used</h6>
                  <ul class="subject-list">
                    <li class="subject">HTML</li>
                    <li class="subject">CSS</li>
                    <li class="subject">ReactJS</li>
                    <li class="subject">Material UI</li>
                    <li class="subject">Semantic UI</li>
                    <li class="subject">Puppeteer</li>
                    <li class="subject">JavaScript & Node</li>
                    <li class="subject">Typescript</li>
                    <li class="subject">PostgreSQL</li>
                    <li class="subject">MySQL</li>
                    <li class="subject">KnexJS</li>
                  </ul>
                </q-timeline-entry>

                <q-timeline-entry
                  title="Learning more on Javascript"
                  class="event-title"
                  subtitle="Feb 2019 - April 2020"
                  side="right"
                  color="blue-8"
                >
                  <div class="exp-content">
                    Had 3 Month waiting period before starting at Vulcan labs, so I personally did more upskilling in javascript. Studied from the Eloquent JavaScript book.
                  </div>
                  <h6 class="line-title">Stacks Used</h6>
                  <ul class="subject-list">
                    <li class="subject">Javascript</li>
                  </ul>
                </q-timeline-entry>
              </q-timeline>
            </div>
          </div>
          <div id="exp-timeline">
            <div class="q-px-lg q-pb-md">
              <q-timeline id="tl-container" :layout="layout" color="secondary">
                <q-timeline-entry id="tl-heading" heading>
                  Academic Details
                </q-timeline-entry>

                <q-timeline-entry style="margin-top: -35px;" heading>Tertiary</q-timeline-entry>

                <q-timeline-entry
                  title="Life Choices Coding Academy"
                  class="event-title"
                  subtitle="August 2018 - February 2019"
                  color="light-green-12"
                  side="left"
                >
                  <div class="exp-content">
                    Attended a CodeSpace Bootcamp at Life Choices Coding Academy.
                    <h6 class="line-title">Subjects</h6>
                    <ul class="subject-list">
                      <li class="subject">Programming</li>
                      <li class="subject">Professional Development</li>
                      <li class="subject">Design Thinking</li>
                    </ul>
                    <h6 class="line-title">Stacks</h6>
                    <ul class="subject-list">
                      <li class="subject">HTML</li>
                      <li class="subject">CSS & SASS</li>
                      <li class="subject">Bootstrap & Bulma</li>
                      <li class="subject">Javascript, JQuery & Nodejs</li>
                    </ul>
                  </div>
                </q-timeline-entry>

                <q-timeline-entry
                  title="College of Cape Town Crawford Propel 3"
                  class="event-title"
                  subtitle="August - December 2017"
                  color="light-green-12"
                  side="right"
                >
                  <div class="exp-content">
                    Attended the propel 3 course in Crawford, hoping to learn programming (Java), Java was taken out that intake but I decided to try Networking. Learnt some interesting things there that are very useful.
                  </div>
                  <h6 class="line-title">Subjects</h6>
                  <ul class="subject-list">
                    <li class="subject">CCNA1 & CCNA2</li>
                    <li class="subject">Linux Essentials</li>
                    <li class="subject">IoT (Internet of Things)</li>
                    <li class="subject">Cyber-security</li>
                  </ul>
                </q-timeline-entry>

                <q-timeline-entry heading>June 2017</q-timeline-entry>

                <q-timeline-entry
                  title="Communiversity of South Africa"
                  class="event-title"
                  subtitle="January - June 2017"
                  color="light-green-12"
                  side="left"
                >
                  <div class="exp-content">
                    Attended a community college that upskilled, helped us with career paths and with further our education (Help apply for colleges and bursaries).
                  </div>
                  <h6 class="line-title">Subjects</h6>
                  <ul class="subject-list">
                    <li class="subject">First Aiding</li>
                    <li class="subject">Mathematics</li>
                    <li class="subject">English</li>
                    <li class="subject">E-Learning competence</li>
                    <li class="subject">Entrepreneurship</li>
                  </ul>
                </q-timeline-entry>

                <q-timeline-entry style="margin-top: -35px;" heading>Secondary</q-timeline-entry>

                <q-timeline-entry
                  title="Crestway High School"
                  class="event-title"
                  subtitle="2012 - 2016"
                  color="light-green-12"
                  side="right"
                >
                  <div class="exp-content">
                    Attended Crestway High School in Retreat.
                  </div>
                  <h6 class="line-title">Subjects</h6>
                  <ul class="subject-list">
                    <li class="subject">English</li>
                    <li class="subject">Afrikaans</li>
                    <li class="subject">Pure Maths</li>
                    <li class="subject">Computer Applications</li>
                    <li class="subject">Geography</li>
                    <li class="subject">Life Sciences</li>
                    <li class="subject">Life Orientation</li>
                  </ul>
                </q-timeline-entry>
              </q-timeline>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import PageContainer from '@/components/Slots/PageContainer.vue'

export default {
  components: {
    PageContainer
  },
  setup () {
    const $q = useQuasar()

    const router = useRouter()

    const navSkills = () => {
      router.push('/skills')
    }

    const navArticles = () => {
      router.push('/blogs')
    }
    
    const navScroll = (e) => {
      if(e.target.id == "edu-timeline" || e.target.id == "tl-heading" || e.target.id == "tl-container" ||  e.target.classList == "q-px-lg q-pb-md"||
         e.target.classList == "q-timeline__heading-title" ||
         e.target.classList == "line-title" || 
         e.target.classList == "subject" || 
         e.target.classList == "subject-list" || 
         e.target.id == "exp-timeline" ||
         e.target.id == "edu-timeline" ||
         e.target.id == "timelines" ||
         e.target.classList == "q-timeline__title" || e.target.classList == "exp-content" ||
         e.target.classList == "q-timeline__content" || e.target.classList == "q-timeline__subtitle" || 
         e.target.classList == "q-timeline__dot text-secondary" || 
         e.target.classList == "q-timeline__dot text-orange" || 
         e.target.classList == "notranslate material-icons q-icon row items-center justify-center" ||
         e.target.classList == "q-timeline__entry q-timeline__entry--left event-title" ||
         e.target.classList == "q-timeline__entry q-timeline__entry--left q-timeline__entry--icon event-title" || 
         e.target.classList =="q-timeline__entry q-timeline__entry--right q-timeline__entry--icon event-title" ||
         e.target.classList == "q-timeline__entry q-timeline__entry--right event-title" || e.target.nodeName == "SPAN" || (e.target.nodeName == "DIV" && e.target.innerHTML == "")) {
      } else {
        if (e.deltaY < 0) {
          router.push('/skills')
        }
        if (e.deltaY > 0) {
          router.push('/blogs')
        }
      }
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })
    return { container, navSkills, navArticles, navScroll, 
      layout: computed(() => {
        return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
      }) 
    }
  }
}
</script>

<style lang="scss" scoped>
$green: #7ed957;
$blue: #5271ff;

#experience {
  .links {
    color: #7ed957;
  }
  width: 100%;
  position: relative;
  z-index: 0;
  display: flex;
  #edu-container {
    margin: 0px 15px;
    width: 100%;
    #edu-title {
      width: 880px !important;
      h1 {
        font-size: 65px !important;
        margin: 25px;
      }
      h5 {
        margin: 20px;
      }
    }
    #timelines {
      margin-bottom: 20px;
      .subject-list {
        font-family: 'Caveat', cursive;
        font-size: 16px;
        margin-right: 20px;
        list-style-type: none;
      }
      .event-title {
        padding-top: 20px; color: #fff;
      }
      .line-title {
        padding: 0; 
        // font-size: 26px;
        margin: 20px 0 0 0;
        color: #7ed957 !important;
      }
      display: flex;
      width: 100%;
      position: relative;
      h6 {
        font-size: 20px !important;
        padding: 18px !important;
      }
      #edu-timeline {
        width: 48%;
        height: 400px !important;
        overflow-y: scroll;
      }
      #exp-timeline {
        width: 48%;
        height: 400px !important;
        overflow-y: scroll;
      }
      .exp-content {
        font-family: 'Caveat', cursive;
        font-size: 20px;
        color: #fff;
      }
    }
  }
}

.q-timeline__title {
  margin: revert !important;
}

#experience:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

// larger laptops
@media (min-width: 1580px) {
  #experience {
    #edu-container {
      #edu-title {
        width: 1122px !important;
        h1 {
          font-size: 84px !important;
        }
      }
      #timelines {
        // .subject-list {
        //   font-size: 20px;
        // }

        // .line-title {
        // font-size: 28px !important;
        // }
         #edu-timeline, #exp-timeline {
          height: 570px !important;
         }
      }
    }
  }
}
@media (max-width: 1580px) {
  #experience {
    #edu-container {
      #timelines {
        #edu-timeline, #exp-timeline {
          height: 350px !important;
         }
      }
    }
  }
}
// Laptop 1
@media (max-width: 1040px) {
  #experience {
    #edu-container {
      #edu-title {
        width: 700px !important;
        h1 {
          font-size: 50px !important;
          margin: 0px 24px;
        }
      }
    }
  }
}

// Tablet
@media (max-width: 830px) {
  #experience {
    margin: -40px 10px 0px 10px !important;
    position: relative;
    display: block;
    overflow-y: scroll;
    #edu-container {
      display: block !important;
      width: 100% !important;
      margin-left: 2px;
      #edu-title {
        width: 560px !important;
        h1 {
          font-size: 65px !important;
          line-height: 55px !important;
          margin: 5px 25px;
        }
      }
      #timelines {
        display: block !important;
        width: 100% !important;
        #edu-timeline {
          display: block !important;
          height: auto !important;
          width: 100% !important;
          margin: 20px 10px;
          overflow-y: unset;
        }
        #exp-timeline {
          display: block !important;
          height: auto !important;
          width: 100% !important;
          margin: 20px 10px;
          overflow-y: unset;
        }
      }
    }
    .closing-tags {
      margin: 10px 0px !important;
      height: 70px !important;
    }
  }
}

// Tablet 2
@media (max-width: 740px) {
  #experience {
    #edu-container {
      #edu-title {
        width: 640px !important;
        h1 {
          font-size: 44px !important;
          margin: 0px 36px;
        }
      }
    }
  }
}
// Tablet 3
@media (max-width: 660px) {
  #experience {
    #edu-container {
      #edu-title {
        width: 560px !important;
        h1 {
          font-size: 40px !important;
          margin: 0px 24px;
        }
      }
    }
  }
}

// Tablet 3
@media (max-width: 580px) {
  #experience {
    #edu-container {
      #edu-title {
        width: 470px !important;
        h1 {
          font-size: 32px !important;
          margin: 0px 24px;
        }
      }
    }
  }
}

// Mobile
@media (max-width: 426px) {
  #experience {
    h5 {
      font-size: 18px;
      margin: 0 0 18px 0 !important;
      line-height: 18px;
    }
    h6 {
      font-size: 16px;
      margin: 0px !important;
    }
    #edu-container {
      #edu-title {
        width: 260px !important;
        margin-left: 16px !important;
        h1 {
          font-size: 38px !important;
          line-height: 34px !important;
          margin: -5px 18px 15px 18px !important;
        }
      }
    }
  }
}

</style>