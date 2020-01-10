// module
const mongoose = require('mongoose')

const { Schema, model } = mongoose

const DateSchema = new Schema(
  {},
  { strict: false, timestamps: { createdAt: true, updatedAt: false } },
)

exports.Data = model('Data', DateSchema)
