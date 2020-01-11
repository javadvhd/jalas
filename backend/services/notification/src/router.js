// helper
const { getRequest } = require('./helper')
const { mailSender } = require('./mail')

module.exports = router => {
  router.post('/NOTIFICATION_SEND_EMAIL', async ctx => {
    const { emails, body, subject, type } = ctx.request.body.payload
    const { data: emailsPolicy } = await getRequest({
      dest: 'user',
      action: 'USER_GET_NOTIFICATION_POLICY_BY_EMAIL',
      payload: { emails, item: type },
    })

    const to = emails.reduce(
      (acc, val) => (emailsPolicy[val] ? acc + ', ' + val : acc),
      '',
    )

    if (to)
      await mailSender({
        to,
        subject,
        body,
      })

    ctx.status = 200
  })
}
