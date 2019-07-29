/*
 * @Author: zu1662
 * @Date: 2019-07-29 21:26:51
 * @LastEditTime: 2019-07-29 23:05:11
 * @LastEditor: zu1662
 * @Description: 【路由】同步
 */
import Vue from 'vue'
const ua = navigator.userAgent.toLowerCase()
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua)

window.syncPath = function () {
  const router = window.vueRouter
  const isInIframe = window !== window.top

  // 路由后置守卫，切换成功后，替换对应路由
  router.afterEach((to, from) => {
    if (!isInIframe && !isMobile) {
      const iframe = document.querySelector('iframe')
      if (iframe) {
        Vue.nextTick(() => {
          iframe.contentWindow.vueRouter.replace(to.fullPath)
        })
      }
    } else if (isInIframe) {
      window.top.vueRouter.replace(to)
    }
  })
}

// DOM更新完成后，注册函数
Vue.nextTick(() => {
  window.syncPath()
})
