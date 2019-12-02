import * as R from 'ramda'
// consts
const initialState = {
  meetingId: '',
  optionsRooms: [
    // { optionNumber: '', opened: false, rooms: [] }
  ],
  startTime: '',
  loading: false,
}

const reducers = {
  SET_MEETING_PAGE_DATA: (state, { field, value }) => ({
    ...state,
    [field]: value,
  }),

  SET_OPTION_EXPANSION: (state, { id, rooms }) => ({
    ...state,
    optionsRooms: R.update(
      id - 1,
      {
        ...state.optionsRooms[id - 1],
        isOpen: !state.optionsRooms[id - 1].isOpen,
        rooms,
      },
      state.optionsRooms,
    ),
  }),

  SET_LOADING: (state, loading) => ({
    ...state,
    loading,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
