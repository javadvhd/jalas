// module
import * as R from 'ramda'
// setup
import { getState } from '../../../setup/redux'

const initialState = {
  meetingId: '',
  optionsRooms: [
    // { optionNumber: '', opened: false, rooms: [] }
  ],
  startTime: '',
  loading: false,
  comments: [],
}

export const meetingPageLoadingView = () =>
  R.path(['view', 'meetingPage', 'loading'], getState())

const reducers = {
  SET_MEETING_PAGE_DATA: (state, { field, value }) => ({
    ...state,
    [field]: value,
  }),

  SET_OPTION_EXPANSION: (state, { optionIndex, rooms }) => ({
    ...state,
    optionsRooms: R.update(
      optionIndex,
      {
        ...state.optionsRooms[optionIndex],
        isOpen: !state.optionsRooms[optionIndex].isOpen,
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
