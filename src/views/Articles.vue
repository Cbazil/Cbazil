<template>
  <div id="articles" ref="container" @keyup.up="navExp" @keyup.down="navProjects" tabindex="0">
    <PageContainer>
      <br />
      <h1>Articles</h1>
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

    const navExp = () => {
      router.push('/experience')
    }

    const navProjects = () => {
      router.push('/projects')
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })
    return { container, navExp, navProjects}
  }
}
</script>

<style lang="scss" scoped>
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
</style>