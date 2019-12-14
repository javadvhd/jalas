const { submitVote } = require('../src/database/dbFunctions')
const { Meeting } = require('../src/database/dbModel')
const database = require('../src/database/dbConnector')
const { meetings } = require('./data')

let dbConnection

beforeAll(() =>
  database.connect('meeting_test_db').then(conn => {
    dbConnection = conn
    return conn
  }),
)

afterAll(() => dbConnection.disconnect())

beforeEach(async () => {
  await Meeting.deleteMany({})
  await Meeting.insertMany(meetings)
})

describe('submitVote should work properly', () => {
  test('e1@gmail.com should be removed from agree list', async () => {
    const meetingId = meetings[0]._id
    const optionIndex = 1
    const email = 'e1@gmail.com'

    const { options } = await submitVote({
      meetingId,
      optionIndex,
      vote: false,
      email,
    })

    expect(options[1].agree).toEqual([])
  })
})
