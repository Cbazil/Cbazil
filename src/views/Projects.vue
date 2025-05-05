<template>
  <div id="projects" class="containers" ref="container" @keyup.up="navArticles" @wheel="navScroll($event)" tabindex="0">
    <PageContainer>
      <div id="projects-container">
        <div id="proj-title">
          <h5>&lt;title&gt;</h5>
          <h1 id="heading1">My Projects</h1>
          <h5 style="display: flex; justify-content: flex-end;">&lt;/title&gt;</h5>
        </div>
        <div id="project-gallery">
          <div ref="scrollContainer" @wheel.prevent="handleWheel($event)" id="gallery-div">
            <div class="duo-container">
              <q-btn class="proj-btns" size="15px" outline>
                  <q-carousel
                    class="mini-container container"
                    swipeable
                    animate
                    v-model="project1"
                    :autoplay="autoplay"
                    ref="carousel_p1"
                    infinite
                  >
                    <q-carousel-slide @click.prevent="project1Link" style="border-radius: 2px; height: inherit !important;" :name="1" :img-src="require('../assets/projects/first-cv1.jpg')" />
                    <q-carousel-slide @click.prevent="project1Link" style="border-radius: 2px; height: inherit !important;" :name="2" :img-src="require('../assets/projects/first-cv2.jpg')" />
                    <q-carousel-slide @click.prevent="project1Link" style="border-radius: 2px; height: inherit !important;" :name="3" :img-src="require('../assets/projects/first-cv3.jpg')" />
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
                          style="opacity: 0.75; z-index: 2;"
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
                        <div class="project_container"> 
                          <h6 class="project_name">My First Online CV</h6>
                          <p v-if="infoP1" class="project_details">This was my very first online porfolio, I had it made before graduating from the CodeSpace course at Life Choices Coding Academy.</p>
                        </div>
                      </q-carousel-control>
                    </template>
                </q-carousel>
              </q-btn>
              <q-btn class="proj-btns" size="15px" outline>
                <q-carousel
                    class="mini-container container"
                    swipeable
                    animated
                    v-model="project2"
                    ref="carousel_p2"
                    infinite
                  >
                    <q-carousel-slide @click.prevent="project2Link" style="border-radius: 2px; height: inherit !important;" :name="1" :img-src="require('../assets/projects/tictactoe-2.jpg')" />
                    <q-carousel-slide @click.prevent="project2Link" style="border-radius: 2px; height: inherit !important;" :name="2" :img-src="require('../assets/projects/tictactoe-1.jpg')" />
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
                          @click="toggleInfoP2"
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
                          @click="$refs.carousel_p2.previous()"
                        />
                        <q-btn
                          push
                          dense 
                          style="opacity: 0.75; z-index: 2;"
                          color="light-green-12"
                          icon="fa fa-angle-right"
                          @click="$refs.carousel_p2.next()"
                        />
                        <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                      </q-carousel-control>
                      <q-carousel-control
                        position="bottom"
                        class="text-white rounded-borders"
                        :class="{project_desc: infoP2}"
                        style="background: rgba(0, 0, 0, .6); height: 60px; margin: 0; padding: 0;"
                      >
                      <div class="project_container"> 
                        <h6 class="project_name">TicTacToe AI Game</h6>
                        <p v-if="infoP2" class="project_details">This TicTacToe Game you can find on this portfolio's home and about pages, It's a AI base game I put together.</p>
                      </div>
                      </q-carousel-control>
                    </template>
                </q-carousel>
              </q-btn>
            </div>
            <q-btn class="proj-btns" size="15px" outline>
              <div class="single-container container">
                <q-carousel
                  swipeable
                  animated
                  v-model="project3"
                  :autoplay="autoplay"
                  style="height: 100% !important;"
                  ref="carousel_p3"
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
                        @click="$refs.carousel_p3.previous()"
                      />
                      <q-btn
                        push
                        dense 
                        style="opacity: 0.75;"
                        color="light-green-12"
                        icon="fa fa-angle-right"
                        @click="$refs.carousel_p3.next()"
                      />
                      <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                    </q-carousel-control>
                    <q-carousel-control
                      position="bottom"
                      class="text-white rounded-borders"
                      :class="{project_desc: infoP3}"
                      style="background: rgba(0, 0, 0, .5); height: 60px; margin: 0; padding: 0;"
                    >
                      <div class="project_container"> 
                        <h6 class="project_name">Health4Life App (Private)</h6>
                        <p v-if="infoP3" class="project_details">This is a data capturing app, that captures HIV/Health risks tests done in coummunities and schools by the Health4Life Councellors at Life Choices. Link to this app can't be shared due to ownership and confidentiality. Though I have provideded some graphs that provides some insights of what I helped built. Reference <a class="links" href="https://www.linkedin.com/in/ryangeel/">Ryan Geel</a> Managing Director of Life Choices.</p>
                      </div>
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
                    v-model="project4"
                    :autoplay="autoplay"
                    style="height: 100% !important;"
                    ref="carousel_p4"
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
                          @click="$refs.carousel_p4.previous()"
                        />
                        <q-btn
                          push
                          dense
                          style="opacity: 0.75;"
                          color="light-green-12"
                          icon="fa fa-angle-right"
                          @click="$refs.carousel_p4.next()"
                        />
                        <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                      </q-carousel-control>
                      <q-carousel-control
                        position="bottom"
                        class="text-white rounded-borders"
                        :class="{project_desc: infoP4}"
                        style="background: rgba(0, 0, 0, .5); height: 60px; margin: 0; padding: 0;"
                      >
                        <div class="project_container"> 
                          <h6 class="project_name">Life Choices Admin (Private)</h6>
                          <p v-if="infoP4" class="project_details">This is an admin data capturing systems app, that makes Life Choices all Digital which saves time and increases productivity within the organisation. Link to this app can't be shared due to ownership and confidentiality. Though I have provideded some graphs that provides some insights of what I helped built. Reference <a class="links" href="https://www.linkedin.com/in/ryangeel/">Ryan Geel</a> Managing Director of Life Choices.</p>
                        </div>
                      </q-carousel-control>
                    </template>
                  </q-carousel>
              </div>
            </q-btn>
            <div class="duo-container">
              <q-btn class="proj-btns" size="15px" outline>
                <q-carousel
                    class="mini-container container"
                    swipeable
                    animated
                    v-model="project5"
                    :autoplay="autoplay"
                    ref="carousel_p5"
                    infinite
                  >
                    <q-carousel-slide @click.prevent="project5Link" style="border-radius: 2px; height: inherit !important;" :name="1" :img-src="require('../assets/projects/unlucky_hole1.jpg')" />
                    <q-carousel-slide @click.prevent="project5Link" style="border-radius: 2px; height: inherit !important;" :name="2" :img-src="require('../assets/projects/unlucky_hole2.jpg')" />
                    <q-carousel-slide @click.prevent="project5Link" style="border-radius: 2px; height: inherit !important;" :name="3" :img-src="require('../assets/projects/unlucky_hole3.jpg')" />
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
                          @click="toggleInfoP5"
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
                          @click="$refs.carousel_p5.previous()"
                        />
                        <q-btn
                          push
                          dense 
                          style="opacity: 0.75; z-index: 2;"
                          color="light-green-12"
                          icon="fa fa-angle-right"
                          @click="$refs.carousel_p5.next()"
                        />
                        <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                      </q-carousel-control>
                      <q-carousel-control
                        position="bottom"
                        class="text-white rounded-borders"
                        :class="{project_desc: infoP5}"
                        style="background: rgba(0, 0, 0, .6); height: 60px; margin: 0; padding: 0;"
                      >
                        <div class="project_container"> 
                          <h6 class="project_name">Unlucky_Hole (GameOfLuck)</h6>
                          <p v-if="infoP5" class="project_details">Retro Leader board game, where you test how far your luck can get you before it runs out. Looking for alternative database, reworking RESTful API.</p>
                        </div>  
                      </q-carousel-control>
                    </template>
                </q-carousel>
              </q-btn>
              <q-btn class="proj-btns" size="15px" outline>
                <q-carousel
                    class="mini-container container"
                    swipeable
                    animated
                    v-model="project6"
                    :autoplay="autoplay"
                    ref="carousel_p6"
                    infinite
                  >
                    <q-carousel-slide @click.prevent="project6Link" style="border-radius: 2px; height: inherit !important;" :name="1" :img-src="require('../assets/projects/miniump-1.webp')" />
                    <q-carousel-slide @click.prevent="project6Link" style="border-radius: 2px; height: inherit !important;" :name="2" :img-src="require('../assets/projects/miniump-2.webp')" />
                    <q-carousel-slide @click.prevent="project6Link" style="border-radius: 2px; height: inherit !important;" :name="3" :img-src="require('../assets/projects/miniump-3.webp')" />
                    
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
                          @click="toggleInfoP6"
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
                          @click="$refs.carousel_p6.previous()"
                        />
                        <q-btn
                          push
                          dense 
                          style="opacity: 0.75; z-index: 2;"
                          color="light-green-12"
                          icon="fa fa-angle-right"
                          @click="$refs.carousel_p6.next()"
                        />
                        <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                      </q-carousel-control>
                      <q-carousel-control
                        position="bottom"
                        class="text-white rounded-borders"
                        :class="{project_desc: infoP6}"
                        style="background: rgba(0, 0, 0, .6); height: 60px; margin: 0; padding: 0;"
                      >
                      <div class="project_container">
                        <h6 class="project_name p_card">MiniUmp</h6>
                        <p v-if="infoP6" class="comingSoon">I'm building a score keeping and match fixing (Badminton) appplication, for a social group activity I participate in. (Still in development, needs refactor)</p>
                      </div>
                      </q-carousel-control>
                    </template>
                </q-carousel>
              </q-btn>
            </div>
            <q-btn class="proj-btns" size="15px" outline>
              <div class="single-container container">
                <q-carousel
                    swipeable
                    animated
                    v-model="project7"
                    :autoplay="autoplay"
                    style="height: 100% !important;"
                    ref="carousel_p7"
                    infinite
                  >
                    <q-carousel-slide  @click.prevent="project7Link" style="border-radius: 2px;" :name="1" :img-src="require('../assets/projects/codespace-1.webp')" />
                    <q-carousel-slide  @click.prevent="project7Link" style="border-radius: 2px;" :name="2" :img-src="require('../assets/projects/codespace-2.webp')" />
                    <q-carousel-slide  @click.prevent="project7Link" style="border-radius: 2px;" :name="3" :img-src="require('../assets/projects/codespace-3.webp')" />
                    <q-carousel-slide  @click.prevent="project7Link" style="border-radius: 2px;" :name="4" :img-src="require('../assets/projects/codespace-4.webp')" />

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
                          @click="toggleInfoP7"
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
                          @click="$refs.carousel_p7.previous()"
                        />
                        <q-btn
                          push
                          dense
                          style="opacity: 0.75;"
                          color="light-green-12"
                          icon="fa fa-angle-right"
                          @click="$refs.carousel_p7.next()"
                        />
                        <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                      </q-carousel-control>
                      <q-carousel-control
                        position="bottom"
                        class="text-white rounded-borders"
                        :class="{project_desc: infoP7}"
                        style="background: rgba(0, 0, 0, .5); height: 60px; margin: 0; padding: 0;"
                      >
                      <div  class="project_container"> 
                        <h6 class="project_name p_card">codespace.co.za</h6>
                        <p v-if="infoP7" class="comingSoon">I maintained and helped develop the 2024 redesigned website for the company, I followed given designs, replicated it from Adobe XD and made it reality.</p>
                      </div>
                      </q-carousel-control>
                    </template>
                  </q-carousel>
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
                  <div v-if="infoP8" class="project_container"> 
                    <h6 class="project_name p_card">CoXP</h6>
                    <p class="comingSoon">Building an activity schedular, where you can decide whether to join activities with friends.</p>
                  </div>
                </div>
              </q-btn>
              <q-btn class="proj-btns" size="15px" outline>
                <q-carousel
                    class="mini-container container"
                    swipeable
                    animated
                    v-model="project9"
                    :autoplay="autoplay"
                    ref="carousel_p9"
                    infinite
                  >
                    <q-carousel-slide style="border-radius: 2px; height: inherit !important;" :name="1" :img-src="require('../assets/projects/cstash-1.webp')" />
                    <q-carousel-slide style="border-radius: 2px; height: inherit !important;" :name="2" :img-src="require('../assets/projects/cstash-2.webp')" />
                    <q-carousel-slide style="border-radius: 2px; height: inherit !important;" :name="3" :img-src="require('../assets/projects/cstash-3.webp')" />
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
                          @click="toggleInfoP9"
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
                          @click="$refs.carousel_p9.previous()"
                        />
                        <q-btn
                          push
                          dense 
                          style="opacity: 0.75; z-index: 2;"
                          color="light-green-12"
                          icon="fa fa-angle-right"
                          @click="$refs.carousel_p9.next()"
                        />
                        <!-- <q-toggle dense dark color="light-green-12" v-model="autoplay" label="Auto Play" /> -->
                      </q-carousel-control>
                      <q-carousel-control
                        position="bottom"
                        class="text-white rounded-borders"
                        :class="{project_desc: infoP9}"
                        style="background: rgba(0, 0, 0, .6); height: 60px; margin: 0; padding: 0;"
                      >
                        <div class="project_container"> 
                          <h6 class="project_name">CStash</h6>
                          <p v-if="infoP9" class="project_details">CStash is one of my biggest passion projects yet, that might extend into enterprise later. It's a handy code saver by heart intended to be quick-access, copy-pasting great code to be reused or shared.</p>
                        </div>
                      </q-carousel-control>
                    </template>
                </q-carousel>
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
                  <div v-if="infoP10" class="project_container"> 
                    <h6 class="project_name p_card">sField</h6>
                    <p class="comingSoon">I've always been fascinated about 3D game development, and in the year of 2023 I'll be introducing a game idea that I personally think sounds great on paper. Excited about this and just hoping it succeeds so please do stay tuned.</p>
                  </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>
      <br>
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

    const container = ref(null)
    
    const navScroll = (e) => {
      if (windowWidth > 830) {
        if(e.target.classList == "q-carousel__slide" || 
          e.target.classList == "fa fa-angle-right q-icon" ||
          e.target.classList == "fa fa-angle-left q-icon" || 
          e.target.classList == "single-container container csp3 csp" || 
          e.target.classList == "single-container container csp4 csp" ||
          e.target.classList == "single-container container csp6 csp" ||
          e.target.classList == "single-container container csp7 csp" || 
          e.target.classList == "mini-container container csp5 csp" ||
          e.target.classList == "mini-container container csp3 csp" ||
          e.target.classList == "q-btn__content text-center col items-center q-anchor--skip justify-center row" || 
          e.target.classList == "q-btn q-btn-item non-selectable no-outline q-btn--outline q-btn--rectangle q-btn--actionable q-focusable q-hoverable proj-btns" ||
          e.target.classList == "fa fa-solid fa-info q-icon" || 
          e.target.classList == "q-carousel__control absolute absolute-bottom text-white rounded-borders" ||
          e.target.classList == "mini-container container csp6 csp" ||
          e.target.classList == "q-btn q-btn-item non-selectable no-outline q-btn--push q-btn--rectangle bg-light-green-12 text-white q-btn--actionable q-focusable q-hoverable q-btn--dense" ||
          e.target.classList == "q-btn q-btn-item non-selectable no-outline q-btn--push q-btn--rectangle q-btn--rounded bg-light-green-12 text-white q-btn--actionable q-focusable q-hoverable q-btn--dense" ||
          e.target.classList == "q-btn q-btn-item non-selectable no-outline q-btn--push q-btn--rectangle q-btn--rounded bg-light-green-12 text-white q-btn--actionable q-focusable q-hoverable q-btn--dense i-icon" || 
          e.target.id == "gallery-div" ||
          e.target.classList == "project_details" ||
          e.target.classList == "q-carousel__control absolute absolute-top-left" ||
          e.target.classList == "q-carousel__control absolute absolute-top-right" ||
          e.target.classList == "project_container" ||
          e.target.classList == "comingSoon" ||
          e.target.classList == "project_name p_card" ||
          e.target.classList == "project_name" || 
          e.target.classList == "duo-container"      
        ) { return } else {
          if (e.deltaY < 0) {
              router.push('/blogs')
          }
        }
      }
    }

    const windowWidth = ref(window.innerWidth);

    const scrollContainer = ref(null);

    const handleWheel = (event) => {
      if (windowWidth.value > 830) {
        // Desktop: Horizontal scrolling using deltaX
        if (event.deltaY > 0) {
          scrollContainer.value.scrollLeft += event.deltaY;
        } else {
          scrollContainer.value.scrollLeft -= Math.abs(event.deltaY);
        }
      } else {
        container.value.scrollTop += event.deltaY;
      }
    };

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

    const project1Link = () => {
      window.open("https://cbazil.github.io/Online-CV/index.html")
    }
    const project2Link = () => {
      window.open("https://cbazil-tictactoe.web.app")
    }

    const project5Link = () => {
      window.open("https://unlucky-hole.vercel.app")
    }

    const project7Link = () => {
      window.open("https://www.codespace.co.za")
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
      project8: ref(8),
      project9: ref(9),
      autoplay: ref(true),
      navArticles,
      container,
      navScroll,
      scrollContainer,
      handleWheel,
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
      toggleInfoP10,
      project1Link,
      project2Link,
      project5Link,
      project7Link
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
    margin: 0px 10px !important;
    width: 100%;
    #proj-title {
      width: 420px;
      h1 {
        font-size: 65px !important;
        margin: 25px;
      }
      h5 {
        margin: 20px;
      }
    }
    #project-gallery {
      width: 96.5%;
      #gallery-div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 8.5px;
        height: 426px;
        margin-left: 25px;
        padding-bottom: 20px;
        overflow-x: scroll;
        overflow-y: hidden;
        .csp1 {
          background-image: url('../assets/projects/tictactoe.png');
        }
        .csp2 {
          background-image: url('../assets/projects/unluckyhole.png');
        }
        .csp3 {
          background-image: url('../assets/projects/miniump.png');
        }
        .csp4 {
          background-image: url('../assets/projects/cstash.png');
        }
        .csp5 {
          background-image: url('../assets/projects/co-xp.png');
        }
        .csp6 {
          background-image: url('../assets/projects/cstash2.png');
        }
        .csp7 {
          background-image: url('../assets/projects/sfield.png');
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
          width: 780px !important;
          height: 100% !important;
          min-height: 100% !important;
        }
        .q-carousel__slides-container, .q-panel {
          overflow: hidden !important;
        }
        .duo-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-gap: 8.5px;
          .mini-container {
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 195px !important;
          }
        }
        .proj-btns {
          margin-top: 0.5px !important;
          margin-left: 0.5px !important;
          padding: 0.9px !important;
          color: $green;
        }
        .container {
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 348px;
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
      .project_name {
        margin-top: 30px;
        color: white;
      }
      .project_details {
        text-transform: none;
      }
      .project_desc {
        height: 100% !important;
        padding: 0 10px !important;
        padding-top: 20px !important;
        color: #fff;
        font-size: 17px;
        font-family: cursive;
        background: rgba(0, 0, 0, .85) !important;
          .project_container {            
            position: relative;
            height: inherit;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .p_card {
              margin-top: -50px; 
            }
          }       
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

// larger laptops
@media (min-width: 1580px) {
  #projects {
    #projects-container {
      #proj-title {
        width: 516px;
        h1 {
          font-size: 84px !important;
        }
      }
      #project-gallery {
        #gallery-div {
          height: 600px !important;
           .single-container {
              width: 1000px !important;
           }
          .duo-container {
            .mini-container {
              height: 280px !important;
            }
          }
          .container {
            width: 480px;
          }
        }
      }
    }
  }
}

