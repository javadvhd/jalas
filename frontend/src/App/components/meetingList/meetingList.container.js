// modules
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// components
import MeetingList from './meetingList'
import { dispatchCreateMeeting } from '../../../logic/meetingList/meetingList.actions'
import { filteredList, convertModeToPersian } from './meetingList.helper'
import { dispatchChangeViewMode } from './meetingList.actions'

const mapStateToProps = state => ({
  meetingList: filteredList(
    state.main.meetingList,
    state.view.meetingList.mode,
  ),
  mode: convertModeToPersian(state.view.meetingList.mode),
})

const mapDispatchToProps = () => ({
  clickListBox: ({ _id }) => navigate(`/meetingpage/${_id}`),
  createNewMeeting: () => {
    dispatchCreateMeeting()
    navigate('/createMeeting')
  },
  changeView: dispatchChangeViewMode,
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList)
