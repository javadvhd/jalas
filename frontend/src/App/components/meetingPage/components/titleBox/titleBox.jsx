// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const TitleBox = ({ title, meetingId, onTitleChange, mode }) => (
  <div dir="rtl" style={{ margin: ' 10px 20px auto 20px' }}>
    {mode === 'creatingPole' ? (
      <TextField
        label="عنوان جلسه"
        value={title}
        variant="outlined"
        onChange={({ target: { value } }) =>
          onTitleChange({ title: value, meetingId })
        }
      />
    ) : (
      <Typography variant="h5">{title}</Typography>
    )}
  </div>
)

export default TitleBox
