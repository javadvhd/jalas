import React from 'react'
import ListBox from './components/listBox/listBox.container'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'

const MeetingList = ({
  meetingList,
  clickListBox,
  createNewMeeting,
  changeView,
  mode,
}) => (
  <>
    <div style={{ top: '120px' }}>
      <div style={{ direction: 'rtl', margin: '10px' }}>
        <Button variant="contained" color="primary" onClick={createNewMeeting}>
          ایجاد نظرسنجی جدید
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeView('all')}
        >
          همه جلسات و نظرسنجی ها
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeView('myMeetings')}
        >
          جلسات من
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeView('myPolls')}
        >
          نظرسنجی های من
        </Button>
      </div>
      <Typography dir="rtl">{mode}</Typography>
      {meetingList &&
        meetingList.map((meeting, index) => (
          <ListBox key={index} meeting={meeting} onClick={clickListBox} />
        ))}
    </div>
  </>
)

export default MeetingList
