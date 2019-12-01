import * as R from 'ramda'
// actions
import {
  dispatchAddNewIssue,
  dispatchDeleteIssue,
  dispatchUpdateIssue,
  dispatchSetIssues,
} from './issues.action'
import { dispatchResetNewIssue } from '../../App/components/NewIssue/newIssue.actions'
import {
  dispatchResetIssuePage,
  dispatchSetIssuePageData,
} from '../../App/components/meetingPage/meetingPage.actions'
import { dispatchSetComments } from '../comments/comments.actions'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
// views
import {
  userIdView,
  wisIdView,
  isAdminView,
  adminIdView,
} from '../user/user.reducer'
// setup
import { get, post } from '../../setup/request'
import errorCodes from '../../setup/errorCodes'
// helpers
import { navigate } from '../../setup/history'
import { issuesView } from './issues.reducer'
import { reqGetComments } from '../comments/comments.request'
import { getUsersInfo } from '../../helpers/weblite.api'

const { W } = window
export const reqCreateIssue = ({ title, body, isPublic }) =>
  post('createIssue', {
    title,
    body,
    isPublic,
    wisId: wisIdView(),
    creatorId: userIdView(),
  })
    .then(({ data: { issue } }) => {
      dispatchAddNewIssue(issue)
      dispatchResetNewIssue()
      navigate('all')
      dispatchSetSnackbarMessage({
        message: 'سوال با موفقیت ثبت شد',
        type: 'success',
      })
      !isAdminView() &&
        W &&
        W.sendNotificationToUsers(
          'سوالی از شما مطرح شده است',
          'وپ سوال',
          ['push', 'weblite'],
          {},
          [adminIdView()],
        )
      W && W.analytics('ADD_ISSUE', { private: !isPublic })
    })
    .catch(console.log)

export const reqCloseIssue = issueId =>
  post('closeIssue', {
    issueId,
  })
    .then(() => {
      dispatchUpdateIssue(issueId, { isClosed: true })
      dispatchSetIssuePageData({ isClosed: true })
      dispatchSetSnackbarMessage({
        message: 'سوال با موفقیت بسته شد',
        type: 'success',
      })
      W && W.analytics('CLOSE_ISSUE')
    })
    .catch(
      ({
        response: {
          data: { errorCode },
        },
      }) => {
        // TODO:
        dispatchSetSnackbarMessage({
          message: errorCode ? errorCodes[errorCode] : '',
          type: 'error',
        })
      },
    )

export const reqDeleteIssue = issueId =>
  post('deleteIssue', {
    issueId,
  })
    .then(() => {
      dispatchDeleteIssue(issueId)
      navigate('all')
      dispatchSetComments([])
      dispatchResetIssuePage()
      dispatchSetSnackbarMessage({
        message: 'سوال با موفقیت حذف شد',
        type: 'success',
      })
      W && W.analytics('DELETE_ISSUE')
    })
    .catch(console.log)

export const reqGetAllIssues = issueId => {
  get('getAllIssues', {
    params: {
      wisId: wisIdView(),
    },
  })
    .then(({ data: { issues } }) => {
      dispatchSetIssues(issues)
    })
    .then(() => {
      if (issueId) {
        const issue = R.find(R.propEq('_id', issueId), issuesView())
        dispatchSetIssuePageData({ ...issue, issueId: issue._id })
        dispatchSetComments([])
        reqGetComments(issue._id)
        getUsersInfo([issue.creatorId])
        navigate('issue')
      }
    })
    .catch(console.log)
}
export const shareIssue = issueId => {
  W.sendMessageToCurrentChat('wapp', {
    wappId: '5db84702c482770534e2584a',
    wisId: '',
    customize: { issueId, wisId: W.wisId },
  })
  W.analytics('SHARE_ISSUE')
}
