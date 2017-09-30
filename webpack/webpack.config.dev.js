const path = require('path')
const webpack = require('webpack')

const fileRoot = process.cwd()

module.exports = {
  devtool: 'eval',
  entry: {
    demo: ['webpack/hot/dev-server', './demo/index.js']
  },
  output: {
    path: path.join(fileRoot, 'demo'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: ['react', ['es2015', { modules: false }]]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: path.join(fileRoot, 'demo'),
    historyApiFallback: true,
    compress: false,
    host: process.env.IP || '0.0.0.0',
    port: parseInt(process.env.PORT, 0) || 8080
  }
}
