// helper
const { reservationGet, reservationPost } = require('./helper')

module.exports = router => {
  router.post('/RESERVATION_RESERVE_ROOM', async ctx => {
    const { username, room, start, end } = ctx.request.body
    try {
      const url = `/room/${room}/reserve`
      const { data } = await reservationPost(url, {
        start,
        end,
        username,
      })
      ctx.body = data
    } catch (e) {
      ctx.body = { error: e }
    }
  })

  router.get('/RESERVATION_AVAILABLE_ROOMS', async ctx => {
    const { start, end } = ctx.query

    try {
      const { data } = await reservationGet('/available_rooms', {
        params: { start, end },
      })
      ctx.body = data
    } catch (e) {
      ctx.body = { error: e }
    }
  })
}
