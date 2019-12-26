import { reqGetUserMeetings } from '../meetingList/meetingList.request'
import { dispatchSetUserData } from './user.actions'
import { postRequest } from '../../setup/request'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'

export const reqLogin = (username, password) => {
  postRequest({
    dest: 'user',
    action: 'USER_LOGIN',
    payload: {
      username,
      password,
    },
  })
    // .then(res => res.data)
    .then(({ username, email }) => {
      console.log('username, email from server ', username, email)
      //   dispatchSetUserData({ username, email })
      //   reqGetUserMeetings().then(() => window.history.back())
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
