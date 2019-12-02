// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../setup/redux'

export const SET_FIELD_VALUE = 'SET_FIELD_VALUE'
export const dispatchSetFieldValue = (...args) =>
  dispatch(createAction(SET_FIELD_VALUE)(...args))

export const SET_MEETING_LIST = 'SET_MEETING_LIST'
export const dispatchSetMeetingList = (...args) =>
  dispatch(createAction(SET_MEETING_LIST)(...args))

export const SET_MEETING_STATE_TO_DONE = 'SET_MEETING_STATE_TO_DONE'
export const dispatchSetMeetingStateToDone = (...args) =>
  dispatch(createAction(SET_MEETING_STATE_TO_DONE)(...args))
