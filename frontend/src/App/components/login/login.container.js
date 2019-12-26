// modules
import { connect } from 'react-redux'
// components
import Login from './login'
import { reqLogin } from '../../../logic/user/user.request'

const mapDispatchToProps = () => ({
  onSubmit: reqLogin,
})

export default connect(null, mapDispatchToProps)(Login)
