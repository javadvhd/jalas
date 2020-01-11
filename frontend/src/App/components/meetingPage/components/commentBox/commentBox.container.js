// modules
import { connect } from 'react-redux'
// components
import CommentBox from './commentBox'
import { dispatchRemoveParticipant } from '../../../../../logic/meetingList/meetingList.actions'
import { reqDeleteComment } from '../../../../../logic/comment/comment.request'

// action

const mapStateToProps = state => ({
  meetingId: state.view.meetingPage.meetingId,
  users: state.main.users,
})

const mapDispatchToProps = () => ({
  onDelete: reqDeleteComment,
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)