// Laptop 1
@media (max-width: 1440px) {
  #projects {
    #projects-container {
       #project-gallery {
        #gallery-div {
          height: 360px !important;
          .single-container {
              width: 540px !important;
           }
          .duo-container {
            .mini-container {
              width: 300px !important;
              height: 165px !important;
            }
          }
          .project_details, .comingSoon {
            font-size: 11px;
          }
        }
      }
      margin-left: 5px;
      #proj-title {
        #heading1 {
          margin: 25px 35px !important;
        }
      }
    }
  }
}

// Tablet
@media (max-width: 830px) {
  #projects {
    display: flex;
    flex-direction: column;
    overflow-y: scroll !important;
    overflow-x: hidden !important;
    height: calc(100svh - 60px);
    position: relative;
    padding-top: 100px;
    #projects-container {
      display: flex;
      flex-direction: column;
      padding-bottom: 10px;
      position: relative;
      #project-gallery {
        #gallery-div {
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          height: inherit !important;
          .single-container {
            width: 100% !important;
           }
          .duo-container {
            display: flex;
            flex-direction: column;
            width: 100% !important;
            object-fit: cover;
            .proj-btns {
              width: 100% !important;
              margin-bottom: 0px;
                @media (max-width: 430px) {
                  height: 186px !important;
                }
              .mini-container {
                width: 100% !important;
                height: 356px !important;
                @media (max-width: 630px) {
                  height: 270px !important;
                }
                @media (max-width: 430px) {
                  height: 100% !important;
                }
              }
            }
          }
          .proj-btns {
            height: 360px !important;
            @media (max-width: 630px) {
              height: 270px !important;
            }
            width: 100% !important;
            object-fit: cover;
          }
        }
      }
    }
    .closing-tags {
      margin: 10px 0px !important;
      height: 70px !important;
    }
  }
}

