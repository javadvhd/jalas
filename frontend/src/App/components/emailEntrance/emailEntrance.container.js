// modules
import { connect } from 'react-redux'
// components
import EmailEntrance from './emailEntrance'
import { dispatchSetUserData } from '../../../logic/user/user.actions'
import { reqGetUserMeetings } from '../../../logic/meetingList/meetingList.request'

const mapDispatchToProps = () => ({
  onSubmit: ({ email, username }) => {
    dispatchSetUserData({ email, username })
    reqGetUserMeetings().then(() => window.history.back())
  },
})

export default connect(null, mapDispatchToProps)(EmailEntrance)
