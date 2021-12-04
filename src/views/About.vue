<template>
  <div id="about" class="containers" ref="container" @keyup.up="navHome" @keyup.down="navSkills" tabindex="0">
    <div>
      <h1>About me</h1>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
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
  color: white;
  img {
    width: 200px;
    height: 200px;
  }
}
</style>