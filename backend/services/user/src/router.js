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
    console.log('users ', users)
    ctx.body = R.map(dissocPassword, users)
    ctx.status = 200
  })

  router.get('/USER_GET_EMAIL_BY_ID', async ctx => {
    const { userId } = JSON.parse(ctx.query.payload)
    const { email } = await findUserById(userId)
    ctx.body = email
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
}
