const { findIssueById } = require('./database/dbFunctions')

exports.editIssueAuthorization = withAuthorizationFunction => async ctx => {
  const { issueId } = ctx.request.body
  const issue = await findIssueById(issueId)
  if (issue && (issue.deleted || issue.isClosed)) {
    ctx.status = 403
    ctx.response.body = { errorCode: issue.deleted ? 1 : 2 }
    return
  }
  await withAuthorizationFunction(ctx)
}
