// modules
import { connect } from 'react-redux'
// components
import optionList from './optionList'

const mapStateToProps = state => ({
  optionsRooms: state.view.meetingPage.optionsRooms,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(optionList)
