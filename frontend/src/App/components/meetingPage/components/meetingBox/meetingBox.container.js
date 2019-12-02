// modules
import { connect } from 'react-redux'
// components
import MeetingBox from './meetingBox'
import {
  getOptionRooms,
  reserveRoom,
} from '../../../../../logic/meetingPage/meetingPage.request'
import { dispatchSetOptionExpansion } from '../../meetingPage.actions'
// views

// action

const mapStateToProps = state => ({
  reserveStartTime: state.view.meetingPage.startTime,
})

const mapDispatchToProps = (_, { meetingId }) => ({
  onClick: option => {
    const { isOpen, id } = option
    !isOpen && getOptionRooms(option)
    isOpen && dispatchSetOptionExpansion({ id, rooms: [] })
  },
  onRoomClick: ({ ...args }) => reserveRoom({ ...args, meetingId }),
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingBox)
