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
/*修改滚动条样式*/
  div::-webkit-scrollbar{
    width:0;
    height:0;
  }
.demo-app {
  height: 100%;
  overflow-y: scroll;
}
</style>
