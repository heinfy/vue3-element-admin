const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const ElementPlus = require('unplugin-element-plus/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  publicPath: '/vue3-element-admin/', // process.env.NODE_ENV === 'production' ? '/vue3-element-admin/' : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "~@/styles/element/index.scss" as *;
          @use "~@/styles/element/dark.scss" as dark;
          `
      }
    }
  },
  configureWebpack: {
    plugins: [
      ElementPlus({
        useSource: true
      }),
      // 按需加载 element
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
      })
    ]
  }
});
