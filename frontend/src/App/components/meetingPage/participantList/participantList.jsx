// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'

// materials
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

const OptionList = ({}) => (
  <div style={{}}>
    {/* {console.log('option ', option)} */}
    <Input />

    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: '80%',
        // margin: '20px auto 20px auto ',
        // padding: '40px',
        // border: '1px solid black',
      }}
    >
      {meeting.participants.map((participant, index) => (
        <Participant
          key={index}
          participant={participant}
          onDelete={onParticipantDelete}
        />
      ))}
    </div>
  </div>
)

export default OptionList
