// modules
import { combineReducers } from 'redux'
// reducers
import meetingListReducer from '../components/meetingList/meetingList.reducer'
import meetingPageReducer from '../components/meetingPage/meetingPage.reducer'
import snackbarReducer from '../components/snackbar/snackbar.reducer'

export default combineReducers({
  meetingList: meetingListReducer,
  meetingPage: meetingPageReducer,
  snackbar: snackbarReducer,
})
