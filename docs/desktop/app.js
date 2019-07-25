import Vue from 'vue'
import VueRouter from 'vue-router'
import getRoutes from '../router'
import App from './App.vue'

// 阻止 vue 在启动时生成生产提示
if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

Vue.use(VueRouter)
const router = new VueRouter({
  routes: getRoutes({mobile: false}),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});

window.vueRouter = router

new Vue({
  render: h => h(App),
  router
}).$mount('#demo')
