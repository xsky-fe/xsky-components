var webpack = require('webpack')
var devServer = require('webpack-dev-server')
var config = require('./webpack.config')

var port = process.env.PORT || 3000

var server = new devServer(webpack(config), {
  historyApiFallback: true,
  hot: true,
  publicPath: config.output.publicPath,
  stats: config.stats,
})

server.listen(port, function (err) {
  if (err) return console.log(err)
  console.log(`Listening at http://localhost:${port}/`)
})