// Mobile 
@media (max-width: 426px) {
  #projects {
    h5 {
      font-size: 18px;
      margin: 0 0 18px 0 !important;
      line-height: 18px;
    }
    h6 {
      font-size: 16px;
      margin: 0px !important;
    }
    #projects-container {
      margin-left: 20px !important;
      #proj-title {
        width: 240px !important;
        #heading1 {
          font-size: 38px !important;
          margin: -5px 20px 16px 20px !important;
        }
      }
      #project-gallery {
        -ms-scroll-limit-x-max: 0cm;
        #gallery-div {
          .duo-container {
            grid-template-columns: 1fr 1fr !important;
            .mini-container {
              width: 184px !important;
            }
          }
          .single-container {
            width: 100% !important;
            width: 184px !important;
            padding: 0px;
          }
          .proj-btns {
            height: 182px !important;
            object-fit: contain;
            margin: 5px;
          }
          .project_name {
            margin-top: 30px !important;
          }
          .project_details {
            margin-top: 20px !important;
            line-height: 15px !important;
            font-size: 13px !important;
          }
          .comingSoon {
            line-height: 15px !important;
            font-size: 13px !important;
          }
          .container {  
            margin: 0px;
            padding: 0px;
            width: 320px !important;
          }
        }
      }
    }
  }
}

</style>