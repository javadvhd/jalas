// module
import * as R from 'ramda'
// setup
import { getState } from '../../setup/redux'

const initialState = {
  creatingAverageTime: null,
  numberOfReservedRoom: null,
  throughput: null,
  averageResponseTime: null,
}

export const creatingAverageTimeView = () =>
  R.path(['app', 'creatingAverageTime'])(getState())

export const numberOfReservedRoomView = () =>
  R.path(['app', 'numberOfReservedRoom'])(getState())

export const throughputView = () => R.path(['app', 'throughput'])(getState())

export const averageResponseTimeView = () =>
  R.path(['app', 'averageResponseTime'])(getState())

const reducers = {
  SET_DATA: (state, { title, value }) => ({
    ...state,
    [title]: value,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
