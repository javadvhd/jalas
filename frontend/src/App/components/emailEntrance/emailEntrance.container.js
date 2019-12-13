// modules
import { connect } from 'react-redux'
// components
import EmailEntrance from './emailEntrance'
import { dispatchSetUserData } from '../../../logic/user/user.actions'
// helper
import loadData from '../../../helpers/loadData'

const mapDispatchToProps = () => ({
  onSubmit: ({ email, username }) => {
    dispatchSetUserData({ email, username })
    loadData()
    window.history.back()
  },
})

export default connect(null, mapDispatchToProps)(EmailEntrance)
