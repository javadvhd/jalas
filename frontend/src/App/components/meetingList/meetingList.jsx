import React from 'react'
import ListBox from './components/listBox/listBox.container'

const MeetingList = ({ meetingList, clickListBox }) =>
  meetingList.map((meeting, index) => (
    <ListBox key={index} meeting={meeting} onClick={clickListBox} />
  ))

export default MeetingList
