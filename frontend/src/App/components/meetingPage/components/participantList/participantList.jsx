// modules
import React from 'react'

// components
import Participant from '../participantBox/participantBox.container'
// materials
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const ParticipantList = ({ meeting, onAdd }) => {
  const [email, setEmail] = React.useState('')

  return (
    <div style={{ margin: '20px', marginTop: '50px' }}>
      {/* {console.log('option ', option)} */}
      <Typography>آدرس ایمیل جدید</Typography>
      <div style={{ display: 'flex' }}>
        <TextField
          type="email"
          style={{ minWidth: '400px' }}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <Button
          onClick={() => onAdd({ meetingId: meeting._id, participant: email })}
        >
          <img src="add.svg" alt="" />
        </Button>
      </div>
      <Typography variant="p" title="wow">
        لیست ایمیل ها
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          margin: '40px auto 20px auto ',
        }}
      >
        {meeting.participants.map((participant, index) => (
          <Participant
            key={index}
            participant={participant}
            meetingId={meeting._id}
          />
        ))}
      </div>
    </div>
  )
}

export default ParticipantList
