// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../setup/redux'

export const SET_USER_DATA = 'SET_USER_DATA'
export const dispatchSetUserData = (...args) =>
  dispatch(createAction(SET_USER_DATA)(...args))
