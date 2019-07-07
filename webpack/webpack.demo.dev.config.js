/*
* @Author: huazite
* @Date: 2019-07-07 21:04:02  
 * @Last Modified by: huazite
 * @Last Modified time: 2019-07-08 00:08:51
* @Description:  示例页面【开发配置】
*/

const path = require('path');
const baseConf = require('./webpack.demo.base.config.js');
const merge = require('webpack-merge');


module.exports = merge(baseConf, {
    mode: 'development',
    output: {
        publicPath: '',
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: { // 在命令行 使用 --hot 启用热更新
        // host: '0.0.0.0', // 指定使用的host
        // port: 8080, //设置运行端口
        open: true, //自动打开浏览器
        contentBase: path.resolve(__dirname, 'dist/sites/'), //指定托管目录
        index: 'demo.html',
        compress: true, // 一切服务都启用 gzip 压缩
        historyApiFallback: true,
        disableHostCheck: true, // 绕过主机检查
    }
});