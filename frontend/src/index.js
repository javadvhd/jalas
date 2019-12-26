// modules
import React from 'react'
import ReactDOM from 'react-dom'
import { navigate } from '@reach/router'
// component
import App from './App/main/app.jsx'
// styles
import './index.css'
import './setup/fonts/fonts.scss'
import { reqGetUserMeetings } from './logic/meetingList/meetingList.request.js'

navigate('/emailEntrance')
ReactDOM.render(<App />, document.getElementById('root'))
reqGetUserMeetings()
