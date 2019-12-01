// modules
const { get, post } = require('axios').create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://wapp.weblite.me/srv-comment'
      : 'http://localhost:5110'
})

exports.addNewComment = ({ comment, writerId, wisId, issueId }) =>
  post('createComment', {
    contextId: issueId,
    body: comment,
    writerId,
    wisId
  })

exports.getComments = (wisId, issueId) =>
  get('contextComments', {
    params: {
      wisId,
      contextId: issueId
    }
  })

exports.deleteComment = ({ isAdmin, commentId, writerId, wisId, issueId }) =>
  post('deleteComment', {
    wisId,
    contextId: issueId,
    commentId,
    writerId,
    isAdmin
  })
