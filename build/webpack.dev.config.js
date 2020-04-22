const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config.js');

base.plugins = _.concat(base.plugins, [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(), // 热加载
    new webpack.WatchIgnorePlugin([/(css|scss)\.d\.ts$/]), // 为了避免webpack因为生成众多的scss.d.ts而速度变慢
]);

base.module.rules.push(
  {
    test: /\.css$/,
    use: [
     {
       loader: 'style-loader',
       options: {
         esModule: true
       },
     },
     {
       loader: 'css-loader',
       options: {
         sourceMap: true
       },
     }
    ],
  },
  {
    test: /\.less$/,
    use: [
        'style-loader',
        'css-loader',
        'less-loader',
    ],
  },
  {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
        options: {
          esModule: true
        },
      },
      {
        loader: 'typings-for-css-modules-loader',
        options: {
          namedExport: true,
          camelCase: true,
          modules: true,
          localIdentName: '[local]_[hash:base64:5]',
        },
      },
      'sass-loader',
    ],
  },
);

const devConfig = {
  mode: 'development',
  context: path.resolve(__dirname, '..'),
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/js/[name].js',
  }
};

module.exports = _.assignIn(devConfig, base);

