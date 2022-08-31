const routes = {
  path: '/index',
  name: 'Index',
  component: () => import('@/views/index/index.vue'),
  meta: {
    title: '首页'
  },
  children: []
}

export default routes
