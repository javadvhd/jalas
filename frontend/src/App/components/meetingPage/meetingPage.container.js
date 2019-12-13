import * as R from 'ramda'
// modules
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// components
import MeetingPage from './meetingPage'
import { reqUpdateMeeting } from '../../../logic/meetingList/meetingList.request'
import { dispatchSetMeetingTitle } from '../../../logic/meetingList/meetingList.actions'
import { userIdView } from '../../../logic/user/user.reducer'

const mapStateToProps = state => {
  const meetingId = state.view.meetingPage.meetingId
  const meetingList = state.main.meetingList
  const meeting = R.find(R.propEq('_id', meetingId), meetingList)
  const optionsRooms = state.view.meetingPage.optionsRooms
  const isAdmin = userIdView() === meeting.creatorId
  return { meeting, optionsRooms, isAdmin }
}

const mapDispatchToProps = () => ({
  onSave: reqUpdateMeeting,
  onTitleChange: dispatchSetMeetingTitle,
  goToList: navigate,
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPage)
