// db
const R = require('ramda')
const { Meeting } = require('./dbModel')

const getOtherTypeOfVote = vote =>
  R.without([vote], ['agree', 'disagree', 'agreeIfNeeded'])

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
        [`options.${optionIndex}.${vote}`]: email,
      },
      $pull: {
        [`options.${optionIndex}.${getOtherTypeOfVote(vote)[0]}`]: email,
        [`options.${optionIndex}.${getOtherTypeOfVote(vote)[1]}`]: email,
      },
    },
    { new: true },
  ).lean()

exports.addOption = ({ meetingId, start, end, userId }) =>
  Meeting.findOneAndUpdate(
    { _id: meetingId, creatorId: userId },
    {
      $push: {
        options: {
          start,
          end,
          agree: [],
          disagree: [],
          agreeIfNeeded: [],
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

exports.addParticipantToMeeting = ({ meetingId, participant }) =>
  Meeting.updateOne(
    { _id: meetingId },
    {
      $addToSet: {
        participants: participant,
      },
    },
  )

exports.removeParticipantFromMeeting = ({
  meetingId,
  participant,
  participantVotes,
}) =>
  Meeting.updateOne(
    { _id: meetingId },
    {
      $pull: {
        participants: participant,
        ...participantVotes,
      },
    },
  )

exports.findMeetingAndCancel = ({ meetingId, userId }) =>
  Meeting.findOneAndUpdate(
    { _id: meetingId, creatorId: userId },
    { status: 'meeting-cancel' },
    { new: true },
  ).lean()
