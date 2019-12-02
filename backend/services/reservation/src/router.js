// helper
const { get, post } = require('axios')

module.exports = router => {
  router.post('/RESERVATION_RESERVE_ROOM', async ctx => {
    const { username, room, start, end } = ctx.request.body.payload
    try {
      const { data } = await post(
        `http://213.233.176.40/room/${room}/reserve`,
        {
          username,
          start,
          end,
        },
      )
      ctx.body = data
    } catch (e) {
      ctx.body = { error: e }
    }
  })

  router.get('/RESERVATION_AVAILABLE_ROOMS', async ctx => {
    const { start, end } = JSON.parse(ctx.query.payload)
    try {
      const { data } = await get(
        'http://213.233.176.40/available_rooms' + `?start=${start}&end=${end}`,
      )
      ctx.body = data.availableRooms
    } catch (e) {
      ctx.body = { error: e }
    }
  })
}
