// modules
import React from 'react'
// components
import OptionBox from '../optionBox/optionBox.container'
// materials
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const OptionList = ({ meeting, optionsRooms, selectedDate }) => (
  <div style={{ margin: '20px' }}>
    {/* {console.log('option ', option)} */}
    <div style={{ justifyContent: 'space-between', display: 'flex' }}>
      <Typography title="اطلاعات ایجاد بازه زمانی جدید" />
      <TextField
        id="date"
        label="تاریخ"
        type="date"
        defaultValue="2019-12-12"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={({ target: { value } }) => console.log(value)}
      />
      <TextField
        id="date"
        label="شروع"
        type="time"
        defaultValue="10:30"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={({ target: { value } }) => console.log(value)}
      />
      <TextField
        id="date"
        label="پایان"
        type="time"
        defaultValue="12:30"
        InputLabelProps={
          {
            //   shrink: true,
          }
        }
        onChange={({ target: { value } }) => console.log(value)}
      />

      <Button>
        <img src="add.svg" alt="" />
      </Button>
    </div>

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
      {meeting.options.map((option, index) => (
        <OptionBox
          key={index}
          option={{ ...option, ...optionsRooms[index] }}
          meetingId={meeting._id}
        />
      ))}
    </div>
  </div>
)

export default OptionList
