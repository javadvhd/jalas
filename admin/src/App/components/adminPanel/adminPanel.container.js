// modules
import { connect } from 'react-redux'
// components
import AdminPanel from './adminPanel'
import { getState } from '../../../setup/redux'
import { navigate } from '@reach/router/lib/history'

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)
