<template>
  <div id="projects"  class="containers" ref="container" @keyup.up="navArticles" tabindex="0">
    <h1>Projects</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
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
//
</style>