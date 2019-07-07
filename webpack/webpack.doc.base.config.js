/*
* @Author: huazite
* @Date: 2019-07-07 21:35:10  
 * @Last Modified by: huazite
 * @Last Modified time: 2019-07-07 21:40:04
* @Description:  文档页面【基础配置】
*/

const path = require('path');
const webpackBaseConf = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');

const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(webpackBaseConf, {
    entry: {
        app: './sites/doc/app.js',
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist/sites/'),
        chunkFilename: 'doc/js/[name].[hash:5].js',
        filename: isDev ? 'doc/js/[name].js' : 'doc/js/[name].[hash].js'
    },
    module: {
        rules: [
          { // 把 Markdown文件 转化为 Vue文件
            test: /\.md$/,
            loader: 'vue-markdown-loader',
            options: {
              preventExtract: true
            }
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './sites/doc/index.html',
            filename: 'default.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'doc/css/[name].css' : 'doc/css/[name].[hash].css'
        })
    ]
});

