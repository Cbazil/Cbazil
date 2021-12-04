<template>
  <div id="experience" class="containers" ref="container" @keyup.up="navSkills" @keyup.down="navArticles" tabindex="0">
    <h1>Educations & Work Experience</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()

    const navSkills = () => {
      router.push('/skills')
    }

    const navArticles = () => {
      router.push('/blogs')
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })
    return { container, navSkills, navArticles}
  }
}
</script>

<style lang="scss" scoped>
//
</style>