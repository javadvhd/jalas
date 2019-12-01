// modules
import { combineReducers } from 'redux'
// reducers
import userReducer from '../user/user.reducer'
import usersReducer from '../users/users.reducer'
import commentsReducer from '../meetingList/meetingList.reducer'

export default combineReducers({
  comments: commentsReducer,
  // users: usersReducer,
  user: userReducer,
})
