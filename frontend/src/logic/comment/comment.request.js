// modules
import * as R from 'ramda'
// setup
import { getRequest } from '../../setup/request'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
// req
import { reqGetUsersById } from '../users/users.request'
import { getState } from '../../setup/redux'

export const reqGetCommentsByMeetingId = meetingId =>
  getRequest({
    dest: 'meeting',
    action: 'COMMENT_GET_BY_MEETING_ID',
    payload: { meetingId },
  })
    .then(({ data }) => {
      const userIds = R.map(R.prop('_id'), data)
      reqGetUsersById(userIds)
      return data
    })
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در دریافت کامنت ها به وجود آمده است',
      }),
    )

export const reqCreateComment = (meetingId, body) =>
  getRequest({
    dest: 'meeting',
    action: 'COMMENT_CREATE',
    payload: { meetingId, body, userId: getState().main.user._id },
  })
    .then(() => reqGetCommentsByMeetingId(meetingId))
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در ثبت کامنت به وجود آمده است',
      }),
    )
