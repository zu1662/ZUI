<template>
  <div class="desktop-app">
    <Header class="header"/>
    <div class="content">
      <Nav class="slide" :class="{isFixed: isFixed}"/>
      <div class="doc">
        <router-view></router-view>
      </div>
      <div class="iframe-box" :class="{isFixed: isFixed}">
        <iframe src="/demo.html#/button" frameborder="0" style="width: 300px;height: 600px;"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import '@/src/styles/index.scss'
import Header from './components/Header'
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    Header,
    Nav
  },
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .desktop-app {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 1000px;
    .header {
      flex-shrink: 0;
    }
    .content {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: space-between;
      .slide {
        flex-shrink: 0;
      }
      .doc {
        padding: 30px 360px 30px 220px;
        flex: 1;
      }
      .iframe-box {
        position: absolute;
        right: 40px;
        top: 30px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
      }
    }
  }
</style>
