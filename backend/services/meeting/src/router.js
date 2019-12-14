// module
const R = require('ramda')
// db
const {
  setRoomAndSelectedOption,
  createMeeting,
  getAllMeetings,
  updateMeeting,
  findMeetingsByParticipant,
  submitVote,
  findMeetingById,
} = require('./database/dbFunctions')
// helper
const { voteConvertToArray, voteCounter, postRequest } = require('./helper')

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
        payload: {
          emails: [userId],
          subject: 'تشکیل جلسه',
          body: `جلسه با موفقیت ساخته شد
          http://localhost:3001/meetingpage/${createdMeeting._id}`,
        },
      })

    ctx.status = 200
  })

  router.get('/MEETING_GET_USER_MEETINGS', async ctx => {
    const { userId } = JSON.parse(ctx.query.payload)
    const email = userId
    const meetings = await findMeetingsByParticipant(email)
    ctx.body = R.map(voteCounter, meetings)
  })

  router.post('/MEETING_CREATE_MEETING', async ctx => {
    const { meeting } = ctx.request.body.payload
    const createdMeeting = await createMeeting({
      ...voteConvertToArray(meeting),
      participants: [...meeting.participants, meeting.creatorId],
    })

    postRequest({
      dest: 'reservation',
      action: 'NOTIFICATION_SEND_EMAIL',
      payload: {
        emails: meeting.participants,
        subject: 'دعوت به نظر سنجی',
        body: `http://localhost:3001/meetingpage/${createdMeeting._id}`,
      },
    }).catch(console.log)

    ctx.body = voteCounter(createdMeeting)
    ctx.status = 200
  })

  router.post('/MEETING_UPDATE_MEETING', async ctx => {
    const { meeting } = ctx.request.body.payload.meeting
    const rawMeeting = await findMeetingById(meeting._id)
    const updatedMeeting = await updateMeeting(meeting)

    const newParticipants = R.without(
      rawMeeting.participants,
      updateMeeting.participants || [],
    )

    postRequest({
      dest: 'reservation',
      action: 'NOTIFICATION_SEND_EMAIL',
      payload: {
        emails: newParticipants,
        subject: 'دعوت به نظر سنجی',
        body: `http://localhost:3001/meetingpage/${rawMeeting._id}`,
      },
    }).catch(console.log)

    ctx.body = voteCounter(updatedMeeting)
    ctx.status = 200
  })

  router.get('/MEETING_GET_ALL_MEETINGS', async ctx => {
    const meetingList = await getAllMeetings()
    ctx.body = R.map(voteCounter, meetingList)
    ctx.status = 200
  })

  router.post('/MEETING_SUBMIT_VOTE', async ctx => {
    const { meetingId, optionIndex, vote, email } = ctx.request.body.payload
    const updatedMeeting = await submitVote({
      meetingId,
      optionIndex,
      vote,
      email,
    })

    ctx.body = voteCounter(updatedMeeting)
    ctx.status = 200
  })
}
