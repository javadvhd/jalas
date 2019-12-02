// import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
// import { get, post } from '../../setup/request'
import { dispatchSetOptionExpansion } from '../../App/components/meetingPage/meetingPage.actions'
// import { firstNameView, lastNameView, userIdView } from '../user/user.reducer'
// import { dispatchSetMeetingStateToDone } from '../meetingList/meetingList.actions'

export const getOptionRooms = ({ id, start, end }) => {
  dispatchSetOptionExpansion({ rooms: [200, 202], id })
}
// get('/getRooms', { params: { start, end } })
//   .then(res => res.data)
//   .then(rooms => dispatchSetOptionExpansion({ rooms, id }))
//   .catch(() => dispatchSetSnackbarMessage('reservation is not available'))

export const reserveRoom = ({ room, option, meetingId, reserveStartTime }) => {
  console.log('start ', room, option, meetingId, reserveStartTime)
  // post('/reserveRoom', {
  //   room,
  //   firstname: firstNameView(),
  //   lastname: lastNameView(),
  //   option,
  //   meetingId,
  //   reserveStartTime,
  // })
  //   .then(() => dispatchSetMeetingStateToDone({ room, start, end }))
  //   .then()
  //   .catch(() => dispatchSetMeetingStateToDone({ room, start, end }))
  // .catch(() => console.log('room ', room, start, end, meetingId))
}
