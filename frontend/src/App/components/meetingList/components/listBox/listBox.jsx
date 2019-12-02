import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const listBox = ({
  meeting: { title, status, id, options, start, end, room },
  onClick,
}) => (
  <div
    style={{
      width: '50%',
      margin: 'auto',
      padding: '30px',
      border: '1px solid black',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      onClick={() => onClick({ id, options })}
    >
      <Typography>{status}</Typography>
      <Typography>{title}</Typography>
    </div>
    {status === 'submitted' && (
      <div style={{ direction: 'rtl' }}>
        <Typography>اتاق:{room}</Typography>
      </div>
    )}
  </div>
)

export default listBox
