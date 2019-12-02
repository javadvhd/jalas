// helper
const { reservationGet, reservationPost } = require('./helper')

module.exports = router => {
  router.post('/RESERVATION_RESERVE_ROOM', async ctx => {
    const { username, room, start, end } = ctx.request.body.payload
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
    const { start, end } = JSON.parse(ctx.query.payload)

    // try {
    // const { data } = await reservationGet(
    // `/available_rooms?start=${start}&end=${end}`,
    // {
    //   params: { start, end },
    // },
    // )
    console.log('data ', data)

    ctx.body = [200, 201, 202]
    // } catch (e) {
    //   ctx.body = { error: e }
    // }
  })
}
