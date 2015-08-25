var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './src/ScrollView'
    ],
  },
  devtool: 'source-map',
  output: {
      path: path.join(__dirname, "dist"),
      filename: 'react-scrollview.js',
      library: 'ReactScrollView',
      libraryTarget: 'umd',
  },
  resolveLoader: {
    modulesDirectories: ['..', 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.IgnorePlugin(/un~$/),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee']
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      // React dep should be available as window.React, not window.react
      root: "React"
    }
  },
  module: {
    loaders: [
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee' }
    ]
  }
};
