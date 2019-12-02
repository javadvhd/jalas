// helper
const { reservationGet, post } = require('./helper')

module.exports = router => {
  router.post('/RESERVATION_RESERVE_ROOM', async ctx => {
    const { username, room, start, end } = ctx.request.body.payload
    console.log('11 ', username, room, start, end)
    console.log(`http://213.233.176.40/rooms/${room}/reserve`)
    try {
      // const url = `/room/${room}/reserve`
      const data = await post(`http://213.233.176.40/rooms/${room}/reserve`, {
        username: 'rkhosravi',
        start: '2019-09-13T19:00:00',
        end: '2019-09-13T20:00:00',
      }).then(res => res.data)

      console.log('22 ', data)
      ctx.body = data
    } catch (e) {
      ctx.body = { error: e }
    }
  })

  router.get('/RESERVATION_AVAILABLE_ROOMS', async ctx => {
    const { start, end } = JSON.parse(ctx.query.payload)

    try {
      await reservationGet(
        'http://213.233.176.40/available_rooms' + `?start=${start}&end=${end}`,
      )
        .then(res => res.data)
        .then(data => (ctx.body = data.availableRooms))
        .catch(console.log)
    } catch (e) {
      ctx.body = { error: e }
    }
  })
}
