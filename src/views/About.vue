<template>
  <span id="about" ref="container" @keyup.up="navHome" @keyup.down="navSkills" tabindex="0">
    <PageContainer>
      <br />
      <h1>About</h1>
    </PageContainer>
  </span>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TicTacToe from '@/components/TicTacToe.vue'
import PageContainer from '@/components/Slots/PageContainer.vue'

export default {
  components: {
    TicTacToe, 
    PageContainer
  },
  setup () {
    const router = useRouter()

    const navHome = () => {
      router.push('/')
    }

    const navSkills = () => {
      router.push('/skills')
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })
    return { container, navHome, navSkills}
  }
}
</script>
<style lang="scss" scoped>
#about {
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
  color: white;
}

#about:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
</style>

