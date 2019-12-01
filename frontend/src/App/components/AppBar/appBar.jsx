// modules
import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// style
import './appBar.scss'

const AppBar = () => (
  <MuiAppBar position="static">
    <Toolbar dir="rtl">
      <div>سامانه جلس</div>
    </Toolbar>
  </MuiAppBar>
)

export default AppBar
