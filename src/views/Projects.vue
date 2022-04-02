<template>
  <div id="projects" class="containers" ref="container" @keyup.up="navArticles" @wheel="navScroll($event)" tabindex="0">
    <PageContainer>
      <br />
      <h5>&lt;html&gt;</h5>
      <h5>&nbsp;&nbsp;&lt;body&gt;</h5>
      <div id="projects-container">
        <div id="proj-title">
          <br>
          <h5>&lt;h1&gt;</h5>
          <h1 id="heading1">My Projects</h1>
          <h5 style="display: flex; justify-content: end;">&lt;/h1&gt;</h5>
        </div>
        <div id="project-gallery">
          <div id="gallery-div">
            <div class="duo-container">
              <q-btn class="proj-btns" size="15px" outline>
                  <q-carousel
                    class="mini-container container"
                    swipeable
                    animated
                    v-model="project1"
                    :autoplay="autoplay"
                    ref="carousel_p1"
                    infinite
                  >
                    <q-carousel-slide style="border-radius: 2px;" :name="1" :img-src="require('../assets/projects/first-cv1.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="2" :img-src="require('../assets/projects/first-cv2.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="3" :img-src="require('../assets/projects/first-cv3.jpg')" />
                  
                    <template v-slot:control>
                      <q-carousel-control
                        position="top-left"
                        :offset="[18, 18]"
                        style="margin: 0; padding: 4px;"
                      >
                        <q-btn
                          push 
                          dense
                          rounded
                          size="18px"
                          style="padding: 4px 12px; opacity: 0.75; z-index: 2;"
                          color="light-green-12"
                          @click="toggleInfoP1"
                        >
                          <q-icon
                            size="12px"
                            name="fa fa-solid fa-info"
                          />
                        </q-btn>
                      </q-carousel-control>
                      <q-carousel-control
                        position="top-right"
                        :offset="[18, 18]"
                        style="margin: 0; padding: 4px;"
                      >
                        <q-btn
                          push
                          dense
                          style="margin-right: 4px; opacity: 0.75; z-index: 2;"
                          color="light-green-12" 
                          icon="fa fa-angle-left"
                          @click="$refs.carousel_p1.previous()"
                        />
                        <q-btn
                          push
                          dense 
                          style="4px; opacity: 0.75; z-index: 2;"
                          color="light-green-12"
                          icon="fa fa-angle-right"
                          @click="$refs.carousel_p1.next()"
                        />
                        <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                      </q-carousel-control>
                      <q-carousel-control
                        position="bottom"
                        class="text-white rounded-borders"
                        :class="{project_desc: infoP1}"
                        style="background: rgba(0, 0, 0, .6); height: 60px; margin: 0; padding: 0;"
                      >
                        <h6 style="margin-top: 30px; color: white;">My First Online CV</h6>
                        <p v-if="infoP1" style="text-transform: none; margin-top: -24px;">This was my very first online porfolio, I had it made before graduating from the CodeSpace course at Life Choices Coding Academy.</p>
                      </q-carousel-control>
                    </template>
                </q-carousel>
              </q-btn>
              <q-btn class="proj-btns" size="15px" outline>
                <div class="mini-container container csp1 csp" :class="{ project_desc: infoP2 }">
                  <q-btn
                    push
                    dense
                    rounded
                    size="18px"
                    class="i-icon"
                    color="light-green-12"
                    @click="toggleInfoP2"
                  >
                    <q-icon
                      size="12px"
                      name="fa fa-solid fa-info"
                    />
                  </q-btn>
                  <p v-if="infoP2" class="comingSoon">This is a Tic Tac Toe game I made from stratch, it needs updates to the AI Bot (Completed) and needs a frontend revamp.</p>
                </div>
              </q-btn>
            </div>
            <q-btn class="proj-btns" size="15px" outline>
              <div class="single-container container">
                <q-carousel
                    swipeable
                    animated
                    v-model="project2"
                    :autoplay="autoplay"
                    style="height: 412px !important;"
                    ref="carousel_p2"
                    infinite
                  >
                    <q-carousel-slide style="border-radius: 2px;" :name="1" :img-src="require('../assets/projects/h4l1.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="2" :img-src="require('../assets/projects/h4l2.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="3" :img-src="require('../assets/projects/h4l3.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="4" :img-src="require('../assets/projects/h4l4.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="5" :img-src="require('../assets/projects/h4l5.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="6" :img-src="require('../assets/projects/h4l6.jpg')" />

                    <template v-slot:control>
                      <q-carousel-control
                        position="top-left"
                        :offset="[18, 18]"
                        style="margin: 0; padding: 4px;"
                      >
                        <q-btn
                          push 
                          dense
                          rounded
                          size="18px"
                          style="padding: 4px 12px; opacity: 0.75; z-index: 2;"
                          color="light-green-12"
                          @click="toggleInfoP3"
                        >
                          <q-icon
                            size="12px"
                            name="fa fa-solid fa-info"
                          />
                        </q-btn>
                      </q-carousel-control>
                      <q-carousel-control
                        position="top-right"
                        :offset="[18, 18]"
                        style="margin: 0; padding: 4px;"
                      >
                        <q-btn
                          push 
                          dense
                          style="margin-right: 4px; opacity: 0.75;"
                          color="light-green-12" 
                          icon="fa fa-angle-left"
                          @click="$refs.carousel_p2.previous()"
                        />
                        <q-btn
                          push
                          dense 
                          style="4px; opacity: 0.75;"
                          color="light-green-12"
                          icon="fa fa-angle-right"
                          @click="$refs.carousel_p2.next()"
                        />
                        <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                      </q-carousel-control>
                      <q-carousel-control
                        position="bottom"
                        class="text-white rounded-borders"
                        :class="{project_desc: infoP3}"
                        style="background: rgba(0, 0, 0, .5); height: 60px; margin: 0; padding: 0;"
                      >
                        <h6 style="margin-top: 30px; color: white;">Health4Life App (Private)</h6>
                        <p v-if="infoP3" style="text-transform: none; margin-top: -24px;">This is a data capturing app, that captures HIV/Health risks tests done in coummunities and schools by the Health4Life Councellors at Life Choices. Link to this app can't be shared due to ownership and confidentiality. Though I have provideded some graphs that provides some insights of what I helped built. Reference <a class="links" href="https://www.linkedin.com/in/ryangeel/">Ryan Geel</a> Managing Director of Life Choices.</p>
                      </q-carousel-control>
                    </template>
                  </q-carousel>
              </div>
            </q-btn>
            <q-btn class="proj-btns" size="15px" outline>
              <div class="single-container container">
                <q-carousel
                    swipeable
                    animated
                    v-model="project3"
                    :autoplay="autoplay"
                    style="height: 412px !important;"
                    ref="carousel_p3"
                    infinite
                  >
                    <q-carousel-slide style="border-radius: 2px;" :name="1" :img-src="require('../assets/projects/lcadmin1.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="2" :img-src="require('../assets/projects/lcadmin2.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="3" :img-src="require('../assets/projects/lcadmin3.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="4" :img-src="require('../assets/projects/lcadmin4.jpg')" />
                    <q-carousel-slide style="border-radius: 2px;" :name="5" :img-src="require('../assets/projects/lcadmin5.jpg')" />

                    <template v-slot:control>
                      <q-carousel-control
                        position="top-left"
                        :offset="[18, 18]"
                        style="margin: 0; padding: 4px;"
                      >
                        <q-btn
                          push 
                          dense
                          rounded
                          size="18px"
                          style="padding: 4px 12px; opacity: 0.75; z-index: 2;"
                          color="light-green-12"
                          @click="toggleInfoP4"
                        >
                          <q-icon
                            size="12px"
                            name="fa fa-solid fa-info"
                          />
                        </q-btn>
                      </q-carousel-control>
                      <q-carousel-control
                        position="top-right"
                        :offset="[18, 18]"
                        style="margin: 0; padding: 4px;"
                      >
                        <q-btn
                          push 
                          dense
                          style="margin-right: 4px; opacity: 0.75;"
                          color="light-green-12" 
                          icon="fa fa-angle-left"
                          @click="$refs.carousel_p3.previous()"
                        />
                        <q-btn
                          push
                          dense
                          style="4px; opacity: 0.75;"
                          color="light-green-12"
                          icon="fa fa-angle-right"
                          @click="$refs.carousel_p3.next()"
                        />
                        <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                      </q-carousel-control>
                      <q-carousel-control
                        position="bottom"
                        class="text-white rounded-borders"
                        :class="{project_desc: infoP4}"
                        style="background: rgba(0, 0, 0, .5); height: 60px; margin: 0; padding: 0;"
                      >
                        <h6 style="margin-top: 30px; color: white;">Life Choices Admin (Private)</h6>
                        <p v-if="infoP4" style="text-transform: none; margin-top: -24px;">This is an admin data capturing systems app, that makes Life Choices all Digital which saves time and increases productivity within the organisation. Link to this app can't be shared due to ownership and confidentiality. Though I have provideded some graphs that provides some insights of what I helped built. Reference <a class="links" href="https://www.linkedin.com/in/ryangeel/">Ryan Geel</a> Managing Director of Life Choices.</p>
                      </q-carousel-control>
                    </template>
                  </q-carousel>
              </div>
            </q-btn>
            <div class="duo-container">
              <q-btn class="proj-btns" size="15px" outline>
                <div class="mini-container container csp2 csp" :class="{ project_desc: infoP5 }">
                  <q-btn
                    push
                    dense
                    rounded
                    size="18px"
                    class="i-icon"
                    color="light-green-12"
                    @click="toggleInfoP5"
                  >
                    <q-icon
                      size="12px"
                      name="fa fa-solid fa-info"
                    />
                  </q-btn>
                  <p v-if="infoP5" class="comingSoon">I'm building a leader board "ALL ABOUT LUCK GAME" where the top 1oo scores will be showcased on a live leaderboard. Test your luck!, At the end your chances are 50/50 until your luck runs out.</p>
                </div>
              </q-btn>
              <q-btn class="proj-btns" size="15px" outline>
                <div class="mini-container container csp3 csp" :class="{ project_desc: infoP6 }">
                   <q-btn
                    push
                    dense
                    rounded
                    size="18px"
                    class="i-icon"
                    color="light-green-12"
                    @click="toggleInfoP6"
                  >
                    <q-icon
                      size="12px"
                      name="fa fa-solid fa-info"
                    />
                  </q-btn>
                  <p v-if="infoP6" class="comingSoon">I'll be building a business calucator, that returns the total price of a selected/(in-app built) graphic with specified specs. This project is private as it contains business formulas.</p>
                </div>
              </q-btn>
            </div>
            <q-btn class="proj-btns" size="15px" outline>
              <div class="single-container container csp4 csp" :class="{ project_desc: infoP7 }">
                 <q-btn
                    push
                    dense
                    rounded
                    size="18px"
                    class="i-icon"
                    color="light-green-12"
                    @click="toggleInfoP7"
                  >
                    <q-icon
                      size="12px"
                      name="fa fa-solid fa-info"
                    />
                  </q-btn>
                  <p v-if="infoP7" class="comingSoon">This one I would consider to be one of the bigger projects I've decided to build, more info of this innovative project on release. Very Exited so please do stay tuned!</p>
              </div>
            </q-btn>
            <div class="duo-container">
              <q-btn class="proj-btns" size="15px" outline>
                <div class="mini-container container csp5 csp" :class="{ project_desc: infoP8 }">
                  <q-btn
                    push
                    dense
                    rounded
                    size="18px"
                    class="i-icon"
                    color="light-green-12"
                    @click="toggleInfoP8"
                  >
                    <q-icon
                      size="12px"
                      name="fa fa-solid fa-info"
                    />
                  </q-btn>
                  <p v-if="infoP8" class="comingSoon">I'll be making (10-12) pre-configured templates. Still working on the full idea (Well testing if it'll work), but I think I'm on to something.</p>
                </div>
              </q-btn>
              <q-btn class="proj-btns" size="15px" outline>
                <div class="mini-container container csp6 csp" :class="{ project_desc: infoP9}">
                  <q-btn
                    push
                    dense
                    rounded
                    size="18px"
                    class="i-icon"
                    color="light-green-12"
                    @click="toggleInfoP9"
                  >
                    <q-icon
                      size="12px"
                      name="fa fa-solid fa-info"
                    />
                  </q-btn>
                  <p v-if="infoP9" class="comingSoon">I see potential in this app and I've already idealize a way of scaling the app if it meets enough active users, Release 2 will provide revenue whilst it challenges/grows/supports the userbase.</p>
                </div>
              </q-btn>
            </div>
             <q-btn class="proj-btns" size="15px" outline>
              <div class="single-container container csp7 csp" :class="{ project_desc: infoP10 }">
                <q-btn
                    push
                    dense
                    rounded
                    size="18px"
                    class="i-icon"
                    color="light-green-12"
                    @click="toggleInfoP10"
                  >
                    <q-icon
                      size="12px"
                      name="fa fa-solid fa-info"
                    />
                  </q-btn>
                  <p v-if="infoP10" class="comingSoon">I've always been fascinated about 3D game development, and in the year of 2023 I'll be introducing a game idea that I personally think sounds great on paper. Excited about this and just hoping it succeeds so please do stay tuned.</p>
              </div>
            </q-btn>
          </div>
        </div>
      </div>
      <br>
      <h5>&nbsp;&nbsp;&lt;/body&gt;</h5>
      <h5>&lt;/html&gt;</h5>
    </PageContainer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PageContainer from '@/components/Slots/PageContainer.vue'

export default {
  components: {
    PageContainer
  },

  setup() {

    const router = useRouter()

    const navArticles = () => {
      router.push('/blogs')
    }

    const navScroll = (e) => {
      if(e.target.classList == "q-carousel__slide" || 
        e.target.classList == "fa fa-angle-right q-icon" ||
        e.target.classList == "fa fa-angle-left q-icon" ||
        e.target.classList == ""
      ) {
        } else {
          console.log(e.target)
          // if (e.deltaY < 0) {
          //   router.push('/blogs')
          // }
      }
    }

    const container = ref(null)

    const infoP1 = ref(false)
    const infoP2 = ref(false)
    const infoP3 = ref(false)
    const infoP4 = ref(false)
    const infoP5 = ref(false)
    const infoP6 = ref(false)
    const infoP7 = ref(false)
    const infoP8 = ref(false)
    const infoP9 = ref(false)
    const infoP10 = ref(false)
    
    onMounted(() => {
      container.value.focus()
    })
    const toggleInfoP1 = () => {
      infoP1.value = !infoP1.value;
    }
    const toggleInfoP2 = () => {
      infoP2.value = !infoP2.value;
    }
    const toggleInfoP3 = () => {
      infoP3.value = !infoP3.value;
    }
    const toggleInfoP4 = () => {
      infoP4.value = !infoP4.value;
    }
    const toggleInfoP5 = () => {
      infoP5.value = !infoP5.value;
    }
    const toggleInfoP6 = () => {
      infoP6.value = !infoP6.value;
    }
    const toggleInfoP7 = () => {
      infoP7.value = !infoP7.value;
    }
    const toggleInfoP8 = () => {
      infoP8.value = !infoP8.value;
    }
    const toggleInfoP9 = () => {
      infoP9.value = !infoP9.value;
    }
    const toggleInfoP10 = () => {
      infoP10.value = !infoP10.value;
    }

    return {
      project1: ref(1),
      project2: ref(2),
      project3: ref(3),
      project4: ref(4),
      project5: ref(5),
      project6: ref(6),
      project7: ref(7),
      project8: ref(8),
      autoplay: ref(true),
      navArticles,
      container,
      navScroll,
      infoP1,
      toggleInfoP1,
      infoP2,
      toggleInfoP2,
      infoP3,
      toggleInfoP3,
      infoP4,
      toggleInfoP4,
      infoP5,
      toggleInfoP5,
      infoP6,
      toggleInfoP6,
      infoP7,
      toggleInfoP7,
      infoP8,
      toggleInfoP8,
      infoP9,
      toggleInfoP9,
      infoP10,
      toggleInfoP10
    }
  }
}
</script>

<style lang="scss" scoped>
$green: #7ed957;
$blue: #5271ff;
#projects {
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
  #projects-container {
    margin: -35px 20px;
    width: 100%;
    #proj-title {
      width: 36%;
      h1 {
        margin-left: 25px;
        line-height: 5px !important;
      }
      h5 {
        margin: 20px;
      }
    }
    #project-gallery {
      width: 96%;
      #gallery-div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        height: 440px;
        padding-bottom: 100px;
        overflow-x: scroll;
        overflow-y: hidden;
        .csp1 {
          background-image: url('../assets/projects/tictactoe.png');
        }
        .csp2 {
          background-image: url('../assets/projects/gameofluck.png');
        }
        .csp3 {
          background-image: url('../assets/projects/doorguys.png');
        }
        .csp4 {
          background-image: url('../assets/projects/cstash.png');
        }
        .csp5 {
          background-image: url('../assets/projects/preloadcss.png');
        }
        .csp6 {
          background-image: url('../assets/projects/cstash2.png');
        }
        .csp7 {
          background-image: url('../assets/projects/mycitylifestyle.png');
        }
        .csp {
          position: relative;
          text-align: left;
          margin: 0 !important;
          padding: 0 !important;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100% 100%;
        }
        .single-container {
          margin: 0;
          padding: 0;
          width: 700px !important;
          height: 100%;
        }
        .duo-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-gap: 10px;
          .mini-container {
            margin: 0;
            padding: 0;
            height: 200px !important;
          }
        }
        .proj-btns {
          // margin: 0.5px !important;
          padding: 0.9px !important;
          color: $green;
        }
        .container {
          margin: 0;
          padding: 0;
          width: 350px;
        }
      }
      .i-icon {
        margin: 5px; 
        padding: 4px 12px;
        opacity: 0.75;
      }
      .comingSoon {
        text-transform: none;
        padding: 10px;
        text-align: center;
      }
      .project_desc {
        height: 100% !important;
        padding: 0 10px !important;
        padding-top: 20px !important;
        color: #fff;
        font-size: 17px;
        font-family: cursive;
        background: rgba(0, 0, 0, .85) !important;
      } 
    }
  }
}

.links {
  color: #7ed957;
}
.link:hover {
  font-size: 24px;
}

#projects:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

/* width */
::-webkit-scrollbar {
  height: 10px;
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

</style>