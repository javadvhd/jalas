// setup
import { postRequest, getRequest } from '../../setup/request'
import { getState } from '../../setup/redux'
// actions
import {
  dispatchUpdateMeeting,
  dispatchSetMeetingList,
  dispatchRemoveOption,
  dispatchAddNewParticipant,
  dispatchRemoveParticipant,
} from './meetingList.actions'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'

const serverErrorSnackbar = () =>
  dispatchSetSnackbarMessage({
    type: 'error',
    message: 'مشکلی در سرور پیش آمده',
  })

const successSnackbar = message =>
  dispatchSetSnackbarMessage({
    type: 'success',
    message,
  })

export const saveRoomSelectedOption = ({ id, selectedOption, room }) =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_SET_ROOM_AND_SELECTED_OPTION',
    payload: {
      id,
      selectedOption,
      room,
      userId: getState().main.user.email,
    },
  })
    .then(({ data }) => dispatchUpdateMeeting({ meeting: data }))
    .catch(serverErrorSnackbar)

export const reqCreateMeeting = meeting =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_CREATE_MEETING',
    payload: {
      meeting: { ...meeting, creatorId: getState().main.user.email },
    },
  })
    .then(({ data: meeting }) => {
      dispatchUpdateMeeting({ meeting })
      successSnackbar('جلسه ی جدید ایجاد شده است')
      return meeting._id
    })
    .catch(serverErrorSnackbar)

export const reqGetUserMeetings = email =>
  getRequest({
    dest: 'meeting',
    action: 'MEETING_GET_USER_MEETINGS',
    payload: { userId: email },
  })
    .then(({ data: meetings }) => dispatchSetMeetingList(meetings))
    .catch(serverErrorSnackbar)

export const reqSubmitVote = ({ meetingId, vote, optionIndex }) =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_SUBMIT_VOTE',
    payload: {
      meetingId,
      optionIndex,
      vote,
      email: getState().main.user.email,
    },
  })
    .then(({ data }) => dispatchUpdateMeeting({ meeting: data }))
    .then(() => successSnackbar('نظر شما با موفقیت ثبت شده است'))
    .catch(serverErrorSnackbar)

export const reqAddOption = ({ meetingId, start, end }) =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_ADD_OPTION',
    payload: {
      meetingId,
      start,
      end,
      userId: getState().main.user.email,
    },
  })
    .then(({ data }) => dispatchUpdateMeeting({ meeting: data }))
    .then(() => successSnackbar('گذینه با موفقیت اضافه شده است'))
    .catch(serverErrorSnackbar)

export const reqRemoveOption = ({ meetingId, optionIndex }) =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_REMOVE_OPTION',
    payload: {
      meetingId,
      optionIndex,
    },
  })
    .then(() => dispatchRemoveOption({ optionIndex, meetingId }))
    .then(() => successSnackbar('گذینه با موفقیت حذف شده است'))
    .catch(serverErrorSnackbar)

export const reqAddParticipant = ({ meetingId, participant }) =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_ADD_PARTICIPANT',
    payload: {
      meetingId,
      participant,
    },
  })
    .then(() => dispatchAddNewParticipant({ meetingId, participant }))
    .then(() => successSnackbar('کاربر با موفقیت به نظرسنجی اضافه شده است'))
    .catch(serverErrorSnackbar)

export const reqRemoveParticipant = ({ meetingId, participant }) =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_REMOVE_PARTICIPANT',
    payload: {
      meetingId,
      participant,
    },
  })
    .then(() => dispatchRemoveParticipant({ meetingId, participant }))
    .then(() => successSnackbar('کاربر با موفقیت از نظرسنجی حذف شده است'))
    .catch(serverErrorSnackbar)

export const reqCancelMeeting = meetingId =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_CANCEL_MEETING',
    payload: {
      meetingId,
      userId: getState().main.user.email,
    },
  })
    .then(({ data }) => dispatchUpdateMeeting({ meeting: data }))
    .then(() => successSnackbar('جلسه با موفقیت لغو شده است'))
    .catch(serverErrorSnackbar)

export const reqCancelPoll = meetingId =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_CANCEL_POLL',
    payload: {
      meetingId,
      userId: getState().main.user.email,
    },
  })
    .then(({ data }) => dispatchUpdateMeeting({ meeting: data }))
    .then(() => successSnackbar('نظرسنجی با موفقیت لغو شده است'))
    .catch(serverErrorSnackbar)
