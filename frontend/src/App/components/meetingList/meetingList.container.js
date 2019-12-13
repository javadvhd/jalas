import * as R from 'ramda'
// modules
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// components
import MeetingList from './meetingList'
import { reqCreateMeeting } from '../../../logic/meetingList/meetingList.request'
import { getEmptyMeeting } from '../../../logic/meetingList/meetingList.helper'

const mapStateToProps = state => ({
  meetingList: state.main.meetingList,
})

const mapDispatchToProps = () => ({
  clickListBox: ({ _id }) => navigate(`/meetingpage/${_id}`),
  createNewMeeting: () => reqCreateMeeting(getEmptyMeeting()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList)
