// modules
import { connect } from 'react-redux'
// components
import CommentBox from './commentBox'
import {
  reqDeleteComment,
  reqReply,
  reqEditComment,
} from '../../../../../logic/comment/comment.request'

// action

const mapStateToProps = state => ({
  meetingId: state.view.meetingPage.meetingId,
  users: state.main.users,
  userId: state.main.user._id,
})

const mapDispatchToProps = () => ({
  onDelete: reqDeleteComment,
  updateComment: reqEditComment,
  reply: reqReply,
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)
