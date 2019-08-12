<template>
  <div class="icon-demo">
    <div class="tab-title">
      <div class="tab-item" :class="{active: type === 'fill'}" @click="setToggle('fill')" ref="tabFill">填充</div>
      <div class="tab-item" :class="{active: type === 'line'}" @click="setToggle('line')" ref="tabLine">线性</div>
      <div class="tab-item" :class="{active: type === 'other'}" @click="setToggle('other')" ref="tabOther">其他</div>
      <div class="line" ref="line"></div>
    </div>
    <ul class="tab-body" v-if="type !== 'other'">
      <li
        class="list-item"
        v-for="(item, index) in iconList"
        :key="index"
      >
        <Icon class="zuicon" :name="item" :size="30" :type="type"></Icon>
        <span>{{item}}</span>
      </li>
    </ul>
    <ul class="tab-body" v-else>
      <li class="list-item" style="width: 100%;">
        <Icon name="../../../../docs/assets/logo.png" :size="30"></Icon>
        <span>图片icon</span>
      </li>
      <li class="list-item" style="width: 100%;">
        <Icon name="../../../../docs/assets/logo.png" :size="30" info="10"></Icon>
        <span>徽章默认</span>
      </li>
      <li class="list-item">
        <Icon name="instagram" type="fill" :size="30" info="10" infoType="warning"></Icon>
        <span>徽章warinig</span>
      </li>
      <li class="list-item">
        <Icon name="github" type="fill" :size="30" info="999+" infoType="danger"></Icon>
        <span>徽章danger</span>
      </li>
      <li class="list-item">
        <Icon name="qq" :size="30" info="9" infoType="primary"></Icon>
        <span>徽章primary</span>
      </li>
      <li class="list-item">
        <Icon name="wechat" :size="30" info="1" infoType="success"></Icon>
        <span>徽章success</span>
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
      iconList: iconList.sort((item1, item2) => { return item1 - item2 }),
      type: 'fill'
    }
  },
  components: {
    Icon
  },
  mounted () {
    this.setToggle(this.type)
  },
  methods: {
    setToggle (type) {
      this.type = type
      const lineWidth = this.$refs.line.clientWidth
      const tabFillWidth = this.$refs.tabFill.clientWidth
      const tabLineWidth = this.$refs.tabLine.clientWidth
      const tabOtherWidth = this.$refs.tabOther.clientWidth
      if (type === 'fill') {
        this.$refs.line.style.transform = `translateX(${this.$refs.tabFill.offsetLeft + (tabFillWidth - lineWidth) / 2}px)`
      } else if (type === 'line') {
        this.$refs.line.style.transform = `translateX(${this.$refs.tabLine.offsetLeft + (tabLineWidth - lineWidth) / 2}px)`
      } else {
        this.$refs.line.style.transform = `translateX(${this.$refs.tabOther.offsetLeft + (tabOtherWidth - lineWidth) / 2}px)`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('/src/styles/common/var.scss');
.tab-title {
  position: relative;
  display: flex;
  background-color: $background-color;
  div.tab-item {
    flex: 1;
    font-size: $font-size-large;
    text-align: center;
    line-height: 4rem;
    cursor: pointer;

    &.active {
      color: $info-color;
    }
  }

  div.line {
    position: absolute;
    bottom: 0;
    height: 0.3rem;
    width: 20%;
    background-color: $info-color;
    transition: transform 0.3s ease-in;
  }
}
.tab-body {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: $shadow-card;

  .list-item {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    .zuicon {
      color: #666;
    }
    span {
      color: #999;
      font-size: 1.1rem;
      font-size: 1.2rem;
      line-height: 1;
      margin: 1rem 0;
    }
  }
}
</style>
