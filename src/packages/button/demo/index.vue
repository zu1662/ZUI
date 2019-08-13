<template>
  <section class="button-demo">
    <div class="card">
      <h1 class="title">基本按钮</h1>
      <div class="body">
        <zui-button type="default">默认按钮</zui-button>
        <zui-button type="primary">原始按钮</zui-button>
        <zui-button type="success">成功按钮</zui-button>
        <zui-button type="warning">警告按钮</zui-button>
        <zui-button type="danger">危险按钮</zui-button>
      </div>
    </div>
    <div class="card">
      <h1 class="title">镂空按钮</h1>
      <div class="body">
        <zui-button hollow type="default">默认按钮</zui-button>
        <zui-button hollow type="primary">原始按钮</zui-button>
        <zui-button hollow type="success">成功按钮</zui-button>
        <zui-button hollow type="warning">警告按钮</zui-button>
        <zui-button hollow type="danger">危险按钮</zui-button>
      </div>
    </div>
    <div class="card">
      <h1 class="title">禁用按钮</h1>
      <div class="body">
        <zui-button disabled type="default">默认按钮</zui-button>
        <zui-button disabled type="primary">原始按钮</zui-button>
        <zui-button disabled hollow type="success">成功按钮</zui-button>
        <zui-button disabled hollow type="warning">警告按钮</zui-button>
        <zui-button disabled hollow type="danger">危险按钮</zui-button>
      </div>
    </div>
    <div class="card">
      <h1 class="title">圆角按钮</h1>
      <div class="body">
        <zui-button round type="default">默认按钮</zui-button>
        <zui-button round type="primary">原始按钮</zui-button>
        <zui-button round hollow type="success">成功按钮</zui-button>
        <zui-button round hollow type="warning">警告按钮</zui-button>
        <zui-button round hollow type="danger">危险按钮</zui-button>
      </div>
    </div>
    <div class="card">
      <h1 class="title">圆型按钮</h1>
      <div class="body">
        <zui-button circle type="primary" :icon="{name: 'information', size: 20, type: 'fill'}"></zui-button>
        <zui-button circle type="success" :icon="{name: 'checkbox', size: 20, type: 'fill'}"></zui-button>
        <zui-button circle hollow type="default" :icon="{name: 'https://cn.vuejs.org/images/logo.png', size: 20, type: 'fill'}"></zui-button>
        <zui-button circle hollow type="warning" icon="search"></zui-button>
        <zui-button circle hollow type="danger" icon="checkbox"></zui-button>
        <zui-button circle type="primary" icon="loader"></zui-button>
      </div>
    </div>
    <div class="card">
      <h1 class="title">图标按钮</h1>
      <div class="body">
        <zui-button type="default" icon="loader">默认按钮</zui-button>
        <zui-button type="primary" :icon="{name: 'information', size: 20, type: 'fill'}">原始按钮</zui-button>
        <zui-button type="success" icon="checkbox" iconType="fill">成功按钮</zui-button>
        <zui-button hollow type="warning" icon="search">警告按钮</zui-button>
        <zui-button hollow type="danger" icon="checkbox">危险按钮</zui-button>
      </div>
    </div>
    <div class="card">
      <h1 class="title">流体按钮</h1>
      <div class="body">
        <zui-button fluid type="default">默认按钮</zui-button>
        <zui-button fluid type="primary">原始按钮</zui-button>
        <zui-button fluid hollow type="success">成功按钮</zui-button>
        <zui-button fluid hollow type="warning">警告按钮</zui-button>
        <zui-button fluid hollow type="danger">危险按钮</zui-button>
        <zui-button fluid hollow type="danger" icon="alarm-warning">危险按钮</zui-button>
      </div>
    </div>
  </section>
</template>
<script>
import ZuiButton from '../button'
export default {
  name: 'ButtonDemo',
  components: {
    ZuiButton
  },
  methods: {
    handclick (e) {
      console.log(111)
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  margin-top: 1rem;
  padding: 0 1rem;

  .title {
    line-height: 2;
    color: $content-color;
  }

  .body {
    display: flex;
    flex-wrap: wrap;
    > button {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
  }
}
</style>
