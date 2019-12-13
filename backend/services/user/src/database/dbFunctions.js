const { User } = require('./dbModel')

const createUser = ({
  firstname,
  lastname,
  username,
  email,
  meetings,
  phone,
}) =>
  new User({
    firstname,
    lastname,
    username,
    phone,
    email,
    meetings,
  }).save()

// setTimeout(
//   () =>
//     createUser({
//       firstname: 'ramtin',
//       lastname: 'khosravi',
//       username: 'rKhosravi',
//       phone: '+98 --- --- ----',
//       email: 'example@some-company.com',
//       meetings: ['5de4e710073a5a71bc86b442'],
//     }),
//   3000,
// )

exports.findUserById = id => User.findOne({ _id: id })
exports.findUserByEmail = email => User.findOne({ email })
