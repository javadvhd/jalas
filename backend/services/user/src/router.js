// modules
const cryptography = require('cryptography')
const R = require('ramda')
// helper
const { dissocPassword } = require('./helper')
// db
const {
  findUserById,
  findUserByEmailPass,
  findUsersById,
  setNotificationOptions,
  getNotificationWithEmail,
} = require('./database/dbFunctions')

module.exports = router => {
  router.get('/USER_GET_USER_BY_ID', async ctx => {
    const { userId } = JSON.parse(ctx.query.payload)
    const user = await findUserById(userId)
    ctx.body = dissocPassword(user)
    ctx.status = 200
  })

  router.get('/USER_GET_USERS_BY_ID', async ctx => {
    const { userIds } = JSON.parse(ctx.query.payload)
    const users = await findUsersById(userIds)
    ctx.body = R.map(dissocPassword, users)
    ctx.status = 200
  })

  router.get('/USER_GET_NOTIFICATION_POLICY_BY_EMAIL', async ctx => {
    const { emails, item } = JSON.parse(ctx.query.payload)

    const res = await getNotificationWithEmail({
      emails,
      item,
    })

    ctx.body = R.reduce(
      (acc, { email, notificationItems }) =>
        R.assoc(email, notificationItems[item], acc),
      {},
      res,
    )

    ctx.status = 200
  })

  router.get('/USER_LOGIN', async ctx => {
    const { email, password } = JSON.parse(ctx.query.payload)

    const user = await findUserByEmailPass(
      email,
      cryptography.encryptSync(password),
    )

    if (user) {
      ctx.body = dissocPassword(user)
      ctx.status = 200
      return
    }

    ctx.status = 401
  })

  router.post('/SET_USER_NOTIFICATION_STATUS', async ctx => {
    const { notificationItems, userId } = ctx.request.body.payload

    const { nModified } = await setNotificationOptions({
      userId,
      notificationItems,
    })

    ctx.status = nModified ? 200 : 401
  })
}
