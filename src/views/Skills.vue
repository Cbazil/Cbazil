<template>
  <div id="skills" class="containers" ref="container" @keyup.up="navAbout" @keyup.down="navExp" tabindex="0">
    <h1>Skills</h1>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()

    const navAbout = () => {
      router.push('/about')
    }

    const navExp = () => {
      router.push('/experience')
    }

    const container = ref(null)

    onMounted(() => {
      container.value.focus()
    })
    return { container, navAbout, navExp}
  }
}
</script>
<style lang="scss" scoped>
//
</style>