<template>
  <div class="demo-app">
    <keep-alive include="index">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import '@/src/styles/index.scss'
export default {
  name: 'App',
  components: {
  }
}
</script>
<style lang="scss" scoped>

</style>
