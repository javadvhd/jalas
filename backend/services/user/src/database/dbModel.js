// module
const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
  password: String,
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  notificationItems: Object,
})

exports.User = model('User', userSchema)
