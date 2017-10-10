const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: "./src/App.js"
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets:['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
