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
          <h1 class="blog-header">{{ blogs[0].title }}</h1>
          <p class="para">{{ blogs[0].paragraphs[0].content}}</p>
          <img class="blog-img" :src="blogs[0].graphics[0].source" />
          <p class="para">{{ blogs[0].paragraphs[1].content}}</p>
          <p class="para">{{ blogs[0].paragraphs[2].content}}</p>
          <p class="para">{{ blogs[0].paragraphs[3].content}}</p>
          <img class="blog-img" style="width: 75% !important;" :src="blogs[0].graphics[1].source" />
          <p class="para">{{ blogs[0].paragraphs[4].content}}</p>
          <p class="para">{{ blogs[0].paragraphs[5].content}}</p>
          <p class="para">{{ blogs[0].paragraphs[6].content}}</p>
          <p class="para">{{ blogs[0].paragraphs[7].content}}</p>
          <p class="para">{{ blogs[0].paragraphs[8].content}}</p>
          <br>
          <div id="b1g1"></div>
          <p class="para">{{ blogs[0].paragraphs[9].content}}</p>
          <br>
          <div id="b1g2"></div>
          <p class="para">{{ blogs[0].paragraphs[10].content}}</p>
          <p class="para">{{ blogs[0].paragraphs[11].content}}</p>
          <p class="para">{{ blogs[0].paragraphs[12].content}}</p>
          <br>
          <div id="b1g3"></div>
          <p class="para">{{ blogs[0].paragraphs[13].content}}</p>
          <p class="para">Codesandbox playground link to sauce code: <a class="links" href="https://codesandbox.io/s/vue-looping-qwzoy">https://codesandbox.io/s/vue-looping-qwzoy</a></p>
          <p class="para">Follow me on Twitter: <a class="links" href="https://twitter.com/cbazil">https://twitter.com/cbazil</a> Thanks for your time, and hope you've learnt something new.</p>
          <p class="para">{{ blogs[0].paragraphs[14].content}}</p>
        </div>
        <div id="blog2" v-if="page == 2">
          <h1 class="blog-header">{{ blogs[1].title }}</h1>
          <img class="blog-img" :src="blogs[1].graphics[0].source" />
          <p class="para">{{ blogs[1].paragraphs[0].content }}</p>
          <p class="para">We'll jump right into it, Please do NOTE that this tutorial will only focus on setting up a backend, so we won't have any client. I will be testing http requests using <a class="links" href="https://www.postman.com/downloads/">POSTMAN</a>.</p>
          <p class="para">First let's create ourselves a folder where we'll handle our code. I have named mine “vanilla-json-server” and the IDE of my choice will be <a class="links" href="https://code.visualstudio.com/Download">VSCODE</a>.</p>
          <p class="para">{{ blogs[1].paragraphs[1].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[1].one_liner[0].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[1].paragraphs[2].content }}</p>
          <p class="para">{{ blogs[1].paragraphs[3].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[1].one_liner[1].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[1].paragraphs[4].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[1].one_liner[2].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[1].paragraphs[5].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[1].one_liner[3].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[1].paragraphs[6].content }}</p>
          <div id="b2g1"></div>
          <p class="para">{{ blogs[1].paragraphs[7].content }}</p>
          <div id="b2g2"></div>
          <p class="para">{{ blogs[1].paragraphs[8].content }}</p>
          <p class="para">{{ blogs[1].paragraphs[9].content }}</p>
          <div id="b2g3"></div>
          <p class="para">{{ blogs[1].paragraphs[10].content }}</p>
           <div class="one-liner">
            <div class="liner-content">{{ blogs[1].one_liner[4].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[1].paragraphs[11].content }}</p>
          <img class="blog-img" :src="blogs[1].graphics[1].source" />
          <img class="blog-img" :src="blogs[1].graphics[2].source" />
          <h6 class="blog-sub-heading">{{ blogs[1].headers[0].title }}</h6>
          <p class="para">{{ blogs[1].paragraphs[12].content }}</p>
          <h6 class="blog-sub-heading">{{ blogs[1].headers[1].title }}</h6>
          <p class="para">{{ blogs[1].paragraphs[13].content }}</p>
          <p class="para">{{ blogs[1].paragraphs[14].content }}</p>
          <img class="blog-img" :src="blogs[1].graphics[3].source" />
          <p class="para">{{ blogs[1].paragraphs[15].content }}</p>
          <img class="blog-img" :src="blogs[1].graphics[4].source" />
          <h6 class="blog-sub-heading">{{ blogs[1].headers[2].title }}</h6>
          <p class="para">{{ blogs[1].paragraphs[16].content }}</p>
          <img class="blog-img" :src="blogs[1].graphics[5].source" />
          <h6 class="blog-sub-heading">{{ blogs[1].headers[3].title }}</h6>
          <p class="para">{{ blogs[1].paragraphs[17].content }}</p>
          <img class="blog-img" :src="blogs[1].graphics[6].source" />
          <p class="para">{{ blogs[1].paragraphs[18].content }}</p>
          <p class="para">Here’s the <a class="links" href="https://github.com/Cbazil/vanilla-json-server-part-1">LINK</a> to project repo.</p>
          <p class="para">{{ blogs[1].paragraphs[19].content }}</p>
          <p class="para">Feel free to Follow <a class="links" href="https://twitter.com/Cbazil3">Me</a> on Twitter. Cheers :)</p>
        </div>
        <div id="blog3" v-if="page == 3">
          <h1 class="blog-header">{{ blogs[2].title }}</h1>
          <div class="toCenter">
            <img class="blog-img" style="width: 80%;" :src="blogs[2].graphics[0].source" />
          </div>
          <p class="para">{{ blogs[2].paragraphs[0].content }}</p>
          <p class="para">{{ blogs[2].paragraphs[1].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[2].one_liner[0].content }}</div>
          </div>
          <p class="para">{{ blogs[2].paragraphs[2].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[2].one_liner[1].content }}</div>
          </div>
          <p class="para">{{ blogs[2].paragraphs[3].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[2].one_liner[2].content }}</div>
          </div>
          <p class="para">{{ blogs[2].paragraphs[4].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[2].one_liner[3].content }}</div>
          </div>
          <p class="para">{{ blogs[2].paragraphs[5].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[2].one_liner[4].content }}</div>
          </div>
          <p class="para">{{ blogs[2].paragraphs[6].content }}</p>
          <img class="blog-img" :src="blogs[2].graphics[1].source" />
          <p class="para">{{ blogs[2].paragraphs[7].content }}</p>
          <ul class="ulist">
            <li class="para"><p class="para">{{  blogs[2].paragraphs[8].content }}</p></li>
            <li class="para"><p class="para">{{  blogs[2].paragraphs[9].content }}</p></li>
            <li class="para"><p class="para">{{  blogs[2].paragraphs[10].content }}</p></li>
          </ul>
          <div id="b3g1"></div>
          <ul class="ulist">
            <li class="para"><p class="para">{{  blogs[2].paragraphs[11].content }}</p></li>
          </ul>
          <div id="b3g2"></div>
          <ul class="ulist">
            <li class="para"><p class="para">{{  blogs[2].paragraphs[12].content }}</p></li>
          </ul>
          <div class="toCenter">
            <img class="blog-img" style="width: 60%;" :src="blogs[2].graphics[2].source" />
          </div>
          <p class="para">{{ blogs[2].paragraphs[13].content }}</p>
          <p class="para">{{ blogs[2].paragraphs[14].content }}</p>
          <p class="para">{{ blogs[2].paragraphs[15].content }}</p>
          <ul class="ulist">
            <li class="para"><p class="para">{{  blogs[2].paragraphs[16].content }}</p></li>
            <li class="para"><p class="para">{{  blogs[2].paragraphs[17].content }}</p></li>
            <li class="para"><p class="para">{{  blogs[2].paragraphs[18].content }}</p></li>
            <li class="para"><p class="para">{{  blogs[2].paragraphs[19].content }}</p></li>
            <li class="para"><p class="para">{{  blogs[2].paragraphs[20].content }}</p></li>
          </ul>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[2].one_liner[5].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[2].paragraphs[21].content }}</p>
          <div id="b3g3"></div>
          <p class="para">{{ blogs[2].paragraphs[22].content }}</p>
          <div id="b3g4"></div>
          <p class="para">{{ blogs[2].paragraphs[23].content }}</p>
          <div id="b3g5"></div>
          <p class="para">{{ blogs[2].paragraphs[24].content }}</p>
          <div id="b3g6"></div>
          <p class="para">{{ blogs[2].paragraphs[25].content }}</p>
          <div id="b3g7"></div>
          <p class="para">{{ blogs[2].paragraphs[26].content }}</p>
          <p class="para">{{ blogs[2].paragraphs[27].content }}</p>
          <p class="para">{{ blogs[2].paragraphs[28].content }}</p>
          <p class="para">{{ blogs[2].paragraphs[29].content }}</p>
          <div id="b3g8"></div>
          <p class="para">{{ blogs[2].paragraphs[30].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[2].one_liner[6].content }}</div>
          </div>
          <p class="para">{{ blogs[2].paragraphs[31].content }}</p>
          <p class="para">{{ blogs[2].paragraphs[32].content }}</p>
          <div class="toCenter">
            <img class="blog-img" style="width: 60%;" :src="blogs[2].graphics[3].source" />
          </div>
          <br>
          <p class="para">{{ blogs[2].paragraphs[33].content }}</p>
          <p class="para">Find code repo <a class="links" href="https://github.com/Cbazil/recycling-vue-input-components-vuetify">here</a>. Feel free to clone and test for yourselves</p>
          <p class="para">Follow me on Twitter <a class="links" href="https://twitter.com/Cbazil3">@cbazil3</a> for updates.</p>
          <p class="para">{{ blogs[2].paragraphs[34].content }}</p>
          <p class="para">{{ blogs[2].paragraphs[35].content }}</p>
        </div>
        <div id="blog4" v-if="page == 4">
          <h1 class="blog-header">{{ blogs[3].title }}</h1>
          <img class="blog-img" :src="blogs[3].graphics[0].source" />
          <p class="para">Hey there everyone, today I'd like to demonstrate how to host your backend server to work online. Just note that we can basically host any backend API we built to be accessible for online use among your app/API users. Instead of using a popular no-SQL or SQL database which is recommended in the production stage of your application, We'll be hosting our JSON-server from the article <a class="links" href="https://medium.com/cbazil-dev/setting-up-a-quick-json-server-restful-api-e5535685c223">Setting up a quick JSON server (RESTful API) | by Chad Bosch | Cbazil.Dev | Medium</a> I've provided.</p>
          <p class="para">Clone my repo if need be: <a class="links" href="https://github.com/Cbazil/vanilla-json-server-part-1.git">https://github.com/Cbazil/vanilla-json-server-part-1.git</a></p>
          <p class="para">{{ blogs[3].paragraphs[0].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[3].one_liner[0].content }}</div>
          </div>
          <br>
          <p class="para">To host our app we'll use Heroku, one of the best free options out there if not the best. Visit <a class="links" href="https://www.heroku.com/">https://www.heroku.com/</a> to get started, Make sure you have an account. You have a limit of 5 projects on Heroku. Once you have reached your dashboard. Locate and click “NEW”</p>
          <div class="toCenter">
            <img class="blog-img" style="width: 40%;" :src="blogs[3].graphics[1].source" />
          </div>
          <p class="para">{{ blogs[3].paragraphs[1].content }}</p>
          <p class="para">{{ blogs[3].paragraphs[2].content }}</p>
          <img class="blog-img" :src="blogs[3].graphics[2].source" />
          <p class="para">{{ blogs[3].paragraphs[3].content }}</p>
          <p class="para">Link: <a class="links" href="https://devcenter.heroku.com/articles/heroku-cli">The Heroku CLI | Heroku Dev Center</a></p>
          <p class="para">{{ blogs[3].paragraphs[4].content }}</p>
          <p class="para">{{ blogs[3].paragraphs[5].content }}</p>
          <div id="b4g1"></div>
          <p class="para">{{ blogs[3].paragraphs[6].content }}</p>
          <p class="para">{{ blogs[3].paragraphs[7].content }}</p>
          <p class="para"><u>https://json-server-heroku-hosting.herokuapp.com</u> will be in place of <u>http://localhost:3000</u> (Use URL heroku gives you)</p>
          <p class="para">{{ blogs[3].paragraphs[8].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[3].one_liner[1].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[3].paragraphs[9].content }}</p>
          <p class="para">{{ blogs[3].paragraphs[10].content }}</p>
          <p class="para">{{ blogs[3].paragraphs[11].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[3].one_liner[2].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[3].paragraphs[12].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[3].one_liner[3].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[3].paragraphs[13].content }}</p>
          <p class="para">{{ blogs[3].paragraphs[14].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[3].one_liner[4].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[3].paragraphs[15].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[3].one_liner[5].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[3].paragraphs[16].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[3].one_liner[6].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[3].paragraphs[17].content }}</p>
          <p class="para">{{ blogs[3].paragraphs[18].content }}</p>
          <p class="para">{{ blogs[3].paragraphs[19].content }}</p>
          <img class="blog-img" :src="blogs[3].graphics[3].source" />
          <img class="blog-img" :src="blogs[3].graphics[4].source" />
          <p class="para">{{ blogs[3].paragraphs[20].content }}</p>
        </div>
        <div id="blog5" v-if="page == 5">
          <h1 class="blog-header">{{ blogs[4].title }}</h1>
          <p class="para">{{ blogs[4].paragraphs[0].content }}</p>
          <img class="blog-img" :src="blogs[4].graphics[0].source" />
          <h6 class="blog-sub-heading">{{ blogs[4].headers[0].title }}</h6>
          <p class="para">{{ blogs[4].paragraphs[1].content }}</p>
          <p class="para">Installations for postgres are different on various Operating systems but do try the official site <a class="links" href="https://www.postgresql.org/download/">here</a>.</p>
          <h6 class="blog-sub-heading">{{ blogs[4].headers[1].title }}</h6>
          <p class="para">{{ blogs[4].paragraphs[2].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[4].one_liner[0].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[4].paragraphs[3].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[4].one_liner[1].content }}</div>
          </div>
          <br>
          <ul class="ulist">
            <li class="para"><p class="para">{{ blogs[4].paragraphs[4].content }}</p></li>
            <li class="para"><p class="para">{{ blogs[4].paragraphs[5].content }}</p></li>
            <li class="para"><p class="para">{{ blogs[4].paragraphs[6].content }}</p></li>
            <li class="para"><p class="para">{{ blogs[4].paragraphs[7].content }}</p></li>
            <li class="para"><p class="para">{{ blogs[4].paragraphs[8].content }}</p></li>
            <li class="para"><p class="para">{{ blogs[4].paragraphs[9].content }}</p></li>
            <li class="para"><p class="para">{{ blogs[4].paragraphs[10].content }}</p></li>
          </ul>
          <h6 class="blog-sub-heading">{{ blogs[4].headers[2].title }}</h6>
          <ul class="ulist">
            <li class="para"><p class="para">{{ blogs[4].paragraphs[11].content }}</p></li>
            <li class="para"><p class="para">{{ blogs[4].paragraphs[12].content }}</p></li>
            <li class="para"><p class="para">{{ blogs[4].paragraphs[13].content }}</p></li>
          </ul>
          <p class="para">{{ blogs[4].paragraphs[14].content }}</p>
          <div id="b5g1"></div>
          <p class="para">{{ blogs[4].paragraphs[15].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[4].one_liner[2].content }}</div>
          </div>
          <br>
          <h6 class="blog-sub-heading">{{ blogs[4].headers[3].title }}</h6>
          <p class="para">{{ blogs[4].paragraphs[16].content }}</p>
          <div id="b5g2"></div>
          <p class="para">{{ blogs[4].paragraphs[17].content }}</p>
          <p class="para">{{ blogs[4].paragraphs[18].content }}</p>
          <p class="para">{{ blogs[4].paragraphs[19].content }}</p>
          <div id="b5g3"></div>
          <p class="para">{{ blogs[4].paragraphs[20].content }}</p>
          <p class="para">{{ blogs[4].paragraphs[21].content }}</p>
          <p class="para">{{ blogs[4].paragraphs[22].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[4].one_liner[3].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[4].paragraphs[23].content }}</p>
          <p class="para">{{ blogs[4].paragraphs[24].content }}</p>
          <div id="b5g4"></div>
          <p class="para">{{ blogs[4].paragraphs[25].content }}</p>
          <p class="para"><a class="links" href="https://devhints.io/knex">Knex cheatsheet (devhints.io)</a> — Use this as guidance when setting up your database using knex (Comes in handy)</p>
          <p class="para">{{ blogs[4].paragraphs[26].content }}</p>
          <div id="b5g5"></div>
          <p class="para">{{ blogs[4].paragraphs[27].content }}</p>
          <div id="b5g6"></div>
          <h6 class="blog-sub-heading">{{ blogs[4].headers[4].title }}</h6>
          <p class="para">{{ blogs[4].paragraphs[28].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[4].one_liner[4].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[4].paragraphs[29].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[4].one_liner[5].content }}</div>
          </div>
          <br>
          <h6 class="blog-sub-heading">{{ blogs[4].headers[5].title }}</h6>
          <p class="para">{{ blogs[4].paragraphs[30].content }}</p>
          <div class="one-liner" style="height: 80px !important; line-height: 15px; padding-top: 10px;">
            <div class="liner-content">
              <p class="para" style="font-family: unset !important; font-size: 18px;">{{ blogs[4].one_liner[6].content }}</p>
              <p class="para" style="font-family: unset !important; font-size: 18px;">{{ blogs[4].one_liner[7].content }}</p>
            </div>
          </div>
          <br>
          <p class="para">{{ blogs[4].paragraphs[31].content }}</p>
          <div id="b5g7"></div>
          <p class="para">{{ blogs[4].paragraphs[32].content }}</p>
          <div id="b5g8"></div>
          <p class="para">If you need to pre-populate data install and usethe <a class="links" href="https://www.npmjs.com/package/faker">faker package</a>. Make a loop of N (e.g 100 Users & 90 Addresses) then populate values into the database.</p>
          <p class="para">{{ blogs[4].paragraphs[33].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[4].one_liner[6].content }}</div>
          </div>
          <br>
          <h6 class="blog-sub-heading">{{ blogs[4].headers[6].title }}</h6>
          <p class="para">{{ blogs[4].paragraphs[34].content }}</p>
          <div class="one-liner">
            <div class="liner-content">{{ blogs[4].one_liner[7].content }}</div>
          </div>
          <br>
          <p class="para">{{ blogs[4].paragraphs[35].content }}</p>
          <p class="para">{{ blogs[4].paragraphs[36].content }}</p>
          <div id="b5g9"></div>
          <p class="para">{{ blogs[4].paragraphs[37].content }}</p> 
          <p class="para">{{ blogs[4].paragraphs[38].content }}</p> 

          <div id="b5g10"></div>
          <p class="para">{{ blogs[4].paragraphs[39].content }}</p>
          <p class="para">{{ blogs[4].paragraphs[40].content }}</p>
          <div id="b5g11"></div>
          <p class="para">{{ blogs[4].paragraphs[41].content }}</p>
          <div id="b5g12"></div>
          <p class="para">{{ blogs[4].paragraphs[42].content }}</p>
          <div id="b5g13"></div>
          <p class="para">{{ blogs[4].paragraphs[43].content }}</p>
          <div id="b5g14"></div>
          <p class="para">{{ blogs[4].paragraphs[44].content }}</p>
          <p class="para">{{ blogs[4].paragraphs[45].content }}</p>
        </div>
      </div>
      <div id="quick-access">
        <div style="margin: 35px 10px;">
          <h6>Medium link:</h6>
          <p style="margin: 15px;"><a class="links" :href="blogs[0].link">{{ blogs[page - 1].title }}</a></p>
          <!-- <q-list>
            <q-item class="qa-item">
              <q-item-section>
                <q-item-label class="qa-title">Looping through Arrays using VueJS</q-item-label>
                <q-item-label caption class="qa-desc" lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="qa-divider" spaced inset />
          </q-list> -->
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
   this.handleGetGists()
  },
  methods: {
     async handleGetGists () {
      if (this.page == 1) {
        postscribe('#b1g1', await this.blogs[0].gists[0].link);
        postscribe('#b1g2', await this.blogs[0].gists[1].link);
        postscribe('#b1g3', await this.blogs[0].gists[2].link);
      } 
      if (this.page == 2) {
        postscribe('#b2g1', await this.blogs[1].gists[0].link);
        postscribe('#b2g2', await this.blogs[1].gists[1].link);
        postscribe('#b2g3', await this.blogs[1].gists[2].link);
      }
      if (this.page == 3) {
        postscribe('#b3g1', await this.blogs[2].gists[0].link);
        postscribe('#b3g2', await this.blogs[2].gists[1].link);
        postscribe('#b3g3', await this.blogs[2].gists[2].link);
        postscribe('#b3g4', await this.blogs[2].gists[3].link);
        postscribe('#b3g5', await this.blogs[2].gists[4].link);
        postscribe('#b3g6', await this.blogs[2].gists[5].link);
        postscribe('#b3g7', await this.blogs[2].gists[6].link);
        postscribe('#b3g8', await this.blogs[2].gists[7].link);
      }
      if (this.page == 4) {
        postscribe('#b4g1', await this.blogs[3].gists[0].link);
      }
      if (this.page == 5) {
        postscribe('#b5g1', await this.blogs[4].gists[0].link);
        postscribe('#b5g2', await this.blogs[4].gists[1].link);
        postscribe('#b5g3', await this.blogs[4].gists[2].link);
        postscribe('#b5g4', await this.blogs[4].gists[3].link);
        postscribe('#b5g5', await this.blogs[4].gists[4].link);
        postscribe('#b5g6', await this.blogs[4].gists[5].link);
        postscribe('#b5g7', await this.blogs[4].gists[6].link);
        postscribe('#b5g8', await this.blogs[4].gists[7].link);
        postscribe('#b5g9', await this.blogs[4].gists[8].link);
        postscribe('#b5g10', await this.blogs[4].gists[9].link);
        postscribe('#b5g11', await this.blogs[4].gists[10].link);
        postscribe('#b5g12', await this.blogs[4].gists[11].link);
        postscribe('#b5g13', await this.blogs[4].gists[12].link);
        postscribe('#b5g14', await this.blogs[4].gists[13].link);
      }
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
  .links {
    color: #7ed957;
  }
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
    height: 417px;
    margin: 55px 20px 20px 20px;
    #content-box {
      padding-right: 40px;
      overflow-y: scroll;
      position: relative;
      width: 70%;
      p {
        font-family: 'Caveat', cursive;
        color: #fff;
        font-size: 24px;
      }
      img {
        width: 100%;
      }
      .ulist {
        color: #fff;
      }
      .one-liner {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        padding-left: 5px;
        color: #fff;
        border-radius: 5px;
        font-size: 16px;
        background: $dark;
      }
    }
    #quick-access {
      color: white;
      position: relative;
      width: 30%;
      margin-top: -20px;
      h6 {
        font-size: 24px !important;
        margin: 15px;
      }
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

// larger laptops
@media (min-width: 1580px) {
  #blog-container {
    height: 610px !important;
    .q-btn {
        font-size: 20px !important;
        margin: -10px 10px !important;
    }
  }
   
}

// Tablet
@media (max-width: 830px) {
  #blog-view {
    width: 100%;
    #blog-container {
      display: flex;
      width: 100%;
      margin-left: 0px !important;
      height: auto !important;
      flex-direction: column-reverse;
      #content-box {
        overflow-y: hidden;
        width: 100%;
      }
      #quick-access {
        margin-top: 40px;
        margin-left: -20px;
        width: 100%;
      }
    }
  }
}

// Mobile
@media (max-width: 580px) {
  #blog-view {
    #blog-container {
      margin-top: 0px;
      #content-box {
        h1 {
          font-size: 24px !important; 
          line-height: 28px !important;
        }
        .para {
          font-size: 16px !important;
        }
      }
    }
  }
}

.toCenter {
  display: flex;
  justify-content: center;
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