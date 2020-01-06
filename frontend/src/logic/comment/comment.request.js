// modules
import * as R from 'ramda'
// setup
import { getRequest, postRequest } from '../../setup/request'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
// req
import { reqGetUsersById } from '../users/users.request'
import { getState } from '../../setup/redux'
import { dispatchSetMeetingPageData } from '../../App/components/meetingPage/meetingPage.actions'

export const reqGetCommentsByMeetingId = meetingId =>
  getRequest({
    dest: 'comment',
    action: 'COMMENT_GET_BY_MEETING_ID',
    payload: { meetingId },
  })
    .then(({ data }) => {
      const userIds = R.map(R.prop('_id'), data)
      reqGetUsersById(userIds)
      return data
    })

    .then(comments => dispatchSetMeetingPageData('comments', comments))
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در دریافت کامنت ها به وجود آمده است',
      }),
    )

export const reqCreateComment = ({ meetingId, comment }) =>
  postRequest({
    dest: 'comment',
    action: 'COMMENT_CREATE',
    payload: { meetingId, body: comment, userId: getState().main.user._id },
  })
    .then(() => reqGetCommentsByMeetingId(meetingId))
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در ثبت کامنت به وجود آمده است',
      }),
    )

export const reqDeleteComment = ({ meetingId, commentId }) =>
  postRequest({
    dest: 'comment',
    action: 'COMMENT_DELETE',
    payload: { meetingId, commentId },
  })
    .then(() => reqGetCommentsByMeetingId(meetingId))
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در حذف کامنت به وجود آمده است',
      }),
    )
