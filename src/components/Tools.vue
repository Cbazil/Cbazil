<template>
  <div id="tools-container" ref="tools" @keyup.left="() => { if(tool_idx > 0) { tool_idx-- }}" @keyup.right="() => { if(tool_idx < 11) { tool_idx++ }}" tabindex="0">
    <h5>&lt;Tools&gt;</h5>
    <div id="tools-main">
      <div class="main-box arrow-div">
        <q-icon 
          @click="tool_idx--"
          v-if="tool_idx > 0"
          size="70px"
          style="cursor: pointer;"
          name="fa fa-angle-left"
          color="white"
        />
      </div>
      <div class="tool-desc" v-if="tool_idx == 0">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="220" height="220" :src="tools[0].image" :alt="tools[0].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[0].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>vue.js</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>90%</p>
          </span>
          <div style="width: 90%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 1">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="220" height="220" :src="tools[1].image" :alt="tools[1].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[1].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>react.js</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>70%</p>
          </span>
          <div style="width: 70%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 2">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="220" height="220" :src="tools[2].image" :alt="tools[2].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[2].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>node.js</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>85%</p>
          </span>
          <div style="width: 85%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 3">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="190" height="190" :src="tools[3].image" :alt="tools[3].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[3].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>html</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>90%</p>
          </span>
          <div style="width: 90%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 4">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="230" height="230" :src="tools[4].image" :alt="tools[4].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[4].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>css</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>80%</p>
          </span>
          <div style="width: 80%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 5">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="200" height="200" :src="tools[5].image" :alt="tools[5].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[5].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>sass</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>80%</p>
          </span>
          <div style="width: 80%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 6">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="200" height="200" :src="tools[6].image" :alt="tools[6].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[6].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>Firebase</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>65%</p>
          </span>
          <div style="width: 65%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 7">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="220" height="220" :src="tools[7].image" :alt="tools[7].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[7].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>MongoDB</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>75%</p>
          </span>
          <div style="width: 75%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 8">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="220" height="220" :src="tools[8].image" :alt="tools[8].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[8].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>knex.js</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>80%</p>
          </span>
          <div style="width: 80%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 9">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="220" height="220" :src="tools[9].image" :alt="tools[9].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[9].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>PostgreSQL</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>75%</p>
          </span>
          <div style="width: 75%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 10">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="220" height="220" :src="tools[10].image" :alt="tools[10].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[10].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>Typescript</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>60%</p>
          </span>
          <div style="width: 60%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="tool-desc" v-if="tool_idx == 11">
        <div class="main-box image-div">
          <div class="image-sqr">
            <img width="260" height="260" :src="tools[11].image" :alt="tools[11].image_alt">
          </div>
        </div>
        <div class="main-box box-tool-desc">
          <h2>{{ tools[11].desc }}</h2>
        </div>
        <div class="skill-name">
          <h4>Three.js</h4>
        </div>
        <div class="skill-bar">
          <span class="skill-lvl">
            <p>55%</p>
          </span>
          <div style="width: 55%; background: #7ed957; height: inherit;"></div>
        </div>
      </div>
      <div class="main-box arrow-div">
        <q-icon
          @click="tool_idx++"
          v-if="tool_idx < 11"
          size="70px"
          style="cursor: pointer;"
          name="fa fa-angle-right"
          color="white"
        />
      </div>
    </div>  
    <div id="mini-cntrs">
      <div class="mini-box" :class="{on_tool: on_vue}" @click="tool_idx = 0">
        <img width="36" height="36" src="../assets/stacks/vue.png" alt="vuejs">
      </div>
      <div class="mini-box" :class="{on_tool: on_react}" @click="tool_idx = 1">
        <img width="36" height="36" src="../assets/stacks/react.png" alt="reactjs">
      </div>
      <div class="mini-box" :class="{on_tool: on_node}" @click="tool_idx = 2">
        <img width="35" height="35" src="../assets/stacks/node.png" alt="nodejs">
      </div>
      <div class="mini-box" :class="{on_tool: on_html}" @click="tool_idx = 3">
        <img width="30" height="30" src="../assets/stacks/html.png" alt="html">
      </div>
      <div class="mini-box" :class="{on_tool: on_css}" @click="tool_idx = 4">
        <img width="36" height="36" src="../assets/stacks/css.png" alt="css">
      </div>
      <div class="mini-box" :class="{on_tool: on_sass}" @click="tool_idx = 5">
        <img width="32" height="32" src="../assets/stacks/sass.png" alt="sass">
      </div>
      <div class="mini-box" :class="{on_tool: on_firebase}" @click="tool_idx = 6">
        <img width="33" height="33" src="../assets/stacks/firebase.png" alt="firebase">
      </div>
      <div class="mini-box" :class="{on_tool: on_mongodb}" @click="tool_idx = 7">
        <img width="32" height="32" src="../assets/stacks/mongodb.png" alt="mongodb">
      </div>
      <div class="mini-box" :class="{on_tool: on_knex}" @click="tool_idx = 8">
        <img width="30" height="30" src="../assets/stacks/knex.png" alt="knexjs">
      </div>
      <div class="mini-box" :class="{on_tool: on_postgresql}" @click="tool_idx = 9">
        <img width="32" height="32" src="../assets/stacks/postgresql.png" alt="postgres">
      </div>
      <div class="mini-box" :class="{on_tool: on_typescript}" @click="tool_idx = 10">
        <img width="32" height="32" src="../assets/stacks/typescript.png" alt="typescript">
      </div>
      <div class="mini-box" :class="{on_tool: on_three}" @click="tool_idx = 11">
        <img width="37" height="37" src="../assets/stacks/three.png" alt="threejs">
      </div>
    </div>
    <h5 style="display: flex; justify-content: end;">&lt;/Tools&gt;</h5>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
  export default {
    data() {
      return {
        tool_idx: 0,
        on_vue: true,
        on_react: false,
        on_node: false,
        on_html: false,
        on_css: false,
        on_sass: false,
        on_firebase: false,
        on_mongodb: false,
        on_knex: false,
        on_postgresql: false,
        on_typescript: false,
        on_three: false,
        tools: [
          { image: require('../assets/stacks/vue.png'), image_alt: "vuejs", desc: "vuejs is my favourite frontend framework, it's way simplier & easy to use then the others. Came across vue in 2018 through meetups, upskilled in vuejs in 2020 1st quarter." },
          { image: require('../assets/stacks/react.png'), image_alt: "reactjs", desc: "reactjs is my 2nd frontend choice, I would enjoy working with it again. I 1st started learning it as intern at Vulcan Labs in 2019, slightly keeping up to date with new features." },
          { image: require('../assets/stacks/node.png'), image_alt: "nodejs", desc: "Was 1st introduced to nodejs in 2018 at life choices coding academy with the Code Space curriculum, found it quite challenging at first but I'm quite comfortable & experienced at it." },
          { image: require('../assets/stacks/html.png'), image_alt: "html", desc: "Learnt all about html back in high school in 2013, I've always liked the practical part of CAT so using html was fan." },
          { image: require('../assets/stacks/css.png'), image_alt: "css", desc: "Learnt css during my school days along side html." },
          { image: require('../assets/stacks/sass.png'), image_alt: "sass", desc: "Was 1st introducted to sass at life choices coding academy in 2018, scss is my prefer styling language." },
          { image: require('../assets/stacks/firebase.png'), image_alt: "firebase", desc: "I learnt & looked into firebase in 2020 when I did some upskilling, I continued learning it in 2021 & it's my prefered no-sql hosted solution." },
          { image: require('../assets/stacks/mongodb.png'), image_alt: "mongodb", desc: "I was 1st introduced to mongodb at LCStudio in 2020, impletemented it in a learning journey set aside for the first intake of interns as a team lead." },
          { image: require('../assets/stacks/knex.png'), image_alt: "knex", desc: "I was 1st introduced to knexjs at Vulcan labs in 2019, I like that it makes SQL query building more productive & easier by just coding in javascipt. 1st choice when buidling complex API's." },
          { image: require('../assets/stacks/postgresql.png'), image_alt: "postgresql", desc: "I was 1st introduce to postgres at Vulcan Labs in 2019, only really worked extensively with postgresql at LCStudio. I prefer this over mysql." },
          { image: require('../assets/stacks/typescript.png'), image_alt: "typescript", desc: "I was first introduced to typescript at Vulcan Labs in 2019. Been keeping in practice & it's a langauge I'd enjoy working with." },
          { image: require('../assets/stacks/three.png'), image_alt: "threejs", desc: "I was first introduced to Three.js while at LCStudio in 2020, very much intrigued with it. Completing the threejs-journey course in 2022." },
        ]
      }
    },
    methods: {
      clear() {
        this.on_vue = false;
        this.on_react = false;
        this.on_node = false;
        this.on_html = false;
        this.on_css = false;
        this.on_sass = false;
        this.on_firebase = false;
        this.on_mongodb= false;
        this.on_knex= false;
        this.on_postgresql = false;
        this.on_typescript = false;
        this.on_three = false;
      }
    },
    mounted() {
      setInterval(() => { 
        this.$refs.tools.focus()
        if (this.tool_idx != 11) {
          this.tool_idx++ 
        } else {
          this.tool_idx = 0
        }
      }, 15000);
    },
    updated() {
      if (this.tool_idx == 0) { this.clear(); this.on_vue = true; }
      if (this.tool_idx == 1) { this.clear(); this.on_react = true; }
      if (this.tool_idx == 2) { this.clear(); this.on_node = true; }
      if (this.tool_idx == 3) { this.clear(); this.on_html = true; }
      if (this.tool_idx == 4) { this.clear(); this.on_css = true; }
      if (this.tool_idx == 5) { this.clear(); this.on_sass = true; }
      if (this.tool_idx == 6) { this.clear(); this.on_firebase = true; }
      if (this.tool_idx == 7) { this.clear(); this.on_mongodb = true; }
      if (this.tool_idx == 8) { this.clear(); this.on_knex = true; }
      if (this.tool_idx == 9) { this.clear(); this.on_postgresql = true; }
      if (this.tool_idx == 10) { this.clear(); this.on_typescript = true; }
      if (this.tool_idx == 11) { this.clear(); this.on_three = true; }
    }
  }
