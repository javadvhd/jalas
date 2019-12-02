// modules
import * as R from 'ramda'
// setup
import { postRequest } from '../../setup/request'
// import errorCodes from '../../setup/errorCodes'
// views
// import {} from ''
// actions
// import {} from ''
import { userIdView } from '../user/user.reducer'

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
