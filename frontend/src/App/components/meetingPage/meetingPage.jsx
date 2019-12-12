// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import OptionBox from './components/optionBox/optionBox.container'
import Participant from './components/participantBox/participantBox.container'
import OptionList from './components/optionList/optionList.container'

const MeetingPage = ({ meeting, optionsRooms, onParticipantDelete }) =>
  console.log('meeting ', meeting) || (
    <div dir="rtl">
      <Typography>{meeting.title}</Typography>

      {/* optionList */}
      <OptionList meeting={meeting} />

      {/* add new participant */}
      {/* <ParticipantList /> */}
    </div>
  )
//   )

export default MeetingPage
