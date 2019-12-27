// setup
import { getState } from '../../setup/redux'
import { create } from 'axios'
const { post } = create({
  baseURL: `http://localhost:${8085}`,
})

export const saveAnalytics = data =>
  post('/', {
    dest: 'analytics',
    action: 'ANALYTICS_SAVE_DATA',
    payload: {
      data: {
        ...data,
        userId: getState().main.user._id,
      },
    },
  })
