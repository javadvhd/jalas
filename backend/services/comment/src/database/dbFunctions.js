const { Comment } = require('./dbModel')

exports.createComment = comment => Comment.create(comment)

exports.getCommentsByMeetingId = meetingId =>
  Comment.find({ meetingId, deleted: { $exists: false } })
    .sort({ createdAt: 1 })
    .lean()

exports.deleteCommentWithAuthorization = ({
  meetingId,
  commentId,
  writerId,
  isAdmin,
}) =>
  Comment.updateOne(
    { _id: commentId, meetingId, ...(!isAdmin && { writerId }) },
    { $set: { deleted: true } },
  )

exports.deleteCommentByParentId = parentId =>
  Comment.updateMany({ parentId }, { $set: { deleted: true } })

exports.findCommentByParentId = parentId => Comment.find({ parentId }).lean()
