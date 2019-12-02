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
  onRoomClick,
  reserveStartTime,
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
    >
      <Typography>از:{start}</Typography>
      <Typography>تا:{end}</Typography>
      <Typography>موافق:{agree}</Typography>
      <Typography>مخالف:{disagree}</Typography>
      <Typography>ممتنع:{abstain}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onClick(isOpen, id, start, end)}
      >
        انتخاب
      </Button>
    </div>
    {isOpen && (
      <div>
        {rooms.map((room, index) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              border: '1px solid black',
            }}
            key={index}
          >
            <Typography>{room}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                onRoomClick({ room, start, end, reserveStartTime })
              }
            >
              انتخاب
            </Button>
          </div>
        ))}
      </div>
    )}
  </div>
)

export default MeetingBox
