// modules
import React from 'react'
// components
import OptionBox from '../optionBox/optionBox.container'
// materials
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Divider } from '@material-ui/core'

const OptionList = ({
  meeting,
  optionsRooms,
  selectedDate,
  addOption,
  isAdmin,
  mode,
}) => {
  const [state, setState] = React.useState({
    start: '10:30',
    end: '12:30',
    date: '2019-12-12',
  })

  const handleOption = (type, value) => setState({ ...state, [type]: value })

  return (
    <>
      <Divider />
      <div style={{ margin: '20px  auto 20px auto' }}>
        {/* {console.log('option ', option)} */}
        {(mode === 'poll' || mode === 'creatingPoll') && isAdmin && (
          <>
            <Typography variant="p" title="wow">
              ایجاد بازه زمانی جدید
            </Typography>
            <div
              style={{
                marginTop: '20px',
                justifyContent: 'space-between',
                display: 'flex',
                marginBottom: '40px',
              }}
            >
              <TextField
                id="date"
                label="تاریخ"
                type="date"
                defaultValue="2019-12-27"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={({ target: { value } }) =>
                  handleOption('date', value)
                }
              />
              <TextField
                id="date"
                label="شروع"
                type="time"
                defaultValue="10:30"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={({ target: { value } }) =>
                  handleOption('start', value)
                }
              />
              <TextField
                id="date"
                label="پایان"
                type="time"
                defaultValue="12:30"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={({ target: { value } }) => handleOption('end', value)}
              />

              <Button
                onClick={() =>
                  addOption({
                    option: state,
                    meetingId: meeting._id,
                  })
                }
              >
                <img src="/add.svg" alt="add" />
              </Button>
            </div>
          </>
        )}
        <Typography variant="p" title="wow">
          لیست ساعت ها
        </Typography>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            // width: '80%',
            margin: 'auto auto 20px auto ',
            // padding: '40px',
            // border: '1px solid black',
          }}
        >
          {meeting.options.map((option, index) => (
            <OptionBox
              key={index}
              optionIndex={index}
              option={{ ...option, ...optionsRooms[index] }}
              meetingId={meeting._id}
              isAdmin={isAdmin}
              mode={mode}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default OptionList
