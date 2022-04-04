<template>
  <div id="articles" ref="container" @keyup.up="navExp" @keyup.down="navProjects" @wheel="navScroll($event)" tabindex="0">
    <PageContainer>
      <br>
      <br>
      <br>
      <h5>&lt;html&gt;</h5>
      <h5>&nbsp;&nbsp;&lt;body&gt;</h5>
      <div id="blogs-container" v-if="onMain">
        <div id="blogs-header">
          <div id="header1-div">
            <h5>&lt;h1&gt;</h5>
            <h1 id="heading1">My Blogs</h1>
            <h5 style="display: flex; justify-content: end;">&lt;/h1&gt;</h5>
          </div>
        </div>
        <div id="container-content">
          <div id="blogs-container1">
            <q-btn class="blog-btns" size="15px" outline v-for="blog in blogs" :key="blog.id" @click.prevent="toArticle(blog.id)"> 
              <q-card class="my-card" flat bordered>
                <q-card-section horizontal>
                  <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs" style="font-size: 16px; align-text: left;">{{ blog.title }}</div>
                    <div class="text-caption text-grey">
                      {{ blog.desc }}
                    </div>
                  </q-card-section>

                  <q-card-section class="col-5 flex flex-center">
                    <q-img
                      style="width: 200px; height: 130px;"
                      class="rounded-borders"
                      :src="blog.img"
                    />
                  </q-card-section>
                </q-card-section>
              </q-card>
            </q-btn>
          </div>
          <div id="blogs-container2">
            <h2>Categories</h2>
            <div class="q-pa-md text-white" style="margin-left: -22px;">
              <q-checkbox dark v-model="categories[0].val" @click="cateCheck" :disable="!categories[1].val" style="margin-right: 14px;" label="Frontend" color="#7ed957" />
              <q-checkbox dark v-model="categories[1].val"  @click="cateCheck" :disable="!categories[0].val" label="Backend" color="#7ed957" />
            </div>
          </div>
        </div>
      </div>
      <BlogView v-else :page="page" :handleBackToMain="handleBackToMain"/>
      <h5>&nbsp;&nbsp;&lt;/body&gt;</h5>
      <h5 style="margin-top: 0px;">&lt;/html&gt;</h5>
    </PageContainer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PageContainer from '@/components/Slots/PageContainer.vue'
import BlogView from '@/components/Slots/BlogView.vue'

