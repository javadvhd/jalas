// db
const { findUserById } = require('./database/dbFunctions')

module.exports = router => {
  router.get('/USER_GET_USER_BY_ID', async ctx => {
    const { userId } = ctx.query.payload
    const user = await findUserById(userId)
    ctx.body = user
    ctx.status = 200
  })

  router.get('/USER_GET_MEETINGIDS_BY_ID', async ctx => {
    const { userId } = ctx.query.payload
    const { meetings } = await findUserById(userId)
    ctx.body = meetings
    ctx.status = 200
  })

  router.get('/USER_GET_EMAIL_BY_ID', async ctx => {
    const { userId } = ctx.query.payload
    const { email } = await findUserById(userId)
    ctx.body = email
    ctx.status = 200
  })
}
