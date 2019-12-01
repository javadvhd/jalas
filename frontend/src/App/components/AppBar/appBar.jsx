// modules
import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// style
import './appBar.scss'

const AppBar = () => (
  <MuiAppBar position="static">
    <Toolbar className="c--appBar_toolbar">
      <img alt="appbar" src="logo.svg" />

      <div className="c--appBar_typo">
        <span className="c--appBar_ticket iranyekan">TICKET</span>
        <span className="c--appBar_title iranyekan">ســــــــــوال</span>
      </div>
    </Toolbar>
  </MuiAppBar>
)

export default AppBar
