var path = require('path');
var express = require('express');
var app = new express();
var port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
    }),
  );
}
app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(
      '==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port,
    );
  }
});
