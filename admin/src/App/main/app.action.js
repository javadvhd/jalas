// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../setup/redux'

export const SET_DATA = 'SET_DATA'
export const dispatchSetData = (title, value) =>
  dispatch(createAction(SET_DATA)({ title, value }))
