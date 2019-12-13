// db
const {
  setRoomAndSelectedOption,
  createMeeting,
  getAllMeetings,
  updateMeeting,
  findMeetingsByParticipant,
  submitVote,
} = require('./database/dbFunctions')
// helper
const { getRequest, postRequest } = require('./helper')

module.exports = router => {
  router.post('/MEETING_SET_ROOM_AND_SELECTED_OPTION', async ctx => {
    const { selectedOption, room, id, userId } = ctx.request.body.payload
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
    const { userId } = JSON.parse(ctx.query.payload)
    const email = userId
    const meetings = await findMeetingsByParticipant(email)
    ctx.body = meetings
  })

  router.post('/MEETING_CREATE_MEETING', async ctx => {
    const { meeting } = ctx.request.body.payload
    // console.log('meeting ', meeting)
    const createdMeeting = await createMeeting(meeting)

    ctx.body = createdMeeting
    ctx.status = 200
  })

  router.post('/MEETING_UPDATE_MEETING', async ctx => {
    const { meeting } = ctx.request.body.payload.meeting
    const createdMeeting = await updateMeeting(meeting)
    // console.log('createdMeeting ', createdMeeting)
    ctx.body = createdMeeting
    ctx.status = 200
  })

  router.get('/MEETING_GET_ALL_MEETINGS', async ctx => {
    const meetingList = await getAllMeetings()
    ctx.body = meetingList
    ctx.status = 200
  })

  router.post('/MEETING_SUBMITE_VOTE', async ctx => {
    const payload = ctx.request.body.payload
    const createdMeeting = await submitVote(payload)
    // console.log('createdMeeting ', createdMeeting)
    // ctx.body = createdMeeting
    ctx.status = 200
  })
}
