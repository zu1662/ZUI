<template>
  <div class="desktop-app">
    <Header class="header"/>
    <div class="content">
      <Nav class="zui-slide"/>
      <div class="zui-doc">
        <router-view></router-view>
      </div>
      <div class="zui-iframe-box">
        <iframe src="/mobile.html#/" scrolling="no" frameborder="0" style="width: 320px;height: 600px;"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import '@/src/styles/index.scss'
import '@/docs/assets/css/custom-md.scss'
import '@/docs/assets/css/md-styles.scss'
import 'highlight.js/styles/github.css'
import Header from './components/Header'
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    Header,
    Nav
  }
}
</script>
<style lang="scss" scoped>
  .desktop-app {
    height: 100%;
    min-width: 1000px;
    .header {
      flex-shrink: 0;
    }
    .content {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: calc(100% - 60px);
      .zui-slide {
        flex-shrink: 0;
      }
      .zui-doc {
        padding: 30px 340px 30px 220px;
        flex: 1;
        background-color: #f0f3f6;
        overflow-y: scroll;
      }
      .zui-iframe-box {
        position: absolute;
        right: 30px;
        top: 30px;
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
</style>
