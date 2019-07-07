/*
* @Author: huazite
* @Date: 2019-07-07 21:03:04  
 * @Last Modified by: huazite
 * @Last Modified time: 2019-07-08 00:00:46
* @Description:  示例页面【发布配置】
*/

const webpack = require('webpack');
const baseConf = require('./webpack.demo.base.config.js');
const merge = require('webpack-merge');
const path = require('path');
// 将单个文件或整个目录复制到构建目录.
const CopyWebpackPlugin = require('copy-webpack-plugin');
// js压缩插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 用于优化或者压缩CSS资源
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//导入每次删除文件夹的插件
const CleanWebpackPlugin = require('clean-webpack-plugin')

// const rimraf = require('rimraf');

// rimraf('./dist/sites/demo', function (err) {
//     if(err) console.log(err);
// });

// rimraf('./dist/sites/demo.html', function (err) {
//     if (err) console.log(err);
// });

module.exports = merge(baseConf, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        //把需要删除的文件目录（路径），以数组方式传入
        new CleanWebpackPlugin(['./sites/demo']),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, "../sites/demo/asset/img/favicon.ico"), to: path.join(__dirname, "../dist/sites/")}
        ]),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, "../sites/demo/asset/img/pwa_logo.png"), to: path.join(__dirname, "../dist/sites/img/") }
        ]),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, "../sites/demo/asset/manifest.json"), to: path.join(__dirname, "../dist/sites/demo/") }
        ]),
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