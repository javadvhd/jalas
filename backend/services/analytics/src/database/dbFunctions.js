const { Data } = require('./dbModel')

exports.createData = payload => new Data(payload).save()
