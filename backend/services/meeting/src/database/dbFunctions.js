const { Meeting } = require('./dbModel')

const createMeeting = ({ title, creatorId, option }) =>
  new Meeting({
    title,
    creatorId,
    option,
  }).save()

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

exports.setRoomAndSelectedOption = ({ id, room, selectedOption }) =>
  Meeting.updateOne(
    { _id: id },
    { $set: { selectedOption, room }, state: 'created' },
  )

exports.findMeetingById = id => Meeting.findOne({ _id: id })

exports.findMeetingsById = meetingIds =>
  Meeting.find({ _id: { $in: meetingIds } })
