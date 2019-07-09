<template>
  <div class="demo-app">
    <keep-alive include="index">
      <router-view class="demo" name="demo"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
