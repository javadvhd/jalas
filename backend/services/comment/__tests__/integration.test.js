const { Comment } = require('../src/database/dbModel')
const database = require('../src/database/dbConnector')
const { comments } = require('./data')
const { cascadeDelete } = require('../src/helper')
const {
  deleteCommentWithAuthorization,
} = require('../src/database/dbFunctions')

let dbConnection

beforeAll(() =>
  database.connect('comment_test_db').then(conn => {
    dbConnection = conn
    return conn
  }),
)

afterAll(() => dbConnection.disconnect())

beforeEach(async () => {
  await Comment.deleteMany({})
  await Comment.insertMany(comments)
})

describe('delete comment should cascade ', () => {
  test('all reply comments should be deleted', async () => {
    await cascadeDelete(comments[0]._id)

    const updatedComments = await Comment.find().lean()
    expect(updatedComments[3].deleted).toEqual(true)
  })

  test('should not delete comment', async () => {
    const { _id: commentId, meetingId } = comments[0]

    await deleteCommentWithAuthorization({
      meetingId,
      commentId,
      writerId: 'fakeId',
      isAdmin: false,
    })

    const comment = await Comment.findById(commentId).lean()

    expect('deleted' in comment).toEqual(false)
  })

  test('should  delete comment', async () => {
    const { _id: commentId, meetingId } = comments[0]

    await deleteCommentWithAuthorization({
      meetingId,
      commentId,
      writerId: 'adminId',
      isAdmin: true,
    })

    const comment = await Comment.findById(commentId).lean()

    expect('deleted' in comment).toEqual(true)
  })
})
