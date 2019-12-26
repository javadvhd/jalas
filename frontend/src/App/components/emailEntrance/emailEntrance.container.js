// modules
import { connect } from 'react-redux'
// components
import EmailEntrance from './emailEntrance'
import { reqLogin } from '../../../logic/user/user.request'

const mapDispatchToProps = () => ({
  onSubmit: ({ username, password }) => {
    reqLogin(username, password)
  },
})

export default connect(null, mapDispatchToProps)(EmailEntrance)
