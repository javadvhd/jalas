// modules
import * as R from 'ramda'
// actions
import { SET_USER_DATA } from './user.actions'
// redux
import { getState } from '../../setup/redux'

const initialState = {
  userId: '',
  firstName: 'javad',
  lastName: 'vahedi',
  email: 'vahedi.r46@gmail.com',
  userName: '',
}

export const userIdView = () => R.path(['main', 'user', 'userId'], getState())
export const firstNameView = () =>
  R.path(['main', 'user', 'firstName'], getState())
export const lastNameView = () =>
  R.path(['main', 'user', 'lastName'], getState())
export const userNameView = () =>
  R.path(['main', 'user', 'userName'], getState())

const reducers = {
  [SET_USER_DATA]: (state, data) => ({ ...state, ...data }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
