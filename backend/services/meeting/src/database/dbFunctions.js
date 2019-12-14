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

exports.findMeetingById = id => Meeting.findOne({ _id: id }).lean()

exports.findMeetingsByParticipant = email =>
  Meeting.find({ participants: { $elemMatch: { $eq: email } } }).lean()

exports.getAllMeetings = () => Meeting.find()

exports.submitVote = ({ meetingId, optionIndex, vote, email }) =>
  Meeting.findOneAndUpdate(
    { _id: meetingId },
    {
      $addToSet: {
        [`options.${optionIndex}.${vote ? 'agree' : 'disagree'}`]: email,
      },
      $pull: {
        [`options.${optionIndex}.${!vote ? 'agree' : 'disagree'}`]: email,
      },
    },
    { new: true },
  ).lean()
