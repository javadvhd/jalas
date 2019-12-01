import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const listBox = ({ meeting: { title, state, id, options }, onClick }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '50%',
      margin: 'auto',
      padding: '30px',
      border: '1px solid black',
    }}
    onClick={() => onClick({ id, options })}
  >
    <Typography>{state}</Typography>
    <Typography>{title}</Typography>
  </div>
)

export default listBox
