/*
 * @Author: zu1662
 * @LastEditor: zu1662
 * @Date: 2019-08-08 20:19:40
 * @LastEditTime: 2019-08-08 23:19:38
 * @Description: 盒子阴影指令，可以按照参数设置盒子的阴影
 */
const vueShadow = {}
const shadow = {
  bind (el, binding) {
    const maxShadow = 1
    const perShadow = binding.arg || 0.1
    el.style.boxShadow = `0 ${maxShadow * perShadow}rem ${5 * perShadow}rem 0 rgba(0,0,0,0.08)`
  }
}

vueShadow.install = function (Vue, options) {
  Vue.directive('shadow', shadow)
}

export default vueShadow
