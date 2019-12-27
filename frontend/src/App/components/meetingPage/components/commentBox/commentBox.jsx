// modules
import React from 'react'

// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const CommentBox = ({ comment, onDelete, meetingId }) => (
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
      {comment.body}
    </Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={() => onDelete({ comment, meetingId })}
    >
      <img src="/delete.svg" alt="delete" />
    </Button>
  </div>
)

export default CommentBox
