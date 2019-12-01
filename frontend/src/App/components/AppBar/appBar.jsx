// modules
import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// style
import './appBar.scss'

const AppBar = () => (
  <MuiAppBar position="static">
    <Toolbar className="c--appBar_toolbar">
      <div className="c--appBar_typo">جلسه 1</div>
    </Toolbar>
  </MuiAppBar>
)

export default AppBar
