// modules
import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
// components
import AppBar from '../components/AppBar/appBar'
import MeetingList from '../components/meetingList/meetingList.container'
import MeetingPage from '../components/meetingPage/meetingPage.container'
import CreateMeeting from '../components/createMeeting/createMeeting.container'
import AppSnackbar from '../components/snackbar/snackbar.container'
import Login from '../components/login/login.container'
import Redirect from '../../helpers/redirect'
// styles
import './app.css'
// setup
import store from '../../setup/redux'

const HEADER_HEIGHT = 80

const App = () => (
  <Provider store={store}>
    <AppBar />

    <Router
      style={{
        position: 'fixed',
        top: `${HEADER_HEIGHT}px`,
        width: '100%',
        height: `calc(100% - ${HEADER_HEIGHT}px)`,
        overflowX: 'hidden',
        overflowY: 'overlay',
      }}
    >
      <MeetingList path="all" />
      <Login path="login" />
      <MeetingPage path="meetingpage/:meetingId" />
      <CreateMeeting path="createMeeting" />
      <Redirect default to="/all" />
    </Router>

    <AppSnackbar />
  </Provider>
)

export default App
