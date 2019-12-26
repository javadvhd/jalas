import { filter } from 'ramda'
const isMyPoll = meeting => meeting.status === 'poll'
const isMyMeeting = meeting => meeting.status === 'meeting'

export const filteredList = (meetings, mode) => {
  if (mode === 'all') return meetings
  if (mode === 'myPolls') return filter(isMyPoll, meetings)
  if (mode === 'myMeetings') return filter(isMyMeeting, meetings)
}

export const convertModeToPersian = mode => {
  if (mode === 'all') return 'جلسات و نظرسنجی ها'
  if (mode === 'myPolls') return 'لیست نظرسنجی ها'
  if (mode === 'myMeetings') return 'لیست جلسات'
}
