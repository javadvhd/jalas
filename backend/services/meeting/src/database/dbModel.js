// module
const mongoose = require('mongoose')

const { Schema, model } = mongoose

const meetingSchema = new Schema({
  title: String,
  creatorId: String,
  state: { type: String, default: 'not-created' },
  option: Array,
  selectedOption: Number,
  room: String,
})

exports.Meeting = model('Meeting', meetingSchema)
