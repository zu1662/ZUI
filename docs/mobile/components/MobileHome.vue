<template>
  <div class="home">
    <div
      class="group"
      v-for="(group, index) in navs.groups"
      :key="index"
    >
      <h1 @click="setListToggle">
        <span class="group-title">{{group.groupName}}</span>
        <mobile-icon name="share"></mobile-icon>
      </h1>
      <div class="list-wrapper" isShow="false" style="display: none;">
        <div
          class="list"
          v-for="(list, index) in group.list"
          :key="index"
        >
          <h2>{{list.title}}</h2>
          <mobile-icon name="share"></mobile-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { navigation } from '@/docs/doc.config.js'
import MobileIcon from './MobileIcon'
export default {
  name: 'MobileHome',
  components: {
    MobileIcon
  },
  data () {
    return {
      navs: navigation[1]
    }
  },
  methods: {
    setListToggle (e) {
      const listWrapper = e.target.nextElementSibling
      const listWrapperShow = listWrapper.getAttribute('isShow')
      if (listWrapperShow === 'true') {
        listWrapper.style.display = 'none'
        listWrapper.setAttribute('isShow', 'false')
      } else {
        listWrapper.style.display = 'block'
        listWrapper.setAttribute('isShow', 'true')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding: 2rem;
  .group {
    margin-bottom: 2rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(102,102,102,0.1);
    h1 {
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 2rem;
      border-bottom: 0.1rem solid #f5f5f5;
      user-select: none;
      &:active {
        background-color: #fafafa;
      }
    }
    .list-wrapper {
      transition: height 1s;
      .list {
        display: block;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.1rem solid #f5f5f5;
      }
    }
  }
}
</style>
