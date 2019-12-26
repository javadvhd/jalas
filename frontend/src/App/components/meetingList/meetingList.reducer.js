// module
import * as R from 'ramda'
// setup
import { getState } from '../../../setup/redux'

const initialState = {
  mode: 'all',
}

export const modeView = () =>
  R.path(['view', 'meetingList', 'mode'], getState())

const reducers = {
  CHANGE_VIEW_MODE: (state, mode) => ({
    ...state,
    mode,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
