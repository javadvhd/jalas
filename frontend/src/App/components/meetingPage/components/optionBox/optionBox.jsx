// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { getDate, getTime } from './optionBox.helper'
const MeetingBox = ({
  option,
  option: { start, end, agree, disagree, isOpen, rooms },
  onClick,
  onRoomClick,
  reserveStartTime,
  meetingIndex,
  onDelete,
  meetingId,
}) => (
  <div
    style={{
      width: '80%',
      margin: '10px auto 10px auto ',
      padding: '20px',
      border: '1px solid black',
    }}
  >
    {console.log('option ', option)}
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Typography>تاریخ:{getDate(new Date(start)).toString()}</Typography>
      <Typography>از:{getTime(new Date(start)).toString()}</Typography>
      <Typography>تا:{getTime(new Date(end)).toString()}</Typography>
      <Typography>موافق:{agree}</Typography>
      <Typography>مخالف:{disagree}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onClick(option)}
      >
        {isOpen ? 'بستن' : 'انتخاب'}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onDelete({ meetingIndex, meetingId })}
      >
        <img src="delete.svg" alt="" />
      </Button>
    </div>
    {isOpen && (
      <div>
        {rooms.length &&
          rooms.map((room, index) => (
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
