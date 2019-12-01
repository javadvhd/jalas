import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
import { get } from '../../setup/request'
import { dispatchSetOptionExpansion } from '../../App/components/meetingPage/meetingPage.actions'

export const getOptionRooms = (id, start, end) => {
  dispatchSetOptionExpansion({ rooms: [200, 202], id })
}
//   get('/getRooms', { params: { start, end } })
//     .then(res => res.data)
//     .then(rooms => dispatchSetOptionExpansion({ rooms, id }))
//     .catch(console.log)
