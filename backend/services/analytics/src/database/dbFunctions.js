const { Data } = require('./dbModel')

exports.createData = payload => new Data(payload).save()

exports.getCreationTime = () =>
  Data.find({ 'data.type': 'creationTime' })
    .select('data.length')
    .lean()

exports.getNumberOfReservedRooms = () =>
  Data.count({ 'data.type': 'reserveCounter' })

exports.getThroughput = () =>
  Data.count({
    'data.type': 'responseTime',
    createdAt: { $gt: new Date() - 1000 * 60 * 60 },
  })

exports.getAverageResponseTime = () =>
  Data.find({ 'data.type': 'responseTime' })
    .select('data.duration')
    .lean()
