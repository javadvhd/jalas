// modules
import * as R from 'ramda'
// setup
import { postRequest, getRequest } from '../../setup/request'
import { userIdView } from '../user/user.reducer'
import {
  dispatchUpdateMeeting,
  dispatchSetMeetingList,
} from './meetingList.actions'
import { navigate } from '../../setup/history'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'

export const saveRoomSelectedOption = ({ id, selectedOption, room }) =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_SET_ROOM_AND_SELECTED_OPTION',
    payload: {
      id,
      selectedOption,
      room,
      userId: userIdView(),
    },
  })
    .then(console.log)
    .catch()

export const reqCreateMeeting = meeting =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_CREATE_MEETING',
    payload: {
      meeting,
    },
  })
    .then(res => res.data)
    .then(meeting => dispatchUpdateMeeting({ meeting }))
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
    .catch(console.log)

export const reqGetAllMeetings = () =>
  getRequest({
    dest: 'meeting',
    action: 'MEETING_GET_ALL_MEETINGS',
    payload: {},
  })
    .then(res => res.data)
    // .then(console.log)
    .then(meeting => dispatchSetMeetingList(meeting))
    .catch(console.log)
