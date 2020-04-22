const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');

new WebpackDevServer(webpack(config), {
  contentBase: 'build/',
  publicPath: '/',
  logLevel: 'warn',
  historyApiFallback: true,
}).listen(8083, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8083/');
});
