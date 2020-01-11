// modules
import { connect } from 'react-redux'
// components
import NotificationPanel from './notificationPanel'
import { getState } from '../../../setup/redux'
import { reqSetUserNotifItems } from '../../../logic/user/user.request'
import { navigate } from '@reach/router/lib/history'

const mapStateToProps = () => ({
  notificationItems: getState().main.user.notificationItems,
})

const mapDispatchToProps = () => ({
  onSubmit: reqSetUserNotifItems,
  onClose: () => {
    console.log('11')
    navigate('/all')
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPanel)
