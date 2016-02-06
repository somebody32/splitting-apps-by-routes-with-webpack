module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?cacheDirectory"}
    ]
  }
};
