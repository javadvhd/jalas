// db
const { setRoomAndSelectedOption } = require('./database/dbFunctions')

module.exports = router => {
  router.post('/SET_ROOM_AND_SELECTED_OPTION', async ctx => {
    const { selectedOption, room, id } = ctx.request.body.payload
    await setRoomAndSelectedOption({
      selectedOption,
      room,
      id,
    })
    ctx.status = 200
  })

  // router.get('/getIssue', async ctx => {
  //   const { issueId } = ctx.query
  //   const issue = await findIssueById(issueId)
  //   ctx.body = { issue }
  // })
}
