<template>
  <div id="articles" ref="container" @keyup.up="navExp" @keyup.down="navProjects" @wheel="navScroll($event)" tabindex="0">
    <PageContainer>
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

    const navScroll = (e) => {
      if (e.deltaY < 0) {
        router.push('/experience')
      }
      if (e.deltaY > 0) {
        router.push('/projects')
      }
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })
    return { container, navExp, navProjects, navScroll }
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