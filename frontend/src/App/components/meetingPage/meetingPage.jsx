// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import ParticipantList from './components/participantList/participantList.container'
import OptionList from './components/optionList/optionList.container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const MeetingPage = ({ meeting, onSave, onTitleChange }) => (
  <div dir="rtl" style={{ margin: ' 10px 20px auto 20px' }}>
    <TextField
      label="عنوان جلسه"
      value={meeting.title}
      variant="outlined"
      onChange={({ target: { value } }) =>
        onTitleChange({ title: value, meetingId: meeting._id })
      }
    />

    <OptionList meeting={meeting} />

    <ParticipantList meeting={meeting} />

    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSave({ meeting })}
      >
        ذخیره ی اطلاعات جلسه
      </Button>
    </div>
  </div>
)

//   )

export default MeetingPage
