// modules
import { connect } from 'react-redux'
// components
import Login from './login'
import { navigate } from '@reach/router'
import { reqGetAnalytics } from '../../../logic/analytics/analytics.request'

const mapDispatchToProps = () => ({
  onSubmit: ({ password }) => {
    if (password === '11111111') {
      reqGetAnalytics()
      navigate('/all')
    }
  },
})

export default connect(null, mapDispatchToProps)(Login)
