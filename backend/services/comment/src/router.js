// db functions
const {
  createComment,
  getCommentsByMeetingId,
  deleteComment,
} = require('./database/dbFunctions')

module.exports = router => {
  router.post('/COMMENT_CREATE', async ctx => {
    const { meetingId, body, userId } = ctx.request.body.payload
    ctx.body = await createComment({ meetingId, body, userId })
  })

  router.get('/COMMENT_GET_BY_MEETING_ID', async ctx => {
    const { meetingId } = JSON.parse(ctx.query.payload)
    ctx.body = await getCommentsByMeetingId(meetingId)
  })

  router.post('/COMMENT_DELETE', async ctx => {
    const { meetingId, commentId, writerId, isAdmin } = ctx.request.body
    const { nModified } = await deleteComment({
      meetingId,
      commentId,
      writerId,
      isAdmin,
    })
    ctx.status = nModified ? 200 : 401
  })
}
