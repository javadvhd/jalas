// modules
const R = require('ramda')
const { get, post } = require('axios')
const config = require('../../../packages/servicesPort.json')

const requestUrl = (dest, action) =>
  `http://${config[dest].host}:${config[dest].port}/${action}`

const getRequest = ({ dest, action, payload }) =>
  get(requestUrl(dest, action), {
    params: {
      payload,
    },
  })

exports.getRequest

const postRequest = ({ dest, action, payload }) =>
  post(requestUrl(dest, action), {
    payload,
  })

exports.postRequest

exports.voteCounter = meeting =>
  R.assoc(
    'options',
    R.map(
      option => ({
        ...option,
        agree: option.agree.length,
        disagree: option.disagree.length,
        agreeIfNeeded: option.agreeIfNeeded.length,
      }),
      meeting.options,
    ),
    meeting,
  )

exports.voteConvertToArray = meeting =>
  R.assoc(
    'options',
    R.map(
      option => ({
        ...option,
        agree: [],
        disagree: [],
        agreeIfNeeded: [],
      }),
      meeting.options,
    ),
    meeting,
  )

exports.getOtherTypeOfVote = vote =>
  R.without([vote], ['agree', 'disagree', 'agreeIfNeeded'])

const errorLogger = R.compose(
  console.log,
  R.pick(['status', 'data', 'statusText']),
  R.prop('response'),
)

exports.reserveEmail = ({ adminEmail, meetingId }) =>
  postRequest({
    dest: 'reservation',
    action: 'NOTIFICATION_SEND_EMAIL',
    payload: {
      emails: [adminEmail],
      subject: 'تشکیل جلسه',
      body: `جلسه با موفقیت ساخته شد
      http://localhost:3000/meetingpage/${meetingId}`,
    },
  }).catch(errorLogger)

exports.inviteEmail = ({ participants, meetingId }) =>
  postRequest({
    dest: 'notification',
    action: 'NOTIFICATION_SEND_EMAIL',
    payload: {
      emails: participants,
      subject: 'دعوت به نظر سنجی',
      body: `http://localhost:3000/meetingpage/${meetingId}`,
    },
  }).catch(errorLogger)

exports.submitVoteEmail = ({ adminEmail, voterEmail, optionIndex, vote }) =>
  postRequest({
    dest: 'notification',
    action: 'NOTIFICATION_SEND_EMAIL',
    payload: {
      emails: [adminEmail],
      subject: 'ثبت نظر',
      body: `کاربر ${voterEmail} به گذینه ${optionIndex} رای ${
        vote ? 'موافق' : 'مخالف'
      } داد`,
    },
  }).catch(errorLogger)

exports.addOptionEmail = ({ participants, meetingId }) =>
  postRequest({
    dest: 'notification',
    action: 'NOTIFICATION_SEND_EMAIL',
    payload: {
      emails: [participants],
      subject: 'اضافه شدن گذینه جدید',
      body: `'گذینه ی جدیدی به نظرسنجی  اضافه شده:
      http://localhost:3000/meetingpage/${meetingId}`,
    },
  }).catch(errorLogger)

exports.removeOptionEmail = ({ participants, meetingId, optionIndex }) =>
  postRequest({
    dest: 'notification',
    action: 'NOTIFICATION_SEND_EMAIL',
    payload: {
      emails: [participants],
      subject: 'اضافه شدن گذینه جدید',
      body: `گذینه ی ${optionIndex} که شما برای آن نظری ثبت کرده اید از نظرسنجی حذف شده:
      http://localhost:3000/meetingpage/${meetingId}`,
    },
  }).catch(errorLogger)
