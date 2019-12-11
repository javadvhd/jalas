import * as R from 'ramda'
// actions
const initialState = [
  {
    id: '5de4e710073a5a71bc86b442',
    title: 'جلسه ی اول',
    creatorId: '22',
    status: 'poll-done',
    options: [
      {
        id: '1',
        start: '2019-12-04T11:30:00',
        end: '2019-12-04T13:00:00',
        agree: 10,
        disagree: 5,
      },
      {
        id: '2',
        start: '2019-12-05T15:30:00',
        end: '2019-12-05T17:00:00',
        agree: 8,
        disagree: 6,
      },
      {
        id: '3',
        start: '2019-12-06T08:30:00',
        end: '2019-12-06T10:00:00',
        agree: 6,
        disagree: 8,
      },
    ],
    selectedOption: {},
    room: null,
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
