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
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => onClick({ id, options })}
      >
        انتخاب
      </Button>
      <Typography dir="rtl">
        {status === 'poll-done' ? 'رزرو نشده' : status}{' '}
      </Typography>
      <Typography>{title}</Typography>
    </div>
    {status === 'submitted' && (
      <div style={{ direction: 'rtl' }}>
        <Typography>اتاق:{room}</Typography>
        <Typography>از:{start}</Typography>
        <Typography>تا:{end}</Typography>
      </div>
    )}
  </div>
)

export default listBox
