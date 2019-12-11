import * as R from 'ramda'

const initialState = {
  // meetingId: [email, email, ...],
}

const reducers = {
  ADD_USERS: (state, { email, meetingId }) => ({
    ...state,
    [meetingId]: R.includes(email, state[meetingId])
      ? state[meetingId]
      : R.append(email, state[meetingId]),
  }),

  REMOVE_USERS: (state, { email, meetingId }) => ({
    ...state,
    [meetingId]: R.without([email], state[meetingId]),
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
