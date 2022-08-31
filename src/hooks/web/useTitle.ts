import { watch, unref } from 'vue'
import { useTitle as usePageTitle } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useApp } from '../app'

/**
 * 监听路径变化更新页面title
 */
export function useTitle() {
  const { currentRoute } = useRouter()
  const pageTitle = usePageTitle()
  const { name } = useApp()

  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute)
      const title = route.meta.title || pageTitle.value
      pageTitle.value = title === name ? `${title}` : `${title} - ${name}`
    },
    { immediate: true }
  )
}
