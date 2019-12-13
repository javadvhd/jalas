// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { getDate, getTime } from './optionBox.helper'
const OptionBox = ({
  option,
  option: { start, end, agree, disagree, isOpen, rooms },
  onClick,
  onRoomClick,
  reserveStartTime,
  optionIndex,
  onDelete,
  meetingId,
  isAdmin,
  onSubmitVote,
}) => (
  <div
    style={{
      width: '80%',
      margin: '10px auto 10px auto ',
      padding: '20px',
      border: '1px solid black',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
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
      </div>
      <div style={{ margin: '10px 0px 10px auto' }}>
        {isAdmin && (
          <Button
            variant="contained"
            onClick={() => onClick(option, optionIndex)}
          >
            {isOpen ? 'بستن' : 'انتخاب'}
          </Button>
        )}
        {isAdmin && (
          <Button
            variant="contained"
            onClick={() => onDelete({ optionIndex, meetingId })}
          >
            <img src="delete.svg" alt="" />
          </Button>
        )}
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => onSubmitVote({ meetingId, vote: 'agree' })}
        >
          <img src="agree.svg" alt="" />
        </Button>

        <Button
          variant="contained"
          onClick={() => onSubmitVote({ meetingId, vote: 'disagree' })}
        >
          <img src="disagree.svg" alt="" />
        </Button>
      </div>
    </div>
    {isOpen && isAdmin && (
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

export default OptionBox
