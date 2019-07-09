/*
* @Author: huazite
* @Date: 2019-07-07 21:03:04  
 * @Last Modified by: huazite
 * @Last Modified time: 2019-07-10 00:21:18
* @Description:  页面【发布配置】
*/

const webpack = require('webpack');
const baseConf = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const path = require('path');
// js压缩插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 用于优化或者压缩CSS资源
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//导入每次删除文件夹的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(baseConf, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../docs/dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    //把需要删除的文件目录（路径），以数组方式传入
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['../docs/dist']
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          }
        },
        sourceMap: false,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
});