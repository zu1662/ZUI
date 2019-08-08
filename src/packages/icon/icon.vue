<!--
 * @Author: zu1662
 * @LastEditor: zu1662
 * @Date: 2019-07-31 22:10:20
 * @LastEditTime: 2019-08-08 23:46:18
 * @Description:  图标组件
 -->
<template>
  <i :class="`zuicon-${type} icon-${name}-${type}`" :style="`font-size: ${size/10}rem;`"></i>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 12
    },
    type: {
      type: String,
      default: 'line'
    }
  }
}
</script>
<style lang="scss" scoped>
@import './fonts/icon-line.scss';
@import './fonts/icon-fill.scss';
</style>
