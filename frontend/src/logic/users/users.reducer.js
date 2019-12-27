import * as R from 'ramda'

const initialState = []

const reducers = {
  ADD_USERS: (state, users) => R.concat(R.difference(users, state), state),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
