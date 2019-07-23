/*
* @Author: huazite
* @Date: 2019-07-23 23:09:14  
* @Last Modified by: huazite
* @Last Modified time: 2019-07-23 23:09:14
* @Description:  webpack【基础配置】，其他配置基于此配置
*/

// 监听文件，生成入口文件
require('./build/watcher')

const webpack = require('webpack');
const config = require('../package.json');
// 将CSS提取为独立的文件的插件，暂不支持HMR（热加载）。所以在开发模式内，使用style-loader
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const moment = require('moment');
const path = require('path');

module.exports = {
  // 统计信息
  stats: {
    entrypoints: false,
    children: false
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/, // sass文件处理
        use: [{
          loader: 'style-loader' // 将 JS 字符串生成为 style 节点
        }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: "postcss-loader" // JS 插件转换样式的工具，可以添加浏览器前缀，支持 CSS Variables 和 Mixins等其他的功能
        }, {
          loader: "sass-loader", // 将 Sass 编译成 CSS
          options: {
            // data: `@import "./src/styles/index.scss"; `, // 会把此段代码添加在sass文件的最前面
          },
        }]
      },
      {
        test: /\.vue$/, // vue文件处理
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      },
      { //eslint检查
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use:['vue-loader','@vant/markdown-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('static', '[name].[hash:7].[ext]'),
        }
      },]
  },
  plugins: [
    // 在每个文件头部增加信息输出
    new webpack.BannerPlugin({
      banner: `ZUI v${config.version} - [filebase], [hash], ${moment().format()}, coding by Huazi`
    }),
    new VueLoaderPlugin()
  ],
}
