// helper
const { get, post } = require('axios')

module.exports = router => {
  router.post('/RESERVATION_RESERVE_ROOM', async ctx => {
    const { username, room, start, end } = ctx.request.body.payload
    try {
      const { data } = await post(`http://5.253.27.176/rooms/${room}/reserve`, {
        username,
        start,
        end,
      })
      ctx.body = data
    } catch (e) {
      const { status, data, statusText } = e.response
      console.log('reservation', { status, data, statusText })
      ctx.body = { error: { status } }
    }
  })

  router.get('/RESERVATION_AVAILABLE_ROOMS', async ctx => {
    const { start, end } = JSON.parse(ctx.query.payload)
    try {
      const { data } = await get(
        `http://5.253.27.176/available_rooms?start=${start}&end=${end}`,
      )
      ctx.body = data.availableRooms
    } catch (e) {
      const { status, data, statusText } = e.response
      console.log('reservation', { status, data, statusText })
      ctx.body = { error: { status } }
    }
  })
}
