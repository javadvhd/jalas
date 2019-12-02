// module
const mongoose = require('mongoose')

const { Schema, model } = mongoose

const DateSchema = new Schema({}, { strict: false })

exports.Data = model('Data', DateSchema)
