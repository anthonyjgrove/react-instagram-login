const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const uglifyConf = require('./uglify.json')

const fileRoot = process.cwd()

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(fileRoot, 'dist'),
    filename: 'instagram-login.js',
    libraryTarget: 'umd',
    library: 'InstagramLogin'
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
            presets: ['react', ['es2015', { modules: false }]],
            plugins: ['transform-react-remove-prop-types', 'transform-react-constant-elements', 'transform-react-inline-elements']
          }
        }
      }
    ]
  },
  externals: {
    react: 'react',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({ uglifyConf }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}
