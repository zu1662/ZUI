const webpack = require('webpack');
const config = require('../package.json');
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConf = require('./webpack.base.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//导入每次删除文件夹的插件
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(webpackBaseConf, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    zui: './src/zui.js',
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
    filename: 'zui.min.js',
    library: 'zui',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  plugins: [
    //把需要删除的文件目录（路径），以数组方式传入
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
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