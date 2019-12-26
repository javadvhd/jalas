// db
const { findUserById, findUserByEmailPass } = require('./database/dbFunctions')
const cryptography = require('cryptography')

module.exports = router => {
  router.get('/USER_GET_USER_BY_ID', async ctx => {
    const { userId } = ctx.query.payload
    const user = await findUserById(userId)
    ctx.body = user
    ctx.status = 200
  })

  router.get('/USER_GET_EMAIL_BY_ID', async ctx => {
    const { userId } = ctx.query.payload
    const { email } = await findUserById(userId)
    ctx.body = email
    ctx.status = 200
  })

  router.get('/USER_LOGIN', async ctx => {
    const { email, password } = ctx.query.payload

    const user = await findUserByEmailPass(
      email,
      cryptography.encryptSync(password),
    )

    if (user) {
      ctx.body = user
      ctx.status = 200
      return
    }

    ctx.status = 401
  })
}
