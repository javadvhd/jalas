// consts

const initialState = {
  meetingId: '',
  optionsRooms: [
    // { optionNumber: '', opened: false, rooms: [] }
  ],
  startTime: '',
}

const reducers = {
  SET_MEETING_PAGE_DATA: (state, data) => ({
    ...state,
    ...data,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
