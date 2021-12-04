<template>
  <div id="articles" class="containers" ref="container" @keyup.up="navExp" @keyup.down="navProjects" tabindex="0">
    <h1>Articles</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
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
//
</style>