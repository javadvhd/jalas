// modules
import * as R from 'ramda'
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

const mapStateToProps = state => ({})

const mapDispatchToProps = (_, { meetingId }) => ({
  onClick: (isOpen, id, start, end) => {
    !isOpen && getOptionRooms(id, start, end)
    isOpen && dispatchSetOptionExpansion({ id, rooms: [] })
  },
  onRoomClick: ({ ...args }) => reserveRoom({ ...args, meetingId }),
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingBox)
