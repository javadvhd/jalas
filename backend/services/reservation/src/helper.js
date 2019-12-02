const { create } = require('axios')

const reservationAxiosObject = create({
  baseUrl: 'http://213.233.176.40',
})

exports.reservationGet = reservationAxiosObject.get
exports.reservationPost = reservationAxiosObject.post
