var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['regenerator-runtime/runtime', './src/index.jsx'],
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.scss/, use: ['style-loader', 'css-loader']},
      {test: /\.css$/i, use: ['style-loader', 'css-loader', 'postcss-loader']},
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.css'],
  },
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    moduleIds: 'named',
    emitOnErrors: true,
  },
};
