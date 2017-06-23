const path = require('path');

module.exports = {
  entry: './app/main',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate-loader!babel-loader',
        query: {
          stage: 0
        }
      }
    ]
  }
};