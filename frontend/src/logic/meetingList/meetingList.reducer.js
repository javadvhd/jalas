import * as R from 'ramda'
// actions
const initialState = [
  {
    id: '11',
    title: 'جلسه ی اول',
    creatorId: '22',
    status: 'poll-done',
    options: [
      {
        id: '1',
        start: new Date('December 4, 2019 11:30:00'),
        end: new Date('December 4, 2019 13:00:00'),
        agree: 10,
        disagree: 5,
        abstain: 3,
      },
      {
        id: '2',
        start: new Date('December 5, 2019 15:30:00'),
        end: new Date('December 5, 2019 17:00:00'),
        agree: 8,
        disagree: 6,
        abstain: 4,
      },
      {
        id: '3',
        start: new Date('December 6, 2019 8:30:00'),
        end: new Date('December 6, 2019 10:00:00'),
        agree: 6,
        disagree: 8,
        abstain: 4,
      },
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
