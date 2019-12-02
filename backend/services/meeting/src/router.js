// db
const { setRoomAndSelectedOption } = require('./database/dbFunctions')
// helper
const { getRequest, postRequest } = require('./helper')

module.exports = router => {
  router.post('/MEETING_SET_ROOM_AND_SELECTED_OPTION', async ctx => {
    const { selectedOption, room, id, userId } = ctx.request.body.payload
    console.log(
      'selectedOption, room, id, userId ',
      selectedOption,
      room,
      id,
      userId,
    )
    const { nModified } = await setRoomAndSelectedOption({
      selectedOption,
      room,
      id,
      userId,
    })

    if (nModified)
      postRequest({
        dest: 'reservation',
        action: 'NOTIFICATION_SEND_EMAIL',
        payload: { userId },
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
