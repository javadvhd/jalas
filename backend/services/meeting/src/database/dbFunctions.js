const { Meeting } = require('./dbModel')

exports.createMeeting = ({ title, creatorId, options, participants }) =>
  new Meeting({ title, creatorId, options, participants }).save()

exports.updateMeeting = meeting =>
  Meeting.findOneAndUpdate({ _id: meeting._id }, meeting, { new: true })

exports.setRoomAndSelectedOption = ({ id, room, selectedOption, userId }) =>
  Meeting.findOneAndUpdate(
    { _id: id, creatorId: userId },
    { $set: { selectedOption, room }, status: 'submitted' },
    { new: true },
  ).lean()

exports.findMeetingById = id => Meeting.findOne({ _id: id }).lean()

exports.findMeetingsByParticipant = email =>
  Meeting.find({ participants: { $elemMatch: { $eq: email } } }).lean()

exports.getAllMeetings = () => Meeting.find()

exports.submitVote = ({ meetingId, optionIndex, vote, email }) => {
  console.log(
    'meetingId, vote, optionIndex email ',
    meetingId,
    vote,
    optionIndex,
    email,
  )
  Meeting.findOneAndUpdate(
    { _id: meetingId },
    {
      $push: {
        [`options.${optionIndex}.${vote ? 'agree' : 'disagree'}`]: email,
      },
      $pull: {
        [`options.${optionIndex}.${!vote ? 'agree' : 'disagree'}`]: email,
      },
    },
    { new: true },
  ).lean()
}
