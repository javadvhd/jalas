// modules
import { connect } from 'react-redux'
// components
import ParticipantList from './participantList'
import { dispatchAddNewParticipant } from '../../../../../logic/meetingList/meetingList.actions'
import { reqAddParticipant } from '../../../../../logic/meetingList/meetingList.request'

const mapDispatchToProps = (_, { meeting }) => ({
  onAdd: payload =>
    meeting.status === 'poll'
      ? reqAddParticipant(payload)
      : dispatchAddNewParticipant(payload),
})

export default connect(null, mapDispatchToProps)(ParticipantList)
