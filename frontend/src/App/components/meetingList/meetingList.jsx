import React from 'react'
import ListBox from './components/listBox/listBox.container'
import Button from '@material-ui/core/Button'

const MeetingList = ({ meetingList, clickListBox, createNewMeeting }) => (
  <>
    <div style={{ top: '120px' }}>
      <div style={{ direction: 'rtl', margin: '10px' }}>
        <Button variant="contained" color="primary" onClick={createNewMeeting}>
          ایجاد جلسه جدید
        </Button>
      </div>
      {meetingList.map((meeting, index) => (
        <ListBox key={index} meeting={meeting} onClick={clickListBox} />
      ))}
    </div>
  </>
)

export default MeetingList
