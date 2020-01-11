import * as R from 'ramda'

export const findWriter = (comment, users) => {
  const user = R.find(user => user._id === comment.writerId, users)
  if (!user) return ''
  return user.firstname + user.lastname
}

export const findParentComment = (comment, comments) =>
  R.prop(
    'body',
    R.find(c => c._id === comment.parentId, comments),
  )
