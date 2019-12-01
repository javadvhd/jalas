// modules
import { combineReducers } from 'redux'
// reducers
import meetingPageReducer from '../components/meetingPage/meetingPage.reducer'
import snackbarReducer from '../components/snackbar/snackbar.reducer'

export default combineReducers({
  meetingPage: meetingPageReducer,

  snackbar: snackbarReducer,
})
