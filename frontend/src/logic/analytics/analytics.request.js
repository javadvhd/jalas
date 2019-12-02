// setup
import { postRequest } from '../../setup/request'

import { userIdView } from '../user/user.reducer'

export const saveAnalytics = data =>
  postRequest({
    dest: 'analytics',
    action: 'ANALYTICS_SAVE_DATA',
    payload: {
      data: {
        data,
        userId: userIdView(),
      },
    },
  })
