// modules
import { connect } from 'react-redux'
// components
import OptionBox from './optionBox'
import {
  getOptionRooms,
  reserveRoom,
} from '../../../../../logic/reservation/reservation.request'
import {
  dispatchSetOptionExpansion,
  dispatchSetLoading,
} from '../../meetingPage.actions'
import { dispatchRemoveOption } from '../../../../../logic/meetingList/meetingList.actions'
import { reqSubmitVote } from '../../../../../logic/meetingList/meetingList.request'
// views

// action

const mapStateToProps = state => ({
  reserveStartTime: state.view.meetingPage.startTime,
})

const mapDispatchToProps = (_, { meetingId }) => ({
  onClick: (option, optionIndex) => {
    // console.log('option ', option)
    const { isOpen } = option
    // setLoading ===> true
    !isOpen && getOptionRooms({ option, optionIndex })
    isOpen && dispatchSetOptionExpansion({ optionIndex, rooms: [] })
  },
  onRoomClick: ({ ...args }) => {
    dispatchSetLoading(true)
    reserveRoom({ ...args, meetingId })
  },
  onCancel: () => {
    // setLoading ===> false
  },
  onDelete: dispatchRemoveOption,

  onSubmitVote: reqSubmitVote,
})

export default connect(mapStateToProps, mapDispatchToProps)(OptionBox)
