const webpack = require('webpack');
const path = require('path');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname + "/src",
  entry: path.join(__dirname, 'src/app/router.js'),
  devtool: debug ? "inline-sourcemap" : null,
  module: {
    rules: [{
      test: /\.js$/,  //All .js files
      exclude: [path.resolve(__dirname, 'node_modules')],
      use: [
        {
          loader: "babel-loader",
          query: {
            presets: ['react', 'es2015', 'stage-1']
          }
        }
      ]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src/www/js/')
  },
  plugins: debug ? [] : [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle:false,
      sourcemap:false
    })
    ]
};