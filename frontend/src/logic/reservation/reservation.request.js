import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
import { getRequest, postRequest } from '../../setup/request'
import { dispatchSetOptionExpansion } from '../../App/components/meetingPage/meetingPage.actions'
import { userNameView } from '../user/user.reducer'
import { dispatchSetMeetingStateToDone } from '../meetingList/meetingList.actions'
import { navigate } from '../../setup/history'

export const getOptionRooms = ({ id, start, end }) =>
  getRequest({
    dest: 'reservation',
    action: 'RESERVATION_AVAILABLE_ROOMS',
    payload: { start, end },
  })
    .then(({ data }) => dispatchSetOptionExpansion({ rooms: data, id }))
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'reservation is not available',
      }),
    )

// TODO: باید با سرویس میتینگ درخواست بره که میتینگ رو  تغییر بده
export const reserveRoom = ({
  room,
  option: { start, end },
  meetingId,
  reserveStartTime,
}) =>
  console.log(
    'start ',
    room,
    start,
    end,
    // option,
    meetingId,
    reserveStartTime,
  ) ||
  postRequest({
    dest: 'reservation',
    action: 'RESERVATION_RESERVE_ROOM',
    payload: {
      username: userNameView(),
      room,
      start,
      end,
    },
  })
    .then(() => dispatchSetMeetingStateToDone({ room, start, end }))
    .then(() => navigate('all'))
    // TODO: show appropriate error
    .catch(console.log)
