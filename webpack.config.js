var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './main.js',
    html: './index.html',
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.(less|css)$/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'file?name=img/img-[hash:6].[ext]'
      }
    ],
  }
};
