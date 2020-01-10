// db functions
const {
  createComment,
  getCommentsByMeetingId,
  deleteComment,
} = require('./database/dbFunctions')

module.exports = router => {
  router.post('/COMMENT_CREATE', async ctx => {
    const { meetingId, body, writerId } = ctx.request.body.payload

    await createComment({ meetingId, body, writerId })
    ctx.status = 200
  })

  router.post('/COMMENT_REPLY', async ctx => {
    const {
      meetingId,
      body,
      writerId,
      depth,
      parentId,
    } = ctx.request.body.payload

    await createComment({ meetingId, body, writerId, depth, parentId })
    ctx.status = 200
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
