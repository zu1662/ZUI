let vueShadow = {}
let shadow = {
    bind (el, binding) {
        let maxShadow = 1
        let perShadow = binding.arg || 0.1
        el.style.boxShadow = `0 ${maxShadow * perShadow}rem ${5 * perShadow}rem 0 rgba(0,0,0,0.08)`
    }
}

vueShadow.install = function (Vue, options) {
    Vue.directive('shadow', shadow)
}

export default vueShadow
