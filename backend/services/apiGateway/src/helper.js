const config = require('../../../packages/servicesPort.json')

exports.requestUrl = (dest, action) =>
  `http://${config[dest].host}:${config[dest].port}/${action}`
