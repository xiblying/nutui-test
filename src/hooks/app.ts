/**
 * 应用数据
 */
export function useApp() {
  const appInfo = __APP_INFO__

  return {
    ...appInfo
  }
}