export default {
  components: {
    PageContainer,
    BlogView
  },
  setup () {
    const router = useRouter()

    const navExp = () => {
      router.push('/experience')
    }

    const blogs = ref([
        {
          id: 1,
          title: "Looping through Arrays using VueJS",
          desc: "v-for looping for beginners, Learn the basics looping in vueJS. To start off create you index.html file aswell as a main.js file.",
          img: require('../assets/blogs/vue-loops.png'),
          category: 'frontend'
        },
        {
          id: 2,
          title: "Setting up a quick JSON server (RESTful API)",
          desc: "Today we’ll go into setting up a quick RESTful API using JSON server, It’s honestly one on the fastest ways to set up a server, it’s...",
          img: require('../assets/blogs/json-server.png'),
          category: 'backend'
        },
        {
          id: 3,
          title: "Reusable components using Vue & Vuetify.",
          desc: "Hi there, today we’ll be making reusable input components, Please note that I’ll be using the vuetify input components, other UI...",
          img: require('../assets/blogs/reuse-comps.jpeg'),
          category: 'frontend'
        },
        {
          id: 4,
          title: "Hosting your backend JSON-server API",
          desc: "Hey there everyone, today I’d like to demonstrate how to host your backend server to work online. Just note that we can...",
          img: require('../assets/blogs/heroku-host-json-server.png'),
          category: 'backend'
        },
        {
          id: 5,
          title: "Setting up a standard Knex/express API with...",
          desc: "In this tutorial, we’ll set up an express API using Postgres as our database and Knex as the helper tool to link our node express...",
          img: require('../assets/blogs/knex-express.jpeg'),
          category: "backend"
        }
      ])

    const navProjects = () => {
      router.push('/projects')
    }

    const navScroll = (e) => {
      if (
        e.target.id == "blogs-container1" || 
        e.target.id == "blog1" ||
        e.target.id == "blog2" ||
        e.target.id == "blog3" ||
        e.target.id == "blog4" ||
        e.target.id == "blog5" ||
        e.target.classList == "blob-code blob-code-inner js-file-line" || 
        e.target.classList == "blob-num js-line-number js-code-nav-line-number js-blob-rnum" ||
        e.target.classList == "text-h5 q-mt-sm q-mb-xs"  ||
        e.target.classList == "blog-header" ||
        e.target.classList == "one-liner" ||
        e.target.classList == "liner-content" ||
        e.target.classList == "blog-sub-heading" ||
        e.target.classList == "para" ||
        e.target.classList == "toCenter" || 
        e.target.classList == "ulist" ||
        e.target.classList == "pl-s" ||
        e.target.classList == "pl-c1" ||
        e.target.classList == "pl-c" || 
        e.target.classList == "pl-s1" ||
        e.target.classList == "pl-k" ||
        e.target.classList ==  "pl-v" ||
        e.target.classList == "pl-smi" ||
        e.target.classList == "pl-en" || 
        e.target.classList == "pl-kos" ||
        e.target.classList == "pl-ent" ||
        e.target.classList == "gist-meta" ||
        e.target.nodeName == "A" ||
        e.target.classList == "links" ||
        e.target.classList == "blog-img" ||
        e.target.classList == "text-caption text-grey" ||
        e.target.classList == "q-img__image q-img__image--with-transition q-img__image--loaded" ||
        e.target.classList == "q-card__section q-card__section--vert col-5 flex flex-center" ||
        e.target.classList == "q-btn q-btn-item non-selectable no-outline q-btn--outline q-btn--rectangle q-btn--actionable q-focusable q-hoverable blog-btns" ||
        e.target.classList == "q-card__section q-card__section--vert q-pt-xs") {
      } else {
        if (e.deltaY < 0) {
          router.push('/experience')
        }
        if (e.deltaY > 0) {
          router.push('/projects')
        }
      }
    }

    const onMain = ref(true);

    const container = ref(null)
    const categories = ref([{ cate: 'frontend', val: true }, { cate: 'backend', val: true }])
   
   const page = ref(null);

    const cateCheck = () => {
      if (!categories.value[0].val) {
       blogs.value = blogs.value.filter(item => { return item.category == categories.value[1].cate})
      } else if (!categories.value[1].val) {
       blogs.value = blogs.value.filter(item => { return item.category == categories.value[0].cate})
      } else {
        blogs.value = [
          {
            id: 1,
            title: "Looping through Arrays using VueJS",
            desc: "v-for looping for beginners, Learn the basics looping in vueJS. To start off create you index.html file aswell as a main.js file.",
            img: require('../assets/blogs/vue-loops.png'),
            category: 'frontend'
          },
          {
            id: 2,
            title: "Setting up a quick JSON server (RESTful API)",
            desc: "Today we’ll go into setting up a quick RESTful API using JSON server, It’s honestly one on the fastest ways to set up a server, it’s...",
            img: require('../assets/blogs/json-server.png'),
            category: 'backend'
          },
          {
            id: 3,
            title: "Reusable components using Vue & Vuetify.",
            desc: "Hi there, today we’ll be making reusable input components, Please note that I’ll be using the vuetify input components, other UI...",
            img: require('../assets/blogs/reuse-comps.jpeg'),
            category: 'frontend'
          },
          {
            id: 4,
            title: "Hosting your backend JSON-server API",
            desc: "Hey there everyone, today I’d like to demonstrate how to host your backend server to work online. Just note that we can...",
            img: require('../assets/blogs/heroku-host-json-server.png'),
            category: 'backend'
          },
          {
            id: 5,
            title: "Setting up a standard Knex/express API with...",
            desc: "In this tutorial, we’ll set up an express API using Postgres as our database and Knex as the helper tool to link our node express...",
            img: require('../assets/blogs/knex-express.jpeg'),
            category: "backend"
          }
        ]
      }
    }
    const handleBackToMain = () => {
      page.value = null;
      onMain.value = true;
    }
    const toArticle = (id) => {
      page.value = id;
      onMain.value = false;
    }

    onMounted(() => {
      container.value.focus()
    })

    return { container, navExp, navProjects, navScroll, categories, cateCheck, blogs, onMain, page, toArticle, handleBackToMain}
  }
}
</script>

<style lang="scss" scoped>
$green: #7ed957;
$blue: #5271ff;
#articles {
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
}

#articles:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

#blogs-container {
  display: block;
  margin: 0px 45px;
  width: 100%;
  #blogs-header {
    display: flex;
    width: 100%;
    #header1-div {
      width: 325px;
      h1 {
       font-size: 65px !important;
       margin: -20px 30px 15px 30px;
      }
    }
  }
  #container-content {
    display: flex;
    width: 100%;
    background: none;
    margin-top: -20px;
    margin-bottom: 10px;
    .blog-btns {
      color: $green;
      margin: 10px;
      height: 200px;
      padding: 5px 40px;
    }
    .my-card {
      background: unset !important;
      border: none !important;
    }
    #blogs-container1 {
      display: grid;
      position: relative;
      height: 490px;
      grid-gap: 10px;
      margin: 5px 40px;
      overflow-y: scroll;
      grid-template-columns: 1fr 1fr;
      width: 70%;
    }
    #blogs-container2 {
      position: relative;
      width: 20%;
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