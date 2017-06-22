const path = require('path');

module.exports = {
  entry: 'multi-entry-loader!',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'multi-entry-loader',
        query: {
          include: ['./app/*.js','./app/**/*.js'],
          exclude: './app/**/*spec.js'
        }
      }
    ]
  }
};