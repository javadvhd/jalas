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
//       firstname: 'javad',
//       lastname: 'vahedi',
//       username: 'javadvhd',
//       password: 'javad@jalas',
//       phone: '+98 --- --- ----',
//       email: 'vahedi.r46@gmail.com',
//     }),
//   3000,
// )

exports.findUserById = id => User.findOne({ _id: id })

exports.findUserByEmail = email => User.findOne({ email })

exports.findUserByEmailPass = (email, password) =>
  User.findOne({ email, password }).lean()

exports.findUsersById = userIds => User.find({ _id: { $in: userIds } })
