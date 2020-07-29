const Compiler = require('./compiler')

function smallpack(config) {
  const compiler = new Compiler(config)
  compiler.run()
}

module.exports = smallpack