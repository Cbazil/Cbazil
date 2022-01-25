<template>
  <span id="home" ref="container" @keyup.down="navAbout" @wheel="navScroll($event)" tabindex="0">
    <PageContainer> 
      <br />
      <h1>Home</h1>
    </PageContainer>
  </span>
</template>

<script>
import TicTacToe from '@/components/TicTacToe.vue'
import PageContainer from '@/components/Slots/PageContainer.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    TicTacToe,
    PageContainer
  },
  setup() {

    const router = useRouter()

    const navAbout = () => {
      router.push('/about')
    }

    const navScroll = (e) => {
      console.log(e)
      if (e.deltaY > 0) {
        router.push('/about')
      }
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })

    return {
      navAbout,
      navScroll,
      container
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');
$dark: #2b2c2e;
$grey: #353639;
$green: #7ed957;
$blue: #5271ff;

#home {
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
}

#home:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
</style>