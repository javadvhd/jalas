// module
const mongoose = require('mongoose')

const { Schema } = mongoose

const CommentSchema = new Schema(
  {
    meetingId: String,
    body: String,
    writerId: String,
    deleted: Boolean,
  },
  { versionKey: false, timestamps: true },
)

CommentSchema.index({ meetingId: 1, createdAt: -1 })

exports.Comment = mongoose.model('Comment', CommentSchema)
