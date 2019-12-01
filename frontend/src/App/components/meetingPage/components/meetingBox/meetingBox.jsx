// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'

const MeetingBox = ({
  option,
  option: { id, start, end, agree, disagree, abstain, isOpen, rooms },
  onClick,
}) => (
  <div>
    {/* {console.log('option ', option)} */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        margin: '20px auto 20px auto ',
        padding: '40px',
        border: '1px solid black',
      }}
      onClick={() => onClick(isOpen, id, start, end)}
    >
      <Typography>از:{start}</Typography>
      <Typography>تا:{end}</Typography>
      <Typography>موافق:{agree}</Typography>
      <Typography>مخالف:{disagree}</Typography>
      <Typography>ممتنع:{abstain}</Typography>
    </div>
    {isOpen && (
      <div>
        {rooms.map(room => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              border: '1px solid black',
            }}
          >
            <Typography>{room}</Typography>
            <Button>choose</Button>
          </div>
        ))}
      </div>
    )}
  </div>
)

export default MeetingBox
