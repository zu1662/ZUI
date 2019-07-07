/*
* @Author: huazite
* @Date: 2019-07-07 21:50:07  
 * @Last Modified by: huazite
 * @Last Modified time: 2019-07-08 00:01:08
* @Description:  文档界面【生产配置】
*/

const webpack = require('webpack');
const baseConf = require('./webpack.doc.base.config.js');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//导入每次删除文件夹的插件
const CleanWebpackPlugin = require('clean-webpack-plugin')

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
        new CleanWebpackPlugin(['./sites/doc']),
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

