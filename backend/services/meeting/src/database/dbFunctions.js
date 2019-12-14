const { Meeting } = require('./dbModel')

exports.createMeeting = ({ title, creatorId, options, participants }) =>
  new Meeting({ title, creatorId, options, participants }).save()

exports.updateMeeting = meeting =>
  Meeting.findOneAndUpdate({ _id: meeting._id }, meeting, { new: true })

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
