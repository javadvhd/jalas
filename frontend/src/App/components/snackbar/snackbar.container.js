// modules
import { connect } from 'react-redux'
// components
import Snackbar from './snackbar'
// actions
import { dispatchResetSnackbar } from './snackbar.actions'

const mapStateToProps = state => state.view.snackbar

const mapDispatchToProps = () => ({
  closeSnackbar: dispatchResetSnackbar,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Snackbar)
