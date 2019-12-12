// modules
import { connect } from 'react-redux'
// components
import optionList from './optionList'
import { dispatchAddNewOption } from '../../../../../logic/meetingList/meetingList.actions'

const mapStateToProps = state => ({
  optionsRooms: state.view.meetingPage.optionsRooms,
})

const mapDispatchToProps = () => ({
  addOption: dispatchAddNewOption,
})

export default connect(mapStateToProps, mapDispatchToProps)(optionList)
