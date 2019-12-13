// setup
import { postRequest } from '../../setup/request'
import { getState } from '../../setup/redux'

export const saveAnalytics = data =>
  postRequest({
    dest: 'analytics',
    action: 'ANALYTICS_SAVE_DATA',
    payload: {
      data: {
        data,
        userId: getState().main.user.email,
      },
    },
  })
