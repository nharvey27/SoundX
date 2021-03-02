var CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: ['regenerator-runtime/runtime', './src/index.jsx'],
  output: {
    filename: 'bundle.js',
  },
  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader'},
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.css'],
  },
};
