<template>
  <div id="experience" ref="container" @keyup.up="navSkills" @keyup.down="navArticles" @wheel="navScroll($event)" tabindex="0">
    <PageContainer>
      <br />
      <h1>Educations & Work Experience</h1>
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

    const navSkills = () => {
      router.push('/skills')
    }

    const navArticles = () => {
      router.push('/blogs')
    }
    
    const navScroll = (e) => {
      if (e.deltaY < 0) {
        router.push('/skills')
      }
      if (e.deltaY > 0) {
        router.push('/blogs')
      }
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })
    return { container, navSkills, navArticles, navScroll }
  }
}
</script>

<style lang="scss" scoped>
#experience {
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
}

#experience:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
</style>