// modules
import React from 'react'

// components
import Comment from '../commentBox/commentBox.container'
// materials
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Divider } from '@material-ui/core'
import { reqGetCommentsByMeetingId } from '../../../../../logic/comment/comment.request'

const CommentList = ({
  meetingId,
  onAdd,
  comments,
  updateComment,
  isAdmin,
}) => {
  const [comment, setComment] = React.useState('')

  const scrollToComment = id =>
    document
      .getElementById(id)
      .scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <>
      <Divider />
      <div style={{ margin: '20px', marginTop: '50px' }}>
        <Typography>کامنت جدید</Typography>
        <div style={{ display: 'flex' }}>
          <TextField
            type="text"
            style={{ minWidth: '400px' }}
            onChange={({ target: { value } }) => setComment(value)}
            variant="outlined"
          />
          <Button onClick={() => onAdd({ meetingId, comment })}>
            <img src="/add.svg" alt="add" />
          </Button>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateComment(meetingId)}
        >
          مشاهده ی لیست کامنت ها
        </Button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '40px auto 20px auto ',
          }}
        >
          {comments.map((comment, index) => (
            <Comment
              scrollId={index}
              onParentClick={scrollToComment}
              key={index}
              comment={comment}
              comments={comments}
              isAdmin={isAdmin}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default CommentList
