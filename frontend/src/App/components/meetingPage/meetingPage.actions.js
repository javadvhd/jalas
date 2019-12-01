// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../../setup/redux'

export const SET_ISSUE_PAGE_DATA = 'SET_ISSUE_PAGE_DATA'
export const dispatchSetIssuePageData = (...args) =>
  dispatch(createAction(SET_ISSUE_PAGE_DATA)(...args))

export const RESET_ISSUE_PAGE = 'RESET_ISSUE_PAGE'
export const dispatchResetIssuePage = (...args) =>
  dispatch(createAction(RESET_ISSUE_PAGE)(...args))
