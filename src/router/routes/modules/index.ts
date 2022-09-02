const routes = [
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/form-validate-exception',
    name: 'FormValidateException',
    component: () => import('@/views/form-validate-exception/index.vue'),
    meta: {
      title: '[bug] nut-form与nut-form-item分别在不同组件渲染时，表单验证会失效 #1611'
    }
  },
  {
    path: '/dialog-exception',
    name: 'DialogException',
    component: () => import('@/views/dialog-exception/index.vue'),
    meta: {
      title: '[bug] 弹窗会有警告，关闭会报错问题 #1625'
    }
  }
]

export default routes
