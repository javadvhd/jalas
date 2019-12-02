// modules
const { get } = require('axios')
const config = require('../../../packages/servicesPort.json')

requestUrl = (dest, action) =>
  `http://${config[dest].host}:${config[dest].port}/${action}`

exports.getRequest = ({ dest, action, payload }) =>
  get(requestUrl(dest, action), {
    params: {
      payload,
    },
  })
