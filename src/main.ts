import { createApp } from 'vue'

import { setupRouter } from './router'
import { setupStore } from './store'
import 'normalize.css'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/style.css'
import '@/assets/style/index.scss'

import App from './App.vue'

function bootstrap() {
  const app = createApp(App)

  // 配置 store
  setupStore(app)
  // 配置 router
  setupRouter(app)
  // 配置 UI
  app.use(NutUI)

  app.mount('#app')
}

bootstrap()

console.info(`App info: %c${JSON.stringify(__APP_INFO__)}`, 'color: #67C23A')
