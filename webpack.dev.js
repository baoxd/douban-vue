const path = require('path')
const webpack = require('webpack')
const cleanPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: ['./app/src/main.js']
  },
  output: {
    path: path.join(__dirname, 'app/dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['*', '.js', '.vue'],
    modules: ['node_modules', './app/src']
  },
  resolveLoader: {
    modules: ['node_modules']
  },
  module: {
    loaders: [
      {
        test:/\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      BASE_URL: JSON.stringify('http://localhost:8002'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new cleanPlugin([path.join(__dirname, 'app/dist')]),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: 'vendor.js'
    })
  ],
  devServer: {
    port: 8088,
    contentBase: '.',
    hot: true,
    historyApiFallback: true,
    publicPath: '/app/dist',
    stats: {
      colors: true
    }
  }
}
