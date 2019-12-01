// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../../setup/redux'

export const CHANGE_SNACKBAR_STAGE = 'CHANGE_SNACKBAR_STAGE'

export const dispatchSetSnackbarMessage = (...args) =>
  dispatch(
    createAction(CHANGE_SNACKBAR_STAGE, ({ message, type }) => ({
      snackbarIsOpen: true,
      message,
      type,
    }))(...args),
  )

export const dispatchResetSnackbar = (...args) =>
  dispatch(
    createAction(CHANGE_SNACKBAR_STAGE, () => ({
      snackbarIsOpen: false,
      message: '',
      type: null,
    }))(...args),
  )
