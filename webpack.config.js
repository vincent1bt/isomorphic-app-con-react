var path = require("path")
var srcPath = path.join(__dirname, "app/js")
var endPath = path.join(__dirname, "public")


module.exports = {
  entry: {
    main: srcPath
  },
  output: {
    filename: "[name].js",
    path: endPath
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    root: srcPath,
    extensions: [".js", "", ".jsx"],
    moduleDirectories: ["node_modules"]
  },
  debug: true,
  devtool: "source-map"

}