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
    .then(console.log)
    .catch()

export const reqCreateMeeting = meeting =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_CREATE_MEETING',
    payload: {
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
    .catch(console.log)

export const reqUpdateMeeting = meeting =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_UPDATE_MEETING',
    payload: {
      meeting,
    },
  })
    .then(res => res.data)
    .then(meeting => dispatchUpdateMeeting({ meeting }))
    .then(() =>
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'جلسه با موفقیت به روز رسانی شده است',
      }),
    )
    .catch(console.log)

// export const reqGetAllMeetings = () =>
//   getRequest({
//     dest: 'meeting',
//     action: 'MEETING_GET_ALL_MEETINGS',
//     payload: {},
//   })
//     .then(res => res.data)
//     .then(meeting => dispatchSetMeetingList(meeting))
//     .catch(console.log)

export const reqGetUserMeetings = () =>
  getRequest({
    dest: 'meeting',
    action: 'MEETING_GET_USER_MEETINGS',
    payload: { userId: getState().main.user.email },
  })
    .then(res => res.data)
    .then(meetings => dispatchSetMeetingList(meetings))
    .catch(console.log)

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
    // .then(res => res.data)
    .then(({ data }) => dispatchUpdateMeeting({ meeting: data }))
    .then(() =>
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'نظر شما با موفقیت ثبت شده است',
      }),
    )
    .catch(console.log)
