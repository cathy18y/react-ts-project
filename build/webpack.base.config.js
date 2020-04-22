const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = path.join(__dirname, '../dist');

module.exports = {
  target: 'web',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    modules: [
      path.join(__dirname, '../src'),
      path.join(__dirname, '../node_modules'),
    ],
    alias: {
      "@": path.join(__dirname, '../src'),
      testcom: path.join(__dirname, '../src/components'),
    },
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'awesome-typescript-loader'
          }
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [{
          loader: 'source-map-loader'
        }]
      }
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      moment: 'moment'
    }),
    new MiniCssExtractPlugin({
      path: outputPath,
      filename: 'static/css/[name].css'
    })
  ],

  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM'
  // },
};
