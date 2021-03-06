let express = require("express");
let app = express();
let path = require("path");
let port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  let webpack = require("webpack");
  let webpackDevMiddleware = require("webpack-dev-middleware");
  let config = require("./webpack.config");
  let compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
    })
  );
}
app.get("*.js", function (req, res, next) {
  req.url = req.url + ".gz";
  res.set("Content-Encoding", "gzip");
  next();
});

app.use(express.static(path.join(__dirname, "dist")));

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(
      "==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.",
      port,
      port
    );
  }
});
