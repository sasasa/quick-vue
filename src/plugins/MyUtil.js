export default {
  install(app, options = {}) {
    app.directive('pluginHighlight', { 
      mounted(el, binding, vnode, oldVnode) {   
        if (options.border) {
          el.style.border = `1px solid ${binding.value}`
        } else {
          el.style.backgroundColor = binding.value
        }
      },
    })
  }
}