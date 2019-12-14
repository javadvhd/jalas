// modules
const R = require('ramda')
const { get, post } = require('axios')
const config = require('../../../packages/servicesPort.json')

requestUrl = (dest, action) =>
  `http://${config[dest].host}:${config[dest].port}/${action}`

exports.getRequest = ({ dest, action, payload }) =>
  get(requestUrl(dest, action), {
    params: {
      payload,
    },
  })

exports.postRequest = ({ dest, action, payload }) =>
  post(requestUrl(dest, action), {
    payload,
  })

exports.voteCounter = meeting =>
  R.assoc(
    'options',
    R.map(
      option => ({
        ...option,
        agree: option.agree.length,
        disagree: option.disagree.length,
      }),
      meeting.options,
    ),
    meeting,
  )

exports.voteConvertToArray = meeting =>
  R.assoc(
    'options',
    R.map(
      option => ({
        ...option,
        agree: [],
        disagree: [],
      }),
      meeting.options,
    ),
    meeting,
  )
