<template>
  <i class="zuicon" :class="`icon-${name}-${type}`" :style="`font-size: ${size/10}rem;`"></i>
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
// @import './fonts/icon-line.scss';
@import './fonts/icon-fill.scss';
</style>
