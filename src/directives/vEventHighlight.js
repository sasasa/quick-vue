export default {
  mounted(el, binding, vnode, oldVnode) {
    el.addEventListener('mouseenter', function() {
      el.style.backgroundColor = binding.value
    }, false)
    el.addEventListener('mouseleave', function() {
      el.style.backgroundColor = ''
    }, false)
  },
}
