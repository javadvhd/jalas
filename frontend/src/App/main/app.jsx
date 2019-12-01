// modules
import React from 'react'
import { LocationProvider, Router } from '@reach/router'
import { Provider } from 'react-redux'
// components
import Tabs from '../components/Tabs/tabs'
import AppBar from '../components/AppBar/appBar'
import MeetingList from '../components/meetingList/meetingList.container'
import MeetingPage from '../components/meetingPage/meetingPage.container'
import AppSnackbar from '../components/snackbar/snackbar.container'

// styles
import './app.css'
// setup
import store from '../../setup/redux'
import { history } from '../../setup/history.js'

const App = () => (
  <Provider store={store}>
    <LocationProvider history={history}>
      <AppBar />
      <Router>
        <Tabs path=":selected" />
      </Router>
      <div
        style={{
          position: 'fixed',
          top: `${HEADER_HEIGHT}px`,
          width: '100%',
          height: `calc(100% - ${HEADER_HEIGHT}px)`,
          overflowX: 'hidden',
          overflowY: 'overlay',
        }}
      >
        <Router>
          <MeetingList path="all" />
          <MeetingPage path="meetingpage" />
        </Router>
      </div>
      <AppSnackbar />
    </LocationProvider>
  </Provider>
)

export default App
