import * as R from 'ramda'
// modules
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// components
import MeetingList from './meetingList'
import { dispatchCreateMeeting } from '../../../logic/meetingList/meetingList.actions'

const mapStateToProps = state => ({
  meetingList: state.main.meetingList,
})

const mapDispatchToProps = () => ({
  clickListBox: ({ _id }) => navigate(`/meetingpage/${_id}`),
  createNewMeeting: () => {
    dispatchCreateMeeting()
    navigate('/createMeeting')
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList)
