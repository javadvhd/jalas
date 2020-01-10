const { Meeting } = require('./dbModel')

exports.createMeeting = ({ title, creatorId, options, participants }) =>
  new Meeting({ title, creatorId, options, participants }).save()

exports.updateMeeting = meeting =>
  Meeting.findOneAndUpdate({ _id: meeting._id }, meeting, { new: true })

exports.setRoomAndSelectedOption = ({ id, room, selectedOption, userId }) =>
  Meeting.findOneAndUpdate(
    { _id: id, creatorId: userId },
    { $set: { selectedOption, room }, status: 'meeting  ' },
    { new: true },
  ).lean()

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

exports.addOption = ({ meetingId, start, end }) =>
  Meeting.findOneAndUpdate(
    { _id: meetingId },
    {
      $push: {
        options: {
          start,
          end,
          agree: [],
          disagree: [],
        },
      },
    },
    { new: true },
  ).lean()

exports.findMeetingAndRemoveOption = async ({ meetingId, optionIndex }) => {
  const meeting = await Meeting.findOneAndUpdate(
    { _id: meetingId },
    {
      $unset: {
        [`options.${optionIndex}`]: 1,
      },
    },
  ).lean()

  await Meeting.updateOne(
    { _id: meetingId },
    {
      $pull: {
        options: null,
      },
    },
  )

  return meeting
}
