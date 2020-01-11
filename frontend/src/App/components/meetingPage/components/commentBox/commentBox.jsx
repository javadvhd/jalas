// modules
import React from 'react'

// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { findWriter } from './commentBox.helper'

const CommentBox = ({ comment, onDelete, meetingId, users }) => (
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
      {'    '}
      {findWriter(comment, users)}
    </Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={() => onDelete({ commentId: comment._id, meetingId })}
    >
      <img src="/delete.svg" alt="delete" />
    </Button>
  </div>
)

export default CommentBox
