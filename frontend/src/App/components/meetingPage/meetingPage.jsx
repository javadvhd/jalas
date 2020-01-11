// modules
import React, { Component, Fragment } from 'react'
import * as R from 'ramda'
import moment from 'moment'
// components
import Typography from '@material-ui/core/Typography'
import ParticipantList from './components/participantList/participantList.container'
import OptionList from './components/optionList/optionList.container'
import CommentList from './components/commentList/commentList.container.js'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import TitleBox from './components/titleBox/titleBox'

// action
import { dispatchSetMeetingPageData } from './meetingPage.actions'
import { Paper } from '@material-ui/core'

class MeetingPage extends Component {
  componentDidMount() {
    const { meetingId, meeting } = this.props
    dispatchSetMeetingPageData('meetingId', meetingId)
    dispatchSetMeetingPageData(
      'optionsRooms',
      R.map(() => ({ isOpen: false, rooms: [] }), meeting.options),
    )
    dispatchSetMeetingPageData('startTime', new Date())
  }

  render() {
    const { meeting, onSave, onTitleChange, isAdmin, goToList } = this.props
    return (
      <div dir="rtl" style={{ margin: ' 10px 20px auto 20px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '40px',
          }}
        >
          <Button variant="contained" color="primary" onClick={goToList}>
            مشاهده لیست جلسات
          </Button>
          {meeting.status === 'creatingPoll' && (
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onSave({ meeting })}
              >
                ساختن نظر سنجی
              </Button>
            </div>
          )}
        </div>

        {meeting.status === 'meeting' ? (
          <Paper elevation={2}>
            <div style={{ display: 'flex' }}>
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
                  defaultValue={moment(
                    meeting.options[meeting.selectedOption].start,
                  ).format('YYYY-MM-DD')}
                  disabled
                />
                <TextField
                  id="date"
                  label="شروع"
                  type="time"
                  defaultValue={moment(
                    meeting.options[meeting.selectedOption].start,
                  ).format('HH:mm')}
                  disabled
                />
                <TextField
                  id="date"
                  label="پایان"
                  type="time"
                  defaultValue={moment(
                    meeting.options[meeting.selectedOption].end,
                  ).format('HH:mm')}
                  disabled
                />
              </div>
            </div>
            <Typography>{meeting.room}:اتاق</Typography>
          </Paper>
        ) : (
          <Fragment>
            <TitleBox
              title={meeting.title}
              onTitleChange={onTitleChange}
              mode={meeting.status}
              meetingId={meeting._id}
            />

            <OptionList
              meeting={meeting}
              isAdmin={isAdmin}
              mode={meeting.status}
            />

            {meeting.status !== 'meeting' && isAdmin && (
              <ParticipantList meeting={meeting} />
            )}

            {meeting.status === 'poll' && <CommentList />}
          </Fragment>
        )}
      </div>
    )
  }
}

export default MeetingPage
