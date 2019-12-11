import * as R from 'ramda'
// modules
import { connect } from 'react-redux'
// components
import MeetingList from './meetingList'
import { navigate } from '../../../setup/history'
import { dispatchSetMeetingPageData } from '../meetingPage/meetingPage.actions'
import { reqUpdateMeeting } from '../../../logic/meetingList/meetingList.request'
import { getEmptyMeeting } from '../../../logic/meetingList/meetingList.helper'

const mapStateToProps = state => ({
  meetingList: state.main.meetingList,
})

const mapDispatchToProps = () => ({
  clickListBox: ({ id, options }) => {
    navigate('meetingpage')
    dispatchSetMeetingPageData('meetingId', id)
    dispatchSetMeetingPageData(
      'optionsRooms',
      R.map(({ id }) => ({ id, isOpen: false, rooms: [] }), options),
    )
    dispatchSetMeetingPageData('startTime', new Date())
  },
  createNewMeeting: () => {
    reqUpdateMeeting(getEmptyMeeting(), -1)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList)
