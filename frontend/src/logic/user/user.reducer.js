// modules
import * as R from 'ramda'
// actions
import { SET_USER_DATA } from './user.actions'
// redux
import { getState } from '../../setup/redux'

const initialState = {
  // _id: '5de50220df48b5278d9d5e19',
  // meetings: ['5de4e710073a5a71bc86b442'],
  username: 'rKhosravi',
  email: 'example@some-company.com',
  dialogIsOpen: true,
}

export const userIdView = () => R.path(['main', 'user', 'email'], getState())

export const userNameView = () =>
  R.path(['main', 'user', 'username'], getState())

export const dialogIsOpenView = () =>
  R.path(['main', 'user', 'dialogIsOpen'], getState())

const reducers = {
  [SET_USER_DATA]: (state, data) => ({ ...state, ...data }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
