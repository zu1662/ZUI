<template>
  <div class="desktop-app">
    <Header/>
    <Nav/>
    <router-view></router-view>
  </div>
</template>
<script>
  import '@/src/styles/index.scss'
  import Header from './components/Header'
  import Nav from './components/Nav'
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style lang="scss" scoped>
  .desktop-app {
    min-width: 800px;
  }
</style>