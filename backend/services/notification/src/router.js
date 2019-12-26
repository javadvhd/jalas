// helper
const { getRequest } = require('./helper')
const { mailSender } = require('./mail')

module.exports = router => {
  router.post('/NOTIFICATION_SEND_EMAIL', async ctx => {
    const { emails, body, subject } = ctx.request.body.payload
    const to = emails.reduce((acc, val) => acc + ', ' + val, '')

    await mailSender({
      to,
      subject,
      body,
    })

    ctx.status = 200
  })
}
