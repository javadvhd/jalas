// modules
import * as R from 'ramda'
import React, { useRef } from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MeetingBox from './components/meetingBox/meetingBox.container'

const MeetingPage = ({ meeting, optionsRooms }) => (
  //   console.log('meeting ', meeting) || (
  <div dir="rtl">
    <Typography>{meeting.title}</Typography>
    {meeting.options.map((option, index) => (
      <MeetingBox option={{ ...option, ...optionsRooms[index] }} />
    ))}
  </div>
)
//   )

export default MeetingPage
