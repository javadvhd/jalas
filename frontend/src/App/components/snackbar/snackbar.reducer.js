// actions
import { CHANGE_SNACKBAR_STAGE } from './snackbar.actions'

// state
const initialState = {
  snackbarIsOpen: false,
  message: '',
  type: null,
}

// reducers
const reducers = {
  [CHANGE_SNACKBAR_STAGE]: (_, payload) => payload,
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
