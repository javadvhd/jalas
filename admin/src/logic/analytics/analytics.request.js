// setup
import { getState } from '../../setup/redux'
import { getRequest } from '../../setup/request'
import { dispatchSetData } from '../../App/main/app.action'

export const reqGetAnalytics = () =>
  Promise.all([
    getRequest({
      dest: 'analytics',
      action: 'ANALYTICS_CREATING_MEETING_AVERAGE_TIME',
      payload: {},
    }).then(res => res.data),
    getRequest({
      dest: 'analytics',
      action: 'ANALYTICS_NUMBER_OF_RESERVED_ROOMS',
      payload: {},
    }).then(res => res.data),
    getRequest({
      dest: 'analytics',
      action: 'ANALYTICS_THROUGHPUT',
      payload: {},
    }).then(res => res.data),
    getRequest({
      dest: 'analytics',
      action: 'ANALYTICS_AVERAGE_RESPONSE_TIME',
      payload: {},
    }).then(res => res.data),
  ])
    .then(res => {
      dispatchSetData('creatingAverageTime', res[0])
      dispatchSetData('numberOfReservedRoom', res[1])
      dispatchSetData('throughput', res[2])
      dispatchSetData('averageResponseTime', res[3])
    })
    .catch(console.log)
