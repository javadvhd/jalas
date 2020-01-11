// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { getDate, getTime } from './optionBox.helper'
const OptionBox = ({
  option,
  option: { start, end, agree, disagree, agreeIfNeeded, isOpen, rooms },
  onClick,
  onRoomClick,
  reserveStartTime,
  optionIndex,
  onDelete,
  meetingId,
  isAdmin,
  onSubmitVote,
  mode,
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
        <Typography>موافق در صورت نیاز:{agreeIfNeeded}</Typography>
      </div>
      <div style={{ margin: '10px 0px 10px auto' }}>
        {isAdmin && mode === 'poll' && (
          <Button
            variant="contained"
            onClick={() => onClick(option, optionIndex)}
          >
            {isOpen ? 'بستن' : 'انتخاب'}
          </Button>
        )}
        {mode === 'creatingPoll' && (
          <Button
            variant="contained"
            onClick={() => onDelete({ optionIndex, meetingId })}
          >
            <img src="/delete.svg" alt="delete" />
          </Button>
        )}
      </div>
      {mode === 'poll' ? (
        <div>
          <Button
            variant="contained"
            onClick={() =>
              onSubmitVote({ meetingId, vote: 'agree', optionIndex })
            }
          >
            <img src="/agree.svg" alt="agree" />
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              onSubmitVote({ meetingId, vote: 'disagree', optionIndex })
            }
          >
            <img src="/disagree.svg" alt="disagree" />
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              onSubmitVote({ meetingId, vote: 'agreeIfNeeded', optionIndex })
            }
          >
            agree if needed
          </Button>
        </div>
      ) : null}
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
                onClick={() =>
                  onRoomClick({ room, option, reserveStartTime, optionIndex })
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

export default OptionBox
