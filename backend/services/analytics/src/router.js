// // actions
// const { addNewComment, getComments, deleteComment } = require('./comment')
// // db
// const {
//   createIssue,
//   incrementCommentsCountById,
//   closeIssue,
//   getIssuesByWisId,
//   deleteIssue,
//   findIssueById
// } = require('./database/dbFunctions')
// // authorization
// const { editIssueAuthorization } = require('./authorization')

module.exports = router => {
  // router.post('/createIssue', async ctx => {
  //   const { wisId, title, body, isPublic, creatorId } = ctx.request.body
  //   const issue = await createIssue({
  //     wisId,
  //     title,
  //     body,
  //     isPublic,
  //     creatorId
  //   })
  //   ctx.body = { issue }
  // })
  // router.post(
  //   '/newComment',
  //   editIssueAuthorization(async ctx => {
  //     const { comment, wisId, issueId, writerId } = ctx.request.body
  //     const { data } = await addNewComment({
  //       comment,
  //       writerId,
  //       wisId,
  //       issueId
  //     })
  //     const { commentsCount } = await incrementCommentsCountById(issueId, 1)
  //     ctx.body = { commentsCount, issueId, comment: data }
  //   })
  // )
  // router.post(
  //   '/closeIssue',
  //   editIssueAuthorization(async ctx => {
  //     const { issueId } = ctx.request.body
  //     await closeIssue(issueId)
  //     ctx.status = 200
  //   })
  // )
  // router.post('/deleteIssue', async ctx => {
  //   const { issueId } = ctx.request.body
  //   await deleteIssue(issueId)
  //   ctx.status = 200
  // })
  // router.get('/getAllIssues', async ctx => {
  //   const { wisId } = ctx.query
  //   const issues = await getIssuesByWisId(wisId)
  //   ctx.body = { issues }
  // })
  // router.get('/getComments', async ctx => {
  //   const { issueId, wisId } = ctx.query
  //   const { data } = await getComments(wisId, issueId)
  //   ctx.body = { comments: data }
  // })
  // router.get('/getIssue', async ctx => {
  //   const { issueId } = ctx.query
  //   const issue = await findIssueById(issueId)
  //   ctx.body = { issue }
  // })
  // router.post('/deleteComment', async ctx => {
  //   const { commentId, wisId, issueId, userId } = ctx.request.body
  //   const { creatorId } = await findIssueById(issueId)
  //   const {
  //     data: { successfullyDeleted }
  //   } = await deleteComment({
  //     isAdmin: creatorId === userId,
  //     commentId,
  //     writerId: userId,
  //     wisId,
  //     issueId
  //   })
  //   if (!successfullyDeleted) {
  //     ctx.status = 401
  //     return
  //   }
  //   await incrementCommentsCountById(issueId, -1)
  //   ctx.status = 200
  // })
}
