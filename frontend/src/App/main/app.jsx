// modules
import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
// components
import AppBar from '../components/AppBar/appBar'
import MeetingList from '../components/meetingList/meetingList.container'
import MeetingPage from '../components/meetingPage/meetingPage.container'
import AppSnackbar from '../components/snackbar/snackbar.container'
import EmailEntrance from '../components/emailEntrance/emailEntrance.container'
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
      <EmailEntrance path="emailEntrance" />
      <MeetingPage path="meetingpage/:meetingId" />
      <Redirect default to="/all" />
    </Router>

    <AppSnackbar />
  </Provider>
)

export default App
