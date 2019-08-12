<!--
 * @Author: zu1662
 * @LastEditor: zu1662
 * @Date: 2019-07-31 22:10:20
 * @LastEditTime: 2019-08-12 22:42:59
 * @Description:  图标组件
 -->
<template>
  <i
    v-if="iconClass"
    class="zuicon"
    :class="iconClass"
    :style="`font-size: ${size / 10}rem;`"
  >
    <i v-if="info" class="info-badge" :class="infoType" :style="`right: -${info.length * 0.5}rem;`">{{info}}</i>
  </i>
  <i
    v-else
    class="zuicon"
    :style="`width: ${size / 10}rem`"
  >
    <img :src="name">
    <i v-if="info" class="info-badge" :class="infoType" :style="`right: -${info.length * 0.5}rem;`">{{info}}</i>
  </i>
</template>
<script>
export default {
  name: 'ZuiIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 20
    },
    type: {
      type: String,
      default: 'line'
    },
    info: {
      type: String
    },
    infoType: {
      type: String
    }
  },
  computed: {
    iconClass () {
      const myReg = /(\.png|\.jpg)/
      // 正则判断 name 是否为图片
      if (!myReg.test(this.name)) {
        return [`zuicon-${this.type}`, `icon-${this.name}-${this.type}`]
      }
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
@import './fonts/icon-line.scss';
@import './fonts/icon-fill.scss';

.zuicon {
  position: relative;

  img {
    width: 100%;
  }
}

.info-badge {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.8rem;
  font-size: 1rem;
  font-style: normal;

  &.primary {
    background-color: $primary-color;
    color: #fff;
  }
  &.success {
    background-color: $success-color;
    color: #fff;
  }
  &.warning {
    background-color: $warning-color;
    color: #fff;
  }
  &.danger {
    background-color: $danger-color;
    color: #fff;
  }
}
</style>
