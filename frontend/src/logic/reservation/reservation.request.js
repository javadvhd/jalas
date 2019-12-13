// modules
import { navigate } from '@reach/router'
// actions
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
import { getRequest, postRequest } from '../../setup/request'
import { getState } from '../../setup/redux'
import {
  dispatchSetOptionExpansion,
  dispatchSetLoading,
} from '../../App/components/meetingPage/meetingPage.actions'
import { dispatchSetMeetingStateToDone } from '../meetingList/meetingList.actions'
// view
import { meetingPageLoadingView } from '../../App/components/meetingPage/meetingPage.reducer'
// helper
import { saveRoomSelectedOption } from '../meetingList/meetingList.request'
import { saveAnalytics } from '../analytics/analytics.request'
import moment from 'moment'

export const getOptionRooms = ({ optionIndex, option: { start, end } }) => {
  // console.log(
  //   moment(end).format('YYYY-MM-DDTHH:mm:ss'),
  // )
  getRequest({
    dest: 'reservation',
    action: 'RESERVATION_AVAILABLE_ROOMS',
    payload: {
      start: moment(start).format('YYYY-MM-DDTHH:mm:ss'),
      end: moment(end).format('YYYY-MM-DDTHH:mm:ss'),
    },
  })
    .then(res => ({ rooms: res.data, optionIndex }))
    .then(dispatchSetOptionExpansion)
    .then(() =>
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'اتاق های قابل رزرو وارد شده اند',
      }),
    )
    .catch(() => {
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'reservation is not available',
      })
    })
}

export const reserveRoom = ({
  room,
  option,
  option: { start, end },
  meetingId,
  reserveStartTime,
}) =>
  postRequest({
    dest: 'reservation',
    action: 'RESERVATION_RESERVE_ROOM',
    payload: {
      username: getState().main.user.username,
      room,
      start,
      end,
    },
  })
    .then(({ data }) => {
      // if (data.error) {
      //   dispatchSetSnackbarMessage({
      //     type: 'error',
      //     message: 'reservation is not available',
      //   })
      //   if (meetingPageLoadingView())
      //     setTimeout(
      //       () =>
      //         reserveRoom({
      //           room,
      //           option: { start, end },
      //           meetingId,
      //           reserveStartTime,
      //         }),
      //       2000,
      //     )
      //   return
      // }

      dispatchSetMeetingStateToDone({ room, start, end })
      navigate('/all')
      dispatchSetLoading(true)
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'room is reserved',
      })
      saveAnalytics({
        type: 'creationTime',
        length: new Date() - new Date(reserveStartTime),
      })
      saveAnalytics({
        type: 'reserveCounter',
      })
      saveRoomSelectedOption({ id: meetingId, selectedOption: option, room })
    })
    .catch(
      error =>
        console.log(error) ||
        dispatchSetSnackbarMessage({
          type: 'error',
          message: 'some thing went wrong!!!',
        }),
    )
