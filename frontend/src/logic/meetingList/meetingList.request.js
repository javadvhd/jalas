// modules
import * as R from 'ramda'
// setup
import { postRequest } from '../../setup/request'
import { userIdView } from '../user/user.reducer'
import {
  dispatchUpdateMeeting,
  dispatchAddNewMeeting,
} from './meetingList.actions'
import { navigate } from '../../setup/history'

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

export const reqUpdateMeeting = (meeting, meetingIndex) =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_UPDATE',
    payload: {
      meeting,
    },
  })
    .then(res => res.data)
    .then(meeting => {
      dispatchUpdateMeeting({ meeting, meetingIndex })
    })
    // TODO: return meetingIndex after post request
    .then(() => {
      if (meetingIndex === -1) {
        navigate('meetingpage')
      }
    })
    .catch(console.log)
