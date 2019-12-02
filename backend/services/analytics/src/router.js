// db
const { createData } = require('./database/dbFunctions')

module.exports = router => {
  router.post('/ANALYTICS_SAVE_DATA', async ctx => {
    const { data } = ctx.request.body.payload
    await createData(data)
    ctx.status = 200
  })
}
