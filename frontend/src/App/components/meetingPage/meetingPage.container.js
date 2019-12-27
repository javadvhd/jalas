import * as R from 'ramda'
// modules
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// components
import MeetingPage from './meetingPage'
import { dispatchSetMeetingTitle } from '../../../logic/meetingList/meetingList.actions'

const mapStateToProps = (state, { meetingId }) => {
  const meetingList = state.main.meetingList
  const meeting = R.find(R.propEq('_id', meetingId), meetingList)
  const optionsRooms = state.view.meetingPage.optionsRooms
  const isAdmin = state.main.user.email === meeting.creatorId
  return { meeting, optionsRooms, isAdmin }
}

const mapDispatchToProps = () => ({
  // on save will never use in this component
  onSave: Function.prototype,
  onTitleChange: dispatchSetMeetingTitle,
  goToList: () => navigate('/all'),
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPage)
