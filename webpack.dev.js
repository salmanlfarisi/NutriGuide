const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    hot: true,
  },
});
