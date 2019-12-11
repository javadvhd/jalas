import * as R from 'ramda'
// actions
const initialState = []

const reducers = {
  SET_FIELD_VALUE: (state, { meetingId, value }) => [
    {
      ...state[0],
      value,
    },
  ],

  UPDATE_MEETING: (state, { meeting, meetingIndex }) => {
    if (state.length) {
      R.update(meetingIndex, meeting, state)
    } else return [meeting]
  },

  SET_MEETING_LIST: meeting => [{ ...meeting }],

  SET_MEETING_STATE_TO_DONE: (state, { room, start, end }) =>
    R.update(
      0,
      {
        ...state[0],
        room,
        status: 'submitted',
        start,
        end,
      },
      state,
    ),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
