// helper
const { getRequest } = require('./helper')
const { mailSender } = require('./mail')

module.exports = router => {
  router.post('/NOTIFICATION_SEND_EMAIL', async ctx => {
    const { userId } = ctx.request.body.payload

    const { data: email } = await getRequest({
      dest: 'user',
      action: 'USER_GET_EMAIL_BY_ID',
      payload: {
        userId,
      },
    })

    await mailSender({
      from: 'hosein.norouzi76@gmail.com',
      // to: email,
      to: 'hosein.norouzi76@yahoo.com',
      subject: 'ایجاد جلسه',
      body: 'جلسه شما با موفقیت ایجاد شد',
    })

    ctx.status = 200
  })
}
