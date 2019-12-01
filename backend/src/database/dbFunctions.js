const { Issue } = require('./dbModel')

exports.createIssue = ({ wisId, title, body, isPublic, creatorId }) =>
  new Issue({
    wisId,
    title,
    body,
    isPublic,
    creatorId
  }).save()

exports.incrementCommentsCountById = (id, amount) =>
  Issue.findOneAndUpdate(
    { _id: id },
    { $inc: { commentsCount: amount } },
    { new: true }
  )

exports.closeIssue = id =>
  Issue.updateOne({ _id: id }, { $set: { isClosed: true } })

exports.getIssuesByWisId = wisId =>
  Issue.find({
    wisId,
    deleted: { $exists: false }
  })

exports.deleteIssue = id =>
  Issue.updateOne({ _id: id }, { $set: { deleted: true } })

exports.findIssueById = id => Issue.findOne({ _id: id })
