// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../../setup/redux'

export const SET_MEETING_PAGE_DATA = 'SET_MEETING_PAGE_DATA'
export const dispatchSetMeetingPageData = (...args) =>
  dispatch(createAction(SET_MEETING_PAGE_DATA)(...args))
