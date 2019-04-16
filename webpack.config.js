const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const browserConfig = {
  entry: { main: ['babel-polyfill', './client/index.jsx'] },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    }),
    new CleanWebpackPlugin('dist', {}),
    new Visualizer()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  },
  // devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

const serverConfig = {
  entry: ['babel-polyfill', './server/index.js'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(process.cwd(), 'server'),
    filename: 'server.js',
    publicPath: '/server/'
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new NodemonPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
module.exports = [browserConfig, serverConfig];
