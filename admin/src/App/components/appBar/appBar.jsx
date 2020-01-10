// modules
import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
// style
import './appBar.scss'

const AppBar = ({}) => (
  <MuiAppBar position="static">
    <Toolbar dir="rtl">
      <div>پنل ادمین</div>
    </Toolbar>
  </MuiAppBar>
)

export default AppBar
