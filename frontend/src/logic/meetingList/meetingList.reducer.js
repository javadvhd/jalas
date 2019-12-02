import * as R from 'ramda'
// actions
const initialState = [
  {
    id: '11',
    title: 'جلسه ی اول',
    creatorId: '22',
    status: 'poll-done',
    options: [
      { id: '1', start: 's1', end: 'e1', agree: 10, disagree: 5, abstain: 3 },
      { id: '2', start: 's2', end: 'e2', agree: 8, disagree: 6, abstain: 4 },
      { id: '3', start: 's3', end: 'e3', agree: 6, disagree: 8, abstain: 4 },
    ],
    selectedOption: 'no selected option',
    room: 200,
  },
]

const reducers = {
  SET_FIELD_VALUE: (state, value) => [
    {
      ...state[0],
      value,
    },
  ],

  SET_MEETING_LIST: meeting => [{ ...meeting }],

  SET_MEETING_STATE_TO_DONE: (state, room) =>
    R.update(
      0,
      {
        ...state[0],
        room,
        status: 'submitted',
      },
      state,
    ),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
