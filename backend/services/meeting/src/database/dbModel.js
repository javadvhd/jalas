// module
const mongoose = require('mongoose')

const { Schema, model } = mongoose

const meetingSchema = new Schema(
  {
    title: String,
    creatorId: String,
    status: { type: String, default: 'pole' },
    options: Array,
    participants: Array,
    selectedOption: Number,
    room: String,
  },
  { versionKey: false },
)

exports.Meeting = model('Meeting', meetingSchema)
