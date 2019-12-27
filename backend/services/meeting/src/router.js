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
  addOption,
} = require('./database/dbFunctions')
// helper
const {
  voteConvertToArray,
  voteCounter,
  reserveEmail,
  inviteEmail,
  submitVoteEmail,
  addOptionEmail,
} = require('./helper')

module.exports = router => {
  router.post('/MEETING_SET_ROOM_AND_SELECTED_OPTION', async ctx => {
    // TODO: replace email and user id
    const { selectedOption, room, id, userId } = ctx.request.body.payload
    const meeting = await setRoomAndSelectedOption({
      selectedOption,
      room,
      id,
      userId,
    })

    if (!meeting) {
      ctx.status = 400
      return
    }

    reserveEmail({ adminEmail: userId, meetingId: id })

    ctx.body = meeting
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
      ...meeting,
      participants: [...meeting.participants, meeting.creatorId],
    })

    inviteEmail({ participants: meeting.participants, meetingId: meeting._id })

    ctx.body = voteCounter(createdMeeting)
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

    submitVoteEmail({
      adminEmail: updateMeeting.creatorId,
      voterEmail: email,
      optionIndex,
      vote,
    })

    ctx.body = voteCounter(updatedMeeting)
    ctx.status = 200
  })

  router.post('/MEETING_ADD_OPTION', async ctx => {
    const { meetingId, start, end } = ctx.request.body.payload

    const updatedMeeting = await addOption({
      meetingId,
      start,
      end,
      participants,
    })

    addOptionEmail({
      participants: R.without(
        [updateMeeting.creatorId],
        updateMeeting.participants,
      ),
      meetingId: updateMeeting._id,
    })

    ctx.body = voteCounter(updatedMeeting)
    ctx.status = 200
  })
}
