// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../../setup/redux'

export const dispatchChangeViewMode = (...args) =>
  dispatch(createAction('CHANGE_VIEW_MODE')(...args))
