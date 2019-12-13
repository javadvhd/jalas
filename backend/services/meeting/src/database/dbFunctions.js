const { Meeting } = require('./dbModel')

exports.createMeeting = meeting => new Meeting(meeting).save()

exports.updateMeeting = meeting =>
  console.log('meeting ', meeting) ||
  Meeting.findOneAndUpdate({ _id: meeting._id }, meeting, { new: true })
// setTimeout(
//   () =>
//     createMeeting({
//       title: 'جلسه ی اول',
//       creatorId: '22',
//       option: [
//         { start: 's1', end: 'e1', agree: 10, disagree: 5, abstain: 3 },
//         { start: 's2', end: 'e2', agree: 8, disagree: 6, abstain: 4 },
//         { start: 's3', end: 'e3', agree: 6, disagree: 8, abstain: 4 },
//       ],
//     }),
//   3000,
// )

exports.setRoomAndSelectedOption = ({ id, room, selectedOption, userId }) =>
  Meeting.updateOne(
    { _id: id, creatorId: userId },
    { $set: { selectedOption, room }, status: 'submitted' },
  )

exports.findMeetingById = id => Meeting.findOne({ _id: id })

exports.findMeetingsByParticipant = email =>
  Meeting.find({ participants: { $elemMatch: { $eq: email } } })

exports.getAllMeetings = () => Meeting.find()

exports.submitVote = ({ meetingId, optionIndex, vote, username }) =>
  Meeting.findOneAndUpdate({ _id: meetingId })
