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
          <h1>My Projects</h1>
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
                          @click="$refs.carousel_p1.previous()"
                        />
                        <q-btn
                          push
                          dense 
                          style="4px; opacity: 0.75;"
                          color="light-green-12"
                          icon="fa fa-angle-right"
                          @click="$refs.carousel_p1.next()"
                        />
                        <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                      </q-carousel-control>
                      <q-carousel-control
                        position="bottom"
                        class="text-white rounded-borders"
                        style="background: rgba(0, 0, 0, .5); height: 60px; margin: 0; padding: 0;"
                      >
                        <h6 style="margin-top: 30px; color: white;">My First Online CV</h6>
                      </q-carousel-control>
                    </template>
                </q-carousel>
              </q-btn>
              <q-btn class="proj-btns" size="15px" outline>
                <div class="mini-container container">
                  <img style="width: 100%; height: 100%;" src="../assets/projects/tictactoe.png" alt="Tic Tac Toe">
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
                        style="background: rgba(0, 0, 0, .5); height: 60px; margin: 0; padding: 0;"
                      >
                        <h6 style="margin-top: 30px; color: white;">Health4Life App (Private)</h6>
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
                        style="background: rgba(0, 0, 0, .5); height: 60px; margin: 0; padding: 0;"
                      >
                        <h6 style="margin-top: 30px; color: white;">Life Choices Admin (Private)</h6>
                      </q-carousel-control>
                    </template>
                  </q-carousel>
              </div>
            </q-btn>
            <div class="duo-container">
              <q-btn class="proj-btns" size="15px" outline>
                <div class="mini-container container">
                  <img style="width: 100%; height: 100%;" src="../assets/projects/gameofluck.png" alt="Game of Luck">
                </div>
              </q-btn>
              <q-btn class="proj-btns" size="15px" outline>
                <div class="mini-container container">
                  <img style="width: 100%; height: 100%;" src="../assets/projects/doorguys.png" alt="Door Guys">
                </div>
              </q-btn>
            </div>
            <q-btn class="proj-btns" size="15px" outline>
              <div class="single-container container">
                <img style="width: 100%; height: 100%;" src="../assets/projects/cstash.png" alt="cstash">
              </div>
            </q-btn>
            <div class="duo-container">
              <q-btn class="proj-btns" size="15px" outline>
                <div class="mini-container container">
                  <img style="width: 100%; height: 100%;" src="../assets/projects/preloadcss.png" alt="Pre Load CSS">
                </div>
              </q-btn>
              <q-btn class="proj-btns" size="15px" outline>
                <div class="mini-container container">
                  <img style="width: 100%; height: 100%;" src="../assets/projects/cstash2.png" alt="CStash2">
                </div>
              </q-btn>
            </div>
             <q-btn class="proj-btns" size="15px" outline>
              <div class="single-container container">
                <img style="width: 100%; height: 100%;" src="../assets/projects/mycitylifestyle.png" alt="My City LifeStyle">
              </div>
            </q-btn>
          </div>
        </div>
      </div>
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
      if (e.deltaY < 0) {
        router.push('/blogs')
      }
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })

    return {
      project1: ref(1),
      project2: ref(2),
      project3: ref(3),
      project4: ref(4),
      project5: ref(5),
      project6: ref(6),
      autoplay: ref(true),
      navArticles,
      container,
      navScroll
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
        .single-container {
          margin: 0;
          padding: 0;
          width: 700px !important;
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
    }
  }
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