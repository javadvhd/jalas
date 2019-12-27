import { reqGetUserMeetings } from '../meetingList/meetingList.request'
import { dispatchSetUserData } from './user.actions'
import { postRequest, getRequest } from '../../setup/request'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
import { navigate } from '@reach/router'

export const reqLogin = ({
  email = 'vahedi.r46@gmail.com',
  password = 'javad@jalas',
}) => {
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
