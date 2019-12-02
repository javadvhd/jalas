// module
const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  meetings: Array,
})

exports.User = model('User', userSchema)
