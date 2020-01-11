// modules
import { connect } from 'react-redux'
// components
import NotificationPanel from './notificationPanel'
import { getState } from '../../../setup/redux'
import { reqSetUserNotifItems } from '../../../logic/user/user.request'

const mapStateToProps = () => ({
  notificationItems: getState().main.user.notificationItems,
})

const mapDispatchToProps = () => ({
  onSubmit: reqSetUserNotifItems,
  onClose: () => window.history.back(),
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPanel)
