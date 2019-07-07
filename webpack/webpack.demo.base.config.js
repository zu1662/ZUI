/*
* @Author: huazite
* @Date: 2019-07-07 21:03:46  
* @Last Modified by: huazite
* @Last Modified time: 2019-07-07 21:03:46
* @Description:  示例页面【基础配置】
*/

const config = require('../package.json');
const path = require('path');
const webpackBaseConf = require('./webpack.base.config.js');
//  创建一个在内存中生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');


const isDev = process.env.NODE_ENV === 'development';


module.exports = merge(webpackBaseConf, {
  //入口
  entry: {
    app: './sites/demo/app.js', // 表示 webpack 要打包哪个文件
    vendors: ['jquery'], //需要抽离的第三方插件名称
  },
  // 输出
  output: {
    publicPath: '/', 
    path: path.resolve(__dirname, '../dist/sites/'), //指定输出的路径
    chunkFilename: 'demo/js/[name].[hash:5].js',
    filename: isDev ? 'demo/js/[name].js' : 'demo/js/[name].[hash].js', //指定输出文件的名称
  },
  module: {
    rules: [
      //自定义主题
      // {
      //     test: /\.(sa|sc|c)ss$/,
      //     use: [
      //         {
      //             loader: 'sass-loader',
      //             options: {
      //                 data: `@import "./sites/demo/asset/css/custom.scss";@import "./src/styles/index.scss"; `,
      //             },
      //         }
      //     ],
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ //  创建一个在内存中生成html的插件
      template: './sites/demo/index.html', //指定模板页面
      filename: 'demo.html', // 指定生成页面的名称
      minify: { //压缩 html 页面
        collapseWhitespace: true, //合并多余的空格
        removeComments: true, //移除注释
        removeAttributeQuotes: true, //移除 属性上的双引号
      }
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? 'demo/css/[name].css' : 'demo/css/[name].[hash].css'
    })
  ]
});