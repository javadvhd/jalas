// modules
import { connect } from 'react-redux'
// components
import CommentBox from './commentBox'
import { dispatchRemoveParticipant } from '../../../../../logic/meetingList/meetingList.actions'
import {
  reqDeleteComment,
  reqReply,
} from '../../../../../logic/comment/comment.request'

// action

const mapStateToProps = state => ({
  meetingId: state.view.meetingPage.meetingId,
  users: state.main.users,
  userId: state.main.user._id,
})

const mapDispatchToProps = () => ({
  onDelete: reqDeleteComment,
  updateComment: () => {},
  reply: reqReply,
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)
