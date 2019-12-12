// module
const mongoose = require('mongoose')

const { Schema, model } = mongoose

const meetingSchema = new Schema(
  {
    title: String,
    creatorId: String,
    status: String,
    options: Array,
    participants: Array,
    selectedOption: Number,
    room: String,
  },
  { versionKey: false },
)

exports.Meeting = model('Meeting', meetingSchema)
