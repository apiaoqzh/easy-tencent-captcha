const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'easy-tencent-captcha.min.js',
    library: 'EasyCaptcha', // 指定类库名,主要用于直接引用的方式(比如script)
    libraryExport: 'default', // 对外暴露default属性，就可以直接调用default里的属性
    globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    libraryTarget: 'umd' // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
  },
  mode: 'production', // 告诉webpack使用production模式的内置优化,
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /(node_modules|bower_components)/,
      loader: 'eslint-loader',
      enforce: 'pre',
      options: {
        formatter: require('eslint-friendly-formatter'),
        quiet: true
      }
    }, {
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
  ],
  externals: { // 从输出的bundle中排除依赖
  }
}