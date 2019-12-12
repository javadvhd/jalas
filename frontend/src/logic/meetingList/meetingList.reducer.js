import * as R from 'ramda'
// actions
const initialState = []

const reducers = {
  // SET_FIELD_VALUE: (state, { meetingId, value }) => [
  //   {
  //     ...state[0],
  //     value,
  //   },
  // ],

  UPDATE_MEETING: (state, { meeting }) => {
    const meetingIndex = R.findIndex(R.propEq('_id', meeting._id), state)
    if (meetingIndex !== -1) {
      return R.update(meetingIndex, meeting, state)
    } else return [...state, meeting]
  },

  SET_MEETING_LIST: (state, meetingList) => meetingList,

  SET_MEETING_TITLE: (state, { title, meetingId }) => {
    const meetingIndex = R.findIndex(R.propEq('_id', meetingId), state)
    return R.update(
      meetingIndex,
      {
        ...state[meetingIndex],
        title,
      },
      state,
    )
  },

  ADD_NEW_OPTION: (
    state,
    { option: { start: startTime, end: endTime, date }, meetingId },
  ) => {
    const meetingIndex = R.findIndex(R.propEq('_id', meetingId), state)
    const start = new Date(`${date}T${startTime}:00.000Z`)
    const end = new Date(`${date}T${endTime}:00.000Z`)
    return R.update(
      meetingIndex,
      {
        ...state[meetingIndex],
        options: R.prepend(
          { start, end, agree: 0, disagree: 0 },
          state[meetingIndex].options,
        ),
      },
      state,
    )
  },

  REMOVE_OPTION: (state, { optionIndex, meetingId }) => {
    const meetingIndex = R.findIndex(R.propEq('_id', meetingId), state)
    return R.update(
      meetingIndex,
      {
        ...state[meetingIndex],
        options: R.remove(optionIndex, 1, state[meetingIndex].options),
      },
      state,
    )
  },

  ADD_NEW_PARTICIPANT: (state, { participant, meetingId }) => {
    const meetingIndex = R.findIndex(R.propEq('_id', meetingId), state)
    return R.update(
      meetingIndex,
      {
        ...state[meetingIndex],
        participants: R.prepend(participant, state[meetingIndex].participants),
      },
      state,
    )
  },

  REMOVE_PARTICIPANT: (state, { participant, meetingId }) => {
    const meetingIndex = R.findIndex(R.propEq('_id', meetingId), state)
    return R.update(
      meetingIndex,
      {
        ...state[meetingIndex],
        participants: R.without(
          [participant],
          state[meetingIndex].participants,
        ),
      },
      state,
    )
  },

  // SET_MEETING_STATE_TO_DONE: (state, { room, start, end }) =>
  //   R.update(
  //     0,
  //     {
  //       ...state[0],
  //       room,
  //       status: 'submitted',
  //       start,
  //       end,
  //     },
  //     state,
  //   ),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
