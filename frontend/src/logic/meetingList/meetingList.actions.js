// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../setup/redux'

// export const SET_FIELD_VALUE = 'SET_FIELD_VALUE'
// export const dispatchSetFieldValue = (...args) =>
//   dispatch(createAction(SET_FIELD_VALUE)(...args))

export const SET_MEETING_LIST = 'SET_MEETING_LIST'
export const dispatchSetMeetingList = (...args) =>
  dispatch(createAction(SET_MEETING_LIST)(...args))

// export const SET_MEETING_STATE_TO_DONE = 'SET_MEETING_STATE_TO_DONE'
export const dispatchSetMeetingStateToDone = (...args) => {}
//   dispatch(createAction(SET_MEETING_STATE_TO_DONE)(...args))

export const SET_MEETING_TITLE = 'SET_MEETING_TITLE'
export const dispatchSetMeetingTitle = (...args) =>
  dispatch(createAction(SET_MEETING_TITLE)(...args))

export const UPDATE_MEETING = 'UPDATE_MEETING'
export const dispatchUpdateMeeting = (...args) =>
  dispatch(createAction(UPDATE_MEETING)(...args))

export const UPDATE_MEETING_VOTE = 'UPDATE_MEETING_VOTE'
export const dispatchUpdateMeetingVote = (...args) =>
  dispatch(createAction(UPDATE_MEETING_VOTE)(...args))

export const ADD_NEW_OPTION = 'ADD_NEW_OPTION'
export const dispatchAddNewOption = (...args) =>
  dispatch(createAction(ADD_NEW_OPTION)(...args))

export const REMOVE_OPTION = 'REMOVE_OPTION'
export const dispatchRemoveOption = (...args) =>
  dispatch(createAction(REMOVE_OPTION)(...args))

export const ADD_NEW_PARTICIPANT = 'ADD_NEW_PARTICIPANT'
export const dispatchAddNewParticipant = (...args) =>
  dispatch(createAction(ADD_NEW_PARTICIPANT)(...args))

export const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT'
export const dispatchRemoveParticipant = (...args) =>
  dispatch(createAction(REMOVE_PARTICIPANT)(...args))

export const CREATE_MEETING = 'CREATE_MEETING'
export const dispatchCreateMeeting = (...args) =>
  dispatch(createAction(CREATE_MEETING)(...args))

export const REMOVE_MEETING = 'REMOVE_MEETING'
export const dispatchRemoveMeeting = (...args) =>
  dispatch(createAction(REMOVE_MEETING)(...args))
