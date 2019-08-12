<template>
  <div class="demo-app">
    <keep-alive include="index">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import '@/src/styles/base.scss'
export default {
  name: 'App',
  components: {
  }
}
</script>
<style lang="scss">
/*修改滚动条样式*/
*::-webkit-scrollbar{
  width:0;
  height:0;
}
</style>
<style lang="scss" scoped>
.demo-app {
  height: 100%;
  overflow-y: scroll;
}
</style>
