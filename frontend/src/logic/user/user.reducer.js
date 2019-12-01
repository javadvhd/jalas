// modules
import * as R from 'ramda'
// actions
import { SET_USER_DATA } from './user.actions'
// redux
import { getState } from '../../setup/redux'

const initialState = {
  userId: '',
  firstName: '',
  lastName: '',
  email: '',
  userName: '',
}

export const userIdView = () => R.path(['main', 'user', 'userId'], getState())

const reducers = {
  [SET_USER_DATA]: (state, data) => ({ ...state, ...data }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
