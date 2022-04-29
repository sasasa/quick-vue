export default {
  mounted(el, binding, vnode, oldVnode) {
    switch(binding.arg) {
      case 'background' :
        el.style.backgroundColor = binding.value
        break
      case 'text' :
        el.style.color = binding.value
        break
      default :
        el.style.border = `1px solid ${binding.value}`
        break
    }
  }
}

