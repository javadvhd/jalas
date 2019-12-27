import * as R from 'ramda'
// modules
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// components
import MeetingPage from '../meetingPage/meetingPage'
import { reqCreateMeeting } from '../../../logic/meetingList/meetingList.request'
import { dispatchRemoveMeeting } from '../../../logic/meetingList/meetingList.actions'
import { dispatchSetMeetingTitle } from '../../../logic/meetingList/meetingList.actions'

const mapStateToProps = state => ({
  meeting: R.find(R.propEq('_id', 'newMeeting'), state.main.meetingList),
  meetingId: 'newMeeting',
  optionsRooms: state.view.meetingPage.optionsRooms,
  isAdmin: true,
})

const mapDispatchToProps = () => ({
  onSave: ({ meeting }) => {
    reqCreateMeeting(meeting)
    navigate('/all').then(() => dispatchRemoveMeeting('newMeeting'))
  },
  onTitleChange: dispatchSetMeetingTitle,
  goToList: () =>
    navigate('/all').then(() => dispatchRemoveMeeting('newMeeting')),
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPage)
