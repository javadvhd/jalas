// modules
import * as R from 'ramda'
import { connect } from 'react-redux'
// components
import MeetingBox from './meetingBox'
import { getOptionRooms } from '../../../../../logic/meetingPage/meetingPage.request'
import { dispatchSetOptionExpansion } from '../../meetingPage.actions'
// views

// action

const mapStateToProps = state => ({})

const mapDispatchToProps = () => ({
  onClick: (isOpen, id, start, end) => {
    !isOpen && getOptionRooms(id, start, end)
    isOpen && dispatchSetOptionExpansion({ id, rooms: [] })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingBox)
