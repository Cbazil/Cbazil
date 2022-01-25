<template>
  <div id="skills" ref="container" @keyup.up="navAbout" @mousewheel.up="navAbout" @wheel="navScroll($event)" tabindex="0">
    <PageContainer>
      <br />
      <h1>Skills</h1>
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
  setup () {
    const router = useRouter()

    const navAbout = () => {
      router.push('/about')
    }

    const navExp = () => {
      router.push('/experience')
    }

    const navScroll = (e) => {
      if (e.deltaY < 0) {
        router.push('/about')
      }
      if (e.deltaY > 0) {
        router.push('/experience')
      }
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })
    return { container, navAbout, navExp, navScroll }
  }
}
</script>
<style lang="scss" scoped>
#skills {
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
}

#skills:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
</style>