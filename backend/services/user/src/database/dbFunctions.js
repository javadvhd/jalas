const { User } = require('./dbModel')

const createUser = ({ firstname, lastname, username, email, phone }) =>
  new User({
    firstname,
    lastname,
    username,
    phone,
    email,
  }).save()

// setTimeout(
//   () =>
//     createUser({
//       firstname: 'ramtin',
//       lastname: 'khosravi',
//       username: 'rKhosravi',
//       phone: '+98 --- --- ----',
//       email: 'example@some-company.com',
//     }),
//   3000,
// )

exports.findUserById = id => User.findOne({ _id: id })

exports.findUserByEmail = email => User.findOne({ email })
