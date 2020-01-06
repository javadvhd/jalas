// modules
import { connect } from 'react-redux'
// components
import AppBar from './appBar'
import { navigate } from '@reach/router'

const mapDispatchToProps = () => ({
  openNotifPanel: () => navigate('/notificationPanel'),
})

export default connect(null, mapDispatchToProps)(AppBar)
