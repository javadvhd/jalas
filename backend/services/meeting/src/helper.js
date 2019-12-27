// modules
const R = require('ramda')
const { get, post } = require('axios')
const config = require('../../../packages/servicesPort.json')

requestUrl = (dest, action) =>
  `http://${config[dest].host}:${config[dest].port}/${action}`

exports.getRequest = ({ dest, action, payload }) =>
  get(requestUrl(dest, action), {
    params: {
      payload,
    },
  })

exports.postRequest = ({ dest, action, payload }) =>
  post(requestUrl(dest, action), {
    payload,
  })

exports.voteCounter = meeting =>
  R.assoc(
    'options',
    R.map(
      option => ({
        ...option,
        agree: option.agree.length,
        disagree: option.disagree.length,
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
      }),
      meeting.options,
    ),
    meeting,
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
  }).catch(console.log)

exports.inviteEmail = ({ participants, meetingId }) =>
  postRequest({
    dest: 'notification',
    action: 'NOTIFICATION_SEND_EMAIL',
    payload: {
      emails: participants,
      subject: 'دعوت به نظر سنجی',
      body: `http://localhost:3000/meetingpage/${meetingId}`,
    },
  }).catch(console.log)

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
  }).catch(console.log)

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
  }).catch(console.log)
