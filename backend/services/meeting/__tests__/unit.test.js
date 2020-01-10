const dbFunctions = require('../src/database/dbFunctions')
const { voteCounter, getParticipantVotes } = require('../src/helper')
const { meetings } = require('./data')

jest.mock('../src/database/dbFunctions.js')

describe('voteCounter should work properly', () => {
  test('should get raw option object and convert it to usable object', async () => {
    const meeting = meetings[0]

    const { options } = voteCounter(meeting)

    expect(typeof options[1].agree).toBe('number')
  })
})

describe('getParticipantVotes should work properly', () => {
  test('e3@gmail.com should be removed from participant and options votes', async () => {
    const meetingId = meetings[0]._id
    const email = 'e3@gmail.com'

    dbFunctions.findMeetingById.mockImplementation(() =>
      Promise.resolve(meetings[0]),
    )

    const obj = await getParticipantVotes(email, meetingId)

    expect(obj).toEqual({
      'options.0.agree': 'e3@gmail.com',
      'options.1.disagree': 'e3@gmail.com',
    })
  })
})
