// modules
import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
// style
import './appBar.scss'

const AppBar = ({ openNotifPanel }) => (
  <MuiAppBar position="static">
    <Toolbar dir="rtl">
      <div>سامانه جلس</div>
      <Button onClick={openNotifPanel}>
        <img src="notifications.svg" alt="" />
      </Button>
    </Toolbar>
  </MuiAppBar>
)

export default AppBar
