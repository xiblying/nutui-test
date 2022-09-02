import { h, render } from 'vue'

// 函数渲染
export function cosRender(component, options = {}) {
  const container = document.createElement('view')
  const root = document.body
  root.appendChild(container)
  const vnode = h(component, options) as any
  render(vnode, container)
  const vm = vnode.component.proxy
  vm.$watch(
    () => vm.visible,
    (v: boolean) => {
      if (v) return
      root.removeChild(container)
    }
  )
  return vm
}
