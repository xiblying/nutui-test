import type { RouteRecordRaw } from 'vue-router'

const enum PageEnum {
  // basic login path
  BASE_LOGIN = '/login',
  // basic home path
  BASE_HOME = '/index',
  // error page path
  ERROR_PAGE = '/exception'
}

// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules: Object = import.meta.glob('./modules/**/*.ts', { eager: true })
const routeModuleList: RouteRecordRaw[] = []

// 加入到路由集合中
Object.keys(modules).forEach(key => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

export const asyncRoutes = routeModuleList

// 根路由
export const RootRoute = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root'
  }
}

// 登录
export const LoginRoute = {
  path: PageEnum.BASE_LOGIN,
  name: 'Login',
  component: () => import('@/views/login/Login.vue'),
  meta: {
    title: '登录'
  }
}

// 404
export const Exception404Route = {
  path: '/:path(.*)*',
  name: '404',
  component: () => import('@/components/Exception/Exception404.vue'),
  meta: {
    title: '404'
  }
}

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [LoginRoute, RootRoute, Exception404Route]
