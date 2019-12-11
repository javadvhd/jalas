// modules
import { combineReducers } from 'redux'
// reducers
import userReducer from '../user/user.reducer'
import usersReducer from '../users/users.reducer'
import meetingListReducer from '../meetingList/meetingList.reducer'

export default combineReducers({
  meetingList: meetingListReducer,
  users: usersReducer,
  user: userReducer,
})
