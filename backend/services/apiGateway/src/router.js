// modules
const { get, post } = require('axios')
// helper
const { requestUrl } = require('./helper')

module.exports = router => {
  router.post('/', async ctx => {
    const { dest, action, payload } = ctx.request.body

    try {
      const { data } = await post(requestUrl(dest, action), { payload })
      ctx.body = data
    } catch (e) {
      const { status, data, statusText } = e.response
      console.log('gateWay', { action, status, data, statusText })
      ctx.status = status
    }
  })

  router.get('/', async ctx => {
    const { dest, action, payload } = ctx.query

    try {
      const { data } = await get(requestUrl(dest, action), {
        params: { payload },
      })
      ctx.body = data
    } catch (e) {
      const { status, data, statusText } = e.response
      console.log('gateWay', { action, status, data, statusText })
      ctx.status = status
    }
  })
}
