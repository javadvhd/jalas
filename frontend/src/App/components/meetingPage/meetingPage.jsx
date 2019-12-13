// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import ParticipantList from './components/participantList/participantList.container'
import OptionList from './components/optionList/optionList.container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import TitleBox from './components/titleBox/titleBox'

const MeetingPage = ({ meeting, onSave, onTitleChange, isAdmin, goToList }) => (
  <div dir="rtl" style={{ margin: ' 10px 20px auto 20px' }}>
    <Button variant="contained" color="primary" onClick={() => goToList('all')}>
      مشاهده لیست جلسات
    </Button>

    <TitleBox
      title={meeting.title}
      onTitleChange={onTitleChange}
      isAdmin={isAdmin}
      meetingId={meeting._id}
    />

    <OptionList meeting={meeting} isAdmin={isAdmin} />

    {isAdmin && <ParticipantList meeting={meeting} />}

    {isAdmin && (
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
    )}
  </div>
)

//   )

export default MeetingPage
