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
/*修改滚动条样式*/
div::-webkit-scrollbar{
  width:5px;
  height:10px;
}
// 滚动条底部样式
div::-webkit-scrollbar-track{
  background-color: #fff;
  border-radius:2px;
}
// 滚动条滑动块样式
div::-webkit-scrollbar-thumb{
  background: #fff;
  border-radius:10px;
}
// 滑动快hover样式
div::-webkit-scrollbar-thumb:hover{
  background: #ccc;
}
.nav {
  padding: 30px 0;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 220px;
  overflow-y: scroll;
  background-color: #fff;
  &:hover {
    &::-webkit-scrollbar-thumb{
      background: #ddd;
      border-radius:10px;
    }
  }
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
