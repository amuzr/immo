const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + "/src",
  entry: './app/app.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        text: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  output: {
    filename: 'client.min.js',
    path: __dirname + "/js/"
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle:false,
      sourcemap:false
    })
    ]
};