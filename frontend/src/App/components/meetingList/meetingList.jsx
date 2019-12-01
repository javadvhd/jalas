import React from 'react'
import ListBox from './components/listBox/listBox.container'

const MeetingList = ({ meetingList, clickListBox }) =>
  console.log('meetingList: ', meetingList) ||
  meetingList.map(meeting => (
    <ListBox meeting={meeting} onClick={clickListBox} />
  ))

export default MeetingList
