// modules
import { connect } from 'react-redux'
// components
import optionList from './optionList'
import { reqAddOption } from '../../../../../logic/meetingList/meetingList.request'
import { dispatchAddNewOption } from '../../../../../logic/meetingList/meetingList.actions'

const mapStateToProps = state => ({
  optionsRooms: state.view.meetingPage.optionsRooms,
})

const mapDispatchToProps = (_, { mode }) => ({
  addOption: ({
    option: { start: startTime, end: endTime, date },
    meetingId,
  }) => {
    const start = new Date(`${date}T${startTime}:00.000Z`)
    const end = new Date(`${date}T${endTime}:00.000Z`)
    if (mode === 'poll') reqAddOption({ meetingId, start, end })
    else dispatchAddNewOption({ meetingId, start, end })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(optionList)
