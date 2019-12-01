import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/main/app.jsx'
// styles
import './index.css'
import './setup/fonts/fonts.scss'
// requests
import loadData from './helpers/weblite.api'

ReactDOM.render(<App />, document.getElementById('root'))
loadData()