</script>

<style lang="scss" scoped>
$darkgrey: #2b2c2e;
$blue: #5271ff;
$green: #7ed957;
  #tools-container {
    margin-top: -45px;
    width: 100%;
    #tools-main {
      margin-top: -40px;
      height: 350px;
      border-radius: 4px;
      display: grid;
      grid-template-columns: 1fr 8fr 1fr;
      grid-gap: 1px;
      .tool-desc {
        // background: $darkgrey;
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 4fr;
      }
      .main-box {
        width: 100%;
        height: 100%;
        .image-sqr {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 240px;
          height: 240px;
        }
      }
      .skill-name {
        background: #fff;
        height: 30px;
        margin-top: 20px;
        padding: 0;
        text-align: center;
        h4 {
          font-size: 20px;
          margin: 0;
          padding: 0;
          line-height: 30px;
          font-weight: 5px;
          height: 14px;
        }
      }
      .skill-bar {
        margin-top: 20px;
        padding: 0;
        height: 30px;
        background: $blue;
        width: 100%;
        display: flex;
        .skill-lvl {
          position: absolute;
          z-index: 2;
          display: flex;
          justify-content: center;
          width: 22%;
          p {
            font-size: 20px;
            line-height: 30px;
            // font-weight: bold;
            color: #fff;
          }
        }
      }
      .box-tool-desc {
        display: flex;
        padding-right: 30px;
        height: 300px;
        justify-content: center;
        align-items: center;
        h2 {
          line-height: 34px;
          font-size: 20px !important;
        }
        // background: #fff;
      }
      .arrow-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .image-div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .on_tool {
      border: 2px solid #fff !important;
    }
    #mini-cntrs {
      display: grid;
      height: 40px;
      justify-content: center;
      margin: 20px 80px;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
      .mini-box {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        width: 100%;
        height: 100%;
        // background: $darkgrey;
      }
    }
  }
  #tools-container:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
</style>