// modules
import { connect } from 'react-redux'
// components
import ParticipantList from './participantList'
import { dispatchAddNewParticipant } from '../../../../../logic/meetingList/meetingList.actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = () => ({
  onAdd: dispatchAddNewParticipant,
})

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantList)
