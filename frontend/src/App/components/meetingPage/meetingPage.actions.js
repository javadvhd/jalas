// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../../setup/redux'

export const SET_MEETING_PAGE_DATA = 'SET_MEETING_PAGE_DATA'
export const dispatchSetMeetingPageData = (key, value) =>
  dispatch(createAction(SET_MEETING_PAGE_DATA)({ field: key, value }))

export const SET_OPTION_EXPANSION = 'SET_OPTION_EXPANSION'
export const dispatchSetOptionExpansion = (...args) =>
  dispatch(createAction(SET_OPTION_EXPANSION)(...args))

export const SET_LOADING = 'SET_LOADING'
export const dispatchSetLoading = (...args) =>
  dispatch(createAction(SET_LOADING)(...args))
