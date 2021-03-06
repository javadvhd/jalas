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

  UPDATE_MEETING_VOTE: (state, { meetingId, optionIndex, vote }) => {
    const meetingIndex = R.findIndex(R.propEq('_id', meetingId), state)
    return R.update(
      meetingIndex,
      {
        ...state[meetingIndex],
        options: R.update(
          optionIndex,
          {
            ...state[meetingIndex].options[optionIndex],
            agree: vote
              ? state[meetingIndex].options[optionIndex].agree + 1
              : state[meetingIndex].options[optionIndex].agree,
            disagree: !vote
              ? state[meetingIndex].options[optionIndex].disagree + 1
              : state[meetingIndex].options[optionIndex].disagree,
          },
          state[meetingIndex].options,
        ),
      },
      state,
    )
  },

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

  ADD_NEW_OPTION: (state, { start, end, meetingId }) => {
    const meetingIndex = R.findIndex(R.propEq('_id', meetingId), state)
    return R.update(
      meetingIndex,
      {
        ...state[meetingIndex],
        options: R.prepend(
          { start, end, agree: [], disagree: [], agreeIfNeeded: [] },
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

  CREATE_MEETING: state => [
    ...state,
    {
      _id: 'newMeeting',
      title: '',
      creatorId: '',
      status: 'creatingPoll',
      options: [],
      participants: [],
      // selectedOption: null,
      // room: null,
    },
  ],

  REMOVE_MEETING: (state, id) => R.reject(R.propEq('_id', id), state),

  // SET_MEETING_STATE_TO_DONE: (state, { room, start, end }) =>
  //   R.update(
  //     0,
  //     {
  //       ...state[0],
  //       room,
  //       status: 'meeting',
  //       start,
  //       end,
  //     },
  //     state,
  //   ),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
