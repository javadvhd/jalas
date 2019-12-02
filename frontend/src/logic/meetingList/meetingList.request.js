// modules
import * as R from 'ramda'
// setup
import { postRequest } from '../../setup/request'
import errorCodes from '../../setup/errorCodes'
// views
import {} from ''
// actions
import {} from ''

// این به سروس میتینگ میره و جلسه رو نهایی میکنه و اتاق و گزینه ی نهایی شده رو  ثبت میکنه
// یه اسم واسه تابع انتخاب کن

export const foooooooooo = ({ id, selectedOption, room }) =>
  postRequest({
    dest: 'meeting',
    action: 'MEETING_SET_ROOM_AND_SELECTED_OPTION',
    payload: {
      id,
      selectedOption,
      room,
    },
  })
    .then()
    .catch()
