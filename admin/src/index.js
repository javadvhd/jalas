// modules
import React from 'react'
import ReactDOM from 'react-dom'
import { navigate } from '@reach/router'
// component
import App from './App/main/app.jsx'
// styles
import './index.css'
import './setup/fonts/fonts.scss'

navigate('/login')
ReactDOM.render(<App />, document.getElementById('root'))
