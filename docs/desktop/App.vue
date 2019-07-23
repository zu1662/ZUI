<template>
  <div class="desktop-app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import '@/src/styles/index.scss'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.desktop-app {
  min-width: 1000px;
}
</style>
