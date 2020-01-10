// modules
const R = require('ramda')
// db
const {
  createData,
  getCreationTime,
  getNumberOfReservedRooms,
  getThroughput,
  getAverageResponseTime,
} = require('./database/dbFunctions')

module.exports = router => {
  router.post('/ANALYTICS_SAVE_DATA', async ctx => {
    const data = ctx.request.body.payload
    await createData(data)
    ctx.status = 200
  })

  router.get('/ANALYTICS_CREATING_MEETING_AVERAGE_TIME', async ctx => {
    const creationTimeRawData = await getCreationTime()
    const averageCreationTime =
      R.reduce((acc, val) => acc + val.data.length, 0, creationTimeRawData) /
      creationTimeRawData.length

    ctx.body = averageCreationTime
  })

  router.get('/ANALYTICS_NUMBER_OF_RESERVED_ROOMS', async ctx => {
    ctx.body = await getNumberOfReservedRooms()
  })

  router.get('/ANALYTICS_THROUGHPUT', async ctx => {
    ctx.body = await getThroughput()
  })

  router.get('/ANALYTICS_AVERAGE_RESPONSE_TIME', async ctx => {
    const responseTimeRawData = await getAverageResponseTime()
    const averageResponseTime =
      R.reduce((acc, val) => acc + val.data.duration, 0, responseTimeRawData) /
      responseTimeRawData.length

    ctx.body = averageResponseTime
  })
}
