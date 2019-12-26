const { User } = require('./dbModel')
const cryptography = require('cryptography')

const createUser = ({
  firstname,
  lastname,
  username,
  email,
  phone,
  password,
}) =>
  new User({
    firstname,
    lastname,
    username,
    phone,
    email,
    password: cryptography.encryptSync(password),
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

exports.findUserByEmailPass = (email, password) =>
  User.findOne({ email, password }).lean()
