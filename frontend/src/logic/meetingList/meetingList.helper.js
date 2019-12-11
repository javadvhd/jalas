export const getEmptyMeeting = () => ({
  title: '',
  creatorId: '',
  status: 'created',
  options: [
    // {
    //   id: '1',
    //   start: '2019-12-04T11:30:00',
    //   end: '2019-12-04T13:00:00',
    //   agree: 10,
    //   disagree: 5,
    // },
  ],
  selectedOption: {},
  room: null,
})

export const getEmptyOption = () => ({
  //   start: '2019-12-04T11:30:00',
  start: null,
  end: null,
  agree: null,
  disagree: null,
})
