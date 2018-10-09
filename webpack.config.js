const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');// 解决输出文件引用
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清理输出文件夹

module.exports = {
  entry: {// 在 entry 添加 src/print.js 作为新的入口起点（print）
     app: './src/index.js',// 生成 app.bundle.js
     print: './src/print.js'// 生成 print.bundle.js
  },
  devtool: 'inline-source-map',// 进行源文件堆栈跟踪，定位源文件错误
  devServer: {// 自动刷新 Web 服务器
     contentBase: './dist'
  },
  plugins: [
     new CleanWebpackPlugin(['dist']),// 构建前清理输出文件夹
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
  ],
  output: {
    filename: '[name].bundle.js',// 修改 output，以便根据入口起点名称动态生成 bundle 名称
    path: path.resolve(__dirname, 'dist')
  }
};