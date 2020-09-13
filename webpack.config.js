const path = require('path');
const webpack = require('webpack');

module.exports = {
<<<<<<< HEAD
  mode: NODE_ENV, 
=======
  mode: 'development',
>>>>>>> b264615d53cfbd91a6e5d3e9f3548c071f253c67
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    // enable importing js jsx files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './client'),
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    publicPath: '/build/',
  },

};
