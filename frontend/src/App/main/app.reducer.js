// modules
import { combineReducers } from 'redux'
// reducers
import newIssueReducer from '../components/NewIssue/newIssue.reducer'
import issuePageReducer from '../components/meetingPage/meetingPage.reducer'
import snackbarReducer from '../components/snackbar/snackbar.reducer'

export default combineReducers({
  newIssue: newIssueReducer,
  issuePage: issuePageReducer,
  snackbar: snackbarReducer,
})
