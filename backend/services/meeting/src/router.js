// db
const { setRoomAndSelectedOption } = require('./database/dbFunctions')
// helper
const { getRequest } = require('./helper')

module.exports = router => {
  router.post('/MEETING_SET_ROOM_AND_SELECTED_OPTION', async ctx => {
    const { selectedOption, room, id } = ctx.request.body.payload
    await setRoomAndSelectedOption({
      selectedOption,
      room,
      id,
    })
    ctx.status = 200
  })

  router.get('/MEETING_GET_USER_MEETINGS', async ctx => {
    const { userId } = ctx.query.payload

    const { data: meetingIds } = await getRequest({
      dest: 'user',
      action: 'USER_GET_MEETINGIDS_BY_ID',
      payload: { userId },
    })

    const meetings = findMeetingsById(meetingIds)
    ctx.body = meetings
  })
}
