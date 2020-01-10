// modules
import { connect } from 'react-redux'
// components
import Login from './login'
import { navigate } from '@reach/router'

const mapDispatchToProps = () => ({
  onSubmit: ({ password }) => {
    console.log('password', password)
    if (password === '11111111') {
      navigate('/all')
    }
  },
})

export default connect(null, mapDispatchToProps)(Login)
