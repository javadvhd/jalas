// db functions
const {
  createComment,
  getCommentsByMeetingId,
  deleteCommentWithAuthorization,
  editComment,
} = require('./database/dbFunctions')
// helper
const { cascadeDelete } = require('./helper')

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
    const { meetingId, commentId, writerId, isAdmin } = ctx.request.body.payload

    const { nModified } = await deleteCommentWithAuthorization({
      meetingId,
      commentId,
      writerId,
      isAdmin,
    })
    if (nModified) await cascadeDelete(commentId)

    ctx.status = nModified ? 200 : 401
  })

  router.post('/COMMENT_EDIT', async ctx => {
    const { commentId, writerId, body } = ctx.request.body.payload

    const { nModified } = await editComment({
      commentId,
      writerId,
      body,
    })

    ctx.status = nModified ? 200 : 401
  })
}
