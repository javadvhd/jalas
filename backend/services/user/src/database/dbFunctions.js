const { User } = require('./dbModel')
const cryptography = require('cryptography')

exports.createUser = ({ firstname, lastname, username, email, password }) =>
  new User({
    firstname,
    lastname,
    username,
    email,
    password: cryptography.encryptSync(password),
    notificationItems: {
      removeOption: true,
      addOption: true,
      removeFromParticipants: true,
      inviteMeeting: true,
      createMeeting: true,
      submitVote: true,
    },
  }).save()

exports.findAllUsers = () => User.find().lean()

exports.findUserById = id => User.findOne({ _id: id })

exports.findUserByEmail = email => User.findOne({ email })

exports.findUserByEmailPass = (email, password) =>
  User.findOne({ email, password }).lean()

exports.findUsersById = userIds => User.find({ _id: { $in: userIds } })

exports.setNotificationOptions = ({ userId, notificationItems }) =>
  User.updateOne({ _id: userId }, { notificationItems })

exports.getNotificationWithEmail = ({ emails, item }) =>
  User.find({ email: { $in: emails } })
    .select(`email notificationItems.${item}`)
    .lean()
