export default {
  mounted(el, binding, vnode, oldVnode) {
    el.style.backgroundColor = binding.value
  },
  updated(el, binding, vnode, oldVnode) {
    el.style.backgroundColor = binding.value
  },
}

// export default function(el, binding, vnode, oldVnode) {
//   el.style.backgroundColor = binding.value
// }