// modules
import { connect } from 'react-redux'
// components
import optionBox from './optionBox'
import {
  getOptionRooms,
  reserveRoom,
} from '../../../../../logic/reservation/reservation.request'
import {
  dispatchSetOptionExpansion,
  dispatchSetLoading,
} from '../../meetingPage.actions'
import { dispatchRemoveOption } from '../../../../../logic/meetingList/meetingList.actions'
// views

// action

const mapStateToProps = state => ({
  reserveStartTime: state.view.meetingPage.startTime,
})

const mapDispatchToProps = (_, { meetingId }) => ({
  onClick: option => {
    // console.log('option ', option)
    const { isOpen, id } = option
    // setLoading ===> true
    !isOpen && getOptionRooms(option)
    isOpen && dispatchSetOptionExpansion({ id, rooms: [] })
  },
  onRoomClick: ({ ...args }) => {
    dispatchSetLoading(true)
    reserveRoom({ ...args, meetingId })
  },
  onCancel: () => {
    // setLoading ===> false
  },
  onDelete: dispatchRemoveOption,
})

export default connect(mapStateToProps, mapDispatchToProps)(optionBox)
