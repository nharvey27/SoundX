var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'development',

  entry: ['@babel/polyfill', './src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.css'],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    namedModules: true, // NamedModulesPlugin()
    noEmitOnErrors: true, // NoEmitOnErrorsPlugin
  },
};
