import Vue from 'vue'
import App from './App.vue'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#demo')
