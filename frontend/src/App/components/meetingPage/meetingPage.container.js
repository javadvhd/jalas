import * as R from 'ramda'
// modules
import { connect } from 'react-redux'
// components
import MeetingPage from './meetingPage'
import { reqUpdateMeeting } from '../../../logic/meetingList/meetingList.request'
import { dispatchSetMeetingTitle } from '../../../logic/meetingList/meetingList.actions'

const mapStateToProps = state => {
  const meetingId = state.view.meetingPage.meetingId
  const meetingList = state.main.meetingList
  const meeting = R.find(R.propEq('_id', meetingId), meetingList)
  const optionsRooms = state.view.meetingPage.optionsRooms

  return { meeting, optionsRooms }
}

const mapDispatchToProps = () => ({
  onSave: reqUpdateMeeting,
  onTitleChange: dispatchSetMeetingTitle,
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPage)
