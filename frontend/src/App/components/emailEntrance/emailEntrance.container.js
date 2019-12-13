import * as R from 'ramda'
// modules
import { connect } from 'react-redux'
// components
import EmailEntrance from './emailEntrance'
import { navigate } from '../../../setup/history'
import { dispatchSetUserData } from '../../../logic/user/user.actions'
import { dialogIsOpenView } from '../../../logic/user/user.reducer'

const mapStateToProps = state => ({
  open: dialogIsOpenView(),
})

const mapDispatchToProps = () => ({
  onSubmit: (email, username) => {
    dispatchSetUserData(email)
    dispatchSetUserData(username)
    navigate('all')
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EmailEntrance)
