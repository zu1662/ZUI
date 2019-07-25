<template>
  <div class="nav">
    <div
      class="nav-category"
      v-for="(category, i) in navs"
      :key="i"
    >
      <h1 class="category">{{category.name}}</h1>
      <div
        class="nav-group"
        v-for="(group, j) in category.groups"
        :key="j"
      >
        <h2 class="group" v-if="group.groupName">{{group.groupName}}</h2>
        <div class="nav-list">
          <a
            class="list"
            v-for="(list, k) in group.list"
            :key="k"
            @click.stop="()=> { $router.push({ name: list.name }) }"
            href="javascript:void(0);"
          >
            {{list.title}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { navigation } from '@/docs/doc.config.js'
export default {
  name: 'Nav',
  data () {
    return {
      navs: navigation
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 2px 0 10px rgba(1,1,1,.1);

  .nav-category {
    h1.category {
      padding: 10px 10px 10px 30px;
      font-size: 16px;
      font-weight: 700;
    }
  }
  .nav-group {
    h2.group {
      padding: 10px 10px 10px 30px;
      font-size: 12px;
      color: #555;
    }
  }
  .nav-list {
    a.list {
      display: block;
      padding: 10px 10px 10px 30px;
      color: #555;
      font-size: 16px;
      &:hover {
        color: #1989fa;
      }
    }
  }
}
</style>
