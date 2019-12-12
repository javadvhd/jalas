import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const listBox = ({
  meeting: { title, status, _id, options },
  start,
  end,
  room,
  onClick,
}) => (
  <div
    style={{
      width: '80%',
      margin: '20px',
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
        onClick={() => onClick({ _id, options })}
      >
        انتخاب
      </Button>
      <Typography dir="rtl">{status}</Typography>
      <Typography>{title}</Typography>
    </div>
    {status === 'submitted' && (
      <div style={{ direction: 'ltr' }}>
        <Typography dir="ltr">{room}</Typography>
        <Typography dir="ltr">{start}</Typography>
        <Typography dir="ltr">{end}</Typography>
      </div>
    )}
  </div>
)

export default listBox
