const { voteCounter } = require('../src/helper')
const { meetings } = require('./data')

describe('voteCounter should work properly', () => {
  test('should get raw option object and convert it to usable object', async () => {
    const meeting = meetings[0]

    const { options } = voteCounter(meeting)

    expect(typeof options[1].agree).toBe('number')
  })
})
