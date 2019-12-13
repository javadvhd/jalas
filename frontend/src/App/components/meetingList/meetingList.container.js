import * as R from 'ramda'
// modules
import { connect } from 'react-redux'
// components
import MeetingList from './meetingList'
import { navigate } from '../../../setup/history'
import { dispatchSetMeetingPageData } from '../meetingPage/meetingPage.actions'
import { reqCreateMeeting } from '../../../logic/meetingList/meetingList.request'
import { getEmptyMeeting } from '../../../logic/meetingList/meetingList.helper'

const mapStateToProps = state => ({
  meetingList: state.main.meetingList,
})

const mapDispatchToProps = () => ({
  clickListBox: ({ _id, options }) => {
    navigate('meetingpage')
    dispatchSetMeetingPageData('meetingId', _id)
    dispatchSetMeetingPageData(
      'optionsRooms',
      R.map(() => ({ isOpen: false, rooms: [] }), options),
    )
    dispatchSetMeetingPageData('startTime', new Date())
  },
  createNewMeeting: () => {
    reqCreateMeeting(getEmptyMeeting())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList)
