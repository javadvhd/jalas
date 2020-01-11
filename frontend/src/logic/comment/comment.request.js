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
      const userIds = R.map(R.prop('writerId'), data)
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
    payload: { meetingId, body: comment, writerId: getState().main.user._id },
  })
    .then(() => reqGetCommentsByMeetingId(meetingId))
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در ثبت کامنت به وجود آمده است',
      }),
    )

// TODO: javad send parentId and parentDepth
export const reqReply = ({ meetingId, comment, parentId, parentDepth }) =>
  postRequest({
    dest: 'comment',
    action: 'COMMENT_REPLY',
    payload: {
      meetingId,
      body: comment,
      writerId: getState().main.user._id,
      parentId,
      depth: parentDepth + 1,
    },
  })
    .then(() => reqGetCommentsByMeetingId(meetingId))
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در ثبت کامنت به وجود آمده است',
      }),
    )

export const reqDeleteComment = ({ meetingId, commentId, isAdmin }) =>
  postRequest({
    dest: 'comment',
    action: 'COMMENT_DELETE',
    payload: {
      meetingId,
      commentId,
      writerId: getState().main.user._id,
      isAdmin,
    },
  })
    .then(() => reqGetCommentsByMeetingId(meetingId))
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در حذف کامنت به وجود آمده است',
      }),
    )

export const reqEditComment = ({ meetingId, commentId, body }) =>
  postRequest({
    dest: 'comment',
    action: 'COMMENT_EDIT',
    payload: {
      commentId,
      writerId: getState().main.user._id,
      body,
    },
  })
    .then(() => reqGetCommentsByMeetingId(meetingId))
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در تغییر کامنت به وجود آمده است',
      }),
    )
