const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // 开启代理服务器 方式1
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 开启代理服务器 方式2
  devServer: {
    proxy: {
      '/atguigu': {
        // 目标地址
        target: 'http://localhost:5000',
        // 省略前缀
        pathRewrite:{'^/atguigu':''},
        // 用于支持websocket
        // ws: true,
        // 用于控制请求头中的host值
        changeOrigin: true
      },

      '/demo': {
          // 目标地址
          target: 'http://localhost:5001',
          // 省略前缀
          pathRewrite:{'^/demo':''},

      },
    }
  }
}

/* 
  changeOrigin设置为true,服务器收到的请求头中的host为：localhost:5000
  changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8000
  changeOrgin默认值为true

*/