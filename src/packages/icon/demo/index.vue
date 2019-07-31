<template>
  <div class="icon-demo">
    <div class="tab-title">123321</div>
    <ul class="tab-body">
      <li
        class="list-item"
        v-for="(item, index) in iconList"
        :key="index"
        v-if="item !== 'remixicon'"
      >
        <Icon class="zuicon" :name="item" :size="32" type="fill"></Icon>
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import iconList from '../icon-list'
import Icon from '../icon'
export default {
  name: 'IconDemo',
  data () {
    return {
      iconList: iconList
    }
  },
  components: {
    Icon
  }
}
</script>
<style lang="scss" scoped>
@import url('/src/styles/common/var.scss');
.tab-body {
  display: flex;
  flex-wrap: wrap;
  .list-item {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    .zuicon {
      color: #333;
    }
    span {
      color: #999;
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
}
</style>
