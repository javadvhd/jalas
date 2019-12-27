// modules
import { connect } from 'react-redux'
// components
import CommentBox from './commentBox'
import { dispatchRemoveParticipant } from '../../../../../logic/meetingList/meetingList.actions'

// action

const mapStateToProps = state => ({
  meetingId: state.view.meetingPage.meetingId,
})

const mapDispatchToProps = () => ({
  onDelete: () => {},
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)
