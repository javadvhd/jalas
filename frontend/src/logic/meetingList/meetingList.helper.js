export const getEmptyMeeting = () => ({
  title: '',
  creatorId: '',
  status: 'created',
  options: [],
  participants: [],
  selectedOption: null,
  room: null,
})

export const getEmptyOption = () => ({
  //   start: '2019-12-04T11:30:00',
  start: null,
  end: null,
  agree: 0,
  disagree: 0,
})
