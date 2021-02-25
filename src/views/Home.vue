<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="scss" scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
