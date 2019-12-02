import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
import { getRequest, postRequest } from '../../setup/request'
import {
  dispatchSetOptionExpansion,
  dispatchSetLoading,
} from '../../App/components/meetingPage/meetingPage.actions'
import { userNameView } from '../user/user.reducer'
import { dispatchSetMeetingStateToDone } from '../meetingList/meetingList.actions'
import { navigate } from '../../setup/history'
import { saveRoomSelectedOption } from '../meetingList/meetingList.request'
import { saveAnalytics } from '../analytics/analytics.request'

export const getOptionRooms = ({ id, start, end }) =>
  getRequest({
    dest: 'reservation',
    action: 'RESERVATION_AVAILABLE_ROOMS',
    payload: { start, end },
  })
    .then(({ data }) => dispatchSetOptionExpansion({ rooms: data, id }))
    .catch(() => {
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'reservation is not available',
      })
    })

// TODO: باید با سرویس میتینگ درخواست بره که میتینگ رو  تغییر بده
export const reserveRoom = ({
  room,
  option,
  option: { start, end },
  meetingId,
  reserveStartTime,
  loading,
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
    .then(() =>
      saveRoomSelectedOption({ id: meetingId, selectedOption: option, room }),
    )
    .then(() => console.log('hello'))
    .then(() => dispatchSetMeetingStateToDone({ room, start, end }))
    .then(() => navigate('all'))
    .then(() => dispatchSetLoading(true))
    .then(() =>
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'room is reserved',
      }),
    )
    .then(() =>
      saveAnalytics({
        type: 'creationTime',
        length: new Date() - new Date(reserveStartTime),
      }),
    )
    .then(() =>
      saveAnalytics({
        type: 'reserveCounter',
      }),
    )
    .catch(() => {
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'reservation is not available',
      })
      if (loading)
        setTimeout(
          () =>
            reserveRoom({
              room,
              option: { start, end },
              meetingId,
              reserveStartTime,
              loading,
            }),
          1000,
        )
    })
