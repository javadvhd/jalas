// actions
import { ADD_USERS } from './users.actions'

const initialState = {}

const reducers = {
  [ADD_USERS]: (state, users) => ({ ...state, ...users }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
