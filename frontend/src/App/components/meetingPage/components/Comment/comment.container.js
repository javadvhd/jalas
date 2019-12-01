// modules
import * as R from 'ramda'
import { connect } from 'react-redux'
// components
import Comment from './comment'
// views
import { adminIdView } from '../../../../../logic/user/user.reducer'
// action
import { reqDeleteComment } from '../../../../../logic/meetingList/meetingList.request'

const mapStateToProps = (state, { writerId }) => {
  const user = state.main.users[writerId]
  const profileImage = R.prop('profileImage', user)
  return {
    firstname: R.prop('firstname', user),
    lastname: R.prop('lastname', user),
    profileImage: profileImage
      ? `https://www.weblite.me:3000/image/${R.prop('profileImage', user)}`
      : '',
    fromAdmin: writerId === adminIdView(),
    hasDeleteOption:
      state.main.user.isAdmin || state.main.user.userId === writerId,
  }
}

const mapDispatchToProps = (_, { issueId, _id }) => ({
  onDeleteComment: () => reqDeleteComment({ commentId: _id, issueId }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
