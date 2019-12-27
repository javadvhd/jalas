// modules
import * as R from 'ramda'
// setup
import { postRequest, getRequest } from '../../setup/request'
import { getState } from '../../setup/redux'
import {
  dispatchUpdateMeeting,
  dispatchSetMeetingList,
} from './meetingList.actions'
// import { navigate } from '@reach/router'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'

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
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در سرور پیش آمده',
      }),
    )

export const reqCreateMeeting = meeting =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_CREATE_MEETING',
    payload: {
      // TODO: replace email with _id
      meeting: { ...meeting, creatorId: getState().main.user.email },
    },
  })
    .then(res => res.data)
    .then(meeting => {
      dispatchUpdateMeeting({ meeting })
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'جلسه ی جدید ایجاد شده است',
      })
      return meeting._id
    })
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در سرور پیش آمده',
      }),
    )

export const reqGetUserMeetings = email =>
  getRequest({
    dest: 'meeting',
    action: 'MEETING_GET_USER_MEETINGS',
    payload: { userId: email },
  })
    .then(res => res.data)
    .then(meetings => dispatchSetMeetingList(meetings))

    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در دریافت لیست جلسات کاربر به وجود آمده است',
      }),
    )

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
    .then(() =>
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'نظر شما با موفقیت ثبت شده است',
      }),
    )
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در سرور پیش آمده',
      }),
    )

export const reqAddOption = ({ meetingId, start, end }) =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_ADD_OPTION',
    payload: {
      meetingId,
      start,
      end,
    },
  })
    .then(({ data }) => dispatchUpdateMeeting({ meeting: data }))
    .then(() =>
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'گذینه با موفقیت اضافه شده است',
      }),
    )
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در سرور پیش آمده',
      }),
    )
