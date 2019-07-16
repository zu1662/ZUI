import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../router'
import App from './App.vue'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes
});


new Vue({
  render: h => h(App),
  router
}).$mount('#demo')
