// module
const R = require('ramda')
// db
const {
  findCommentByParentId,
  deleteCommentByParentId,
} = require('./database/dbFunctions')

const cascadeDelete = async parentId => {
  const children = await findCommentByParentId(parentId)
  if (!children.length) return

  await deleteCommentByParentId(parentId)
  for (const { _id } of children) await cascadeDelete(_id)
}

exports.cascadeDelete = cascadeDelete
