// modules
import { connect } from 'react-redux'
// components
import ParticipantBox from './participantBox'
import { dispatchRemoveParticipant } from '../../../../../logic/meetingList/meetingList.actions'
import { reqRemoveParticipant } from '../../../../../logic/meetingList/meetingList.request'

const mapDispatchToProps = (_, { mode }) => ({
  onDelete: payload =>
    mode === 'poll'
      ? reqRemoveParticipant(payload)
      : dispatchRemoveParticipant(payload),
})

export default connect(null, mapDispatchToProps)(ParticipantBox)
