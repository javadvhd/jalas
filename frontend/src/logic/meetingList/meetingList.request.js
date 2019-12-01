// modules
import * as R from 'ramda'
// setup
import { post, get } from '../../setup/request'
import errorCodes from '../../setup/errorCodes'
// views
import { userIdView, wisIdView } from '../user/user.reducer'
// actions
import { dispatchSetComments } from './meetingList.actions'
import {
  dispatchUpdateIssue,
  dispatchDeleteIssue,
} from '../issues/issues.action'
import { dispatchSetIssuePageData } from '../../App/components/meetingPage/meetingPage.actions'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
import { navigate } from '../../setup/history'
// helpers
import { getUsersInfo } from '../../helpers/weblite.api'
import { scrollToBottom } from '../../App/components/meetingPage/meetingPage.helper'

const { W } = window

export const reqNewComment = ({ comment, issueId, creatorId }) =>
  post('newComment', {
    comment,
    issueId,
    writerId: userIdView(),
    wisId: wisIdView(),
  })
    .then(({ data: { commentsCount, issueId } }) => {
      dispatchUpdateIssue(issueId, { commentsCount })
      reqGetComments(issueId).then(scrollToBottom)
      dispatchSetSnackbarMessage({
        message: 'پاسخ شما با موفقیت ثبت شد',
        type: 'success',
      })
      W &&
        W.sendNotificationToUsers(
          'پاسخی به سوال شما داده شده است',
          '',
          ['weblite'],
          null,
          [creatorId],
        )
      W && W.analytics('ADD_COMMENT')
    })
    .catch(
      ({
        response: {
          data: { errorCode },
        },
      }) => {
        dispatchSetSnackbarMessage({
          message: errorCode ? errorCodes[errorCode] : '',
          type: 'error',
        })
        dispatchSetIssuePageData({ sendFieldLoading: false })
        if (errorCode === 1) {
          dispatchDeleteIssue(issueId)
          navigate('all')
        } else if (errorCode === 2) {
          dispatchSetIssuePageData({ isClosed: true })
          dispatchUpdateIssue(issueId, { isClosed: true })
        }
      },
    )

export const reqGetComments = issueId =>
  get('getComments', { params: { issueId, wisId: wisIdView() } })
    .then(({ data: { comments } }) => {
      dispatchSetComments(comments)
      dispatchUpdateIssue(issueId, { commentsCount: comments.length })
      dispatchSetIssuePageData({ sendFieldLoading: false })
      getUsersInfo(R.map(R.prop('writerId'), comments))
    })
    .catch(console.log)

export const reqDeleteComment = ({ commentId, issueId }) =>
  post('deleteComment', {
    commentId,
    issueId,
    userId: userIdView(),
    wisId: wisIdView(),
  })
    .then(() => reqGetComments(issueId))
    .catch(console.log)
