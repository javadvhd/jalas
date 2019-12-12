// modules
import React from 'react'

// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const ParticipantBox = ({ email, onDelete, meetingId }) => (
  <div style={{}}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: '',
        // width: '80%',
        // margin: '20px auto 20px auto ',
        // padding: '40px',
        // border: '1px solid black',
      }}
    >
      <Typography>{email}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onDelete(email, meetingId)}
      >
        <img src="delete.svg" alt="" />
      </Button>
    </div>
  </div>
)

export default ParticipantBox
