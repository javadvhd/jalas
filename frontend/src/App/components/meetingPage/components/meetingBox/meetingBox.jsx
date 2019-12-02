// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const MeetingBox = ({
  option,
  option: { start, end, agree, disagree, abstain, isOpen, rooms },
  onClick,
  onRoomClick,
  reserveStartTime,
}) => (
  <div
    style={{
      width: '80%',
      margin: '20px auto 20px auto ',
      padding: '40px',
      border: '1px solid black',
    }}
  >
    {/* {console.log('option ', option)} */}
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
      <Typography>از:{new Date(start).toLocaleString()}</Typography>
      <Typography>تا:{new Date(end).toLocaleString()}</Typography>
      <Typography>موافق:{agree}</Typography>
      <Typography>مخالف:{disagree}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onClick(option)}
      >
        {isOpen ? 'بستن' : 'انتخاب'}
      </Button>
    </div>
    {isOpen && (
      <div>
        {rooms.map((room, index) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '10px',
            }}
            key={index}
          >
            <Typography>{room}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onRoomClick({ room, option, reserveStartTime })}
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
