import { reqGetUserMeetings } from '../meetingList/meetingList.request'
import { dispatchSetUserData } from './user.actions'
import { postRequest, getRequest } from '../../setup/request'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
import { navigate } from '@reach/router'
import { getState } from '../../setup/redux'

export const reqLogin = ({ email, password }) => {
  getRequest({
    dest: 'user',
    action: 'USER_LOGIN',
    payload: {
      email,
      password,
    },
  })
    .then(({ data }) => {
      dispatchSetUserData(data)
      reqGetUserMeetings(email).then(() => {
        // TODO: // window.history.back()
        navigate('/all')
      })
    })
    .then(() =>
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'ورود شما با موفقیت انجام شد',
      }),
    )
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'کاربری با این اطلاعات وجود ندارد',
      }),
    )
}

export const reqSetUserNotifItems = items =>
  postRequest({
    dest: 'user',
    action: 'SET_USER_NOTIFICATION_STATUS',
    payload: {
      userId: getState().main.user._id,
      notificationItems: items,
    },
  })
    .then(() => dispatchSetUserData({ notificationItems: items }))
    .then(() => window.history.back())
    .then(() =>
      dispatchSetSnackbarMessage({
        type: 'success',
        message: 'با موفقیت ثبت شد',
      }),
    )
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در ثبت اطلاعات شما وجود دارد',
      }),
    )
