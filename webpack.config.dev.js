const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
// const dotenv = require('dotenv')
// const webpack = require('webpack')
// const env = dotenv.config().parsed

// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next])
//   return prev
// }, {})

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 9000
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  //* Disable HMR as it doesn't seem to work with React/ReactDOM experimental
  // resolve: {
  //   alias: {
  //     'react-dom': '@hot-loader/react-dom'
  //   }
  // }
  // plugins: [new webpack.DefinePlugin(envKeys)]
})
