const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  context: __dirname + "/src",
  entry: path.join(__dirname, 'src/app/router.js'),
  module: {
    rules: [{
      test: /\.js$/,  //All .js files
      exclude: [path.resolve(__dirname, 'node_modules')],
      use: [
        {
          loader: "react-hot-loader"
        },
        {
          loader: "babel-loader",
          query: {
            presets: ['react', 'es2015', 'stage-1']
          }
        }
      ]
    }],
  },
  resolve: {
    extensions: [".js"]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src/www'),
    filename: 'bundle.js',
    publicPath: '/js/',
    hot: true,
    port: 3000
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,'src/www/js/')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    //Moves files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, "src")),
  ],

};