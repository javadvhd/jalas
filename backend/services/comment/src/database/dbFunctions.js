const { Comment } = require('./dbModel')

exports.createComment = comment => Comment.create(comment)

exports.getCommentsByMeetingId = meetingId =>
  Comment.find({ meetingId, deleted: { $exists: false } })
    .sort({ createdAt: 1 })
    .lean()

exports.deleteComment = ({ meetingId, commentId, writerId, isAdmin }) =>
  Comment.updateOne(
    { _id: commentId, meetingId, ...(!isAdmin && { writerId }) },
    { $set: { deleted: true } },
  )
