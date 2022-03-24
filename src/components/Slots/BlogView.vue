<template>
  <div id="blog-view">
    <div id="back-btn">
      <h6>&lt;q-btn&gt;</h6>
      <q-btn size="15px" @click.prevent="handleBackToMain" outline>back</q-btn>
      <h6 style="display: flex; position: relative; justify-content: end;">&lt;/q-btn&gt;</h6>
    </div>
    <div id="blog-container">
      <div id="content-box">
        <div id="blog1" v-if="page == 1">
          <h1>{{ blogs[0].title }}</h1>
        </div>
        <div id="blog2" v-if="page == 2">
          <h1>{{ blogs[1].title }}</h1>
        </div>
        <div id="blog3" v-if="page == 3">
          <h1>{{ blogs[2].title }}</h1>
        </div>
        <div id="blog4" v-if="page == 4">
          <h1>{{ blogs[3].title }}</h1>
        </div>
        <div id="blog5" v-if="page == 5">
          <h1>{{ blogs[4].title }}</h1>
        </div>
      </div>
      <div id="quick-access">
        <div class="q-pa-md" style="max-width: 350px">
          <q-list>
            <q-item class="qa-item">
              <q-item-section>
                <q-item-label class="qa-title">Looping through Arrays using VueJS</q-item-label>
                <q-item-label caption class="qa-desc" lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="qa-divider" spaced inset />

            <q-item class="qa-item">
              <q-item-section>
                <q-item-label class="qa-title">Looping through Arrays using VueJS</q-item-label>
                <q-item-label caption class="qa-desc" lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="qa-divider" spaced inset />
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'
import blog1 from '../../views/blogs/blog01'
import blog2 from '../../views/blogs/blog02'
import blog3 from '../../views/blogs/blog03'
import blog4 from '../../views/blogs/blog04'
import blog5 from '../../views/blogs/blog05'

export default {
  props: ['page', 'handleBackToMain'],
  data() {
    return {
      blogs: [
        blog1,
        blog2,
        blog3,
        blog4,
        blog5
      ]
    }
  },
  mounted() {
  //  this.handleGetGists()
  },
  methods: {
     async handleGetGists () {
      postscribe('#b1g1', await this.blogs[0].gists[0].link);
      postscribe('#b1g2', await this.blogs[0].gists[1].link);
      postscribe('#b1g3', await this.blogs[0].gists[2].link);
      postscribe('#b2g1', await this.blogs[1].gists[0].link);
      postscribe('#b2g2', await this.blogs[1].gists[1].link);
      postscribe('#b2g3', await this.blogs[1].gists[2].link);
    }
  }
}
</script>

<style lang="scss" scoped>
/* https://github.com/lonekorean/gist-syntax-themes */
$dark: #2b2c2e;
$grey: #353639;
$green: #7ed957;
$blue: #5271ff;

#blog-view {
  h1 {
    font-size: 42px !important;
    line-height: 45px !important;
  }
  h2 {
    font-size: 30px !important;
  }
  margin:  20px 40px;
  #back-btn {
    width: 160px !important;
    height: 30px;
    margin: 0;
    padding: 0;
    h6 {
      margin: 25px 0;
    }
    .q-btn {
      line-height: 20px;
      margin: -20px 20px;
      padding: 5px 40px;
      color: $green;
      font-family: 'Montserrat Alternates', sans-serif;
      font-size: 24px;
    }
  }
  #blog-container {
    display: flex;
    width: 100%;
    height: 500px;
    margin: 60px 20px;
    #content-box {
      overflow-y: scroll;
      position: relative;
      width: 70%
    }
    #quick-access {
      color: white;
      position: relative;
      width: 30%;
      margin-top: -20px;
      .qa-title {
        color: $green;
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 20px;
      }
      .qa-item {
        cursor: pointer;
        width: 100%;
        position: relative;
        margin: 0;
        .qa-desc {
          font-size: 16px;
          font-family: 'Caveat', cursive;
          color: #fff;
        }
      }
      .qa-divider {
        background: $green;
      }
      .qa-item:hover {
        border-radius: 5px;
        border: $green 1px solid;
      }
    }
  }
}

/* width */
::-webkit-scrollbar {
  width: 10px;
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