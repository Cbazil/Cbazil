<template>
  <div id="projects"  class="containers" ref="container" @keyup.up="navArticles" tabindex="0">
    <PageContainer>
      <br />
      <h1>Projects</h1>
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

    onMounted(() => {
      container.value.focus()
    })

    return {
      navArticles,
      container
    }
  }
}
</script>

<style lang="scss" scoped>
#projects {
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
}

#projects:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
</style>