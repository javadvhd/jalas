// modules
import * as R from 'ramda'
// actions
import { SET_USER_DATA } from './user.actions'

const initialState = {
  username: 'javadvhd',
  email: 'vahedi.r46@gmail.com',
  notificationItems: [
    {
      title: 'دریافت ایمیل در صورت حذف یکی از بازه های زمانی',
      selected: false,
    },
    {
      title: 'دریافت ایمیل در صورت اضافه شدن یکی از بازه های زمانی',
      selected: false,
    },
    { title: 'دریافت ایمیل در صورت حذف شدن از لیست افراد', selected: false },
  ],
}

const reducers = {
  [SET_USER_DATA]: (state, data) => ({ ...state, ...data }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
