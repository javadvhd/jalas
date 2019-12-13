// modules
import { connect } from 'react-redux'
// components
import ParticipantBox from './participantBox'
import { dispatchRemoveParticipant } from '../../../../../logic/meetingList/meetingList.actions'

// action

const mapStateToProps = state => ({})

const mapDispatchToProps = () => ({
  onDelete: dispatchRemoveParticipant,
})

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantBox)
