// actions

const initialState = [
  {
    id: '11',
    title: 'جلسه ی اول',
    creatorId: '22',
    state: 'poll-done',
    options: [{ state: '', end: '', agree: 0, disagree: 0, abstain: 0 }],
    selectedOption: {},
    room: '',
  },
]

const reducers = {
  SET_FIELD_VALUE: (state, value) => [
    {
      ...state[0],
      value,
    },
  ],

  SET_MEETING_LIST: (state, meeting) => [{ ...meeting }],
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
