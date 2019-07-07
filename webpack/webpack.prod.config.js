/*
* @Author: huazite
* @Date: 2019-07-07 21:57:23  
 * @Last Modified by: huazite
 * @Last Modified time: 2019-07-07 23:58:45
* @Description:  打包npm可发布版本
*/

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConf = require('./webpack.base.config.js');
//导入每次删除文件夹的插件
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(webpackBaseConf, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    nutui: './src/index.js',
  },
  externals: {
    'vue': {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'zui.js',
    library: 'zui',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  plugins: [
    //把需要删除的文件目录（路径），以数组方式传入
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
  optimization: {
    minimize: false
  }
});