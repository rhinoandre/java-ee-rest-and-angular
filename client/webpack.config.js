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
        exclude: /(node_modules)/,
        use: [
          { loader: 'ng-annotate-loader' },
          { loader: 'babel-loader' },
        ]
      }
    ]
  }
};