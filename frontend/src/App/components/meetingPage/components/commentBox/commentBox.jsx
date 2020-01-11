// modules
import React from 'react'

// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {
  findWriter,
  findParentComment,
  findParentIndex,
} from './commentBox.helper'
import { TextField } from '@material-ui/core'

const CommentBox = ({
  comment,
  onDelete,
  meetingId,
  users,
  userId,
  updateComment,
  reply,
  comments,
  scrollId,
  onParentClick,
  isAdmin,
}) => {
  const [state, setState] = React.useState({
    isEdit: false,
    commentBody: comment.body,
    isReply: false,
    replyBody: '',
  })
  return (
    <div
      id={scrollId}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: '',
        width: '100%',
        margin: '5px',
        justifyContent: 'space-between',
      }}
    >
      {state.isEdit ? (
        <>
          <TextField
            type="text"
            style={{ minWidth: '400px' }}
            onChange={({ target: { value } }) => {
              setState({ ...state, commentBody: value })
            }}
            variant="outlined"
            value={state.commentBody}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setState({ ...state, isEdit: false })
              updateComment({ meetingId, comment: state.commentBody })
            }}
          >
            <img src="/done.svg" alt="delete" />
          </Button>
        </>
      ) : (
        <div style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid black',
              marginRight: `20px`,
              marginBottom: '30px',
            }}
          >
            {comment.depth > 1 && (
              <div
                onClick={() =>
                  onParentClick(findParentIndex(comment, comments))
                }
                style={{ background: 'wheat' }}
              >
                <Typography style={{ width: '50%', direction: 'ltr' }}>
                  {findParentComment(comment, comments)}
                </Typography>
              </div>
            )}
            <div>
              <Typography style={{ width: '80%', direction: 'ltr' }}>
                {comment.body}
                {'    '}
                {findWriter(comment, users)}
              </Typography>

              {(isAdmin || comment.writerId === userId) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    onDelete({ commentId: comment._id, meetingId, isAdmin })
                  }
                >
                  <img src="/delete.svg" alt="delete" />
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={() => setState({ ...state, isReply: !state.isReply })}
              >
                <img src="/reply.svg" alt="reply" />
              </Button>

              {comment.writerId === userId && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setState({ ...state, isEdit: !state.isEdit })}
                >
                  <img src="/edit.svg" alt="edit" />
                </Button>
              )}
            </div>
            {state.isReply && (
              <div>
                <TextField
                  type="text"
                  style={{ minWidth: '400px' }}
                  onChange={({ target: { value } }) => {
                    setState({ ...state, replyBody: value })
                  }}
                  variant="outlined"
                  value={state.replyBody}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setState({ ...state, isReply: false })
                    reply({
                      meetingId,
                      comment: state.replyBody,
                      parentId: comment._id,
                      parentDepth: comment.depth,
                    })
                  }}
                >
                  <img src="/done.svg" alt="delete" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentBox
