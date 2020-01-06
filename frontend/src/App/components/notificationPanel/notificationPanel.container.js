// modules
import { connect } from 'react-redux'
// components
import NotificationPanel from './notificationPanel'
import { getState } from '../../../setup/redux'

const mapStateToProps = () => ({
  notificationItems: getState().main.user.notificationItems,
})

const mapDispatchToProps = () => ({
  onSubmit: () => {},
  onClose: () => {},
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPanel)
