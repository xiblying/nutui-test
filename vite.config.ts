import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // vue文件编译
import vueJsx from '@vitejs/plugin-vue-jsx' // JSX语法编写组件
import legacy from '@vitejs/plugin-legacy' // 使用它来提供对旧版本浏览器的支持
import { createHtmlPlugin } from 'vite-plugin-html' // HTML 压缩能力;EJS 模版能力;多页应用支持;支持自定义entry;支持自定义template
import dayjs from 'dayjs'
import pkg from './package.json'
import { createStyleImportPlugin, NutuiResolve } from 'vite-plugin-style-import'

const __APP_INFO__ = {
  name: pkg.name,
  version: pkg.version,
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// https://vitejs.dev/config/
export default defineConfig(options => {
  console.log('options', options)
  const { command, mode } = options
  const isBuild = command === 'build'

  return {
    base: '/vue3/',
    // 定义全局常量
    define: {
      __APP_INFO__
    },
    plugins: [
      vue(),
      vueJsx(),
      legacy(),
      createHtmlPlugin({
        minify: isBuild,
        inject: {
          data: {
            title: __APP_INFO__.name
          }
        }
      }),
      createStyleImportPlugin({
        resolves: [NutuiResolve()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`,
          javascriptEnabled: true
        }
      }
    },
    // 开发服务器
    server: {
      port: 8888,
      open: true,
      // 代理
      proxy: {
        '/api': {
          target: 'http://localhost:8080/api',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
        }
      }
    },
    esbuild: {
      pure: ['console.log', 'debugger']
    },
    build: {
      target: 'es2015',
      brotliSize: false,
      chunkSizeWarningLimit: 2000
    }
  }
})
