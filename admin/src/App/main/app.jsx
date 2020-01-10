// modules
import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
// components
import AppBar from '../components/appBar/appBar.container'
import AdminPanel from '../components/adminPanel/adminPanel.container'
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
      <AdminPanel path="all" />
      <Login path="login" />
      <Redirect default to="/all" />
    </Router>
  </Provider>
)

export default App
