/*
* @Author: huazite
* @Date: 2019-07-07 21:03:46  
 * @Last Modified by: huazite
 * @Last Modified time: 2019-07-16 21:59:36
* @Description:  页面开发配置
*/

const path = require('path');
const webpackBaseConf = require('./webpack.base.config.js');
//  创建一个在内存中生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 优化控制台输出
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
// 获取局域网IP
const ip = require('ip').address();
const merge = require('webpack-merge');

module.exports = merge(webpackBaseConf, {
  mode: 'development',
  // 入口
  entry: {
    'zui-docs': './docs/desktop/app.js',
    'zui-mobile': './docs/mobile/app.js'
  },
  // 输出
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  stats: {
    modules: false,
    children: false
  },
  // 自定义解析路径名
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.less'],
    alias: {
      '@assets': path.resolve(__dirname, '../docs/assets'),
    }
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: { // 在命令行 使用 --hot 启用热更新
    // host: '0.0.0.0', // 指定使用的host
    // port: 8080, //设置运行端口
    open: true, //自动打开浏览器
    compress: true, // 一切服务都启用 gzip 压缩
    historyApiFallback: true,
    disableHostCheck: true, // 绕过主机检查
    quiet: true, // 设置控制台不输出
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      // 运行成功
      compilationSuccessInfo:{
        messages:[`你的应用程序在这里运行：http://${ip}:${this.port}`],
        notes:['有些附加说明要在成功编辑时显示']
      },
      //  运行错误
      onErrors:function(severity,errors){
        // 严重性可以是'error'或'warning'
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: "Webpack error",
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          // icon: ICON
        });
      },
      //是否每次编译之间清除控制台
      //默认为true
      clearConsole:true,
    }),
    new HtmlWebpackPlugin({ //  创建一个在内存中生成html的插件
      chunks: ['zui-docs'],
      inject: true,
      template: './docs/desktop/index.html', //指定模板页面
      filename: 'index.html', // 指定生成页面的名称
      minify: { //压缩 html 页面
        collapseWhitespace: true, //合并多余的空格
        removeComments: true, //移除注释
        removeAttributeQuotes: true, //移除 属性上的双引号
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['zui-mobile'],
      inject: true,
      template: './docs/mobile/index.html',
      filename: 'demo.html', 
      minify: {
        collapseWhitespace: true, 
        removeComments: true,
        removeAttributeQuotes: true,
      }
    }),
    new MiniCssExtractPlugin({
      chunks: ['zui-mobile'],
      filename: 'async_[name].css'
    }),
    new MiniCssExtractPlugin({
      chunks: ['zui-mobile'],
      filename: 'async_[name].css'
    })
  ]
});
