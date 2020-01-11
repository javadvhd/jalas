// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const ParticipantBox = ({ participant, onDelete, meetingId, creatorId }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      margin: '5px',
      justifyContent: 'space-between',
    }}
  >
    <Typography style={{ width: '80%', direction: 'ltr' }}>
      {participant}
    </Typography>
    {creatorId !== participant && (
      <Button
        variant="contained"
        color="primary"
        onClick={() => onDelete({ participant, meetingId })}
      >
        <img src="/delete.svg" alt="delete" />
      </Button>
    )}
  </div>
)

export default ParticipantBox
