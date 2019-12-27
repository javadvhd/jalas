// modules
import { connect } from 'react-redux'
// components
import CommentList from './commentList'
import {
  reqCreateComment,
  reqGetCommentsByMeetingId,
} from '../../../../../logic/comment/comment.request'

const mapStateToProps = state => ({
  comments: state.view.meetingPage.comments,
  meetingId: state.view.meetingPage.meetingId,
})

const mapDispatchToProps = () => ({
  onAdd: reqCreateComment,
  updateComment: reqGetCommentsByMeetingId,
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
