// modules
import React from 'react'
import { LocationProvider, Router } from '@reach/router'
import { Provider } from 'react-redux'
// components
import Tabs from '../components/Tabs/tabs'
import AppBar from '../components/AppBar/appBar'
import AllIssues from '../components/IssueList/allIssues.container'
import MyIssues from '../components/IssueList/myIssues.container'
import IssuePage from '../components/IssuePage/issuePage.container'
import NewIssue from '../components/NewIssue/newIssue.container'
import AppSnackbar from '../components/snackbar/snackbar.container'
// styles
import './app.css'
// setup
import store from '../../setup/redux'
import { history } from '../../setup/history.js'
import { HEADER_HEIGHT } from '../../helpers/sizing'

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
          <AllIssues path="all" />
          <MyIssues path="mine" />
          <NewIssue path="new" />
          <IssuePage path="issue" />
        </Router>
      </div>
      <AppSnackbar />
    </LocationProvider>
  </Provider>
)

export default App
