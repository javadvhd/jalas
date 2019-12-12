// modules
import React from 'react'

// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const ParticipantBox = ({ participant, onDelete, meetingId }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: '',
      width: '100%',
      margin: '5px',
      justifyContent: 'space-between',
    }}
  >
    <Typography style={{ width: '80%', direction: 'ltr' }}>
      {participant}
    </Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={() => onDelete({ participant, meetingId })}
    >
      <img src="delete.svg" alt="" />
    </Button>
  </div>
)

export default ParticipantBox
